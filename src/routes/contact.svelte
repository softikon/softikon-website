<script>
  import TransitionWrapper from '../components/TransitionWrapper.svelte'
  import Revealable from '../components/Revealable.svelte'
  import Button from '../components/Button.svelte'
  import LineBlock from '../components/LineBlock.svelte'
  import { animate } from '../helpers/intersectionObserver'
</script>

<svelte:head>
  <title>Inteligentní digitální řešení | Softikon.eu</title>
</svelte:head>

<TransitionWrapper>
  <article>
    <section class="pb-16 flex items-center relative min-h-screen">
      <div class="w-10/12 pt-64 md:pt-0 mx-auto flex flex-wrap flex-col">
        <div class="flex flex-col w-full md:w-9/12">
            <h1 class="h1--sub uppercase">
              <span>
                <Revealable>Say <span class="outlined">hello</span></Revealable>
              </span>
            </h1>
        </div>
        <div class="w-full md:w-9/12">
          <p data-aos="fade-up" class="tracking-tight pt-16 leading-loose font-medium text-6xl text-gray-600">
            A simple hello can lead to a million things.
          </p>
        </div>
      </div>
    </section>
  </article>
</TransitionWrapper>
