export const state = () => ({
  posts: [],
});

export const mutations = {
  setPosts: (state, list) => (state.posts = list),
};

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const posts = await $content('/posts').fetch();

    await commit('setPosts', posts);
  },
};
