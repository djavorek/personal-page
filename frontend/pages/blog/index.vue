<template>
  <div>
    <ul v-for="(blogPosts, index) in posts" :key="index">
      <nuxt-link :to="`${blogPosts.slug}`">{{ blogPosts.title }}</nuxt-link>
      <p>{{ blogPosts.description }}</p>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
