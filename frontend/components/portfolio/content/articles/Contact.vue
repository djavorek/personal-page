<template>
  <div>
    <div id="img-center">
      <img id="contact-img" :src="contactImg" />
    </div>
    <div id="contact-container">
      <div id="direct-email">
        <Email />
      </div>
      <div id="contact-texts">
        <Social />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactImg: require('@/assets/img/contact_instant.svg'),
    };
  },
};
</script>

<style scoped lang="scss">
#img-center {
  margin: 0 auto;
  width: 100%;
  display: block;
}

#contact-img {
  height: 35vh;
  width: 100%;
  display: block;
  padding-top: 2vw;
}

#contact-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

#direct-email {
  flex-basis: 40%;
}

#contact-texts {
  flex-basis: 40%;
  font-size: 1rem;
}

@media screen and (max-width: 1000px) {
  #direct-email {
    flex-basis: auto;
  }

  #contact-texts {
    flex-basis: auto;
  }
}
</style>
