<script>
  import { onMount } from 'svelte'
  import AOS from 'aos'
  import Pointer from '../components/Pointer.svelte'
  import BurgerBar from '../components/BurgerBar.svelte'
  import Logo from '../components/Logo.svelte'
  import Button from '../components/Button.svelte'
  import Footer from '../components/Footer.svelte'
  import Menu from '../components/Menu.svelte'
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
<div id="container" class="font-body">
  {#if menuActive}
    <Menu />
  {/if}

  <Pointer />

  <div class="overflow-hidden">
    <header>
      <a href="/" id="logo" class="p-16 fixed left-0 top-0 z-20 flex items-center flex-col" class:invert={menuActive}>
        <Logo />
        
        <div class="softikon flex">
          <span>S</span><span>O</span><span>F</span><span>T</span>
          <span>I</span><span>K</span><span>O</span><span>N</span>
        </div>
      </a>

      <a on:click|preventDefault={() => { menuActive = !menuActive }} href="#menu" class="flex items-center p-16 pt-24 fixed right-0 top-0 z-20">
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

    <section class="relative py-64 text-white">
      <div class="section-bg gradient-red" use:animate data-animate="slideScaleLeft"></div>
      <div class="w-10/12 mx-auto">
        <div data-aos="fade-up" data-aos-duration="2000" class="c-line c-line__dark">
          <span class="c-line-ln hidden lg:block"></span>
          <p class="mb-8 text-2xl text-white font-bold uppercase">Máte svůj vysněný projekt?</p>
          <p class="mb-16 leading-loose text-4xl">Pomůžeme vám dosáhnout vytyčených cílů a nakopnout tak svůj byznys jako nikdy předtím. Přesvědčíme zákazníky, aby si vybrali právě Vás.</p>
          <Button class="border-white" href="/#">SAY HELLO!</Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</div>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html, body, #root {
    font-size: 10px;
    position: relative;
  }

  ::selection {
    background: #87FFA9;
  }

  * {
    -webkit-font-smoothing: antialiased;
  }

  
  .outlined {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
  }

  .outlined.white {
    -webkit-text-stroke-color: #fff;
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

  .gradient-cool {
    background-image: radial-gradient( circle farthest-corner at -3.1% -4.3%,  rgba(57,255,186,1) 0%, rgba(21,38,82,1) 90% );
  }

  .gradient-red {
    background: linear-gradient(25deg,#d64c7f,#ee4758 50%);
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
    top: 1rem;
  }

  .c-line__lg .c-line-ln {
    top: 1.3rem;
  }

  .c-line__xl .c-line-ln {
    top: 1.6rem;
  }  

  .c-line__dark .c-line-ln {
    background-color: rgba(255, 255, 255, 0.8);
  }  

  h1 {
    font-size: 5rem;
    position: relative;
    line-height: 1.2em;
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 8rem;
    }
  }

  h2 {
    @apply tracking-tight;
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

  .arrow {
    width: 60px;
  }

  .arrow path {
    stroke: #111;
    fill: transparent;
    stroke-width: 1px;
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