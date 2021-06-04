<template>
  <div id="menu" class="glassmorphism">
    <MenuItem
      v-for="item in menuList"
      :item="item"
      :key="item.id"
      :selected="selected == item.id"
      v-on:select="selected = $event"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      menuList: MenuList,
      selected: 0,
    };
  },

  watch: {
    selected(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit("changed", newValue);
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
