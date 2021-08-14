<template>
  <div id="titleBox">
    <div id="hello"><span>HELLO</span><span class="greenText">.</span></div>
    <div id="name">
      <span class="greenText">Dénes</span><span> vagyok</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#titleBox {
  display: inline-block;
  padding: 2vh 3vw;

  line-height: 4rem;
  text-align: center;
  background: rgba(black, 0.8);

  border: 10px solid #ffffff;
  z-index: 30;
}

#hello {
  font-size: 4.2rem;
  // font-size: 9.2rem;
}

#name {
  font-size: 2.5rem;
  // font-size: 5.2rem;
}
</style>
