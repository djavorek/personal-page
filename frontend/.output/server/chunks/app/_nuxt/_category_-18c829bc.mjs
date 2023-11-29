import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'module';
import 'util';
import 'async-cache';
import 'lodash.unionby';
import 'etag';
import 'fresh';
import 'os';
import 'url';
import 'is-https';
import 'sitemap';
import 'consola/core';
import 'minimatch';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-disqus';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';

const _sfc_main = {
  transition(to, from) {
    if (!from)
      return "slide-right";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  async asyncData({ $content, params, store, error }) {
    const category = await $content("category", params.category).fetch().catch(() => {
      error({ statusCode: 404, message: "Page not found" });
    });
    const posts = await $content("blog").sortBy("createdAt", "desc").where({ category: category.title }).fetch();
    return {
      category,
      posts
    };
  },
  head() {
    return {
      title: this.category.title + " | " + this.$store.state.info.sitename
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", this.category);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_bael_grid = resolveComponent("bael-grid");
  _push(ssrRenderComponent(_component_bael_grid, mergeProps({ posts: _ctx.posts }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/categories/[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _category_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _category_ as default };
//# sourceMappingURL=_category_-18c829bc.mjs.map
