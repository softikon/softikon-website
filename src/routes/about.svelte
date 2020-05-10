<script>
  import Chart from '../components/Chart.svelte'
  import dataPoints from '../components/dataPoints.json'
  import Revealable from '../components/Revealable.svelte'
  import Button from '../components/Button.svelte'
  import LineBlock from '../components/LineBlock.svelte'
  import Scroller from '../components/Scroller.svelte'
  import { animate } from '../helpers/intersectionObserver'

  const items = [...Array(17).keys()].map(i => ({ title: `&#xe${900 + i};`, cat: (Math.random() * 3) | 0 }))
  let currentItem = 0
  
  setInterval(() => {
    currentItem = (currentItem + 1) % 4
  }, 5000)
</script>

<svelte:head>
  <title>Inteligentní digitální řešení | Softikon.eu</title>
</svelte:head>

<article>
  <section class="absolute top-0 w-full pb-8">
    <div class="flex">
      <div class="charts-shadow relative flex-1">
        <Chart delay="0" id="discover" dataPoints={dataPoints.discover} fillStyle="rgba(233,30,99, 0.8)" />
        <Chart delay="400" id="design" dataPoints={dataPoints.design} fillStyle="rgba(244,67,54, 0.8)" />
        <Chart delay="800" id="implement" dataPoints={dataPoints.implement} fillStyle="rgba(255,152,0, 0.8)" />
        <Chart delay="1200" id="develop" dataPoints={dataPoints.develop} fillStyle="rgba(255,235,59, 0.8)" />
        <Chart delay="1600" id="deliver" dataPoints={dataPoints.deliver} fillStyle="rgba(205,220,57, 0.8)" />
        <Chart delay="2000" id="analytics" dataPoints={dataPoints.analytics} fillStyle="rgba(0,150,136, 0.8)" />
      </div>
    </div>
  </section>

  <section class="w-11/12 absolute" style="top: 11.6rem; right: 1rem;">
    <ul class="flex flex-row" data-aos="fade-down">
      <li class="chart-item w-1/6 flex items-center justify-start">
        <div class="mr-8 chart-dot" style="background: rgba(233,30,99, 0.8)"></div>
        <span class="font-semibold uppercase text-md">nápad</span>
      </li>
      <li class="chart-item w-1/6 flex items-center justify-start">
        <div class="mr-8 chart-dot" style="background: rgba(244,67,54, 0.8)"></div>
        <span class="font-semibold uppercase text-md">průzkum</span>
      </li>
      <li class="chart-item w-1/6 flex items-center justify-start">
        <div class="mr-8 chart-dot" style="background: rgba(255,152,0, 0.8)"></div>
        <span class="font-semibold uppercase text-md">design</span>
      </li>
      <li class="chart-item w-1/6 flex items-center justify-start">
        <div class="mr-8 chart-dot" style="background: rgba(255,235,59, 0.8)"></div>
        <span class="font-semibold uppercase text-md">vývoj</span>
      </li>
      <li class="chart-item w-1/6 flex items-center justify-start">
        <div class="mr-8 chart-dot" style="background: rgba(205,220,57, 0.8)"></div>
        <span class="font-semibold uppercase text-md">deploy</span>
      </li>
      <li class="chart-item w-1/6 flex items-center justify-start">
        <div class="mr-8 chart-dot" style="background: rgba(0,150,136, 0.8"></div>
        <span class="font-semibold uppercase text-md">analytika</span>
      </li>
    </ul>
  </section>
  <section class="pb-16 flex items-end relative min-h-screen">
    <div class="w-10/12 mx-auto flex flex-wrap">
      <div class="flex flex-col w-full md:w-6/12">
          <h1 style="line-height:1em;font-size: 16rem;" class="alternative-font">
            <span>
              <Revealable><span class="block">Make</span> it &lt;real&gt;</Revealable>
            </span>
          </h1>
      </div>
      <div class="w-full md:w-6/12 md:pl-16">
        <p data-aos="fade-up" class="tracking-tight pt-16 md:pt-48 leading-loose font-medium text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600">
          Nechat za sebe mluvit odvedenou práci není klišé. Naopak. Každý úspěšný projekt se stane úspěšným především proto, že se v něm spojuje nápad, vášeň, talent, zkušenosti, precizní technické zpracování a od počátku perfektní, promyšlená strategie a komunikace.
        </p>
      </div>
    </div>
  </section>

  <div class="flex min-h-screen relative">
    <div class="section-bg light"></div>
    <div class="absolute inset-0 z-10">
      <Scroller>
        <div class="absolute flex items-center" style="top:0; bottom:0;">
          <ul class="flex flex-col">
            {#each [1,2,3,4] as item, index}
              <li class="pagination px-4 lg:px-12 py-4 font-bold" class:active={index === currentItem}>{item}</li>
            {/each}
          </ul>
        </div>
        <div class="relative w-8/12 lg:w-10/12 mx-auto h-screen flex flex-col justify-center">
          <ul class="flex items-center flex-col w-full">
            <li class="item" class:current={currentItem === 0}>
              <LineBlock xxl class="lg:w-7/12">
                <h3 class="mb-12"><strong>Programujeme</strong><br>vyladěné<br>aplikace a weby</h3>
                <p class="mb-16 leading-loose text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                  Každý programovací jazyk a návazný ekosystém má své silné stránky. Pro každý projekt proto pečlivě vybíráme vhodnou technologií, která nezklame.
                </p>
                <Button href="test/pointer">kontaktujte nás</Button>
              </LineBlock>
            </li>
            <li class="item" class:current={currentItem === 1}>
              <LineBlock xxl class="lg:w-7/12">
                <h3 class="mb-12">Specializace na<br><strong>full-stack</strong><br>vývoj</h3>
                <p class="mb-16 leading-loose text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                  Máme zkušenosti s desítkami projektů. Každý z nás si právem může říkat full-stack vývojář.
                </p>
                <Button href="test/pointer">kontaktujte nás</Button>
              </LineBlock>
            </li>
            <li class="item" class:current={currentItem === 2}>
              <LineBlock xxl class="lg:w-7/12">
                <h3 class="mb-12"><strong>Full-Cycle</strong><br>Custom Software<br>Development</h3>
                <p class="mb-16 leading-loose text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                  From ideation through prototyping to delivery & maintenance, we execute the full development cycle to create businesses-oriented solutions.
                </p>
                <Button href="test/pointer">kontaktujte nás</Button>
              </LineBlock>
            </li>
            <li class="item" class:current={currentItem === 3}>
              <LineBlock xxl class="lg:w-7/12">
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
      <ul class="flex flex-col flex-wrap my-24" style="width: calc(28rem * 2); height: calc(28rem * 9 + 25rem);">
        {#each items as item, index}
          <li style="font-family: icomoon;" class="box bg-white text-6xl text-gray-600 flex mb-12 mr-12 items-center justify-center" class:active={item.cat === currentItem} class:mt-24={(index+1)%10 === 0}>
            {@html item.title}
          </li>
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
    opacity: 0.3;
    width: 25rem;
    height: 25rem;
    @apply shadow-md;
  }

  .box.active {
    opacity: 1;
    transform: scale(1.035);
    transform-origin: center center;
    @apply shadow-lg;
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

  .charts-shadow {
    height: 6rem;
    transform: scaleY(-1) skewX(-20deg) translateY(1px) translateX(2.25rem);    
  }

  .chart-dot {
    width: 5rem;
    height: 0.4rem;
    border-radius: 20px;  
  }

  .chart-item {
    transform: rotate(90deg);
  }

  .chart-item > span {
    transform: rotate(-90deg);
  }

  @media(min-width: 1024px) {
    .charts-shadow {
      height: 5rem;
      transform: scaleY(-1);    
    }
  }
</style>