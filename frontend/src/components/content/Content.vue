<template>
  <div id="content" sticky-container>
    <div id="menuHolder" v-sticky>
      <Menu />
    </div>
    <div id="contentHolder" v-sticky>
      <ArticleBox />
    </div>
    <div id="demoheight">
      asd
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

#menuHolder {
  width:90vw;
}

#contentHolder {
  margin-left: 40vw;
}

#demoheight {
  height: 1000vh;
}

</style>
