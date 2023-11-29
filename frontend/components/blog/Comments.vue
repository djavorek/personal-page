<template>
  <section class="comments" aria-labelledby="comment">
    <v-card class="pa-6">
      <v-card-title>Hozzászólások</v-card-title>
      <v-card-text>
        <ClientOnly><DisqusComments /> </ClientOnly>
      </v-card-text>
    </v-card>
  </section>
</template>
<script>
export default {
  name: 'Comments',
  data() {
    return {
      displayed: true,
    };
  },
};
</script>
