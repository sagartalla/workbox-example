!function(e,t){function n(){function n(e,t,n){for(var o=0;o<e.length;o++)document.addEventListener(e[o],t,n)}function o(e,t){for(var n,o,r=t[0].toUpperCase()+t.slice(1),i=0;i<VENDOR_PREFIXES.length;){if(n=VENDOR_PREFIXES[i],o=n?n+r:t,o in e)return e[o];i++}return void 0}function a(e){if(!(this instanceof a))throw new TypeError("Constructor Promise requires `new`");if(!v(e))throw new TypeError("Must pass resolver function");this._state=c,this._value=[],this._isChainEnd=!0,S(this,f(this,s),f(this,u),{then:e})}function s(e,t,n,o){return t?(o||(o=new d(this.constructor)),rt(h(o,t,e)),o.promise):(l(o,s,e),this)}function u(e,t,n,o){return n?(o||(o=new d(this.constructor)),rt(h(o,n,e)),o.promise):(l(o,u,e),this)}function c(e,t,n,o){if(!o){if(!t&&!n)return this;o=new d(this.constructor)}return e.push({deferred:o,onFulfilled:t||o.resolve,onRejected:n||o.reject}),o.promise}function d(e){var t=this;return this.promise=new e(function(e,n){t.resolve=e,t.reject=n}),t}function g(e,t,n,o){var r=e._value;e._state=t,e._value=n,o&&t===c&&o._state(n,void 0,void 0,{promise:e,resolve:void 0,reject:void 0});for(var i=0;i<r.length;i++){var a=r[i];e._state(n,a.onFulfilled,a.onRejected,a.deferred)}r.length=0,t===u&&e._isChainEnd&&setTimeout(function(){e._isChainEnd&&ot(n,e)},0)}function f(e,t){return function(n){g(e,t,n)}}function l(e,t,n){if(e){var o=e.promise;o._state=t,o._value=n}}function _(){}function v(e){return"function"==typeof e}function p(e){return e===Object(e)}function m(e,t){for(var n=0;n<e.length;n++)t(e[n],n)}function h(e,t,n){var o=e.promise,r=e.resolve,i=e.reject;return function(){try{var e=t(n);S(o,r,i,e,e)}catch(e){i(e)}}}function S(e,t,n,o,r){var i,a,s=n;try{if(o===e)throw new TypeError("Cannot fulfill promise with itself");var u=p(o);u&&o instanceof e.constructor?g(e,o._state,o._value,o):u&&(i=o.then)&&v(i)?(a=function(o){a=s=_,S(e,t,n,o,o)},s=function(e){a=s=_,n(e)},i.call(r,function(e){a(e)},function(e){s(e)})):t(o)}catch(e){s(e)}}var y,w,E="0.0.16",C=e._page_type?e._page_type:0,T=(e._tt_config,{FAIL:0,UNUSE:1,SUCCESS:2}),I="",b="",x=20,U=null,F="",A="",P="",N="",q="",M="",D="",R="",j="",O="",k="",L="",B=T.UNUSE,J=T.UNUSE,X=T.UNUSE,Q=T.SUCCESS,V=T.UNUSE,z="",H={combineData:function(){for(var e={},t=Array.prototype.slice.call(arguments),n=0;n<t.length;n++)for(var o in t[n])e[o]&&t[n][o]&&(e[o]=t[n][o]),e[o]||void 0===t[n][o]||null===t[n][o]||(e[o]=t[n][o]);return e},getOS:function(){var e=navigator.userAgent,t={android:e.match(/(Android)\s+([\d.]+)/),ipad:e.match(/(iPad).*OS\s([\d_]+)/),iphone:e.match(/(iPhone\sOS)\s([\d_]+)/)},n="";return t.android?n="android":(t.ipad||t.iphone)&&(n="ios"),n},isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},isExternal:function(){var e=!H.isToutiao()&&/(UCBrowser|baiduboxapp|baidubrowser|MQQBrowser|QQ|MicroMessenger|Weibo|Opera|Firefox|MSIE|360SE|MetaSr|TheWorld|Firefox|LBBROWSER|Chrome|Safari)(\s|\/|_)(\S)/i.test(navigator.userAgent);return e},isToutiao:function(){var e="http://nativeapp.toutiao.com"==document.referrer||/(News|NewsSocial|Explore|NewsArticle|NewsInHouse|joke_essay|Joke|Video|VideoInHouse|VideoArticle|live_stream|aweme|open_news|topbuzz|musical_ly|musically|trill|live_i18n)(\s|\/|_)(\S)/i.test(navigator.userAgent);return e},isIES:function(){var e=/(aweme|musical_ly|musically|trill|live_i18n)(\s|\/|_)(\S)/i.test(navigator.userAgent);return e},getDefer:function(){var e={},t=new a(function(t,n){e.resolve=t,e.reject=n});return e.promise=t,e},getLocationParam:function(e){var t={QueryString:function(e){var t=window.location.href,n=new RegExp("[&?]{1}"+e+"=([^&?|^#?]*)","ig");return t.match(n)?decodeURI(t.match(n)[0].substr(e.length+2)):(t=document.referrer,t.match(n)?decodeURI(t.match(n)[0].substr(e.length+2)):"")}};return t.QueryString(e)},queryToJson:function(e){for(var t,n,o,r,i=e.substr(e.lastIndexOf("?")+1),a=i.split("&"),s=a.length,u={},c=0;s>c;c++)a[c]&&(r=a[c].split("="),t=r[0],n=r[1],o=u[t],"undefined"==typeof o?u[t]=n:this.isArray(o)?o.push(n):u[t]=[o,n]);return u},getSdkPath:function(){var e="",t="",n=["s0.","s1.","s2.","s3."],o=n.length;if(r)e=r.src;else for(var i=document.getElementsByTagName("script"),a=i.length||0,s=0;a>s;s++){var u=i[s].src;-1!==u.indexOf("track-log")&&(e=u)}for(var s=0;o>s;s++)-1!==e.indexOf(n[s])&&(t=n[s]);return t},jsonToQuery:function(e){var t=[];e=e||{};var n=/^(?:string|boolean|number)/i;for(var o in e)e.hasOwnProperty(o)&&n.test(typeof e[o])&&t.push(o+"="+e[o]);return t.join("&")},extend:function(e,t){for(var n in t)e[n]=t[n]},getAdId:function(){var e=H.getLocationParam("_tt_ad_id")||H.getLocationParam("ad_id")||H.getLocationParam("aid");return e},getReqId:function(){return H.getLocationParam("req_id")||""},getCid:function(){return H.getLocationParam("cid")||""},getWebUrlInfo:function(){var e,t=window.decodeURIComponent(H.getLocationParam("_toutiao_params")||H.getLocationParam("_toutiao_recommend")||"");try{e=JSON.parse(t)}catch(n){}return e},encodeParams:function(e){var t=[];e=e||{};var n=/^(?:string|boolean|number)/i;for(var o in e)if(e.hasOwnProperty(o)&&n.test(typeof e[o])){var r=decodeURIComponent(e[o]);t.push(encodeURIComponent(o)+"="+encodeURIComponent(r))}return t.join("&")},syncGet:function(e,t){var n=t||0,o=this,r=new XMLHttpRequest;r.open("GET",e.url,!1),r.withCredentials=!0,r.onreadystatechange=function(){4===r.readyState&&200!==r.status&&1>n&&(n++,o.syncGet(e,n))},r.send(null)},retry:function(e,t){function n(){e(function(e){e&&t>o&&(o++,n())})}var t=t||1,o=0;n()},getHttpConvertUrl:function(){var e=z||H.getFromSessionStorage("umeng_idc");switch(e+""){case"3":return"//business-sg.topbuzz.com/2/wap/landing_tetris_log/";default:return"//business.topbuzz.com/2/wap/landing_tetris_log/"}},imageGet:function(e){var t=new Image;t.src=window.location.protocol+e.url+"&t="+new Date},addLoadEvent:function(e){var t=window.onload;window.onload="function"!=typeof window.onload?e:function(){t(),e()}},getSiteId:function(){var e=window.location.pathname,t=/\d+/g,n=e.match(t)||[];return n[0]||""},setToSessionStorage:function(e,t){var n=window.sessionStorage;n.setItem(e,t)},getFromSessionStorage:function(e){var t=window.sessionStorage;return t.getItem(e)},_parseUmengData:function(t){var n={},o=n.extra={value:j||H.getCid(),sdk_version:H.getSdkPath()+E,site_id:L,options:{},log_extra:U||H.getFromSessionStorage("umeng_log_extra")||"{}",convert_id:O||0};for(var r in t)if("target"===r)H.extend(o,this._getPosition(t[r]));else if("page_url"===r)o[r]=decodeURIComponent(t[r])||decodeURIComponent(e.location.href);else if("page_type"===r)o[r]=t[r]||C;else if("track_data"===r){var i=JSON.parse(e.decodeURIComponent(t[r])),a=["page_url","page_type","event_type","event_value","xpath","os","select_content","event_pixel_id","advertiser_id"];a.forEach(function(e){var t=i[0][e];o[e]=t||0===t?t:""})}else o[r]=t[r];try{o.options=JSON.parse(t.options||"{}")}catch(s){o.options.other=t.options}return o.options=JSON.stringify(o.options),"xpath"===t.event_type&&(o.dom_md5=b),o.log_extra=U||H.getFromSessionStorage("umeng_log_extra")||"{}",o.tt_bridge=1e3+100*B+10*J+V,o.tt_env=1e3+100*B+10*X+Q,n},_sendConvertEvent:function(e,t,n){if(H.isIES()){var o=n.extra;o.category="umeng",o.tag=e,o.label=t,o.is_ad_event="1";var r={eventName:e,labelName:t,value:o.value||o.cid||"0",extValue:"0",extJson:o};window.ToutiaoJSBridge.call("sendLog",r)}else{var i=n.extra;i.category="umeng",i.tag=e,i.label=t;var a={event_name:"convert",properties:i,version:2};window.ToutiaoJSBridge.call("track_event",a)}}},W={getChildrenIndex:function(e){if(e.sourceIndex)return e.sourceIndex-e.parentNode.sourceIndex-1;for(var t=0;e=e.previousElementSibling;)t++;return t},getXPath:function(e){for(var t="";e.length;){var n=Array.prototype.pop.apply(e);if(n&&n.tagName&&"body"!=n.tagName.toLowerCase()&&"html"!=n.tagName.toLowerCase()){var o="function"==typeof n.getAttribute?n.getAttribute("id"):"";t+=n.tagName.toLowerCase()+this.getChildrenIndex(n)+(o?"#"+o:"")+(0==e.length?"":">")}}return t},getElementByAttr:function(e,t){if("string"==typeof e&&(e=document.getElementById(e)),e||(e=document),e.querySelectorAll){var n=e.querySelectorAll("["+t+"]");return n=Array.prototype.slice.call(n)}for(var o=e.getElementsByTagName("*"),r=o.length,i=0,a=[];r>i;i++){var s=o[i];s.getAttribute(t)&&a.push(s)}return a},getPerformanceObj:function(){if(!window.performance)return"";var e=performance.timing;return e},getDomCount:function(){return document.getElementsByTagName("*").length},getElementParentsAndSelf:function(e){var t=this.getElementParents(e);return t.unshift(e),t},getElementParents:function(e){for(var t=[];e;)e=e.parentNode,e&&t.push(e);return t},delegate:function(e,t,n,o){function r(t){var r=/^\[(.*)\]$/,a=window.event?window.event:t,s=a.target||a.srcElement;if(r.test(n))for(var u=n.match(r)[1],c=W.getElementByAttr(e,u),d=s;d;){if(i.inElement(d,c)){o.call(s,a);break}d=d.parentNode}}if("string"==typeof e&&(e=document.getElementById(e)),e||(e=document),n&&"function"==typeof o){var i=this;e[t]=r}},inElement:function(e,t){for(var n=t.length,o=0;n>o;o++)if(e==t[o])return!0;return!1}};!function(e){"use strict";function t(e,t){var n=(65535&e)+(65535&t),o=(e>>16)+(t>>16)+(n>>16);return o<<16|65535&n}function n(e,t){return e<<t|e>>>32-t}function o(e,o,r,i,a,s){return t(n(t(t(o,e),t(i,s)),a),r)}function r(e,t,n,r,i,a,s){return o(t&n|~t&r,e,t,i,a,s)}function i(e,t,n,r,i,a,s){return o(t&r|n&~r,e,t,i,a,s)}function a(e,t,n,r,i,a,s){return o(t^n^r,e,t,i,a,s)}function s(e,t,n,r,i,a,s){return o(n^(t|~r),e,t,i,a,s)}function u(e,n){e[n>>5]|=128<<n%32,e[(n+64>>>9<<4)+14]=n;var o,u,c,d,g,f=1732584193,l=-271733879,_=-1732584194,v=271733878;for(o=0;o<e.length;o+=16)u=f,c=l,d=_,g=v,f=r(f,l,_,v,e[o],7,-680876936),v=r(v,f,l,_,e[o+1],12,-389564586),_=r(_,v,f,l,e[o+2],17,606105819),l=r(l,_,v,f,e[o+3],22,-1044525330),f=r(f,l,_,v,e[o+4],7,-176418897),v=r(v,f,l,_,e[o+5],12,1200080426),_=r(_,v,f,l,e[o+6],17,-1473231341),l=r(l,_,v,f,e[o+7],22,-45705983),f=r(f,l,_,v,e[o+8],7,1770035416),v=r(v,f,l,_,e[o+9],12,-1958414417),_=r(_,v,f,l,e[o+10],17,-42063),l=r(l,_,v,f,e[o+11],22,-1990404162),f=r(f,l,_,v,e[o+12],7,1804603682),v=r(v,f,l,_,e[o+13],12,-40341101),_=r(_,v,f,l,e[o+14],17,-1502002290),l=r(l,_,v,f,e[o+15],22,1236535329),f=i(f,l,_,v,e[o+1],5,-165796510),v=i(v,f,l,_,e[o+6],9,-1069501632),_=i(_,v,f,l,e[o+11],14,643717713),l=i(l,_,v,f,e[o],20,-373897302),f=i(f,l,_,v,e[o+5],5,-701558691),v=i(v,f,l,_,e[o+10],9,38016083),_=i(_,v,f,l,e[o+15],14,-660478335),l=i(l,_,v,f,e[o+4],20,-405537848),f=i(f,l,_,v,e[o+9],5,568446438),v=i(v,f,l,_,e[o+14],9,-1019803690),_=i(_,v,f,l,e[o+3],14,-187363961),l=i(l,_,v,f,e[o+8],20,1163531501),f=i(f,l,_,v,e[o+13],5,-1444681467),v=i(v,f,l,_,e[o+2],9,-51403784),_=i(_,v,f,l,e[o+7],14,1735328473),l=i(l,_,v,f,e[o+12],20,-1926607734),f=a(f,l,_,v,e[o+5],4,-378558),v=a(v,f,l,_,e[o+8],11,-2022574463),_=a(_,v,f,l,e[o+11],16,1839030562),l=a(l,_,v,f,e[o+14],23,-35309556),f=a(f,l,_,v,e[o+1],4,-1530992060),v=a(v,f,l,_,e[o+4],11,1272893353),_=a(_,v,f,l,e[o+7],16,-155497632),l=a(l,_,v,f,e[o+10],23,-1094730640),f=a(f,l,_,v,e[o+13],4,681279174),v=a(v,f,l,_,e[o],11,-358537222),_=a(_,v,f,l,e[o+3],16,-722521979),l=a(l,_,v,f,e[o+6],23,76029189),f=a(f,l,_,v,e[o+9],4,-640364487),v=a(v,f,l,_,e[o+12],11,-421815835),_=a(_,v,f,l,e[o+15],16,530742520),l=a(l,_,v,f,e[o+2],23,-995338651),f=s(f,l,_,v,e[o],6,-198630844),v=s(v,f,l,_,e[o+7],10,1126891415),_=s(_,v,f,l,e[o+14],15,-1416354905),l=s(l,_,v,f,e[o+5],21,-57434055),f=s(f,l,_,v,e[o+12],6,1700485571),v=s(v,f,l,_,e[o+3],10,-1894986606),_=s(_,v,f,l,e[o+10],15,-1051523),l=s(l,_,v,f,e[o+1],21,-2054922799),f=s(f,l,_,v,e[o+8],6,1873313359),v=s(v,f,l,_,e[o+15],10,-30611744),_=s(_,v,f,l,e[o+6],15,-1560198380),l=s(l,_,v,f,e[o+13],21,1309151649),f=s(f,l,_,v,e[o+4],6,-145523070),v=s(v,f,l,_,e[o+11],10,-1120210379),_=s(_,v,f,l,e[o+2],15,718787259),l=s(l,_,v,f,e[o+9],21,-343485551),f=t(f,u),l=t(l,c),_=t(_,d),v=t(v,g);return[f,l,_,v]}function c(e){var t,n="",o=32*e.length;for(t=0;o>t;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function d(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var o=8*e.length;for(t=0;o>t;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function g(e){return c(u(d(e),8*e.length))}function f(e,t){var n,o,r=d(e),i=[],a=[];for(i[15]=a[15]=void 0,r.length>16&&(r=u(r,8*e.length)),n=0;16>n;n+=1)i[n]=909522486^r[n],a[n]=1549556828^r[n];return o=u(i.concat(d(t)),512+8*t.length),c(u(a.concat(o),640))}function l(e){var t,n,o="0123456789abcdef",r="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r+=o.charAt(t>>>4&15)+o.charAt(15&t);return r}function _(e){return unescape(encodeURIComponent(e))}function v(e){return g(_(e))}function p(e){return l(v(e))}function m(e,t){return f(_(e),_(t))}function h(e,t){return l(m(e,t))}function S(e,t,n){return t?n?m(t,e):h(t,e):n?v(e):p(e)}e.md5=S}(this);var G={getPrefix:function(e){var t="";try{t=e.split("_")[0]}catch(n){}return t},traversal:function(e,t,n,o,r){if(e&&1===e.nodeType&&!(n>=o)){var i="",a=this.getPrefix(t);r(t);for(var s,u=0,c=e.childNodes,d=0;u<c.length;u++)s=c[u],s&&1===s.nodeType&&(i=a+","+d+"_"+s.tagName,this.traversal(s,i,n+1,o,r),++d)}}};VENDOR_PREFIXES=["","webkit","Moz","MS","ms","o"];var Y,$=window,K=void 0!==o($,"PointerEvent"),Z="ontouchstart"in $;!function(e){e[e.Default=0]="Default",e[e.Start=1]="Start",e[e.Move=2]="Move",e[e.End=4]="End",e[e.Cancle=8]="Cancle"}(Y||(Y={}));var et={pointer:{events:["pointerdown","pointermove","pointerup","pointercancel"],handler:function(e){var t=e.type,n={status:Y.Default,timestamp:Date.now(),position:[e.clientX,e.clientY]};return t!==this.events[0]||0!==e.button&&"touch"!==e.pointerType?t===this.events[1]?n.status=Y.Move:t===this.events[2]?n.status=Y.End:t===this.events[3]&&(n.status=Y.Cancle):n.status=Y.Start,n}},touch:{events:["touchstart","touchmove","touchend","touchcancel"],handler:function(e){var t=e.type;if(1!==e.changedTouches.length)return null;var n={status:Y.Default,timestamp:Date.now(),position:[e.changedTouches[0].clientX,e.changedTouches[0].clientY]};return t===this.events[0]?n.status=Y.Start:t===this.events[1]?n.status=Y.Move:t===this.events[2]?n.status=Y.End:t===this.events[3]&&(n.status=Y.Cancle),n.status===Y.Default?null:n}},mouse:{events:["mousedown","mousemove","mouseup"],handler:function(e){var t=e.type,n={status:Y.Default,timestamp:Date.now(),position:[e.clientX,e.clientY]};return t===this.events[0]&&0===e.button?n.status=Y.Start:t===this.events[1]?n.status=Y.Move:t===this.events[2]&&(n.status=Y.End),n.status&Y.Move&&1!==e.which&&(n.status=Y.End),n.status===Y.Default?null:n}}};"MSPointerEvent"in $&&!("PointerEvent"in $)&&(et.pointer.events=["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerCancel"]);var tt={interval:300,time:250,threshold:9,posThreshold:10},nt={};nt.addClickEvent=function(e,t){var o=function(t){var n,o,r,i;return function(a){var s=et[t].handler(a);if(null!==s){if(s.status&Y.Start)return n=Y.Start,o=s.timestamp,r=s.position,void(i=a.target);if(s.status&Y.End)n&Y.Start&&s.timestamp-o<tt.time&&Math.sqrt(Math.pow(s.position[0]-r[0],2)+Math.pow(s.position[1]-r[1],2))<tt.threshold&&e(a);else if(s.status&Y.Move&&n&Y.Start)return}n=0,o=0,r=[0,0],i=null}};K?n(et.pointer.events,o("pointer"),t):Z?n(et.touch.events,o("touch"),t):n(et.mouse.events,o("mouse"),t)},a.prototype.then=function(e,t){return e=v(e)?e:void 0,t=v(t)?t:void 0,(e||t)&&(this._isChainEnd=!1),this._state(this._value,e,t)},a.prototype.catch=function(e){return this.then(void 0,e)},a.resolve=function(e){var t=this;return p(e)&&e instanceof this?e:new t(function(t){t(e)})},a.reject=function(e){return new this(function(t,n){n(e)})},a.all=function(e){var t=this;return new t(function(n,o){var r=e.length,i=new Array(r);return 0===r?n(i):void m(e,function(e,a){t.resolve(e).then(function(e){i[a]=e,0==--r&&n(i)},o)})})},a.race=function(e){var t=this;return new t(function(n,o){for(var r=0;r<e.length;r++)t.resolve(e[r]).then(n,o)})};var ot=function(e){throw e};a._overrideUnhandledExceptionHandler=function(e){ot=e};var rt=function(){function e(){for(var e=0;o>e;e++){var t=n[e];n[e]=null,t()}o=0}var t;"undefined"!=typeof window&&window.postMessage?(window.addEventListener("message",e),t=function(){window.postMessage("macro-task","*")}):t=function(){setTimeout(e,0)};var n=new Array(16),o=0;return function(e){0===o&&t(),n[o++]=e}}();L=C?H.getSiteId():"",e._taq={push:function(e){e.event_pixel_id&&_taq.track(e)},track:function(e){var t={};if(!e.event_type)return void console.log("event_type is null");e.convert_id&&(O=e.convert_id);var n=function(){t=_taq._assembleData(e),e.convert_id&&(t.convert_id=e.convert_id),_taq._send_log(t)};y&&w?a.all([y,w]).then(function(){n()},function(){n()}):n()},getFromTTBridge:function(e,t){"adInfo"==e?B=T.FAIL:"appInfo"==e&&(J=T.FAIL),H.retry(function(n){"function"==typeof ToutiaoJSBridge.call&&ToutiaoJSBridge.call(e,{},function(o){"adInfo"==e?B=T.SUCCESS:"appInfo"==e&&(J=T.SUCCESS),n(),t(o)}),setTimeout(function(){(B==T.FAIL||J==T.FAIL)&&n(new Error("jsbridge timeout error"))},400)},1)},_send_log:function(e){if(H.isToutiao())try{var t=H._parseUmengData(e);H._sendConvertEvent("embeded_ad","convert",t)}catch(n){}if(H.getFromSessionStorage("umeng_cid")||!H.isToutiao()){var o=H.getHttpConvertUrl();e.source="webunion",e.sdk_version=H.getSdkPath()+E,o+="?"+H.jsonToQuery(e);try{H.imageGet({url:o})}catch(n){}}},_assembleData:function(t){var n={},o={},r={},i="",a=this;for(var s in t)if("target"==s){var u=a._getPosition(t[s]);H.extend(n,u)}else n[s]=t[s];try{o=JSON.parse(t.options||"{}")}catch(c){o.other=t.options}return"performance"===t.event_type&&(o.performance=W.getPerformanceObj()),"xpath"===t.event_type&&(o.dom_md5=b),n.options=o,n.log_extra=U||H.getFromSessionStorage("umeng_log_extra")||"{}",n.os=H.getOS(),n.page_url=decodeURIComponent(e.location.href),n.page_type=n.page_type||C,H.extend(r,a._getDeviceInfo()),H.extend(r,a._getPageInfo()),i=window.encodeURIComponent(JSON.stringify([n])),H.extend(r,{track_data:i}),Q=H.isExternal()?T.FAIL:T.SUCCESS,r.tt_bridge=1e3+100*B+10*J+V,r.tt_env=1e3+100*B+10*X+Q,r.app_id=R,r},_getPageInfo:function(){var e={},t=H.getFromSessionStorage("umeng_cid");return e.req_id=F||H.getReqId()||H.getFromSessionStorage("umeng_req_id")||"",e.cid=j||H.getCid()||"",""===e.cid&&t&&(e.cid=t,X=T.SUCCESS),e.site_id=L,e.ad_id=H.getAdId(),e},_getDeviceInfo:function(){var e={};return e.device_id=A||H.getFromSessionStorage("umeng_device_id")||"",e.user_id=P,e.uid=N||H.getFromSessionStorage("umeng_uid")||"",e.ut=q||H.getFromSessionStorage("umeng_ut")||"",e.client_version=M||H.getFromSessionStorage("umeng_app_version")||"",e.version_code=D||H.getFromSessionStorage("umeng_version_code")||"",e},_getPosition:function(n){if(n){var o=e.innerWidth||t.body.clientWidth,r=n.offsetLeft,i=n.offsetHeight,a=320,s=W.getElementParentsAndSelf(n),u={ox:r,oy:i,tx:~~(r*a/o),ty:~~(i*a/o),xpath:W.getXPath(s)};return u}}};var it={initMd5:function(){G.traversal(t.body,"0_body",0,x,function(e){I+=e}),b=md5(I)},bindEvent:function(){var e=this;nt.addClickEvent(function(n){for(var o=n.target;o!=t;)"function"==typeof o.hasAttribute&&o.hasAttribute("tt-data-click")&&e._sendTargetMsg(o),o=o.parentNode},!0)},getInfoFromUrl:function(){var e=H.getWebUrlInfo();return e?(X=T.SUCCESS,k=H.getAdId()||"",F=e.req_id||"",O=e.convert_id||"",j=e.cid||"",N=e.uid||"",q=e.ut||"",A=e.device_id||"",U=e.log_extra||"",M=e.version||"",D=e.version||"",z=e.idc||"",H.setToSessionStorage("umeng_ad_id",k),H.setToSessionStorage("umeng_req_id",F),H.setToSessionStorage("umeng_cid",j),H.setToSessionStorage("umeng_uid",N),H.setToSessionStorage("umeng_ut",q),H.setToSessionStorage("umeng_device_id",A),H.setToSessionStorage("umeng_log_extra",U),H.setToSessionStorage("umeng_app_version",M),H.setToSessionStorage("umeng_version_code",D),H.setToSessionStorage("umeng_idc",z),{ad_id:k,req_id:F,cid:j,user_id:N,device_id:A,log_extra:U,idc:z}):!1},initFromSessionStorage:function(){var e=H.getDefer(),t=H.getDefer();return"ad"===H.getFromSessionStorage("_tt_ad_info_success")?(F=F||H.getFromSessionStorage("_tt_req_id"),j=j||H.getFromSessionStorage("_tt_cid"),O=O||H.getFromSessionStorage("_tt_convert_id"),U=U||H.getFromSessionStorage("_tt_log_extra"),B=T.UNUSE,V=T.SUCCESS,e.resolve({req_id:F,cid:j,convert_id:O,log_extra:U})):(_taq.getFromTTBridge("adInfo",function(t){var n;t=t||{},"string"==typeof t&&(t=JSON.parse(t)),j=t.cid||t.ad_id||"",n=JSON.parse(t.log_extra||"{}"),F=n.req_id||"",O=n.convert_id||"",U=t.log_extra||"{}",H.setToSessionStorage("_tt_ad_info_success","ad"),H.setToSessionStorage("_tt_cid",j),H.setToSessionStorage("_tt_req_id",F),H.setToSessionStorage("_tt_convert_id",O),H.setToSessionStorage("_tt_log_extra",U),e.resolve({req_id:F,cid:j,convert_id:O,log_extra:U})}),setTimeout(function(){e.reject({req_id:F,cid:j,convert_id:O,log_extra:U})},1e3)),"app"===H.getFromSessionStorage("_tt_app_info_success")?(A=A||H.getFromSessionStorage("_tt_device_id"),P=P||H.getFromSessionStorage("_tt_user_id"),M=M||H.getFromSessionStorage("_tt_app_version"),D=D||H.getFromSessionStorage("_tt_version_code"),R=R||H.getFromSessionStorage("_tt_app_id"),J=T.UNUSE,t.resolve({device_id:A,user_id:P,app_version:M,version_code:D,app_id:R})):(_taq.getFromTTBridge("appInfo",function(e){e=e||{},A=e.device_id||"",P=e.user_id||"",M=e.appVersion||"",D=e.versionCode||"",R=e.aid||"",g_net_type=e.netType||"",H.setToSessionStorage("_tt_app_info_success","app"),H.setToSessionStorage("_tt_device_id",A),H.setToSessionStorage("_tt_user_id",P),H.setToSessionStorage("_tt_app_version",M),H.setToSessionStorage("_tt_version_code",D),H.setToSessionStorage("_tt_app_id",R),t.resolve({device_id:A,user_id:P,app_version:M,version_code:D,app_id:R})}),setTimeout(function(){t.reject({device_id:A,user_id:P,app_version:M,version_code:D,app_id:R})},1e3)),y=e.promise,w=t.promise,y.then(null,function(){}),w.then(null,function(){}),{adInfo:e.promise,appInfo:t.promise}},_sendTargetMsg:function(t){var n={};n.page_url=decodeURIComponent(e.location.href),n.page_type=C,n.event_type=t.getAttribute("tt-data-eventtype")||"",n.convert_id=t.getAttribute("tt-data-convertid")||"",n.event_value=t.getAttribute("tt-data-eventvalue")||"",n.target=t,n.options=t.getAttribute("tt-data-options")||"",_taq.push(n)}};if(e._taq.getCommonDataPromise=function(){var e=this._getPageInfo(),t=it.getInfoFromUrl();return t?H.combineData(e,t):H.combineData(e,{req_id:F,cid:j,user_id:N,device_id:A,log_extra:U})},it.initMd5(),!it.getInfoFromUrl()&&H.isToutiao()&&it.initFromSessionStorage(),it.bindEvent(),i&&i.length>0)for(var at=0;at<i.length;at++)_taq.push(i[at])}function o(e,t){var n=document.createElement("script");n.src=e,t=t||function(){},n.onload=n.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(t(),this.onload=this.onreadystatechange=null,this.parentNode.removeChild(this))},document.getElementsByTagName("head")[0].appendChild(n)}if(!e._tt_track){var r=document.currentScript;e._tt_track=[];var i=window._taq||[],a=function(){var e=/(aweme|musical_ly|musically|trill|live_i18n)(\s|\/|_)(\S)/i.test(navigator.userAgent);return e},s=function(){return a()?"//sf16-muse-va.ibytedtos.com/obj/ttfe-maliva/tiktok_fe/ies_jssdk.js":"//s0.ipstatp.com/js/lib/ToutiaoJSBridge.min_180413a.js"},u=s();o(u,function(){n()})}}(window,document);