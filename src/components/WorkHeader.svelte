<script>
  import { onMount } from 'svelte'
  import { isHeaderInverted } from '../store/ui'
  import { getHexColorLuminosity } from '../helpers/colors'

  export let background = '#1d2b2a'
  export let image

  onMount(() => {
    isHeaderInverted.set(getHexColorLuminosity(background) < 40)

    return () => {
      isHeaderInverted.set(false)
    }
  })
</script>
<div class="min-h-screen w-full mx-auto relative work flex flex-row">
  <div class="section-bg" style="background-color: {background};"></div>
  <div class="w-8/12 mx-auto flex flex-row">
    <div class="w-4/12 relative">
      <div class="card__sub text-gray-200">
        <slot name="sub"></slot>
      </div>
      <div class="card__title text-gray-500 pr-20 text-3xl leading-relaxed">
        <slot name="title"></slot>
      </div>
      <div class="card__more hidden md:block">
        <slot></slot>
      </div>
    </div>
    {#if image}
      <div class="w-8/12 flex flex-row items-center justify-center relative">
        <img class="card__img" src="{image}" alt="" />
        <div class="card__labels text-2xl text-gray-500 font-medium leading-tight block">
          <slot name="labels"></slot>
        </div>
      </div>
    {/if}  
  </div>
</div>

<style>
  .card__sub {
    position: absolute;
    top: 85px;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .card__title {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 400;
    @apply tracking-tight;    
  }

  .card__img {
    display: block;
    max-width: 100%;
  }

  .card__more {
    position: absolute;
    bottom: 85px;
  }

  .card__labels {
    position: absolute;
    transform: translateX(100%) translateY(-20vh) rotate(90deg) translateZ(1px);
    transform-origin: left top;
    right: 0;
  }
</style>