import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  target: 'static',

  server: {
    port: 8080, // default: 3000
  },

  meta: {
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

  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    '@funken-studio/sitemap-nuxt-3',
    'nuxt-disqus',
  ],

  disqus: {
    shortname: 'javorekdenes-hu',
  },

  fontawesome: {
    icons: {
      solid: ['faAngleDoubleDown'],
      brands: ['faDiscord', 'faFacebook', 'faLinkedin'],
    },
  },

  sitemap: {
    hostname: 'https://javorekdenes.hu',
    generateOnBuild: true,
    routes: [
      '/blog/posts/2021-08-15-szja25',
      '/blog/posts/2023-01-05-synology-ds118',
    ],
  },
});
