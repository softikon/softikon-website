 <script>
  import Card from '../../components/Card.svelte'
  import Revealable from '../../components/Revealable.svelte'
  import LineBlock from '../../components/LineBlock.svelte'
  import TransitionWrapper from '../../components/TransitionWrapper.svelte'
  import Scroller from '../../components/Scroller.svelte'
  import Button from '../../components/Button.svelte'
  import { animate } from '../../helpers/intersectionObserver'

  let currentItem = 0

  const setItemManually = (index) => {
    currentItem = index
  }
 </script>

<TransitionWrapper>
  <article>
    <section class="flex min-h-screen relative">
      <div class="section-bg light"></div>
      <div class="absolute inset-y-0 right-0 w-24 z-20">
        <Scroller autoWidth>
          <ul class="h-screen flex flex-col justify-center">
            {#each [1,2] as item, index}
              <li class="cursor-pointer pagination px-4 lg:px-12 py-8 font-bold" on:click={() => setItemManually(index)} class:active={index === currentItem}>{item}</li>
            {/each}
          </ul>
        </Scroller>
      </div>
      <div class="absolute inset-0">
        <Scroller length="2" on:itemChanged={({detail}) => setItemManually(detail)}>
          <div class="relative w-8/12 lg:w-10/12 mx-auto h-screen flex flex-col justify-center">
            <ul class="flex items-center flex-col relative w-5/12">
              <li class="item" class:current={currentItem === 0}>
                <LineBlock lg>
                  <p class="mb-16 leading-loose md:text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                    Specializ;ovaný software pro autobazary, který šetří čas a peníze.
                  </p>
                  <Button href="test/pointer">detail</Button>
                </LineBlock>
              </li>
              <li class="item" class:current={currentItem === 1}>
                <LineBlock lg>
                  <p class="mb-16 leading-loose md:text-2xl" style="color: rgba(17, 17, 17, 0.8);">
                    Prémiový realtime hub pro sázkové kanceláře i sázkaře, který se pyšní nejnižší datovou latencí ve svém oboru.
                  </p>
                  <Button href="test/pointer">detail</Button>
                </LineBlock>
              </li>
            </ul>
          </div>
        </Scroller>
      </div>
      <div style="margin-left: auto;">
        <div class="flex flex-col" style="width: 50vw;">
          <Card data-concise="true" to="work/autopublisher" background="#0f041b" image="img/autopublisher-mock.png">
            <span class="text-white alternative-font text-4xl" slot="sub">Autopublisher</span>
            <ul slot="labels">
              <li>Nápad, implementace</li>
              <li>Multiplatformní aplikace</li>
            </ul>
          </Card>

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
    </section>
  </article>
</TransitionWrapper>

<style>
  .item {
    position: absolute;
    opacity: 0;
    transition: opacity 0.69s;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    left: 0;
  }

  .item.current {
    opacity: 1;
  }

</style>

