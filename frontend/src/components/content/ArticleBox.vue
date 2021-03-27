<template>
  <div id="articleHolder">
    <Intro v-if="this.isSelected('About')" />
    <Contact v-if="this.isSelected('Contact')" />
    <Blog v-if="this.isSelected('Blog')" />
  </div>
</template>

<script>
import MenuList from './menu/MenuList';

import Intro from './articles/About.vue'
import Contact from './articles/Contact.vue'
import Blog from './articles/Blog.vue'

export default {
  name: 'ArticleBox',
  props: {
    menu: Number,
  },
  components: {
    Intro,
    Contact,
    Blog,
  },

  methods: {
    isSelected(purpose) {
      return MenuList[this.menu].purpose === purpose;
    }
  },
}
</script>

<style scoped lang="scss">
#articleHolder {
  width: 98%;
  background-color: $lifted;
  min-height: 90vh; 
  height: 90vh;
  padding: 2vw;
  border-radius: 1vw 6vw;
  border: 0.2rem solid $secondary;
}

</style>