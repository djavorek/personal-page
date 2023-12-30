<template>
  <div id="content">
    <div
      id="leftCont"
      class="dynamic-spacing"
    >
      <Menu @changed="selectMenu" />
    </div>
    <main
      id="rightCont"
      class="dynamic-spacing"
    >
      <ArticleBox :menu="menu" />
      <!-- v-bind to pass as Number  -->
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: 0
    }
  },
  methods: {
    selectMenu (selected) {
      this.menu = selected
    }
  }
}
</script>

<style scoped lang="scss">
#content {
  display: block;

  @media only screen and (min-width: 768px) {
    display: flex;
    width: 98vw;
  }
}

.dynamic-spacing {
  margin: 0 auto;
  margin-bottom: 2vh;
  padding-bottom: 2vh;

  @media only screen and (min-width: 768px) {
    margin-bottom: 1vh;
    padding-bottom: 0;
  }
}

#leftCont {
  flex: 20%;

  @media only screen and (min-width: 768px) {
    margin-right: 0;
    padding-right: 0;
  }
}

#rightCont {
  flex: 80%;

  @media only screen and (min-width: 768px) {
    margin-left: 0;
    padding-left: 0;
  }
}
</style>
