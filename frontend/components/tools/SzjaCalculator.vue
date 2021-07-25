<template>
  <div id="szja">
    <div id="szja-input">
      <v-alert text type="warning" border="left">
        Az adatok kizárólag tájékoztató jellegűek. Helyeségükért felelőséget nem
        vállalok.
      </v-alert>

      <v-currency-field
        id="net"
        v-model="net"
        label="Jelenlegi nettó"
        suffix="Ft"
        placeholder="Jelenlegi nettó"
        type="number"
        @change="calculate"
      />
      <v-currency-field
        id="gross"
        v-model="gross"
        label="Jelenlegi bruttó"
        type="number"
        suffix="Ft"
        placeholder="Jelenlegi bruttó"
        @change="calculate"
      />

      <v-checkbox
        id="turnagelimit"
        v-model="turnagelimit"
        :label="targetYear + '-ben leszek 25 éves'"
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
              no-title
              @input="birthSelected"
            />
          </v-menu>
        </v-layout>
      </transition>

      <v-checkbox
        id="taxdisocunt"
        v-model="otherTaxDiscounts.on"
        label="Jelenleg családi adókedvezményt veszek igénybe"
        @change="calculate"
      />
      <transition name="scroll-y-transition">
        <v-layout v-if="otherTaxDiscounts.on" class="ml-4">
          <v-checkbox
            id="taxdisocunt"
            v-model="otherTaxDiscounts.firstMarriage.on"
            :label="'Jelenleg első házasok kedvezményét veszek igénybe és ez' + ${targetYear} + '-ben lejár' "
            @change="calculate"
          />
          <transition name="scroll-y-transition">
            <v-layout v-if="otherTaxDiscounts.firstMarriage.on">
              <v-select
                v-model="otherTaxDiscounts.firstMarriage.until"
                class="ml-2"
                label="eddig"
                :items="otherTaxDiscounts.firstMarriage.options"
                item-text="text"
                item-value="value"
                return-object
                single-line
                @change="calculate"
              ></v-select>
            </v-layout>
          </transition>
        </v-layout>
      </transition>
    </div>

    <v-divider class="divider"></v-divider>

    <div id="szja-output">
      <v-card>
        <v-card-title>Számított nettó ({{ targetYear }}-ben)</v-card-title>
        <v-card-text>
          <SzjaTable v-if="turnagelimit" :data="output" />
          <div v-else>
            {{ output[0] | toCurrency }}
          </div>
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
      targetYear: 2022, // Year of our calculations, only update after checked current tax calculations
      grossUpperLimit: 414400, // Upper limit of the discount, update if needed
      net: 266000, // Feasible net for 400k gross
      gross: 400000,
      turnagelimit: false,
      otherTaxDiscounts: {
        on: false,
        firstMarriage: {
          on: false,
          until: 0,
          options: [
            { text: 'januárban', value: 1 },
            { text: 'februárban', value: 2 },
            { text: 'márciusban', value: 3 },
            { text: 'áprilisig', value: 4 },
            { text: 'májusig', value: 5 },
            { text: 'júniusig', value: 6 },
            { text: 'júliusig', value: 7 },
            { text: 'augusztusig', value: 8 },
            { text: 'szeptemberig', value: 9 },
            { text: 'októberig', value: 10 },
            { text: 'novemberig', value: 11 },
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
      const limitDateForMonth = new Date('2022-01-05');

      for (let monthNum = 0; monthNum < 12; monthNum++) {
        limitDateForMonth.setMonth(monthNum);

        if (this.yearsPrior(limitDateForMonth, 25) < new Date(this.birth)) {
          let taxDiscountBase =
            this.gross < this.grossUpperLimit
              ? this.gross
              : this.grossUpperLimit;

          taxDiscountBase -= this.getFirstMarriageDiscount(
            taxDiscountBase,
            monthNum
          );

          const taxDiscount = taxDiscountBase * 0.15;

          this.$set(this.output, monthNum, parseInt(this.net) + taxDiscount);
        } else {
          this.$set(this.output, monthNum, this.net);
        }
      }
    },
    /**
     * @param taxDiscountBase Tax base before applying this discount
     * @param whichMonth Zero-indexed month count
     */
    getFirstMarriageDiscount(taxDiscountBase, whichMonth) {
      const marriageBaseDiscount = 33335;
      console.log('');

      if (
        !this.otherTaxDiscounts.on ||
        !this.otherTaxDiscounts.firstMarriage.on ||
        this.otherTaxDiscounts.firstMarriage.until - 1 < whichMonth
      ) {
        return 0;
      }
      if (taxDiscountBase > marriageBaseDiscount) return taxDiscountBase;

      return marriageBaseDiscount;
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

#szja {
  max-width: 50%;
  margin: 5em;
}

#taxdisocunt {
  margin-right: 10em;
}
</style>
