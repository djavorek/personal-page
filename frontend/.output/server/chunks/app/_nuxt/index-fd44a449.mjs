import { resolveComponent, withCtx, createVNode, useSSRContext, mergeProps, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$4 } from './nuxt-link-691e5b50.mjs';
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

const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "titleBox" }, _attrs))} data-v-78516c08><div id="hello" data-v-78516c08><span data-v-78516c08>HELLO</span><span class="greenText" data-v-78516c08>.</span></div><div id="name" data-v-78516c08><span class="greenText" data-v-78516c08>D\xE9nes</span><span data-v-78516c08> vagyok</span></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/header/TitleBox.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-78516c08"]]);
const _sfc_main$5 = {
  data() {
    return {
      options: {
        duration: 250,
        offset: 0,
        easing: "easeOutCubic"
      }
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TitleBox = __nuxt_component_0$3;
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "header" }, _attrs))} data-v-0e0a6292><div data-v-0e0a6292>`);
  _push(ssrRenderComponent(_component_TitleBox, null, null, _parent));
  _push(`</div><div data-v-0e0a6292>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    id: "downButton",
    icon: "angle-double-down",
    size: "4x",
    onClick: ($event) => _ctx.$vuetify.goTo("#menu", $data.options)
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/header/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-0e0a6292"]]);
const _sfc_main$4 = {
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: -1,
          text: "Menu is out of service"
        };
      }
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menuHolder" }, _attrs))} data-v-6a5c692e>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: ["menuItem notouchy", { selected: $props.selected }],
    to: $props.item.link.length ? { path: $props.item.link } : { path: "/", hash: "#main" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-6a5c692e${_scopeId}>${ssrInterpolate($props.item.text)}</span>`);
      } else {
        return [
          createVNode("span", {
            onClick: ($event) => _ctx.$emit("select", $props.item.id)
          }, toDisplayString($props.item.text), 9, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/content/menu/MenuItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-6a5c692e"]]);
const menuList = [
  {
    id: 0,
    text: "R\xD3LAM",
    purpose: "About",
    link: ""
  },
  {
    id: 1,
    text: "EL\xC9RHET\u0150S\xC9GEIM",
    purpose: "Contact",
    link: ""
  },
  {
    id: 2,
    text: "IMPRESSZUM",
    purpose: "Impressum",
    link: ""
  },
  {
    id: 3,
    text: "BLOG",
    purpose: "Blog",
    link: "/blog"
  }
];
const _sfc_main$3 = {
  data() {
    return {
      menuList,
      selected: 0
    };
  },
  watch: {
    selected(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit("changed", newValue);
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MenuItem = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "menu",
    class: "glassmorphism"
  }, _attrs))} data-v-ac6d91cf><!--[-->`);
  ssrRenderList($data.menuList, (item) => {
    _push(ssrRenderComponent(_component_MenuItem, {
      key: item.id,
      item,
      selected: $data.selected == item.id,
      onSelect: ($event) => $data.selected = $event
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/content/menu/Menu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-ac6d91cf"]]);
const _sfc_main$2 = {
  props: {
    menu: {
      type: Number,
      default: 0
    }
  },
  methods: {
    isSelected(purpose) {
      return menuList[this.menu].purpose === purpose;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_About = resolveComponent("About");
  const _component_Contact = resolveComponent("Contact");
  const _component_Impressum = resolveComponent("Impressum");
  const _component_Blog = resolveComponent("Blog");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "main",
    class: "glassmorphism"
  }, _attrs))} data-v-54d348ba>`);
  if ($options.isSelected("About")) {
    _push(ssrRenderComponent(_component_About, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.isSelected("Contact")) {
    _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.isSelected("Impressum")) {
    _push(ssrRenderComponent(_component_Impressum, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.isSelected("Blog")) {
    _push(ssrRenderComponent(_component_Blog, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/content/ArticleBox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-54d348ba"]]);
const _sfc_main$1 = {
  data() {
    return {
      menu: 0
    };
  },
  methods: {
    selectMenu(selected) {
      this.menu = selected;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Menu = __nuxt_component_0;
  const _component_ArticleBox = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "content" }, _attrs))} data-v-9b1df7a9><div id="leftCont" class="dynamic-spacing" data-v-9b1df7a9>`);
  _push(ssrRenderComponent(_component_Menu, { onChanged: $options.selectMenu }, null, _parent));
  _push(`</div><main id="rightCont" class="dynamic-spacing" data-v-9b1df7a9>`);
  _push(ssrRenderComponent(_component_ArticleBox, { menu: $data.menu }, null, _parent));
  _push(`</main></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/content/Content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9b1df7a9"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const bgImg = "url(" + require("@/assets/img/bg.webp") + ")";
    const bgImgFallBack = "url(" + require("@/assets/img/bg.jpg") + ")";
    function isWebpFormatSupported() {
      const elem = document.createElement("canvas");
      if (elem.getContext && elem.getContext("2d")) {
        return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
      } else {
        return false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_Header = __nuxt_component_0$2;
      const _component_Content = __nuxt_component_1;
      const _component_GoatCounter = resolveComponent("GoatCounter");
      _push(ssrRenderComponent(_component_v_app, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="portfolio" style="${ssrRenderStyle({
              backgroundImage: isWebpFormatSupported ? bgImg : bgImgFallBack
            })}"${_scopeId}><div class="notouchy"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Header, null, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Content, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_GoatCounter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", {
                id: "portfolio",
                style: {
                  backgroundImage: isWebpFormatSupported ? bgImg : bgImgFallBack
                }
              }, [
                createVNode("div", { class: "notouchy" }, [
                  createVNode(_component_Header)
                ]),
                createVNode("div", null, [
                  createVNode(_component_Content)
                ])
              ], 4),
              createVNode(_component_GoatCounter)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-fd44a449.mjs.map
