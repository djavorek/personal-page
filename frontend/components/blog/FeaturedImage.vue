<template>
  <div :key="`${title}-featimage`" class="feat-wrapper">
    <transition appear name="fade">
      <img
        draggable="false"
        class="featured-image"
        loading="lazy"
        :src="thumbnail"
        :alt="title"
      />
    </transition>
  </div>
</template>
<script>
export default {
  props: ['title', 'thumbnail'],
};
</script>
