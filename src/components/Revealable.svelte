<script>
  import { onMount } from 'svelte'
  let browser = false
  let ref, ref2

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

  const process = () => {
    ref.style.display = 'inline-block'
    ref2.style.display = 'none'
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
      setTimeout(() => {
        el.classList.add('animate')
      }, 100)

      ref2.appendChild(el)
      group.forEach(e => {
        const cloned = e.cloneNode(true)
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

    ref2.style.display = 'inline-block'
    ref.style.display = 'none'    
  }

  onMount(() => {
    browser = true

    window.addEventListener('resize', process)
    prepare()
    process()

    return () => {
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
    width:101.5%;
    height:100%;
    background: #87FFA9;
    animation:fx-in 2s cubic-bezier(.19,1,.22,1) forwards;
    animation-delay:inherit;
  }

  .is-browser :global(.revealable > span) {
    visibility: hidden;
    opacity: 0;
  }

  .is-browser :global(.revealable.animate > span) {
    visibility: visible;
    opacity: 1;
    transition: opacity 2s;
  }  
</style>
