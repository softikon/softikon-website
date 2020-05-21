<script>
  import { animate } from '../helpers/intersectionObserver'
  import LineBlock from './LineBlock.svelte'
</script>
 
<footer class="relative py-64 min-h-screen">
  <div class="section-bg black" use:animate data-animate="slideScaleLeft"></div>
  <div class="w-10/12 mx-auto">
    <h3 class="text-white text-6xl mb-48">Let's lead towards the future<span class="softikon-dot">.</span></h3>

    <LineBlock dark class="mb-24">
      <p class="mb-8 text-2xl font-bold text-white uppercase">Kontakt</p>
      <p class="mb-4 text-teal-500 text-5xl font-medium">info@softikon.eu</p>
      <p class="mb-8 text-teal-500 text-5xl font-medium">+420 777 480 909</p>
      <p class="text-gray-600 text-2xl font-medium">Softikon s.r.o. | IČ: 08059535</p>
    </LineBlock>
    <LineBlock dark>
      <p class="mb-8 text-2xl font-bold text-white uppercase">Explore</p>
      <ul class="font-semibold flex flex-col md:flex-row flex-wrap items-start md:items-center">
        <li><a class="text-gray-400 text-2xl" href="/">Domů</a></li>
        <li class="hidden md:block"><span class="text-gray-900 mx-20">|</span></li>
        <li><a class="text-gray-400 text-2xl" href="about">Kdo jsme</a></li>
        <li class="hidden md:block"><span class="text-gray-900 mx-20">|</span></li>
        <li><a class="text-gray-400 text-2xl" href="work">Projekty</a></li>
      </ul>
    </LineBlock>
  </div>
  <div class="absolute" style="bottom: 3rem; left:0; right: 0;">
    <div class="flex flex-col w-10/12 mx-auto">
      <p class="text-gray-500 text-xl">&copy; 2020 Web vytvořil <a class="text-teal-500 font-bold" target="_blank" href="https://www.linkedin.com/in/petr-macal/">Petr Máčal</a>. Zdrojový kód celého webu je open-source a zdarma k dispozici na našem <a class="text-teal-500 font-bold" href="https://github.com/softikon/softikon-website" target="_blank">GitHubu</a>.</p>
    </div>
  </div>
</footer> 