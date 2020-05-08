<script>
  import Chart from '../components/Chart.svelte'
  import dataPoints from '../components/dataPoints.json'
  import Revealable from '../components/Revealable.svelte'
  import Button from '../components/Button.svelte'
  import LineBlock from '../components/LineBlock.svelte'
</script>

<svelte:head>
  <title>Inteligentní digitální řešení | Softikon.eu</title>
</svelte:head>

<article class="pt-48">
  <section class="pb-48 relative" id="process">
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
        <p data-aos="fade-up" class="tracking-tight pt-16 md:pt-16 lg:pt-48 leading-loose font-medium text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600">
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

  <section class="relative pb-64">
    <div class="section-bg light"></div>
    <div class="flex pb-16">
      <div class="charts-shadow relative flex-1">
        <Chart delay="0" id="discover" dataPoints={dataPoints.discover} fillStyle="rgba(80, 177, 170, 0.2)" />
        <Chart delay="300" id="design-shadow" dataPoints={dataPoints.design} fillStyle="rgba(245, 122, 115, 0.2)" />
        <Chart delay="600" id="implement-shadow" dataPoints={dataPoints.implement} fillStyle="rgba(255, 181, 102, 0.2)" />
        <Chart delay="900" id="develop-shadow" dataPoints={dataPoints.develop} fillStyle="rgba(67, 192, 230, 0.2)" />
        <Chart delay="1200" id="deliver-shadow" dataPoints={dataPoints.deliver} fillStyle="rgba(96, 102, 106, 0.2)" />
        <Chart delay="1500" id="analytics-shadow" dataPoints={dataPoints.analytics} fillStyle="rgba(158, 101, 151, 0.2)" />
      </div>    
    </div>

    <div class="flex justify-center lg:justify-end">
      <div class="relative w-10/12 lg:w-11/12">
        <div class="flex flex-col lg:flex-row items-stretch">
          <div class="flex flex-col">
            <h2 data-aos="fade-up" class="mb-24 lg:w-9/12">
              make it <span class="outlined">&lt;real &#47;&gt;</span>
            </h2>
            <LineBlock data-aos="fade-up" lg class="lg:w-7/12">
              <p class="mb-16 leading-loose" style="font-size: 1.635rem; color: rgba(17, 17, 17, 0.8);">
                Nechat za sebe mluvit odvedenou práci není klišé. Naopak. Každý úspěšný projekt se stane úspěšným především proto, že se v něm spojuje nápad, vášeň, talent, zkušenosti, precizní technické zpracování a od počátku perfektní, promyšlená strategie a komunikace. Každý slabý článek z celku Vás může stát cenné prostředky a především zákazníky. Přečtěte si, co umíme nejlépe a proč je to důležité i pro Vás.              
              </p>
              <Button href="test/pointer">kontaktujte nás</Button>
            </LineBlock>    
          </div>
        </div> 
      </div>
    </div>
  </section>
</article>

<style>
  :global(canvas#discover), :global(canvas#deliver) {
    z-index:2
  }

  #process {
    min-height: 500px;
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
    #process {
      min-height: 600px;
    }

    #process .charts {
      height: 20rem;
    }

    .charts-shadow {
      height: 12rem;
      transform: scaleY(-1) skewX(-20deg) translateY(1px) translateX(2.25rem);    
    }
  }
</style>