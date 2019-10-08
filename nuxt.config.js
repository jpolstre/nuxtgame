import axios from 'axios'
import { async } from 'q'
axios.defaults.headers.common['user-key'] = 'cd1db65340e4c76de5e22fa960b6b014'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest' //proxy para abrir los cors de la api.

export default {
  mode: 'universal',

  generate: {
    // estas rutas se crearan al compilara el sitio estatico con yarn generate
    //ya no sera una sola ruta games/_id.vue que se genere dinamicamente( se geeraran como estaticas games/(game.id).html)
    routes: async () => {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      const resp = await axios.get(
        `${proxyUrl}https://api-v3.igdb.com/games/?fields=name,genres.name,cover.url,popularity&order=popularity:desc`
      )
      // console.log("ESTAS SON LAS RUTAS", resp)
      const result = resp.data.map(async item => {
        const res = await axios.get(
          `${proxyUrl}https://api-v3.igdb.com/games/${item.id}/?fields=name,cover.url,summary,platforms.name,first_release_date,screenshots.url,websites.url,websites.category,total_rating,involved_companies.company.name`
        )
        const game = res.data[0]
        return {
          route: `/games/${game.id}`,
          payload: game
        }
      })

      return Promise.all(result).then(completed => {
        console.log('RESULTADOS', completed)

        return completed
      })
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Video Games',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:400,600'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#4fc08d' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-easy-lightbox', ssr: false, mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
