!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=573)}({0:function(t,e,n){"use strict";function i(t,e,n,i,a,s,r,o,u,c){var l,p="function"==typeof t?t.options:t;if(u){p.components||(p.components={});var f=Object.prototype.hasOwnProperty;for(var h in u)f.call(u,h)&&!f.call(p.components,h)&&(p.components[h]=u[h])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),s&&(p._scopeId="data-v-"+s),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},p._ssrRegister=l):a&&(l=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(p.functional){p._injectStyles=l;var d=p.render;p.render=function(t,e){return l.call(e),d(t,e)}}else{var _=p.beforeCreate;p.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:p}}n.d(e,"a",(function(){return i}))},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},11:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(12).default,Vue.prototype.__$appStyle__)},12:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e.default=a.a},161:function(t,e,n){"use strict";var i=n(162),a=n.n(i);e.default=a.a},162:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{lists:[],interval:null,yourTexts:[{name:"学员A",content:"老师讲的真好"},{name:"学员B",content:"uni-app值得学习"},{name:"学员C",content:"老师，还有实战例子吗？"},{name:"学员D",content:"老师，请问是不是要先学会vue才能学uni-app？"},{name:"学员E",content:"受教了，uni-app太牛了"}]}},created:function(){var t=this;uni.$on("play-video",(function(e){"open"===e.status?t.addItem():t.closeItem()}))},beforeDestroy:function(){uni.$off("play-video"),this.closeItem()},methods:{addItem:function(){var t=this;t.lists=[{name:"学员E",content:"受教了，uni-app太牛了"}];var e=weex.requireModule("dom");t.interval=setInterval((function(){t.lists.length>15&&t.lists.unshift(),t.lists.push({name:t.yourTexts[t.lists.length%4].name,content:t.yourTexts[t.lists.length%4].content}),t.lists.length>5&&t.$nextTick((function(){t.$refs["item"+(t.lists.length-1)]&&e.scrollToElement(t.$refs["item"+(t.lists.length-1)][0])}))}),3500)},closeItem:function(){this.interval&&clearInterval(this.interval)}}};e.default=i},163:function(t,e){t.exports={wrapper:{position:"relative",flex:1,backgroundColor:"rgba(0,0,0,0)"},list:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.7)"},cell:{paddingTop:"10rpx",paddingRight:0,paddingBottom:"10rpx",paddingLeft:0,flexDirection:"row",flexWrap:"nowrap"},name:{flex:0,fontSize:"20rpx",marginRight:"20rpx",color:"#FF5A5F"},content:{flex:1,fontSize:"20rpx",color:"#F4F5F6"}}},2:function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__33C5XXX"}},374:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("list",{staticClass:["list"]},t._l(t.lists,(function(e,i){return n("cell",{key:i,ref:"item"+i,refInFor:!0,staticClass:["cell"],appendAsTree:!0,attrs:{append:"tree"}},[n("u-text",{staticClass:["name"]},[t._v(t._s(e.name)+":")]),n("u-text",{staticClass:["content"]},[t._v(t._s(e.content))])])})),0)])},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}))},464:function(t,e,n){"use strict";n.r(e);var i=n(163),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e.default=a.a},573:function(t,e,n){"use strict";n.r(e);n(7),n(11);var i=n(78);i.default.mpType="page",i.default.route="pages/API/subnvue/subnvue/video-mask",i.default.el="#root",new Vue(i.default)},7:function(t,e,n){"use strict";function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var c=n(8).version;function l(){var t="";if("n"===f()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync("__DC_STAT_UUID")}catch(e){t="__DC_UUID_VALUE"}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync("__DC_STAT_UUID",t)}catch(t){uni.setStorageSync("__DC_STAT_UUID","__DC_UUID_VALUE")}}return t}var p=function(){return parseInt((new Date).getTime()/1e3)},f=function(){return"n"},h=0,d=0,_=function(){return h=p(),"n"===f()&&uni.setStorageSync("__page__residence__time",p()),h},g=0,v=0,y=function(){var t=(new Date).getTime();return g=t,v=0,t},m=function(){var t=(new Date).getTime();return v=t,t},S=function(t){var e=0;return 0!==g&&(e=v-g),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},D=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,i=t._query,a=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===f()?n.$mp&&n.$mp.page.is+a:n.$scope&&n.$scope.route+a||n.$mp&&n.$mp.page.route+a},b=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},T=n(9).default,k=n(2).default||n(2),w=uni.getSystemInfoSync(),q=function(t){function e(){var t;return r(this,e),(t=i(this,a(e).call(this))).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t),u(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),u(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,_(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,b(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,b(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(n)}}]),e}(function(){function t(){var e,n;r(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:l(),ut:f(),mpn:(n="","wx"!==f()&&"qq"!==f()||uni.canIUse("getAccountInfoSync")&&(n=uni.getAccountInfoSync().miniProgram.appId||""),n),ak:k.appid,usv:c,v:"n"===f()?plus.runtime.version:"",ch:(e="","n"===f()&&(e=plus.runtime.channel),e),cn:"",pn:"",ct:"",t:p(),tt:"",p:"android"===w.platform?"a":"i",brand:w.brand||"",md:w.model,sv:w.system.replace(/(Android|iOS)\s/,""),mpsdk:w.SDKVersion||"",mpv:w.version||"",lang:w.language,pr:w.pixelRatio,ww:w.windowWidth,wh:w.windowHeight,sw:w.screenWidth,sh:w.screenHeight}}return u(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(m(),S("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,m();var n=S();y();var i=D(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=D(this),i=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===f()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=T&&T.pages[i]&&T.pages[i].titleNView&&T.pages[i].titleNView.titleText||T&&T.pages[i]&&T.pages[i].navigationBarTitleText||"",this.__licationShow)return y(),this.__licationShow=!1,void(this._lastPageRoute=n);if(m(),this._lastPageRoute=n,S("page").overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}y()}},{key:"_pageHide",value:function(){if(!this.__licationHide){m();var t=S("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,n,i=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+i||"",this.statData.t=p(),this.statData.sc=function(t){var e=f(),n="";return t||("wx"===e&&(n=uni.getLaunchOptionsSync().scene),n)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),n=0,e?n=e:(n=p(),uni.setStorageSync("First__Visit__Time",n),uni.removeStorageSync("Last__Visit__Time")),n),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",p()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===f()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,a=void 0===i?"":i,s=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:s,ch:this.statData.ch,e_n:n,e_v:"object"==typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:p(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,(function(e){t.statData.v=e.version||"",t.getNetworkInfo()}))}},{key:"getLocation",value:function(){var t=this;k.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var n=this,i=p(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var s=this._reportingRequestData;if("n"===f()&&(s=uni.getStorageSync("__UNI__STAT__DATA")||{}),s[t.lt]||(s[t.lt]=[]),s[t.lt].push(t),"n"===f()&&uni.setStorageSync("__UNI__STAT__DATA",s),d=p(),"n"===f()&&(h=uni.getStorageSync("__page__residence__time")),!(d-h<10)||e){var r=this._reportingRequestData;"n"===f()&&(r=uni.getStorageSync("__UNI__STAT__DATA")),_();var o=[],u=[],l=[],g=function(t){r[t].forEach((function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?o.push(n):3===t?l.push(n):u.push(n)}))};for(var v in r)g(v);o.push.apply(o,u.concat(l));var y={usv:c,t:i,requests:JSON.stringify(o)};this._reportingRequestData={},"n"===f()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==f()||"a"!==this.statData.p?this._sendRequest(y):setTimeout((function(){n._sendRequest(y)}),200):this.imageRequest(y)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(n){++e._retry<3&&setTimeout((function(){e._sendRequest(t)}),1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},i="";for(var a in e)n[e[a]]=t[e[a]],i+=e[a]+"="+t[e[a]]+"&";return{sign:"",options:i.substr(0,i.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,i;(i=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof i&&"object"!=typeof i?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof i&&i.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof i?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}()).getInstance(),R=!1,I={onLaunch:function(t){q.report(t,this)},onReady:function(){q.ready(this)},onLoad:function(t){if(q.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return q.interceptShare(!1),e.call(this,t)}}},onShow:function(){R=!1,q.show(this)},onHide:function(){R=!0,q.hide(this)},onUnload:function(){R?R=!1:q.hide(this)},onError:function(t){q.error(t)}};!function(){var t=n(10);(t.default||t).mixin(I),uni.report=function(t,e){q.sendEvent(t,e)}}()},78:function(t,e,n){"use strict";var i=n(374),a=n(161),s=n(0);var r=Object(s.a)(a.default,i.b,i.c,!1,null,null,"4d166962",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(464).default,this.options.style):Object.assign(this.options.style,n(464).default)}).call(r),e.default=r.exports},8:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-26720200326002",_inBundle:!1,_integrity:"sha512-SqBLYe4WLgejywVsjqhzDui4msF3UkmpYzYvs8B4AZuCLKfBZXh2pHO2BOfAGlI3sTok2ryMfM1nPKDxLUINOA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-26720200326002.tgz",_shasum:"d2f51a9669a057883f3552f6a0ea4a2a8a48ea9c",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"7b266e20fce9373ef0387b40ce15109e25e14d1d",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-26720200326002"}},9:function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}}});
