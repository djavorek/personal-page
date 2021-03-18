<template>
  <div id="articleHolder">
    <Intro />
    <Contact />
    <Blog />
  </div>
</template>

<script>
import Intro from './articles/Intro.vue'
import Contact from './articles/Contact.vue'
import Blog from './articles/Blog.vue'

export default {
  name: 'ArticleBox',
  components: {
    Intro,
    Contact,
    Blog
  }
}
</script>

<style scoped lang="scss">
#articleHolder {
  height: 1200px;
  width: 90%;
  background-color: $lifted;
  height: 90vh;
  margin: 0vh 0;
  border-radius: 2rem 12rem;
  border: 0.5rem dotted $secondary;
}

</style>