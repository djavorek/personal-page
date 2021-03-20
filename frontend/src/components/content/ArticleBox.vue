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
  width: 98%;
  background-color: $lifted;
  min-height: 90vh; 
  height: 90vh;
  padding: 2vw;
  border-radius: 1vw 6vw;
  border: 0.5rem solid $secondary;
}

</style>