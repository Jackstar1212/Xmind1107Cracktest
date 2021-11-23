(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[1584],{13309:(e,t,r)=>{"use strict";var s=r(95318);Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var i=s(r(59713)),a=r(20629),o=r(99492),c=r(83450),l=s(r(24678));function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={mixins:[s(r(7322)).default],data:function(){return{selectedFileCacheId:null}},computed:u(u({},(0,a.mapState)("fileCache",["fileCacheItems"])),{},{touchBarItems(){return[{type:"space",size:"flexible"},{type:"button",label:this.$T("Clear Cache"),click:"removeAll"},{type:"space",size:"flexible"},{type:"button",label:this.$T("Close"),click:"close"},null!==this.selectedFileCacheId?{type:"button",label:this.$T("Retrieve"),backgroundColor:"primary",click:"open"}:null,{type:"space",size:"flexible"}].filter(Boolean)}}),methods:{close(){window.close()},open(){if(null===this.selectedFileCacheId)return;let e=this.getFileCacheItem(this.selectedFileCacheId),t=e.firstSnapshotId;if(e.snapshots.length>0){t=e.snapshots.pop().id}this.$store.handleCommand("restoreSnapshot",{fileCacheId:e.fileCacheId,snapshotId:t,filename:e.filename}),(0,c.trackEvent)({eventCategory:"FileCache",eventAction:"retrieve"})},remove(){l.default.fetch(o.FILE_CACHE_REMOVE,{fileCacheId:this.selectedFileCacheId})},removeAll(){l.default.fetch(o.FILE_CACHE_REMOVE,{removeAll:!0})},getFileCacheItem(e){return this.fileCacheItems.find((t=>t.fileCacheId===e))},formatDate(e){const t=new Date(e);let r=t.getMinutes();return r<10&&(r="0"+r),`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${t.getHours()}:${r}`}}};t.Z=d},7322:(e,t,r)=>{"use strict";var s=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(r(59713)),a=r(48932),o=r(99492),c=r(36414),l=s(r(24678));function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={computed:{},watch:{touchBarItems(e){this.updateTouchBarItems(e)}},methods:{updateTouchBarItems(e){const t=e=>{const t=e.click;let r=this._touchBarRoutes[t];return r||(r={method:t,endpoint:(0,o.WINDOW_CALLBACK)(window.id,(0,c.hyphenate)(t))},this._touchBarRoutes[t]=r),r.unroute||(r.unroute=l.default.route(r.endpoint,this[t])),Object.assign({},e,{click:r.endpoint})};e=(e||this.touchBarItems||[]).map((e=>("button"!==e.type||"string"!=typeof e.click||a.WINDOW_ACTIONS.includes(e.click)||e.click.startsWith("command:")?"buttons"===e.type&&(e=u(u({},e),{},{buttons:e.buttons.map((e=>"string"!=typeof e.click||a.WINDOW_ACTIONS.includes(e.click)||e.click.startsWith("command:")?e:t(e)))})):e=t(e),e))),this.$store.commit("window/updateTouchBarItems",{items:e})}},beforeCreate(){this._touchBarRoutes={}},mounted(){this.updateTouchBarItems()},beforeDestroy(){Object.values(this._touchBarRoutes).forEach((({unroute:e})=>e&&e())),this._touchBarRoutes={}}};t.default=d},19955:(e,t,r)=>{"use strict";var s=r(95318),i=s(r(2872)),a=s(r(74215));(0,i.default)(a.default,{name:"dialog-file-cache"})},74215:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__esModule:()=>s.X,default:()=>i});var s=r(13309);const i=(0,r(62236).Z)(s.Z,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"uk-window uk-window-dialog",attrs:{id:"app"}},[r("div",{staticClass:"uk-window-title-bar"},[r("div",{staticClass:"uk-window-title"},[e._v("\n      "+e._s(e.$T("File Cache"))+"\n    ")]),e._v(" "),r("window-control-button-group")],1),e._v(" "),r("div",{staticClass:"uk-window-body uk-flex uk-flex-column uk-padding-large uk-padding-remove-bottom"},[r("div",[e._v("\n      "+e._s(e.$T("File Cache will auto backup your edited XMind files on this device."))+"\n    ")]),e._v(" "),r("div",{staticClass:"uk-panel-scrollable uk-margin uk-margin-large-top uk-padding-remove uk-height-expand uk-background-default"},[r("table",{staticClass:"uk-table uk-table-hover uk-table-small uk-table-striped"},[r("tbody",e._l(e.fileCacheItems.slice().reverse(),(function(t,s){return r("tr",{key:s,on:{click:function(r){e.selectedFileCacheId=t.fileCacheId}}},[r("td",{staticClass:"uk-table-shrink"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedFileCacheId,expression:"selectedFileCacheId"}],staticClass:"uk-radio",attrs:{type:"radio"},domProps:{value:t.fileCacheId,checked:e._q(e.selectedFileCacheId,t.fileCacheId)},on:{change:function(r){e.selectedFileCacheId=t.fileCacheId}}})]),e._v(" "),r("td",{staticClass:"uk-text-truncate"},[e._v("\n              "+e._s(t.filename)+"\n            ")]),e._v(" "),r("td",{staticClass:"uk-text-truncate"},[e._v("\n              "+e._s(t.srcPath)+"\n            ")]),e._v(" "),r("td",{staticClass:"uk-table-shrink uk-text-nowrap"},[e._v("\n              "+e._s(e.formatDate(t.timestamp))+"\n            ")])])})),0)])])]),e._v(" "),r("div",{staticClass:"uk-window-button-bar"},[r("div",{staticClass:"uk-button-group"},[r("button",{staticClass:"uk-button uk-button-primary",attrs:{disabled:null===e.selectedFileCacheId},on:{click:e.open}},[e._v("\n        "+e._s(e.$T("Retrieve"))+"\n      ")]),e._v(" "),r("button",{staticClass:"uk-button uk-button-default",on:{click:e.close}},[e._v("\n        "+e._s(e.$T("Close"))+"\n      ")])]),e._v(" "),r("div",{staticClass:"uk-button-group"},[r("button",{staticClass:"uk-button uk-button-default",attrs:{type:"button"},on:{click:e.removeAll}},[e._v("\n        "+e._s(e.$T("Clear Cache"))+"\n      ")])])])])}),[],!1,null,null,null).exports},76417:e=>{"use strict";e.exports=require("crypto")},58933:e=>{"use strict";e.exports=require("electron")},28614:e=>{"use strict";e.exports=require("events")},35747:e=>{"use strict";e.exports=require("fs")},12087:e=>{"use strict";e.exports=require("os")},85622:e=>{"use strict";e.exports=require("path")},87525:e=>{"use strict";e.exports=require("posthtml")},71191:e=>{"use strict";e.exports=require("querystring")},31669:e=>{"use strict";e.exports=require("util")}},e=>{"use strict";e.O(0,[8592,5586,4736,2872],(()=>{return t=19955,e(e.s=t);var t}));var t=e.O();module.exports=t}]);