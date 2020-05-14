import Events from 'events'

const events = new Events()
let listeners = []

let coords = {
  x: null,
  y: null
}

const getCoordsFromTouchEvent = t => ({
  x: t.clientX,
  y: t.clientY
})

const handleTouchStart = e => {
  console.log('handleTouchStart', getCoordsFromTouchEvent(e.touches[0]))
  coords = getCoordsFromTouchEvent(e.touches[0])
}

const handleTouchMove = e => {
  if (!coords.x || !coords.y) return
  const mCoords = getCoordsFromTouchEvent(e.touches[0])

  const deltaX = coords.x - mCoords.x
  const deltaY = coords.y - mCoords.y

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Swipe horizontally
    if (deltaX > 0) {
      events.emit('swipeLeft')
    } else {
      events.emit('swipeRight')
    }
  } else {
    // Swipe vertically
    if (deltaY > 0) {
      events.emit('swipeUp')
    } else {
      events.emit('swipeDown')
    }
  }

  coords = {
    x: null,
    y: null
  }
}

export const install = () => {
  listeners.push(document.addEventListener('touchstart', handleTouchStart, false))
  listeners.push(document.addEventListener('touchmove', handleTouchMove, false))
}

export default events