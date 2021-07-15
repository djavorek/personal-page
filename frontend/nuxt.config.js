export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },

  server: {
    port: 8080, // default: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'personal-page',
    htmlAttrs: {
      lang: 'en',
    },
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      { src: './admin/redirect.js' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Javorek Dénes oldala. Bemutatkozás, kapcsolat, és pár dolog, amit szeretek.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }],
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

  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
    middleware: ['title'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/common/_index.scss',
    '~/assets/style/common/_variables.scss',
    '~/assets/style/common/_behavior.scss',
    '~/assets/style/animation.scss',
    '~/assets/style/grid.css',
    '~/assets/style/content.scss',
    'bf-solid/dist/solid.latest.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/browser',
      mode: 'client',
    },
    {
      src: '~/plugins/moment',
      mode: 'client',
    },
    {
      src: '~/plugins/lazyload',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/blog',
      '~/components/header',
      '~/components/content',
      '~/components/content/articles',
      '~/components/content/articles/contact',
      '~/components/content/menu',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],

  fontawesome: {
    icons: {
      solid: ['faAngleDoubleDown'],
    },
  },
};
