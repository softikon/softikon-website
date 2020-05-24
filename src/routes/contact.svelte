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
    <section class="flex items-center min-h-screen relative">
      <div class="w-10/12 md:pt-0 mx-auto flex flex-wrap flex-col">
        <p data-aos="fade-up" class="tracking-tight leading-loose font-medium text-4xl md:text-5xl lg:text-6xl text-gray-600">
          A simple hello can lead to a million things.
        </p>
      </div>
    </section>
  </article>
</TransitionWrapper>
