<template>
  <v-col cols="12" :md="size === 2 ? 6 : size === 3 ? 4 : undefined">
    <base-card
      :height="value.prominent ? 450 : 350"
      color="grey lighten-1"
      dark
    >
      <nuxt-link :to="'/blog' + value.path">
        <v-img
          :src="require(`@/static/uploads/images/${value.thumbnail}`)"
          height="100%"
          gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
        >
          <v-row v-if="!value.prominent" class="fill-height text-right ma-0">
            <v-col cols="12">
              <v-chip
                label
                color="grey darken-3"
                text-color="white"
                small
                @click.stop=""
              >
                {{ value.category }}
              </v-chip>

              <h3 class="title font-weight-bold mb-2">
                {{ value.title }}
              </h3>

              <div class="caption">
                {{ value.date | moment('dddd, MMMM Do YYYY') }}
              </div>
            </v-col>

            <v-col align-self="end">
              <v-chip
                class="text-uppercase ma-0"
                color="white"
                text-color="black"
                label
                small
                @click.stop=""
              >
                Megnyitás
              </v-chip>
            </v-col>
          </v-row>
        </v-img>
      </nuxt-link>
    </base-card>
  </v-col>
</template>

<script>
export default {
  name: 'FeedCard',

  props: {
    size: {
      type: Number,
      required: true,
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
.v-image__image {
  transition: 0.3s linear;
}
</style>
