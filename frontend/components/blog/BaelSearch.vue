<template>
  <div class="searchwrapper xs-relative">
    <input v-model="query" class="search" type="search" autocomplete="off" />
    <img
      class="xs-absolute searchicon xs-r0 sm-l0"
      src="~/assets/bx-search.svg"
      alt="search"
    />
    <smooth-reflow tag="ul" class="xs-absolute results">
      <li
        v-for="article of articles"
        :key="article.path"
        class="xs-border xs-p2 cursor-pointer"
        @click="onClick(article.path)"
      >
        {{ article.title }}
      </li>
    </smooth-reflow>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      query: '',
      articles: [],
    };
  },
  computed: {
    ...mapState(['articles']),
  },
  watch: {
    query(query) {
      if (!query) {
        this.articles = [];
        return;
      }

      this.articles = this.articles.filter((article) =>
        article.title.includes(query)
      );
    },
  },
  methods: {
    onClick(slug) {
      this.query = null;
      this.$router.push(slug);
    },
  },
};
</script>
<style>
.searchwrapper {
  width: 100%;
}
input.search {
  width: 100%;
  text-indent: 22px;
}
.results {
  top: 1.4rem;
  z-index: 9999;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  background: #fff;
}
.searchicon {
  height: 18px;
  top: 0px;
}
.results li {
  display: block;
  width: 100%;
}
.results li:hover {
  background: var(--hover-bg);
}
.results li:active {
  background: var(--active-bg);
}
@media only screen and (max-width: 40rem) {
  input.search {
    text-indent: 0;
  }
}
</style>
