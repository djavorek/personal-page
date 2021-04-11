<template>
  <div>
    <div id="img-center">
      <img id="contact-img" :src="contactImg"/>
    </div>
    
    <div id="contact-container">
      <div id="direct-email">
        <Email/>
      </div>
      <div id="contact-texts">
        <p>Email: javorek.denes@gmail.com</p>
        <p>LinkedIn: /in/denes-javorek/</p>
        <p>Facebook: facebook.com/javidenes/</p>
      </div>
    </div>
  </div>
</template>

<script>
import Email from './contact/Email';


export default {
  name: 'Contact',
  components: {
    Email,
  },
  data() {
    return {
        contactImg: require('@/assets/img/contact_instant.svg'),
    }
  },
}
</script>

<style scoped lang="scss">

#img-center {
  margin: 0 auto;
  width: 100%;
  display: block;
}

#contact-img {
  height: 30vh;
  width: 85%;
  display: block;
}

#contact-container {
  display: flex;
  justify-content: space-evenly;
}

#contact-texts {
  font-size: calc(1rem + 0.25vw);
}

</style>