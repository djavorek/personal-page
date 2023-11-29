import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
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
  props: {
    isDark: Boolean
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ma-12" }, _attrs))} data-v-83ae647a><div class="flex-card-container" data-v-83ae647a>`);
  _push(ssrRenderComponent(_component_v_card, {
    class: "ma-4 pa-4",
    "max-width": "600",
    elevation: "6",
    dark: $props.isDark
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Szem\xE9lyes adatok`);
            } else {
              return [
                createTextVNode("Szem\xE9lyes adatok")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` N\xE9v: Javorek D\xE9nes (Mag\xE1nszem\xE9ly) <br data-v-83ae647a${_scopeId2}> Email c\xEDm: mail@javorekdenes.hu `);
            } else {
              return [
                createTextVNode(" N\xE9v: Javorek D\xE9nes (Mag\xE1nszem\xE9ly) "),
                createVNode("br"),
                createTextVNode(" Email c\xEDm: mail@javorekdenes.hu ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_title, null, {
            default: withCtx(() => [
              createTextVNode("Szem\xE9lyes adatok")
            ]),
            _: 1
          }),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createTextVNode(" N\xE9v: Javorek D\xE9nes (Mag\xE1nszem\xE9ly) "),
              createVNode("br"),
              createTextVNode(" Email c\xEDm: mail@javorekdenes.hu ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_card, {
    class: "ma-4 pa-4",
    "max-width": "600",
    elevation: "6",
    dark: $props.isDark
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`T\xE1rhelyszolg\xE1ltat\xF3 adatai`);
            } else {
              return [
                createTextVNode("T\xE1rhelyszolg\xE1ltat\xF3 adatai")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div data-v-83ae647a${_scopeId2}> N\xE9v: Netlify Inc <br data-v-83ae647a${_scopeId2}> Weboldal: <a id="netlify-link" href="https://www.netlify.com" data-v-83ae647a${_scopeId2}>netlify.com</a><br data-v-83ae647a${_scopeId2}> Telefonsz\xE1m: 1-844-899-7312 <br data-v-83ae647a${_scopeId2}> C\xEDm: 610 22nd Street Suite 315 San Francisco, CA 94107 United States <br data-v-83ae647a${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createTextVNode(" N\xE9v: Netlify Inc "),
                  createVNode("br"),
                  createTextVNode(" Weboldal: "),
                  createVNode("a", {
                    id: "netlify-link",
                    href: "https://www.netlify.com"
                  }, "netlify.com"),
                  createVNode("br"),
                  createTextVNode(" Telefonsz\xE1m: 1-844-899-7312 "),
                  createVNode("br"),
                  createTextVNode(" C\xEDm: 610 22nd Street Suite 315 San Francisco, CA 94107 United States "),
                  createVNode("br")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<a class="ma-4" href="https://www.netlify.com" data-v-83ae647a${_scopeId}><img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg" alt="Deploys by Netlify" data-v-83ae647a${_scopeId}></a>`);
      } else {
        return [
          createVNode(_component_v_card_title, null, {
            default: withCtx(() => [
              createTextVNode("T\xE1rhelyszolg\xE1ltat\xF3 adatai")
            ]),
            _: 1
          }),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode("div", null, [
                createTextVNode(" N\xE9v: Netlify Inc "),
                createVNode("br"),
                createTextVNode(" Weboldal: "),
                createVNode("a", {
                  id: "netlify-link",
                  href: "https://www.netlify.com"
                }, "netlify.com"),
                createVNode("br"),
                createTextVNode(" Telefonsz\xE1m: 1-844-899-7312 "),
                createVNode("br"),
                createTextVNode(" C\xEDm: 610 22nd Street Suite 315 San Francisco, CA 94107 United States "),
                createVNode("br")
              ])
            ]),
            _: 1
          }),
          createVNode("a", {
            class: "ma-4",
            href: "https://www.netlify.com"
          }, [
            createVNode("img", {
              src: "https://www.netlify.com/img/global/badges/netlify-color-bg.svg",
              alt: "Deploys by Netlify"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex-card-container" data-v-83ae647a>`);
  _push(ssrRenderComponent(_component_v_card, {
    class: "ma-4 pa-4",
    "max-width": "600",
    elevation: "6",
    shaped: "",
    dark: $props.isDark
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Haszn\xE1l-e az oldal cookiekat?`);
            } else {
              return [
                createTextVNode("Haszn\xE1l-e az oldal cookiekat?")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_subtitle, { class: "font-weight-bold" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Nem.`);
            } else {
              return [
                createTextVNode("Nem.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Egyetlen cookiet sem alkalmaz ez az oldal, erre nincs is sz\xFCks\xE9g. <br data-v-83ae647a${_scopeId2}> Az oldalon <b data-v-83ae647a${_scopeId2}>nem</b> tal\xE1lhat\xF3ak rekl\xE1mok, szem\xE9lyes be\xE1ll\xEDt\xE1sokat <b data-v-83ae647a${_scopeId2}>nem</b> lehet menteni, <b data-v-83ae647a${_scopeId2}>nem</b> k\xF6veti a l\xE1togat\xF3it m\xE1s oldalak b\xF6ng\xE9sz\xE9se k\xF6zben \xE9s a cookiek semmilyen egy\xE9b felhaszn\xE1l\xE1si c\xE9lj\xE1ra sincs sz\xFCks\xE9g. `);
            } else {
              return [
                createTextVNode(" Egyetlen cookiet sem alkalmaz ez az oldal, erre nincs is sz\xFCks\xE9g. "),
                createVNode("br"),
                createTextVNode(" Az oldalon "),
                createVNode("b", null, "nem"),
                createTextVNode(" tal\xE1lhat\xF3ak rekl\xE1mok, szem\xE9lyes be\xE1ll\xEDt\xE1sokat "),
                createVNode("b", null, "nem"),
                createTextVNode(" lehet menteni, "),
                createVNode("b", null, "nem"),
                createTextVNode(" k\xF6veti a l\xE1togat\xF3it m\xE1s oldalak b\xF6ng\xE9sz\xE9se k\xF6zben \xE9s a cookiek semmilyen egy\xE9b felhaszn\xE1l\xE1si c\xE9lj\xE1ra sincs sz\xFCks\xE9g. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_title, null, {
            default: withCtx(() => [
              createTextVNode("Haszn\xE1l-e az oldal cookiekat?")
            ]),
            _: 1
          }),
          createVNode(_component_v_card_subtitle, { class: "font-weight-bold" }, {
            default: withCtx(() => [
              createTextVNode("Nem.")
            ]),
            _: 1
          }),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createTextVNode(" Egyetlen cookiet sem alkalmaz ez az oldal, erre nincs is sz\xFCks\xE9g. "),
              createVNode("br"),
              createTextVNode(" Az oldalon "),
              createVNode("b", null, "nem"),
              createTextVNode(" tal\xE1lhat\xF3ak rekl\xE1mok, szem\xE9lyes be\xE1ll\xEDt\xE1sokat "),
              createVNode("b", null, "nem"),
              createTextVNode(" lehet menteni, "),
              createVNode("b", null, "nem"),
              createTextVNode(" k\xF6veti a l\xE1togat\xF3it m\xE1s oldalak b\xF6ng\xE9sz\xE9se k\xF6zben \xE9s a cookiek semmilyen egy\xE9b felhaszn\xE1l\xE1si c\xE9lj\xE1ra sincs sz\xFCks\xE9g. ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_card, {
    class: "ma-4 pa-4",
    "max-width": "600",
    elevation: "6",
    shaped: "",
    dark: $props.isDark
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Gy\u0171jt-e az oldal b\xE1rmilyen adatot?`);
            } else {
              return [
                createTextVNode("Gy\u0171jt-e az oldal b\xE1rmilyen adatot?")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_subtitle, { class: "font-weight-bold" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Igen.`);
            } else {
              return [
                createTextVNode("Igen.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` A l\xE1togatotts\xE1gi adatok m\xE9r\xE9s\xE9hez elengedhetetlen technikai inform\xE1ci\xF3kat egy <a id="goatcounter-link" href="https://www.goatcounter.com/" data-v-83ae647a${_scopeId2}> GoatCounter </a> nev\u0171, ny\xEDlt forr\xE1sk\xF3d\xFA szolg\xE1ltat\xE1s seg\xEDts\xE9g\xE9vel gy\u0171jti be.<br data-v-83ae647a${_scopeId2}> Az elt\xE1rolt adatok k\xF6z\xF6tt semmilyen szem\xE9lyes adat, vagy szem\xE9ly azonos\xEDt\xE1s\xE1hoz el\xE9gs\xE9ges adat nincs. `);
            } else {
              return [
                createTextVNode(" A l\xE1togatotts\xE1gi adatok m\xE9r\xE9s\xE9hez elengedhetetlen technikai inform\xE1ci\xF3kat egy "),
                createVNode("a", {
                  id: "goatcounter-link",
                  href: "https://www.goatcounter.com/"
                }, " GoatCounter "),
                createTextVNode(" nev\u0171, ny\xEDlt forr\xE1sk\xF3d\xFA szolg\xE1ltat\xE1s seg\xEDts\xE9g\xE9vel gy\u0171jti be."),
                createVNode("br"),
                createTextVNode(" Az elt\xE1rolt adatok k\xF6z\xF6tt semmilyen szem\xE9lyes adat, vagy szem\xE9ly azonos\xEDt\xE1s\xE1hoz el\xE9gs\xE9ges adat nincs. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<a class="ma-4" href="https://www.goatcounter.com/" data-v-83ae647a${_scopeId}><img src="https://www.vectorlogo.zone/logos/goatcounter/goatcounter-icon.svg" alt="Counts with GoatCounter" height="51" data-v-83ae647a${_scopeId}></a>`);
      } else {
        return [
          createVNode(_component_v_card_title, null, {
            default: withCtx(() => [
              createTextVNode("Gy\u0171jt-e az oldal b\xE1rmilyen adatot?")
            ]),
            _: 1
          }),
          createVNode(_component_v_card_subtitle, { class: "font-weight-bold" }, {
            default: withCtx(() => [
              createTextVNode("Igen.")
            ]),
            _: 1
          }),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createTextVNode(" A l\xE1togatotts\xE1gi adatok m\xE9r\xE9s\xE9hez elengedhetetlen technikai inform\xE1ci\xF3kat egy "),
              createVNode("a", {
                id: "goatcounter-link",
                href: "https://www.goatcounter.com/"
              }, " GoatCounter "),
              createTextVNode(" nev\u0171, ny\xEDlt forr\xE1sk\xF3d\xFA szolg\xE1ltat\xE1s seg\xEDts\xE9g\xE9vel gy\u0171jti be."),
              createVNode("br"),
              createTextVNode(" Az elt\xE1rolt adatok k\xF6z\xF6tt semmilyen szem\xE9lyes adat, vagy szem\xE9ly azonos\xEDt\xE1s\xE1hoz el\xE9gs\xE9ges adat nincs. ")
            ]),
            _: 1
          }),
          createVNode("a", {
            class: "ma-4",
            href: "https://www.goatcounter.com/"
          }, [
            createVNode("img", {
              src: "https://www.vectorlogo.zone/logos/goatcounter/goatcounter-icon.svg",
              alt: "Counts with GoatCounter",
              height: "51"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tools/impressum/ImpressumContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-83ae647a"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_impressum_content = __nuxt_component_0;
  _push(ssrRenderComponent(_component_impressum_content, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/impressum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const impressum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { impressum as default };
//# sourceMappingURL=impressum-3c38718c.mjs.map
