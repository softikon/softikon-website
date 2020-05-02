import * as sapper from '@sapper/app'
import loadPolyfills from './helpers/loadPolyfills'

function start() {
  sapper.start({
    target: document.getElementById('root')
  })
}

loadPolyfills().then(start)
