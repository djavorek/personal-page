<template>
  <div id="about-container">
    <div class="about-row">
      <div id="head" class="about-image">
        <img :src="headImg" />
      </div>
      <div id="head-text" class="about-text">
        <p>
          <span class="greenText">Szia.</span> Örülök, hogy megtaláltad a
          weboldalamat. Itt igyekszek összefoglalni mindent, amit amúgy is
          megtalálnál rólam az interneten és néhány olyan részletet is aminek
          máshol nem volt helye. Így egyszerűbb és biztosabb dolgod lesz.
        </p>
      </div>
    </div>

    <div class="about-row wrap-reverse">
      <div id="work-text" class="about-text">
        <p>
          2020 decembere óta az
          <span class="greenText">EPAM Systems-nél építem a karrieremet,</span>
          <span class="greenText">mint Software Engineer.</span>
          Előtte több helyen is dolgoztam, többször hasonló pozícióban, biteket
          tologatva. Ezek közül a legjobban a Finastra Hungary-nél töltött
          éveimet értékelem. Itt tanulhattam meg a szakma alapjait és
          alakíthattam ki a saját utamat.
        </p>
      </div>
      <div id="work" class="about-image">
        <img :src="workImg" />
      </div>
    </div>

    <div class="about-row">
      <div id="exp" class="about-image">
        <img :src="expImg" />
      </div>
      <div id="exp-text" class="about-text">
        <p>
          Eddigi tapasztalataim leginkább a alkalmazások szerveroldali -
          <span class="greenText">Backend - feladatainak megoldása</span> köré
          szerveződnek. Legközelebb hozzám talán a
          <span class="greenText">Java</span> és a
          <span class="greenText">Spring</span> világa áll, de dolgoztam már
          NodeJS és PHP kódon is. Ezen felül mindig szeretek új dolgokat
          megismerni, legyen az cloud, frontend vagy beágyazott rendszer.
        </p>
      </div>
    </div>

    <div class="about-row wrap-reverse">
      <div id="personal-text" class="about-text">
        <p>
          Legszívesebben mindig valamilyen számomra
          <span class="greenText"
            >aktuális téma kérdéseinek alapos megértésére</span
          >,
          <span class="greenText">dolgok tökéletesítésére</span>
          vagy ezek kombinációjára fordítanám a szabadidőmet. Szeretem érteni
          hogyan működik a világ, legyen szó technológiáról, gazdaságról vagy
          akár természetről. Az pedig mindig örömmel tölt el, amikor még néhány
          órát rászánhatok valaminek befejezésére, amit mások már késznek
          láttak. Általában nem lehet és nem is érdemes a tökéletességet
          keresni, de az én szabadidőmben szeretem a minőséget a mennyiség és az
          idő elé állítani.
        </p>
      </div>
      <div id="personal" class="about-image">
        <img :src="hobbyImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headImg: require("@/assets/img/about_head.svg"),
      workImg: require("@/assets/img/about_work.svg"),
      expImg: require("@/assets/img/about_exp.svg"),
      hobbyImg: require("@/assets/img/about_hobby.svg"),
    };
  },
};
</script>

<style scoped lang="scss">
@use '~/assets/style/common';

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
  box-sizing: border-box;
  flex-basis: 40%;
  padding: 0 20px 0 20px;
}

img {
  min-width: 300px;
  max-width: 100%;
}

.about-text {
  flex-basis: 60%;
}

p > span {
  white-space: pre;
}
</style>
