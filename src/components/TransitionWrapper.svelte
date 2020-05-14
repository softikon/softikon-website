<script>
  import { tick } from 'svelte'
  import { isPageTransitionInterrupted } from '../store/ui'
  import { refresh as AOSRefresh } from '../helpers/aos'

  let ref

  function animateOut(node, params) {
    Array.from(ref.querySelectorAll('[data-aos]')).forEach(a => {
      window.requestAnimationFrame(() => {
        a.dataset.aosDuration = 750
        window.requestAnimationFrame(() => {
          a.classList.remove('aos-animate')
        })
      })
    })
    Array.from(ref.querySelectorAll('.animate, .show')).forEach(a => a.classList.add('leaving'))

    return () => {
      return {
        duration: $isPageTransitionInterrupted ? 0 : params.duration,
        tick(t, u) {
          if (u === 1) {
            window.scrollTo({
              top: 0
            })

            // TODO FIX: this expression call is a workaround for the case when clip-path on page being replaced
            // with new one prevents AOS from observing aos-powered animated elements correctly
            window.requestAnimationFrame(() => {
              AOSRefresh()
            })
          }
        }
      }
    }
  }
</script>

<div bind:this={ref} out:animateOut={{duration: 800}}>
  <slot></slot>
</div>