<template>
  <div id="content" >
    <Menu/>
  </div>
</template>

<script>
import Menu from './menu/Menu.vue'

export default {
  name: 'Content',
  components: {
    Menu
  }
}
</script>

<style scoped>

#content {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
