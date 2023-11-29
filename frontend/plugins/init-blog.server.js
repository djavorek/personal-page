import { defineNuxtPlugin } from '#app';
import { useBlogStore } from '~/store/BlogStore.js';

export default defineNuxtPlugin(async (nuxtApp) => {
  const blog = useBlogStore(nuxtApp.$pinia);
  await blog.init();
});
