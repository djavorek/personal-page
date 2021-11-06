<template>
  <div id="social">
    <h2>ELÉRHETŐSÉGEK</h2>
    <div class="contact">
      <img :src="mailImg" alt="email" /><span>mail@javorekdenes.hu</span>
    </div>
    <div class="contact">
      <img :src="inImg" alt="linkedin" /><span>/in/denes-javorek/</span>
    </div>
    <div class="contact">
      <img :src="fbImg" alt="facebook" /><span>facebook.com/javidenes/</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mailImg: require('@/assets/img/contact_mail.svg'),
      inImg: require('@/assets/img/contact_in.svg'),
      fbImg: require('@/assets/img/contact_fb.svg'),
    };
  },
};
</script>

<style scoped lang="scss">
@use '~/assets/style/common';

#social {
  border: solid 2px common.$primary;
  padding: 3em;
}

.contact {
  padding-top: 2em;
}

img {
  width: 2.5em;
  vertical-align: middle;
}

span {
  font-family: 'Oswald', Helvetica, Arial;
  letter-spacing: 0.2ch;
  margin-left: 1em;
  font-size: 1rem;
}
</style>
