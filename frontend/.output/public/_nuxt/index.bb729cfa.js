import{_ as f,o as c,c as l,p as C,e as b,a as o,r,b as i,w as g,t as I,D as k,F as B,l as S,f as m,j as v,T as M,v as w,C as L}from"./entry.5fc4331a.js";import{_ as T}from"./nuxt-link.856b1b72.js";const A={},h=e=>(C("data-v-78516c08"),e=e(),b(),e),E={id:"titleBox"},H=h(()=>o("div",{id:"hello"},[o("span",null,"HELLO"),o("span",{class:"greenText"},".")],-1)),O=h(()=>o("div",{id:"name"},[o("span",{class:"greenText"},"Dénes"),o("span",null," vagyok")],-1)),j=[H,O];function D(e,n,a,u,s,t){return c(),l("div",E,j)}const F=f(A,[["render",D],["__scopeId","data-v-78516c08"]]);const G={data(){return{options:{duration:250,offset:0,easing:"easeOutCubic"}}}},N={id:"header"};function R(e,n,a,u,s,t){const _=F,d=r("font-awesome-icon");return c(),l("div",N,[o("div",null,[i(_)]),o("div",null,[i(d,{id:"downButton",icon:"angle-double-down",size:"4x",onClick:n[0]||(n[0]=p=>e.$vuetify.goTo("#menu",s.options))})])])}const z=f(G,[["render",R],["__scopeId","data-v-0e0a6292"]]);const q={props:{item:{type:Object,default(){return{id:-1,text:"Menu is out of service"}}},selected:{type:Boolean,default:!1}}},U={class:"menuHolder"};function V(e,n,a,u,s,t){const _=T;return c(),l("div",U,[i(_,{class:k(["menuItem notouchy",{selected:a.selected}]),to:a.item.link.length?{path:a.item.link}:{path:"/",hash:"#main"}},{default:g(()=>[o("span",{onClick:n[0]||(n[0]=d=>e.$emit("select",a.item.id))},I(a.item.text),1)]),_:1},8,["class","to"])])}const P=f(q,[["render",V],["__scopeId","data-v-6a5c692e"]]),$=[{id:0,text:"RÓLAM",purpose:"About",link:""},{id:1,text:"ELÉRHETŐSÉGEIM",purpose:"Contact",link:""},{id:2,text:"IMPRESSZUM",purpose:"Impressum",link:""},{id:3,text:"BLOG",purpose:"Blog",link:"/blog"}];const W={data(){return{menuList:$,selected:0}},watch:{selected(e,n){e!==n&&this.$emit("changed",e)}}},Z={id:"menu",class:"glassmorphism"};function J(e,n,a,u,s,t){const _=P;return c(),l("div",Z,[(c(!0),l(B,null,S(s.menuList,d=>(c(),m(_,{key:d.id,item:d,selected:s.selected==d.id,onSelect:n[0]||(n[0]=p=>s.selected=p)},null,8,["item","selected"]))),128))])}const K=f(W,[["render",J],["__scopeId","data-v-ac6d91cf"]]);const Q={props:{menu:{type:Number,default:0}},methods:{isSelected(e){return $[this.menu].purpose===e}}},X={id:"main",class:"glassmorphism"};function Y(e,n,a,u,s,t){const _=r("About"),d=r("Contact"),p=r("Impressum"),x=r("Blog");return c(),l("div",X,[i(M,{name:"slide",mode:"out-in"},{default:g(()=>[t.isSelected("About")?(c(),m(_,{key:0})):v("",!0),t.isSelected("Contact")?(c(),m(d,{key:1})):v("",!0),t.isSelected("Impressum")?(c(),m(p,{key:2})):v("",!0),t.isSelected("Blog")?(c(),m(x,{key:3})):v("",!0)]),_:1})])}const ee=f(Q,[["render",Y],["__scopeId","data-v-54d348ba"]]);const te={data(){return{menu:0}},methods:{selectMenu(e){this.menu=e}}},ne={id:"content"},oe={id:"leftCont",class:"dynamic-spacing"},se={id:"rightCont",class:"dynamic-spacing"};function _e(e,n,a,u,s,t){const _=K,d=ee;return c(),l("div",ne,[o("div",oe,[i(_,{onChanged:t.selectMenu},null,8,["onChanged"])]),o("main",se,[i(d,{menu:s.menu},null,8,["menu"])])])}const ce=f(te,[["render",_e],["__scopeId","data-v-9b1df7a9"]]);const ae={class:"notouchy"},ue={__name:"index",setup(e){const n="url("+require("@/assets/img/bg.webp")+")",a="url("+require("@/assets/img/bg.jpg")+")";function u(){const t=document.createElement("canvas");return t.getContext&&t.getContext("2d")?t.toDataURL("image/webp").indexOf("data:image/webp")===0:!1}function s(t){const _=document.createElement("script");_.setAttribute("src",t),document.head.appendChild(_)}return w(()=>{s("https://identity.netlify.com/v1/netlify-identity-widget.js"),s("./admin/redirect.js")}),(t,_)=>{const d=z,p=ce,x=r("GoatCounter"),y=r("v-app");return c(),m(y,null,{default:g(()=>[o("div",{id:"portfolio",style:L({backgroundImage:u?n:a})},[o("div",ae,[i(d)]),o("div",null,[i(p)])],4),i(x)]),_:1})}}};export{ue as default};