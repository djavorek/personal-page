<template>
  <div class="comments-wrapper section">
    <intersection-observer @view="displayed = true" />
    <vue-disqus shortname="blog-jd" :identifier="identifier" />

    <!-- Warning to Provide Disqus Site Short Name -->
  </div>
</template>
<script>
export default {
  name: 'DisqusComments',
  props: {
    identifier: { type: String, required: true },
  },
  data() {
    return {
      displayed: false,
    };
  },
};
</script>
