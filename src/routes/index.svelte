<script>
  import { onMount } from 'svelte'
  import Revealable from '../components/Revealable.svelte'
  import Card from '../components/Card.svelte'
  import Animation from '../components/Animation.svelte'
</script>

<svelte:head>
  <title>Softikon.eu - Home Page</title>
</svelte:head>

<article class="pt-40" style="box-sizing: border-box;">
  <section style="width: 80%; margin: auto; padding-bottom: 20rem;">
    <h1 style="font-weight:800;">
      <div>
        <Revealable><span class="outlined">Inteligentní</span> digitální řešení, která pomohou Vašemu byznysu růst<span class="dot">.</span></Revealable>
      </div>
    </h1>
  </section>

  <section class="relative" style="min-height: 1100px;">
    <div class="section-bg light"></div>
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
    <div class="relative" style="padding-left: 10%; padding-top: 5%;">
      <div class="flex flex-row">
        <div class="flex flex-col" style="padding-right: 20rem;">
          <h2><span class="outlined">Perfektní</span> digitální zážitek.</h2>
            <div class="c-line" style="padding-right: 12rem;">
              <span class="c-line-ln"></span>
              <p style="font-size: 1.7rem; line-height: 3.3rem; color: #555;">Perfekcionismus skloubený s uživatelskou jednoduchostí a velkou přidanou hodnotou je motorem pokroku a inovací v jakémkoliv oboru. Pro nás je každý zákazník, který vyznává stejné hodnoty, vždy vítanou výzvou a zároveň možností dokázat, že v digitálním světě není nic nemožné.</p>
              <a href="/#" class="btn">Naše služby</a>
            </div>    
        </div>
        <div class="flex align-center">
          <Animation />
        </div>
      </div> 
    </div>
  </section>

  <section>
    <div class="flex" style="margin-left: 10%;">
      <div style="width: 50%; margin-top: -30rem;">
        <Card background="https://w-dog.net/wallpapers/1/12/521374674606063.jpg">
          <span slot="sub">Autopublisher</span>
          <span slot="title">Specializovaný software pro autobazary, který šetří čas a peníze.</span>
          <a class="card__link" href="/#">Přejít na web</a>
        </Card>
      </div>
      <div style="width: 50%; margin-top: -30rem;">
        <Card mode="dark" background="https://www.analyticsinsight.net/wp-content/uploads/2019/11/Next-for-Big-Data-1024x576.jpg">
          <span slot="sub">Betsense</span>
          <span slot="title">Vytvořili jsme SaaS službu pro sázkové kanceláře.</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </Card>
      </div>
    </div>
  </section>
</article>

<style>
.dot {
  display: inline-block;
  color: #e74c3c;
  animation: blink 1000ms steps(5, start) infinite;
  line-height: 0.5em;
  font-size: 1.25em;
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

h1 {
  font-size: calc(100vw / 17);
  position: relative;
}

h2 {
  font-size: 7rem;
  font-weight: 800;
  position: relative;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>