<script>
  import { onMount } from 'svelte'
  import AOS from 'aos'
  import { slide, fly } from 'svelte/transition'
  import Pointer from '../components/Pointer.svelte'
  import BurgerBar from '../components/BurgerBar.svelte'
  import Logo from '../components/Logo.svelte'
  import { animate } from '../helpers/intersectionObserver'

  import 'aos/dist/aos.css'

  onMount(() => {
    AOS.init({
      once: true
    })
  })

  let menuActive = false
  let y
</script>

<svelte:window bind:scrollY={y}></svelte:window>
{#if menuActive}
  <div id="menu" class="bg-gray-900 fixed inset-0 flex items-center justify-center z-10" transition:slide>
  </div>
{/if}

<Pointer />

<div class="font-body overflow-hidden">
  <header>
    <a href="/" id="logo" class="p-16 fixed left-0 top-0 z-20 flex items-center flex-col" class:invert={menuActive}>
      <Logo />
      
      <div class="softikon flex">
        <span>S</span><span>O</span><span>F</span><span>T</span>
        <span>I</span><span>K</span><span>O</span><span>N</span>
      </div>
    </a>

    <a on:click|preventDefault={() => { menuActive = !menuActive }} href="#menu" class="flex items-center p-16 pt-28 fixed right-0 top-0 z-20">
      <div class="menu--text text-gray-600 pr-4" class:menuActive class:hide={!menuActive && y > 180}>
          <span class="menu--text__anim">menu</span>
          <span>zavřít</span>
      </div>
      <BurgerBar active={menuActive} />
    </a>
  </header>

  <main>
    <slot></slot>
  </main>

  <section class="relative" data-aos="fade-up" data-aos-duration="3000" style="padding-top: 18rem; padding-bottom: 18rem; color: #fff;">
    <div class="section-bg gradient-green" use:animate data-animate="slideScaleLeft"></div>
    <div class="w-10/12 mx-auto">
      <div data-aos="fade-up" data-aos-duration="2000" class="c-line c-line__dark">
        <span class="c-line-ln hidden lg:block"></span>
        <p class="mb-16 leading-loose" style="font-size: 1.635rem; font-weight: 700; color: rgba(255, 255, 255, 0.95);">Make it happen</p>
        <a href="/#" class="font-semibold text-xl">let's design better products</a>
      </div>
    </div>
  </section>

  <footer class="relative py-64 min-h-screen">
    <div class="section-bg black" use:animate data-animate="slideScaleLeft"></div>
    <div class="w-10/12 mx-auto">
      <div class="c-line c-line__dark">
        <span class="c-line-ln hidden lg:block"></span>
        <p class="mb-16 leading-loose" style="font-size: 1.635rem; font-weight: 700; color: rgba(255, 255, 255, 0.95);">Make it happen</p>
        <a href="/#" class="font-semibold text-xl">let's design better products</a>
      </div>
    </div>
  </footer>  
</div>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html, body, #root {
    font-size: 10px;
    position: relative;
  }

  * {
    -webkit-font-smoothing: antialiased;
  }

  .section-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  [data-animate="slideScaleLeft"] {
    transform: scaleX(0.01);
    transition: transform 0.9s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transform-origin: left;
    will-change: transform;    
  }

  [data-animate="slideScaleLeft"].animate {
    transform: scaleX(1);
  }

  .invert {
    filter: invert(1);
  }  

  .menu--text {
    transition: opacity .4s;
    overflow: hidden;
    height: 2rem;
    opacity: 1;
  }

  .menu--text.hide {
    opacity: 0;
  }

  .menu--text > span {
    display: block;
    height: 2rem;
    line-height: 2rem;
  }

  .menu--text__anim {
    margin-top: 0;
    transition: all .4s;
  }

  .menu--text.menuActive .menu--text__anim {
    margin-top: -2rem;
  }

  .section-bg.light {
    background-color: #f5f5f5;
  }

  .section-bg.black {
    background-color: #111;
  }  

  .section-bg.white {
    background-color: #fff;
  }

  .gradient-green {
    background: linear-gradient(180deg, #24ca7a 0%,#29d8ac 100%);
  }

  .c-line {
    position: relative;
  }

  @media (min-width: 1024px) {
    .c-line {
      padding-left: 13rem;
    }
  }

  .c-line-ln {
    position: absolute;
    left: 0;
    width: 8rem;
    height: 1px;
    background-color: rgba(17, 17, 17, 0.6);
    top: 1.3rem;
  }

  .c-line__dark .c-line-ln {
    background-color: rgba(255, 255, 255, 0.8);
  }  

  h1 {
    font-size: calc(100vw / 13);
    position: relative;
    line-height: 1.2em;
    font-weight: 400;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: calc(100vw / 18);
    }
  }

  h2 {
    font-size: 4.8rem;
    line-height: 1em;
    font-weight: 800;
    position: relative;
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 7rem;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0)
    }
    to {
      transform: rotate(360deg)
    }
  }

  @keyframes fx-in {
    0% {
        transform: translateX(-100px) scaleX(0) skewX(80deg);
        transform-origin:left;
    }
    50% {
        transform: translateX(0) scaleX(1) skewX(0);
        transform-origin: left;
    }
    50.1% {
        transform: translateX(0) scaleX(1);
        transform-origin: right;
    }
    to {
        transform: translateX(0) scaleX(0);
        transform-origin: right;
    }
  }

  @keyframes fx-out {
    0% {
        transform: scaleX(0);
        transform-origin: right;
    }
    50% {
        transform: scaleX(1);
        transform-origin: right;
    }
    50.1% {
        transform: scaleY(1);
        transform-origin: top;
    }
    to {
        transform: scaleY(0);
        transform-origin: top;
    }
  }  

  #scrollContainer {
    overflow-x: hidden;    
  }
 
  #logo {
    text-decoration: none;
    color: #000;
    transition: all .4s;
  }
  .softikon {
    width: 100%;
    flex-direction: row;
  }
  .softikon > span {
    margin: 0 auto;
    font-weight: 700;
    line-height: 1.5rem;
  }

  @media (min-width: 1224px) {
    .softikon {
      flex-direction: column-reverse;
      padding-top: 2rem;
    }
    .softikon > span {
      animation: rotate-90 1s forwards ease;
    }
  }

  @keyframes rotate-90 {
    0% {
      transform: rotate(0);
    }
    to {
      transform: rotate(-90deg);
    }
  }
</style>