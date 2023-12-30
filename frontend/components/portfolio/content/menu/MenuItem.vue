<template>
  <div class="menuHolder">
    <div
      v-if="item.link.length"
      class="menuItem notouchy"
      :class="{ selected: selected }"
    >
      <nuxt-link
        :to="item.link.length ? { path: item.link } : { path: '/', hash: '#main' }"
      >
        <span @click="$emit('select', item.id)">
          {{ item.text }}
        </span>
      </nuxt-link>
    </div>
    <div
      v-else
      class="menuItem notouchy"
      :class="{ selected: selected }"
    >
      <span @click="$emit('select', item.id)">
        {{ item.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {
          id: -1,
          text: 'This menu is out of service'
        }
      }
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: ['select']
}
</script>

<style lang="scss" scoped>
@use '~/assets/style/common';

.menuHolder {
  margin: 1.5em 0.5em 1.5em 0;
  display: flex;
  align-items: center;
}

.menuItem {
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  text-decoration: none;
  background: linear-gradient(common.$primary, common.$info) bottom / 0 0 no-repeat;
  background-position: right bottom;
  transition: 0.6s background-size;
}

.selected {
  background-size: 100% 0.1em;
}

.indicator {
  width: 10%;
  height: 0.3vh;
  background-color: common.$primary;
}

.menuItem:hover {
  color: common.$info;
}
</style>
