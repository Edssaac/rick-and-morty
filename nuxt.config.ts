// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'vercel'
  },

  app: {
    head: {
      title: 'Rick and Morty Data',
      link: [{
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg'
      }],
    },
  },

  css: ['assets/css/global.css'],

  image: {
    dir: 'assets/images'
  },

  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
})