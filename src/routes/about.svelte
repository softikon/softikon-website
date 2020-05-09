<script>
  import Chart from '../components/Chart.svelte'
  import dataPoints from '../components/dataPoints.json'
  import Revealable from '../components/Revealable.svelte'
  import Button from '../components/Button.svelte'
  import LineBlock from '../components/LineBlock.svelte'
  import Scroller from '../components/Scroller.svelte'
  import { animate } from '../helpers/intersectionObserver'

  const items = [...Array(30).keys()].map(i => ({ title: 'Tile ' + (i + 1), cat: (Math.random() * 3) | 0 }))
  let currentItem = 0
  
  setInterval(() => {
    currentItem = (currentItem + 1) % 3
  }, 5000)
</script>

<svelte:head>
  <title>Inteligentní digitální řešení | Softikon.eu</title>
</svelte:head>

<article class="pt-48">
  <section class="pb-48 min-h-screen relative" id="process">
    <div class="w-10/12 mx-auto flex flex-wrap">
      <div class="flex flex-col w-full md:w-6/12">
          <h1 class="tracking-tighter">
            <span>
              <Revealable><span class="block font-normal">Úspěch</span> není dílem náhody<span><span class="softikon-dot">.</span></span></Revealable>
            </span>
          </h1>

          <div class="mt-20">
            <ul class="flex flex-row flex-wrap" data-aos="fade-up">
              <li class="w-2/6 flex items-center justify-start">
                <div class="mr-8 chart-dot" style="background: rgba(80, 177, 170, 0.8)"></div>
                <span class="font-semibold uppercase text-md">nápad</span>
              </li>
              <li class="w-2/6 flex items-center justify-start">
                <div class="mr-8 chart-dot" style="background: rgba(245, 122, 115, 0.8)"></div>
                <span class="font-semibold uppercase text-md">průzkum</span>
              </li>
              <li class="w-2/6 flex items-center justify-start">
                <div class="mr-8 chart-dot" style="background: rgba(255, 181, 102, 0.8)"></div>
                <span class="font-semibold uppercase text-md">design</span>
              </li>
              <li class="w-2/6 flex items-center justify-start">
                <div class="mr-8 chart-dot" style="background: rgba(67, 192, 230, 0.8)"></div>
                <span class="font-semibold uppercase text-md">vývoj</span>
              </li>
              <li class="w-2/6 flex items-center justify-start">
                <div class="mr-8 chart-dot" style="background: rgba(96, 102, 106, 0.8)"></div>
                <span class="font-semibold uppercase text-md">deploy</span>
              </li>
              <li class="w-2/6 flex items-center justify-start">
                <div class="mr-8 chart-dot" style="background: rgba(158, 101, 151, 0.8"></div>
                <span class="font-semibold uppercase text-md">analytika</span>
              </li>
            </ul>
          </div>
      </div>
      <div class="w-full md:w-6/12 md:pl-16">
        <p data-aos="fade-up" class="tracking-tight pt-16 md:pt-48 leading-loose font-medium text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600">
          Nechat za sebe mluvit odvedenou práci není klišé. Naopak. Každý úspěšný projekt se stane úspěšným především proto, že se v něm spojuje nápad, vášeň, talent, zkušenosti, precizní technické zpracování a od počátku perfektní, promyšlená strategie a komunikace.
        </p>
      </div>
    </div>

    <div class="absolute" style="bottom: 0;left:0;right:0;">
      <div class="charts relative">
        <Chart delay="0" id="discover" dataPoints={dataPoints.discover} fillStyle="rgba(80, 177, 170, 0.8)" />
        <Chart delay="300" id="design" dataPoints={dataPoints.design} fillStyle="rgba(245, 122, 115, 0.8)" />
        <Chart delay="600" id="implement" dataPoints={dataPoints.implement} fillStyle="rgba(255, 181, 102, 0.8)" />
        <Chart delay="900" id="develop" dataPoints={dataPoints.develop} fillStyle="rgba(67, 192, 230, 0.8)" />
        <Chart delay="1200" id="deliver" dataPoints={dataPoints.deliver} fillStyle="rgba(96, 102, 106, 0.8)" />
        <Chart delay="1500" id="analytics" dataPoints={dataPoints.analytics} fillStyle="rgba(158, 101, 151, 0.8)" />
      </div>
    </div>
  </section>

  <section class="relative pb-12">
    <div class="section-bg light"></div>
    <div class="flex">
      <div class="charts-shadow relative flex-1">
        <Chart delay="0" id="discover-shadow" dataPoints={dataPoints.discover} fillStyle="rgba(80, 177, 170, 0.2)" />
        <Chart delay="300" id="design-shadow" dataPoints={dataPoints.design} fillStyle="rgba(245, 122, 115, 0.2)" />
        <Chart delay="600" id="implement-shadow" dataPoints={dataPoints.implement} fillStyle="rgba(255, 181, 102, 0.2)" />
        <Chart delay="900" id="develop-shadow" dataPoints={dataPoints.develop} fillStyle="rgba(67, 192, 230, 0.2)" />
        <Chart delay="1200" id="deliver-shadow" dataPoints={dataPoints.deliver} fillStyle="rgba(96, 102, 106, 0.2)" />
        <Chart delay="1500" id="analytics-shadow" dataPoints={dataPoints.analytics} fillStyle="rgba(158, 101, 151, 0.2)" />
      </div>
    </div>
  </section>

  <div class="flex min-h-screen relative">
    <div class="section-bg light"></div>
    <div class="absolute inset-0 z-10">
      <Scroller>
        <div class="absolute flex items-center" style="top:0; bottom:0;">
          <ul class="flex flex-col">
            {#each [1,2,3,4] as item}
              <li class="pagination px-4 lg:px-12 py-4 font-bold" class:active={item === currentItem + 1}>{item}</li>
            {/each}
          </ul>
        </div>
        <div class="relative w-8/12 lg:w-10/12 mx-auto h-screen flex flex-col justify-center">
          <ul class="flex items-center flex-col w-full">
            <li class="item" class:current={currentItem === 0}>
              <LineBlock xl class="lg:w-7/12">
                <h3 class="mb-12"><strong>Programujeme</strong><br>vyladěné<br>aplikace a weby</h3>
                <p class="mb-16 leading-loose text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                  Každý programovací jazyk a návazný ekosystém má své silné stránky. Pro každý projekt proto pečlivě vybíráme vhodnou technologií, která nezklame.
                </p>
                <Button href="test/pointer">kontaktujte nás</Button>
              </LineBlock>
            </li>
            <li class="item" class:current={currentItem === 1}>
              <LineBlock xl class="lg:w-7/12">
                <h3 class="mb-12">Specializace na<br><strong>full-stack</strong><br>vývoj</h3>
                <p class="mb-16 leading-loose text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                  Máme zkušenosti s desítkami projektů. Každý z nás si právem může říkat full-stack vývojář.
                </p>
                <Button href="test/pointer">kontaktujte nás</Button>
              </LineBlock>
            </li>
            <li class="item" class:current={currentItem === 2}>
              <LineBlock xl class="lg:w-7/12">
                <h3 class="mb-12"><strong>Full-Cycle</strong><br>Custom Software<br>Development</h3>
                <p class="mb-16 leading-loose text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                  From ideation through prototyping to delivery & maintenance, we execute the full development cycle to create businesses-oriented solutions.
                </p>
                <Button href="test/pointer">kontaktujte nás</Button>
              </LineBlock>
            </li>
            <li class="item" class:current={currentItem === 3}>
              <LineBlock xl class="lg:w-7/12">
                <h3 class="mb-12"><strong>Responsive</strong><br>Web & Mobile App<br>Development</h3>
                <p class="mb-16 leading-loose text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                  Syndicode writes high-performing backend along with client-oriented fronted and outstanding design. Applications we create work smoothly on both web and mobile.
                </p>
                <Button href="test/pointer">kontaktujte nás</Button>
              </LineBlock>
            </li>
          </ul>
        </div>
      </Scroller>
    </div>
    <div style="margin-left: auto;">
      <ul class="flex flex-col flex-wrap my-24" style="width: calc(18rem * 2); height: calc(18rem * 15 + 16rem);">
        {#each items as item, index}
          <li class="box shadow-xl bg-white flex h-64 w-64 mb-8 mr-8 items-center justify-center" class:active={item.cat === currentItem} class:mt-24={(index+1)%16 === 0}>{item.title}</li>
        {/each}
      </ul>
    </div>
  </div>
</article>

<style>
  .pagination.active {
    background-color: black;
    color: #fff;
  }

  .box {
    transition: all 1s;
    opacity: 0.38;
    filter: blur(1px)
  }

  .box.active {
    opacity: 0.8;
    filter: blur(0);
  }

  .item {
    position: absolute;
    opacity: 0;
    transition: opacity 0.69s;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  .item.current {
    opacity: 1;
  }

  :global(canvas#discover), :global(canvas#deliver) {
    z-index:2
  }

  #process .charts {
    height: 10rem;
  }

  .charts-shadow {
    height: 6rem;
    transform: scaleY(-1) skewX(-20deg) translateY(1px) translateX(2.25rem);    
  }

  .chart-dot {
    width: 1rem;
    height: 1rem;  
  }

  @media(min-width: 1024px) {
    #process .charts {
      height: 10rem;
    }

    .charts-shadow {
      height: 6rem;
      transform: scaleY(-1) skewX(-20deg) translateY(1px) translateX(2.25rem);    
    }
  }
</style>