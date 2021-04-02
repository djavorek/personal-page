<template>
  <div id="articleHolder" class="glassmorphism">
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
  @import '@/scss/common.scss';

  #articleHolder {
    min-height: 95vh;
    padding: 2em;
    border-color: $primary;
  }

  .slide-leave-active,
  .slide-enter-active {
    transition: 0.25s;
  }
  .slide-enter {
    transform: translate(1.8em, 1.8em); // Padding - border
  }
  .slide-leave-to {
    transform: translate(-1.8em, -1.8em);
  }
</style>