<template>
  <div>
    <v-simple-table>
      <thead>
        <tr>
          <th
            v-for="(month, i) in months"
            :key="i"
          >
            {{ month }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            v-for="(net, i) in data"
            :key="i"
          >
            {{ net | toCurrency }}
          </td>
        </tr>
      </tbody>
    </v-simple-table>
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
