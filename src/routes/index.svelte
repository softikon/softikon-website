<script>
  import { onMount } from 'svelte'
  import Revealable from '../components/Revealable.svelte'
  import Card from '../components/Card.svelte'
  import Animation from '../components/Animation.svelte'
  import Animation2 from '../components/Animation2.svelte'
  import Button from '../components/Button.svelte'
</script>

<svelte:head>
  <title>Softikon.eu - Home Page</title>
</svelte:head>

<article class="pt-64 lg:pt-64" style="box-sizing: border-box;">
  <section class="w-10/12 pt-20 lg:pr-48 lg:pt-0 mx-auto pb-48">
    <h1>
      <div>
        <Revealable>inteligentní digitální řešení, která pomohou vašemu byznysu růst<span class="dot">.</span></Revealable>
      </div>
    </h1>
  </section>

  <section class="relative" style="min-height: 1100px;">
    <div class="section-bg light"></div>
    <div class="c-circle" data-aos="fade-up" data-aos-duration="2000">
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
        <div class="flex flex-col lg:flex-row">
          <div class="flex flex-col">
            <h2 data-aos="fade-up" data-aos-duration="2000" class="mb-48 lg:w-10/12">
              <span class="outlined">perfektní</span> digitální zážitek
            </h2>
            <div data-aos="fade-up" data-aos-duration="2000" class="c-line lg:w-7/12">
              <span class="c-line-ln hidden lg:block"></span>
              <p class="mb-16 leading-loose" style="font-size: 1.635rem; color: rgba(17, 17, 17, 0.8);">Perfekcionismus skloubený s uživatelskou jednoduchostí a velkou přidanou hodnotou je motorem pokroku a inovací v jakémkoliv oboru. Pro nás je každý zákazník, který vyznává stejné hodnoty, vždy vítanou výzvou a zároveň možností dokázat, že v digitálním světě není nic nemožné.</p>
              <Button href="/#test">let's design better products</Button>
            </div>    
          </div>
          <div class="flex hidden lg:block">
            <Animation />
          </div>
        </div> 
      </div>
    </div>
  </section>

  <section>
    <div class="flex justify-center lg:justify-end">
      <div class="flex flex-wrap lg:w-10/12">
        <div class="w-full md:w-6/12" style="margin-top: -30rem;">
          <Card data-aos="zoom-out-right" data-aos-duration="2000" background="https://w-dog.net/wallpapers/1/12/521374674606063.jpg">
            <span slot="sub">Autopublisher</span>
            <span slot="title">Specializovaný software pro autobazary, který šetří čas a peníze.</span>
            <a class="card__link" href="/#">Přejít na web</a>
          </Card>
        </div>
      <div class="w-full md:w-6/12" style="margin-top: -30rem;">
          <Card data-aos="zoom-out-left" data-aos-duration="2000" mode="dark" background="https://www.analyticsinsight.net/wp-content/uploads/2019/11/Next-for-Big-Data-1024x576.jpg">
            <span slot="sub">Betsense</span>
            <span slot="title">Vytvořili jsme SaaS službu pro sázkové kanceláře.</span>
            <p>Lorem ipsum dolor sit amet...</p>
          </Card>
        </div>
      </div>
    </div>
  </section>

  <section class="relative pb-64">
    <div class="section-bg white"></div>
    <div class="flex justify-center lg:justify-end">
      <div class="relative w-10/12 lg:w-11/12 pt-48">
        <div class="flex flex-col lg:flex-row items-stretch">
          <div class="flex flex-col">
            <h2 data-aos="fade-up" data-aos-duration="2000" class="mb-48 lg:w-9/12">
              jdeme s dobou a <span class="outlined">ještě dál</span>
            </h2>
            <div data-aos="fade-up" data-aos-duration="2000" class="c-line lg:w-7/12">
              <span class="c-line-ln hidden lg:block"></span>
              <p class="mb-16 leading-loose" style="font-size: 1.635rem; color: rgba(17, 17, 17, 0.8);">Žádný brand se dnes neobejde bez dobrého příběhu. Neprodávejte svůj produkt jako v supermarketu. Prodávejte kvalitní řešení problému, o které zákazník opravdu stojí. A protože jedním z nejčastějších touchpointů se zákazníkem je právě digitální prostředí, jste u nás na správném místě ;)</p>
              <Button href="test/pointer">let's design better products</Button>
            </div>    
          </div>
          <div class="flex items-center justify-center" style="min-width: 45%;transform:rotate(-30deg);">
            <Animation2 />      
          </div>
        </div> 
      </div>
    </div>
  </section>  
</article>

<style>
.dot {
  display: inline-block;
  color: #e74c3c;
  animation: blink 1000ms steps(5, start) infinite;
  font-weight: 800;
}

.outlined {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
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
  width: 180rem;
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