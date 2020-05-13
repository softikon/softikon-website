<script>
  import { isPageTransitionInterrupted } from '../store/ui'

  function test(transition, params) {
    Array.from(document.querySelectorAll('[data-aos]')).forEach(a => {
      window.requestAnimationFrame(() => {
        a.dataset.aosDuration = 400
        window.requestAnimationFrame(() => {
          a.classList.remove('aos-animate')
        })
      })
    })
    Array.from(document.querySelectorAll('.animate, .show')).forEach(a => a.classList.add('leaving'))

    return () => {
      return {
        duration: $isPageTransitionInterrupted ? 0 : params.duration,
      }
    }
  }
</script>

<div out:test={{duration: 500}}>
  <slot></slot>
</div>