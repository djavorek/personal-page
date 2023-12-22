import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  target: 'static',

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
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/style/common/_index.scss',
    '~/assets/style/common/_variables.scss',
    '~/assets/style/common/_behavior.scss',
    '~/assets/style/animation.scss',
    '~/assets/style/grid.css',
    '~/assets/style/content.scss',
    '~/assets/style/main.scss',
  ],

  build: {
    transpile: ['vuetify', '@fortawesome/vue-fontawesome'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    '@funken-studio/sitemap-nuxt-3',
    'nuxt-disqus',
  ],

  eslint: {
    // Enable recommended rules
    extend(config) {
      config.extends.push('eslint:recommended');
    },
  },

  disqus: {
    shortname: 'javorekdenes-hu',
  },

  sitemap: {
    hostname: 'https://javorekdenes.hu',
    generateOnBuild: true,
    routes: [
      '/blog/posts/2021-08-15-szja25',
      '/blog/posts/2023-01-05-synology-ds118',
    ],
  },

  devtools: {
    enabled: true,
  },
});
