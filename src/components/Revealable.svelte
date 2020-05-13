<script>
  import { onMount } from 'svelte'
  import { animate } from '../helpers/intersectionObserver'
  let browser = false
  let ref, ref2
  let animated = false

  const prepare = () => {
    Array.from(ref.childNodes).forEach(node => {
        if(node.nodeType === 3) {
            const els = node.nodeValue.split('').map(char => {
                const el = document.createElement('span')
                el.textContent = char
                return el
            })

            const nextSibling = node.nextSibling
            const parent = node.parentElement
            node.remove()

            els.forEach(el => parent.insertBefore(el, nextSibling))
        }
    })
  }

  let actionHandlers = []

  const process = () => {
    ref.style.display = 'inline-block'
    ref2.style.display = 'none'

    actionHandlers.forEach(a => a())
    actionHandlers = []

    const els = Array.from(ref.childNodes).reduce(([{ x, y }, nodes, complete], node, i, ref) => {
      let res
      if (x > node.offsetLeft || y < node.offsetTop - 20) {
        res = [{ x: node.offsetLeft, y: node.offsetTop }, [node], [...complete, nodes]]
      } else {
        res = [{ x: node.offsetLeft, y: node.offsetTop }, [...nodes, node], complete]
      }

      return ref.length - 1 === i ? [...res[2], res[1]] : res
    }, [{ x: 0, y: 0 }, [], []])

    Array.from(ref2.childNodes).forEach(child => child.remove())

    if (els[0] === 0) return
    els.forEach(group => {
      const el = document.createElement('span')
      el.classList.add('revealable')
      el.dataset.opts = JSON.stringify({ threshold: 0 })
      if (!animated) {
        actionHandlers.push(animate(el).destroy)
      } else {
        el.classList.add('show')
      }

      ref2.appendChild(el)
      group.forEach((e, i) => {
        // TODO: get rid of this ugly checks
        if (i === 0 || i === group.length - 1) {
          if (e.textContent.trim() === '') return
        }

        const cloned = e.cloneNode(true)
        // TODO: get rid of this ugly checks
        if (cloned.textContent.trim() === '') {
          cloned.innerHTML = '&nbsp;'
        }
        if (group.length === 1) {
          const { display } = window.getComputedStyle(e)
          if (display === 'block') {
            const wrapper = document.createElement('span')
            wrapper.style.display = display
            el.parentNode.insertBefore(wrapper, el)
            wrapper.appendChild(el)
          }
        }
        el.appendChild(cloned)
      })
    })

    animated = true

    ref2.style.display = 'inline-block'
    ref.style.display = 'none'    
  }

  onMount(() => {
    browser = true

    window.addEventListener('resize', process)
    prepare()
    process()

    return () => {
      actionHandlers.forEach(e => e())
      actionHandlers = null
      window.removeEventListener('resize', process)
    }
  })
</script>

<span class:is-browser={browser}>
  <span class="invisible" style="display: inline-block;" bind:this={ref}>
    <slot></slot>
  </span>
  <span bind:this={ref2}></span>
</span>


<style>
  .is-browser :global(.revealable) {
    position: relative;
    display: inline-block;
  }

  .is-browser :global(.revealable.animate:after) {
    content:"";
    position:absolute;
    top:0;
    left:0;
    background: #feebc8;
    animation:fx-in 1.65s cubic-bezier(.19,1,.22,1);
    animation-delay:inherit;
  }

  .is-browser :global(.revealable.animate.leaving:after), .is-browser :global(.revealable.show.leaving:after) {
    animation:fx-out .75s cubic-bezier(.19,1,.22,1);
  }

  .is-browser :global(.revealable > span) {
    visibility: hidden;
  }

  .is-browser :global(.revealable.show > span) {
    visibility: visible;
  }

  .is-browser :global(.revealable.animate > span) {
    visibility: visible;
    animation: opacity 1.65s linear;
    animation-fill-mode: forwards;
  }

  .is-browser :global(.revealable.animate.leaving > span), .is-browser :global(.revealable.show.leaving > span) {
    animation: opacity-reverse .75s linear;
    animation-fill-mode: forwards;
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    50.1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes opacity-reverse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    50.1% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
</style>
