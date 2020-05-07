<script>
  import { onMount } from 'svelte'
  import { isHeaderInverted } from '../store/ui'
  import { getHexColorLuminosity } from '../helpers/colors'

  export let background = '#1d2b2a'
  export let image

  $: isDarkBg = getHexColorLuminosity(background) < 40

  onMount(() => {
    isHeaderInverted.set(isDarkBg)

    return () => {
      isHeaderInverted.set(false)
    }
  })
</script>
<div class="min-h-screen w-full mx-auto relative work flex">
  <div class="section-bg" style="background-color: {background};"></div>
  <div class="w-10/12 lg:w-9/12 xl:w-9/12 mx-auto flex flex-col-reverse justify-bottom pb-16 pt-64 lg:py-0 lg:flex-row lg:justify-start">
    <div class="lg:w-5/12 py-20 lg:px-0 relative">
      <div class="card__sub text-gray-200" data-aos="fade-up">
        <slot name="sub"></slot>
      </div>
      <div class="card__title text-gray-500 pt-16 lg:pt-0 pr-0 lg:pr-16 text-3xl leading-loose">
        <div data-aos="fade-up">
          <slot name="title"></slot>
        </div>
      </div>
      <div class="card__more hidden lg:block">
        <div data-aos="fade-up" data-aos-delay="100">
          <slot></slot>
        </div>
      </div>
      <div class="card__arrow-down-wrapper hidden lg:block" data-aos="fade-up" data-aos-delay="500">
        <div class="card__arrow-down" class:dark={isDarkBg}>↓</div>
      </div>
    </div>
    {#if image}
      <div class="lg:w-7/12 flex flex-row relative self-center">
        <div data-aos="fade-up" data-aos-delay="200">
          <img class="card__img" src="{image}" alt="" />
        </div>
        <div class="card__labels text-xl lg:text-2xl text-gray-500 font-medium leading-tight block">
          <slot name="labels"></slot>
        </div>
      </div>
    {/if}  
  </div>
</div>

<style>
  .card__sub {
    font-weight: 500;
    font-size: 1.5rem;
  }

  .card__title {
    font-weight: 400;
    @apply tracking-tight;    
  }

  .card__img {
    display: block;
    max-width: 100%;
  }

  .card__labels {
    position: absolute;
    transform: translateX(105%) translateY(30%) rotate(90deg) translateZ(1px);
    transform-origin: left top;
    right: 0;
  }

  .card__arrow-down-wrapper {
    position: absolute;
    bottom: 2rem;
  }

  .card__arrow-down.dark {
    color: rgba(255,255,255,0.55);
  }

  .card__arrow-down {
    content: '↓';
    font-size: 4rem;
    color: rgba(0,0,0,0.35);
    display: block;
    animation: slideDown 3s ease-in-out infinite;
  }
  
  @keyframes slideDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }    
    to {
      transform: translateY(0);
    }
  }

  @media(min-width: 1024px) {
    .card__sub {
      position: absolute;
      top: 85px;
    }

    .card__title {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);  
    }

    .card__more {
      position: absolute;
      bottom: 85px;
    }
  }
</style>