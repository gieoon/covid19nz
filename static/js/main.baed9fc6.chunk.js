(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[7],{31:function(e,n,t){"use strict";t.d(n,"j",(function(){return h})),t.d(n,"f",(function(){return m})),t.d(n,"g",(function(){return y})),t.d(n,"d",(function(){return g})),t.d(n,"k",(function(){return b})),t.d(n,"c",(function(){return k})),t.d(n,"e",(function(){return w})),t.d(n,"a",(function(){return N})),t.d(n,"l",(function(){return C})),t.d(n,"h",(function(){return j})),t.d(n,"i",(function(){return T})),t.d(n,"b",(function(){return O}));var a=t(32),o=t(7),i=t(61),r=t(62),c=t(73),u=t(74),l=t(75),d=t(36),s=t(22),f=null,p=new Intl.NumberFormat("en-nz",{maximumFractionDigits:1}),h=function(){return!1},v=function(){return Object(d.a)(new Date,"Pacific/Auckland")},m=function(){return Object(i.a)(v(),{representation:"date"})},y=function(){return Object(i.a)(Object(r.a)(v(),1),{representation:"date"})},g=function(e){return t.e(39).then(t.bind(null,80)).then((function(e){f=e[o.j[s.a.language||window.localStorage.i18nextLng]]})),Object(c.a)(new Date(e),new Date,{locale:f})},b=function(e){return e?(e.match(o.h)&&(e+=o.r),Object(d.a)(new Date(e),"Pacific/Auckland")):v()},k=function(e,n){if(!e)return"";"string"===typeof e&&e.match(o.h)&&(e+=o.r);var t=Object(d.a)(new Date(e),"Pacific/Auckland");return Object(u.a)(t,n,{locale:f})},w=function(e,n,t){return t&&0===e&&o.q.includes(t)&&(e=NaN),isNaN(e)?"-":"short"===n?(a=e,Math.abs(a)<1e3?p.format(a):Math.abs(a)>=1e3&&Math.abs(a)<1e5?p.format(a/1e3)+"K":void 0):("int"===n&&(e=Math.floor(e)),p.format(e)+("%"===n?"%":""));var a},N=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},C=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},j=function e(n,t,i){var r,c,u,l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],d=Object(a.a)(Object(a.a)({},o.w[i]),l&&!(null===(r=o.w[i])||void 0===r?void 0:r.normalizeByKey)&&o.s),s=d.key,f=d.normalizeByKey,p=d.multiplyFactor;if("population"===s)c="total"===t?null===n||void 0===n||null===(u=n.meta)||void 0===u?void 0:u.population:0;else if("tested"===s){var h;c=null===n||void 0===n||null===(h=n[t])||void 0===h?void 0:h.tested}else if("active"===s){var v,m,y,g,b=(null===n||void 0===n||null===(v=n[t])||void 0===v?void 0:v.confirmed)||0,k=(null===n||void 0===n||null===(m=n[t])||void 0===m?void 0:m.deceased)||0,w=(null===n||void 0===n||null===(y=n[t])||void 0===y?void 0:y.recovered)||0,N=(null===n||void 0===n||null===(g=n[t])||void 0===g?void 0:g.other)||0;c=b-k-w-N}else{var C;c=null===n||void 0===n||null===(C=n[t])||void 0===C?void 0:C[s]}if(f)if("total"===t){var j=e(n,"total",f);c/=j}else{var T=c,O=e(n,"total",s),S=O-T,W=e(n,"delta",{key:f}),B=e(n,"total",f),A=B-W;c=O/B-S/A}return(p||1)*(isFinite(c)&&c||0)},T=function(e,n,t,a){var i,r,c=("tested"===o.w[n].key||"tested"===o.w[n].normalizeByKey)&&Object(l.a)(a,b(null===(i=e.meta)||void 0===i||null===(r=i.tested)||void 0===r?void 0:r.last_updated))>o.z;return{total:c?0:j(e,"total",n,t),delta:c?0:j(e,"delta",n,t)}},O=function(e){return fetch(e).then((function(e){return e.json()}))}},63:function(e,n,t){e.exports=t(72)},7:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"j",(function(){return r})),t.d(n,"v",(function(){return l})),t.d(n,"w",(function(){return d})),t.d(n,"s",(function(){return s})),t.d(n,"q",(function(){return f})),t.d(n,"t",(function(){return p})),t.d(n,"x",(function(){return h})),t.d(n,"y",(function(){return v})),t.d(n,"C",(function(){return m})),t.d(n,"G",(function(){return y})),t.d(n,"g",(function(){return g})),t.d(n,"f",(function(){return b})),t.d(n,"p",(function(){return k})),t.d(n,"z",(function(){return w})),t.d(n,"E",(function(){return N})),t.d(n,"F",(function(){return C})),t.d(n,"h",(function(){return j})),t.d(n,"r",(function(){return T})),t.d(n,"u",(function(){return O})),t.d(n,"A",(function(){return S})),t.d(n,"B",(function(){return W})),t.d(n,"o",(function(){return B})),t.d(n,"n",(function(){return A})),t.d(n,"m",(function(){return D})),t.d(n,"l",(function(){return M})),t.d(n,"i",(function(){return U})),t.d(n,"k",(function(){return E})),t.d(n,"e",(function(){return P})),t.d(n,"D",(function(){return z})),t.d(n,"c",(function(){return K})),t.d(n,"d",(function(){return R}));var a=t(52),o="https://gieoon.github.io/api.covid19nz/data/processed",i="https://gieoon.github.io/api.covid19nz/",r={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},c={confirmed:{displayName:"confirmed",color:"#ff073a",format:"int",options:{key:"confirmed"}},active:{displayName:"active",color:"#007bff",format:"int",options:{key:"active"},hideDelta:!0},recovered:{displayName:"recovered",color:"#28a745",format:"int",options:{key:"recovered"}},deceased:{displayName:"deceased",color:"#6c757d",format:"int",options:{key:"deceased"}},tested:{displayName:"tested",color:"#4b1eaa",format:"short",options:{key:"tested"}},activeRatio:{displayName:"active ratio",format:"%",options:{key:"active",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},recoveryRatio:{displayName:"recovery ratio",format:"%",options:{key:"recovered",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},cfr:{displayName:"case fatality ratio",format:"%",options:{key:"deceased",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},tpr:{displayName:"test positivity ratio",color:"#fd7e14",format:"%",options:{key:"confirmed",normalizeByKey:"tested",multiplyFactor:100},hideDelta:!0},population:{displayName:"population",format:"short",options:{key:"population"},hideDelta:!0}},u=Object.keys(c).reduce((function(e,n){var t=c[n],o=t.options,i=Object(a.a)(t,["options"]);return e.options[n]=o,e.configs[n]=i,e}),{options:{},configs:{}}),l=u.configs,d=u.options,s={normalizeByKey:"population",multiplyFactor:1e6},f=["tested","tpr","population"],p=["confirmed","active","recovered","deceased"],h=[].concat(p,["tested"]),v=Object.keys(c),m=[].concat(p,["tested"]),y=5,g=30,b=300,k=20,w=7,N="UN",C="Unknown",j=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g,T="T00:00:00+12:00",O={clamp:!0,precision:1},S={total:"Cumulative",delta:"Daily"},W={BEGINNING:"Beginning",THREE_MONTHS:"3 Months",MONTH:"1 Month"},B={CHOROPLETH:0,BUBBLES:1},A={COUNTRY:0,DISTRICTS:1},D={COUNTRY:0,STATE:1},M={UP:{geoDataFile:"".concat("/mini_maps","/uttarpradesh.json"),mapType:D.STATE},WB:{geoDataFile:"".concat("/mini_maps","/westbengal.json"),mapType:D.STATE},TT:{geoDataFile:"".concat("/mini_maps","/0.21-NZ_District_Health_Board_boundaries.json"),mapType:D.COUNTRY}},U={english:"newzealand.jpg",japanese:"japan.svg",chinese:"china.jpg"},E=50,P={Auckland:"Auckland","Bay of Plenty":"Bay of Plenty",Canterbury:"Canterbury","Capital and Coast":"Capital and Coast","Counties Manukau":"Counties Manukau","Hawke's Bay":"Hawke's Bay","Hutt Valley":"Hutt Valley",Lakes:"Lakes",Midcentral:"Midcentral","Nelson Marlborough":"Nelson Marlborough",Northland:"Northland","South Canterbury":"South Canterbury",Southern:"Southern",Tairawhiti:"Tairawhiti",Taranaki:"Taranaki",Waikato:"Waikato",Wairarapa:"Wairarapa",Waitemata:"Waitemata","West Coast":"West Coast",Whanganui:"Whanganui","New Zealand":"New Zealand"},z={NLD:"Northland",NWA:"Waitemata",CAK:"Auckland",SAK:"Counties Manukau",WKO:"Waikato",LKS:"Lakes",BOP:"Bay of Plenty",TRW:"Tairawhiti",TKI:"Taranaki",HWB:"Hawke's Bay",WNI:"Whanganui",MWU:"Midcentral",HUT:"Hutt Valley",CAP:"Capital and Coast",WRP:"Wairarapa",NLM:"Nelson Marlborough",WCO:"West Coast",CTY:"Canterbury",SCY:"South Canterbury",SRN:"Southern",TT:"New Zealand"},F=[],H={};Object.keys(P).map((function(e,n){return H[P[e]]=e,F.push({code:e,name:P[e]}),null}));var K=H,R=F},72:function(e,n,t){"use strict";t.r(n);var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=t(31),r=t(7),c=t(22),u=t(55),l=t(56),d=t(79);c.a.use(l.a).use(u.a).use(d.e).init({debug:Object(i.j)()&&!1,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:r.a+"/locales/locale_{{lng}}.json",addPath:"http://localhost:9999/"},saveMissing:Object(i.j)()&&!1,interpolation:{escapeValue:!1}});c.a;var s=t(0),f=t.n(s),p=t(45),h=t(38),v=Object(s.lazy)((function(){return Promise.all([t.e(11),t.e(17)]).then(t.bind(null,239))})),m=document.getElementById("root"),y=function(){return Object(p.render)(f.a.createElement(s.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(h.a,null,f.a.createElement(v,null))),m)};window.requestIdleCallback&&window.IntersectionObserver?y():function(e,n){var t=document.createElement("script");t.src=e,t.onload=function(){n()},t.onerror=function(){n(new Error("Failed to load script "+e))},document.head.appendChild(t)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",y),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var n="".concat("","/service-worker.js");a?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(n,e)}),3e3)}))}}()}},[[63,8,9]]]);
//# sourceMappingURL=main.baed9fc6.chunk.js.map