<script>
  import { animate } from '../helpers/intersectionObserver'
  import LineBlock from './LineBlock.svelte'
</script>
 
<footer class="relative py-64 min-h-screen">
  <div class="section-bg black" use:animate data-animate="slideScaleLeft"></div>
  <div class="w-10/12 mx-auto">
    <h3 class="text-white text-6xl mb-48">Let's lead towards the future<span class="softikon-dot">.</span></h3>

    <LineBlock dark class="mb-24">
      <p class="mb-8 text-2xl text-gray-100 uppercase">Kontakt</p>
      <p class="mb-4 text-teal-500 text-5xl font-medium">info@softikon.eu</p>
      <p class="text-teal-500 text-5xl font-medium">704 71 70 70</p>
    </LineBlock>
    <LineBlock dark>
      <p class="mb-8 text-2xl text-gray-100 uppercase">Explore</p>
      <ul class="font-semibold flex flex-col md:flex-row flex-wrap items-start md:items-center">
        <li><a class="text-gray-600 text-xl" href="#/index">Domů</a></li>
        <li class="hidden md:block"><span class="text-gray-900 mx-20">|</span></li>
        <li><a class="text-gray-600 text-xl" href="#/test">Služby</a></li>
        <li class="hidden md:block"><span class="text-gray-900 mx-20">|</span></li>
        <li><a class="text-gray-600 text-xl" href="#/test">Autopublisher</a></li>
      </ul>
    </LineBlock>
  </div>
  <div class="absolute" style="bottom: 3rem; left:0; right: 0;">
    <div class="flex flex-col w-10/12 mx-auto">
      <p class="text-gray-600 text-lg">&copy; 2020 Created with passion by Petr Máčal. This website's source code is fully public and open-sourced.</p>
    </div>
  </div>
</footer> 