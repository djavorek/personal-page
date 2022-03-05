<template>
  <div id="about-container">
    <div class="about-row">
      <div id="head" class="about-image">
        <img :src="headImg" alt="intro" />
      </div>
      <div id="head-text" class="about-text">
        <p>
          <span class="greenText">Szia.</span> Örülök, hogy megtaláltad a
          weboldalamat. Itt igyekszek összefoglalni mindent, amit amúgy is
          megtalálnál rólam különböző oldalakon. Így egyszerűbb és biztosabb
          dolgod lesz.
        </p>
        <v-chip class="ma-2 pa-4 primary-skil" color="green" text-color="white"
          >Miskolci Egyetem</v-chip
        >
        <v-chip class="ma-2 pa-4 primary-skil" color="green" text-color="white"
          >Mérnökinformatikus</v-chip
        >
        <v-chip class="ma-2 pa-4 primary-skil" color="yellow" text-color="black"
          >Szeged</v-chip
        >
      </div>
    </div>

    <div class="about-row wrap-reverse">
      <div id="work-text" class="about-text">
        <p>
          2020 decembere óta az
          <span class="greenText">EPAM Systems-nél dolgozok,</span>
          <span class="greenText">mint Software Engineer.</span>
          Korábban már több másik cégnél is kipróbálhattam magam hasonló
          pozicíókban.
        </p>
        <v-chip
          class="ma-2 pa-4 primary-skil"
          color="#39c2d7"
          text-color="white"
          >EPAM Systems</v-chip
        >
        <v-chip
          class="ma-2 pa-4 primary-skil"
          color="#C137A2"
          text-color="white"
          >Finastra</v-chip
        >
      </div>
      <div id="work" class="about-image">
        <img :src="workImg" alt="about" />
      </div>
    </div>

    <div class="about-row">
      <div id="exp" class="about-image">
        <img :src="expImg" alt="experience" />
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
        <v-chip class="ma-2 pa-4 primary-skil" color="green" text-color="white"
          >Java</v-chip
        >
        <v-chip class="ma-2 pa-4 primary-skil" color="green" text-color="white"
          >Spring</v-chip
        >
        <v-chip class="ma-2 pa-4 primary-skil" color="green" text-color="white"
          >Docker</v-chip
        >
        <v-chip class="ma-2 pa-4 primary-skil" color="yellow" text-color="black"
          >React</v-chip
        >
        <v-chip class="ma-2 pa-4 primary-skil" color="yellow" text-color="black"
          >Vue</v-chip
        >
        <v-chip class="ma-2 pa-4 primary-skil">C</v-chip>
        <v-chip class="ma-2 pa-4 primary-skil">PHP</v-chip>
      </div>
    </div>

    <div class="about-row wrap-reverse">
      <div id="personal-text" class="about-text">
        <p>
          A szabadidőmet legszívesebben valamilyen aktuális
          <span class="greenText">műszaki témában való elmerüléssel</span>,
          <span class="greenText">dolgok tökéletesítésével</span>
          vagy ezek kombinációjával töltöm. Szeretem érteni hogyan működik a
          világ, legyen szó technológiáról, gazdaságról vagy akár természetről.
          Az pedig mindig örömmel tölt el, ha még néhány órát rászánhatok
          valaminek a befejezésére, amit más már egyszer késznek hívott.
        </p>
      </div>
      <div id="personal" class="about-image">
        <img :src="hobbyImg" alt="hobbies" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headImg: require('@/assets/img/about_head.svg'),
      workImg: require('@/assets/img/about_work.svg'),
      expImg: require('@/assets/img/about_exp.svg'),
      hobbyImg: require('@/assets/img/about_hobby.svg'),
    };
  },
};
</script>

<style scoped lang="scss">
@use '~/assets/style/common';

#about-container {
  font-size: 1.2rem;
  font-family: 'Oswald', Helvetica, Arial;
}

.about-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
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
  flex-grow: 1;
}

p > span {
  white-space: pre;
}
</style>
