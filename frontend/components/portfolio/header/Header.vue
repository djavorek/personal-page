<template>
  <div id="header">
    <div>
      <TitleBox />
    </div>
    <div>
      <font-awesome-icon
        id="downButton"
        icon="fa-solid fa-angle-double-down"
        size="4x"
        @click="$vuetify.goTo('#menu', options)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        duration: 250,
        offset: 0,
        easing: 'easeOutCubic',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/style/animation';

#header {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#downButton {
  margin-top: 25vh;
  color: white;
  height: 10vh;
  width: 10vw;
  z-index: 30;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;

  cursor: default;
  animation-name: bounce;
  -moz-animation-name: bounce;
}
</style>
