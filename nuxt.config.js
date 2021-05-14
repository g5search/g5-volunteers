export default {
  telemetry: false,
  head: {
    title: 'g5-volunteers',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap' }
    ]
  },
  css: ['@/assets/theme.scss'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: false
  },
  axios: {},
  build: {}
}
