 <script>
  import Card from '../../components/Card.svelte'
  import Revealable from '../../components/Revealable.svelte'
  import LineBlock from '../../components/LineBlock.svelte'
  import TransitionWrapper from '../../components/TransitionWrapper.svelte'
  import { animate } from '../../helpers/intersectionObserver'
 </script>

<TransitionWrapper>
  <article>
    <section class="pb-16 flex items-end center relative min-h-screen">
      <div class="w-10/12 pt-64 md:pt-0 mx-auto flex flex-wrap flex-col">
        <div class="flex flex-col w-full md:w-9/12">
            <h1 class="h1--sub alternative-font">
              <span>
                <Revealable><span class="block">Under</span> the hood</Revealable>
              </span>
            </h1>
        </div>
        <div class="w-full md:w-9/12">
          <p data-aos="fade-up" class="tracking-tight pt-16 leading-loose font-medium text-2xl text-gray-600">
            Nechat za sebe mluvit odvedenou práci není klišé. Naopak. Úspěšné produkty se staly úspěšným především proto, že se v nich spojuje nápad, vášeň, talent, zkušenosti, lidé, velká přidaná hodnota, precizní technické zpracování a od počátku perfektní, promyšlená strategie a komunikace. Jedině tak se z projektu úspěšný produkt.
          </p>
        </div>
      </div>
    </section>

    <section class="relative pt-64" id="showcase">
      <div class="section-bg light" use:animate data-animate="slideScaleLeft"></div>
      <div class="w-10/12 mx-auto flex flex-col">
        <LineBlock data-aos="fade-up" class="mb-8">
          <h3 class="mb-8 text-3xl lg:text-3xl">Komerční produkty</h3>
        </LineBlock>
        <LineBlock noLine>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-3/6">
              <div data-aos="fade-up" class="pb-8 md:pr-4">
                <Card data-concise="true" to="work/autopublisher" background="#0f041b" image="img/autopublisher-mock.png">
                  <span class="text-white alternative-font text-4xl" slot="sub">Autopublisher</span>
                  <span slot="title">Specializovaný software pro autobazary, který šetří čas a peníze.</span>
                  <a class="text-3xl text-white font-bold underline" href="work/autopublisher">Více informací</a>
                  <ul slot="labels">
                    <li>Nápad, implementace</li>
                    <li>Multiplatformní aplikace</li>
                  </ul>
                </Card>
              </div>

              <div data-aos="fade-up" class="pb-8 md:pr-4">
                <Card data-concise="true" to="work/autopublisher" background="#0f041b" image="img/autopublisher-mock.png">
                  <span class="text-white alternative-font text-4xl" slot="sub">Autopublisher</span>
                  <span slot="title">Pracujeme na posledním DRM, který prodejci vozidel v České Republice a na Slovensku budu potřebovat</span>
                  <a class="text-3xl text-white font-bold underline" href="work/autopublisher">Více informací</a>
                  <ul slot="labels">
                    <li>Nápad, implementace</li>
                    <li>Multiplatformní aplikace</li>
                  </ul>
                </Card>
              </div>
            </div>

            <div class="w-full md:w-3/6 md:pt-24">
              <div data-aos="fade-up" class="pb-8 md:pl-4">
                <Card data-concise="true" to="work/betsense" background="#d2dae5" image="img/betsense-mock.png">
                  <span slot="sub" class="text-gray-600 alternative-font text-4xl">Betsense</span>
                  <span slot="title" class="text-gray-900">Prémiový realtime hub pro sázkové kanceláře i sázkaře, který se pyšní nejnižší datovou latencí ve svém oboru.</span>
                  <div class="text-xl text-gray-500">Spouštíme Q3/2020</div>
                  <ul slot="labels" class="text-gray-900">
                    <li>Data-intensive computing</li>
                    <li>Inteligentní AI, 500+ mikroslužeb</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </LineBlock>
      </div>
    </section>

    <section class="py-64 relative flex" id="opensource">
      <div class="section-bg light" use:animate data-animate="slideScaleLeft"></div>
    </section>
  </article>
</TransitionWrapper>

