(this["webpackJsonpnz.covid19live"]=this["webpackJsonpnz.covid19live"]||[]).push([[7],{27:function(e,n,t){"use strict";t.d(n,"j",(function(){return p})),t.d(n,"f",(function(){return m})),t.d(n,"g",(function(){return y})),t.d(n,"d",(function(){return v})),t.d(n,"k",(function(){return g})),t.d(n,"c",(function(){return b})),t.d(n,"e",(function(){return k})),t.d(n,"a",(function(){return w})),t.d(n,"l",(function(){return N})),t.d(n,"h",(function(){return C})),t.d(n,"i",(function(){return j})),t.d(n,"b",(function(){return T}));var a=t(28),o=t(9),i=t(53),r=t(54),c=t(66),u=t(65),l=t(32),s=t(20),d=null,f=new Intl.NumberFormat("en-nz",{maximumFractionDigits:1}),p=function(){return!1},h=function(){return Object(l.a)(new Date,"Pacific/Auckland")},m=function(){return Object(i.a)(h(),{representation:"date"})},y=function(){return Object(i.a)(Object(r.a)(h(),1),{representation:"date"})},v=function(e){return t.e(39).then(t.bind(null,71)).then((function(e){d=e[o.j[s.a.language||window.localStorage.i18nextLng]]})),Object(c.a)(new Date(e),new Date,{locale:d})},g=function(e){return e?(e.match(o.h)&&(e+=o.r),Object(l.a)(new Date(e),"Pacific/Auckland")):h()},b=function(e,n){if(!e)return"";"string"===typeof e&&e.match(o.h)&&(e+=o.r);var t=Object(l.a)(new Date(e),"Pacific/Auckland");return Object(u.a)(t,n,{locale:d})},k=function(e,n,t){return t&&0===e&&o.q.includes(t)&&(e=NaN),isNaN(e)?"-":"short"===n?(a=e,Math.abs(a)<1e3?f.format(a):Math.abs(a)>=1e3&&Math.abs(a)<1e6?f.format(a/1e3)+"K":Math.abs(a)>=1e6?f.format(a/1e6)+"M":void 0):("int"===n&&(e=Math.floor(e)),f.format(e)+("%"===n?"%":""));var a},w=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},N=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},C=function e(n,t,i){var r,c,u,l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=Object(a.a)(Object(a.a)({},o.w[i]),l&&!(null===(r=o.w[i])||void 0===r?void 0:r.normalizeByKey)&&o.s),d=s.key,f=s.normalizeByKey,p=s.multiplyFactor;if("population"===d)c="total"===t?null===n||void 0===n||null===(u=n.meta)||void 0===u?void 0:u.population:0;else if("tested"===d){var h;c=null===n||void 0===n||null===(h=n[t])||void 0===h?void 0:h.tested}else if("active"===d){var m;c=(null===n||void 0===n||null===(m=n[t])||void 0===m?void 0:m.active)||0}else{var y;c=null===n||void 0===n||null===(y=n[t])||void 0===y?void 0:y[d]}if(f)if("total"===t){var v=e(n,"total",f);c/=v}else{var g=c,b=e(n,"total",d),k=b-g,w=e(n,"delta",{key:f}),N=e(n,"total",f),C=N-w;c=b/N-k/C}return(p||1)*(isFinite(c)&&c||0)},j=function(e,n,t,a){return{total:C(e,"total",n,t),delta:C(e,"delta",n,t)}},T=function(e){return fetch(e).then((function(e){return e.json()}))}},55:function(e,n,t){e.exports=t(64)},64:function(e,n,t){"use strict";t.r(n);var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=t(27),r=t(9),c=t(20),u=t(47),l=t(48),s=t(70);c.a.use(l.a).use(u.a).use(s.e).init({debug:Object(i.j)()&&!1,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:r.a+"/locales/locale_{{lng}}.json",addPath:"http://localhost:9999/"},saveMissing:Object(i.j)()&&!1,interpolation:{escapeValue:!1}});c.a;var d=t(0),f=t.n(d),p=t(41),h=t(34),m=Object(d.lazy)((function(){return Promise.all([t.e(11),t.e(17)]).then(t.bind(null,232))})),y=document.getElementById("root"),v=function(){return Object(p.render)(f.a.createElement(d.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(h.a,null,f.a.createElement(m,null))),y)};window.requestIdleCallback&&window.IntersectionObserver?v():function(e,n){var t=document.createElement("script");t.src=e,t.onload=function(){n()},t.onerror=function(){n(new Error("Failed to load script "+e))},document.head.appendChild(t)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",v),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var n="".concat("","/service-worker.js");a?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(n,e)}),3e3)}))}}()},9:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"j",(function(){return r})),t.d(n,"v",(function(){return l})),t.d(n,"w",(function(){return s})),t.d(n,"s",(function(){return d})),t.d(n,"q",(function(){return f})),t.d(n,"t",(function(){return p})),t.d(n,"x",(function(){return h})),t.d(n,"y",(function(){return m})),t.d(n,"B",(function(){return y})),t.d(n,"g",(function(){return v})),t.d(n,"f",(function(){return g})),t.d(n,"p",(function(){return b})),t.d(n,"D",(function(){return k})),t.d(n,"E",(function(){return w})),t.d(n,"h",(function(){return N})),t.d(n,"r",(function(){return C})),t.d(n,"u",(function(){return j})),t.d(n,"z",(function(){return T})),t.d(n,"A",(function(){return O})),t.d(n,"o",(function(){return S})),t.d(n,"n",(function(){return W})),t.d(n,"m",(function(){return B})),t.d(n,"l",(function(){return M})),t.d(n,"i",(function(){return A})),t.d(n,"k",(function(){return D})),t.d(n,"e",(function(){return U})),t.d(n,"C",(function(){return E})),t.d(n,"c",(function(){return H})),t.d(n,"d",(function(){return R}));var a=t(46),o="https://gieoon.github.io/api.covid19nz/data/processed",i="https://gieoon.github.io/api.covid19nz/",r={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},c={confirmed:{displayName:"confirmed",color:"#ff073a",format:"int",options:{key:"confirmed"}},active:{displayName:"active",color:"#007bff",format:"int",options:{key:"active"},hideDelta:!0},recovered:{displayName:"recovered",color:"#28a745",format:"int",options:{key:"recovered"}},deceased:{displayName:"deceased",color:"#6c757d",format:"int",options:{key:"deceased"}},tested:{displayName:"tested",color:"#4b1eaa",format:"short",options:{key:"tested"}},activeRatio:{displayName:"active ratio",format:"%",options:{key:"active",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},recoveryRatio:{displayName:"recovery ratio",format:"%",options:{key:"recovered",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},cfr:{displayName:"case fatality ratio",format:"%",options:{key:"deceased",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},tpr:{displayName:"test positivity ratio",color:"#fd7e14",format:"%",options:{key:"confirmed",normalizeByKey:"tested",multiplyFactor:100},hideDelta:!0},population:{displayName:"population",format:"short",options:{key:"population"},hideDelta:!0}},u=Object.keys(c).reduce((function(e,n){var t=c[n],o=t.options,i=Object(a.a)(t,["options"]);return e.options[n]=o,e.configs[n]=i,e}),{options:{},configs:{}}),l=u.configs,s=u.options,d={normalizeByKey:"population",multiplyFactor:1e6},f=["tested","tpr","population"],p=["confirmed","active","recovered","deceased"],h=[].concat(p,["tested"]),m=Object.keys(c),y=[].concat(p,["tested"]),v=30,g=300,b=20,k="UN",w="Unknown",N=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g,C="T00:00:00+12:00",j={clamp:!0,precision:1},T={total:"Cumulative",delta:"Daily"},O={BEGINNING:"Beginning",THREE_MONTHS:"3 Months",MONTH:"1 Month"},S={CHOROPLETH:0,BUBBLES:1},W={COUNTRY:0,DISTRICTS:1},B={COUNTRY:0,STATE:1},M={UP:{geoDataFile:"".concat("/mini_maps","/uttarpradesh.json"),mapType:B.STATE},WB:{geoDataFile:"".concat("/mini_maps","/westbengal.json"),mapType:B.STATE},TT:{geoDataFile:"".concat("/mini_maps","/0.21-NZ_District_Health_Board_boundaries.json"),mapType:B.COUNTRY}},A={english:"newzealand.jpg",japanese:"japan.svg",chinese:"china.jpg"},D=50,U={Auckland:"Auckland","Bay of Plenty":"Bay of Plenty",Canterbury:"Canterbury","Capital and Coast":"Capital and Coast","Counties Manukau":"Counties Manukau","Hawke's Bay":"Hawke's Bay","Hutt Valley":"Hutt Valley",Lakes:"Lakes",Midcentral:"Midcentral","Nelson Marlborough":"Nelson Marlborough",Northland:"Northland","South Canterbury":"South Canterbury",Southern:"Southern",Tairawhiti:"Tairawhiti",Taranaki:"Taranaki",Waikato:"Waikato",Wairarapa:"Wairarapa",Waitemata:"Waitemata","West Coast":"West Coast",Whanganui:"Whanganui","New Zealand":"New Zealand"},E={NLD:"Northland",NWA:"Waitemata",CAK:"Auckland",SAK:"Counties Manukau",WKO:"Waikato",LKS:"Lakes",BOP:"Bay of Plenty",TRW:"Tairawhiti",TKI:"Taranaki",HWB:"Hawke's Bay",WNI:"Whanganui",MWU:"Midcentral",HUT:"Hutt Valley",CAP:"Capital and Coast",WRP:"Wairarapa",NLM:"Nelson Marlborough",WCO:"West Coast",CTY:"Canterbury",SCY:"South Canterbury",SRN:"Southern",TT:"New Zealand"},P=[],z={};Object.keys(U).map((function(e,n){return z[U[e]]=e,P.push({code:e,name:U[e]}),null}));var H=z,R=P}},[[55,8,9]]]);
//# sourceMappingURL=main.586a7bf0.chunk.js.map