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
    :icon-size="iconSize"
  >
    <!--<b-carousel-item ><Email/></b-carousel-item>-->
    <b-carousel-item ><Github/></b-carousel-item>
  </b-carousel>
</template>

<script>
import Github from './contact/Github';


export default {
  name: 'Contact',
  components: {
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
            indicator: true,
            indicatorBackground: true,
            indicatorInside: true,
            indicatorMode: 'hover',
            indicatorPosition: 'is-top',
            indicatorStyle: 'is-lines',
            iconPack: 'fas',
            iconSize: 'is-large',
        }
    },
}
</script>

<style scoped lang="scss">


#contact {
  border-radius: 0.5em 3em;
}

</style>