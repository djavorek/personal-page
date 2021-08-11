<template>
  <div id="content">
    <nav id="leftCont" class="no-bottom">
      <Menu @changed="selectMenu" />
    </nav>
    <main id="rightCont" class="no-bottom">
      <ArticleBox :menu="menu" />
      <!-- v-bind to pass as Number  -->
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: 0,
    };
  },
  methods: {
    selectMenu(selected) {
      this.menu = selected;
    },
  },
};
</script>

<style scoped lang="scss">
#content {
  display: block;

  @media only screen and (min-width: 768px) {
    display: flex;
    width: 98vw;
  }
}

.no-bottom {
  margin-bottom: 0;
  padding-bottom: 0;
}

#leftCont {
  flex: 20%;
}

#rightCont {
  flex: 80%;
}
</style>
