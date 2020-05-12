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
      document.addEventListener('click', scrollHandler)
    }

    // Cleanup. But this unsubscribe method is probably never been called due to the context="module"
    return () => {
      if (typeof window !== 'undefined') {
         window.removeEventListener('mousemove', mouseMoveHandler)
         window.removeEventListener('scroll', scrollHandler)
         document.removeEventListener('click', scrollHandler)
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
    // if (t !== target) target = t
    target = t
  }

  const setClasses = target => {
    const c = []
    if (!target || !target.parentElement) return
    if (Array.from(target.parentElement.querySelectorAll('a, a *')).some(e => e === target)) {
      c.push('pointer__link')
    }

    if (Array.from(target.parentElement.querySelectorAll('[pointer="play"], [pointer="play"] *')).some(e => e === target)) {
      c.push('pointer__play')
    }

    if (Array.from(target.parentElement.querySelectorAll('[pointer="stop"], [pointer="stop"] *')).some(e => e === target)) {
      c.push('pointer__stop')
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
    <div class="pointer pointer-base" style="transform: translate(-50%, -50%) translate({$cursor.x || 0}px, {$cursor.y || 0}px);"></div>
    <div class="pointer pointer-outline" style="transform: translate(-50%, -50%) translate({$pointer.x || 0}px, {$pointer.y || 0}px);"></div>
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
  background-color: lightcoral;
}

.pointer__link .pointer-outline {
  width: 64px;
  height: 64px;
  mix-blend-mode: screen;
}

.pointer__text .pointer-outline {
  width: 0;
  height: 0;
}

.pointer__play .pointer-base {
  clip-path: polygon(0 0,0 100%,100% 50%,100% 50%,70% 50%,70% 50%,100% 50%,100% 50%,70% 50%,70% 50%,100% 50%,100% 50%);
  width: .75rem;
  height: 1rem;
  display: block;
  background-color: #fff;
  z-index: 1000
}

.pointer__stop .pointer-base {
  clip-path: polygon(0 0,33% 0,33% 50%,66% 50%,66% 0,100% 0%,100% 100%,66% 100%,66% 50%,33% 50%,33% 100%,0% 100%);
  width: 1rem;
  height: 1rem;
  display: block;
  background-color: #fff;
  z-index: 1000
}

.pointer__play .pointer-outline {
  width: 10rem;
  height: 10rem;
  background-color: darkslategrey;
  opacity: 1;
  mix-blend-mode: multiply;
}

.pointer__stop .pointer-outline {
  width: 10rem;
  height: 10rem;
  background-color: crimson;
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