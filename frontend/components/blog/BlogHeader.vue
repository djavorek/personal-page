<template>
  <div>
    <v-app-bar block tile color="#616161" dark flat>
      <v-app-bar-nav-icon
        v-show="isMobile"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div v-show="!isMobile" style="display: contents">
        <v-btn class="ma-1" x-large icon to="/" nuxt>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" color="white" light to="/blog/" exact nuxt>
          Blog posztok
        </v-btn>
        <v-btn class="ma-2" color="white" light to="/blog/impressum/" nuxt>
          Impresszum
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temportary>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
          <v-list-item-content
            ><v-btn class="ma-2" color="white" light to="/blog/" exact nuxt>
              Blog posztok
            </v-btn></v-list-item-content
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  computed: {
    pagetitle() {
      return this.$store.state.current.title;
    },
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    data: () => ({
      drawer: false,
    }),
  },
};
</script>
