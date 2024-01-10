<template>
  <v-app>
    <div id="portfolio">
      <div class="notouchy">
        <PortfolioHeader />
      </div>
      <div>
        <Content />
      </div>
    </div>
    <GoatCounter />
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'

function addScriptToHead (scriptPath) {
  const externalScript = document.createElement('script')
  externalScript.setAttribute('src', scriptPath)
  document.head.appendChild(externalScript)
}

onMounted(() => {
  // For admin page authentication
  addScriptToHead('https://identity.netlify.com/v1/netlify-identity-widget.js')

  // Redirecting back to admin page after successful Netlify auth
  addScriptToHead('./admin/redirect.js')
})
</script>

<style lang="scss">
@import "~/assets/style/main.scss";

  #portfolio {
    background-image: image-set(
      url("~/assets/img/bg.webp") type("image/webp"),
      url("~/assets/img/bg.jpg") type("image/jpeg")
    );
  }
</style>
