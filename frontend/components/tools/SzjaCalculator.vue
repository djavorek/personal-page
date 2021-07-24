<template>
  <div id="szja" data-app>
    <div id="szja-input">
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
        label="2022-ben leszek 25 éves"
      />

      <v-layout v-if="turnagelimit">
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
    </div>
    <div id="szja-output"><SzjaTable :data="output" /></div>
  </div>
</template>

<script>
import SzjaTable from './SzjaTable.vue';
export default {
  components: { SzjaTable },
  data() {
    return {
      net: 266000, // Feasible net for 400k gross
      gross: 400000,
      turnagelimit: false,
      birthSelectorMenu: false,
      birth: '2000-01-01',
      grossUpperLimit: 414400,
      output: new Array(12).fill(0),
    };
  },
  created() {
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
          const taxDiscountBase =
            this.gross < this.grossUpperLimit
              ? this.gross
              : this.grossUpperLimit;

          const taxDiscount = taxDiscountBase * 0.15;

          this.$set(this.output, monthNum, parseInt(this.net) + taxDiscount);
        } else {
          this.$set(this.output, monthNum, this.net);
        }
      }
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

input {
  box-sizing: border-box;

  font-size: 0.75rem;
  padding: 0px 2em 0px 2em;
  width: 100%;

  min-height: 6em;

  background: transparent;
  outline: none;

  border: 0px;
  border-bottom: solid 1px common.$text;
}

#szja-input {
  max-width: 50%;
  margin: 5em;
}

#szja-output {
  margin: 2em;
}
</style>
