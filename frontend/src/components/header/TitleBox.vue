<template>
  <div id="titleBox">
    <div id="hello"><span>HELLO</span><span class="greenText">.</span></div>
    <div id="name">
      <span class="greenText">Dénes</span><span> vagyok</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#titleBox {
  display: inline-block;
  padding: 2vh 3vw;

  line-height: calc(7rem + 2vw);
  text-align: center;
  background: rgba(black, 0.8);

  border: 1.5em solid #ffffff;
  z-index: 30;
}

#hello {
  font-size: calc(6.9rem + 1.77vw);
  // font-size: 9.2rem;
}

#name {
  font-size: calc(3.9rem + 1vw);
  // font-size: 5.2rem;
}
</style>
