<script>
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  const progress = writable(0)

  let i = 1, nextTick

  // TODO: I wanted to use tailwinds bg-black utility, but it's purged with purgecss
  $: style = `width: ${$progress * 100}%; background-color: #000;`

  const tick = () => {
    nextTick = setTimeout(() => {
      progress.set(1 - 1 / (++i))
      tick()
    }, (Math.random() * 1000) | 0)
  }

  const clear = () => {
    clearTimeout(nextTick)
  }

  onMount(() => {
    tick()
  })

  const finishProgress = (name, args) => {
    clear()
    progress.set(1)
    return {
      duration: 1000
    }
  }
</script>

<div class="h-2 flex fixed top-0 left-0 w-screen" out:finishProgress>
  <div class="progress bg-blue-500" {style}></div>
</div>

<style>
  .progress {
    transition: width 1s ease-in
  }
</style>