(function(e){function n(n){for(var r,a,o=n[0],i=n[1],s=n[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&f.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==u[o]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},u={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-032cd416":"e001ac5b","chunk-1bd6a7ff":"d8a4801e","chunk-3ea5e3ec":"84fafc58","chunk-781a61c9":"4d099542","chunk-f9da33fc":"0d421bb0","chunk-2d0ae630":"8dbe5735","chunk-2d0b6850":"4f1d2ad0","chunk-2d0bd928":"50dd1257","chunk-2d2265a6":"e831befc","chunk-2d231006":"378ff5b5","chunk-546f20c7":"3c427a3a","chunk-589121e7":"0dfc3a63"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-032cd416":1,"chunk-3ea5e3ec":1,"chunk-781a61c9":1,"chunk-f9da33fc":1,"chunk-546f20c7":1,"chunk-589121e7":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-032cd416":"48a00871","chunk-1bd6a7ff":"31d6cfe0","chunk-3ea5e3ec":"0df3e756","chunk-781a61c9":"30813baa","chunk-f9da33fc":"c2218c3c","chunk-2d0ae630":"31d6cfe0","chunk-2d0b6850":"31d6cfe0","chunk-2d0bd928":"31d6cfe0","chunk-2d2265a6":"31d6cfe0","chunk-2d231006":"31d6cfe0","chunk-546f20c7":"722e9576","chunk-589121e7":"7cbf4206"}[e]+".css",u=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=c[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===r||l===u)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),t(c)},d.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var f=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}u[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"07f6":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c})),t.d(n,"d",(function(){return o}));var r=t("1bab");function a(e){return Object(r["a"])({url:"/login/cellphone",params:e})}function u(e){return Object(r["a"])({url:"/banner",params:e})}function c(e){return Object(r["a"])({url:"/recommend/songs",params:e})}function o(e){return Object(r["a"])({url:"/song/url",params:e})}},"1bab":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var r=t("82ae"),a=t.n(r),u="http://47.106.91.101",c="https://api.imjad.cn/hitokoto/";function o(e){var n=a.a.create({baseURL:c,timeout:5e3});return n.interceptors.request.use((function(e){return e}),(function(e){console.log(e)})),n.interceptors.response.use((function(e){return e.data}),(function(e){console.log(e)})),n(e)}function i(e){var n=a.a.create({baseURL:u,timeout:5e3,withCredentials:!0});return n.interceptors.request.use((function(e){return e}),(function(e){console.log(e)})),n.interceptors.response.use((function(e){return e.data}),(function(e){console.log(e)})),n(e)}},"2af2":function(e,n,t){"use strict";var r=t("728e"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("36cc");var r=t("238e"),a=(t("9a17"),t("69e3")),u=(t("4a37"),t("9e06")),c=(t("9308"),t("af52")),o=(t("1bd9"),t("4f17")),i=(t("5282"),t("e4c9")),s=(t("1387"),t("dc08")),l=(t("f1ae"),t("e2c8")),f=(t("6783"),t("99de")),d=(t("3524"),t("ff89")),h=(t("d9a3"),t("c9db"),t("de3e"),t("618d"),t("0261")),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",[t("router-view")],1),e.$route.meta.showTab?t("main-tab-bar"):e._e()],1)},b=[],m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vant-tab-bar",{attrs:{tabs:e.tabs}})},v=[],k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("van-tabbar",{model:{value:e.active,callback:function(n){e.active=n},expression:"active"}},e._l(e.tabs,(function(n){return t("van-tabbar-item",{key:n.name,attrs:{icon:n.icon,to:n.name,replace:""}},[e._v(" "+e._s(n.text)+" ")])})),1)},y=[],g={name:"VantTabBar",props:{tabs:{type:Array,default:[]}},data:function(){return{active:0}}},P=g,w=t("e90a"),L=Object(w["a"])(P,k,y,!1,null,null,null),j=L.exports,_={name:"mainTabBar",components:{VantTabBar:j},data:function(){return{tabs:[{name:"home",icon:"home-o",text:"Home"},{name:"projects",icon:"apps-o",text:"Projects"},{name:"about",icon:"user-o",text:"About"}]}}},O=_,T=Object(w["a"])(O,m,v,!1,null,null,null),x=T.exports,E={name:"App",components:{MainTabBar:x}},M=E,S=(t("2af2"),Object(w["a"])(M,p,b,!1,null,"45775888",null)),A=S.exports,C=(t("3a20"),t("1bee")),B=function(){return t.e("chunk-546f20c7").then(t.bind(null,"b3d7"))},N=function(){return t.e("chunk-2d0bd928").then(t.bind(null,"2d22"))},$=function(){return t.e("chunk-2d231006").then(t.bind(null,"ef4c"))},q=function(){return t.e("chunk-032cd416").then(t.bind(null,"a1a3"))},U=function(){return Promise.all([t.e("chunk-1bd6a7ff"),t.e("chunk-f9da33fc")]).then(t.bind(null,"7677"))},D=function(){return t.e("chunk-589121e7").then(t.bind(null,"8908"))},H=function(){return t.e("chunk-2d0b6850").then(t.bind(null,"1e06"))},J=function(){return Promise.all([t.e("chunk-1bd6a7ff"),t.e("chunk-3ea5e3ec")]).then(t.bind(null,"3602"))},R=function(){return t.e("chunk-2d2265a6").then(t.bind(null,"e7fd"))},V=function(){return t.e("chunk-2d0ae630").then(t.bind(null,"0a9b"))},F=function(){return Promise.all([t.e("chunk-1bd6a7ff"),t.e("chunk-781a61c9")]).then(t.bind(null,"fd66"))};h["a"].use(C["a"]);var I=[{path:"",redirect:"/home"},{path:"/home",component:B,meta:{showTab:!0}},{path:"/projects",component:N,meta:{showTab:!0},children:[{path:"",component:q,meta:{showTab:!0}},{path:"cloud_music",component:U,children:[{path:"login",component:D},{path:"mine",component:H},{path:"discovery",component:J},{path:"village",component:R},{path:"video",component:V},{path:"daily_songs",component:F}]}]},{path:"/about",component:$,meta:{showTab:!0}}],K=new C["a"]({mode:"history",routes:I}),z=K,G=t("8876"),Q={replacePlayList:function(e,n){e.historyPlayList=e.prevPlayList,e.prevPlayList=e.playList,e.playList=n},changeMusic:function(e,n){e.currentMusic=n}},W=t("07f6"),X={replacePlayList:function(e,n){return new Promise((function(t,r){e.commit("replacePlayList",n)}))},changeMusic:function(e,n){return new Promise((function(t,r){var a=n.id;Object(W["d"])({id:a}).then((function(t){n.url=t.data[0].url,e.commit("changeMusic",n)}))}))}},Y={historyPlayList:function(e){return e.historyPlayList},prevPlayList:function(e){return e.prevPlayList},playList:function(e){return e.playList},currentMusic:function(e){return e.currentMusic}};h["a"].use(G["a"]);var Z={historyPlayList:{},prevPlayList:{},playList:{},currentMusic:{}},ee=new G["a"].Store({state:Z,mutations:Q,actions:X,getters:Y}),ne=ee;t("be35");h["a"].use(d["a"]),h["a"].use(f["a"]),h["a"].use(l["a"]),h["a"].use(s["a"]),h["a"].use(i["a"]),h["a"].use(o["a"]),h["a"].use(c["a"]),h["a"].use(u["a"]),h["a"].use(a["a"]),h["a"].use(r["a"]),h["a"].config.productionTip=!1,new h["a"]({router:z,store:ne,render:function(e){return e(A)}}).$mount("#app")},"728e":function(e,n,t){},be35:function(e,n,t){}});
//# sourceMappingURL=app.1c75c393.js.map