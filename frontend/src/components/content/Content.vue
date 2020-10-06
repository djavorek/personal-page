<template>
  <div id="content" >
    <div id="menuHolder">
      <Menu />
    </div>
    <div>
      <ArticleBox />
    </div>
  </div>
</template>

<script>
import VueStickyDirective from "@renatodeleao/vue-sticky-directive";
import Menu from './menu/Menu.vue';
import ArticleBox from './ArticleBox.vue';

export default {
  name: 'Content',
  directives: {
    "sticky": VueStickyDirective
  },
  components: {
    Menu,
    ArticleBox
  }
}
</script>

<style scoped>

#content {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: stretch;
}

</style>
