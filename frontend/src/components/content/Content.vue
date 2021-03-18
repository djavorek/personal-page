<template>
  <div id="content">
    <div id="menuHolder" v-sticky>
      <Menu />
    </div>
    <div id="contentHolder">
      <ArticleBox />
    </div>
    <div id="demoheight"/>
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

#menuHolder {
  width:5vw;
}

#contentHolder {
  margin-left: 35vw;
}

#demoheight {
  height: 1000vh;
}

</style>
