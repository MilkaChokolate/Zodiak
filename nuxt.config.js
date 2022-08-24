import webpack from 'webpack'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Zodiak',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kaushan+Script' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' }
    ]
  },
  target: 'static',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fontawesome-free/css/all.min.css',
    '~/assets/css/agency.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/jquery-easing.js', mode: 'client' },
    { src: '~/plugins/agency.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery'
      })
    ]
  }
}
