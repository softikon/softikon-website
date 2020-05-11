<script>
  import { onMount, createEventDispatcher } from 'svelte'
  import { viewportHeight } from '../store/ui'

  let distance
  let el
  let fixed
  let currentItem = 1

  const dispatch = createEventDispatcher()

  export let autoWidth = false
  export let length = 1

  $: fixed = distance === 0 || ((distance < 0) && Math.abs(distance - $viewportHeight) <= el.offsetHeight)
  $: {
    const innerDistanceRatio = fixed && (Math.abs(distance) / (el.offsetHeight - $viewportHeight))
    if (innerDistanceRatio) {
      currentItem = Math.floor(innerDistanceRatio * 100 / (100 / length))
    }
  }
  $: dispatch('itemChanged', currentItem)
  $: finished = distance < 0 && !fixed

  onMount(() => {
    el = el.parentElement.parentElement
    const check = () => {
      distance = el.offsetTop - window.scrollY
    }
    window.addEventListener('scroll', check)
    check()

    return () => {
      window.removeEventListener('scroll', check)
    }
  })
</script>

<div bind:this={el} class="top-0" class:w-full={!autoWidth} class:fixed class:absolute={!fixed} class:bottom-0={finished} class:top-unset={finished}>
  <slot></slot>
</div>

<style>
  .top-unset {
    top: unset;
  }
</style>