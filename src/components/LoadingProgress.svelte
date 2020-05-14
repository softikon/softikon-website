<script>
  import { onMount } from 'svelte'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  const progress = tweened(0, {
    duration: 1000,
    easing: cubicOut
  })

  let i = 1, nextTick

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

  const finishProgress = (node, args) => {
    clear()
    progress.set(1)
    return {
      duration: 1000
    }
  }
</script>

<div class="flex z-50 fixed top-0 left-0 w-screen" out:finishProgress|local>
  <progress class="w-screen" value={$progress}></progress>
</div>

<style>
progress {
	background-color: rgba(0,0,0,0.01);
	border: 0;
	height: 6px;
}
progress::-webkit-progress-bar {
	background-color: rgba(0,0,0,0.01);
}
progress::-webkit-progress-value {
  background: linear-gradient(25deg,#d64c7f,#ee4758 50%);
  border-radius: 0 5px 5px 0;
}
progress::-moz-progress-bar {
	background: linear-gradient(25deg,#d64c7f,#ee4758 50%);
}
</style>