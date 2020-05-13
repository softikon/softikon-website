<script>
  import observer, { isIntersecting } from '../helpers/intersectionObserver'
  import { onMount } from 'svelte'

  onMount(() => {
    observer().observe(ref)

    const unsubscribe = isIntersecting(ref)(state => {
      if (state) {
        visible = state
        observer().unobserve(ref)
        unsubscribe()
      }
    })
  })
  let ref, visible
</script>

<div bind:this={ref}>
  {#if visible}
  <slot></slot>
  {/if}
</div>