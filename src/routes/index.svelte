<script>
  import { animate } from '../helpers/intersectionObserver'
  import Revealable from '../components/Revealable.svelte'
  import Card from '../components/Card.svelte'
  import Animation from '../components/Animation.svelte'
  import Animation2 from '../components/Animation2.svelte'
  import Button from '../components/Button.svelte'
  import LineBlock from '../components/LineBlock.svelte'
  import TransitionWrapper from '../components/TransitionWrapper.svelte'
  import InViewport from '../components/InViewport.svelte'
</script>

<svelte:head>
  <title>Inteligentní digitální řešení | Softikon.eu</title>
  <meta name="description" content="Tvůrci, dodavatelé a provozovatelé inteligentních digitálních řešení business-critical problémů, která jednoduše fungují.">
</svelte:head>

<TransitionWrapper>
  <article class="pt-64 lg:pt-64">
    <section class="w-10/12 pt-20 lg:pt-0 mx-auto pb-48">
      <div class="flex flex-wrap">
        <div class="flex flex-col w-full md:w-6/12"> 
          <h1 class="tracking-tighter">
            <Revealable>Digitální řemeslníci <span class="block">s rozumem<span class="softikon-dot">.</span></span></Revealable>
          </h1>
          <LineBlock class="mt-16 hidden md:block uppercase font-medium" data-aos="fade-down" data-aos-duration="1500" data-aos-offset="0" data-aos-delay="1550" grey sm>
            <p class="text-gray-500 text-lg" style="text-rendering: optimizeLegibility;">Píšeme software pro lidi, ne pro stroje</p>
          </LineBlock>
        </div>
        <div class="w-full md:w-6/12 md:pl-16">
          <p data-aos="fade-up" class="tracking-tight pt-16 md:pt-48 leading-relaxed text-3xl lg:text-4xl xl:text-5xl text-gray-600 font-medium">
            Jistá míra rozumné lenosti je katalyzátorem kreativity a ta je motorem pokroku a inovací v každém oboru. <span class="text-gray-700">Baví nás věci zjednodušovat a stavíme inteligentní řešení business-critical problémů</span>, která přináší velkou přidanou hodnotu.
          </p>
          <div data-aos="fade-up">
            <Button class="mt-16 primary" href="work">mrkněte, co jsme vytvořili</Button>
          </div>
        </div>
      </div>
    </section>

    <section id="showcase">
      <div class="w-10/12 mx-auto flex flex-col">
        <Card let:hovered={active} to="work/autopublisher" background="#0f041b" image="img/autopublisher-mock.png">
          <span class="text-white lowercase text-4xl" slot="sub">Autopublisher.</span>
          <span slot="title">Specializovaný software pro autobazary, který šetří čas a peníze.</span>
          <Button href="work/autopublisher" class="text-white" {active}>Více informací</Button>
          <ul slot="labels">
            <li>Nápad, implementace</li>
            <li>Multiplatformní aplikace</li>
          </ul>
        </Card>

        <Card let:hovered={active} to="work/betsense" background="#d2dae5" image="img/betsense-mock.png">
          <span slot="sub" class="text-gray-600 lowercase text-4xl">Betsense.</span>
          <span slot="title" class="text-gray-900">Prémiový kurzový realtime hub, který se pyšní extra nízkou datovou latencí.</span>
          <Button href="work/betsense" class="text-gray-900" {active}>Více informací</Button>
          <ul slot="labels" class="text-gray-900">
            <li>Data-intensive computing</li>
            <li>Inteligentní AI, 500+ mikroslužeb</li>
          </ul>
        </Card>
      </div>
    </section>

    <section class="relative flex mt-64" id="section-about">
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
        <div class="flex flex-col relative w-10/12 lg:w-11/12 pt-48 pb-48 lg:pb-24">
          <h2 data-aos="fade-up" class="mb-24 md:mb-0 lg:w-10/12" style="text-rendering: optimizeLegibility;">
            <span class="outlined">inteligentní</span><br class="hidden md:block" /> data management
          </h2>
          <div class="flex flex-1 flex-col md:flex-row">
            <div class="flex flex-col md:w-3/6 lg:pr-48 self-center">
              <LineBlock class="mb-8" data-aos="fade-up">
                <h3 class="mb-8 text-3xl lg:text-3xl">Chytré backend systémy a zpracování dat</h3>
                <p class="leading-loose text-gray-800 text-2xl mb-16" style="text-rendering: optimizeLegibility;">Vtip spočívá v přetvoření dat v informace a informace v užitek. Věříme, že správně navržený datový management je základním pilířem každého úspěšného byznysu. Víme, jak jsou data důležitá a jejich efektivnímu zpracování, škálování a distribuci věnujeme maximální úsílí. Jsme tvůrci backend systémů, na které je spolehnutí.</p>
                <h3 class="mb-8 text-3xl lg:text-3xl">Aplikace pro reálný svět</h3>
                <p class="leading-loose text-gray-800 text-2xl mb-8" style="text-rendering: optimizeLegibility;">Volba technologie je od začátku tuhý boj. Žijeme v době cross-platformové, která hraje na silnou strunu sdílené codebase. Výkonem však neoslní. Svedli jsme již spoustu technologických bitev. Výsledkem budiž naše aplikace, na které jsme hrdí.</p>
                <Button class="mt-8 primary" href="about">naše odbornost - co umíme</Button>
              </LineBlock>
            </div>
            <div class="hidden md:flex items-center md:justify-end md:w-3/6">
              <div class="md:w-full lg:w-5/6" data-aos="fade-up">
                <InViewport>
                  <Animation2 />
                </InViewport>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  </article>
</TransitionWrapper>

<style>
#section-about {
  min-height: 1050px;
}

@media(min-width: 1024px) {
  #section-about {
    min-height: 1100px;
  }
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
</style>