import { useSSRContext, resolveComponent, mergeProps, withCtx, renderSlot, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, toDisplayString, withModifiers, toHandlers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { m as mapState, _ as _export_sfc } from '../server.mjs';
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

const _sfc_main$5 = {
  name: "BaseCard"
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    flat: "",
    tile: ""
  }, _ctx.$attrs, toHandlers(_ctx.$listeners), _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/base/BaseCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "FeedCard",
  props: {
    size: {
      type: Number,
      required: true
    },
    value: {
      type: Object,
      default: () => ({})
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_col = resolveComponent("v-col");
  const _component_base_card = __nuxt_component_0$3;
  const _component_nuxt_link = __nuxt_component_0$4;
  const _component_v_img = resolveComponent("v-img");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_chip = resolveComponent("v-chip");
  _push(ssrRenderComponent(_component_v_col, mergeProps({
    cols: "12",
    md: $props.size === 2 ? 6 : $props.size === 3 ? 4 : void 0
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_base_card, {
          height: $props.value.prominent ? 450 : 350,
          color: "grey lighten-1",
          dark: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: "/blog" + $props.value.path
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_img, {
                      src: require(`@/static/uploads/images/${$props.value.thumbnail}`),
                      height: "100%",
                      gradient: "rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          if (!$props.value.prominent) {
                            _push5(ssrRenderComponent(_component_v_row, { class: "fill-height text-right ma-0" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_v_chip, {
                                          label: "",
                                          color: "grey darken-3",
                                          "text-color": "white",
                                          small: "",
                                          onClick: () => {
                                          }
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`${ssrInterpolate($props.value.category)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString($props.value.category), 1)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent7, _scopeId6));
                                        _push7(`<h3 class="title font-weight-bold mb-2"${_scopeId6}>${ssrInterpolate($props.value.title)}</h3><div class="caption"${_scopeId6}>${ssrInterpolate($props.value.date | _ctx.moment("dddd, MMMM Do YYYY"))}</div>`);
                                      } else {
                                        return [
                                          createVNode(_component_v_chip, {
                                            label: "",
                                            color: "grey darken-3",
                                            "text-color": "white",
                                            small: "",
                                            onClick: withModifiers(() => {
                                            }, ["stop"])
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString($props.value.category), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode("h3", { class: "title font-weight-bold mb-2" }, toDisplayString($props.value.title), 1),
                                          createVNode("div", { class: "caption" }, toDisplayString($props.value.date | _ctx.moment("dddd, MMMM Do YYYY")), 1)
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                  _push6(ssrRenderComponent(_component_v_col, { "align-self": "end" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_v_chip, {
                                          class: "text-uppercase ma-0",
                                          color: "white",
                                          "text-color": "black",
                                          label: "",
                                          small: "",
                                          onClick: () => {
                                          }
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(` Megnyit\xE1s `);
                                            } else {
                                              return [
                                                createTextVNode(" Megnyit\xE1s ")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_v_chip, {
                                            class: "text-uppercase ma-0",
                                            color: "white",
                                            "text-color": "black",
                                            label: "",
                                            small: "",
                                            onClick: withModifiers(() => {
                                            }, ["stop"])
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Megnyit\xE1s ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_chip, {
                                          label: "",
                                          color: "grey darken-3",
                                          "text-color": "white",
                                          small: "",
                                          onClick: withModifiers(() => {
                                          }, ["stop"])
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString($props.value.category), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode("h3", { class: "title font-weight-bold mb-2" }, toDisplayString($props.value.title), 1),
                                        createVNode("div", { class: "caption" }, toDisplayString($props.value.date | _ctx.moment("dddd, MMMM Do YYYY")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { "align-self": "end" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_chip, {
                                          class: "text-uppercase ma-0",
                                          color: "white",
                                          "text-color": "black",
                                          label: "",
                                          small: "",
                                          onClick: withModifiers(() => {
                                          }, ["stop"])
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Megnyit\xE1s ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                        } else {
                          return [
                            !$props.value.prominent ? (openBlock(), createBlock(_component_v_row, {
                              key: 0,
                              class: "fill-height text-right ma-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_chip, {
                                      label: "",
                                      color: "grey darken-3",
                                      "text-color": "white",
                                      small: "",
                                      onClick: withModifiers(() => {
                                      }, ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString($props.value.category), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode("h3", { class: "title font-weight-bold mb-2" }, toDisplayString($props.value.title), 1),
                                    createVNode("div", { class: "caption" }, toDisplayString($props.value.date | _ctx.moment("dddd, MMMM Do YYYY")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { "align-self": "end" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_chip, {
                                      class: "text-uppercase ma-0",
                                      color: "white",
                                      "text-color": "black",
                                      label: "",
                                      small: "",
                                      onClick: withModifiers(() => {
                                      }, ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Megnyit\xE1s ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_img, {
                        src: require(`@/static/uploads/images/${$props.value.thumbnail}`),
                        height: "100%",
                        gradient: "rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
                      }, {
                        default: withCtx(() => [
                          !$props.value.prominent ? (openBlock(), createBlock(_component_v_row, {
                            key: 0,
                            class: "fill-height text-right ma-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_chip, {
                                    label: "",
                                    color: "grey darken-3",
                                    "text-color": "white",
                                    small: "",
                                    onClick: withModifiers(() => {
                                    }, ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($props.value.category), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode("h3", { class: "title font-weight-bold mb-2" }, toDisplayString($props.value.title), 1),
                                  createVNode("div", { class: "caption" }, toDisplayString($props.value.date | _ctx.moment("dddd, MMMM Do YYYY")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { "align-self": "end" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_chip, {
                                    class: "text-uppercase ma-0",
                                    color: "white",
                                    "text-color": "black",
                                    label: "",
                                    small: "",
                                    onClick: withModifiers(() => {
                                    }, ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Megnyit\xE1s ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_nuxt_link, {
                  to: "/blog" + $props.value.path
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_img, {
                      src: require(`@/static/uploads/images/${$props.value.thumbnail}`),
                      height: "100%",
                      gradient: "rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
                    }, {
                      default: withCtx(() => [
                        !$props.value.prominent ? (openBlock(), createBlock(_component_v_row, {
                          key: 0,
                          class: "fill-height text-right ma-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_chip, {
                                  label: "",
                                  color: "grey darken-3",
                                  "text-color": "white",
                                  small: "",
                                  onClick: withModifiers(() => {
                                  }, ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($props.value.category), 1)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode("h3", { class: "title font-weight-bold mb-2" }, toDisplayString($props.value.title), 1),
                                createVNode("div", { class: "caption" }, toDisplayString($props.value.date | _ctx.moment("dddd, MMMM Do YYYY")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { "align-self": "end" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_chip, {
                                  class: "text-uppercase ma-0",
                                  color: "white",
                                  "text-color": "black",
                                  label: "",
                                  small: "",
                                  onClick: withModifiers(() => {
                                  }, ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Megnyit\xE1s ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["src"])
                  ]),
                  _: 1
                }, 8, ["to"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_base_card, {
            height: $props.value.prominent ? 450 : 350,
            color: "grey lighten-1",
            dark: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_nuxt_link, {
                to: "/blog" + $props.value.path
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_img, {
                    src: require(`@/static/uploads/images/${$props.value.thumbnail}`),
                    height: "100%",
                    gradient: "rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
                  }, {
                    default: withCtx(() => [
                      !$props.value.prominent ? (openBlock(), createBlock(_component_v_row, {
                        key: 0,
                        class: "fill-height text-right ma-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_chip, {
                                label: "",
                                color: "grey darken-3",
                                "text-color": "white",
                                small: "",
                                onClick: withModifiers(() => {
                                }, ["stop"])
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($props.value.category), 1)
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode("h3", { class: "title font-weight-bold mb-2" }, toDisplayString($props.value.title), 1),
                              createVNode("div", { class: "caption" }, toDisplayString($props.value.date | _ctx.moment("dddd, MMMM Do YYYY")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { "align-self": "end" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_chip, {
                                class: "text-uppercase ma-0",
                                color: "white",
                                "text-color": "black",
                                label: "",
                                small: "",
                                onClick: withModifiers(() => {
                                }, ["stop"])
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Megnyit\xE1s ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["src"])
                ]),
                _: 1
              }, 8, ["to"])
            ]),
            _: 1
          }, 8, ["height"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/FeedCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  name: "BaseBtn",
  props: {
    square: Boolean
  },
  computed: {
    styles() {
      return {
        borderRadius: this.square ? "2px" : void 0
      };
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_btn, mergeProps({
    style: $options.styles,
    color: "primary",
    fab: "",
    small: ""
  }, _ctx.$attrs, toHandlers(_ctx.$listeners), _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/base/Btn.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "Feed",
  data: () => ({
    layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
    page: 1
  }),
  computed: {
    ...mapState(["articles"]),
    pages() {
      return Math.ceil(this.articles.length / 11);
    },
    paginatedArticles() {
      const start = (this.page - 1) * 11;
      const stop = this.page * 11;
      return this.articles.slice(start, stop);
    }
  },
  watch: {
    page() {
      window.scrollTo(0, 0);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_feed_card = __nuxt_component_0$2;
  const _component_base_btn = __nuxt_component_1;
  const _component_v_icon = resolveComponent("v-icon");
  _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "my-6" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`<!--[-->`);
              ssrRenderList($options.paginatedArticles, (article, i) => {
                _push3(ssrRenderComponent(_component_feed_card, {
                  key: article.title,
                  size: _ctx.layout[i],
                  value: article
                }, null, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode(_component_v_col, { cols: "12" }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ]),
                  _: 3
                }),
                (openBlock(true), createBlock(Fragment, null, renderList($options.paginatedArticles, (article, i) => {
                  return openBlock(), createBlock(_component_feed_card, {
                    key: article.title,
                    size: _ctx.layout[i],
                    value: article
                  }, null, 8, ["size", "value"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_row, {
          align: "center",
          class: "bottom-fixed"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    if (_ctx.page !== 1) {
                      _push4(ssrRenderComponent(_component_base_btn, {
                        class: "ml-0",
                        square: "",
                        title: "El\u0151z\u0151 oldal",
                        onClick: ($event) => _ctx.page--
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_v_icon, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`mdi-chevron-left`);
                                } else {
                                  return [
                                    createTextVNode("mdi-chevron-left")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-chevron-left")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      _push4(`<!---->`);
                    }
                  } else {
                    return [
                      _ctx.page !== 1 ? (openBlock(), createBlock(_component_base_btn, {
                        key: 0,
                        class: "ml-0",
                        square: "",
                        title: "El\u0151z\u0151 oldal",
                        onClick: ($event) => _ctx.page--
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-chevron-left")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              if ($options.pages > 1) {
                _push3(ssrRenderComponent(_component_v_col, {
                  align: "center",
                  class: "subheading",
                  cols: "6"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Oldal: ${ssrInterpolate(_ctx.page)} / ${ssrInterpolate($options.pages)}`);
                    } else {
                      return [
                        createTextVNode(" Oldal: " + toDisplayString(_ctx.page) + " / " + toDisplayString($options.pages), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_v_col, {
                class: "text-right",
                cols: "3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    if ($options.pages > 1 && _ctx.page < $options.pages) {
                      _push4(ssrRenderComponent(_component_base_btn, {
                        class: "mr-0",
                        square: "",
                        title: "K\xF6vetkez\u0151 oldal",
                        onClick: ($event) => _ctx.page++
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_v_icon, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`mdi-chevron-right`);
                                } else {
                                  return [
                                    createTextVNode("mdi-chevron-right")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-chevron-right")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      _push4(`<!---->`);
                    }
                  } else {
                    return [
                      $options.pages > 1 && _ctx.page < $options.pages ? (openBlock(), createBlock(_component_base_btn, {
                        key: 0,
                        class: "mr-0",
                        square: "",
                        title: "K\xF6vetkez\u0151 oldal",
                        onClick: ($event) => _ctx.page++
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-chevron-right")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, { cols: "3" }, {
                  default: withCtx(() => [
                    _ctx.page !== 1 ? (openBlock(), createBlock(_component_base_btn, {
                      key: 0,
                      class: "ml-0",
                      square: "",
                      title: "El\u0151z\u0151 oldal",
                      onClick: ($event) => _ctx.page--
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-chevron-left")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                $options.pages > 1 ? (openBlock(), createBlock(_component_v_col, {
                  key: 0,
                  align: "center",
                  class: "subheading",
                  cols: "6"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Oldal: " + toDisplayString(_ctx.page) + " / " + toDisplayString($options.pages), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_v_col, {
                  class: "text-right",
                  cols: "3"
                }, {
                  default: withCtx(() => [
                    $options.pages > 1 && _ctx.page < $options.pages ? (openBlock(), createBlock(_component_base_btn, {
                      key: 0,
                      class: "mr-0",
                      square: "",
                      title: "K\xF6vetkez\u0151 oldal",
                      onClick: ($event) => _ctx.page++
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-chevron-right")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                _: 3
              }),
              (openBlock(true), createBlock(Fragment, null, renderList($options.paginatedArticles, (article, i) => {
                return openBlock(), createBlock(_component_feed_card, {
                  key: article.title,
                  size: _ctx.layout[i],
                  value: article
                }, null, 8, ["size", "value"]);
              }), 128))
            ]),
            _: 3
          }),
          createVNode(_component_v_row, {
            align: "center",
            class: "bottom-fixed"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_col, { cols: "3" }, {
                default: withCtx(() => [
                  _ctx.page !== 1 ? (openBlock(), createBlock(_component_base_btn, {
                    key: 0,
                    class: "ml-0",
                    square: "",
                    title: "El\u0151z\u0151 oldal",
                    onClick: ($event) => _ctx.page--
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-chevron-left")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              $options.pages > 1 ? (openBlock(), createBlock(_component_v_col, {
                key: 0,
                align: "center",
                class: "subheading",
                cols: "6"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Oldal: " + toDisplayString(_ctx.page) + " / " + toDisplayString($options.pages), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_v_col, {
                class: "text-right",
                cols: "3"
              }, {
                default: withCtx(() => [
                  $options.pages > 1 && _ctx.page < $options.pages ? (openBlock(), createBlock(_component_base_btn, {
                    key: 0,
                    class: "mr-0",
                    square: "",
                    title: "K\xF6vetkez\u0151 oldal",
                    onClick: ($event) => _ctx.page++
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-chevron-right")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/Feed.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-e29adabb"]]);
const _sfc_main$1 = {
  name: "HomeAbout"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_feed = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "feed" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_feed, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/Articles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_articles = __nuxt_component_0;
  const _component_GoatCounter = resolveComponent("GoatCounter");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "blog" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_articles, null, null, _parent));
  _push(ssrRenderComponent(_component_GoatCounter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-331ee109.mjs.map
