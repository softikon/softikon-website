<script>
  import { onMount } from 'svelte'
  import anime from 'animejs'

  let ref

  onMount(() => {
    const fragment = document.createDocumentFragment();
    const grid = [12, 12];
    const col = grid[0];
    const row = grid[1];
    const numberOfElements = col * row;

    for (let i = 0; i < numberOfElements; i++) {
      fragment.appendChild(document.createElement('div'));
    }

    ref.appendChild(fragment);

    const staggersAnimation = anime.timeline({
      targets: '.stagger-visualizer div',
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
      duration: 1000,
      scale: .5,
      delay: anime.stagger(150, {grid: grid, from: 'center'})
    })
    .add({
      translateX: () => anime.random(-15, 15),
      translateY: () => anime.random(-15, 15),
      borderRadius: '50%',
      delay: anime.stagger(10, {from: 'last'})
    })
    .add({
      borderRadius: '0',
      translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
      translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
      rotate: 0,
      scaleX: 2.5,
      scaleY: .25,
      delay: anime.stagger(15, {from: 'center'})
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
      delay: anime.stagger(100, {grid: grid, from: 'center'})
    })
    .add({
      scaleY: 1,
      scale: 1,
      delay: anime.stagger(50, {grid: grid, from: 'center'})
    })

    staggersAnimation.play();
  })
</script>

<div class="stagger-visualizer" bind:this={ref}></div>

<style>
  .stagger-visualizer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 48rem;
    height: 48rem;
    animation: rotate 120s infinite
  }

  @keyframes rotate {
    0% {
      transform: rotate(0)
    }
    100% {
      transform: rotate(360deg)
    }
  }

  :global(.stagger-visualizer div) {
    width: 4rem;
    height: 4rem;
    background-color: #e74c3c;
  }
</style>