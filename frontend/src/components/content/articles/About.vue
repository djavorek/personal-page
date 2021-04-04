<template>
  <div id="about-container">
    <div class="about-row">
      <div id="head" class="about-image">
        <img :src="headImg"/>
      </div>
      <div id="head-text" class="about-text">
        <p>
          Szia. Örülök, hogy megtaláltad a weboldalamat.
          Itt igyekszek összefoglalni mindent, amit amúgy is megtalálnál rólam az interneten.
          Így egyszerűbb és biztosabb dolgod lesz.
        </p>
      </div>
    </div>

    <div class="about-row wrap-reverse">
      <div id="work-text" class="about-text">
        <p>
          2020 decembere óta az EPAM Systems-nél építem a karrieremet, mint Software Engineer.
          Előtte több helyen is dolgoztam, többször hasonló pozícióban, biteket tologatva. 
          zek közül a legjobban a Finastra Hungary-nél töltött éveimet értékelem. 
          Itt tanulhattam meg a szakma alapjait és alakíthattam ki a saját utamat.
        </p>
      </div>
      <div id="work" class="about-image">
        <img :src="workImg"/>
      </div>
    </div>

    <div class="about-row">
      <div id="exp" class="about-image">5</div>
      <div id="exp-text" class="about-text">6</div>
    </div>

    <div class="about-row wrap-reverse">
      <div id="personal-text" class="about-text">7</div>
      <div id="personal" class="about-image">8</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  data(){
    return {
      headImg: require('@/assets/img/about_head.svg'),
      workImg: require('@/assets/img/about_work.svg')
    }
  }
}
</script>

<style scoped lang="scss">

  #about-container {
    font-size: calc(1.5rem + 0.25vw);
    font-family: "Oswald", Helvetica, Arial;
  }

  .about-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 2em;
  }

    .about-row.wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  @media screen and (max-width: 1000px) {
    .about-image {
      flex-basis: auto;
    }
   
    .about-text {
      flex-basis: auto;
    }
	}

  .about-image {
    min-width: 300px;
    flex-basis: 40%;
    
  }
   
  .about-text {
    flex-basis: 60%;
  }

  .container hr {
    flex-basis: 100%;
    height: 0;
    margin: 0;
    border: 0;
  }
</style>