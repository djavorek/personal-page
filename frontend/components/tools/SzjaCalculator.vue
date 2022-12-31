<template>
  <div id="szja">
    <div id="szja-input">
      <v-alert text type="warning" border="left">
        <b>Az adatok kizárólag tájékoztató jellegűek</b> és {{ targetYear }}-ra vonatkoznak.
      </v-alert>

      <v-currency-field
        id="net"
        v-model="net"
        label="Jelenlegi nettó"
        suffix="Ft"
        type="number"
        @change="calculate"
      />
      <v-currency-field
        id="gross"
        v-model="gross"
        label="Jelenlegi bruttó"
        type="number"
        suffix="Ft"
        @change="calculate"
      />

      <v-checkbox
        id="turnagelimit"
        v-model="turnagelimit"
        :label="targetYear + '-ban leszek 25 éves.'"
        @change="calculate"
      />
      <transition name="scroll-y-transition">
        <v-layout v-if="turnagelimit" class="ml-4">
          <v-menu
            v-model="birthSelectorMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template #activator="{ on }">
              <v-text-field
                label="Születési idő"
                readonly
                :value="birth"
                v-on="on"
              />
            </template>
            <v-date-picker
              id="birth"
              v-model="birth"
              locale="hu-HU"
              @input="birthSelected"
            />
          </v-menu>
        </v-layout>
      </transition>

      <v-checkbox
        id="taxdisocunt"
        v-model="otherTaxDiscounts.on"
        label="Jelenleg családi adókedvezményt veszek igénybe."
        @change="calculate"
      />
      <transition name="scroll-y-transition">
        <v-container v-if="otherTaxDiscounts.on" class="ml-4">
          <v-row>
            <v-checkbox
              id="taxdisocunt"
              v-model="otherTaxDiscounts.firstMarriage.on"
              :label="
                'Jelenleg első házasok kedvezményét veszek igénybe és ez ' +
                targetYear +
                '-ben lejár, '
              "
              @change="calculate"
            />
            <transition name="scroll-y-transition">
              <v-select
                v-if="otherTaxDiscounts.firstMarriage.on"
                v-model="otherTaxDiscounts.firstMarriage.until"
                class="ml-2"
                label="Válaszd ki melyik hónapban"
                :items="otherTaxDiscounts.firstMarriage.options"
                item-text="text"
                item-value="value"
                return-object
                single-line
                @change="calculate"
              ></v-select>
            </transition>
          </v-row>
          <v-row>
            <v-currency-field
              v-if="otherTaxDiscounts.firstMarriage.on"
              id="marriageDiscount"
              v-model="otherTaxDiscounts.firstMarriage.quantity"
              label="Első házasok kedvezményének rám eső része (nettó)"
              type="number"
              suffix="Ft"
              @change="calculate"
          /></v-row>
        </v-container>
      </transition>
    </div>

    <v-divider class="divider"></v-divider>

    <div id="szja-output">
      <v-card>
        <v-card-title>Számított nettó ({{ targetYear }}-ban)</v-card-title>
        <v-card-text>
          <div v-if="output.every((i) => i === output[0])">
            {{ output[0] | toCurrency }}
          </div>
          <SzjaTable v-else :data="output" />
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import SzjaTable from './SzjaTable.vue';
export default {
  components: { SzjaTable },
  data() {
    return {
      targetYear: 2023, // Year of our calculations, only update after checked current tax calculations
      grossUpperLimit: 500000, // Upper limit of the discount, update if needed (to previous July data): https://www.ksh.hu/keresetek
      net: 266000, // Feasible net for 400k gross
      gross: 400000,
      turnagelimit: false,
      otherTaxDiscounts: {
        on: false,
        firstMarriage: {
          on: false,
          until: 0,
          quantity: 5000,
          options: [
            { text: 'januárban.', value: 1 },
            { text: 'februárban.', value: 2 },
            { text: 'márciusban.', value: 3 },
            { text: 'áprilisban.', value: 4 },
            { text: 'májusban.', value: 5 },
            { text: 'júniusban.', value: 6 },
            { text: 'júliusban.', value: 7 },
            { text: 'augusztusban.', value: 8 },
            { text: 'szeptemberban.', value: 9 },
            { text: 'októberban.', value: 10 },
            { text: 'novemberban.', value: 11 },
          ],
        },
      },
      birthSelectorMenu: false,
      birth: '',
      output: new Array(12).fill(0),
    };
  },
  created() {
    this.birth = `${this.targetYear - 25}-01-01`;
    this.calculate();
  },
  methods: {
    birthSelected() {
      this.birthSelectorMenu = false;
      this.calculate();
    },
    calculate() {
      for (let monthNum = 0; monthNum < 12; monthNum++) {
        let calculatedNet = this.net;

        const limitDateForMonth = new Date(this.targetYear, monthNum, 1);
        limitDateForMonth.setDate(limitDateForMonth.getDate() - 1);

        if (
          !this.turnagelimit ||
          this.yearsPrior(limitDateForMonth, 25) < new Date(this.birth)
        ) {
          let taxDiscountBase =
            this.gross < this.grossUpperLimit
              ? this.gross
              : this.grossUpperLimit;

          taxDiscountBase -= this.getExpiredMarriageDiscount(
            taxDiscountBase,
            monthNum
          );

          const taxDiscount = taxDiscountBase * 0.15;

          calculatedNet = parseInt(this.net) + taxDiscount;
        }

        calculatedNet -= this.getExpiredMarriageDiscount(monthNum);

        this.$set(this.output, monthNum, calculatedNet);

        // console.table(this.output);
      }
    },
    /**
     * @param net Calculated net salary before reapplying expired discount
     * @param whichMonth Zero-indexed month count
     */
    getExpiredMarriageDiscount(whichMonth) {
      if (
        !this.otherTaxDiscounts.on ||
        !this.otherTaxDiscounts.firstMarriage.on ||
        this.otherTaxDiscounts.firstMarriage.until.value > whichMonth
      ) {
        return 0;
      }
      return this.otherTaxDiscounts.firstMarriage.quantity;
    },
    yearsPrior(date, yearCount) {
      const yearsBeforeDate = new Date(date).setYear(
        date.getYear() - yearCount
      );

      return yearsBeforeDate;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/style/common';
@use '~/assets/style/animation';

.divider {
  margin: 1em 0;
}

#taxdisocunt {
  margin-right: 10em;
}
</style>
