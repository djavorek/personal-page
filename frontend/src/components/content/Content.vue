<template>
  <div id="content" data-v-sticky-container>
    <div v-sticky>
      <Menu />
    </div>
    <div>
      <div id="article">
        <span>asd</span>
      </div>
    </div>
  </div>
</template>

<script>
import VueStickyDirective from "@renatodeleao/vue-sticky-directive";
import Menu from './menu/Menu.vue'

export default {
  name: 'Content',
  directives: {
    "sticky": VueStickyDirective
  },
  components: {
    Menu
  }
}
</script>

<style scoped>

#content {
  display: flex;

}

#marginHolder {
  min-height: 5000px;
}

</style>
