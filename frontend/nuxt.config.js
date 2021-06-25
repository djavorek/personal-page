export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/common/_index.scss',
    '~/assets/style/common/_variables.scss',
    '~/assets/style/common/_behavior.scss',
    '~/assets/style/animation.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
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

  content: {
    dir: 'posts',
  },
};
