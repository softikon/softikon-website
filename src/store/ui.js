import { writable, readable } from 'svelte/store'

export const isHeaderInverted = writable(false)
export const viewportHeight = readable(
  null, set => {
  const handler = () => {
    set(window.innerHeight)
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handler)
    handler()
  }

  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handler)
    }
  }
})
