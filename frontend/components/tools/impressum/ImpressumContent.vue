<template>
  <div class="ma-12">
    <div class="flex-card-container">
      <v-card
        class="ma-4 pa-4"
        max-width="600"
        elevation="6"
        :dark="isDark"
      >
        <v-card-title>Személyes adatok</v-card-title>
        <v-card-text>
          Név: Javorek Dénes (Magánszemély) <br>
          Email cím: mail@javorekdenes.hu
        </v-card-text>
      </v-card>
      <v-card
        class="ma-4 pa-4"
        max-width="600"
        elevation="6"
        :dark="isDark"
      >
        <v-card-title>Tárhelyszolgáltató adatai</v-card-title>
        <v-card-text>
          <div>
            Név: Netlify Inc <br>
            Weboldal:
            <a
              id="netlify-link"
              href="https://www.netlify.com"
            >netlify.com</a>
            <br>
            Telefonszám: 1-844-899-7312 <br>
            Cím: 610 22nd Street Suite 315 San Francisco, CA 94107 United States
            <br>
          </div>
        </v-card-text>
        <a
          class="ma-4"
          href="https://www.netlify.com"
        >
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
            alt="Deploys by Netlify"
          >
        </a>
      </v-card>
    </div>
    <div class="flex-card-container">
      <v-card
        class="ma-4 pa-4"
        max-width="600"
        elevation="6"
        shaped
        :dark="isDark"
      >
        <v-card-title>Használ-e az oldal cookiekat?</v-card-title>
        <v-card-subtitle class="font-weight-bold">
          Nem.
        </v-card-subtitle>
        <v-card-text>
          Egyetlen cookiet sem alkalmaz ez az oldal, erre nincs is szükség.
          <br>
          Az oldalon <b>nem</b> találhatóak reklámok, személyes beállításokat
          <b>nem</b>
          lehet menteni, <b>nem</b> követi a látogatóit más oldalak böngészése
          közben és a cookiek semmilyen egyéb felhasználási céljára sincs
          szükség.
        </v-card-text>
      </v-card>
      <v-card
        class="ma-4 pa-4"
        max-width="600"
        elevation="6"
        shaped
        :dark="isDark"
      >
        <v-card-title>Gyűjt-e az oldal bármilyen adatot?</v-card-title>
        <v-card-subtitle class="font-weight-bold">
          Igen.
        </v-card-subtitle>
        <v-card-text>
          A látogatottsági adatok méréséhez elengedhetetlen technikai
          információkat egy
          <a
            id="goatcounter-link"
            href="https://www.goatcounter.com/"
          >
            GoatCounter
          </a>
          nevű, nyílt forráskódú szolgáltatás segítségével gyűjti be.<br>
          Az eltárolt adatok között semmilyen személyes adat, vagy személy
          azonosításához elégséges adat nincs.
        </v-card-text>
        <a
          class="ma-4"
          href="https://www.goatcounter.com/"
        >
          <img
            src="https://www.vectorlogo.zone/logos/goatcounter/goatcounter-icon.svg"
            alt="Counts with GoatCounter"
            height="51"
          ></a>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDark: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/style/common';

.flex-card-container {
  display: flex;
  flex-wrap: wrap;
}

#netlify-link {
  color: darken(common.$primary, 25%);
}

#goatcounter-link {
  color: mediumorchid;
}
</style>
