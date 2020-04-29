<script>
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { animate } from '../helpers/intersectionObserver'

  let slideIndex = 0
  const slides = [
    'pomohli Vašemu byznysu růst',
    'objevili a využili Váš potenciál',
    'udělali pořádnou díru do světa'
  ]

  onMount(() => {
    setInterval(() => {
      slideIndex = (slideIndex + 1) % 3
    }, 4000)
  })
</script>
 
<footer class="relative py-64 min-h-screen">
  <div class="section-bg black" use:animate data-animate="slideScaleLeft"></div>
  <div class="w-10/12 mx-auto">
    <p class="text-4xl lg:text-6xl text-white mb-24">
      <span class="block font-regular">jsme zde, abychom společně</span>
      {#each slides as slide, index}
      {#if slideIndex === index}
          <div in:fly|local={{x: -500, duration: 1000}} class="block font-bold">{slides[index]}</div>
      {/if}
      {/each}
    </p>
    <div class="c-line c-line__dark mb-24">
      <span class="c-line-ln hidden lg:block"></span>
      <p class="mb-8 text-2xl font-semibold text-gray-100 uppercase">Kontakt</p>
      <p class="mb-4 text-teal-400 text-4xl font-semibold">info@softikon.eu</p>
      <p class="text-teal-400 text-4xl font-semibold">704 71 70 70</p>
    </div>
    <div class="c-line c-line__dark">
      <span class="c-line-ln hidden lg:block"></span>
      <p class="mb-8 text-2xl font-semibold text-gray-100 uppercase">Explore</p>
      <ul class="font-semibold flex flex-row items-center">
        <li><a class="text-gray-600 text-xl" href="#/index">Domů</a></li>
        <li><span class="text-gray-900 mx-20">|</span></li>
        <li><a class="text-gray-600 text-xl" href="#/test">Služby</a></li>
        <li><span class="text-gray-900 mx-20">|</span></li>
        <li><a class="text-gray-600 text-xl" href="#/test">Autopublisher</a></li>
      </ul>
    </div>

    <div class="absolute" style="bottom: 3rem;">
      <div class="flex flex-col">
        <p class="text-gray-600 text-lg">&copy; 2020 Softikon s.r.o.</p>
      </div>
    </div>  
  </div>
</footer> 