<script>
  import { onMount, createEventDispatcher } from 'svelte'
  import { viewportHeight } from '../store/ui'

  let distance
  let el
  let fixed

  const dispatch = createEventDispatcher()

  export let autoWidth = false
  export let length = 1
  export let currentItem = 0

  $: fixed = distance === 0 || ((distance < 0) && Math.floor(Math.abs(distance - $viewportHeight)) <= el.offsetHeight)
  $: {
    const innerDistanceRatio = fixed && (Math.abs(distance) / (el.offsetHeight - $viewportHeight))
    if (innerDistanceRatio) {
      currentItem = Math.floor((innerDistanceRatio >= 1 ? (innerDistanceRatio - 0.001) : innerDistanceRatio) * 100 / (100 / length))
    }
  }
  $: dispatch('itemChanged', currentItem)
  $: dispatch('stateChanged', fixed)
  $: finished = distance < 0 && !fixed

  onMount(() => {
    el = el.parentElement.parentElement
    const check = () => {
      distance = Math.floor(el.offsetTop - window.scrollY)
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