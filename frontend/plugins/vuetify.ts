import { defineNuxtPlugin } from '#app';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const customTheme: ThemeDefinition = {
    dark: true,
    colors: {
      background: '#121212',
      surface: '#1b1b1b',
      primary: '#9bff5d',
      info: '#e7ff34',
      success: '#87e187',
      danger: '#2dac2d',
      warning: '#fa1d1d',
      text: '#dedede',
      dark: '#1b1b1b',
    },
  }
  
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme,
      },
    },
    ssr: true,
  });

  nuxtApp.vueApp.use(vuetify);
});
