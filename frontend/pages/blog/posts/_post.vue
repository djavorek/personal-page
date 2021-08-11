<template>
  <main>
    <div
      class="full-height single"
      :style="`min-height:calc(85vh - var(--nav-height));margin-top:var(--nav-height)`"
    >
      <div class="xs-mt2 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <v-img
            :src="require(`@/static/uploads/images/${post.thumbnail}`)"
            height="100%"
          >
          </v-img>

          <h1 class="xs-py3 main-title">{{ post.title }}</h1>
          <div class="xs-mt-5 bold">
            <ul class="list-unstyled xs-flex xs-flex-align-center">
              <li v-if="post.category" class="xs-inline-block xs-mr1">
                <div class="tag fill-gray-darker xs-border">
                  <nuxt-link
                    :to="`/blog/category/${post.category.toLowerCase()}`"
                    class="tag__link text-white"
                    >{{ post.category }}</nuxt-link
                  >
                </div>
              </li>
              <li class="xs-inline-block">
                {{ post.date | moment('dddd, MMMM Do YYYY') }}
              </li>
            </ul>
          </div>
          <div class="xs-py3 post-content text-gray-lighter">
            <nuxt-content :document="post" />
          </div>
          <v-divider></v-divider>
          <disqus-comments class :identifier="$route.params.singlePost" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'blog',
  transition(to, from) {
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
