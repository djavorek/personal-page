<template>
  <div id="social">
    <h1>TOVÁBBI ELÉRHETŐSÉGEK</h1>
    <div class="contact">
      <img :src="mailImg" /><span>javorek.denes@gmail.com</span>
    </div>
    <div class="contact">
      <img :src="inImg" /><span>/in/denes-javorek/</span>
    </div>
    <div class="contact">
      <img :src="fbImg" /><span>facebook.com/javidenes/</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Social",
  data() {
    return {
      mailImg: require("@/assets/img/contact_mail.svg"),
      inImg: require("@/assets/img/contact_in.svg"),
      fbImg: require("@/assets/img/contact_fb.svg"),
    };
  },
};
</script>

<style scoped lang="scss">
@use '@/scss/common';

#social {
  border: solid 2px common.$primary;
  padding: 3em;
}

.contact {
  padding-top: 2em;
}

img {
  width: 5rem;
  vertical-align: middle;
}

span {
  font-family: "Oswald", Helvetica, Arial;
  letter-spacing: 0.2ch;
  margin-left: 1em;
  font-size: 1.8rem;
}
</style>
