<template>
  <div id="content" class="columns">
    <div id="menuHolder" class="column">
      <Menu v-on:changed="selectMenu" />
    </div>
    <div class="column is-two-thirds">
       <ArticleBox v-bind:menu="menu" /> <!-- v-bind to pass as Number  -->
    </div>
  </div>
</template>

<script>
import Menu from './menu/Menu.vue';
import ArticleBox from './ArticleBox.vue';

export default {
  name: 'Content',
  components: {
    Menu,
    ArticleBox,
  },
  data: function () {
    return {
      menu: 0,
    };
  },
  methods: {
    selectMenu(selected) {
      this.menu = selected;
    }
  }
}
</script>

<style scoped>
#menuHolder {
  width:2vw;
}


</style>
