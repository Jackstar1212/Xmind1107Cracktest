(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[6943],{67803:(e,t,a)=>{"use strict";var n=a(95318),s=n(a(2872)),r=n(a(33762));(0,s.default)(r.default,{name:"dialog-auto-updater"})},70570:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(94015),s=a.n(n),r=a(23645),o=a.n(r)()(s());o.push([e.id,"\n#app[data-v-33037e14] {\n  overflow: hidden;\n}\n[data-v-33037e14] .title {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 25px;\n}\n[data-v-33037e14] .title-middle {\n  margin: 24px 0 0 24px;\n}\n[data-v-33037e14] .title-top {\n  padding: 40px 0 16px 0;\n  text-align: center;\n}\n[data-v-33037e14] .desc-content {\n  margin: 8px 24px 0 24px;\n}\n[data-v-33037e14] .auto-updater-progress {\n  margin: 0;\n  height: 6px;\n}\n[data-v-33037e14] .auto-install-checkbox {\n  margin-bottom: 22px;\n}\n[data-v-33037e14] .action-area {\n  padding: 0 24px 24px 24px;\n}\n[data-v-33037e14] .update-desc {\n  height: 390px;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  border-color: #e8e8e8;\n}\n","",{version:3,sources:["webpack://./app/renderer/pages/dialog-auto-updater/app.vue"],names:[],mappings:";AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,SAAS;EACT,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,wBAAwB;EACxB,qBAAqB;AACvB",sourcesContent:["\n#app[data-v-33037e14] {\n  overflow: hidden;\n}\n[data-v-33037e14] .title {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 25px;\n}\n[data-v-33037e14] .title-middle {\n  margin: 24px 0 0 24px;\n}\n[data-v-33037e14] .title-top {\n  padding: 40px 0 16px 0;\n  text-align: center;\n}\n[data-v-33037e14] .desc-content {\n  margin: 8px 24px 0 24px;\n}\n[data-v-33037e14] .auto-updater-progress {\n  margin: 0;\n  height: 6px;\n}\n[data-v-33037e14] .auto-install-checkbox {\n  margin-bottom: 22px;\n}\n[data-v-33037e14] .action-area {\n  padding: 0 24px 24px 24px;\n}\n[data-v-33037e14] .update-desc {\n  height: 390px;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  border-color: #e8e8e8;\n}\n"],sourceRoot:""}]);const i=o},59002:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(94015),s=a.n(n),r=a(23645),o=a.n(r)()(s());o.push([e.id,"\n.progress-wrapper[data-v-ce8a3f14] {\n  position: relative;\n  margin: 32px 24px 0 24px;\n  overflow: hidden;\n  border-radius: 6px;\n  height: 6px;\n}\n@keyframes indeterminate-data-v-ce8a3f14 {\n0% {\n    transform: translateX(-140px);\n}\n100% {\n    transform: translateX(540px);\n}\n}\n.indeter-bar[data-v-ce8a3f14] {\n  position: absolute;\n  z-index: 1032;\n  top: 0;\n  left: 0;\n  width: 140px;\n  height: 100%;\n  border-radius: 6px;\n  background: #0f66de;\n  animation: indeterminate-data-v-ce8a3f14 1800ms infinite ease-in;\n}\n.bar-bg[data-v-ce8a3f14] {\n  position: absolute;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #e8e8e8;\n}\n","",{version:3,sources:["webpack://./app/renderer/pages/dialog-auto-updater/checking.vue"],names:[],mappings:";AACA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;AACA;AACA;IACI,6BAA6B;AACjC;AACA;IACI,4BAA4B;AAChC;AACA;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,MAAM;EACN,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,gEAAgE;AAClE;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB",sourcesContent:["\n.progress-wrapper[data-v-ce8a3f14] {\n  position: relative;\n  margin: 32px 24px 0 24px;\n  overflow: hidden;\n  border-radius: 6px;\n  height: 6px;\n}\n@keyframes indeterminate-data-v-ce8a3f14 {\n0% {\n    transform: translateX(-140px);\n}\n100% {\n    transform: translateX(540px);\n}\n}\n.indeter-bar[data-v-ce8a3f14] {\n  position: absolute;\n  z-index: 1032;\n  top: 0;\n  left: 0;\n  width: 140px;\n  height: 100%;\n  border-radius: 6px;\n  background: #0f66de;\n  animation: indeterminate-data-v-ce8a3f14 1800ms infinite ease-in;\n}\n.bar-bg[data-v-ce8a3f14] {\n  position: absolute;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #e8e8e8;\n}\n"],sourceRoot:""}]);const i=o},22765:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(94015),s=a.n(n),r=a(23645),o=a.n(r)()(s());o.push([e.id,"\n.progress-wrapper[data-v-d4aec7ce] {\n  margin: 0 24px 43px 24px;\n}\n[data-v-d4aec7ce]::-webkit-progress-value {\n  background-color: #0f66de;\n  border-radius: 6px;\n}\n[data-v-d4aec7ce]::-webkit-progress-bar {\n  background-color: #dbdbdb;\n  border-radius: 6px;\n}\n","",{version:3,sources:["webpack://./app/renderer/pages/dialog-auto-updater/downloading.vue"],names:[],mappings:";AACA;EACE,wBAAwB;AAC1B;AACA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,kBAAkB;AACpB",sourcesContent:["\n.progress-wrapper[data-v-d4aec7ce] {\n  margin: 0 24px 43px 24px;\n}\n[data-v-d4aec7ce]::-webkit-progress-value {\n  background-color: #0f66de;\n  border-radius: 6px;\n}\n[data-v-d4aec7ce]::-webkit-progress-bar {\n  background-color: #dbdbdb;\n  border-radius: 6px;\n}\n"],sourceRoot:""}]);const i=o},36945:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setWindowSize=t.useWaitForInstalled=t.useAutoChecked=void 0;const n=a(67930),s=a(90571);t.useAutoChecked=function(e){const t=s.ref(e.state.autoUpdater.userConfig.autoChecked);return s.watch(t,(t=>{t||e.commit("autoUpdater/setAction",{type:n.AutoUpdaterAction.UPDATE_AUTO_CHECKED,payload:!1})}),{lazy:!0}),{checked:t,trySetAutoUpdateType:function(){t.value&&e.commit("preferences/updatePreferences",{autoUpdateType:"auto"})}}},t.useWaitForInstalled=function(e){let t=null;const a=new Promise((e=>{t=e})),r=s.watch((()=>e.state.autoUpdater.status),(e=>{e===n.AutoUpdaterStatus.INSTALLED&&(t(),r())}));return{whenInstalled:a}};const r={small:[540,371],big:[640,570]};t.setWindowSize=function(e,t){const[a,n]=r[t];e.handleCommand("setWindowSize",{id:window.id,width:a,height:n})}},62647:function(e,t,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const o=a(20629),i=a(67930),u=a(90571);t.default=u.createComponent({components:{checking:()=>Promise.resolve().then((()=>r(a(57156)))),error:()=>Promise.resolve().then((()=>r(a(83308)))),"update-available":()=>Promise.resolve().then((()=>r(a(21852)))),"update-unavailable":()=>Promise.resolve().then((()=>r(a(33068)))),downloading:()=>Promise.resolve().then((()=>r(a(55899)))),downloaded:()=>Promise.resolve().then((()=>r(a(17616))))},computed:Object.assign(Object.assign({},o.mapState("autoUpdater",["status"])),{componentId(){switch(this.status){case"":case i.AutoUpdaterStatus.UNCHECKED:case i.AutoUpdaterStatus.CHECKING:return"checking";case i.AutoUpdaterStatus.DOWNLOAD_FAILED:case i.AutoUpdaterStatus.CHECK_FAILED:return"error";case i.AutoUpdaterStatus.UPDATE_AVAILABLE:return"update-available";case i.AutoUpdaterStatus.UPDATE_UNAVAILABLE:return"update-unavailable";case i.AutoUpdaterStatus.DOWNLOADING:return"downloading";case i.AutoUpdaterStatus.DOWNLOADED:case i.AutoUpdaterStatus.INSTALLING:case i.AutoUpdaterStatus.INSTALLED:return"downloaded";default:throw new Error("status unavailable")}}})})},61009:(e,t,a)=>{"use strict";Object.defineProperty(t,"X",{value:!0});const n=a(90571),s=a(53305),r=a(36945);t.Z=n.createComponent({setup(e,t){const a=t.root.$store;return r.setWindowSize(a,"small"),{imageURL:s.toURL("static/assets/images/auto-updater/checking.svg")}}})},18978:function(e,t,a){"use strict";var n=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function o(e){try{u(n.next(e))}catch(e){r(e)}}function i(e){try{u(n.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}u((n=n.apply(e,t||[])).next())}))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(90571),o=a(36945),i=a(67930),u=s(a(71892)),c=a(83450);t.default=r.createComponent({components:{UpdateDesc:u.default},setup(e,t){const a=t.root.$store;o.setWindowSize(a,"big");const s=a.state.autoUpdater.openedByUser;let u=r.ref(!1),l=r.ref(!1),d=r.ref(!1);const{checked:p,trySetAutoUpdateType:A}=o.useAutoChecked(a),{whenInstalled:v}=o.useWaitForInstalled(a);function f(){s||A()}function k(e){setTimeout((()=>n(this,void 0,void 0,(function*(){yield e(),window.close()}))))}return{skip:function(){const e=a.state.autoUpdater.version.url||"";k((()=>{a.commit("autoUpdater/setAction",{type:i.AutoUpdaterAction.SKIP_VERSION,payload:e}),c.trackEvent({eventAction:"updateReminder",eventName:"skipUpdate"})}))},checked:p,openedByUser:s,installNext:function(){f(),k((()=>(l.value=!0,u.value=!0,a.commit("autoUpdater/setAction",{type:i.AutoUpdaterAction.INSTALL_NEXT_TIME}),c.trackEvent({eventAction:"updateReminder",eventName:"installNextLaunch"}),v)))},installNow:function(){f(),k((()=>(d.value=!0,u.value=!0,a.commit("autoUpdater/setAction",{type:i.AutoUpdaterAction.INSTALL_NOW}),c.trackEvent({eventAction:"updateReminder",eventName:"installNow"}),v)))},isWaitingForInstall:u,installRelaunchClicked:l,installNowClicked:d}}})},19115:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(90571),r=a(36945),o=n(a(71892));t.default=s.createComponent({components:{UpdateDesc:o.default},setup(e,t){const a=t.root.$store;r.setWindowSize(a,"big");return{current:s.computed((()=>a.state.autoUpdater.currentDownload)),total:s.computed((()=>a.state.autoUpdater.totalDownload))}}})},43174:(e,t,a)=>{"use strict";Object.defineProperty(t,"X",{value:!0});const n=a(90571),s=a(53305),r=a(36945),o=a(67930);t.Z=n.createComponent({setup(e,t){const a=t.root.$store;return r.setWindowSize(a,"small"),{imageURL:s.toURL("static/assets/images/auto-updater/error.svg"),retry:function(){a.commit("autoUpdater/setAction",{type:o.AutoUpdaterAction.RETRY})}}}})},91692:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(90571),r=a(36945),o=a(67930),i=n(a(71892));t.default=s.createComponent({components:{UpdateDesc:i.default},setup(e,t){const a=t.root.$store,n=a.state.autoUpdater.userConfig,s=a.state.autoUpdater.version,{checked:i,trySetAutoUpdateType:u}=r.useAutoChecked(a);return r.setWindowSize(a,"big"),{checked:i,userConfig:n,version:s,update:function(){u(),a.commit("autoUpdater/setAutoInstall"),setTimeout((()=>a.commit("autoUpdater/setAction",{type:o.AutoUpdaterAction.DOWNLOAD,payload:s.url})))}}}})},62133:(e,t,a)=>{"use strict";Object.defineProperty(t,"X",{value:!0});const n=a(90571);t.Z=n.createComponent({setup:(e,t)=>({updateDescPath:`file://${t.root.$store.state.autoUpdater.version.updateDescPath}/index.html`})})},23563:(e,t,a)=>{"use strict";Object.defineProperty(t,"X",{value:!0});const n=a(90571),s=a(53305),r=a(36945);t.Z=n.createComponent({setup(e,t){const a=t.root.$store;return r.setWindowSize(a,"small"),{iconURL:s.toURL("static/assets/images/auto-updater/update-unavailable.svg"),ok:function(){window.close()}}}})},33762:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(62647),s=a.n(n),r={};for(const e in n)"default"!==e&&(r[e]=()=>n[e]);a.d(t,r);var o=a(22094);var i=function(e){a(21827)};const u=(0,a(62236).Z)(s(),o.s,o.x,!1,i,"data-v-33037e14",null).exports},57156:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__esModule:()=>n.X,default:()=>r});var n=a(61009);var s=function(e){a(49475)};const r=(0,a(62236).Z)(n.Z,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"uk-preserve",attrs:{draggable:"false","data-src":e.imageURL,"uk-svg":""}}),e._v(" "),a("div",{staticClass:"title title-middle"},[e._v("\n    "+e._s(e.$T("Checking for Update"))+"\n  ")]),e._v(" "),e._m(0)])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"progress-wrapper"},[a("div",{staticClass:"ui-progress"},[a("div",{staticClass:"indeter-bar"}),e._v(" "),a("div",{staticClass:"bar-bg uk-background-default"})])])}],!1,s,"data-v-ce8a3f14",null).exports},17616:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(18978),s=a.n(n),r={};for(const e in n)"default"!==e&&(r[e]=()=>n[e]);a.d(t,r);var o=a(57257);const i=(0,a(62236).Z)(s(),o.s,o.x,!1,null,null,null).exports},55899:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(19115),s=a.n(n),r={};for(const e in n)"default"!==e&&(r[e]=()=>n[e]);a.d(t,r);var o=a(41333);var i=function(e){a(6767)};const u=(0,a(62236).Z)(s(),o.s,o.x,!1,i,"data-v-d4aec7ce",null).exports},83308:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__esModule:()=>n.X,default:()=>s});var n=a(43174);const s=(0,a(62236).Z)(n.Z,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-height-1-1 uk-flex uk-flex-column uk-flex-between"},[a("div",[a("div",{staticClass:"uk-preserve",attrs:{draggable:"false","data-src":e.imageURL,"uk-svg":""}}),e._v(" "),a("div",{staticClass:"title title-middle"},[e._v("\n      "+e._s(e.$T("Update is Interrupted"))+"\n    ")]),e._v(" "),a("div",{staticClass:"desc-content"},[e._v("\n      "+e._s(e.$T("Some problems occur due to unstable network or server."))+"\n    ")])]),e._v(" "),a("div",{staticClass:"action-area uk-flex uk-flex-right"},[a("button",{staticClass:"uk-button uk-button-default",on:{click:e.retry}},[e._v("\n      "+e._s(e.$T("Retry"))+"\n    ")])])])}),[],!1,null,null,null).exports},21852:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(91692),s=a.n(n),r={};for(const e in n)"default"!==e&&(r[e]=()=>n[e]);a.d(t,r);var o=a(81751);const i=(0,a(62236).Z)(s(),o.s,o.x,!1,null,null,null).exports},71892:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__esModule:()=>n.X,default:()=>s});var n=a(62133);const s=(0,a(62236).Z)(n.Z,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"update-desc"},[a("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.updateDescPath,frameborder:"0"}})])}),[],!1,null,null,null).exports},33068:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__esModule:()=>n.X,default:()=>s});var n=a(23563);const s=(0,a(62236).Z)(n.Z,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-height-1-1 uk-flex uk-flex-column uk-flex-between"},[a("div",[a("div",{staticClass:"uk-preserve",attrs:{draggable:"false","data-src":e.iconURL,"uk-svg":""}}),e._v(" "),a("div",{staticClass:"title title-middle"},[e._v("\n      "+e._s(e.$T("Your XMind is Up to Date"))+"\n    ")]),e._v(" "),a("div",{staticClass:"desc-content"},[e._v("\n      "+e._s(e.$T("Last checked:")+" "+(new Date).toLocaleString())+"\n    ")])]),e._v(" "),a("div",{staticClass:"action-area uk-flex uk-flex-right"},[a("button",{staticClass:"uk-button uk-button-default",on:{click:e.ok}},[e._v("\n      "+e._s(e.$T("OK"))+"\n    ")])])])}),[],!1,null,null,null).exports},81751:(e,t,a)=>{"use strict";a.d(t,{s:()=>n,x:()=>s});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-height-1-1 uk-flex uk-flex-column uk-flex-between"},[a("div",[a("div",{staticClass:"title title-top"},[e._v("\n      "+e._s(e.$T("New Version Available"))+"\n    ")]),e._v(" "),a("update-desc")],1),e._v(" "),a("div",{staticClass:"action-area"},[a("div",{staticClass:"auto-install-checkbox"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"uk-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var a=e.checked,n=t.target,s=!!n.checked;if(Array.isArray(a)){var r=e._i(a,null);n.checked?r<0&&(e.checked=a.concat([null])):r>-1&&(e.checked=a.slice(0,r).concat(a.slice(r+1)))}else e.checked=s}}}),e._v("\n        "+e._s(e.$T("Automatically install future updates"))+"\n      ")])]),e._v(" "),a("div",{staticClass:"uk-flex uk-flex-right"},[a("button",{staticClass:"uk-button uk-button-primary",on:{click:e.update}},[e._v("\n        "+e._s(e.$T("Update Now")+" ("+e.version.updateSize+"MB)")+"\n      ")])])])])},s=[]},22094:(e,t,a)=>{"use strict";a.d(t,{s:()=>n,x:()=>s});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-window uk-window-dialog uk-window-default",attrs:{id:"app"}},[a("div",{staticClass:"uk-window-title-bar uk-window-title-bar-floating"},[a("window-control-button-group")],1),e._v(" "),a(e.componentId,{tag:"component"})],1)},s=[]},57257:(e,t,a)=>{"use strict";a.d(t,{s:()=>n,x:()=>s});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-height-1-1 uk-flex uk-flex-column uk-flex-between"},[a("div",[a("div",{staticClass:"title title-top"},[e._v("\n      "+e._s(e.$T("Your Update is Ready to Install"))+"\n    ")]),e._v(" "),a("update-desc")],1),e._v(" "),e.openedByUser?a("div",{staticClass:"action-area"},[a("div",{staticClass:"uk-flex uk-flex-right"},[a("button",{staticClass:"uk-button uk-button-primary",attrs:{disabled:e.installNowClicked},on:{click:e.installNow}},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.installNowClicked&&e.isWaitingForInstall,expression:"installNowClicked && isWaitingForInstall"}],attrs:{"uk-spinner":"ratio: 0.6"}}),e._v("\n        "+e._s(e.$T("Relaunch to Install"))+"\n      ")])])]):a("div",{staticClass:"action-area"},[a("div",{staticClass:"auto-install-checkbox"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"uk-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var a=e.checked,n=t.target,s=!!n.checked;if(Array.isArray(a)){var r=e._i(a,null);n.checked?r<0&&(e.checked=a.concat([null])):r>-1&&(e.checked=a.slice(0,r).concat(a.slice(r+1)))}else e.checked=s}}}),e._v("\n        "+e._s(e.$T("Automatically install future updates"))+"\n      ")])]),e._v(" "),a("div",{staticClass:"uk-flex uk-flex-between"},[a("div",[a("button",{staticClass:"uk-button uk-button-link",on:{click:e.skip}},[e._v("\n          "+e._s(e.$T("Skip this version"))+"\n        ")])]),e._v(" "),a("div",[a("button",{staticClass:"uk-button uk-button-default",attrs:{disabled:e.installRelaunchClicked},on:{click:e.installNext}},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.installRelaunchClicked&&e.isWaitingForInstall,expression:"installRelaunchClicked && isWaitingForInstall"}],attrs:{"uk-spinner":"ratio: 0.6"}}),e._v("\n          "+e._s(e.$T("Install on Next Launch"))+"\n        ")]),e._v(" "),a("button",{staticClass:"uk-button uk-button-primary",attrs:{disabled:e.installNowClicked},on:{click:e.installNow}},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.installNowClicked&&e.isWaitingForInstall,expression:"installNowClicked && isWaitingForInstall"}],attrs:{"uk-spinner":"ratio: 0.6"}}),e._v("\n          "+e._s(e.$T("Install Now"))+"\n        ")])])])])])},s=[]},41333:(e,t,a)=>{"use strict";a.d(t,{s:()=>n,x:()=>s});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-height-1-1 uk-flex uk-flex-column uk-flex-between"},[a("div",[a("div",{staticClass:"title title-top"},[e._v("\n      "+e._s(e.$T("Downloading Update"))+"\n    ")]),e._v(" "),a("update-desc")],1),e._v(" "),a("div",{staticClass:"progress-wrapper"},[a("progress",{staticClass:"uk-progress auto-updater-progress",attrs:{max:e.total},domProps:{value:e.current}})])])},s=[]},21827:(e,t,a)=>{var n=a(70570);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,a(45346).Z)("da9b5e84",n,!0,{})},49475:(e,t,a)=>{var n=a(59002);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,a(45346).Z)("00bc934b",n,!0,{})},6767:(e,t,a)=>{var n=a(22765);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,a(45346).Z)("9da832b8",n,!0,{})},76417:e=>{"use strict";e.exports=require("crypto")},58933:e=>{"use strict";e.exports=require("electron")},28614:e=>{"use strict";e.exports=require("events")},35747:e=>{"use strict";e.exports=require("fs")},12087:e=>{"use strict";e.exports=require("os")},85622:e=>{"use strict";e.exports=require("path")},87525:e=>{"use strict";e.exports=require("posthtml")},71191:e=>{"use strict";e.exports=require("querystring")},31669:e=>{"use strict";e.exports=require("util")}},e=>{"use strict";e.O(0,[8592,5586,4736,2872],(()=>{return t=67803,e(e.s=t);var t}));var t=e.O();module.exports=t}]);