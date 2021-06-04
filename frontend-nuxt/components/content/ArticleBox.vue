<template>
  <div id="articleHolder" class="glassmorphism">
    <transition name="slide" mode="out-in">
      <About v-if="this.isSelected('About')" />
      <Contact v-if="this.isSelected('Contact')" />
      <Blog v-if="this.isSelected('Blog')" />
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    menu: Number,
  },
  components: {
    About,
    Contact,
    Blog,
  },

  methods: {
    isSelected(purpose) {
      return MenuList[this.menu].purpose === purpose;
    },
  },
};
</script>

<style scoped lang="scss">
@use '~/assets/style/common';

#articleHolder {
  box-sizing: border-box;
  overflow: hidden;
  min-height: 98vh;
  max-width: 98vw;
  padding: 2em;
  border-color: common.$primary;
  box-shadow: -3vw 3vw 3vw -3vw lighten(common.$dark, 0.2);
}

.slide-leave-active {
  transition: 0.2s;
}
.slide-enter-active {
  transition: 0.4s;
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}

@media screen and (min-width: 768px) {
  #articleHolder {
    border-radius: 0;
    border-left: 0;
  }
}
</style>
