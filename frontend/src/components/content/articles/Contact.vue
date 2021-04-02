<template>
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
        
    }
  },
}
</script>

<style scoped lang="scss">


#contact-container {
  display: flex;
  justify-content: space-evenly;
}

#contact-texts {
  font-size: calc(1rem + 0.25vw);
}

</style>