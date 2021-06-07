<template>
  <div id="menu" class="glassmorphism">
    <MenuItem
      v-for="item in menuList"
      :key="item.id"
      :item="item"
      :selected="selected == item.id"
      @select="selected = $event"
    />
  </div>
</template>

<script>
import MenuList from './MenuList';

export default {
  data() {
    return {
      menuList: MenuList,
      selected: 0,
    };
  },

  watch: {
    selected(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit('changed', newValue);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use '~/assets/style/common';

#menu {
  padding: 5vh;
  max-width: 98vw;
}

@media screen and (min-width: 768px) {
  #menu {
    box-sizing: border-box;
    min-height: 98vh;
    border-radius: 0;
    border-right: 0;

    background-color: lighten(common.$dark, 0.2);
  }
}
</style>
