 <script>
  import Card from '../../components/Card.svelte'
  import Revealable from '../../components/Revealable.svelte'
  import LineBlock from '../../components/LineBlock.svelte'
  import TransitionWrapper from '../../components/TransitionWrapper.svelte'
  import { animate } from '../../helpers/intersectionObserver'
 </script>

<TransitionWrapper>
  <article class="pt-64">
    <section class="w-10/12 lg:pt-0 mx-auto pb-24">
      <div class="flex flex-wrap">
        <div class="flex flex-col w-full md:w-6/12"> 
          <h1 class="tracking-tighter">
            <Revealable>Naše&nbsp;projekty</Revealable>
          </h1>
        </div>
      </div>
    </section>

    <section id="showcase">
      <div class="w-10/12 mx-auto flex flex-col">
        <LineBlock data-aos="fade-up" class="mb-8">
          <h3 class="mb-8 text-3xl lg:text-3xl">Komerční produkty</h3>
        </LineBlock>
        <LineBlock noLine>
          <div class="flex">
            <div class="w-full md:w-3/6 md:pr-6 lg:pr-12">
              <div data-aos="fade-up">
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
            </div>

            <div class="w-full md:w-3/6 md:pt-24 md:pl-6 lg:pl-12">
              <div data-aos="fade-up">
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

