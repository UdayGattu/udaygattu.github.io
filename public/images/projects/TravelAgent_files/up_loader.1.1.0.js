!function(){"use strict";let c=null;const s=["debug","info","warn","error"];let l=s.reduce((e,a,d)=>(e[a]=function(){var e="debug"===a?"log":a;if(c&&console&&"function"==typeof console[e]){var t=s.indexOf(c.toString().toLocaleLowerCase());if(!0===c||-1<t&&t<=d){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];const[d,...r]=[...i];console[e](a.toUpperCase()+" - (TTD) "+d,...r)}}},e),{});function e(e){c=e}let u=null,o={},p={},f={},v={};function t(e){var t=e[0],e=e[1];if("setIdentifier"!==t)throw"method not implemented";i(e)}function r(e,t){n(t),function t(e,i){let o=w(e,i,u.triggerElements);let n=w(e,i,u.cssSelectors);p[i]=p[i]||[];f[i]=f[i]||[];v[i]=v[i]||[];for(var r of n)r&&r.tagName&&"INPUT"===r.tagName&&f[i].push(r);l.debug(`triggers ["${i}"] `,o);l.debug(`validInputs ["${i}"] `,n);o.forEach(e=>{p[i].push(e)});for(let n=0;n<o.length;n++){var a=function(){try{l.debug("Detect event: ",u.detectionEventType,"on element, ",o[n]);let e=Object.entries(f).map(e=>e[1]).flatMap(e=>e);for(var t of e){let e=t.value.trim();if(g(e)){l.debug("We detected: ",e),m();break}}}catch(e){}};v[i].push(a),o[n].addEventListener(u.detectionEventType,a,{once:!0,capture:!0})}let d=_(e);for(let e=0;e<d.length;e++){const c=d[e],s=i+"/shadow_root_"+e;t(c,s),h(c,s)}}(e,t)}function m(){if(l.debug("Detection stopped."),u.detectDynamicNodes){l.debug("Checking for dynamically added elements is turned off.");for(var[e,t]of Object.entries(o))t&&t.disconnect(),o={}}n("all")}function n(e){if(l.debug(`clearing detection hooks (${e})`),"all"===e){for(var[t,n]of Object.entries(p))if(n)for(let e=0;e<n.length;e++)n[e].removeEventListener(u.detectionEventType,v[t][e],{capture:!0});p={},v=[]}else{var i,o,r=[];for([i,o]of Object.entries(p))if(i.startsWith(e)){if(o)for(let e=0;e<o.length;e++)o[e].removeEventListener(u.detectionEventType,v[i][e],{capture:!0});r.push(i)}for(let e=0;e<r.length;e++){var a=r[e];p[a]=[],v[a]=[]}}}function g(e){return function(e){var t=/((([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,}))/i;if(u.detectionSubject.includes("email")&&t.test(e))return e=e.match(t)[0].toLowerCase().trim(),l.debug("We detected email: "+e),a(e,"email"),!0;return!1}(e)||!1}function h(n,i){u.detectDynamicNodes&&(o[i]=new d(function(e,t){l.debug("Detected dynamically added nodes."),r(n,i)},500),o[i].observe(n,{childList:!0,subtree:!0,attributes:!0}))}function i(e){e&&e.type&&e.identifier?"email"!==e.type?l.error("Identifier type is not supported, ",e.type):(a(e.identifier,e.type),m()):l.error("wrong identifier format")}function a(e,t){var n;e&&t&&(n=new CustomEvent("detected-identifier",{detail:{identifier:e,type:t}}),l.info("Dispatched event with identifier: ",e," and type: ",t),window.dispatchEvent(n))}function y(e){if(e&&e.__upixel_detection)try{r(e.__upixel_detection.root,e.__upixel_detection.scopeName)}catch(e){}}function w(t,n,i){l.debug(`collectElements("${n}", ${i})`);let o=[];for(var e of i)0<e.length&&(e=t.querySelectorAll(e))&&e.forEach(e=>{o.includes(e)||o.push(e)});var r=window.location.hostname,a=document.getElementsByTagName("iframe");for(let e=0;e<a.length;e++){var d=a[e];if(function(e,t){if(t.src)try{var n=e===new URL(t.src).hostname;return n&&l.debug("Iframe "+t.src+" can be accessed"),n}catch(e){l.debug("error: ",e)}}(r,d)&&(d.__upixel_detection={root:t,scopeName:n+"/iframe"},d.removeEventListener("load",y),d.addEventListener("load",y),d.contentDocument))for(var c of i)0<c.length&&d.contentDocument.querySelectorAll(c).forEach(e=>{o.includes(e)||o.push(e)})}return o}function _(e){return[...e.querySelectorAll("*")].filter(e=>!!e.shadowRoot).map(e=>e.shadowRoot)}function d(e,t){this.callback=e,this.minDelayMs=t,this.lastInvocationTime=0,this.args=null,this.nextTimeoutHandle=null,this.mutationObserver=new MutationObserver(this.throttledCallback.bind(this))}d.prototype.observe=function(e,t){this.mutationObserver.observe(e,t)},d.prototype.disconnect=function(){null!=this.nextTimeoutHandle&&clearTimeout(this.nextTimeoutHandle),this.mutationObserver.disconnect()},d.prototype.takeRecords=function(){return this.mutationObserver.takeRecords()},d.prototype.throttledCallback=function(e,t){var n=Date.now();null!=this.args?this.args=arguments:this.lastInvocationTime+this.minDelayMs<n?(this.lastInvocationTime=n,this.callback(e,t)):(this.args=arguments,this.nextTimeoutHandle=setTimeout(function(){this.lastInvocationTime=Date.now(),this.nextTimeoutHandle=null,this.callback.apply(null,this.args),this.args=null}.bind(this),this.minDelayMs))},window.ttdPixel=window.ttdPixel||{},window.ttdPixel.startDetection=function(e){u=e,l.info("Detection started! Library is configured to detect: ",u.detectionSubject),l.info("Detection event type is ",u.detectionEventType),l.debug("Full config: ",u),"onclick"===u.detectionEventType&&(u.detectionEventType="click"),"onsubmit"===u.detectionEventType||"click"===u.detectionEventType?(e=document.querySelector("body"))&&(r(e,"document"),u.detectDynamicNodes)&&h(e,"document"):l.debug("Detection type not supported! We will not start auto detection."),window.ttdPixelEventsLayer=window.ttdPixelEventsLayer||[],window.ttdPixelEventsLayer.forEach(t),window.ttdPixelEventsLayer.push=function(e){return Array.prototype.push.call(window.ttdPixelEventsLayer,e),t(e),this.length}},window.ttdPixel.setIdentifier=i,window.ttdPixel.enableDebug=()=>e("debug"),window.ttdPixel.disableLog=()=>e(null)}();var ttd_dom_ready=function(){var t,n,i={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"},l={isReady:!1,readyWait:1,holdReady:function(e){e?l.readyWait++:l.ready(!0)},ready:function(e){if(!0===e&&!--l.readyWait||!0!==e&&!l.isReady){if(!document.body)return setTimeout(l.ready,1);(l.isReady=!0)!==e&&0<--l.readyWait||t.resolveWith(document,[l])}},bindReady:function(){if(!t){if(t=l._Deferred(),"complete"===document.readyState)return setTimeout(l.ready,1);if(document.addEventListener)document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",l.ready,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",n),window.attachEvent("onload",l.ready);var e=!1;try{e=null==window.frameElement}catch(e){}document.documentElement.doScroll&&e&&o()}}},_Deferred:function(){var a,n,d,c=[],s={done:function(){if(!d){var e,t,n,i,o,r=arguments;for(a&&(o=a,a=0),e=0,t=r.length;e<t;e++)"array"===(i=l.type(n=r[e]))?s.done.apply(s,n):"function"===i&&c.push(n);o&&s.resolveWith(o[0],o[1])}return this},resolveWith:function(e,t){if(!d&&!a&&!n){t=t||[],n=1;try{for(;c[0];)c.shift().apply(e,t)}finally{a=[e,t],n=0}}return this},resolve:function(){return s.resolveWith(this,arguments),this},isResolved:function(){return!(!n&&!a)},cancel:function(){return d=1,c=[],this}};return s},type:function(e){return null==e?String(e):i[Object.prototype.toString.call(e)]||"object"}};function o(){if(!l.isReady){try{document.documentElement.doScroll("left")}catch(e){return void setTimeout(o,1)}l.ready()}}return document.addEventListener?n=function(){document.removeEventListener("DOMContentLoaded",n,!1),l.ready()}:document.attachEvent&&(n=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",n),l.ready())}),function(e){l.bindReady(),l.type(e),t.done(e)}}();function TTDUniversalPixelApi(e){return new _TTDUniversalPixelApi(e)}function _TTDUniversalPixelApi(G){var K="1.1.0";const c=["ru6qq3d","ufqc9us","ugj89je","foh1kju","1znfrjo","xjagv7s","0g3yesi","6kn3s7q","d5bjpnk","k8v60jg","t6jmgnz","e2zo2dn","Yb4bc7v","80qouob","fndgd00","7b1me90","rz1ru9d"];function J(e){return new URL(e).hostname}async function s(r,d,c,e,t,s){this._uid2SdkListenerLock={},this.setupUid2Sdk=function(e,i,o){void 0===this._uid2SdkListenerLock[e]&&(this._uid2SdkListenerLock[e]=1,void 0===window.__uid2&&void 0===window.ttdPixel.uid2SdkLoaderPromise?window.ttdPixel.uid2SdkLoaderPromise=new Promise((e,t)=>{var n=document.createElement("script");n.setAttribute("defer",!0),n.setAttribute("src","https://js.adsrvr.org/uid2-sdk.js"),n.addEventListener("load",()=>{e(),i()}),n.addEventListener("error",e=>{t(e),o(e)}),document.body.appendChild(n)}):(async()=>{try{await window.ttdPixel.uid2SdkLoaderPromise,i()}catch(e){console.warn("Failed to load uid2 sdk: ",e)}})())};var l=document.getElementsByTagName("body")[0];if(l){var u="",p={},f={MonetaryValue:"v",MonetaryValueFormat:"vf"},v=[];if("undefined"!=typeof _pixelParams)for(var m in _pixelParams){var g=_pixelParams[m],m=f[m];m&&g&&!/%%.*%%/i.test(g)&&(g=encodeURIComponent(g),v.push(m+"="+g),p[m]=g)}var h="adv="+r,y="upid="+d.join(","),w=(p.adv=r,G||function(){var e=window,t="",n=!1;try{top.location.href&&(t=top.location.href)}catch(e){n=!0}if(n)for(;;)try{if(t=e.document.referrer,window.parent==e)break;e=window.parent}catch(e){break}-1<t.indexOf("cloudfront.net")&&(t=function(e,t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");t=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}(t,"url")||t);return t}()),_=encodeURIComponent(w),w=(p.ref=w,K);if(p.upv=w,u=c+"?"+h+"&ref="+_+"&"+y+"&upv="+w,e)for(var b in e)u=u+"&"+b+"="+e[b],p[b]=e[b];0<v.length&&(u=u+"&"+v.join("&")),navigator.joinAdInterestGroup&&(u+="&paapi=1",p.paapi="1"),localStorage.getItem("UID2-sdk-identity")&&(u+="&uidcs=1",p.uidcs="1");let n;const q=new Promise((e,t)=>{n=e});var E=null,D=!1,k=null;"function"==typeof __tcfapi?(S=setTimeout(z,1e3),__tcfapi("addEventListener",2,B)):"function"==typeof __cmp?(E=setTimeout($,1e3),__cmp("ping",null,U)):"function"==typeof __gpp?void 0!==(h=I()).gppString?N(h.gppString,h.gppSid):(T=setTimeout(M,1e3),__gpp("addEventListener",F)):R();let i=!1;void 0!==t&&(i=!0);let o=r+":"+d.join(","),a=!1;i?(a=!0,this.setupUid2Sdk(o,()=>j(t),e=>{console.warn("UID2 enabled but failed to register hooks: ",e)})):window.addEventListener("message",e=>{try{if(null!==e.origin&&"null"!==e.origin){var t=new URL(e.origin);if(t.hostname.endsWith(".adsrvr.org")&&!i&&"string"==typeof e.data){const n=JSON.parse(e.data);n.type&&"string"==typeof n.type&&"UID2"===n.type&&n.advertiserId&&"string"==typeof n.advertiserId&&n.advertiserId==r&&(a=!0,this.setupUid2Sdk(o,()=>j(n),e=>{console.warn("UID2 enabled but failed to register hooks: ",e)}))}}}catch(e){}});var T=null,L=!1,S=null,x=!1;async function P(){"hidden"===document.visibilityState&&(s&&await W(p),document.removeEventListener("visibilitychange",P))}async function H(e,n){try{var t,i,o=e();!o&&function(e){if("string"==typeof e.subscriptionId&&"string"==typeof e.serverPublicKey)return 1;console.error("subscription id and serverPublicKey must both be provided and both be strings to run cstg")}(n)&&(void 0!==n.email?window.__uid2.setIdentityFromEmail(n.email,n):void 0!==n.emailHash?window.__uid2.setIdentityFromEmailHash(n.emailHash,n):void 0!==n.phone&&window.__uid2.setIdentityFromPhone(n.phone,n)),o?(s?await W(p,o.advertising_token):await C(o.advertising_token),document.removeEventListener("visibilitychange",P)):window.ttdPixel.activeDetection||(t=new Promise(t=>{window.addEventListener("detected-identifier",function(e){t(e.detail.identifier),window.ttdPixel.activeDetection=null}),window.ttdPixel.startDetection(n)}),i=await(window.ttdPixel.activeDetection=t),await window.__uid2.setIdentityFromEmail(i,n))}catch(e){console.warn("error setting up fireOrDetact: ",e)}}function j(n){try{window.__uid2.callbacks.push(async(e,t)=>{switch(e){case"SdkLoaded":try{window.__ttd_m_invoke_once=window.__ttd_m_invoke_once||{},window.__ttd_m_invoke_once._uid2_init||(window.__ttd_m_invoke_once._uid2_init=1,n.baseUrl||(n.baseUrl="https://global.prod.uidapi.com"),__uid2.init({baseUrl:n.baseUrl}))}catch(e){console.info("Non-TTD actor initialized UID2 SDK, mind the consistency of UID2 baseUrl.")}break;case"InitCompleted":await H(()=>t.identity,n);break;case"IdentityUpdated":s?await W(p,t.identity.advertising_token):await C(t.identity.advertising_token),document.removeEventListener("visibilitychange",P)}})}catch(e){console.warn("Did not setup uid2 hooks: ",e)}}function I(){var e,t=__gpp("getGPPData"),t={gppString:t?.gppString,gppSid:t?.applicableSections?.join(",")};return void 0===t.gppString&&(e=__gpp("ping"),t.gppString=e?.gppString,t.gppSid=e?.applicableSections?.join(",")),t}function F(e,t){var n;L?__gpp("removeEventListener",function(){},e.listenerId):"signalStatus"===e.eventName&&"ready"===e.data&&(n=I(),clearTimeout(T),k=new Date,N(n.gppString,n.gppSid),__gpp("removeEventListener",function(){},e.listenerId))}function M(){L=!0,R()}function $(){D=!0,R()}function U(e){D||(e.cmpLoaded||e.gdprAppliesGlobally?(clearTimeout(E),k=new Date,__cmp("getConsentData",null,R)):setTimeout(function(){__cmp("ping",null,U)},200))}function R(e){var t;null!=k&&(t=new Date-k,u=u+"&ret="+t,p.ret=t),D&&(u+="&pto=1",p.pto="1"),null!=e&&(t=e.gdprApplies?"1":"0",u=u+"&gdpr="+t+"&gdpr_consent="+e.consentData,p.gdpr=t,p.gdpr_consent=e.consentData),A()}async function A(){var e="universal_pixel_"+d.join("_");n(u),await O(u,e,"TTD Universal Pixel"),document.addEventListener("visibilitychange",P)}async function C(e,t){await O(await q+"&uiddt="+e+"&uidcs="+t,"universal_pixel_"+d.join("_")+"_uid","TTD Universal Pixel with UID")}async function O(e,t,n){let i=document.getElementById(t);for(;i&&i.parentElement.removeChild(i),i=document.getElementById(t););let o=document.createElement("iframe");function r(){l.appendChild(o),setTimeout(async()=>{s&&!a&&(await W(p),document.removeEventListener("visibilitychange",P))},1e3)}o.setAttribute("id",t),o.setAttribute("height",0),o.setAttribute("width",0),o.setAttribute("style","display:none;"),o.setAttribute("src",e),o.setAttribute("title",n),e.includes("/track/rt")&&n.includes("Realtime Fallback")?(l.appendChild(o),document.removeEventListener("visibilitychange",P)):"complete"===document.readyState?setTimeout(r,0):window.addEventListener?window.addEventListener("load",r):window.attachEvent?window.attachEvent("onload",r):r()}function z(){x=!0,R()}function B(e,t){var n;x?__tcfapi("removeEventListener",2,function(e){},e.listenerId):t&&(clearTimeout(S),t=e,null!=k&&(n=new Date-k,u=u+"&ret="+n,p.ret=n),x&&(u+="&pto=1",p.pto="1"),null!=t&&(n=function(e){return e?"1":"0"}(t.gdprApplies),u=u+"&gdpr="+n+"&gdpr_consent="+t.tcString,p.gdpr=n,p.gdpr_consent=t.tcString),A(),k=new Date,__tcfapi("removeEventListener",2,function(e){},e.listenerId))}function N(e,t){var n;null!=k&&(n=new Date-k,u=u+"&ret="+n,p.ret=n),null!=e&&(u=u+"&gpp_consent="+e,p.gpp_consent=e),null!=t&&(u=u+"&gpp_sid="+t,p.gpp_sid=t),A()}async function W(e,t){e.pixel_ids=d,t&&(e.uid2_token=t);const i=function(e){var t={};for(const n in e)void 0!==e[n]&&(t[n]=e[n]);return t}(e),o={data:[{...i}]},r=`https://${J(c)}/track/realtimeconversion`;return new Promise((e,t)=>{const n=new XMLHttpRequest;n.withCredentials=!0,n.open("POST",r),n.setRequestHeader("Content-type","application/json"),n.setRequestHeader("eventDataSource","UpSdk"),n.setRequestHeader("eventDataSourceVersion",K),n.onload=()=>{(200<=n.status&&n.status<300?e:t)(n.response)},n.onerror=async()=>{t(n.statusText),async function(e){var t="universal_pixel_realtime_fallback"+d.join("_");e.eds="UpSdkGet",e.edsv=K,e.upid=d.join(",");const{pixel_ids:n,...i}=e;e=new URLSearchParams(i),await O(`https://${J(c)}/track/rt`+"?"+e.toString(),t,"TTD Universal Pixel Realtime Fallback")}(i)},n.send(JSON.stringify(o))}).catch(e=>{})}}}this.init=async function(t,n,i,o,r,a){if(("string"==typeof arguments[3]||!arguments[3]&&7<=arguments.length)&&(arguments[3]=null,4<arguments.length)){for(var e=4;e<arguments.length;e++)arguments[e-1]=arguments[e];delete arguments[arguments.length-1]}if(t&&""!=t&&n&&!(n.length<=0)){let e=i;var d;(a=c.includes(t)?!0:a)&&(d=J(i),e=`https://${d}/track/cei`),await s(t,n,e,o,r,a)}}}"undefined"!=typeof process&&void 0!==process?.env?.JEST_WORKER_ID&&(module.exports={TTDUniversalPixelApi:TTDUniversalPixelApi});
//# sourceMappingURL=up_loader.1.1.0.js.map