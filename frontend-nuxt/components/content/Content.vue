<template>
  <div id="content">
    <div id="leftCont" class="no-bottom">
      <Menu v-on:changed="selectMenu" />
    </div>
    <div id="rightCont" class="no-bottom">
      <ArticleBox v-bind:menu="menu" />
      <!-- v-bind to pass as Number  -->
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
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
