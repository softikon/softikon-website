<script>
  import { onMount } from 'svelte'
  import { sineInOut } from 'svelte/easing'
  import { tweened } from 'svelte/motion'
  import observer, { isIntersecting } from '../helpers/intersectionObserver'

  export let fillStyle = 'rgba(0,0,0,0.5)'
  export let id
  export let dataPoints
  export let delay = 0
  export let duration = 500
  
  let isBrowser = false

  let canvas, context
  let width, height
  let nextFrame

  const progress = tweened(0, {
		duration,
		easing: sineInOut
	});

  const setSize = () => {
    const parent = canvas.parentElement
    canvas.width = width = parent.offsetWidth
    canvas.height = height = parent.offsetHeight
  }

  const startAnimation = () => {
    nextFrame = window.requestAnimationFrame(start => {
      const loop = () => {
        nextFrame = window.requestAnimationFrame(ms => {
          const curr = ms - start - delay
          if (curr >= 0) {
            progress.set(1)
          } else {
            loop()
          }
        })
      }

      loop()
    })
  }

  const renderFrame = progress => {
    render(progress)
  }

  const render = (progress = 1) => {
    context.clearRect(0, 0, width, height)
    context.fillStyle = fillStyle
    context.beginPath()
    context.moveTo(0, height);
    for (const dataPoint of dataPoints) {
      context.lineTo(
        Math.round(dataPoint.x * width),
        Math.round((1 - progress * dataPoint.y) * height)
      )
    }

    context.lineTo(width, height)
    context.closePath()
    context.fill()
  }

  onMount(() => {
    isBrowser = true
    setSize()
    context = canvas.getContext('2d')
    let animated = false
    
    observer().observe(canvas)
    const unsunscribe = isIntersecting(canvas)(ratio => {
      // TODO: NONSENSE HERE NOW
      if(!animated && ratio > 0.5) {
        startAnimation()
        animated = true
      }
    })

    const resizeHandler = () => {
      setSize()
      renderFrame($progress)
    }

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
      window.cancelAnimationFrame(nextFrame)
      unsunscribe()
    }
  })

  $: isBrowser && renderFrame($progress)
</script>

<canvas id={id} bind:this={canvas}></canvas>

<style>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: 1;
}
</style>