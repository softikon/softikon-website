<script>
  import { onMount } from 'svelte'
  import AOS from 'aos'
  import Pointer from '../components/Pointer.svelte'
  import BurgerBar from '../components/BurgerBar.svelte'
  import Logo from '../components/Logo.svelte'
  import Button from '../components/Button.svelte'
  import Footer from '../components/Footer.svelte'
  import Menu from '../components/Menu.svelte'
  import Link from '../components/Link.svelte'
  import LineBlock from '../components/LineBlock.svelte'
  import { animate } from '../helpers/intersectionObserver'
  import { isHeaderInverted } from '../store/ui'
  import { isMobile as checkIsMobile } from '../helpers/isMobile'

  let isMobile = false

  onMount(() => {
    isMobile = checkIsMobile()
    AOS.init({
      once: true,
      offset: 40,
      duration: 2000
    })
  })

  let menuActive = false
  let y
</script>

<svelte:window bind:scrollY={y}></svelte:window>
<div id="container" class="font-body">
  {#if menuActive}
    <Menu on:close={() => menuActive = false } />
  {/if}

  {#if !isMobile}
  <Pointer />
  {/if}

  <div class="overflow-hidden">
    <header>
      <Link href="/" id="logo" class="transform origin-top-left scale-75 md:scale-100 p-16 fixed left-0 top-0 z-20 flex items-center flex-col">
        <div class:invert={$isHeaderInverted || menuActive}>
          <Logo />
          
          <div class="softikon flex" class:hide={!menuActive && y > 180}>
            <span>S</span><span>O</span><span>F</span><span>T</span>
            <span>I</span><span>K</span><span>O</span><span>N</span>
          </div>
        </div>
      </Link>

      <a on:click|preventDefault={() => { menuActive = !menuActive }} href="#menu" class="transform origin-top-right scale-75 md:scale-100 flex items-center p-16 pt-24 fixed right-0 top-0 z-20">
        <div class="hidden md:block menu--text text-gray-600 pr-4" class:menuActive class:hide={!menuActive && y > 180}>
            <span class="menu--text__anim">navigace</span>
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
        <LineBlock data-aos="fade-up" dark>
          <p class="mb-8 text-2xl text-white font-bold uppercase">This might work</p>
          <h2 class="mb-0 font-bold outlined white">Máte projekt?</h2>
          <h2 class="mb-16 font-bold">Pojďme jej probrat!</h2>
          <Button class="border-white" href="/#">SAY HELLO!</Button>
        </LineBlock>
      </div>
    </section>

    <Footer />
  </div>
</div>


<style lang="scss" global>
 @import "../styles/global.scss";
</style>