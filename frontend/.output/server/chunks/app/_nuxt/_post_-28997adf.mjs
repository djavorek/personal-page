import { defineComponent, createElementBlock, resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const __nuxt_component_0 = defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const _sfc_main = {
  transition(to, from) {
    if (!from) {
      return "slide-left";
    } else {
      return "slide-right";
    }
  },
  async asyncData({ $content, params, error }) {
    const post = await $content("/posts", params.post).fetch().catch(() => {
      error({ statusCode: 404, message: "Page not found" });
    });
    return {
      post
    };
  },
  head() {
    return {
      title: this.post.title + " - Javorek D\xE9nes",
      meta: [
        {
          hid: this.post.title,
          name: "description",
          content: this.post.brief
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_img = resolveComponent("v-img");
  const _component_v_chip = resolveComponent("v-chip");
  const _component_nuxt_content = resolveComponent("nuxt-content");
  const _component_DisqusComments = __nuxt_component_0;
  const _component_GoatCounter = resolveComponent("GoatCounter");
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-3eeccd3e><div class="full-height single" style="${ssrRenderStyle(`min-height:calc(85vh - var(--nav-height));margin-top:var(--nav-height)`)}" data-v-3eeccd3e><div data-v-3eeccd3e><div class="item" data-v-3eeccd3e>`);
  _push(ssrRenderComponent(_component_v_img, {
    src: require(`@/static/uploads/images/${_ctx.post.thumbnail}`),
    height: "100%"
  }, null, _parent));
  _push(`<h1 class="main-title" data-v-3eeccd3e>${ssrInterpolate(_ctx.post.title)}</h1><div class="post-info" data-v-3eeccd3e>`);
  if (_ctx.post.category) {
    _push(ssrRenderComponent(_component_v_chip, {
      color: "grey darken-3",
      "text-color": "white",
      label: "",
      to: `/blog/category/${_ctx.post.category.toLowerCase()}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.post.category)}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.post.category), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<span data-v-3eeccd3e>${ssrInterpolate(_ctx.post.date | _ctx.moment("dddd, MMMM Do YYYY"))}</span></div><div class="post-content" data-v-3eeccd3e>`);
  _push(ssrRenderComponent(_component_nuxt_content, { document: _ctx.post }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_DisqusComments, {
    class: "comments",
    identifier: _ctx.$route.params.singlePost
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_GoatCounter, null, null, _parent));
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/posts/[post].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _post_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3eeccd3e"]]);

export { _post_ as default };
//# sourceMappingURL=_post_-28997adf.mjs.map
