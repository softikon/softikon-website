<script>
  import { onMount } from 'svelte'
  import touchEvents, { install as installTouchEvents } from '../helpers/touch'

  let currentItem
  let currentItemIndex = 0
  let container
  let items = 0
  let isBrowser = false
  let offsetCache = []
  let offset = 0

  $: offset = isBrowser && offsetCache[currentItemIndex]

  const next = () => {
    currentItemIndex = (currentItemIndex + 1) % items
  }

  const previous = () => {
    currentItemIndex = (currentItemIndex - 1) < 0 ? (items - 1) : (currentItemIndex - 1)
  }

  // TODO: possible memory leak after the component is destoyed
  touchEvents.on('swipeLeft', next)
  touchEvents.on('swipeRight', previous)

  const createOffsetCache = () => {
    offsetCache = Array.from(container.children).map((el, i, a) =>
      -a[0].getBoundingClientRect().x + el.getBoundingClientRect().x
    )
  }

  onMount(() => {
    isBrowser = true
    // Precompute offset for each child in slider
    // This is because we need exact x coordinate because transition may be in progress when computing each time for the currentItem
    createOffsetCache()

    window.addEventListener('resize', createOffsetCache)

    // TODO: refactor this into svelte action directive instead
    const uninstall = installTouchEvents(container)
    items = container.children.length

    return () => {
      uninstall()
      window.removeEventListener('resize', createOffsetCache)
    }
  })
</script>

<div class="slider relative" data-aos="fade-up">
  <div class="slider__container">
    <div bind:this={container} style="transform: translateX({-1 * offset}px); width: 60000px;" class="slider__slide overflow-hidden flex flex-row">
      <slot></slot>
    </div>
    <div on:click={next} class="arrow arrow-right"><span>&#8594;</span></div>
    <div on:click={previous} class="arrow arrow-left"><span>&#8592;</span></div>
  </div>
</div>

<style>
  .slider {
    user-select: none;
  }

  .slider__container {
    width: 100vw;
    overflow: hidden; 
  }

  .slider__slide {
    transition: transform .5s ease;
  }

  .arrow {
    width: 7.5rem;
    height: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    color: crimson;
    font-size: 1.75rem;
    box-shadow: 0 10px 54px 0 rgba(0,0,0,.15);
    font-weight: 700;
    cursor: pointer;
  }

  .arrow-right {
    right: -4rem;
  }

  .arrow-left {
    left: -5rem;
  }

  @media(max-width: 1023px) {
    .arrow {
      width: 3rem;
      height: 5rem;
    }

    .arrow-right {
      right: 1rem;
    }

    .arrow-left {
      left: 1rem;
    }
  }
</style>