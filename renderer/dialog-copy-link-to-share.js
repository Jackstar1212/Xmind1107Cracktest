(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[1504],{74392:(t,e,s)=>{"use strict";var i=s(95318);Object.defineProperty(e,"X",{value:!0}),e.Z=void 0;var o=i(s(71191)),r=s(24092),a={data:function(){return{type:"",link:"",hasCopy:!1}},computed:{letters(){return{blog:{title:this.$T("Share to Blog"),desc:this.$T("Copy embed code into your blog."),iconUrl:"static/images/copylink-dialog-blog.svg"},"xmind share":{title:this.$T("XMind Share"),desc:this.$T("Copy the link to share to others."),iconUrl:"static/images/copylink-dialog-public.svg"}}}},created(){const t=o.default.parse(window.location.search.slice(1));this.type=t.type,this.link=decodeURIComponent(t.link)||""},mounted(){},methods:{close:function(){window.close()},copy:function(){(0,r.copyToClipboard)(this.link),this.hasCopy=!0}}};e.Z=a},19038:(t,e,s)=>{"use strict";var i=s(95318),o=i(s(2872)),r=i(s(42459));(0,o.default)(r.default,{name:"dialog-copy-link-to-share"})},24092:(t,e,s)=>{"use strict";var i=s(95318);Object.defineProperty(e,"__esModule",{value:!0}),e.getPlatform=function(){return process.platform},e.getOSInfo=function(){return{platform:o.default.platform(),arch:o.default.arch(),release:o.default.release()}},e.openExternal=function(t){r.remote.shell.openExternal(t).catch((t=>{l.default.fetch(a.WINDOW_OPEN,{name:"dialog-problem",payload:{name:"OpenError",message:t.message||t,stack:t.stack,code:"OPEN_LINK"}})}))},e.copyToClipboard=function(t){r.clipboard.writeText(t)};var o=i(s(12087)),r=s(58933),a=s(99492),l=i(s(24678))},42459:(t,e,s)=>{"use strict";s.r(e),s.d(e,{__esModule:()=>i.X,default:()=>o});var i=s(74392);const o=(0,s(62236).Z)(i.Z,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-window",attrs:{id:"app"}},[s("div",{staticClass:"uk-window-title-bar uk-window-title-bar-floating"},[s("window-control-button-group")],1),t._v(" "),s("div",{staticClass:"uk-window-body uk-flex uk-flex-top uk-padding uk-overflow-hidden"},[s("div",{staticClass:"uk-background-contain",staticStyle:{width:"88px",height:"88px"},attrs:{"data-src":t.$toResourceURL(t.letters[t.type].iconUrl),"uk-img":""}}),t._v(" "),s("div",{staticClass:"uk-width-expand uk-margin-left"},[s("h1",{staticClass:"uk-margin-small-bottom"},[t._v("\n        "+t._s(t.letters[t.type].title)+"\n      ")]),t._v(" "),s("div",{staticClass:"uk-margin-small-bottom"},[t._v("\n        "+t._s(t.letters[t.type].desc)+"\n      ")]),t._v(" "),s("div",{staticClass:"uk-flex uk-flex-middle"},[s("fieldset",{staticClass:"uk-fieldset uk-position-relative uk-width-1-1 uk-padding"},[s("div",{staticStyle:{width:"360px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","word-break":"break-all"}},[t._v("\n            "+t._s(t.link)+"\n          ")])])]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.hasCopy,expression:"hasCopy"}]},[t._v("\n        "+t._s(t.$T("Copied to clipboard."))+"\n      ")])])]),t._v(" "),s("div",{staticClass:"uk-window-button-bar"},[s("div",{staticClass:"uk-button-group"},[s("button",{staticClass:"uk-button uk-button-primary",on:{click:t.copy}},[t._v("\n        "+t._s(t.$T("Copy Link"))+"\n      ")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-default",on:{click:t.close}},[t._v("\n        "+t._s(t.$T("Close"))+"\n      ")])])])])}),[],!1,null,null,null).exports},76417:t=>{"use strict";t.exports=require("crypto")},58933:t=>{"use strict";t.exports=require("electron")},28614:t=>{"use strict";t.exports=require("events")},35747:t=>{"use strict";t.exports=require("fs")},12087:t=>{"use strict";t.exports=require("os")},85622:t=>{"use strict";t.exports=require("path")},87525:t=>{"use strict";t.exports=require("posthtml")},71191:t=>{"use strict";t.exports=require("querystring")},31669:t=>{"use strict";t.exports=require("util")}},t=>{"use strict";t.O(0,[8592,5586,4736,2872],(()=>{return e=19038,t(t.s=e);var e}));var e=t.O();module.exports=e}]);