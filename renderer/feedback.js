(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[8656],{11918:(t,e,a)=>{"use strict";var i=a(95318);Object.defineProperty(e,"X",{value:!0}),e.Z=void 0;var s=i(a(59713)),n=a(20629),r=i(a(71191)),o=a(48932),d=a(99492),l=i(a(24678)),c=i(a(7322));function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){(0,s.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}const m=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,g=r.default.parse(location.search.substr(1));var f={mixins:[c.default],data(){return{emailModel:null,isEmailValid:!0,reporterModel:"",feedbackModel:"",isSending:!1,file:null,fileName:"",isOversize:!1,activeTab:"report",error:null,isSendDiagnostic:!1,iconWarning:this.$toResourceURL("static/images/dialog-export-to-image/warning.svg")}},computed:p(p(p(p({vanaEmail:()=>"xmind-2021@xmind.net"},(0,n.mapState)("feedback",["email"])),(0,n.mapGetters)("app",["serviceRegion"])),(0,n.mapGetters)("activation",{activationStatus:"status"})),{},{isChinaArea(){return"cn"===this.serviceRegion},isSendDisabled(){return!this.isEmailValid||!this.feedbackModel.trim()||this.isOversize||this.isSending},touchBarItems(){return"contact"===this.activeTab?[{type:"space",size:"flexible"},{type:"button",label:this.$T("Cancel"),click:"close"},{type:"space",size:"flexible"}]:[{type:"space",size:"flexible"},{type:"button",label:this.$T("Cancel"),click:"close"},{type:"button",label:this.$T("Send"),backgroundColor:"primary",click:"send"},{type:"space",size:"flexible"}]},isAttachmentSelected(){return this.file&&this.fileName}}),async mounted(){this.emailModel=this.$store.state.account.primaryEmail,this.emailModel&&this.$refs.textareaRef.focus(),g.message&&(this.feedbackModel=g.message)},created(){const t=r.default.parse(window.location.search.slice(1));this.isSendDiagnostic="true"===t.isSendDiagnostic},methods:{cancel(){window.close()},validateEmail(){this.isEmailValid=this.emailModel&&m.test(this.emailModel)},attachFile({target:t}){if(!t||!t.files||!t.files[0])return;const e=t.files[0];this.file=e,this.fileName=e.name,this.isOversize=e.size>20971520},async send(){if(this.isSending)return;this.isSending=!0,this.$store.commit("feedback/updateFeedback",{email:this.emailModel});const t={title:"Bug Report",name:this.reporterModel,email:this.emailModel,sub_status:this.activationStatus===o.ACTIVATION_STATUS.VALID?1:0,content:this.feedbackModel.trim(),isSendDiagnostic:this.isSendDiagnostic.toString()};if(this.file){const e=await function(t){return new Promise(((e,a)=>{const i=new FileReader;i.onloadend=()=>{e(i.result)},i.onerror=()=>{a(i.error)},i.readAsBinaryString(t)}))}(this.file);t.image=[e,this.fileName]}return l.default.fetch(d.XOS.FEEDBACK,t).then((()=>{this.isSending=!1,window.close()})).catch((t=>{this.isSending=!1,this.error=t}))},removeAttachment(){this.file=null,this.fileName="",this.isOversize=!1}},components:{SupportCenterTemplate:{render(t){const e=this.$T("Support Center"),a=this.$T("Solution to some frequent problems can be found at $1.",e),i=t("span",{class:"uk-link",on:{mousedown:()=>this.$store.handleCommand("support")}},e),s=a.split(e).map((e=>t("span",e)));return t("div",{class:"uk-margin-small-top"},[s[0],i,s[1]])}}}};e.Z=f},7322:(t,e,a)=>{"use strict";var i=a(95318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a(59713)),n=a(48932),r=a(99492),o=a(36414),d=i(a(24678));function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){(0,s.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={computed:{},watch:{touchBarItems(t){this.updateTouchBarItems(t)}},methods:{updateTouchBarItems(t){const e=t=>{const e=t.click;let a=this._touchBarRoutes[e];return a||(a={method:e,endpoint:(0,r.WINDOW_CALLBACK)(window.id,(0,o.hyphenate)(e))},this._touchBarRoutes[e]=a),a.unroute||(a.unroute=d.default.route(a.endpoint,this[e])),Object.assign({},t,{click:a.endpoint})};t=(t||this.touchBarItems||[]).map((t=>("button"!==t.type||"string"!=typeof t.click||n.WINDOW_ACTIONS.includes(t.click)||t.click.startsWith("command:")?"buttons"===t.type&&(t=c(c({},t),{},{buttons:t.buttons.map((t=>"string"!=typeof t.click||n.WINDOW_ACTIONS.includes(t.click)||t.click.startsWith("command:")?t:e(t)))})):t=e(t),t))),this.$store.commit("window/updateTouchBarItems",{items:t})}},beforeCreate(){this._touchBarRoutes={}},mounted(){this.updateTouchBarItems()},beforeDestroy(){Object.values(this._touchBarRoutes).forEach((({unroute:t})=>t&&t())),this._touchBarRoutes={}}};e.default=u},1097:(t,e,a)=>{"use strict";var i=a(95318),s=i(a(2872)),n=i(a(65388));(0,s.default)(n.default,{name:"feedback"})},59140:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var i=a(94015),s=a.n(i),n=a(23645),r=a.n(n)()(s());r.push([t.id,"\n.fd-margin-left[data-v-1a126d08] {\n  margin-left: 12px;\n}\n.fd-margin-bottom[data-v-1a126d08] {\n  margin-bottom: 12px;\n}\n.fd-margin-top[data-v-1a126d08] {\n  margin-top: 12px;\n}\n.fd-margin-bottom-zero[data-v-1a126d08] {\n  margin-bottom: 0;\n}\n.fd-textarea-box[data-v-1a126d08] {\n  overflow: auto;\n  height: 213px;\n  box-sizing: border-box;\n}\n.fd-textarea-box > textarea[data-v-1a126d08] {\n  border-color: transparent;\n}\n.fd-textarea-box > textarea[data-v-1a126d08]:hover {\n  box-shadow: none !important;\n}\n.fd-textarea-seprator[data-v-1a126d08] {\n  margin-top: 5px;\n  margin-left: 12px;\n  margin-right: 12px;\n  height: 1px;\n}\n.fd-warning-box[data-v-1a126d08] {\n  margin-bottom: 20px;\n  height: 120px;\n}\n.uk-textarea[data-v-1a126d08] {\n  box-shadow: none;\n}\n#fd-send-diagnostic[data-v-1a126d08] {\n  margin-top: 12px;\n}\n.fd-diagnistic-text p[data-v-1a126d08],\n.fd-diagnistic-text ul[data-v-1a126d08],\n.fd-diagnistic-text ol[data-v-1a126d08],\n.fd-diagnistic-text dl[data-v-1a126d08] {\n  margin: 0;\n}\n.fd-diagnistic-text li[data-v-1a126d08],\n.fd-diagnistic-text p.fd-margin-top[data-v-1a126d08] {\n  margin-top: 12px;\n}\n.fd-diagnistic-text ul[data-v-1a126d08] {\n  padding-inline-start: 20px;\n  padding-right: 20px;\n}\n#fd-diagnostic-list[data-v-1a126d08] {\n  list-style-type: initial;\n}\n","",{version:3,sources:["webpack://./app/renderer/pages/feedback/app.vue"],names:[],mappings:";AACA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;;;;EAIE,SAAS;AACX;AACA;;EAEE,gBAAgB;AAClB;AACA;EACE,0BAA0B;EAC1B,mBAAmB;AACrB;AACA;EACE,wBAAwB;AAC1B",sourcesContent:["\n.fd-margin-left[data-v-1a126d08] {\n  margin-left: 12px;\n}\n.fd-margin-bottom[data-v-1a126d08] {\n  margin-bottom: 12px;\n}\n.fd-margin-top[data-v-1a126d08] {\n  margin-top: 12px;\n}\n.fd-margin-bottom-zero[data-v-1a126d08] {\n  margin-bottom: 0;\n}\n.fd-textarea-box[data-v-1a126d08] {\n  overflow: auto;\n  height: 213px;\n  box-sizing: border-box;\n}\n.fd-textarea-box > textarea[data-v-1a126d08] {\n  border-color: transparent;\n}\n.fd-textarea-box > textarea[data-v-1a126d08]:hover {\n  box-shadow: none !important;\n}\n.fd-textarea-seprator[data-v-1a126d08] {\n  margin-top: 5px;\n  margin-left: 12px;\n  margin-right: 12px;\n  height: 1px;\n}\n.fd-warning-box[data-v-1a126d08] {\n  margin-bottom: 20px;\n  height: 120px;\n}\n.uk-textarea[data-v-1a126d08] {\n  box-shadow: none;\n}\n#fd-send-diagnostic[data-v-1a126d08] {\n  margin-top: 12px;\n}\n.fd-diagnistic-text p[data-v-1a126d08],\n.fd-diagnistic-text ul[data-v-1a126d08],\n.fd-diagnistic-text ol[data-v-1a126d08],\n.fd-diagnistic-text dl[data-v-1a126d08] {\n  margin: 0;\n}\n.fd-diagnistic-text li[data-v-1a126d08],\n.fd-diagnistic-text p.fd-margin-top[data-v-1a126d08] {\n  margin-top: 12px;\n}\n.fd-diagnistic-text ul[data-v-1a126d08] {\n  padding-inline-start: 20px;\n  padding-right: 20px;\n}\n#fd-diagnostic-list[data-v-1a126d08] {\n  list-style-type: initial;\n}\n"],sourceRoot:""}]);const o=r},65388:(t,e,a)=>{"use strict";a.r(e),a.d(e,{__esModule:()=>i.X,default:()=>n});var i=a(11918);var s=function(t){a(88326)};const n=(0,a(62236).Z)(i.Z,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-window uk-window-dialog",attrs:{id:"app"}},[a("div",{staticClass:"uk-window-title-bar"},[a("div",{staticClass:"uk-window-title"},[t._v("\n      "+t._s(t.$T("Feedback"))+"\n    ")]),t._v(" "),a("window-control-button-group")],1),t._v(" "),a("div",{staticClass:"uk-window-body uk-overflow-hidden"},[a("ul",{staticClass:"uk-tab uk-tab-capsule uk-tab-large uk-flex-center uk-margin-top fd-margin-bottom-zero",attrs:{"uk-tab":"connect: .main_content_switcher"}},[a("li",{staticClass:"uk-active",attrs:{"aria-expanded":"true"}},[a("a",{attrs:{draggable:"false",href:"#"},on:{click:function(e){t.activeTab="report"}}},[t._v(t._s(t.$T("Report a Problem")))])]),t._v(" "),a("li",{attrs:{"aria-expanded":"false"}},[a("a",{attrs:{draggable:"false",href:"#"},on:{click:function(e){t.activeTab="contact"}}},[t._v(t._s(t.$T("Contact Us")))])])]),t._v(" "),a("ul",{staticClass:"uk-switcher uk-padding main_content_switcher"},[a("li",{staticClass:"uk-active"},[a("div",{staticClass:"uk-margin uk-flex fd-margin-bottom"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.emailModel,expression:"emailModel"}],staticClass:"uk-input uk-width-expand",class:{"uk-form-danger":!t.isEmailValid},attrs:{type:"text",placeholder:t.$T("Email Address"),autofocus:!t.emailModel},domProps:{value:t.emailModel},on:{blur:t.validateEmail,input:function(e){e.target.composing||(t.emailModel=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.reporterModel,expression:"reporterModel"}],staticClass:"uk-input fd-margin-left",staticStyle:{width:"160px"},attrs:{type:"text",placeholder:t.$T("Name (Optional)")},domProps:{value:t.reporterModel},on:{input:function(e){e.target.composing||(t.reporterModel=e.target.value)}}})]),t._v(" "),a("div",{ref:"textareaBox",staticClass:"uk-form-input fd-textarea-box"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.feedbackModel,expression:"feedbackModel"}],ref:"textareaRef",staticClass:"uk-textarea",staticStyle:{height:"160px"},attrs:{placeholder:t.$T("If you have encountered software issues, or have software-related suggestion, please send us feedback with detailed description.")},domProps:{value:t.feedbackModel},on:{input:function(e){e.target.composing||(t.feedbackModel=e.target.value)}}}),t._v(" "),a("div",{staticClass:"uk-tab-divider fd-textarea-seprator"}),t._v(" "),a("div",{staticClass:"fd-attachment-box uk-margin uk-margin-small-top uk-margin-xsmall-bottom uk-flex uk-flex-middle fd-margin-left"},[a("div",{staticClass:"uk-form-custom"},[a("input",{attrs:{type:"file",onfocus:"this.blur()",onclick:"this.value=null;"},on:{change:t.attachFile}}),t._v(" "),a("button",{staticClass:"uk-button uk-button-icon uk-icon uk-flex-row-reverse uk-button-text",attrs:{"uk-icon":"attachment"}},[a("span",{staticClass:"uk-overflow-hidden uk-display-block uk-text-nowrap",staticStyle:{"text-overflow":"ellipsis","max-width":"400px","padding-top":"2px","padding-left":"2px"}},[t._v("\n                  "+t._s(t.fileName||t.$T("Attach file..."))+"\n                ")])])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isAttachmentSelected,expression:"isAttachmentSelected"}],staticClass:"uk-margin-small-left uk-button-icon",attrs:{"uk-icon":"icon: clear"},on:{click:t.removeAttachment}})])]),t._v(" "),a("div",{staticClass:"uk-flex  uk-width-1-1 uk-flex-middle",attrs:{id:"fd-send-diagnostic"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.isSendDiagnostic,expression:"isSendDiagnostic"}],staticClass:"uk-checkbox uk-flex-no-shrink uk-flex-no-grow uk-margin-remove-top",staticStyle:{outline:"none"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isSendDiagnostic)?t._i(t.isSendDiagnostic,null)>-1:t.isSendDiagnostic},on:{change:function(e){var a=t.isSendDiagnostic,i=e.target,s=!!i.checked;if(Array.isArray(a)){var n=t._i(a,null);i.checked?n<0&&(t.isSendDiagnostic=a.concat([null])):n>-1&&(t.isSendDiagnostic=a.slice(0,n).concat(a.slice(n+1)))}else t.isSendDiagnostic=s}}}),t._v(" "),a("span",{staticClass:"uk-margin-remove-bottom uk-margin-xsmall-left",on:{click:function(){return t.isSendDiagnostic=!t.isSendDiagnostic}}},[t._v(t._s(t.$T("Share Diagnostic Data")))]),t._v(" "),a("span",{staticClass:"uk-flex-no-shrink uk-flex-no-grow uk-margin-xsmall-left",staticStyle:{outline:"none"},attrs:{id:"fd-question","uk-icon":"icon: question"}}),t._v(" "),a("div",{staticStyle:{width:"340px"},attrs:{"uk-pop-tips":"","data-pos":"right-center","data-align-size":"false","data-z-index":"1000","data-target":"#fd-question [uk-popover]"}},[a("div",{staticClass:"fd-diagnistic-text uk-background-default uk-padding-medium uk-text-left",staticStyle:{"line-height":"14px"}},[a("p",{},[t._v("\n                "+t._s(t.$T("Diagnostic data helps XMind troubleshoot your problems and improve the product. Here is what data is collected and why:"))+"\n              ")]),t._v(" "),a("ul",{attrs:{id:"fd-diagnostic-list"}},[a("li",[a("p",[t._v("\n                    "+t._s(t.$T("XMind version and system information, e.g. the system is Windows, MacOS, or Linux. This is basic for understanding the specific environment where the problems/issues occur."))+"\n                  ")])]),t._v(" "),a("li",[a("p",[t._v("\n                    "+t._s(t.$T("Events in XMind. This includes what happened in XMind, e.g. a window was closed by user. It helps to analyze the reasons caused the problems/issues."))+"\n                  ")])]),t._v(" "),a("li",[a("p",[t._v("\n                    "+t._s(t.$T("Error message. This records detailed information of the error, e.g. which part of the program code the error occurred at."))+"\n                  ")])])]),t._v(" "),a("p",{staticClass:"fd-margin-top"},[t._v("\n                "+t._s(t.$T("The collected information is basic, but sometimes the username of your system and the file paths accessed by XMind may be collected as well. They are usually recorded in error message."))+"\n              ")])])])]),t._v(" "),a("SupportCenterTemplate"),t._v(" "),a("div",{staticClass:"uk-margin-small-top uk-flex"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.isOversize||t.error,expression:"isOversize || error"}],staticClass:"uk-preserve uk-margin-xsmall-right",staticStyle:{"margin-top":"-1px"},attrs:{"data-src":t.iconWarning,"uk-svg":""}}),t._v(" "),a("span",{staticClass:"uk-text-muted"},[t._v("\n            "+t._s(t.isOversize?t.$T("File size cannot exceed 20MB."):"")+"\n          ")]),t._v(" "),a("span",{staticClass:"uk-text-muted"},[t._v("\n            "+t._s(t.error?t.$T("Sending Failed, please try again later."):"")+"\n          ")])])],1),t._v(" "),a("li",{staticClass:"uk-panel-scrollable uk-padding-remove"},[a("div",{staticClass:"uk-child-separator uk-text-center"},[a("div",{staticClass:"uk-padding uk-panel"},[a("div",{staticClass:"uk-margin-auto uk-flex uk-flex-middle",staticStyle:{width:"200px"}},[a("div",{staticClass:"uk-background-contain",staticStyle:{width:"24px",height:"24px"},attrs:{"data-src":t.$toResourceURL("static/images/feedback-email-icon.svg"),"uk-img":""}}),t._v(" "),a("a",{staticClass:"uk-margin-large-left uk-button uk-button-link",attrs:{draggable:"false",href:"mailto:"+t.vanaEmail,target:"_blank"}},[t._v(t._s(t.vanaEmail))])])]),t._v(" "),t.isChinaArea?t._e():a("div",{staticClass:"uk-padding uk-panel"},[a("div",{staticClass:"uk-margin-auto uk-flex uk-flex-middle",staticStyle:{width:"200px"}},[a("div",{staticClass:"uk-background-contain",staticStyle:{width:"24px",height:"24px"},attrs:{"data-src":t.$toResourceURL("static/images/feedback-facebook-icon.svg"),"uk-img":""}}),t._v(" "),a("a",{staticClass:"uk-margin-large-left uk-button uk-button-link",attrs:{draggable:"false",href:"https://facebook.com/xmind.net",target:"_blank"}},[t._v("facebook.com/xmind.net")])])]),t._v(" "),t.isChinaArea?t._e():a("div",{staticClass:"uk-padding uk-panel"},[a("div",{staticClass:"uk-margin-auto uk-flex uk-flex-middle",staticStyle:{width:"200px"}},[a("div",{staticClass:"uk-background-contain",staticStyle:{width:"24px",height:"24px"},attrs:{"data-src":t.$toResourceURL("static/images/feedback-twitter-icon.svg"),"uk-img":""}}),t._v(" "),a("a",{staticClass:"uk-margin-large-left uk-button uk-button-link",attrs:{draggable:"false",href:"https://twitter.com/xmind",target:"_blank"}},[t._v("twitter.com/xmind")])])]),t._v(" "),t.isChinaArea?a("div",{staticClass:"uk-padding uk-panel"},[a("div",{staticClass:"uk-margin-auto uk-flex uk-flex-middle",staticStyle:{width:"200px"}},[a("div",{staticClass:"uk-background-contain",staticStyle:{width:"24px",height:"24px"},attrs:{"data-src":t.$toResourceURL("static/images/feedback-wechat-icon.svg"),"uk-img":""}}),t._v(" "),a("div",{staticClass:"uk-width-expand uk-flex"},[a("div",{staticClass:"uk-background-contain uk-margin-large-left",staticStyle:{width:"140px",height:"140px"},attrs:{"data-src":t.$toResourceURL("static/images/feedback-qrcode.jpg"),"uk-img":""}})])])]):t._e()])])])]),t._v(" "),a("ul",{staticClass:"uk-switcher uk-window-button-bar main_content_switcher"},[a("li",{staticClass:"uk-button-group uk-active"},[a("button",{staticClass:"uk-button uk-button-primary",attrs:{disabled:t.isSendDisabled},on:{click:t.send}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.isSending,expression:"isSending"}],staticClass:"uk-margin-small-right",attrs:{"uk-spinner":"ratio: 0.6"}}),t._v(" "),t.isSendDiagnostic?a("span",[t._v(t._s(t.$T("Send (with Diagnostic Data)")))]):a("span",[t._v(t._s(t.$T("Send")))])]),t._v(" "),a("button",{staticClass:"uk-button uk-button-default",on:{click:t.cancel}},[t._v("\n        "+t._s(t.$T("Cancel"))+"\n      ")])]),t._v(" "),a("li",{staticClass:"uk-button-group"},[a("button",{staticClass:"uk-button uk-button-default",on:{click:t.cancel}},[t._v("\n        "+t._s(t.$T("Cancel"))+"\n      ")])])])])}),[],!1,s,"data-v-1a126d08",null).exports},88326:(t,e,a)=>{var i=a(59140);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,a(45346).Z)("a9d93204",i,!0,{})},76417:t=>{"use strict";t.exports=require("crypto")},58933:t=>{"use strict";t.exports=require("electron")},28614:t=>{"use strict";t.exports=require("events")},35747:t=>{"use strict";t.exports=require("fs")},12087:t=>{"use strict";t.exports=require("os")},85622:t=>{"use strict";t.exports=require("path")},87525:t=>{"use strict";t.exports=require("posthtml")},71191:t=>{"use strict";t.exports=require("querystring")},31669:t=>{"use strict";t.exports=require("util")}},t=>{"use strict";t.O(0,[8592,5586,4736,2872],(()=>{return e=1097,t(t.s=e);var e}));var e=t.O();module.exports=e}]);