<template>
  <div id="content" class="columns">
    <div class="column is-one-quarters no-bottom">
      <Menu v-on:changed="selectMenu" />
    </div>
    <div class="column is-three-quarters no-bottom">
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

.no-bottom {
  margin-bottom: 0;
  padding-bottom: 0;
}


</style>
