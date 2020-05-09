<script>
  import { onMount } from 'svelte'
  import { viewportHeight } from '../store/ui'

  let distance
  let el
  let fixed

  $: fixed = distance === 0 || ((distance < 0) && Math.abs(distance - $viewportHeight) <= el.offsetHeight)
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

<div bind:this={el} class="top-0 w-full" class:fixed class:absolute={!fixed} class:bottom-0={finished} class:top-unset={finished}>
  <slot></slot>
</div>

<style>
  .top-unset {
    top: unset;
  }
</style>