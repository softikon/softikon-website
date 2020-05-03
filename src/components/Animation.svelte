<script>
  import { onMount } from 'svelte'
  import anime from 'animejs'
  import observer, { isIntersecting } from '../helpers/intersectionObserver'

  let ref
  let animation
  let paused

  onMount(() => {
    observer().observe(ref)
    const unsubscribe = isIntersecting(ref)(state => state ? !paused && animation.play() : animation.pause())

    const fragment = document.createDocumentFragment();
    const grid = [20, 8];
    const col = grid[0];
    const row = grid[1];
    const numberOfElements = col * row;

    for (let i = 0; i < numberOfElements; i++) {
      fragment.appendChild(document.createElement('div'));
    }

    ref.appendChild(fragment);

    animation = anime.timeline({
      targets: '.animation1 div',
      easing: 'easeInOutSine',
      delay: anime.stagger(50),
      loop: true,
      autoplay: false
    })
    .add({
      translateX: [
        {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
        {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
      ],
      translateY: [
        {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
        {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
      ],
      duration: 2000,
      scale: .5,
      delay: anime.stagger(150, {grid: grid, from: 'center'})
    })
    .add({
      translateX: () => anime.random(-10, 10),
      translateY: () => anime.random(-10, 10),
      delay: anime.stagger(20, {from: 'last'}),
    })
    .add({
      translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
      translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
      rotate: 0,
      scaleX: 2.5,
      scaleY: .25,
      delay: anime.stagger(20, {from: 'center'})
    })
    .add({
      rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
      delay: anime.stagger(100, {grid: grid, from: 'center'})
    })
    .add({
      translateX: 0,
      translateY: 0,
      scale: .5,
      scaleX: 1,
      rotate: 180,
      duration: 1000,
      delay: anime.stagger(125, {grid: grid, from: 'center'})
    })
    .add({
      scaleY: 1,
      scale: 1,
      delay: anime.stagger(65, {grid: grid, from: 'center'})
    })

    // animation.play();

    return unsubscribe
  })

  const toggle = () => {
    paused = !paused
    
    if (!paused) animation.play()
    else animation.pause()
  }
</script>

<div class="animation1" bind:this={ref} pointer="{paused ? 'play' : 'stop'}" on:click={toggle}></div>

<style>
  .animation1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 200px;
  }

  @media(max-width: 767px) {
    .animation1 {
      transform: scale(1.1);
      transform-origin: 50% 50%;
    }
  }

  .animation1 :global(div) {
    width: 5%;
    height: 25px;
    background-color: crimson;
  }
</style>