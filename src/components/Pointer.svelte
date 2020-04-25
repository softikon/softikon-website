<script context="module">
  import { readable, get, writable, derived } from 'svelte/store' 

  // The state is inititally null (we know nothing about the cursor capabilities during onload)
  const state = readable(null, set => {
    const mouseMoveHandler = e => set({
      x: e.clientX,
      y: e.clientY
    })

    const scrollHandler = e => set({
      ...get(state)
    })

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', mouseMoveHandler)
      window.addEventListener('scroll', scrollHandler)
    }

    // Cleanup. But this unsubscribe method is probably never been called due to the context="module"
    return () => {
      if (typeof window !== 'undefined') {
         window.removeEventListener('mousemove', mouseMoveHandler)
         window.removeEventListener('scroll', scrollHandler)
      }
    }
  })

  const easeIn  = p => t => Math.pow(t, p)
  const easeOut = p => t => (1 - Math.abs(Math.pow(t-1, p)))
  const easeInOut = p => t => t<.5 ? easeIn(p)(t*2)/2 : easeOut(p)(t*2 - 1)/2+0.5

</script>

<script>
  import { onMount } from 'svelte'

  export let debug = false
  export let className
  export let customScrollElement = null

  let rootEl, cursorEl, target, cursor, pointer

  $: setClasses(target)

  const classes = writable([])

  const scrollTop = () => customScrollElement ? document.querySelector(customScrollElement).scrollTop : window.pageYOffset
  const scrollLeft = () => customScrollElement ? document.querySelector(customScrollElement).scrollLeft : window.pageXOffset

  const setTarget = coords => {
    if (!coords) return
    const { x, y } = coords
    if (!x || !y) return
    const t = document.elementFromPoint(x, y)
    if (t !== target) target = t
  }

  const setClasses = target => {
    const c = []
    if (!target || !target.parentElement) return
    if (Array.from(target.parentElement.querySelectorAll('a, a *')).some(e => e === target)) {
      c.push('pointer__link')
    }

    if (Array.from(target.parentElement.querySelectorAll('[pointer="play"]')).some(e => e === target)) {
      c.push('pointer__play')
    }

    classes.set(c)
  }

  onMount(() => {
    cursor = derived(state, $coords => $coords && ({
      x: $coords.x - rootEl.offsetParent.offsetLeft + scrollLeft(),
      y: $coords.y - rootEl.offsetParent.offsetTop + scrollTop(),
    }))

    let globalObj

    pointer = derived(cursor, ($cursor, set) => {
      let duration = 225
      let obj = globalObj = new Object()

      const animate = () => window.requestAnimationFrame(start => {
        const pointerState = get(pointer) || {
          x: $cursor.x,
          y: $cursor.y
        }

        const distX = $cursor.x - pointerState.x
        const distY = $cursor.y - pointerState.y

        const tick = ms => window.requestAnimationFrame((curr) => {
          const delta = curr - ms
          const t = easeOut(3)((delta / duration) > 1 ? 1 : (delta / duration))

          const newPointerState = { x: pointerState.x + t * distX, y: pointerState.y + t * distY }
          set(newPointerState)
          if (delta < duration && globalObj === obj) tick(ms)
        })

        tick(start)
      })

      $cursor && animate()
    })
    return state.subscribe(setTarget)
  })
</script>

<div bind:this={rootEl} class={className}>
{#if $pointer}
  <div bind:this={cursorEl} class="cursor events-none {$classes.join(' ')}">
    <div class="pointer pointer-base" style="transform: translate(-50%, -50%) translate({$cursor.x}px, {$cursor.y}px);"></div>
    <div class="pointer pointer-outline" style="transform: translate(-50%, -50%) translate({$pointer.x}px, {$pointer.y}px);"></div>
  </div>

  {#if debug}
    <div class="helper">
      <div class="mouse">{$cursor.x}x{$cursor.y}</div>
      <div class="pointer">{$pointer.x}x{$pointer.y}</div>
    </div>
  {/if}
{/if}
</div>

<style>
.cursor {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.events-none {
  pointer-events: none;
}

.pointer {
  position: absolute;
  transition-duration: 250ms;
  transition-property: width, height, clip-path, background-color;
  z-index: 10;
}

.pointer-base {
  width: 0.25rem;
  height: 0.25rem;
}

.pointer-outline {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border-width: 0;
  background-color: aquamarine;
}

:global(.c2 .pointer-outline) {
  background-color: darkgoldenrod !important;
}

:global(.c2 .pointer__play .pointer-outline) {
  background-color: #1a146f !important;
  opacity: 0.9;
  mix-blend-mode: multiply;
}

.pointer__link .pointer-outline {
  width: 64px;
  height: 64px;
}

.pointer__text .pointer-outline {
  width: 0;
  height: 0;
}

.pointer__play .pointer-base {
  clip-path: polygon(0 0,0 100%,100% 50%,100% 50%,70% 50%,70% 50%,100% 50%,100% 50%,70% 50%,70% 50%,100% 50%,100% 50%);
  width: 0.5rem;
  height: 0.75rem;
  display: block;
  background-color: #fff;
  z-index: 1000
}

.pointer__play .pointer-outline {
  width: 7.5rem;
  height: 7.5rem;
  background-color: darkslategrey;
  opacity: 1;
  mix-blend-mode: multiply;
}

.helper {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #555;
  font-size: 11px;
  color: #fff;
  font-weight: 700;
}

.helper .pointer {
  padding: 0.25rem 1rem;  
  background-color: red;
}

.helper .mouse {
  padding: 0.25rem 1rem;
  background-color: #222;
}
</style>