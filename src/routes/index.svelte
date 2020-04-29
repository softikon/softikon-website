<script>
  import { onMount } from 'svelte'
  import { animate } from '../helpers/intersectionObserver'
  import Revealable from '../components/Revealable.svelte'
  import Card from '../components/Card.svelte'
  import Animation from '../components/Animation.svelte'
  import Animation2 from '../components/Animation2.svelte'
  import Button from '../components/Button.svelte'
</script>

<svelte:head>
  <title>Inteligentní digitální řešení | Softikon.eu</title>
</svelte:head>

<article class="pt-64 lg:pt-64">
  <section class="w-10/12 pt-20 lg:pr-48 lg:pt-0 mx-auto pb-48">
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/6 md:pr-16">
        <h1 class="tracking-tighter">
          <Revealable>Great design is a force of nature<span class="dot">.</span></Revealable>
        </h1>
      </div>
      <div class="w-full md:w-3/6">
        <p class="tracking-tight pt-16 md:pt-16 lg:pt-48 leading-loose font-medium text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600">
          Perfekcionismus skloubený s uživatelskou jednoduchostí a velkou přidanou hodnotou je motorem pokroku a inovací v jakémkoliv oboru. Každý projekt, na kterém pracujeme, bereme jako výzvu a zároveň možnost dokázat, že v digitálním světě není nic nemožné.
        </p>
        <Button class="mt-16" href="softikon">naše filozofie</Button>
      </div>
    </div>
  </section>

  <section class="relative" id="section-about">
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
      <div class="relative w-10/12 lg:w-11/12 pt-48">
        <h2 data-aos="fade-up" data-aos-duration="2000" class="mb-24 lg:mb-48 lg:w-10/12" style="text-rendering: optimizeLegibility;">
          <span class="outlined">inteligentní</span><br />digitální řešení
        </h2>
        <div class="flex flex-col lg:flex-row">
          <div class="flex flex-col lg:w-2/6 lg:mr-48">
            <div data-aos="fade-up" data-aos-duration="2000" class="c-line c-line__lg">
              <span class="c-line-ln hidden lg:block"></span>
              <p class="mb-16 leading-loose text-gray-800 text-2xl" style="text-rendering: optimizeLegibility;">No story told is better than the one you live by yourself. That's why we want your users to create their own stories through a user experience that meets their needs and fits their motivations and expectations. Our UX methodology and UI designs improve your product's perception of value and your audience's satisfaction.</p>
              <Button href="softikon">jak to funguje?</Button>
            </div>
          </div>
          <div class="hidden lg:flex items-end lg:justify-end lg:w-4/6">
            <div class="lg:w-4/6 animation">
              <Animation2 />
            </div>
          </div>
        </div> 
      </div>
    </div>
  </section>

  <section class="w-10/12 pt-48 pb-24 mx-auto">
    <div data-aos="fade-up" data-aos-duration="2000" class="c-line c-line__xl">
      <span class="c-line-ln hidden lg:block"></span>
      <h3 style="text-rendering: optimizeLegibility;">Projekty, na které jsme hrdí</h3>
    </div>
  </section>

  <section id="showcase">
    <div class="w-full lg:w-10/12 mx-auto flex flex-col">
      <Card to="#/" background="#3d399f" image="img/autopublisher-mock.png">
        <span slot="sub">Autopublisher</span>
        <span slot="title">Specializovaný software pro autobazary, který šetří čas a peníze.</span>
        <Button href="/#">Přejít na web</Button>
      </Card>

      <Card to="#/" background="#d2dae5" image="img/betsense-mock.png">
        <span slot="sub" class="text-gray-600">Betsense</span>
        <span slot="title" class="text-gray-900">Prémiový realtime hub pro sázkové kanceláře i sázkaře, který se pyšní nejnižší datovou latencí ve svém oboru.</span>
        <Button className="bg-none text-gray-500" href="/#">Spouštíme Q3/2020</Button>
      </Card>
    </div>
  </section>

  <section class="relative pb-48">
    <div class="flex justify-center lg:justify-end">
      <div class="relative w-10/12 lg:w-11/12 pt-48">
        <h2 data-aos="fade-up" data-aos-duration="2000" class="mb-24 lg:mb-48 lg:w-10/12" style="text-rendering: optimizeLegibility;">
          bouráme hranice<br />a tvoříme <span class="outlined">historii</span>
        </h2>
        <div class="flex flex-col lg:flex-row">
          <div class="flex flex-col lg:w-2/6 lg:mr-48">
            <div data-aos="fade-up" data-aos-duration="2000" class="c-line c-line__lg">
              <span class="c-line-ln hidden lg:block"></span>
              <p class="mb-16 leading-loose text-gray-800 text-2xl" style="text-rendering: optimizeLegibility;">Žádný brand se dnes neobejde bez dobrého příběhu. Neprodávejte svůj produkt jako v supermarketu. Prodávejte kvalitní řešení problému, o které zákazník opravdu stojí. A protože jedním z nejčastějších touchpointů se zákazníkem je právě digitální prostředí, jste u nás na správném místě ;)</p>
              <Button href="softikon">projekty</Button>
            </div>
          </div>
          <div class="hidden lg:flex flex-1">
            <div class="w-full">
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

  #section-about .animation {
    transform: translateY(-10rem);
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
  overflow: hidden;
}

.c-circle-svg {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-left: 5vw;
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