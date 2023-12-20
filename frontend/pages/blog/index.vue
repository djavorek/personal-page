<template>
  <div id="blog">
    <articles />
    <GoatCounter />
  </div>
</template>

<script>
import { definePageMeta } from 'nuxt/';

definePageMeta({
  name: 'Index',
  layout: 'blog',
});
</script>
