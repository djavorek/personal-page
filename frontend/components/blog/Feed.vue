<template>
  <v-container class="my-6">
    <v-row>
      <v-col cols="12">
        <slot />
      </v-col>

      <feed-card
        v-for="(article, i) in paginatedArticles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-row>

    <v-row align="center" class="bottom-fixed">
      <v-col cols="3">
        <base-btn
          v-if="page !== 1"
          class="ml-0"
          square
          title="Előző oldal"
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-col>

      <v-col v-if="pages > 1" align="center" class="subheading" cols="6">
        Oldal: {{ page }} / {{ pages }}
      </v-col>

      <v-col class="text-right" cols="3">
        <base-btn
          v-if="pages > 1 && page < pages"
          class="mr-0"
          square
          title="Következő oldal"
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </base-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Feed',

  data: () => ({
    layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
    page: 1,
  }),

  computed: {
    ...mapState(['articles']),
    pages() {
      return Math.ceil(this.articles.length / 11);
    },
    paginatedArticles() {
      const start = (this.page - 1) * 11;
      const stop = this.page * 11;

      return this.articles.slice(start, stop);
    },
  },

  watch: {
    page() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
.bottom-fixed {
  position: fixed;
  bottom: 2%;
  width: 100%;
}
</style>
