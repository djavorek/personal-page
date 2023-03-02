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

<script setup>
import { onMounted } from 'vue';

const bgImg = 'url(' + require('@/assets/img/bg.webp') + ')';
const bgImgFallBack = 'url(' + require('@/assets/img/bg.jpg') + ')';

function isWebpFormatSupported() {
  const elem = document.createElement('canvas');

  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } else {
    // dinosaur browsers like IE 8, canvas not supported
    return false;
  }
}
function addScriptToHead(scriptPath) {
  const externalScript = document.createElement('script');
  externalScript.setAttribute('src', scriptPath);
  document.head.appendChild(externalScript);
}

onMounted(() => {
  // For admin page authentication
  addScriptToHead('https://identity.netlify.com/v1/netlify-identity-widget.js');

  // Redirecting back to admin page after successful Netlify auth
  addScriptToHead('./admin/redirect.js');
});
</script>

<style lang="scss">
@import '@/assets/style/main.scss';
</style>
