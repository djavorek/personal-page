<template>
  <main>
    <div
      class="full-height single"
      :style="`min-height:calc(85vh - var(--nav-height));margin-top:var(--nav-height)`"
    >
      <div>
        <div class="item">
          <v-img
            :src="require(`@/static/uploads/images/${post.thumbnail}`)"
            height="100%"
          />

          <h1 class="main-title">
            {{ post.title }}
          </h1>
          <div class="post-info">
            <v-chip
              v-if="post.category"
              color="grey darken-3"
              text-color="white"
              label
              :to="`/blog/category/${post.category.toLowerCase()}`"
            >
              {{ post.category }}
            </v-chip>
            <span>
              {{ post.date }}
            </span>
          </div>
          <div class="post-content">
            <nuxt-content :document="post" />
          </div>
          <DisqusComments
            class="comments"
            :identifier="$route.params.singlePost"
          />
        </div>
      </div>
      <GoatCounter />
    </div>
  </main>
</template>

<script>
definePageMeta({
  layout: 'blog',
});

export default {
  transition(_, from) {
    if (!from) {
      return 'slide-left';
    } else {
      return 'slide-right';
    }
  },
  async asyncData({ $content, params, error }) {
    const post = await $content('/posts', params.post)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' });
      });
    return {
      post,
    };
  },
  head() {
    return {
      title: this.post.title + ' - Javorek Dénes',
      meta: [
        {
          hid: this.post.title,
          name: 'description',
          content: this.post.brief,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@use '~/assets/style/common';

.post-info,
.comments {
  padding: 2em 0;
}
</style>
