<template>
  <h2
    class="subheading text-uppercase font-weight-medium mb-3"
    v-bind="$attrs"
  >
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'BaseSubheading'
}
</script>
