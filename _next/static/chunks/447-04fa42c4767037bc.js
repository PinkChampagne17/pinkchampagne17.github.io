(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[447],{5836:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return l},default:function(){return s}});let n=r(7295),i=r(5097),a=r(1226),o=r(3729),u=n._(r(3374)),l=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=o.Image},3952:function(e,t,r){"use strict";var n=r(719),i=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,l={},s=null,c=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:i,type:e,key:s,ref:c,props:l,_owner:o.current}}t.jsx=l,t.jsxs=l},8038:function(e,t,r){"use strict";e.exports=r(3952)},2103:function(e,t,r){e.exports=r(5836)},2846:function(e,t,r){e.exports=r(1954)},8652:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(719),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,o=n.useEffect,u=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return u(function(){i.value=r,i.getSnapshot=t,s(i)&&c({inst:i})},[e,r,t]),o(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},3916:function(e,t,r){"use strict";e.exports=r(8652)},8524:function(e,t,r){"use strict";r.d(t,{J$:function(){return ee},ZP:function(){return et}});var n,i=r(719),a=r(3916);let o=()=>{},u=o(),l=Object,s=e=>e===u,c=e=>"function"==typeof e,d=(e,t)=>({...e,...t}),f=e=>c(e.then),g=new WeakMap,E=0,p=e=>{let t,r;let n=typeof e,i=e&&e.constructor,a=i==Date;if(l(e)!==e||a||i==RegExp)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=g.get(e))return t;if(t=++E+"~",g.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=p(e[r])+",";g.set(e,t)}if(i==l){t="#";let n=l.keys(e).sort();for(;!s(r=n.pop());)s(e[r])||(t+=r+":"+p(e[r])+",");g.set(e,t)}}return t},_=new WeakMap,v={},y={},w="undefined",h=typeof window!=w,m=typeof document!=w,O=()=>h&&typeof window.requestAnimationFrame!=w,b=(e,t)=>{let r=_.get(e);return[()=>!s(t)&&e.get(t)||v,n=>{if(!s(t)){let i=e.get(t);t in y||(y[t]=i),r[5](t,d(i,n),i||v)}},r[6],()=>!s(t)&&t in y?y[t]:!s(t)&&e.get(t)||v]},R=!0,[S,T]=h&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[o,o],V={initFocus:e=>(m&&document.addEventListener("visibilitychange",e),S("focus",e),()=>{m&&document.removeEventListener("visibilitychange",e),T("focus",e)}),initReconnect:e=>{let t=()=>{R=!0,e()},r=()=>{R=!1};return S("online",t),S("offline",r),()=>{T("online",t),T("offline",r)}}},L=!i.useId,k=!h||"Deno"in window,C=e=>O()?window.requestAnimationFrame(e):setTimeout(e,1),N=k?i.useEffect:i.useLayoutEffect,P="undefined"!=typeof navigator&&navigator.connection,x=!k&&P&&(["slow-2g","2g"].includes(P.effectiveType)||P.saveData),D=e=>{if(c(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?p(e):"",t]},I=0,A=()=>++I;var j={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function F(...e){let[t,r,n,i]=e,a=d({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),o=a.populateCache,l=a.rollbackOnError,g=a.optimisticData,E=e=>"function"==typeof l?l(e):!1!==l,p=a.throwOnError;if(c(r)){let e=[];for(let n of t.keys())!/^\$(inf|sub)\$/.test(n)&&r(t.get(n)._k)&&e.push(n);return Promise.all(e.map(v))}return v(r);async function v(r){let i;let[l]=D(r);if(!l)return;let[d,v]=b(t,l),[y,w,h,m]=_.get(t),O=()=>{let e=y[l];return(c(a.revalidate)?a.revalidate(d().data,r):!1!==a.revalidate)&&(delete h[l],delete m[l],e&&e[0])?e[0](2).then(()=>d().data):d().data};if(e.length<3)return O();let R=n,S=A();w[l]=[S,0];let T=!s(g),V=d(),L=V.data,k=V._c,C=s(k)?L:k;if(T&&v({data:g=c(g)?g(C,L):g,_c:C}),c(R))try{R=R(C)}catch(e){i=e}if(R&&f(R)){if(R=await R.catch(e=>{i=e}),S!==w[l][0]){if(i)throw i;return R}i&&T&&E(i)&&(o=!0,v({data:C,_c:u}))}if(o&&!i&&(c(o)?v({data:o(R,C),error:u,_c:u}):v({data:R,error:u,_c:u})),w[l][1]=A(),Promise.resolve(O()).then(()=>{v({_c:u})}),i){if(p)throw i;return}return R}}let M=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},U=(e,t)=>{if(!_.has(e)){let r=d(V,t),n={},i=F.bind(u,e),a=o,l={},s=(e,t)=>{let r=l[e]||[];return l[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},c=(t,r,n)=>{e.set(t,r);let i=l[t];if(i)for(let e of i)e(r,n)},f=()=>{if(!_.has(e)&&(_.set(e,[n,{},{},{},i,c,s]),!k)){let t=r.initFocus(setTimeout.bind(u,M.bind(u,n,0))),i=r.initReconnect(setTimeout.bind(u,M.bind(u,n,1)));a=()=>{t&&t(),i&&i(),_.delete(e)}}};return f(),[e,i,f,a]}return[e,_.get(e)[4]]},[W,$]=U(new Map),q=d({onLoadingSlow:o,onSuccess:o,onError:o,onErrorRetry:(e,t,r,n,i)=>{let a=r.errorRetryCount,o=i.retryCount,u=~~((Math.random()+.5)*(1<<(o<8?o:8)))*r.errorRetryInterval;(s(a)||!(o>a))&&setTimeout(n,u,i)},onDiscarded:o,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:x?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:x?5e3:3e3,compare:(e,t)=>p(e)==p(t),isPaused:()=>!1,cache:W,mutate:$,fallback:{}},{isOnline:()=>R,isVisible:()=>{let e=m&&document.visibilityState;return s(e)||"hidden"!==e}}),z=(e,t)=>{let r=d(e,t);if(t){let{use:n,fallback:i}=e,{use:a,fallback:o}=t;n&&a&&(r.use=n.concat(a)),i&&o&&(r.fallback=d(i,o))}return r},J=(0,i.createContext)({}),B=h&&window.__SWR_DEVTOOLS_USE__,G=B?window.__SWR_DEVTOOLS_USE__:[],Y=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],Z=()=>d(q,(0,i.useContext)(J)),H=G.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=D(t),[,,,i]=_.get(W);if(n.startsWith("$inf$"))return r(...e);let a=i[n];return s(a)?r(...e):(delete i[n],a)});return e(t,i,n)}),K=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}};B&&(window.__SWR_DEVTOOLS_REACT__=i);let Q=i.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),X={dedupe:!0},ee=l.defineProperty(e=>{let{value:t}=e,r=(0,i.useContext)(J),n=c(t),a=(0,i.useMemo)(()=>n?t(r):t,[n,r,t]),o=(0,i.useMemo)(()=>n?a:z(r,a),[n,r,a]),l=a&&a.provider,s=(0,i.useRef)(u);l&&!s.current&&(s.current=U(l(o.cache||W),a));let f=s.current;return f&&(o.cache=f[0],o.mutate=f[1]),N(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,i.createElement)(J.Provider,d(e,{value:o}))},"defaultValue",{value:q}),et=(n=(e,t,r)=>{let{cache:n,compare:o,suspense:l,fallbackData:f,revalidateOnMount:g,revalidateIfStale:E,refreshInterval:p,refreshWhenHidden:v,refreshWhenOffline:y,keepPreviousData:w}=r,[h,m,O,R]=_.get(n),[S,T]=D(e),V=(0,i.useRef)(!1),P=(0,i.useRef)(!1),x=(0,i.useRef)(S),I=(0,i.useRef)(t),M=(0,i.useRef)(r),U=()=>M.current,W=()=>U().isVisible()&&U().isOnline(),[$,q,z,J]=b(n,S),B=(0,i.useRef)({}).current,G=s(f)?r.fallback[S]:f,Y=(e,t)=>{for(let r in B)if("data"===r){if(!o(e[r],t[r])&&(!s(e[r])||!o(eo,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},Z=(0,i.useMemo)(()=>{let e=!!S&&!!t&&(s(g)?!U().isPaused()&&!l&&(!!s(E)||E):g),r=t=>{let r=d(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=$(),i=J(),a=r(n),o=n===i?a:r(i),u=a;return[()=>{let e=r($());return Y(e,u)?(u.data=e.data,u.isLoading=e.isLoading,u.isValidating=e.isValidating,u.error=e.error,u):(u=e,e)},()=>o]},[n,S]),H=(0,a.useSyncExternalStore)((0,i.useCallback)(e=>z(S,(t,r)=>{Y(r,t)||e()}),[n,S]),Z[0],Z[1]),ee=!V.current,et=h[S]&&h[S].length>0,er=H.data,en=s(er)?G:er,ei=H.error,ea=(0,i.useRef)(en),eo=w?s(er)?ea.current:er:en,eu=(!et||!!s(ei))&&(ee&&!s(g)?g:!U().isPaused()&&(l?!s(en)&&E:s(en)||E)),el=!!(S&&t&&ee&&eu),es=s(H.isValidating)?el:H.isValidating,ec=s(H.isLoading)?el:H.isLoading,ed=(0,i.useCallback)(async e=>{let t,n;let i=I.current;if(!S||!i||P.current||U().isPaused())return!1;let a=!0,l=e||{},d=!O[S]||!l.dedupe,f=()=>L?!P.current&&S===x.current&&V.current:S===x.current,g={isValidating:!1,isLoading:!1},E=()=>{q(g)},p=()=>{let e=O[S];e&&e[1]===n&&delete O[S]},_={isValidating:!0};s($().data)&&(_.isLoading=!0);try{if(d&&(q(_),r.loadingTimeout&&s($().data)&&setTimeout(()=>{a&&f()&&U().onLoadingSlow(S,r)},r.loadingTimeout),O[S]=[i(T),A()]),[t,n]=O[S],t=await t,d&&setTimeout(p,r.dedupingInterval),!O[S]||O[S][1]!==n)return d&&f()&&U().onDiscarded(S),!1;g.error=u;let e=m[S];if(!s(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return E(),d&&f()&&U().onDiscarded(S),!1;let l=$().data;g.data=o(l,t)?l:t,d&&f()&&U().onSuccess(t,S,r)}catch(r){p();let e=U(),{shouldRetryOnError:t}=e;!e.isPaused()&&(g.error=r,d&&f()&&(e.onError(r,S,e),(!0===t||c(t)&&t(r))&&(!U().revalidateOnFocus||!U().revalidateOnReconnect||W())&&e.onErrorRetry(r,S,e,e=>{let t=h[S];t&&t[0]&&t[0](j.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return a=!1,E(),!0},[S,n]),ef=(0,i.useCallback)((...e)=>F(n,x.current,...e),[]);if(N(()=>{I.current=t,M.current=r,s(er)||(ea.current=er)}),N(()=>{if(!S)return;let e=ed.bind(u,X),t=0,r=K(S,h,(r,n={})=>{if(r==j.FOCUS_EVENT){let r=Date.now();U().revalidateOnFocus&&r>t&&W()&&(t=r+U().focusThrottleInterval,e())}else if(r==j.RECONNECT_EVENT)U().revalidateOnReconnect&&W()&&e();else if(r==j.MUTATE_EVENT)return ed();else if(r==j.ERROR_REVALIDATE_EVENT)return ed(n)});return P.current=!1,x.current=S,V.current=!0,q({_k:T}),eu&&(s(en)||k?e():C(e)),()=>{P.current=!0,r()}},[S]),N(()=>{let e;function t(){let t=c(p)?p($().data):p;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!$().error&&(v||U().isVisible())&&(y||U().isOnline())?ed(X).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[p,v,y,S]),(0,i.useDebugValue)(eo),l&&s(en)&&S){if(!L&&k)throw Error("Fallback data is required when using suspense in SSR.");I.current=t,M.current=r,P.current=!1;let e=R[S];if(s(e)||Q(ef(e)),s(ei)){let e=ed(X);s(eo)||(e.status="fulfilled",e.value=!0),Q(e)}else throw ei}return{mutate:ef,get data(){return B.data=!0,eo},get error(){return B.error=!0,ei},get isValidating(){return B.isValidating=!0,es},get isLoading(){return B.isLoading=!0,ec}}},function(...e){let t=Z(),[r,i,a]=Y(e),o=z(t,a),u=n,{use:l}=o,s=(l||[]).concat(H);for(let e=s.length;e--;)u=s[e](u);return u(r,i||o.fetcher||null,o)})}}]);