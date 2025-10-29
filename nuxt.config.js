export default {
  target: 'static',

  head: {
    title: 'fire extinguisher',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/fire-extinguisher.png' }
    ]
  },

  css: [
  ],

  plugins: [
    { src: '~/plugins/vue-calendar.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    'bootstrap-vue/nuxt',
  ],

  build: {
  },
}
