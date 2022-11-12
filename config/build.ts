import { NuxtOptionsBuild } from '@nuxt/types/config/build'

export const build: NuxtOptionsBuild = {
  extend(config: any, _: any) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
        esModule: false,
      },
    })
  },
  parallel: false,
  cache: true,
  babel: {
    ignore: ['./static', './assets'],
  },
  transpile: ['@formkit/auto-animate'],
}
