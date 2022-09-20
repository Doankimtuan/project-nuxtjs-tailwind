export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'project-nuxtjs-tailwind',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tailwind.css', '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://strapi.nuxtjs.org/
    '@nuxtjs/strapi',
    // https://www.npmjs.com/package/@nuxtjs/markdownit
    '@nuxtjs/markdownit',
  ],

  strapi: {
    // Options
    url: process.env.STRAPI_URL || 'http://localhost:1337/api',
    entities: ['articles', 'projects', 'project_categories', 'categories', 'visitor_messages'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  markdownit: {
    runtime: true, // Support `$md()`
      preset: 'default',
      linkify: true,
      breaks: true,
      use: ['markdown-it-div', 'markdown-it-attrs'],
  },
  axios: {
    // proxy: true
  }
}
