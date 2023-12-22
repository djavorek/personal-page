import { useAsyncData } from 'nuxt/app';
import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blogStore', {
  state: () => ({
    info: {},
    current: {},
    categories: [],
    articles: [],
  }),

  actions: {
    async init() {
      const blogPosts = await useAsyncData('posts', () =>
        queryContent('./')
          .where({ draft: false })
          .sortBy('createdAt', 'desc')
          .fetch()
          .catch((e) => {
            const error = 'Article fetching error: ' + e.message + e;
            this.SET_ERROR(error);
          })
      );

      console.log(blogPosts)

      this.SET_ARTICLES(blogPosts);
    },

    async fetchInfo($content) {
      try {
        const categories = await $content('/category').fetch();
        this.SET_CATEGORIES(categories);
      } catch (e) {
        const error = 'Initial Setup Error: ' + e.message + e;
        this.SET_ERROR(error);
      }
    },

    SET_ERROR(state, error) {
      state.info = error;
    },
    SET_CURRENT(state, data) {
      state.current = data;
    },
    SET_CATEGORIES(state, data) {
      state.categories = data;
    },
    SET_ARTICLES(state, data) {
      state.articles = data;
    },
  },
});
