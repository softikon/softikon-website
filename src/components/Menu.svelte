<script>
  import { slide } from 'svelte/transition'
</script>

<div id="menu" class="fixed inset-0 flex flex-col items-center justify-center z-10 text-white" style="background: #111;" transition:slide>
  <div class="w-9/12 lg:w-7/12 flex flex-col align-start">
    <div class="block menu-item font-bold" data-aos="fade-up" data-aos-delay="500">
      <a class="outlined white" href="/">Domů</a>
    </div>
    <div class="block menu-item font-bold" data-aos="fade-up" data-aos-delay="400">
      Náš přístup
    </div>
    <div class="block menu-item font-bold" data-aos="fade-up" data-aos-delay="300">
      Projekty
    </div>
    <div class="block menu-item font-bold" data-aos="fade-up" data-aos-delay="200">
      Kontakt
    </div>
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