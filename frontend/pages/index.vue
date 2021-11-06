/* eslint-disable object-shorthand */
<template>
  <v-app>
    <div
      id="portfolio"
      :style="{
        backgroundImage: isWebpFormatSupported ? bgImg : bgImgFallBack,
      }"
    >
      <div class="notouchy">
        <Header />
      </div>
      <div>
        <Content />
      </div>
    </div>
    <GoatCounter />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    bgImg: 'url(' + require('@/assets/img/bg.webp') + ')',
    bgImgFallBack: 'url(' + require('@/assets/img/bg.jpg') + ')',
  }),
  mounted() {
    // For admin page authentication
    this.addScriptToHead(
      'https://identity.netlify.com/v1/netlify-identity-widget.js'
    );

    // Redirecting back to admin page after successful Netlify auth
    this.addScriptToHead('./admin/redirect.js');
  },
  methods: {
    isWebpFormatSupported() {
      const elem = document.createElement('canvas');

      if (elem.getContext && elem.getContext('2d')) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      } else {
        // very old browser like IE 8, canvas not supported
        return false;
      }
    },
    addScriptToHead(scriptPath) {
      const externalScript = document.createElement('script');
      externalScript.setAttribute('src', scriptPath);
      document.head.appendChild(externalScript);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/style/main.scss';
</style>
