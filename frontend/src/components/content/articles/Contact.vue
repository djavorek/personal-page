<template>
  <b-carousel id='contact'
    :animated="animated"
    :has-drag="drag"
    :autoplay="autoPlay"
    :pause-hover="pauseHover"
    :pause-info="pauseInfo"
    :pause-info-type="pauseType"
    :interval="interval"
    :repeat="repeat"
    :indicator="indicator"
    :indicator-background="indicatorBackground"
    :indicator-inside="indicatorInside"
    :indicator-mode="indicatorMode"
    :indicator-position="indicatorPosition"
    :indicator-style="indicatorStyle"
    :icon-pack="iconPack"
  >
    <b-carousel-item ><Email/></b-carousel-item>
    <b-carousel-item ><Github/></b-carousel-item>
  </b-carousel>
</template>

<script>
import Email from './contact/Email';
import Github from './contact/Github';


export default {
  name: 'Contact',
  components: {
	Email,
    Github,
  },
  data() {
        return {
            animated: 'slide',
            drag: false,
            autoPlay: true,
            pauseHover: true,
            pauseInfo: true,
            repeat: true,
            pauseType: 'is-white',
            interval: 2000,
            iconPack: 'fas',
            indicator: true,
            indicatorBackground: true,
            indicatorInside: true,
            indicatorMode: 'hover',
            indicatorPosition: 'is-top',
            indicatorStyle: 'is-lines',
            carousels: [
                { title: 'Facebook', color: 'dark' },
                { title: 'Email', color: 'primary' },
                { title: 'LinkedIn', color: 'info' },
                { title: 'Github', color: 'success' },
            ]
        }
    },
}
</script>

<style scoped lang="scss">


#contact {
  border-radius: 0.5em 3em;
}

</style>