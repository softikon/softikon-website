<script>
  import { onMount } from 'svelte'
  import anime from 'animejs'
  import observer, { isIntersecting } from '../helpers/intersectionObserver'

  function fitElementToParent(el, padding) {
    var timeout = null;
    function resize() {
      if (timeout) clearTimeout(timeout);
      anime.set(el, {scale: 1});
      var pad = padding || 0;
      var parentEl = el.parentNode;
      var elOffsetWidth = el.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
    }
    resize();
    window.addEventListener('resize', resize);
  }

  let root, dots, cursor
  let animation;
  let paused = true;

  const grid = [10, 10];
  const cell = 55;
  const numberOfElements = grid[0] * grid[1];

  let index = anime.random(0, numberOfElements-1);
  let nextIndex = 0;

  function play() {
    paused = false;
    if (animation) animation.pause();

    nextIndex = anime.random(0, numberOfElements-1);

    animation = anime.timeline({
      easing: 'easeInOutQuad',
      complete: () => !paused && play()
    })
    .add({
      targets: cursor,
      keyframes: [
        { scale: .75, duration: 120}, 
        { scale: 2.5, duration: 220},
        { scale: 1.5, duration: 450},
      ],
      duration: 300
    })
    .add({
      targets: '.stagger-visualizer .dot',
      keyframes: [
        {
          translateX: anime.stagger('-2px', {grid: grid, from: index, axis: 'x'}),
          translateY: anime.stagger('-2px', {grid: grid, from: index, axis: 'y'}),
          duration: 100
        }, {
          translateX: anime.stagger('4px', {grid: grid, from: index, axis: 'x'}),
          translateY: anime.stagger('4px', {grid: grid, from: index, axis: 'y'}),
          scale: anime.stagger([2.6, 1], {grid: grid, from: index}),
          duration: 225
        }, {
          translateX: 0,
          translateY: 0,
          scale: 1,
          duration: 1200,
        }
      ],
      delay: anime.stagger(80, {grid: grid, from: index})
    }, 30)
    .add({
      targets: cursor,
      translateX: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'x'}) },
      translateY: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'y'}) },
      scale: 1.5,
      easing: 'cubicBezier(.075, .2, .165, 1)'
    }, '-=800')

    index = nextIndex;
  }

  onMount(() => {
    observer().observe(root)
    const interval = setInterval(() => isIntersecting(root) ? (!animation ? play() : !paused && animation.play()) : (animation && animation.pause()), 100)

    const dotsFragment = document.createDocumentFragment();

    fitElementToParent(root, 0);

    for (var i = 0; i < numberOfElements; i++) {
      var dotEl = document.createElement('div');
      dotEl.classList.add('dot');
      dotsFragment.appendChild(dotEl);
    }

    dots.appendChild(dotsFragment);

    anime.set(cursor, {
      translateX: anime.stagger(-cell, {grid: grid, from: index, axis: 'x'}),
      translateY: anime.stagger(-cell, {grid: grid, from: index, axis: 'y'}),
      translateZ: 0,
      scale: 1.5,
    });

    // play()

    return () => {
      paused = true
      clearInterval(interval)
    }
  })

  const toggle = () => {
    paused = !paused

    if(!paused) animation.play()
    else animation.pause()
  }

</script>

  <div class="stagger-visualizer" pointer="{paused ? 'play' : 'stop'}" bind:this={root} on:click={toggle}>
    <div class="wrapper">
      <div class="cursor" bind:this={cursor}></div>
      <div class="dots-wrapper" bind:this={dots}></div>
    </div>
  </div>

<style>
  .wrapper {
    transform-origin: center center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: rotate 300s infinite;
  }
  .stagger-visualizer {
    cursor: none;
    position: relative;
    width: 550px;
    height: 550px;
    transform-origin: center left;
  }

  .stagger-visualizer .dots-wrapper {
    transform: translateZ(0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .stagger-visualizer :global(.dot) {
    position: relative;
    z-index: 1;
    width: 23px;
    height: 23px;
    margin: 16px;
    background-color: #dfdfdf;
    border-radius: 50%;
  }

  .stagger-visualizer .cursor {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 37px;
    height: 37px;
    margin: 9px;
    border-radius: 50%;
    background-color: crimson;
  }
</style>