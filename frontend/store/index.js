export const state = () => {
  return {
    info: {},
    current: {},
    categories: [],
    articles: [],
  };
};

export const actions = {
  async fetchInfo({ commit }, $content) {
    try {
      const categories = await $content('/category').fetch();
      commit('SET_CATEGORIES', categories);
    } catch (e) {
      const error = 'Initial Setup Error: ' + e.message + e;
      commit('SET_ERROR', error);
    }
  },

  async nuxtServerInit({ commit }) {
    const blogPosts = await this.$content('posts')
      .where({ draft: false })
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch((e) => {
        const error = 'Article fetching error: ' + e.message + e;
        commit('SET_ERROR', error);
      });

    commit('SET_ARTICLES', blogPosts);
  },
};

export const mutations = {
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
};
