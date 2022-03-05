<template>
  <div>
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

<style scoped lang="scss">
@use '~/assets/style/common';

#img-center {
  margin: 0 auto;
  width: 100%;
  display: block;
}

#contact-img {
  height: 35vh;
  width: 100%;
  display: block;
  padding: 2vw;
}

#contact-container {
  min-height: 100vh;
  padding: 2vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
}

#direct-email {
  flex-basis: 40%;
}

#contact-texts {
  flex-basis: 30%;
  font-size: 1.2rem;
}

@media screen and (max-width: 1200px) {
  #direct-email {
    flex-basis: auto;
    margin-bottom: 3vh;
  }

  #contact-texts {
    flex-basis: auto;
  }
}
</style>
