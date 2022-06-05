export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nusttonust',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/static/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  loading: { color: '#3B8070' },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    rules: [{
      test: /\.(png|jge?g|gif|svg)$/,
      loader: "url-loader",
      query:{
        limit:10000,
        name: 'img/[name].[hash].[ext]'
      }
    }]
  }
}
