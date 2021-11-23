(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[9011],{75098:(e,t,i)=>{"use strict";var n=i(95318);Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var a=n(i(71191)),s=n(i(19755)),r=i(90336),o=i(99492),l=i(48932),c=n(i(24678)),u=i(53305),d=i(24092),p=i(83450),g=i(2177),h=n(i(7322));const m="saveAsPdf",k="systemPrinter",f="win32"===(0,d.getPlatform)(),v={copies:"1",content:"currentMap",orientation:"landscape",pageSetup:{background:!0},margins:{top:10,bottom:10,left:10,right:10},pageSize:{x:210,y:297},scale:"fitMap",sides:"one-sided"},b=a.default.parse(location.search.slice(1));var w={name:"Print",mixins:[h.default],data:function(){return{isOutlineMode:!1,settings:v,margins:"Normal",allPreviews:[],currentIndex:0,supportedPageSizes:["8.5*13","Envelope #10","A3","A4","A5","B5","Envelope C5","Envelope DL","JIS B5","ROC 16K","Postcard","Postcard Double Long Edge","Envelop Monarch","US Letter","US Legal","Executive"],printerIndex:0,contentIndex:0,pageSizeIndex:f?0:3,actualSizeBoolean:!1,fitMapBoolean:!0,scale:v.scale,nothing:0,imageData:[],platform:(0,d.getPlatform)(),landscapeIconUrl:(0,u.toURL)("static/images/print-landscape.svg"),portraitIconUrl:(0,u.toURL)("static/images/print-portrait.svg"),backgroundColor:""}},computed:{validSubState:{get(){return this.$store.getters["activation/status"]===l.ACTIVATION_STATUS.VALID},set(){throw new Error("Not allow set subState.")}},contentTypes(){return[this.$T("Current Map"),this.$T("Whole Workbook")]},touchBarItems(){return[{type:"space",size:"flexible"},{type:"button",label:this.$T("Cancel"),click:"close"},{type:"button",label:this.primaryBtnText,backgroundColor:"primary",click:"clickPrint"},{type:"space",size:"flexible"}].filter(Boolean)},primaryBtnText:function(){return this.printer.id===m?this.$T("Save"):this.$T("Print")},rangeText:function(){return`${this.currentIndex} / ${this.allPreviews.length}`},naviLeftClass:function(){return"xmodal-preview-navi-left"+(this.currentIndex>1?"":"-disabled")},naviRightClass:function(){return"xmodal-preview-navi-right"+(this.currentIndex<this.allPreviews.length?"":"-disabled")},recentPrinters:function(){let e=[];return e&&"string"==typeof e&&(e=JSON.parse(e)),e&&Array.isArray(e)?e.length&&1!=e.length?(e=e.length&&e.reduce(((e,t)=>(Array.isArray(e)||(e=[e]),-1==e.map((e=>e.name)).indexOf(t.name)&&e.push(t),e))),e||[]):e:[]},scanedPrinters:function(){return(0,g.getCurrentSupportedPrinters)().concat([{name:this.$T("Save as PDF"),id:m},{name:this.$T("Print via System"),id:k}])},currentPrinterName(){const e=this.scanedPrinters[this.printerIndex]||{};return e.description||e.name},currentContentTypeName(){return this.contentTypes[this.contentIndex]},currentSupportedSizeName(){return this.supportedPageSizes[this.pageSizeIndex]},previewBorderStyle:function(){let e,t,i,n={};i=this.marginNumber;const a=this.getPreviewSize();return e=a.width,t=a.height,i&&e&&t&&(e-=2*i,t-=2*i,n.width=e+"px",n.height=t+"px"),n},previewBorderBackground:function(){let e={};return e.backgroundColor=this.settings.pageSetup.background&&this.backgroundColor?this.backgroundColor:"#ffffff",e},previewHtml:function(){return this.currentIndex&&this.allPreviews.length>0?`data:image/svg+xml;utf8,${encodeURIComponent(this.allPreviews[this.currentIndex-1])}`:""},marginNumber:function(){switch(this.margins){case"Normal":return 10;case"Nar":return 5;default:return 10}},printer:function(){return this.scanedPrinters[this.printerIndex]},pageSize:function(){return this.supportedPageSizes[this.pageSizeIndex]}},watch:{"settings.content":function(e){"workbook"==e&&"multiPage"==this.settings.pages&&(this.settings.pages="singlePage")},"settings.pageSetup.background":function(e,t){e!=t&&this.$safeRun((()=>Promise.all(this.sheetIds.map((t=>c.default.fetch((0,o.EDITOR_GET_SHEET_PREVIEW_IMAGE_DATA)(this.editorId),{exportImageOptions:{noBackground:!e},sheetId:t})))).then((e=>{this.imageData=e}))))},"settings.orientation":function(){this.loadPreview()},imageData:function(){this.loadPreview()},printer:function(e){e.id===k&&setTimeout((()=>this._openSystemPrint()))},contentIndex:function(e){this.settings.content=["currentMap","workbook"][e],this.loadPreview()},pageSizeIndex:function(){this.loadPreview()},scale:function(e){this.settings.scale=e,this.loadPreview()},actualSizeBoolean:function(e){this.fitMapBoolean==this.actualSizeBoolean&&(this.fitMapBoolean=!this.actualSizeBoolean),e&&(this.settings.scale="actualSize"),this.loadPreview()},fitMapBoolean:function(e){this.fitMapBoolean==this.actualSizeBoolean&&(this.actualSizeBoolean=!this.fitMapBoolean),e&&(this.settings.scale="fitMap"),this.loadPreview()},allPreviews:function(){this.currentIndex=1}},mounted:function(){this.backgroundColor=b.backgroundColor,this.currentSheetEditorIndex=b.currentSheetEditorIndex,this.editorId=b.editorId,this.sheetIds=Array.isArray(b.targetSheetId)?b.targetSheetId:[b.targetSheetId],this.isOutlineMode=this.$store.state[r.SHARED].editorMode===l.EDITOR_MODE_OUTLINER,this.isOutlineMode?(this.settings.orientation="portrait",this.shrinkDialog()):(this.$safeRun((()=>Promise.all(this.sheetIds.map((e=>c.default.fetch((0,o.EDITOR_GET_SHEET_PREVIEW_IMAGE_DATA)(this.editorId),{exportImageOptions:{noBackground:!this.settings.pageSetup.background},sheetId:e})))).then((e=>{this.imageData=e,this.settings.orientation=this.imageData[0].height>this.imageData[0].width?"portrait":"landscape",this.loadPreview()})))),this.getDeviceDPI())},components:{WatermarkTemplate:{render(e){const t=this.$T("activating XMind"),i=this.$T("Watermark will be displayed before $1.",t),n=e("span",{class:"uk-button-link",on:{click:()=>c.default.fetch(o.WINDOW_OPEN,{name:"dialog-activate"})}},t),a=i.split(t).map((t=>e("span",t)));return e("div",{class:"uk-text-muted"},[a[0],n,a[1]])}}},methods:{handleActivate(){c.default.fetch(o.WINDOW_OPEN,{name:"dialog-activate"})},close(){window.close()},_openSystemPrint(){this.settings.useSelectedPrinter=!1,this.settings.saveAsPdf=!1,this.doPrint()},clickPrint(){this.printer&&this.printer.name&&(this.printer.id===m?(this.pdfAsPrinter(),(0,p.trackEvent)({eventCategory:"Share",eventAction:"printToPdf",eventValue:1})):this.pageSize&&(this.settings.selectedPrinter=this.printer,this.settings.useSelectedPrinter=!0,this.doPrint(),(0,p.trackEvent)({eventCategory:"Share",eventAction:"printToPrinter",eventValue:1})))},doPrint(){this.parsePageSize(),this.$safeRun((async()=>{await c.default.fetch((0,o.WINDOW_SUBMIT_RESULT)(window.id),{action:"finish",settings:this.settings}),window.close()}))},pdfAsPrinter(){this.settings.useSelectedPrinter=!1,this.settings.saveAsPdf=!0,this.doPrint()},getDeviceDPI(){if(!window.xdeviceDPI)if(window.screen.deviceXDPI&&window.screen.deviceYDPI)window.xdeviceDPI=[window.screen.deviceXDPI,window.screen.deviceYDPI];else{var e=document.createElement("div");e.style.cssText="width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden",document.body.appendChild(e),window.xdeviceDPI=[parseInt(e.offsetWidth),parseInt(e.offsetHeight)],e.parentNode.removeChild(e)}},getPreviewSize(){let e,t;if("landscape"==this.settings.orientation)switch(e=297,this.pageSize){case"8.5*13":t=194;break;case"Envelope #10":t=124;break;case"A3":case"A4":case"A5":case"JIS B5":case"B5 JIS":t=210;break;case"B5":case"Postcard Double Long Edge":t=214;break;case"Envelope C5":t=211;break;case"Envelope DL":t=248;break;case"ROC 16K":t=218;break;case"Postcard":t=201;break;case"Envelop Monarch":t=156;break;case"US Letter":t=230;break;case"US Legal":t=178;break;case"Executive":t=207;break;default:t=210}else if("portrait"==this.settings.orientation)switch(t=297,this.pageSize){case"8.5*13":e=194;break;case"Envelope #10":e=124;break;case"A3":case"A4":case"A5":case"JIS B5":case"B5 JIS":e=210;break;case"B5":case"Postcard Double Long Edge":e=214;break;case"Envelope C5":e=211;break;case"Envelope DL":e=248;break;case"ROC 16K":e=218;break;case"Postcard":e=201;break;case"Envelop Monarch":e=156;break;case"US Letter":e=230;break;case"US Legal":e=178;break;case"Executive":e=207;break;default:e=210}return{width:e,height:t}},_loadPreview(){const e=[];if(!this.imageData.length)return;const t="workbook"===this.settings.content?this.imageData:[this.imageData[this.currentSheetEditorIndex]];if("actualSize"===this.settings.scale){let i,n;this.parsePageSize(),"landscape"==this.settings.orientation?(i=this.settings.pageSize.y-2*this.marginNumber,n=this.settings.pageSize.x-2*this.marginNumber):(i=this.settings.pageSize.x-2*this.marginNumber,n=this.settings.pageSize.y-2*this.marginNumber);const a=this.getPreviewSize(),r=a.width-2*this.marginNumber,o=a.height-2*this.marginNumber,l=i*window.xdeviceDPI[0]/25.4,c=n*window.xdeviceDPI[1]/25.4;for(let i of t){const t=Math.ceil(i.width/l),n=Math.ceil(i.height/c),a=(t*l-i.width)/2,u=(n*c-i.height)/2;for(let d=0;d<n;d++)for(let n=0;n<t;n++){let t=(0,s.default)(i.data).eq(2).attr("viewBox",n*l-a+" "+(d*c-u)+" "+l+" "+c).attr("width",r).attr("height",o);e.push(t[0].outerHTML)}}}else{const i=this.getPreviewSize(),n=i.width-2*this.marginNumber,a=i.height-2*this.marginNumber;for(let i of t)e.push((0,s.default)(i.data).eq(2).attr("width",n).attr("height",a)[0].outerHTML)}this.allPreviews=e},loadPreview(){this._loadPreview()},parsePageSize(){switch(this.pageSize){case"8.5*13":this.settings.pageSize={x:216,y:330};break;case"Envelope #10":this.settings.pageSize={x:105,y:241};break;case"184*260mm":this.settings.pageSize={x:184,y:260};break;case"195*270mm":this.settings.pageSize={x:195,y:270};break;case"A3":this.settings.pageSize={x:297,y:420};break;case"A4":this.settings.pageSize={x:210,y:297};break;case"A5":this.settings.pageSize={x:148,y:210};break;case"B4":this.settings.pageSize={x:250,y:353};break;case"B5":this.settings.pageSize={x:176,y:250};break;case"B4 JIS":this.settings.pageSize={x:257,y:364};break;case"Envelope C5":this.settings.pageSize={x:162,y:229};break;case"Envelope DL":this.settings.pageSize={x:110,y:220};break;case"JIS B5":case"B5 JIS":this.settings.pageSize={x:182,y:257};break;case"ROC 16K":this.settings.pageSize={x:197,y:273};break;case"Postcard":this.settings.pageSize={x:100,y:148};break;case"Postcard Double Long Edge":this.settings.pageSize={x:148,y:200};break;case"Envelope Monarch":this.settings.pageSize={x:98,y:191};break;case"US Letter":this.settings.pageSize={x:216,y:279};break;case"US Legal":this.settings.pageSize={x:216,y:356};break;case"Executive":this.settings.pageSize={x:184,y:267}}},shrinkDialog(){const e=l.WINDOW_SETTINGS["dialog-print"];window.moveBy(150,0),window.resizeTo(e.width-300,e.height-40)}}};t.Z=w},44049:(e,t,i)=>{"use strict";var n=i(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.outlinePrepare=async function(e,t,i=""){const{cleanUp:n,addToRemoveEl:l}=(()=>{let e=[];return{cleanUp(){e.forEach((e=>e.remove())),e=[]},addToRemoveEl:t=>(e.push(t),t)}})();let c=e.state.editor.sbEditorWrapper.value.getCurrentSheetEditor();t.suggestPath={store:e,sheet:c.model};let u={x:"portrait"===t.orientation?t.pageSize.x:t.pageSize.y,y:"portrait"===t.orientation?t.pageSize.y:t.pageSize.x};const d=i?`.outliner-${i} .vana-outliner`:".vana-outliner";let p=document.querySelector(d).cloneNode(!0);l((0,a.default)("<div>").addClass("print-el").append(p).appendTo((0,a.default)(document.body)));const g=Object.assign({},o,t.margins||{}),h=e.getters["activation/watermarkType"]===s.WATERMARK_TYPES.EVALUATING?(0,r.getRotatedWatermarkContent)("print-watermark",e):null;let m;h&&(m=`\n    .print-el:after {\n      content: "";\n      display: block;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      background: url(${h}) 0 0 repeat;\n    }\n    `);const k=`\n    <style id="print_css">\n      .print-el {\n        display: none;\n        overflow: hidden;\n      }\n      ${h?m:""}\n      @page{\n        size: ${u.x}mm ${u.y}mm ${t.orientation};\n        margin-top: ${g.top};\n        margin-left: ${g.left};\n        margin-right:  ${g.right};\n        margin-bottom: ${g.bottom};\n      }\n      @media print {\n        .print-el {\n          display: block;\n          position: relative;\n          overflow: hidden;\n        }\n        * {\n          webkit-transition: none !important;\n          transition: none !important;\n        }\n        html {\n          background-color: #fff;\n        }\n        body {\n          overflow: visible !important;\n          background-color: #fff;\n        }\n        #app {\n          display: none !important;\n        }\n        em {\n          font-family: auto !important;\n        }\n      }\n    </style>\n  `;return l((0,a.default)(k).appendTo((0,a.default)(document.head))[0]),n};var a=n(i(19755)),s=i(48932),r=i(12444);const o={top:"0mm",bottom:"0mm",left:"0mm",right:"0mm"}},2177:(e,t,i)=>{"use strict";var n=i(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentSupportedPrinters=x,t.printHandle=async function(e){e.state[k.SHARED].editorMode===f.EDITOR_MODE_OUTLINER?await async function(e){let t={};const i=r.default.parse(window.location.search.slice(1)).editorId||"",{result:n}=await u.default.fetch(l.WINDOW_OPEN,{name:"dialog-print",parentId:window.id,wait:!0,query:{editorId:i}});if(n&&"finish"===n.action){t=n.settings;const i=await(0,m.outlinePrepare)(e,t);i&&S(e,t,(()=>setTimeout((()=>{i(),e.commit("rateUs/addRateMasValue",10)}),500)))}}(e):await async function(e){const t=e.state.editor.sbEditorWrapper.value;t.initAllSheetEditor();const i=t.getCurrentSheetEditor(),n=t.findSheetIndex(i.model.id),a=o.default.utils,s=t.getCurrentSheetEditor().getSheetView(),c=a.styleManager.getStyleValue(s,o.default.constant.STYLE_KEYS.FILL_COLOR),d=t.model.sheets.map((e=>e.id)),p=r.default.parse(window.location.search.slice(1)).editorId||"",{result:g}=await u.default.fetch(l.WINDOW_OPEN,{name:"dialog-print",parentId:window.id,wait:!0,query:{backgroundColor:c,currentSheetEditorIndex:n,editorId:p,targetSheetId:d}});if(g&&"finish"===g.action){let t=g.settings;t.margins={top:10,bottom:10,left:10,right:10};const i=await(0,h.prepare)(e,b(b({},t),{},{withFooter:!0,boundaryFillNone:"win32"===process.platform}));i&&S(e,t,(()=>{setTimeout((()=>{i(),e.commit("rateUs/addRateMasValue",10)}),500)}))}}(e)},t.print=S;var a=n(i(59713)),s=n(i(35747)),r=n(i(71191)),o=n(i(61027)),l=i(99492),c=n(i(41698)),u=n(i(24678)),d=i(95287),p=i(36414),g=i(58933),h=i(15055),m=i(44049),k=i(90336),f=i(48932);function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){(0,a.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}const w=(0,c.default)("core:printer");function x(){return g.remote.getCurrentWebContents().getPrinters().map((e=>({name:e.name,displayName:e.displayName,description:e.description})))}async function S(e,t,i){let n=x();if(t.useSelectedPrinter&&!t.saveAsPdf&&n.length>0){let e={silent:!0,pageSize:{width:1e3*t.pageSize.x,height:1e3*t.pageSize.y},printBackground:!0,landscape:"landscape"==t.orientation,deviceName:t.selectedPrinter.name,copies:parseInt(t.copies)};g.remote.getCurrentWebContents().print(e,((e,t)=>{e||w.error((0,p.normalizeError)(t)),i&&i()}))}else if(!t.useSelectedPrinter&&t.saveAsPdf){const n=await(0,d.showSaveDialog)({title:e.getters["l10n/T"]("Save"),suggestPath:t.suggestPath,filters:[{name:"PDF",extensions:["pdf"]}]});if(n){let e={pageSize:{width:1e3*t.pageSize.x,height:1e3*t.pageSize.y},printBackground:!0,landscape:"landscape"==t.orientation};const i=await g.remote.getCurrentWebContents().printToPDF(e);s.default.writeFile(n,i,(e=>{if(e)return w.debug("[Print to PDF]: ",e)}))}i&&i()}else g.remote.getCurrentWebContents().print({silent:!1,printBackground:!0},(()=>{i&&i()}))}},7322:(e,t,i)=>{"use strict";var n=i(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(59713)),s=i(48932),r=i(99492),o=i(36414),l=n(i(24678));function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){(0,a.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var d={computed:{},watch:{touchBarItems(e){this.updateTouchBarItems(e)}},methods:{updateTouchBarItems(e){const t=e=>{const t=e.click;let i=this._touchBarRoutes[t];return i||(i={method:t,endpoint:(0,r.WINDOW_CALLBACK)(window.id,(0,o.hyphenate)(t))},this._touchBarRoutes[t]=i),i.unroute||(i.unroute=l.default.route(i.endpoint,this[t])),Object.assign({},e,{click:i.endpoint})};e=(e||this.touchBarItems||[]).map((e=>("button"!==e.type||"string"!=typeof e.click||s.WINDOW_ACTIONS.includes(e.click)||e.click.startsWith("command:")?"buttons"===e.type&&(e=u(u({},e),{},{buttons:e.buttons.map((e=>"string"!=typeof e.click||s.WINDOW_ACTIONS.includes(e.click)||e.click.startsWith("command:")?e:t(e)))})):e=t(e),e))),this.$store.commit("window/updateTouchBarItems",{items:e})}},beforeCreate(){this._touchBarRoutes={}},mounted(){this.updateTouchBarItems()},beforeDestroy(){Object.values(this._touchBarRoutes).forEach((({unroute:e})=>e&&e())),this._touchBarRoutes={}}};t.default=d},92195:(e,t,i)=>{"use strict";var n=i(95318),a=n(i(59713)),s=n(i(2872)),r=n(i(35746)),o=i(90336),l=n(i(71191)),c=n(i(47107));function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){(0,a.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}const p=l.default.parse(location.search.slice(1));(0,s.default)(c.default,{name:"dialog-print",storeModules:{[o.SHARED]:d(d({},r.default),{},{remoteNamespace:(0,o.EDITOR_SHARED_WITH_ID)(p.editorId)})}})},24092:(e,t,i)=>{"use strict";var n=i(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.getPlatform=function(){return process.platform},t.getOSInfo=function(){return{platform:a.default.platform(),arch:a.default.arch(),release:a.default.release()}},t.openExternal=function(e){s.remote.shell.openExternal(e).catch((e=>{o.default.fetch(r.WINDOW_OPEN,{name:"dialog-problem",payload:{name:"OpenError",message:e.message||e,stack:e.stack,code:"OPEN_LINK"}})}))},t.copyToClipboard=function(e){s.clipboard.writeText(e)};var a=n(i(12087)),s=i(58933),r=i(99492),o=n(i(24678))},47107:(e,t,i)=>{"use strict";i.r(t),i.d(t,{__esModule:()=>n.X,default:()=>a});var n=i(75098);const a=(0,i(62236).Z)(n.Z,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-window uk-window-dialog uk-window-dialog-default",attrs:{id:"app"}},[i("div",{staticClass:"uk-window-title-bar uk-window-title-bar-transparent"},[i("window-control-button-group")],1),e._v(" "),i("div",{staticClass:"uk-window-body uk-flex uk-padding"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isOutlineMode,expression:"!isOutlineMode"}],staticClass:"uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-margin-left",staticStyle:{width:"293px"}},[i("div",{staticClass:"uk-background-muted uk-box-shadow-small uk-padding-small uk-border-rounded"},[i("div",{ref:"picborder",staticClass:"uk-flex uk-flex-center uk-flex-middle uk-flex-column",style:[e.previewBorderStyle,e.previewHtml&&e.previewBorderBackground]},[e.previewHtml?i("img",{ref:"img",attrs:{draggable:"false",src:e.previewHtml,alt:""}}):i("div",{attrs:{"uk-spinner":"ratio: 2.2"}})])]),e._v(" "),i("div",{staticClass:"uk-margin-top uk-flex uk-flex-center uk-flex-middle"},[i("button",{staticClass:"uk-button uk-button-tile uk-padding-xsmall uk-padding-remove-vertical uk-button-icon",attrs:{"uk-icon":"fast-backward",disabled:1===e.currentIndex},on:{click:function(t){e.currentIndex=1}}}),e._v(" "),i("button",{staticClass:"uk-button uk-button-tile uk-padding-xsmall uk-padding-remove-vertical uk-button-icon",attrs:{"uk-icon":"previous",disabled:1===e.currentIndex},on:{click:function(t){e.currentIndex>1&&e.currentIndex--}}}),e._v(" "),i("div",{staticClass:"uk-margin-small-left uk-margin-small-right"},[e._v("\n          "+e._s(e.rangeText)+"\n        ")]),e._v(" "),i("button",{staticClass:"uk-button uk-button-tile uk-padding-xsmall uk-padding-remove-vertical uk-button-icon",attrs:{"uk-icon":"next",disabled:e.currentIndex===e.allPreviews.length},on:{click:function(t){e.currentIndex<e.allPreviews.length&&e.currentIndex++}}}),e._v(" "),i("button",{staticClass:"uk-button uk-button-tile uk-padding-xsmall uk-padding-remove-vertical uk-button-icon",attrs:{"uk-icon":"fast-forward",disabled:e.currentIndex===e.allPreviews.length},on:{click:function(t){e.currentIndex=e.allPreviews.length}}})])]),e._v(" "),i("div",{staticClass:"uk-width-expand uk-margin-large-left"},[i("h1",{directives:[{name:"show",rawName:"v-show",value:!e.isOutlineMode,expression:"!isOutlineMode"}]},[e._v("\n        "+e._s(e.$T("Printer Settings"))+"\n      ")]),e._v(" "),i("div",{staticClass:"uk-flex uk-flex uk-flex-column"},[i("div",{staticClass:"uk-flex uk-flex-row uk-margin-bottom"},[i("div",{staticClass:"uk-margin-small-right uk-width-1-4 uk-text-right uk-flex-no-shrink"},[e._v("\n            "+e._s(e.$T("Printer:"))+"\n          ")]),e._v(" "),i("div",{staticStyle:{"max-width":"240px"}},[i("button",{staticClass:"uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left uk-width-small"},[e._v("\n              "+e._s(e.currentPrinterName)+"\n            ")]),e._v(" "),i("div",{staticStyle:{"max-width":"350px"},attrs:{"uk-contextual-popover":"offsetLeft:20","data-sel-close":"[uk-menu] button"}},[i("ul",{staticClass:"uk-height-1-1 uk-overflow-auto uk-width-1-1",attrs:{"uk-menu":""}},e._l(e.scanedPrinters,(function(t,n){return i("li",{key:t.value,staticClass:"uk-width-1-1",attrs:{value:t.value}},[i("button",{staticClass:"uk-width-1-1",class:{"uk-checked":e.printerIndex===n},staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},attrs:{title:t.description||t.name},on:{click:function(t){e.printerIndex=n}}},[e._v("\n                    "+e._s(t.description||t.name)+"\n                  ")])])})),0)])])]),e._v(" "),i("div",{staticClass:"uk-flex uk-flex-row uk-margin-bottom"},[i("div",{staticClass:"uk-margin-small-right uk-width-1-4 uk-text-right"},[e._v("\n            "+e._s(e.$T("Copies:"))+"\n          ")]),e._v(" "),i("number-input",{staticClass:"uk-width-auto",attrs:{min:"1"},model:{value:e.settings.copies,callback:function(t){e.$set(e.settings,"copies",t)},expression:"settings.copies"}})],1),e._v(" "),i("div",{staticClass:"uk-flex uk-flex-row uk-margin-bottom"},[i("div",{staticClass:"uk-margin-small-right uk-width-1-4 uk-text-right uk-flex-no-shrink"},[e._v("\n            "+e._s(e.$T("Content:"))+"\n          ")]),e._v(" "),i("div",{},[i("button",{staticClass:"uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left uk-width-small",attrs:{disabled:e.isOutlineMode}},[e._v("\n              "+e._s(e.currentContentTypeName)+"\n            ")]),e._v(" "),i("div",{attrs:{"uk-contextual-popover":"offsetLeft:20","data-sel-close":"[uk-menu] button"}},[i("ul",{staticClass:"uk-height-1-1 uk-overflow-auto",attrs:{"uk-menu":""}},e._l(e.contentTypes,(function(t,n){return i("li",{key:n},[i("button",{class:{"uk-checked":e.contentIndex===n},on:{click:function(t){e.contentIndex=n}}},[e._v("\n                    "+e._s(t)+"\n                  ")])])})),0)])])]),e._v(" "),i("div",{staticClass:"uk-flex uk-flex-row uk-margin-bottom"},[i("div",{staticClass:"uk-margin-small-right uk-width-1-4 uk-text-right"},[e._v("\n            "+e._s(e.$T("Page Size:"))+"\n          ")]),e._v(" "),i("div",{},[i("button",{staticClass:"uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left uk-width-small",attrs:{disabled:!e.supportedPageSizes.length}},[e._v("\n              "+e._s(e.currentSupportedSizeName)+"\n            ")]),e._v(" "),i("div",{attrs:{"uk-contextual-popover":"offsetLeft:20","data-sel-close":"[uk-menu] button"}},[i("ul",{staticClass:"uk-height-1-1 uk-overflow-auto",attrs:{"uk-menu":""}},e._l(e.supportedPageSizes,(function(t,n){return i("li",{key:n},[i("button",{class:{"uk-checked":e.pageSizeIndex===n},on:{click:function(t){e.pageSizeIndex=n}}},[e._v("\n                    "+e._s(t)+"\n                  ")])])})),0)])])]),e._v(" "),i("div",{staticClass:"uk-flex uk-flex-row uk-margin-bottom uk-flex-middle"},[i("div",{staticClass:"uk-margin-small-right uk-width-1-4 uk-text-right"},[e._v("\n            "+e._s(e.$T("Layout:"))+"\n          ")]),e._v(" "),i("ul",{staticClass:"uk-button-segment-group uk-button-segment-divider"},[i("li",{class:{"uk-active":"landscape"===e.settings.orientation}},[i("label",{staticClass:"uk-height-1-1"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.orientation,expression:"settings.orientation"}],attrs:{type:"radio",value:"landscape"},domProps:{checked:e._q(e.settings.orientation,"landscape")},on:{change:function(t){return e.$set(e.settings,"orientation","landscape")}}}),e._v(" "),i("button",{staticClass:"uk-button uk-button-segment uk-flex-column uk-height-1-1 uk-text-right",on:{click:function(t){e.settings.orientation="landscape"}}},[i("img",{staticStyle:{width:"24px",height:"24px"},attrs:{draggable:"false","uk-svg":"",src:e.landscapeIconUrl}})])])]),e._v(" "),i("li",{class:{"uk-active":"portrait"===e.settings.orientation}},[i("label",{staticClass:"uk-height-1-1"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.orientation,expression:"settings.orientation"}],attrs:{type:"radio",value:"portrait"},domProps:{checked:e._q(e.settings.orientation,"portrait")},on:{change:function(t){return e.$set(e.settings,"orientation","portrait")}}}),e._v(" "),i("button",{staticClass:"uk-button uk-button-segment uk-height-1-1",on:{click:function(t){e.settings.orientation="portrait"}}},[i("img",{staticStyle:{width:"24px",height:"24px"},attrs:{draggable:"false","uk-svg":"",src:e.portraitIconUrl}})])])])])]),e._v(" "),i("div",{staticClass:"uk-flex uk-flex-row uk-margin-bottom"},[i("div",{staticClass:"uk-margin-small-right uk-width-1-4 uk-text-right"},[e._v("\n            "+e._s(e.$T("Scale:"))+"\n          ")]),e._v(" "),i("div",{staticClass:"uk-flex uk-flex-column uk-flex-center"},[i("label",{staticClass:"uk-margin-small-bottom"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.scale,expression:"scale"}],staticClass:"uk-radio",attrs:{disabled:e.isOutlineMode,type:"radio",name:"radio2",value:"actualSize"},domProps:{checked:e._q(e.scale,"actualSize")},on:{change:function(t){e.scale="actualSize"}}}),e._v(" "),i("span",[e._v(e._s(e.$T("Actual Size")))])]),e._v(" "),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.scale,expression:"scale"}],staticClass:"uk-radio",attrs:{disabled:e.isOutlineMode,type:"radio",name:"radio2",value:"fitMap"},domProps:{checked:e._q(e.scale,"fitMap")},on:{change:function(t){e.scale="fitMap"}}}),e._v(" "),i("span",[e._v(e._s(e.$T("Fit Page")))])])])]),e._v(" "),i("div",{staticClass:"uk-flex uk-flex-row uk-margin-bottom"},[i("div",{staticClass:"uk-margin-small-right uk-width-1-4 uk-text-right"},[e._v("\n            "+e._s(e.$T("Option:"))+"\n          ")]),e._v(" "),i("div",{staticClass:"flex-g-1"},[i("div",{},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.pageSetup.background,expression:"settings.pageSetup.background"}],staticClass:"uk-checkbox",attrs:{disabled:e.isOutlineMode,type:"checkbox"},domProps:{checked:Array.isArray(e.settings.pageSetup.background)?e._i(e.settings.pageSetup.background,null)>-1:e.settings.pageSetup.background},on:{change:function(t){var i=e.settings.pageSetup.background,n=t.target,a=!!n.checked;if(Array.isArray(i)){var s=e._i(i,null);n.checked?s<0&&e.$set(e.settings.pageSetup,"background",i.concat([null])):s>-1&&e.$set(e.settings.pageSetup,"background",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(e.settings.pageSetup,"background",a)}}}),e._v(" "),i("span",[e._v(e._s(e.$T("Background Color")))])])])])])])])]),e._v(" "),i("div",{staticClass:"uk-window-button-bar"},[i("div",{staticClass:"uk-button-group"},[i("button",{staticClass:"uk-button uk-button-primary",attrs:{autofocus:""},on:{click:e.clickPrint}},[e._v("\n        "+e._s(e.primaryBtnText)+"\n      ")]),e._v(" "),i("button",{staticClass:"uk-button uk-button-default",on:{click:e.close}},[e._v("\n        "+e._s(e.$T("Close"))+"\n      ")])]),e._v(" "),e.validSubState?e._e():i("div",[i("WatermarkTemplate")],1)])])}),[],!1,null,null,null).exports},76417:e=>{"use strict";e.exports=require("crypto")},58933:e=>{"use strict";e.exports=require("electron")},28614:e=>{"use strict";e.exports=require("events")},35747:e=>{"use strict";e.exports=require("fs")},12087:e=>{"use strict";e.exports=require("os")},85622:e=>{"use strict";e.exports=require("path")},87525:e=>{"use strict";e.exports=require("posthtml")},71191:e=>{"use strict";e.exports=require("querystring")},92413:e=>{"use strict";e.exports=require("stream")},31669:e=>{"use strict";e.exports=require("util")}},e=>{"use strict";e.O(0,[8388,8592,5586,4736,2872,5055],(()=>{return t=92195,e(e.s=t);var t}));var t=e.O();module.exports=t}]);