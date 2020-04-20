<script>
  import { fade } from 'svelte/transition'
  import Pointer from '../components/Pointer.svelte'
  import BurgerBar from '../components/BurgerBar.svelte'

  let menuActive = false
</script>

{#if menuActive}
  <div id="menu" class="fixed position-0 flex align-center z-10" transition:fade>
    Menu
  </div>
{/if}

<Pointer />

<div id="scrollContainer">
  <header>
    <a href="/" id="logo" class="p-16 fixed left-0 top-0 z-20" class:invert={menuActive}>
      <img src="logo.svg" alt="" />
      
      <div class="softikon flex">
        <span>S</span><span>O</span><span>F</span><span>T</span>
        <span>I</span><span>K</span><span>O</span><span>N</span>
      </div>
    </a>

    <a on:click|preventDefault={() => { menuActive = !menuActive }} href="#menu" class="p-16 fixed right-0 top-0 z-20">
      <BurgerBar active={menuActive} />
    </a>
  </header>

  <main>
    <slot></slot>
  </main>

  <section class="relative" style="padding-top: 24rem; padding-bottom: 24rem; color: #fff;">
    <div class="section-bg gradient-green"></div>
    <div style="width: 80%; margin: 0 auto;">
      <div class="c-line">
        <span class="c-line-ln"></span>
        <h3 style="padding-top: 1rem;">Make it happen</h3>
      </div>    
    </div>
  </section>
</div>

<style>
  #scrollContainer {
    overflow-x: hidden;    
  }
  #menu {
    background-color: #16a085;
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