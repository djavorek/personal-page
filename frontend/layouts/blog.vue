<template>
  <v-app>
    <section class="blog container">
      <blog-header />
      <slot />
    </section>
  </v-app>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@use '~/assets/style/common';

.blog {
  color: common.$background;
}
</style>
