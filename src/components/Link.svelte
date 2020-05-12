<script>
  import { goto, prefetch } from '@sapper/app'

  let ref

  const onPageChange = (e) => {
    if(location.href === ref.href) return
    Array.from(document.querySelectorAll('[data-aos]')).forEach(a => a.classList.remove('aos-animate'))
    Array.from(document.querySelectorAll('.animate')).forEach(a => a.classList.add('leaving'))
    Promise.all([
      prefetch(ref.href),
      new Promise(resolve => setTimeout(resolve, 1000))
    ]).then(() => goto(ref.href))
  }
</script>

<a bind:this={ref} on:click|preventDefault={onPageChange} rel="prefetch" href="/#" {...$$restProps}>
  <slot></slot>
</a>