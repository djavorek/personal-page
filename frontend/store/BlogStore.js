import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blogStore', async () => {
  let info = ref()
  let current = ref()
  let categories = ref([])
  let articles = ref([])

  articles = await queryContent('posts')
      .where({ draft: false })
      .find()
      .catch((e) => {
        error = 'Article fetching error: ' + e.message + e;
      });

  async function fetchInfo() {
    try {
      categories = await queryContent('/category').fetch();
    } catch (e) {
      error = 'Initial Setup Error: ' + e.message + e;
    }
  }

  return {
    info, current, categories, articles, fetchInfo
  }
});
