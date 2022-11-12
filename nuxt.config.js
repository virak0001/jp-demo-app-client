import * as configs from './config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Demo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    APP_URL: process.env.APP_URL,
    SOCKET_URL: process.env.SOCKET_URL,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-scroll', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-windicss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module',
    ['@pinia/nuxt', { disableVuex: false }],
    [
      'unplugin-auto-import/nuxt',
      {
        imports: ['@nuxtjs/composition-api', { '@vueuse/core': ['useVModel'] }],
      },
    ],
    '@vueuse/nuxt',
    '@nuxtjs/svg-sprite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-axios-http/nuxt',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',
    '@nuxtjs/proxy',
    '@nuxtjs/i18n',
  ],

  ...configs, // Exported config must have same name as is expected here
}
