/* eslint-disable object-shorthand */
<template>
  <div
    id="app"
    :style="{ backgroundImage: 'url(' + require('@/assets/bg_grey.png') + ')' }"
  >
    <div id="header" class="notouchy">
      <Header />
    </div>
    <div>
      <Content />
    </div>
  </div>
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
@use '~/assets/style/common';

@font-face {
  font-family: 'Merriweather';
  src: local('Merriweather'),
    url(~@/assets/fonts/Merriweather/Merriweather-Light.ttf) format('truetype');
}

@font-face {
  font-family: 'Oswald';
  font-weight: normal;
  src: local('Oswald'),
    url(~@/assets/fonts/Oswald/Oswald-Regular.ttf) format('truetype');
}

#app {
  background-repeat: no-repeat;
  background-size: cover;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  margin: 0;
  padding: 0;

  color: common.$text;
  font-family: 'Merriweather', Helvetica, Arial;
  font-size: 62.5%; // Use REM for font-size everywhere, 1.0 rem = 10 px

  scroll-behavior: smooth !important;
  -webkit-tap-highlight-color: transparent; /* for removing tap highlight */
}

a {
  color: inherit;
  text-decoration: inherit;
}

a:hover {
  text-decoration: inherit;
}
</style>
