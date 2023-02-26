import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: 8080, // default: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Javorek Dénes',
    htmlAttrs: {
      lang: 'hu',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Javorek Dénes weboldala. Bemutatkozás, kapcsolat, blog.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: '/uploads/images/.*',
        handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'image-cache',
          cacheExpiration: {
            maxEntries: 100,
            maxAgeSeconds: 86400,
          },
        },
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuetify/lib/styles/main.sass',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/style/common/_index.scss',
    '~/assets/style/common/_variables.scss',
    '~/assets/style/common/_behavior.scss',
    '~/assets/style/animation.scss',
    '~/assets/style/grid.css',
    '~/assets/style/content.scss',
    '~/assets/style/main.scss',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components/blog',
      '~/components/blog/base',
      '~/components/blog/core',
      '~/components/portfolio/header',
      '~/components/portfolio/content',
      '~/components/portfolio/content/articles',
      '~/components/portfolio/content/articles/contact',
      '~/components/portfolio/content/menu',
      '~/components/tools',
      '~/components/tools/viewcount',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    [
      'v-currency-field/nuxt-treeshaking',
      {
        locale: 'hu-HU',
        suffix: 'Ft',
        decimalLength: 0,
        autoDecimalMode: true,
        min: null,
        max: null,
        defaultValue: 0,
        valueAsInteger: true,
        allowNegative: false,
      },
    ],
    '@funken-studio/sitemap-nuxt-3', { generateOnBuild: true },
  ],

  fontawesome: {
    icons: {
      solid: ['faAngleDoubleDown'],
    },
  },
  sitemap: {
    hostname: 'https://javorekdenes.hu',
    routes: [
      '/blog/posts/2021-08-15-szja25',
      '/blog/posts/2023-01-05-synology-ds118',
    ],
  },
});
