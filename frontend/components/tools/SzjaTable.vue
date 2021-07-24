<template>
  <div id="szja-out-table">
    <table>
      <tr>
        <th v-for="(month, i) in months" :key="i">{{ month }}</th>
      </tr>
      <tr>
        <td v-for="(net, i) in data" :key="i">{{ net | toCurrency }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => {
        return new Array(12).fill(0);
      },
    },
  },
  data() {
    return {
      months: [
        'Január',
        'Február',
        'Március',
        'Április',
        'Május',
        'Június',
        'Július',
        'Augusztus',
        'Szeptember',
        'Október',
        'November',
        'December',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/style/common';
@use '~/assets/style/animation';
</style>
