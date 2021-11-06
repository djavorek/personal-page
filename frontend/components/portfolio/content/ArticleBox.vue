<template>
  <div id="main" class="glassmorphism">
    <transition name="slide" mode="out-in">
      <About v-if="isSelected('About')" />
      <Contact v-if="isSelected('Contact')" />
      <Blog v-if="isSelected('Blog')" />
    </transition>
  </div>
</template>

<script>
import MenuList from './menu/MenuList';

export default {
  props: {
    menu: {
      type: Number,
      default: 0,
    },
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

#main {
  box-sizing: border-box;
  overflow: hidden;
  min-height: 98vh;
  max-width: 98vw;
  padding: 2em;
  border-color: common.$primary;
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
  #main {
    border-radius: 0;
    border-left: 0;
  }
}
</style>
