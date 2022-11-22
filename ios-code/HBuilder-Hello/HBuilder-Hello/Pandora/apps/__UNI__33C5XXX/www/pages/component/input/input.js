!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=559)}({0:function(t,e,i){"use strict";function n(t,e,i,n,a,s,u,o,r,l){var c,p="function"==typeof t?t.options:t;if(r){p.components||(p.components={});var f=Object.prototype.hasOwnProperty;for(var d in r)f.call(r,d)&&!f.call(p.components,d)&&(p.components[d]=r[d])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(p.mixins||(p.mixins=[])).push(l)),e&&(p.render=e,p.staticRenderFns=i,p._compiled=!0),n&&(p.functional=!0),s&&(p._scopeId="data-v-"+s),u?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},p._ssrRegister=c):a&&(c=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(p.functional){p._injectStyles=c;var h=p.render;p.render=function(t,e){return c.call(e),h(t,e)}}else{var _=p.beforeCreate;p.beforeCreate=_?[].concat(_,c):[c]}return{exports:t,options:p}}i.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},11:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(12).default,Vue.prototype.__$appStyle__)},12:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e.default=a.a},120:function(t,e,i){"use strict";var n=i(121),a=i.n(n);e.default=a.a},121:function(t,e,i){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{pageHead:((n=i(560))&&n.__esModule?n:{default:n}).default},data:function(){return{title:"input",focus:!1,inputValue:"",showClearIcon:!1,inputClearValue:"",changeValue:"",showPassword:!0,src:"../../../static/eye-1.png",platform:"",isNvue:!1}},methods:{onKeyInput:function(t){this.inputValue=t.detail.value},replaceInput:function(t){"11"===t.detail.value&&(this.changeValue="2")},hideKeyboard:function(t){"123"===t.detail.value&&uni.hideKeyboard()},clearInput:function(t){this.inputClearValue=t.detail.value,t.detail.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},changePassword:function(){this.showPassword=!this.showPassword},onFocus:function(){this.$mp.page.$getAppWebview().setStyle({softinputNavBar:"none"})},onBlur:function(){this.$mp.page.$getAppWebview().setStyle({softinputNavBar:"auto"})}},onLoad:function(){this.platform=uni.getSystemInfoSync().platform,this.isNvue=!0}};e.default=a},122:function(t,e,i){"use strict";i.r(e);var n=i(123),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e.default=a.a},123:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"page-head",props:{title:{type:String,default:""}}};e.default=n},124:function(t,e){t.exports={"nvue-page-root":{backgroundColor:"#F8F8F8",paddingBottom:"20"},"page-title":{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingTop:"35rpx",paddingRight:"35rpx",paddingBottom:"35rpx",paddingLeft:"35rpx"},"page-title__wrapper":{paddingTop:"0",paddingRight:"20",paddingBottom:"0",paddingLeft:"20",borderBottomColor:"#D8D8D8",borderBottomWidth:"1"},"page-title__text":{fontSize:"16",height:"48",lineHeight:"48",color:"#BEBEBE"},title:{paddingTop:"5",paddingRight:"13",paddingBottom:"5",paddingLeft:"13"},"uni-form-item__title":{fontSize:"16",lineHeight:"24"},"uni-input-wrapper":{paddingTop:"8",paddingRight:"13",paddingBottom:"8",paddingLeft:"13",flexDirection:"row",flexWrap:"nowrap",backgroundColor:"#FFFFFF"},"uni-input":{height:"28",lineHeight:"28",fontSize:"15",paddingTop:"0",paddingRight:"0",paddingBottom:"0",paddingLeft:"0",flex:1,backgroundColor:"#FFFFFF"},"uni-icon":{fontFamily:"uniicons",fontSize:"24",fontWeight:"normal",fontStyle:"normal",width:"24",height:"24",lineHeight:"24",color:"#999999"},"uni-eye-active":{color:"#007AFF"}}},2:function(t,e,i){"use strict";i.r(e),e.default={appid:"__UNI__33C5XXX"}},395:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["nvue-page-root"]},[i("view",{staticClass:["page-title"]},[i("view",{staticClass:["page-title__wrapper"]},[i("u-text",{staticClass:["page-title__text"]},[t._v(t._s(t.title))])])]),i("view",{staticClass:["uni-common-mt"]},[i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("可自动聚焦的 input")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{focus:"",placeholder:"自动获得焦点"}})],1)]),"ios"!==t.platform||t.isNvue?t._e():i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("隐藏 iOS 软键盘上的导航条")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{placeholder:"触摸其他地方收起键盘"},on:{focus:t.onFocus,blur:t.onBlur}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("键盘右下角按钮显示为搜索")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{confirmType:"search",placeholder:"键盘右下角按钮显示为搜索"}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("键盘右下角按钮显示为发送")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{confirmType:"send",placeholder:"键盘右下角按钮显示为发送"}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("控制最大输入长度的 input")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{maxlength:"10",placeholder:"最大输入长度为10"}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("实时获取输入值："+t._s(t.inputValue))])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{placeholder:"输入同步到view中"},on:{input:t.onKeyInput}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("控制输入的 input")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{placeholder:"连续的两个1会变成2",value:t.changeValue},on:{input:[function(e){t.changeValue=e.detail.value},t.replaceInput]}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("控制键盘的 input")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{ref:"input1",staticClass:["uni-input"],attrs:{placeholder:"输入123自动收起键盘"},on:{input:t.hideKeyboard}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("数字输入的 input")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{type:"number",placeholder:"这是一个数字输入框"}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("密码输入的 input")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{password:"",type:"text",placeholder:"这是一个密码输入框"}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("带小数点的 input")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{type:"digit",placeholder:"带小数点的数字键盘"}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("身份证输入的 input")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{type:"idcard",placeholder:"身份证输入键盘"}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("控制占位符颜色的 input")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{placeholderStyle:"color:#F76260",placeholder:"占位符字体是红色的"}})],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("带清除按钮的输入框")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{placeholder:"带清除按钮的输入框",value:t.inputClearValue},on:{input:t.clearInput}}),t.showClearIcon?i("u-text",{staticClass:["uni-icon"],on:{click:t.clearIcon}},[t._v("")]):t._e()],1)]),i("view",{staticClass:["uni-form-item","uni-column"]},[i("view",{staticClass:["title"]},[i("u-text",{staticClass:["uni-form-item__title"]},[t._v("可查看密码的输入框")])]),i("view",{staticClass:["uni-input-wrapper"]},[i("u-input",{staticClass:["uni-input"],attrs:{placeholder:"请输入密码",password:t.showPassword}}),i("u-text",{staticClass:["uni-icon"],class:[t.showPassword?"":"uni-eye-active"],on:{click:t.changePassword}},[t._v("")])],1)])])])])},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}))},432:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:["uni-page-head"]},[e("view",{staticClass:["uni-page-head-title"]},[e("u-text",[this._v(this._s(this.title))])])])},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}))},451:function(t,e,i){"use strict";i.r(e);var n=i(124),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e.default=a.a},559:function(t,e,i){"use strict";i.r(e);i(7),i(11);var n=i(66);n.default.mpType="page",n.default.route="pages/component/input/input",n.default.el="#root",new Vue(n.default)},560:function(t,e,i){"use strict";i.r(e);var n=i(432),a=i(122);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var u=i(0),o=Object(u.a)(a.default,n.b,n.c,!1,null,null,"8a4ebdb6",!1,n.a,void 0);e.default=o.exports},66:function(t,e,i){"use strict";var n=i(395),a=i(120),s=i(0);var u=Object(s.a)(a.default,n.b,n.c,!1,null,"b009c792","4e2ac7d4",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(451).default,this.options.style):Object.assign(this.options.style,i(451).default)}).call(u),e.default=u.exports},7:function(t,e,i){"use strict";function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t}var l=i(8).version;function c(){var t="";if("n"===f()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync("__DC_STAT_UUID")}catch(e){t="__DC_UUID_VALUE"}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync("__DC_STAT_UUID",t)}catch(t){uni.setStorageSync("__DC_STAT_UUID","__DC_UUID_VALUE")}}return t}var p=function(){return parseInt((new Date).getTime()/1e3)},f=function(){return"n"},d=0,h=0,_=function(){return d=p(),"n"===f()&&uni.setStorageSync("__page__residence__time",p()),d},v=0,g=0,m=function(){var t=(new Date).getTime();return v=t,g=0,t},y=function(){var t=(new Date).getTime();return g=t,t},w=function(t){var e=0;return 0!==v&&(e=g-v),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},C=function(t){var e=getCurrentPages(),i=e[e.length-1].$vm,n=t._query,a=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return t._query="","bd"===f()?i.$mp&&i.$mp.page.is+a:i.$scope&&i.$scope.route+a||i.$mp&&i.$mp.page.route+a},S=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},b=i(9).default,D=i(2).default||i(2),T=uni.getSystemInfoSync(),k=function(t){function e(){var t;return u(this,e),(t=n(this,a(e).call(this))).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t),r(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),r(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,_(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,S(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,S(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(i)}}]),e}(function(){function t(){var e,i;u(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:c(),ut:f(),mpn:(i="","wx"!==f()&&"qq"!==f()||uni.canIUse("getAccountInfoSync")&&(i=uni.getAccountInfoSync().miniProgram.appId||""),i),ak:D.appid,usv:l,v:"n"===f()?plus.runtime.version:"",ch:(e="","n"===f()&&(e=plus.runtime.channel),e),cn:"",pn:"",ct:"",t:p(),tt:"",p:"android"===T.platform?"a":"i",brand:T.brand||"",md:T.model,sv:T.system.replace(/(Android|iOS)\s/,""),mpsdk:T.SDKVersion||"",mpv:T.version||"",lang:T.language,pr:T.pixelRatio,ww:T.windowWidth,wh:T.windowHeight,sw:T.screenWidth,sh:T.screenHeight}}return r(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(y(),w("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,y();var i=w();m();var n=C(this);this._sendHideRequest({urlref:n,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,i=C(this),n=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===f()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=b&&b.pages[n]&&b.pages[n].titleNView&&b.pages[n].titleNView.titleText||b&&b.pages[n]&&b.pages[n].navigationBarTitleText||"",this.__licationShow)return m(),this.__licationShow=!1,void(this._lastPageRoute=i);if(y(),this._lastPageRoute=i,w("page").overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}m()}},{key:"_pageHide",value:function(){if(!this.__licationHide){y();var t=w("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,i,n=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+n||"",this.statData.t=p(),this.statData.sc=function(t){var e=f(),i="";return t||("wx"===e&&(i=uni.getLaunchOptionsSync().scene),i)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),i=0,e?i=e:(i=p(),uni.setStorageSync("First__Visit__Time",i),uni.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",p()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===f()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,n=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,n=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,n=t.value,a=void 0===n?"":n,s=this._lastPageRoute,u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:s,ch:this.statData.ch,e_n:i,e_v:"object"==typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:p(),p:this.statData.p};this.request(u)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,(function(e){t.statData.v=e.version||"",t.getNetworkInfo()}))}},{key:"getLocation",value:function(){var t=this;D.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var i=this,n=p(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var s=this._reportingRequestData;if("n"===f()&&(s=uni.getStorageSync("__UNI__STAT__DATA")||{}),s[t.lt]||(s[t.lt]=[]),s[t.lt].push(t),"n"===f()&&uni.setStorageSync("__UNI__STAT__DATA",s),h=p(),"n"===f()&&(d=uni.getStorageSync("__page__residence__time")),!(h-d<10)||e){var u=this._reportingRequestData;"n"===f()&&(u=uni.getStorageSync("__UNI__STAT__DATA")),_();var o=[],r=[],c=[],v=function(t){u[t].forEach((function(e){var i=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)}(e);0===t?o.push(i):3===t?c.push(i):r.push(i)}))};for(var g in u)v(g);o.push.apply(o,r.concat(c));var m={usv:l,t:n,requests:JSON.stringify(o)};this._reportingRequestData={},"n"===f()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==f()||"a"!==this.statData.p?this._sendRequest(m):setTimeout((function(){i._sendRequest(m)}),200):this.imageRequest(m)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(i){++e._retry<3&&setTimeout((function(){e._sendRequest(t)}),1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=function(t){var e=Object.keys(t).sort(),i={},n="";for(var a in e)i[e[a]]=t[e[a]],n+=e[a]+"="+t[e[a]]+"&";return{sign:"",options:n.substr(0,n.length-1)}}(function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+i}},{key:"sendEvent",value:function(t,e){var i,n;(n=e,(i=t)?"string"!=typeof i?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):i.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof n&&"object"!=typeof n?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof n&&n.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===i&&"string"!=typeof n?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}()).getInstance(),x=!1,I={onLaunch:function(t){k.report(t,this)},onReady:function(){k.ready(this)},onLoad:function(t){if(k.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return k.interceptShare(!1),e.call(this,t)}}},onShow:function(){x=!1,k.show(this)},onHide:function(){x=!0,k.hide(this)},onUnload:function(){x?x=!1:k.hide(this)},onError:function(t){k.error(t)}};!function(){var t=i(10);(t.default||t).mixin(I),uni.report=function(t,e){k.sendEvent(t,e)}}()},8:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-26720200326002",_inBundle:!1,_integrity:"sha512-SqBLYe4WLgejywVsjqhzDui4msF3UkmpYzYvs8B4AZuCLKfBZXh2pHO2BOfAGlI3sTok2ryMfM1nPKDxLUINOA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-26720200326002.tgz",_shasum:"d2f51a9669a057883f3552f6a0ea4a2a8a48ea9c",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"7b266e20fce9373ef0387b40ce15109e25e14d1d",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-26720200326002"}},9:function(t,e,i){"use strict";i.r(e),e.default={pages:{},globalStyle:{}}}});
