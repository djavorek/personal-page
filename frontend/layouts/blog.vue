<template>
  <v-app>
    <section class="blog container">
      <bael-header />
      <nuxt />
    </section>
  </v-app>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@use '~/assets/style/common';

.blog {
  color: common.$background;
}
</style>
