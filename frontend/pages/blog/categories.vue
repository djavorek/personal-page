<template>
  <bael-grid :posts="categories" />
</template>

<script>
export default {
  transition(to, from) {
    if (!from) return 'fade';
    return +to.query.page > +from.query.page ? 'slide-right' : 'slide-left';
  },
  async asyncData({ params, app, payload, route, store }) {
    await store.commit('SET_TITLE', 'Categories');
  },
  data() {
    return {};
  },
  head() {
    return {
      title: 'Categories | ' + this.$store.state.info.sitename,
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  watchQuery: ['page'],
  mounted() {
    this.$store.commit('SET_CURRENT', {
      title: 'Categories',
      dir: '',
    });
  },
};
</script>

<style>
.browse a {
  width: 100%;
}
.search:focus {
  outline: none;
}
.footer__heading {
  text-transform: uppercase;
}
nav .r {
  grid-gap: 0;
}
.r.full-height {
  grid-gap: 0;
}
@media only screen and (max-width: 40rem) {
  .xs-collapse {
    visibility: hidden;
    visibility: collapse;
    border: 0 !important;
    border-color: none !important;
    padding: 0 !important;
  }
  .xs-visible {
    visibility: visible;
  }
}
</style>
