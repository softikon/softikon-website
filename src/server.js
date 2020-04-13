import express from 'express'
import sirv from 'sirv'
import * as sapper from '@sapper/server'

const mode = process.env.NODE_ENV
const port = process.env.PORT || 3000
const dev = mode === 'development'

express()
  .use(
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(port, err => {
  if (err) console.log(error, err)
})