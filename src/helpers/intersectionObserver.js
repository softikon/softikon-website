const opts = {
  root: null,
  threshold: 0
}

const map = new WeakMap()

const createObserver = () => {
  let observer
  return () => {
    if (observer) return observer
    observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        map.set(e.target, e.isIntersecting)
      })
    }, opts)

    return observer
  }
}

export default createObserver()
export const isIntersecting = el => map.get(el)
export const animate = node => {
  const observer = new IntersectionObserver(entries => {
    entries[0].isIntersecting && node.classList.add('animate')
  }, {
    threshold: 0.05
  })

  observer.observe(node)

  return {
    destroy() {
      observer.disconnect()
    }
  }
}
