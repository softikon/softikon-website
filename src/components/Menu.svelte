<script>
  import { createEventDispatcher } from 'svelte'
  import { slide } from 'svelte/transition'
  import { stores } from '@sapper/app'

  const { page } = stores()
  const dispatch = createEventDispatcher()

  const items = [
    { title: 'Domů', path: '/' },
    { title: 'Náš přístup', path: '/softikon' },
    { title: 'Projekty', path: '/projekty' },
    { title: 'Kontakt', path: '/kontakt' }
  ]

  $: currentItem = items.find(i => i.path === $page.path) || {}

  const click = () => dispatch('close')

</script>

<div id="menu" class="overflow-hidden fixed inset-0 flex flex-col items-center justify-center z-10 text-white" style="background: #111;" transition:slide>
  <div class="w-9/12 lg:w-7/12 flex flex-col align-start">
    {#each items as item, index}
      <div class="block menu-item font-bold" data-aos="fade-up" data-aos-delay="{200 + (items.length - index - 1) * 100}">
        <a on:click={click} class="white" class:outlined={currentItem.path === item.path} href="{item.path}">{item.title}</a>
      </div>
    {/each}
    <div class="block text-xl font-bold flex flex-row mt-16" data-aos="fade-left" data-aos-delay="100">
      <a class="mr-8 text-gray-700" href="#/">CZ</a>
      <a href="#/">EN</a>
    </div>
  </div>
</div>

<style>
  .menu-item {
    font-size: 4rem;
  }

  @media(min-width: 1024px) {
    .menu-item {
      font-size: 6rem;
    }
  }
</style>