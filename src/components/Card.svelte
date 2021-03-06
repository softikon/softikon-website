<script>
  import { animate } from '../helpers/intersectionObserver'
  import { isPageTransitionInterrupted } from '../store/ui'
  import { goto } from '@sapper/app'

  export let background = '#1d2b2a'
  export let image
  export let to
  export let id = null

  let link
  let selected
  let viewport
  let hovered

  const onMouseenter = e => {
    hovered = true
  }

  const onMouseleave = e => {
    hovered = false
  }

  const onClick = e => {
    e.preventDefault()
    isPageTransitionInterrupted.set(true)
    viewport.scrollIntoView({ behavior: 'smooth' })
    selected = !selected
    setTimeout(() => {
      goto(to).then(() => {
        isPageTransitionInterrupted.set(false)
      })
    }, 1000)
  }
</script>
<div class="card__wrapper" use:animate data-selector=".card" {id} on:mouseenter={onMouseenter} on:mouseleave={onMouseleave}>
  <div 
    class="card flex flex-col align-center justify-center"
    class:selected
    data-concise={$$props['data-concise']}
    data-animate="clipSlideLeft"
  >
    <a rel="prefetch" on:click={onClick} bind:this={link} href="{to}" class="card__link">
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
        <div class="card__title text-gray-500 text-4xl leading-relaxed">
          <slot name="title"></slot>
        </div>
        <div class="card__more hidden md:block">
          <slot {hovered}></slot>
        </div>
        {#if image}
          <div class="card__img">
            <img class="card__img__inner" src="{image}" alt="" />
          </div>
        {/if}
        <div class="card__labels hidden md:block pt-16 pl-20 text-2xl text-gray-500 font-medium leading-tight block">
          <slot name="labels"></slot>
        </div>
      </div>
    </a>
  </div>
</div>

<style>
  .card {
    height: 55rem;
    clip-path: inset(0 0 0 0);
    position: relative;
  }

  :global([data-concise=true]).card {
    height: 100vh !important;
  }

  .card.selected {
    clip-path: inset(-50vh -50vw -50vh -50vw);
    z-index: 40;
  }

  .card.selected .card__blur {
    filter: blur(15px);
    transition: filter 5s;
  }

  :global([data-concise=true]).card .card__link {
    height: 100vh;
  }

  .card__link {
    height: 45rem;
    position: relative;
    display: block;
    box-shadow: 0 10px 54px 0 rgba(0,0,0,.15);
    transition: box-shadow 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .card__link:hover {
    box-shadow: none;
    transition-duration: .2s;
  }

  .card__link:hover .card__bg-container {
    clip-path: inset(calc(((100vh - 43rem) / 2)) 0 calc(((100vh - 43rem) / 2)) 0);
  }

  :global([data-concise=true]).card .card__link:hover .card__bg-container,
   :global([data-concise=true]).card .card__link .card__bg-container {
    clip-path: inset(0 0 0 0) !important;
  }

  .selected {
    z-index: 40;
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
    transition: clip-path 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .card__sub {
    position: absolute;
    top: 80%;
    left: 50%;
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
    transition: all 0.8s;
    will-change: transform;
  }

  .card__img__inner {
    display: block;
    margin: 0 auto;
    transform: scale(1);
    transition: transform 0.5s ease-in-out;
    will-change: transform;
    max-width: 70%;
  }

  :global([data-concise=true]).card .card__link:hover .card__img__inner {
    transform: scale(1.05)
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

  :global([data-concise=true]).card .card__title,
    :global([data-concise=true]).card .card__more,
    :global([data-concise=true]).card .card__labels,
    :global([data-concise=true]).card .card__sub {
      display: none;
  }

  :global([data-concise=true]).card .card__sub {
      transform: translateX(-50%);
  }

  @media(max-width: 1023px) {
    .card__title, .card__more {
      display: none;
    }
    .card__sub {
      transform: translateX(-50%);
    }
  }

  @media(min-width: 768px) {
  }

  @media(min-width: 1024px) {
    .card:not([data-concise=true]) .card__img {
      transform: translateY(-40%);
      right: 3.5rem;
      left: auto;
    }

    .card:not([data-concise=true]) .card__img__inner {
      max-width: 50vw;
    }

    .card:not([data-concise=true]) .card__sub {
      top: 85px;
      left: 45px;
    }

    .card:not([data-concise=true]) .card__title {
      left: 45px; 
    }

    .card:not([data-concise=true]) .card__more {
      left: 45px;
      bottom: 85px;
    }
  }

  @media(min-width: 1280px) {
    .card:not([data-concise=true]) .card__sub {
      top: 85px;
      left: 85px;
    }

    .card:not([data-concise=true]) .card__title {
      left: 85px; 
    }

    .card:not([data-concise=true]) .card__more {
      left: 85px;
      bottom: 85px;
    }
  }
</style>