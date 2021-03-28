<template>
  <b-carousel
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
  >
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-bold`">
            <div class="hero-body has-text-centered">
                <h1 class="title">{{carousel.title}}</h1>
                <p><a href="#arrow"></a></p>
            </div>
        </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>

export default {
  name: 'Contact',
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
  color: white;
}

</style>