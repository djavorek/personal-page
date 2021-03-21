<template>
  <div id="articleHolder">
    <Intro v-if="this.showIntro" />
    <Contact v-if="this.showContact" />
    <Blog v-if="this.showBlog" />
  </div>
</template>

<script>
import MenuList from './menu/MenuList';

import Intro from './articles/About.vue'
import Contact from './articles/Contact.vue'
import Blog from './articles/Blog.vue'

const isMenuSelected = (menuPurpose) => {
	return MenuList[this.menu].purpose === menuPurpose;
};

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
  data: () => {
	return {
		showIntro:  isMenuSelected('About'),
		showContact: isMenuSelected('Contact'),
		showBlog: isMenuSelected('Blog'),
	}
  }
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