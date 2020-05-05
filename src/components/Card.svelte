<script>
  import { animate } from '../helpers/intersectionObserver'
  import { goto } from '@sapper/app'

  export let background = '#1d2b2a'
  export let image
  export let to

  let link
  let selected
  let viewport

  const onClick = e => {
    e.preventDefault()
    viewport.scrollIntoView({ behavior: 'smooth' })
    selected = !selected
    setTimeout(() => {
      goto(to)
    }, 1000)
  }
</script>
<div 
  class="card flex flex-col align-center justify-center"
  class:selected
  use:animate
  data-animate="clipSlideLeft"
  data-opts="{JSON.stringify({threshold: 0 })}"
  data-selector=".card__link"
  on:click={onClick}
>
  <a bind:this={link} href="{to}" class="card__link">
    <div
      class="card__bg-container"
      bind:this={viewport}
      style="background-color: {background};"
    >
    </div>
    <div class="card__blur absolute inset-0">
      <div class="card__sub text-gray-200">
        <slot name="sub"></slot>
      </div>
      <div class="card__title text-gray-500 text-3xl leading-relaxed">
        <slot name="title"></slot>
      </div>
      <div class="card__more hidden md:block">
        <slot></slot>
      </div>
      {#if image}
        <div class="card__img">
          <img class="card__img__inner" src="{image}" alt="" />
        </div>
      {/if}
      <div class="card__labels pt-16 pl-20 text-2xl text-gray-500 font-medium leading-tight block">
        <slot name="labels"></slot>
      </div>
    </div>
  </a>
</div>

<style>
  .card {
    height: 55rem;
    clip-path: inset(0 0 0 0);
  }

  .card.selected {
    clip-path: inset(-50vh -50vw -50vh -50vw);
  }

  .card.selected .card__blur {
    filter: blur(15px);
    transition: filter 5s;
  }

  .card__link {
    height: 45rem;
    position: relative;
    display: block;
    box-shadow: 0 10px 54px 0 rgba(0,0,0,.15);
    transition: box-shadow 0.9s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .card__link:hover {
    box-shadow: none;
    transition-duration: .2s;
  }

  .card__link:hover .card__bg-container {
    clip-path: inset(calc(((100vh - 43rem) / 2)) 0 calc(((100vh - 43rem) / 2)) 0);
  }

  .selected {
    transform: translateZ(100%);
    z-index: 99999;
  }

  .selected .card__bg-container {
    clip-path: inset(0 0 0 0) !important;
  }

  .card__bg-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translateX(-50%) translateY(-50%);
    clip-path: inset(calc(((100vh - 45rem) / 2)) 0 calc(((100vh - 45rem) / 2)) 0);
    transition: clip-path 0.9s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .card__sub {
    position: absolute;
    top: 85px;
    left: 85px;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .card__title {
    position: absolute;
    left: 85px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 400;
    max-width: 300px;
    @apply tracking-tight;    
  }

  .card__img {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    transition: all 1.5s;
    will-change: transform;
  }

  .card__img__inner {
    display: block;
    margin: 0 auto;
    transform: scale(1);
    transition: transform 0.9s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    will-change: transform;
    max-width: 75vw;
  }

  .card__link:hover .card__img__inner {
    transform: scale(0.95)
  }

  .card__more {
    position: absolute;
    left: 85px;
    bottom: 85px;
  }

  .card__labels {
    position: absolute;
    transform: translateX(100%) rotate(90deg) translateZ(1px);
    transform-origin: left top;
    right: 0;
    top: 0;
  }

  @media(max-width: 1023px) {
    .card__title, .card__sub, .card__more {
      display: none;
    }
  }

  @media(min-width: 768px) {
  }

  @media(min-width: 1024px) {
    .card__img {
      transform: translateY(-40%);
      right: 3.5rem;
      left: auto;
    }    
  }

  @media(min-width: 1280px) {
  }
</style>