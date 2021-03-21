<template>
  <div id="content" class="columns">
    <div id="menuHolder" class="column">
      <Menu />
    </div>
    <div class="column is-two-thirds">
      <ArticleBox />
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
  }
}
</script>

<style scoped>
#menuHolder {
  width:2vw;
}


</style>
