<script>
  import { onMount } from 'svelte'
  import { animate } from '../helpers/intersectionObserver'
  import Revealable from '../components/Revealable.svelte'
  import Card from '../components/Card.svelte'
  import Animation from '../components/Animation.svelte'
  import Animation2 from '../components/Animation2.svelte'
  import Button from '../components/Button.svelte'
  import LineBlock from '../components/LineBlock.svelte'
</script>

<svelte:head>
  <title>Inteligentní digitální řešení | Softikon.eu</title>
</svelte:head>

<article class="pt-64 lg:pt-64">
  <section class="w-10/12 pt-20 lg:pt-0 mx-auto pb-48">
    <div class="flex flex-wrap">
      <div class="flex flex-col w-full md:w-3/6 md:pr-16"> 
        <h1 class="tracking-tighter">
          <Revealable>Perfection is made up of small things<span><span class="dot">.</span></span></Revealable>
        </h1>
        <LineBlock class="mt-16 hidden md:block uppercase font-medium" data-aos="fade-down" data-aos-duration="1500" data-aos-offset="0" data-aos-delay="1550" grey sm>
          <p class="text-gray-500 text-lg" style="text-rendering: optimizeLegibility;">Just not too many!</p>
        </LineBlock>
      </div>
      <div class="w-full md:w-3/6">
        <p class="tracking-tight pt-16 md:pt-16 lg:pt-48 leading-loose font-medium text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600">
          Perfekcionismus skloubený s uživatelskou jednoduchostí a velkou přidanou hodnotou je motorem pokroku a inovací v jakémkoliv oboru. Každý projekt, na kterém pracujeme, bereme jako výzvu a zároveň možnost dokázat, že v digitálním světě není nic nemožné.
        </p>
        <Button class="mt-16" href="softikon">náš přístup</Button>
      </div>
    </div>
  </section>

  <section class="relative flex" id="section-about">
    <div class="section-bg light" use:animate data-animate="slideScaleLeft"></div>
    <div class="c-circle">
      <svg class="c-circle-svg" viewBox="0 0 1820 1230" style="opacity: 1;">
        <circle class="c-circle-item" cx="535.8" cy="535.8" r="529.5" style="stroke-dashoffset: 1e-05; stroke-dasharray: none; transform-origin: 0px 0px 0px;" data-svg-origin="535.7999877929688 535.7999877929688" transform="matrix(-0.17364,-0.9848,0.9848,-0.17364,101.18069722481926,1156.5006613095434)"></circle>
        <circle class="c-circle-item" cx="1284.8" cy="694.8" r="529" style="stroke-dashoffset: 1e-05; stroke-dasharray: none; transform-origin: 0px 0px 0px;" data-svg-origin="1284.800048828125 694.7999877929688" transform="matrix(-0.17364,-0.9848,0.9848,-0.17364,823.6588212022089,2080.731788672624)"></circle>
        <g class="c-circle-plus">
          <circle cx="985.8" cy="257.8" r="32" style="stroke-dashoffset: 1e-05; stroke-dasharray: none; transform-origin: 0px 0px 0px;" data-svg-origin="985.7999877929688 257.79998779296875" transform="matrix(0.93969,-0.34202,0.34202,0.93969,-28.721775081229453,352.7106947406122)"></circle>
          <line x1="986.3" y1="244.3" x2="986.3" y2="271.3" style="stroke-dashoffset: 1e-05; stroke-dasharray: none;"></line>
          <line x1="972.3" y1="258.3" x2="999.3" y2="258.3" style="stroke-dashoffset: 1e-05; stroke-dasharray: none;"></line>
        </g>
      </svg>
    </div>
    <div class="flex justify-center lg:justify-end">
      <div class="flex flex-col relative w-10/12 lg:w-11/12 py-48">
        <h2 data-aos="fade-up" data-aos-duration="2000" class="mb-24 md:mb-0 lg:w-10/12" style="text-rendering: optimizeLegibility;">
          <span class="outlined">inteligentní</span><br />digitální řešení
        </h2>
        <div class="flex flex-1 flex-col md:flex-row">
          <div class="flex flex-col md:w-3/6 lg:pr-48 self-center">
            <LineBlock class="mb-8" data-aos="fade-up" data-aos-duration="2000">
              <h3 class="mb-8 text-3xl lg:text-3xl">Smart backend and data processing systems</h3>
              <p class="leading-loose text-gray-800 text-2xl mb-8" style="text-rendering: optimizeLegibility;">Effective data management is a pillar of any successful business. Our teams develop and build scalable backend systems, data processing pipelines, and workflows that will have your business-critical apps up and running…and running…and running.</p>
              <Button class="mt-8" href="softikon">náš technologický stack</Button>
            </LineBlock>
          </div>
          <div class="hidden md:flex items-center md:justify-end md:w-3/6">
            <div class="md:w-full lg:w-5/6" data-aos="fade-up" data-aos-duration="2000">
              <Animation2 />
            </div>
          </div>
        </div> 
      </div>
    </div>
  </section>

  <section class="w-10/12 pt-48 pb-24 mx-auto">
    <LineBlock data-aos="fade-up" data-aos-duration="2000" xl>
      <h3 style="text-rendering: optimizeLegibility;">Práce, na kterou jsme hrdí</h3>
    </LineBlock>
  </section>

  <section id="showcase">
    <div class="w-full xl:w-10/12 mx-auto flex flex-col">
      <Card to="work/autopublisher" background="#0f041b" image="img/autopublisher-mock.png">
        <span class="text-white alternative-font text-4xl" slot="sub">Autopublisher</span>
        <span slot="title">Specializovaný software pro autobazary, který šetří čas a peníze.</span>
        <a class="text-3xl text-white font-bold underline" href="work/autopublisher">Více informací</a>
        <ul slot="labels">
          <li>Nápad, implementace</li>
          <li>Multiplatformní aplikace</li>
        </ul>
      </Card>

      <Card to="work/betsense" background="#d2dae5" image="img/betsense-mock.png">
        <span slot="sub" class="text-gray-600">Betsense</span>
        <span slot="title" class="text-gray-900">Prémiový realtime hub pro sázkové kanceláře i sázkaře, který se pyšní nejnižší datovou latencí ve svém oboru.</span>
        <div class="text-xl text-gray-500">Spouštíme Q3/2020</div>
        <ul slot="labels" class="text-gray-900">
          <li>Idea, Direction</li>
          <li>Electron App + Website</li>      
        </ul>
      </Card>
    </div>
  </section>

  <section class="relative pb-48">
    <div class="flex justify-center md:justify-end">
      <div class="relative w-10/12 md:w-11/12 pt-48">
        <h2 data-aos="fade-up" data-aos-duration="2000" class="mb-24 lg:mb-48 lg:w-10/12" style="text-rendering: optimizeLegibility;">
          bouráme hranice<br />a tvoříme <span class="outlined">historii</span>
        </h2>
        <div class="flex flex-col md:flex-row">
          <div class="flex md:w-2/6 md:mr-48">
            <LineBlock data-aos="fade-up" data-aos-duration="2000" lg>
              <p class="mb-16 leading-loose text-gray-800 text-2xl" style="text-rendering: optimizeLegibility;">Žádný brand se dnes neobejde bez dobrého příběhu. Neprodávejte svůj produkt jako v supermarketu. Prodávejte kvalitní řešení problému, o které zákazník opravdu stojí. A protože jedním z nejčastějších touchpointů se zákazníkem je právě digitální prostředí, jste u nás na správném místě ;)</p>
              <Button href="softikon">projekty</Button>
            </LineBlock>
          </div>
          <div class="md:flex md:w-4/6 flex-1 py-40 md:py-0">
            <div class="w-full" data-aos="fade-up" data-aos-duration="2000">
              <Animation />
            </div>
          </div>
        </div> 
      </div>
    </div>
  </section>
</article>

<style>
#section-about {
  min-height: 720px;
}

@media(min-width: 1024px) {
  #section-about {
    min-height: 1000px;
  }
}

.dot {
  display: inline-block;
  color: lightcoral;
  animation: blink 1000ms steps(5, start) infinite;
  font-weight: 800;
}

.c-circle {
  position: absolute;
  top: -10rem;
  right: 0;
  bottom: 0;
  left: 0;
}

.c-circle-svg {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-left: 8vw;
  width: 120rem;
}

@media(min-width: 1024px) {
  .c-circle-svg {
    width: 180rem;
  } 
}

.c-circle-item {
  fill: none;
  stroke: rgba(17, 17, 17, 0.1);
  stroke-dasharray: 3;
  stroke-width: 1px;
  transform-origin: 0px 0px 0px;
}

.c-circle-plus circle {
    fill: none;
    stroke: rgba(17, 17, 17, 0.1);
}

.c-circle-plus line {
    stroke: rgba(17, 17, 17, 0.5);
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>