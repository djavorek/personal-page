<template>
  <section class="blog container xs-text-5 md-text-4">
    <bael-header />
    <nuxt />
    <lazy-slide-out />
  </section>
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
