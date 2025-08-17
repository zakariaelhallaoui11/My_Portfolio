// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Zakaria ELHALLAOUI',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/MyLogo.webp' },
        {
            rel: 'stylesheet',
            href: '',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap"',
        },
      ],
      meta: [
        { name:'viewport', content: 'width=device-width, initial-scale=1.0' },
      ]
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    preference: 'light'
  },
  compatibilityDate: '2024-11-30'
})