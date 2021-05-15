<template>
  <div id="social">
	<h1 id="social-title">TOVÁBBI ELÉRHETŐSÉGEK</h1>
	<div class="contact">
		<img :src="mailImg"/><p> javorek.denes@gmail.com</p>
	</div>
	<div class="contact">
		<img :src="inImg"/><p> /in/denes-javorek/</p>
	</div>
	<div class="contact">
		<img :src="fbImg"/><p> facebook.com/javidenes/</p>
	</div>
  </div>
</template>

<script>

export default {
  name: 'Social',
  data() {
    return {
      mailImg: require('@/assets/img/contact_mail.svg'),
      inImg: require('@/assets/img/contact_in.svg'),
      fbImg: require('@/assets/img/contact_fb.svg'),
    }
  },
}
</script>

<style scoped lang="scss">
	.contact {
		display: inline;
	}

	img {
		width: 5rem;
		vertical-align: middle;
	}


</style>