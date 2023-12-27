<template>
  <v-btn
    :style="styles"
    color="primary"
    fab
    small
    v-bind="$attrs"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    square: Boolean,
  },

  computed: {
    styles() {
      return {
        borderRadius: this.square ? '2px' : undefined,
      };
    },
  },
};
</script>
