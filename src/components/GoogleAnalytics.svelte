<script>
  import { stores } from '@sapper/app'
  import { onMount } from 'svelte'

  // UA-172522941-1
  export let id

  const { page } = stores()

  onMount(() => {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
        window.dataLayer.push(arguments)
    }
    window.gtag("js", new Date())
    window.gtag("config", id)

    page.subscribe(({ path: page_path }) => {
      window.gtag('config', id, { page_path })
    })
  })
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id={id}"></script>
</svelte:head>
