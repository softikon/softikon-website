import EventEmitter from 'events'

const opts = {
  root: null,
  threshold: 0
}

const map = new WeakMap()

const emitter = new EventEmitter()
emitter.setMaxListeners(0)

const createObserver = () => {
  let observer
  return () => {
    if (observer) return observer
    observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        map.set(e.target, e.isIntersecting)
        emitter.emit('intersectionChange', e.target)
      })
    }, opts)

    return observer
  }
}

export default createObserver()
export const isIntersecting = el => cb => {
  const handler = target => {
    target === el && cb(map.get(target))
  }
  emitter.on('intersectionChange', handler)

  return () => emitter.removeListener('intersectionChange', handler)
}
export const animate = node => {
  let opts
  try {
    opts = JSON.parse(node.dataset.opts)
  } catch (e) {
    opts = {}
  }

  const observer = new IntersectionObserver(entries => {
    entries.some(e => e.isIntersecting) && node.classList.add('animate')
  }, {
    threshold: 0.05,
    ...opts
  })

  observer.observe(node.dataset.selector ? node.querySelector(node.dataset.selector) : node)

  return {
    destroy() {
      observer.disconnect()
    }
  }
}
