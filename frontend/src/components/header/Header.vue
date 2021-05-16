<template>
  <div id="header">
    <div>
      <TitleBox />
    </div>
    <div>
      <a href="#content">
        <font-awesome-icon
          id="downButton"
          icon="angle-double-down"
          size="10x"
        />
      </a>
    </div>
    <!-- <div class="parallax" :style="{ backgroundImage: 'url(' + require('@/assets/fg.svg') + ')' }"></div> -->
  </div>
</template>

<script>
import TitleBox from "./TitleBox.vue";

export default {
  name: "Header",
  components: {
    TitleBox,
  },
};
</script>

<style lang="scss" scoped>
@use '@/scss/animation';

#header {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.parallax {
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}

#downButton {
  margin-top: 20vh;
  color: white;
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
