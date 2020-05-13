<script>
  import { createEventDispatcher } from 'svelte'
  import { stores } from '@sapper/app'
  import Link from './Link.svelte'

  const { page } = stores()
  const dispatch = createEventDispatcher()

  const items = [
    { title: 'Domů', path: '/' },
    { title: 'Filozofie', path: '/about' },
    { title: 'Projekty', path: '/work' },
    { title: 'Kontakt', path: '/contact' }
  ]

  $: currentItem = items.find(i => i.path === $page.path) || {}

  const click = () => dispatch('close')

</script>

<div id="menu" class="overflow-hidden fixed inset-0 flex flex-col items-center justify-center z-10 text-white" style="background: #111;">
  <div class="w-9/12 lg:w-7/12 flex flex-col align-start">
    {#each items as item, index}
      <div class="block menu-item font-bold" data-aos="fade-up" data-aos-duration="400" data-aos-delay="{200 + (items.length - index - 1) * 100}">
        <Link href="{item.path}">
          <span on:click={click} class="white" class:outlined={currentItem.path === item.path}>{item.title}</span>
        </Link>
      </div>
    {/each}
    <!--<div class="block text-xl font-bold flex flex-row mt-16" data-aos="fade-left" data-aos-duration="400" data-aos-delay="100">
      <a class="mr-8 text-gray-700" href="#/">CZ</a>
      <a href="#/">EN</a>
    </div>-->
  </div>
</div>

<style>
  .menu-item {
    font-size: 3.5rem;
  }

  @media(min-width: 1024px) {
    .menu-item {
      font-size: 6rem;
    }
  }
</style>