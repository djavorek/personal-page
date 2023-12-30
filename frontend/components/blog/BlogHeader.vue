<template>
  <div>
    <v-app-bar
      block
      tile
      color="#616161"
      dark
      flat
    >
      <div style="display: contents">
        <v-btn
          v-show="!isMobile"
          class="ma-1"
          x-large
          icon
          to="/"
          nuxt
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn
          class="ma-2"
          color="white"
          light
          to="/blog/"
          exact
          nuxt
        >
          Blog posztok
        </v-btn>
        <v-btn
          class="ma-2"
          color="white"
          light
          to="/blog/impressum/"
          nuxt
        >
          Impresszum
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
import { useMediaQuery } from '@vueuse/core'
export default {
  computed: {
    pagetitle () {
      return this.$store.state.current.title
    },
    isMobile () {
      return useMediaQuery('(max-width: 600px)')
    },
    data: () => ({
      drawer: false
    })
  }
}
</script>
