/* eslint-disable object-shorthand */
<template>
  <v-app>
    <div
      id="portfolio"
      :style="{
        backgroundImage: 'url(' + bgImg + ')',
      }"
    >
      <div class="notouchy">
        <Header />
      </div>
      <div>
        <Content />
      </div>
    </div>
    <GoatCounter />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    bgImg: require('@/assets/img/bg2.jpg'),
  }),
};
</script>

<style lang="scss">
@import '@/assets/style/main.scss';
</style>
