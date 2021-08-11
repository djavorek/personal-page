/* eslint-disable object-shorthand */
<template>
  <v-app>
    <div
      id="portfolio"
      :style="{
        backgroundImage: 'url(' + require('@/assets/bg_grey.png') + ')',
      }"
    >
      <div class="notouchy">
        <Header />
      </div>
      <div>
        <Content />
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      goatCounter: {
        id: 'goatCounterScript',
        source: '//gc.zgo.at/count.js',
        data: 'https://javorekdenes.goatcounter.com/count',
      },
    };
  },
  mounted() {
    // Loading GoatCounter script, https://github.com/zgoat/goatcounter
    if (document.getElementById(this.goatCounter.id)) {
      return;
    }

    const script = document.createElement('script');

    script.setAttribute('src', this.goatCounter.source);
    script.setAttribute('data-goatcounter', this.goatCounter.data);
    script.setAttribute('id', this.goatCounter.id);
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('async', 'async');

    document.head.appendChild(script);
  },
  beforeDestroy() {
    const script = document.getElementById(this.goatCounter.id);
    if (script) {
      script.remove();
    }
  },
};
</script>

<style lang="scss">
@import '@/assets/style/main.scss';
</style>
