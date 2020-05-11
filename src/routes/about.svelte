<script>
  import { onMount } from 'svelte'
  import Chart from '../components/Chart.svelte'
  import dataPoints from '../components/dataPoints.json'
  import Revealable from '../components/Revealable.svelte'
  import Button from '../components/Button.svelte'
  import LineBlock from '../components/LineBlock.svelte'
  import Scroller from '../components/Scroller.svelte'
  import { animate } from '../helpers/intersectionObserver'

  const items = [...Array(30).keys()].map(i => ({ title: `&#xe9${i.toString(16).padStart(2,0)};`, cat: (Math.random() * 3) | 0 }))
  let currentItem = 0
  let interval

  const setItemManually = i => {
    currentItem = i
    stopInterval()
  }
  
  const stopInterval = () => {
    clearInterval(interval)
  }

  onMount(() => {
    interval = setInterval(() => {
      currentItem = (currentItem + 1) % 4
    }, 5000)

    return stopInterval
  })
</script>

<svelte:head>
  <title>Inteligentní digitální řešení | Softikon.eu</title>
</svelte:head>

<article>
  <section class="pb-16 flex items-end relative min-h-screen">
    <div class="w-10/12 mx-auto flex flex-wrap flex-col">
      <div class="flex flex-col w-full md:w-9/12">
          <h1 class="h1--sub alternative-font">
            <span>
              <Revealable><span class="block">Make</span> it &lt;real&gt;</Revealable>
            </span>
          </h1>
      </div>
      <div class="w-full md:w-9/12">
        <p data-aos="fade-up" class="tracking-tight pt-16 leading-loose font-medium text-3xl md:text-2xl text-gray-600">
          Nechat za sebe mluvit odvedenou práci není klišé. Naopak. Každý úspěšný projekt se stane úspěšným především proto, že se v něm spojuje nápad, vášeň, talent, zkušenosti, precizní technické zpracování a od počátku perfektní, promyšlená strategie a komunikace.
        </p>
      </div>
    </div>
  </section>

  <div class="flex min-h-screen relative" style="padding-top: 15vh;">
    <div class="section-bg light"></div>
    <div class="absolute inset-y-0 w-24 z-20">
      <Scroller autoWidth>
        <ul class="h-screen flex flex-col justify-center">
          {#each [1,2,3,4] as item, index}
            <li class="pagination px-4 lg:px-12 py-8 font-bold" on:click={() => setItemManually(index)} class:active={index === currentItem}>{item}</li>
          {/each}
        </ul>
      </Scroller>
    </div>
    <div class="absolute inset-0">
      <Scroller>
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
      <ul class="technologies flex flex-col flex-wrap my-24">
        {#each items as item, index}
          <li style="font-family: icomoon;" class="box bg-white text-6xl text-gray-600 flex items-center justify-center" class:active={item.cat === currentItem} class:mt-24={(index+1)%15 === 0}>
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
    width: 12rem;
    height: 12rem;
    @apply shadow-md;
    @apply mb-8;
    @apply mr-8;
    z-index: -1;
  }

  @media(min-width: 1024px) {
    .box {
      width: 25rem;
      height: 25rem;
      @apply mb-12;
      @apply mr-12;
    }
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

  .technologies {
    width: calc(14rem * 2);
    height: calc(14rem * 15);    
  }

  @media(min-width: 1024px) {
    .technologies {
      width: calc(28rem * 2);
      height: calc(28rem * 15);      
    }
  }

  :global(canvas#discover), :global(canvas#deliver) {
    z-index:2
  }

  .charts-shadow {
    height: 11vh;
    transform: scaleY(-1);    
  }

  .chart-dot {
    max-width: 4rem;
    flex-grow: 1;
    height: 2px;
  }

  .chart-item {
    transform: rotate(90deg) translateY(-6vw);
    transform-origin: left;
    @apply text-sm;
  }

  @media(min-width: 768px) {
    .chart-item {
      @apply text-xl;
    }

    .chart-item > span {
      @apply ml-4;
    }
  }

  .chart-item > span {
    transform: rotate(-90deg);
    @apply text-gray-600;
  }
</style>