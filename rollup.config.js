import replace from '@rollup/plugin-replace'
import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

// csstailwind related plugins (postcss)
import sveltePreprocess from 'svelte-preprocess'

import config from 'sapper/config/rollup'
import pkg from './package.json'

const tailwindConfig = require('./tailwind.config')

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const postcssPlugins = {
  dev: [
    require('tailwindcss')(tailwindConfig)
  ],
  prod: [
    require('tailwindcss')(tailwindConfig)
    // require('tailwindcss')(tailwind),
    // require('postcss-import')(),
    // require('postcss-url')(),
    // require('autoprefixer'),
    // require('postcss-preset-env'),
    // purgecss,
    // cssnano,
  ]
}

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        preprocess: [sveltePreprocess({
          postcss: {
            plugins: postcssPlugins.dev
          }
        })],
        dev,
        hydratable: true,
        emitCss: true
      }),
      json(),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs()
    ]
  },
  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        preprocess: [sveltePreprocess({
          postcss: {
            plugins: postcssPlugins.dev
          }
        })],
        dev,
        generate: 'ssr'
      }),
      json(),
      resolve({
        dedupe: ['svelte']
      }),
      commonjs()
    ],
    external: [
      ...Object.keys(pkg.dependencies),
      ...require('module').builtinModules
    ]
  },
  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      commonjs()
    ]
  }
}