(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd5f261c"],{"08ba":function(t,e,r){var a=r("d890"),i=r("064b"),n=r("3c10"),c=r("0fc1");for(var s in i){var o=a[s],u=o&&o.prototype;if(u&&u.forEach!==n)try{c(u,"forEach",n)}catch(l){u.forEach=n}}},"2d54":function(t,e,r){},"3c10":function(t,e,r){"use strict";var a=r("5dfd").forEach,i=r("d7e1"),n=r("ff9c"),c=i("forEach"),s=n("forEach");t.exports=c&&s?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"5e9f":function(t,e,r){"use strict";var a=r("b2a2"),i=r("857c"),n=r("3553"),c=r("d88d"),s=r("3da3"),o=r("2732"),u=r("38eb"),l=r("59da"),f=Math.max,h=Math.min,d=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,b=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,r,a){var g=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=a.REPLACE_KEEPS_$0,m=g?"$":"$0";return[function(r,a){var i=o(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,i,a):e.call(String(i),r,a)},function(t,a){if(!g&&y||"string"===typeof a&&-1===a.indexOf(m)){var n=r(e,t,this,a);if(n.done)return n.value}var o=i(t),d=String(this),v="function"===typeof a;v||(a=String(a));var p=o.global;if(p){var w=o.unicode;o.lastIndex=0}var j=[];while(1){var E=l(o,d);if(null===E)break;if(j.push(E),!p)break;var P=String(E[0]);""===P&&(o.lastIndex=u(d,c(o.lastIndex),w))}for(var M="",_=0,$=0;$<j.length;$++){E=j[$];for(var k=String(E[0]),x=f(h(s(E.index),d.length),0),S=[],I=1;I<E.length;I++)S.push(b(E[I]));var C=E.groups;if(v){var B=[k].concat(S,x,d);void 0!==C&&B.push(C);var T=String(a.apply(void 0,B))}else T=O(k,d,x,S,C,a);x>=_&&(M+=d.slice(_,x)+T,_=x+k.length)}return M+d.slice(_)}];function O(t,r,a,i,c,s){var o=a+t.length,u=i.length,l=p;return void 0!==c&&(c=n(c),l=v),e.call(s,l,(function(e,n){var s;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,a);case"'":return r.slice(o);case"<":s=c[n.slice(1,-1)];break;default:var l=+n;if(0===l)return e;if(l>u){var f=d(l/10);return 0===f?e:f<=u?void 0===i[f-1]?n.charAt(1):i[f-1]+n.charAt(1):e}s=i[l-1]}return void 0===s?"":s}))}}))},7677:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.showNavBar?r("main-nav-bar"):t._e(),r("keep-alive",[r("router-view")],1),r("music-play-bar",{directives:[{name:"show",rawName:"v-show",value:t.showPlayBar,expression:"showPlayBar"}]})],1)},i=[],n=(r("ecb4"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("van-nav-bar",{attrs:{border:!1},scopedSlots:t._u([{key:"left",fn:function(){return[r("van-icon",{attrs:{name:"ellipsis",size:"20"}})]},proxy:!0},{key:"title",fn:function(){return[r("div",{staticClass:"navBarTitle"},t._l(t.titles,(function(e,a){return r("div",{key:a,class:{currentTitle:-1!==t.path.indexOf(e.path)},attrs:{"data-path":e.path},on:{click:t.clickTitle}},[t._v(" "+t._s(e.title)+" ")])})),0)]},proxy:!0},{key:"right",fn:function(){return[r("van-icon",{attrs:{name:"search",size:"20"}})]},proxy:!0}])})}),c=[],s=(r("e35a"),r("5e9f"),{name:"MainNavBar",data:function(){return{titles:[{title:"我的",path:"mine"},{title:"发现",path:"discovery"},{title:"云村",path:"village"},{title:"视频",path:"video"}]}},computed:{path:function(){return this.$route.fullPath}},methods:{clickTitle:function(t){var e=t.target.dataset.path;-1===this.$route.fullPath.indexOf(e)&&this.$router.replace("/projects/cloud_music/".concat(e))}}}),o=s,u=(r("9c8a"),r("4023")),l=Object(u["a"])(o,n,c,!1,null,"70d7d7dc",null),f=l.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bar"},[r("audio",{ref:"audio",on:{canplay:t.playMusic,timeupdate:t.updateTime,ended:t.songEnd}}),r("div",{staticClass:"leftPart"},[r("img",{staticClass:"cover",attrs:{src:t.songInfo.cover,alt:""}}),r("div",{staticClass:"info"},[r("p",{staticClass:"title"},[t._v(t._s(t.songInfo.name))]),r("p",{staticClass:"artist"},[t._v(t._s(t.songInfo.artist))])])]),r("div",{staticClass:"rightPart"},[r("div",{staticClass:"playPauseButton",on:{click:t.palyOrPause}},[r("van-circle",{attrs:{rate:"0",size:"100%",color:"#E53935","layer-color":"#424242"},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}}),r("i",{staticClass:"iconfont button",class:t.buttonStatus})],1)])])},d=[],v=(r("9302"),r("053b"),r("e24e")),p=r("80a0"),b=(r("07f6"),r("ae8c")),g=r("90b9"),y={name:"MusicPlayBar",data:function(){return{songInfo:{cover:"",name:"",artist:""},progress:0,playing:!1,switchMethod:0}},computed:Object(p["a"])(Object(p["a"])({},Object(b["c"])(["currentMusic","playList"])),{},{buttonStatus:function(){return this.playing?"icon-zanting":"icon-bofangsanjiaoxing"}}),watch:{currentMusic:function(t,e){this.switchMusic(t)}},methods:Object(p["a"])(Object(p["a"])({},Object(b["b"])(["changeMusic"])),{},{switchMusic:function(t){var e,r=[],a=t.artists,i=Object(v["a"])(a);try{for(i.s();!(e=i.n()).done;){var n=e.value;r.push(n.name)}}catch(c){i.e(c)}finally{i.f()}this.songInfo.id=t.id,this.songInfo.cover=t.album.picUrl,this.songInfo.name=t.name,this.songInfo.artist=r.join("/"),this.songInfo.url=t.url,this.$refs.audio.src=t.url,this.playing=!0},playMusic:function(){var t=this.$refs.audio;t.play(),this.playing=!0},pauseMusic:function(){var t=this.$refs.audio;t.pause(),this.playing=!1},palyOrPause:function(){this.playing?this.pauseMusic():this.playMusic()},updateTime:function(t){var e=t.target.currentTime,r=t.target.duration;this.progress=e/r*100},songEnd:function(){var t;if(0===this.switchMethod){for(var e=0;e<this.playList.list.length;e++){var r=this.playList.list[e];if(r.id===this.currentMusic.id){t=this.playList.list[e+1];break}}this.changeMusic(t)}else if(1===this.switchMethod){var a=this.playList.list.length,i=Object(g["b"])(a);t=this.playList.list[i],this.changeMusic(t)}else 2===this.switchMethod&&this.playMusic()}})},m=y,O=(r("a428"),Object(u["a"])(m,h,d,!1,null,"705b69a4",null)),w=O.exports,j={name:"cloudMusic",components:{MainNavBar:f,MusicPlayBar:w},computed:{showNavBar:function(){for(var t=this.$route.fullPath,e=["mine","discovery","village","video"],r=0,a=e;r<a.length;r++){var i=a[r];if(-1!==t.indexOf(i))return!0}return!1},showPlayBar:function(){return!!this.$store.getters.currentMusic.id}}},E=j,P=Object(u["a"])(E,a,i,!1,null,null,null);e["default"]=P.exports},"80a0":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("f3dd"),r("dbb3"),r("fe59"),r("b73f"),r("bf84"),r("fe8a"),r("08ba");function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},9302:function(t,e,r){"use strict";var a=r("1c8b"),i=r("692f"),n=r("da10"),c=r("d7e1"),s=[].join,o=i!=Object,u=c("join",",");a({target:"Array",proto:!0,forced:o||!u},{join:function(t){return s.call(n(this),void 0===t?",":t)}})},"9c8a":function(t,e,r){"use strict";var a=r("e265"),i=r.n(a);i.a},a428:function(t,e,r){"use strict";var a=r("2d54"),i=r.n(a);i.a},b73f:function(t,e,r){var a=r("1c8b"),i=r("efe2"),n=r("da10"),c=r("aa6b").f,s=r("1e2c"),o=i((function(){c(1)})),u=!s||o;a({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return c(n(t),e)}})},bf84:function(t,e,r){var a=r("1c8b"),i=r("1e2c"),n=r("8d44"),c=r("da10"),s=r("aa6b"),o=r("1bbd");a({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,a=c(t),i=s.f,u=n(a),l={},f=0;while(u.length>f)r=i(a,e=u[f++]),void 0!==r&&o(l,e,r);return l}})},dbb3:function(t,e,r){"use strict";var a=r("1c8b"),i=r("5dfd").filter,n=r("1ea7"),c=r("ff9c"),s=n("filter"),o=c("filter");a({target:"Array",proto:!0,forced:!s||!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e265:function(t,e,r){},fe59:function(t,e,r){"use strict";var a=r("1c8b"),i=r("3c10");a({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},fe8a:function(t,e,r){var a=r("1c8b"),i=r("3553"),n=r("cbab"),c=r("efe2"),s=c((function(){n(1)}));a({target:"Object",stat:!0,forced:s},{keys:function(t){return n(i(t))}})}}]);
//# sourceMappingURL=chunk-cd5f261c.6bfa6bc8.js.map