(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[2963],{57399:(e,t,r)=>{"use strict";var s=r(95318);Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var i=s(r(78835)),o=s(r(24678)),n=s(r(41698)),a=r(99492),u=r(36414);const c="K9FIvBKyOCYhS1Q1i6ov2YuC5FZ7iXOVzTdBS7GD",l="http://localhost/biggerplate_callback",d=(0,n.default)("biggerplate");var p={data:()=>({showSpinner:!1,oathURL:`https://accounts.biggerplate.com/oauth/auth?client_id=${c}&redirect_uri=${encodeURIComponent(l)}&response_type=code&scope=account+maps`}),methods:{handleAuthorization({target:e}){const t=e.getURL();if(0!==t.indexOf(l))return;const r=i.default.parse(t,!0).query.code;r?(this.showSpinner=!0,this.$safeRun((()=>{fetch("https://accounts.biggerplate.com/oauth/token",{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"},method:"POST",body:new URLSearchParams({client_id:c,client_secret:"Uoe5YUPf14wkes5Gy5HIwTygMxPGe7hrztVMuIGU",redirect_uri:l,response_type:"token",code:r,grant_type:"authorization_code",scope:"account+maps"})}).then((e=>e?e.ok?e.json():Promise.reject("Biggerplate authorization is not ok: "+e.status):Promise.reject("Invalid response"))).then((({access_token:e,expires_in:t,refresh_token:r})=>{if(!e)return Promise.reject("Invalid access_token");o.default.fetch(a.STORE_COMMIT,{mutations:[{type:"biggerplate/updateBiggerplate",payload:{accessToken:e,realExpireTime:Date.now()+1e3*(t-100),refreshToken:r}}]}).then((()=>{this.showSpinner=!1,window.close()}))})).catch((e=>{this.showSpinner=!1,d.error("Request accessToken error: %s",(0,u.normalizeError)(e)),window.close()}))}))):window.close()}}};t.Z=p},71796:(e,t,r)=>{"use strict";var s=r(95318),i=s(r(2872)),o=s(r(62635));(0,i.default)(o.default,{name:"biggerplate"})},62635:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__esModule:()=>s.X,default:()=>i});var s=r(57399);const i=(0,r(62236).Z)(s.Z,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"uk-window uk-window-dialog",attrs:{id:"app"}},[r("div",{staticClass:"uk-window-title-bar"},[r("div",{staticClass:"uk-window-title"},[e._v("\n      Biggerplate Authorization\n    ")]),e._v(" "),r("window-control-button-group")],1),e._v(" "),r("div",{staticClass:"uk-window-body uk-flex uk-flex-column uk-position-relative"},[r("webview",{staticClass:"uk-flex-1",attrs:{src:e.oathURL,partition:"biggerplate"},on:{"did-finish-load":function(t){return e.handleAuthorization(t)},"did-start-loading":function(t){e.showSpinner=!0},"did-stop-loading":function(t){e.showSpinner=!1}}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"uk-background-default uk-position-cover uk-flex uk-flex-1 uk-flex-center uk-flex-middle"},[r("div",{attrs:{"uk-spinner":"ratio: 4;"}})])],1)])}),[],!1,null,null,null).exports},76417:e=>{"use strict";e.exports=require("crypto")},58933:e=>{"use strict";e.exports=require("electron")},28614:e=>{"use strict";e.exports=require("events")},35747:e=>{"use strict";e.exports=require("fs")},12087:e=>{"use strict";e.exports=require("os")},85622:e=>{"use strict";e.exports=require("path")},87525:e=>{"use strict";e.exports=require("posthtml")},71191:e=>{"use strict";e.exports=require("querystring")},78835:e=>{"use strict";e.exports=require("url")},31669:e=>{"use strict";e.exports=require("util")}},e=>{"use strict";e.O(0,[8592,5586,4736,2872],(()=>{return t=71796,e(e.s=t);var t}));var t=e.O();module.exports=t}]);