<script>
  import { goto } from '@sapper/app'

  let ref

  const onPageChange = (e) => {
    e.preventDefault()
    Array.from(document.querySelectorAll('[data-aos]')).forEach(a => a.classList.remove('aos-animate'))
    Array.from(document.querySelectorAll('.animate')).forEach(a => a.classList.add('leaving'))
    setTimeout(() => {
      goto(ref.href)
    }, 1000)
  }
</script>

<a bind:this={ref} on:click={onPageChange} rel="prefetch" href="/#" {...$$restProps}>
  <slot></slot>
</a>