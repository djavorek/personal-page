import { useSSRContext, resolveComponent, withCtx, createVNode, renderSlot, createTextVNode, withDirectives, vShow } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  computed: {
    pagetitle() {
      return this.$store.state.current.title;
    },
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    data: () => ({
      drawer: false
    })
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app_bar = resolveComponent("v-app-bar");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_v_app_bar, {
    block: "",
    tile: "",
    color: "#616161",
    dark: "",
    flat: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "display": "contents" })}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_btn, {
          style: !$options.isMobile ? null : { display: "none" },
          class: "ma-1",
          "x-large": "",
          icon: "",
          to: "/",
          nuxt: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_icon, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`mdi-home`);
                  } else {
                    return [
                      createTextVNode("mdi-home")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_icon, null, {
                  default: withCtx(() => [
                    createTextVNode("mdi-home")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_spacer, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, {
          class: "ma-2",
          color: "white",
          light: "",
          to: "/blog/",
          exact: "",
          nuxt: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Blog posztok `);
            } else {
              return [
                createTextVNode(" Blog posztok ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, {
          class: "ma-2",
          color: "white",
          light: "",
          to: "/blog/impressum/",
          nuxt: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Impresszum `);
            } else {
              return [
                createTextVNode(" Impresszum ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { style: { "display": "contents" } }, [
            withDirectives(createVNode(_component_v_btn, {
              class: "ma-1",
              "x-large": "",
              icon: "",
              to: "/",
              nuxt: ""
            }, {
              default: withCtx(() => [
                createVNode(_component_v_icon, null, {
                  default: withCtx(() => [
                    createTextVNode("mdi-home")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 512), [
              [vShow, !$options.isMobile]
            ]),
            createVNode(_component_v_spacer),
            createVNode(_component_v_btn, {
              class: "ma-2",
              color: "white",
              light: "",
              to: "/blog/",
              exact: "",
              nuxt: ""
            }, {
              default: withCtx(() => [
                createTextVNode(" Blog posztok ")
              ]),
              _: 1
            }),
            createVNode(_component_v_btn, {
              class: "ma-2",
              color: "white",
              light: "",
              to: "/blog/impressum/",
              nuxt: ""
            }, {
              default: withCtx(() => [
                createTextVNode(" Impresszum ")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/BlogHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_blog_header = __nuxt_component_0;
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section class="blog container" data-v-e95c84c5${_scopeId}>`);
        _push2(ssrRenderComponent(_component_blog_header, null, null, _parent2, _scopeId));
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</section>`);
      } else {
        return [
          createVNode("section", { class: "blog container" }, [
            createVNode(_component_blog_header),
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e95c84c5"]]);

export { blog as default };
//# sourceMappingURL=blog-c9796d76.mjs.map
