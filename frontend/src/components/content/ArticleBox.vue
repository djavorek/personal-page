<template>
  <div id="articleHolder">
	<transition name="slide" mode="out-in">
		<About v-if="this.isSelected('About')" />
		<Contact v-if="this.isSelected('Contact')" />
		<Blog v-if="this.isSelected('Blog')" />
	</transition>
  </div>
</template>

<script>
import MenuList from './menu/MenuList';

import About from './articles/About.vue'
import Contact from './articles/Contact.vue'
import Blog from './articles/Blog.vue'

export default {
  name: 'ArticleBox',
  props: {
    menu: Number,
  },
  components: {
    About,
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
  background-color: $dark;
  min-height: 90vh; 
  height: 90vh;
  padding: 2vw;
  border-radius: 1vw 6vw;
  border: 0.2rem solid $primary;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

</style>