<script>
  import { onMount } from 'svelte'
  import Chart from '../components/Chart.svelte'
  import dataPoints from '../components/dataPoints.json'
  import Revealable from '../components/Revealable.svelte'
  import Button from '../components/Button.svelte'
  import LineBlock from '../components/LineBlock.svelte'
  import Scroller from '../components/Scroller.svelte'
  import { animate } from '../helpers/intersectionObserver'

  const items = [
    { title: '&#xe90d;', cat: 0 },
    { title: '&#xe90c;', cat: 0 },
    { title: '&#xe909;', cat: 0 },
    { title: '&#xe908;', cat: 0 },
    { title: '&#xe912;', cat: 0 },
    { title: '&#xe910;', cat: 0 },
    { title: '&#xe913;', cat: 0 },
    { title: '&#xe916;', cat: 1 },    
    { title: '&#xe915;', cat: 1 },
    { title: '&#xe914;', cat: 1 },
    { title: '&#xe911;', cat: 1 },
    { title: '&#xe905;', cat: 1 },
    { title: '&#xe91c;', cat: 1 },
    { title: '&#xe919;', cat: 1 },
    { title: '&#xe917;', cat: 2 },
    { title: '&#xe918;', cat: 2 },
    { title: '&#xe904;', cat: 2 },
    { title: '&#xe906;', cat: 2 },
    { title: '&#xe907;', cat: 2 },
    { title: '&#xe90b;', cat: 2 },
    { title: '&#xe90e;', cat: 2 },
    { title: '&#xe91d;', cat: 2 },
    { title: '&#xe903;', cat: 3 },
    { title: '&#xe902;', cat: 3 },
    { title: '&#xe901;', cat: 3 },
    { title: '&#xe91a;', cat: 3 },
    { title: '&#xe91b;', cat: 3 },
    { title: '&#xe900;', cat: 3 },
    { title: '&#xe90a;', cat: 3 },
    { title: '&#xe90f;', cat: 3 },
  ]

  let currentItem = 0
  let interval

  const setItemManually = i => {
    currentItem = i
  }
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
            <li class="cursor-pointer pagination px-4 lg:px-12 py-8 font-bold" on:click={() => setItemManually(index)} class:active={index === currentItem}>{item}</li>
          {/each}
        </ul>
      </Scroller>
    </div>
    <div class="absolute inset-0">
      <Scroller length="4" on:itemChanged={({detail}) => setItemManually(detail)}>
        <div class="relative w-8/12 lg:w-10/12 mx-auto h-screen flex flex-col justify-center">
          <ul class="flex items-center flex-col w-full">
            <li class="item" class:current={currentItem === 0}>
              <LineBlock xxl class="lg:w-7/12">
                <h3 class="mb-12"><strong>Programujeme</strong><br>technologicky vytříbené<br><strong>aplikace</strong> a <strong>weby</strong></h3>
                <p class="mb-16 leading-loose text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                  Každý programovací jazyk je natolik silný, jako jeho návazný ekosystém a framework, který společně tvoří. Pro každý projekt proto pečlivě vybíráme kombinaci vhodných technologií, která v rámci zvoleného use-case přináší velkou přidanou hodnotu nepřipouští mnoho kompormisů. Extenzivně využíváme Javascript runtime a pro AOT kompilaci do nativního kódu jsme si oblíbili Dart.
                </p>
                <Button href="test/pointer">kontaktujte nás</Button>
              </LineBlock>
            </li>
            <li class="item" class:current={currentItem === 1}>
              <LineBlock xxl class="lg:w-7/12">
                <h3 class="mb-12">Mobile-first<br><strong>nativní a hybrid</strong><br>PWA a AMP aplikace</h3>
                <p class="mb-16 leading-loose text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                  Dlouhodobě propagujeme mobile-first kulturu a přístup. Žijeme v době, kdy už se neptáme, zda uživatel mobilní zařízení vlastní, ale spíše, kolik jich má. Navrhujeme výkonné aplikace, které poběží všude, kde to dává smysl. Máme rádi Kotlin, Swift a Flutter (Dart).
                </p>
                <Button href="test/pointer">kontaktujte nás</Button>
              </LineBlock>
            </li>
            <li class="item" class:current={currentItem === 2}>
              <LineBlock xxl class="lg:w-7/12">
                <h3 class="mb-12"><strong>Datový management</strong><br>Strojové účení<br>Výkonné systémy</h3>
                <p class="mb-16 leading-loose text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                  Na datech nám velmi záleží a jsou naší specialitou. Extenzivně se zabýváme jejich efektivním dolováním, transformací, ukládáním, analýzou a distribucí. Vytváříme modely a flow pro machine learning. Tvoříme spolehlivé a škálovatelné distribuované systémy s vysokou dostupností.
                </p>
                <Button href="test/pointer">kontaktujte nás</Button>
              </LineBlock>
            </li>
            <li class="item" class:current={currentItem === 3}>
              <LineBlock xxl class="lg:w-7/12">
                <h3 class="mb-12">Agilní vývoj<br><strong>CI a CD pipelines</strong><br>Kontejnerizace</h3>
                <p class="mb-16 leading-loose text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                  Kontejnerizace nám umožňuje efektivní vývoj, testování a nasazování všech částí systému. Naplno využíváme principy DevOps a nástoje pro Continuous Integration (CI) a Continuous Delivery (CD). Každý commit vyvolá posloupnost atomických operací, díky kterým se můžeme naplno soustředit na vývoj. Při vývoji se inspirujeme v agilním manifestu.
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
        {#each items.filter((_, i) => i % 2 === 0) as item, index}
          <li style="font-family: icomoon;" class="box bg-white text-6xl text-gray-600 flex items-center justify-center" class:active={item.cat === currentItem}>
            {@html item.title}
          </li>
        {/each}
        {#each items.filter((_, i) => i % 2 === 1) as item, index}
          <li style="font-family: icomoon;" class="box bg-white text-6xl text-gray-600 flex items-center justify-center" class:active={item.cat === currentItem} class:mt-24={index === 0}>
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
    width: 14rem;
    height: 14rem;
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
    width: calc(16rem * 2);
    height: calc(16rem * 15);    
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
