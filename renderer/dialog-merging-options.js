(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[9083],{7322:(t,e,s)=>{"use strict";var r=s(95318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(s(59713)),n=s(48932),o=s(99492),i=s(36414),u=r(s(24678));function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){(0,a.default)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={computed:{},watch:{touchBarItems(t){this.updateTouchBarItems(t)}},methods:{updateTouchBarItems(t){const e=t=>{const e=t.click;let s=this._touchBarRoutes[e];return s||(s={method:e,endpoint:(0,o.WINDOW_CALLBACK)(window.id,(0,i.hyphenate)(e))},this._touchBarRoutes[e]=s),s.unroute||(s.unroute=u.default.route(s.endpoint,this[e])),Object.assign({},t,{click:s.endpoint})};t=(t||this.touchBarItems||[]).map((t=>("button"!==t.type||"string"!=typeof t.click||n.WINDOW_ACTIONS.includes(t.click)||t.click.startsWith("command:")?"buttons"===t.type&&(t=l(l({},t),{},{buttons:t.buttons.map((t=>"string"!=typeof t.click||n.WINDOW_ACTIONS.includes(t.click)||t.click.startsWith("command:")?t:e(t)))})):t=e(t),t))),this.$store.commit("window/updateTouchBarItems",{items:t})}},beforeCreate(){this._touchBarRoutes={}},mounted(){this.updateTouchBarItems()},beforeDestroy(){Object.values(this._touchBarRoutes).forEach((({unroute:t})=>t&&t())),this._touchBarRoutes={}}};e.default=d},9189:(t,e,s)=>{"use strict";var r=s(95318),a=r(s(2872)),n=r(s(28590));(0,a.default)(n.default,{name:"dialog-merging-options"})},91657:function(t,e,s){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=s(90571),n=s(99492),o=r(s(24678)),i=r(s(7322));e.default=a.createComponent({name:"dialog-merging-options",mixins:[i.default],setup(){const t=a.getCurrentInstance(),e=a.reactive({mergeTarget:0,createIndexSheet:!1}),s=a.computed((()=>[t.$T("Multiple Sheets"),t.$T("Current Map")])),r="darwin"===process.platform,i=a.computed((()=>r?t.$T("To merge multiple files, hold down ⇧ or ⌘ when choosing files."):t.$T("To merge multiple files, hold down Shift or Ctrl when choosing files."))),u=a.computed((()=>[{type:"space",size:"flexible"},{type:"button",label:t.$T("Cancel"),click:"onCancel"},{type:"button",label:t.$T("Choose"),backgroundColor:"primary",click:"onConfirm"},{type:"space",size:"flexible"}]));return{mergeOptions:s,onConfirm:()=>{t.$safeRun((()=>{o.default.fetch(n.WINDOW_SUBMIT_RESULT(window.id),{createIndexSheet:e.createIndexSheet,mergeIntoMultiSheet:0===e.mergeTarget,mergeIntoCurrentSheet:1===e.mergeTarget}).then((()=>window.close()))}))},onCancel:()=>{t.$safeRun((()=>{o.default.fetch(n.WINDOW_SUBMIT_RESULT(window.id),null).then((()=>window.close()))}))},onMergeTargetChange:t=>{e.mergeTarget=t,1===t&&(e.createIndexSheet=!1)},state:e,tip:i,touchBarItems:u}}})},28590:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var r=s(91657),a=s.n(r),n={};for(const t in r)"default"!==t&&(n[t]=()=>r[t]);s.d(e,n);var o=s(56296);const i=(0,s(62236).Z)(a(),o.s,o.x,!1,null,null,null).exports},56296:(t,e,s)=>{"use strict";s.d(e,{s:()=>r,x:()=>a});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-window uk-window-dialog",attrs:{id:"app"}},[s("div",{staticClass:"uk-window-title-bar uk-window-title-bar-transparent"},[s("window-control-button-group")],1),t._v(" "),s("div",{staticClass:"uk-window-body uk-flex uk-flex-column"},[s("div",{staticClass:"uk-panel uk-padding uk-flex uk-flex-column uk-height-expand"},[s("h1",{staticClass:"uk-text-bold",staticStyle:{"margin-top":"-4px","margin-left":"30px","margin-bottom":"0"}},[t._v("\n        "+t._s(t.$T("Merge XMind Files"))+"\n      ")]),t._v(" "),s("div",{staticClass:"uk-panel uk-form-aligned"},[s("div",{staticClass:"uk-margin-top uk-margin-small"},[s("label",{staticClass:"uk-form-label"},[t._v(t._s(t.$T("Merge to:")))]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("button",{staticClass:"uk-button uk-button-popover-toggle uk-select-icon uk-text-left uk-width-small",staticStyle:{width:"176px"},attrs:{name:"content"}},[t._v("\n              "+t._s(t.mergeOptions[t.state.mergeTarget])+"\n            ")]),t._v(" "),s("div",{attrs:{"uk-contextual-popover":"offsetLeft:20","data-sel-close":"[uk-menu] button"}},[s("ul",{staticClass:"uk-height-1-1 uk-overflow-auto",attrs:{"uk-menu":""}},t._l(t.mergeOptions,(function(e,r){return s("li",{key:r},[s("button",{class:{"uk-checked":t.state.mergeTarget===r},on:{click:function(){return t.onMergeTargetChange(r)}}},[t._v("\n                    "+t._s(e)+"\n                  ")])])})),0)])])]),t._v(" "),s("div",{staticClass:"uk-margin-small"},[s("label",{staticClass:"uk-form-label"},[t._v(t._s(t.$T("Options:")))]),t._v(" "),s("div",{staticClass:"uk-form-controls uk-margin-xsmall-top"},[s("div",{staticClass:"uk-margin-small"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.state.createIndexSheet,expression:"state.createIndexSheet"}],staticClass:"uk-checkbox uk-margin-xsmall-right",attrs:{type:"checkbox",disabled:1===t.state.mergeTarget},domProps:{checked:Array.isArray(t.state.createIndexSheet)?t._i(t.state.createIndexSheet,null)>-1:t.state.createIndexSheet},on:{change:function(e){var s=t.state.createIndexSheet,r=e.target,a=!!r.checked;if(Array.isArray(s)){var n=t._i(s,null);r.checked?n<0&&t.$set(t.state,"createIndexSheet",s.concat([null])):n>-1&&t.$set(t.state,"createIndexSheet",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.state,"createIndexSheet",a)}}}),t._v("\n                "+t._s(t.$T("Generate a Map of Contents"))+"\n              ")])])])])])])]),t._v(" "),s("hr",{staticClass:"uk-margin-xsmall-bottom",staticStyle:{color:"#ececec","margin-left":"30px","margin-right":"30px"}}),t._v(" "),s("div",{staticClass:"uk-flex-column uk-text-muted",staticStyle:{"margin-left":"30px"}},[t._v("\n    "+t._s(t.tip)+"\n  ")]),t._v(" "),s("div",{staticClass:"uk-window-button-bar"},[s("div",{staticClass:"uk-button-group"},[s("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"submit",autofocus:""},on:{click:t.onConfirm}},[t._v("\n        "+t._s(t.$T("Choose"))+"\n      ")]),t._v(" "),s("button",{staticClass:"uk-button uk-button-default",attrs:{type:"button"},on:{click:t.onCancel}},[t._v("\n        "+t._s(t.$T("Cancel"))+"\n      ")])])])])},a=[]},76417:t=>{"use strict";t.exports=require("crypto")},58933:t=>{"use strict";t.exports=require("electron")},28614:t=>{"use strict";t.exports=require("events")},35747:t=>{"use strict";t.exports=require("fs")},12087:t=>{"use strict";t.exports=require("os")},85622:t=>{"use strict";t.exports=require("path")},87525:t=>{"use strict";t.exports=require("posthtml")},71191:t=>{"use strict";t.exports=require("querystring")},31669:t=>{"use strict";t.exports=require("util")}},t=>{"use strict";t.O(0,[8592,5586,4736,2872],(()=>{return e=9189,t(t.s=e);var e}));var e=t.O();module.exports=e}]);