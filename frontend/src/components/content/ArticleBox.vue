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
    box-sizing: border-box;
    min-height: 98vh;
    max-width: 98vw;
    padding: 2em;
    border-color: $primary;
    box-shadow: -3vw 3vw 3vw -3vw lighten($dark, 0.2);
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

  @media screen and (min-width: 768px) {
    #articleHolder {
      border-radius: 0;
      border-left: 0;
    }
  }
</style>