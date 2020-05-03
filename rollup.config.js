import replace from '@rollup/plugin-replace'
import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

// csstailwind related plugins (postcss)
import sveltePreprocess from 'svelte-preprocess'

import config from 'sapper/config/rollup'
import pkg from './package.json'

const tailwindConfig = require('./tailwind.config')

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.svelte'],
  extractors: [
    {
      extractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      extensions: ['svelte'],
    },
  ],
  whitelist: ['html', 'body']
})

const postcssPlugins = {
  dev: [
    require('tailwindcss')(tailwindConfig),
    require('autoprefixer')
  ],
  prod: [
    require('tailwindcss')(tailwindConfig),
    // require('postcss-import')(),
    // require('postcss-url')(),
    require('autoprefixer'),
    // require('postcss-preset-env'),
    purgecss,
    require('cssnano')({ preset: 'default' })
  ]
}

const onwarn = (warning, onwarn) =>
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning)

export default {
  client: {
    input: config.client.input(),
    preserveEntrySignatures: false,
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        preprocess: [sveltePreprocess({
          postcss: {
            plugins: dev ? postcssPlugins['dev'] : postcssPlugins['prod']
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
      commonjs(),
      legacy && babel({
        extensions: ['.js', '.mjs', '.html', '.svelte'],
        runtimeHelpers: true,
        exclude: ['node_modules/@babel/**'],
        presets: [
          [
            '@babel/preset-env',
            {
              targets: '> 0.25%, not dead',
            },
          ],
        ],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          [
            '@babel/plugin-transform-runtime',
            {
              useESModules: true,
            },
          ],
        ],
      }),
      !dev && terser({
        module: true,
        safari10: true
      })
    ],
    onwarn
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
            plugins: dev ? postcssPlugins['dev'] : postcssPlugins['prod']
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
    ],
    onwarn
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
    ],
    onwarn
  }
}