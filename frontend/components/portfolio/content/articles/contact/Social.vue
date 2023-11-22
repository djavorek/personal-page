<template>
  <div id="social">
    <h2>ELÉRHETŐSÉGEK</h2>
    <div class="contact">
      <v-icon x-large dark>mdi-email</v-icon>
      <span>mail@javorekdenes.hu</span>
    </div>
    <div class="contact">
      <a
        href="https://www.linkedin.com/in/denes-javorek/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon class="socialicon" icon="fa-brands fa-linkedin" />
        <span>/in/denes-javorek/</span>
      </a>
    </div>
    <div class="contact">
      <a
        href="https://www.facebook.com/javidenes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon class="socialicon" icon="fa-brands fa-facebook" />
        <span>facebook.com/javidenes/</span>
      </a>
    </div>
    <div class="contact">
      <font-awesome-icon class="socialicon" icon="fa-brands fa-discord" />
      <span>Dénes#2583</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/style/common';

#social {
  border: solid 2px common.$primary;
  padding: 3em;
}

.contact {
  padding-top: 2em;
}

.socialicon {
  width: 2em;
  vertical-align: middle;
}

span {
  font-family: 'Oswald', Helvetica, Arial;
  letter-spacing: 0.2ch;
  margin-left: 1em;
  font-size: 1rem;
}
</style>
