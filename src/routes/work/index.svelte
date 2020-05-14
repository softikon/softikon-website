 <script>
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'
  import Card from '../../components/Card.svelte'
  import Revealable from '../../components/Revealable.svelte'
  import LineBlock from '../../components/LineBlock.svelte'
  import TransitionWrapper from '../../components/TransitionWrapper.svelte'
  import Scroller from '../../components/Scroller.svelte'
  import Button from '../../components/Button.svelte'
  import { animate } from '../../helpers/intersectionObserver'
  import touchEvents, { install as installTouchEvents } from '../../helpers/touch'

  // This is little bit complex - refactor maybe?
  // currentItem is binded to Scroller for getting the actual focused item when scroll and is the source of truth
  // store contains state that is set manually and currentItem and scroller handler subscribes for the value
  // currentItem value set by Scroller does not affect store and do not trigger scroller handler
  let store = writable(0)
  $: currentItem = $store
  const items = 2

  let scrollerActive = false
  let wantScroll = false

  const setItemManually = (index) => {
    wantScroll = true
    store.set(index)
  }

  const next = () => scrollerActive && setItemManually(($store + 1) % items)
  const previous = () => scrollerActive && setItemManually(($store - 1) < 0 ? (items - 1) : ($store - 1))

  onMount(() => {
    const unsubscribe = store.subscribe(index => {
      if (!wantScroll) return
      const el = document.getElementById(`work-${index}`)
      if (el) {
        window.scroll({
          top: el.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        })
      }
    })
    const uninstall = installTouchEvents()
    return () => {
      uninstall()
      unsubscribe()
    }
  })

  touchEvents.on('swipeLeft', next)
  touchEvents.on('swipeRight', previous)
 </script>

<TransitionWrapper>
  <article>
    <section class="flex min-h-screen relative">
      <div class="section-bg light"></div>
      <div class="absolute inset-y-0 right-0 w-24" style="z-index: 1;">
        <Scroller autoWidth>
          <ul class="h-screen flex flex-col justify-center">
            {#each ['AP', 'BS'] as item, index}
              <li class="cursor-pointer pagination px-4 lg:px-12 py-8 bg-white bg-opacity-400 font-bold" on:click={() => setItemManually(index)} class:active={index === currentItem}>{item}</li>
            {/each}
          </ul>
        </Scroller>
      </div>
      <div class="absolute inset-0">
        <Scroller length="2" bind:currentItem={currentItem} on:stateChanged={e => scrollerActive = e.detail}>
          <div class="relative w-10/12 mx-auto h-screen flex flex-col justify-center">
            <ul class="flex items-center flex-col relative w-5/12">
              <li class="item" class:current={currentItem === 0}>
                <LineBlock data-aos="fade-right">
                  <h4 class="font-bold text-lg uppercase leading-loose">Komerční produkt</h4>
                  <p class="mb-16 leading-loose text-xl md:text-4xl" style="color: rgba(17, 17, 17, 0.8);">
                    Specializovaný software pro autobazary, který šetří čas a peníze.
                  </p>
                  <Button href="work/autopublisher">detail</Button>
                </LineBlock>
              </li>
              <li class="item" class:current={currentItem === 1}>
                <LineBlock data-aos="fade-right">
                  <h4 class="font-bold text-lg uppercase leading-loose">SAAS</h4>
                  <p class="mb-16 leading-loose text-xl md:text-4xl" style="color: rgba(17, 17, 17, 0.8);">
                    Prémiový realtime hub pro sázkové kanceláře i sázkaře, který se pyšní nejnižší datovou latencí ve svém oboru.
                  </p>
                  <Button href="work/betsense">detail</Button>
                </LineBlock>
              </li>
            </ul>
          </div>
        </Scroller>
      </div>
      <div style="margin-left: auto;">
        <div class="flex flex-col" style="width: 50vw;">
          <Card id="work-0" data-concise="true" to="work/autopublisher" background="#0f041b" image="img/autopublisher-mock.png">
            <span class="text-white alternative-font text-4xl" slot="sub">Autopublisher</span>
            <ul slot="labels">
              <li>Nápad, implementace</li>
              <li>Multiplatformní aplikace</li>
            </ul>
          </Card>

          <Card id="work-1" data-concise="true" to="work/betsense" background="#d2dae5" image="img/betsense-mock.png">
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
    z-index: 2;
  }

</style>

