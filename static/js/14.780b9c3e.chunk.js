(this["webpackJsonpnz.covid19live"]=this["webpackJsonpnz.covid19live"]||[]).push([[14,40],{139:function(e,t,n){"use strict";var a=n(22),r=n(94),i=n(9),o=n(27),l=n(80),c=n(73),s=n.n(c),u=n(74),d=n.n(u),m=n(83),f=n(0),p=n.n(f),b=n(235),g=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},v=function(e,t){var n=void 0===t?{}:t,a=n.isPreventDefault,r=void 0===a||a,i=n.delay,o=void 0===i?300:i,l=Object(f.useRef)(),c=Object(f.useRef)(),s=Object(f.useCallback)((function(t){r&&t.target&&(t.target.addEventListener("touchend",g,{passive:!1}),c.current=t.target),l.current=setTimeout((function(){return e(t)}),o)}),[e,o]),u=Object(f.useCallback)((function(){l.current&&clearTimeout(l.current),r&&c.current&&c.current.removeEventListener("touchend",g)}),[]);return{onMouseDown:function(e){return s(e)},onTouchStart:function(e){return s(e)},onMouseUp:u,onMouseLeave:u,onTouchEnd:u}};t.a=p.a.memo((function(e){var t=e.handleSort,n=e.sortData,c=e.setSortData,u=e.statistic,d=Object(b.a)().t,f=v((function(){n.sortColumn===u&&c(Object(m.a)(n,(function(e){e.delta=!n.delta})))}),{isPreventDefault:!1});return p.a.createElement("div",Object.assign({className:"cell heading",onClick:t.bind(this,u)},f),n.sortColumn===u&&p.a.createElement("div",{className:s()("sort-icon",Object(a.a)({invert:n.isAscending},"is-".concat(u),n.delta))},p.a.createElement(l.d,{size:10})),p.a.createElement("div",null,d(Object(o.l)(i.v[u].displayName))),"confirmed"===u&&p.a.createElement(r.a,{data:"Combines confirmed and probable cases, as per NZ Ministry of Health guidelines"},p.a.createElement(l.h,{size:14})))}),(function(e,t){return!!d()(e.sortData,t.sortData)}))},164:function(e,t,n){var a=n(165),r=["getDistricts"];e.exports=function(){var e=new Worker(n.p+"2607bfc30afc84ea4e21.worker.js",{name:"[hash].worker.js"});return a(e,r),e}},165:function(e,t){e.exports=function(e,t){var n=0,a={};e.addEventListener("message",(function(t){var n=t.data;if("RPC"===n.type)if(n.id){var r=a[n.id];r&&(delete a[n.id],n.error?r[1](Object.assign(Error(n.error.message),n.error)):r[0](n.result))}else{var i=document.createEvent("Event");i.initEvent(n.method,!1,!1),i.data=n.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){var r=arguments;return new Promise((function(i,o){var l=++n;a[l]=[i,o],e.postMessage({type:"RPC",id:l,method:t,params:[].slice.call(r)})}))}}))}},226:function(e,t,n){"use strict";n.r(t);var a=n(72),r=n(139),i=n(0),o=n.n(i),l=n(86),c=function(){var e=window.innerWidth,t=e>769?448:e;return o.a.createElement("div",{className:"TableLoader"},o.a.createElement(l.a,{viewBox:"0 0 ".concat(t," ").concat(135),height:135,width:t,speed:2,animate:!1},o.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:t,height:"40"}),o.a.createElement("rect",{x:"0",y:"45",rx:"3",ry:"3",width:t,height:"40"}),o.a.createElement("rect",{x:"0",y:"90",rx:"3",ry:"3",width:t,height:"40"})))},s=n(9),u=n(80),d=n(73),m=n.n(d),f=n(235),p=function(){var e=Object(f.a)().t,t=Object(i.useState)(0),n=Object(a.a)(t,2),r=n[0],l=n[1];return Object(i.useEffect)((function(){var e=window.setTimeout((function(){l((function(e){return e===s.x.length-1?0:e+1})),window.clearTimeout(e)}),1e3)}),[r]),o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:m()("is-".concat(s.x[r]))},o.a.createElement(u.d,{size:14})),o.a.createElement("p",null,e("Sort by Delta [long press]")))},b=n(88),g=n(27),v=n(2),h=n(1);var E=n(74),O=n.n(E),y=n(83),j=n(77),C=n(199),N=n(164),x=n.n(N),T=Object(i.lazy)((function(){return n.e(34).then(n.bind(null,230))}));t.default=o.a.memo((function(e){var t=this,n=e.data,l=e.date,d=e.regionHighlighted,E=e.setRegionHighlighted,O=e.expandTable,N=e.setExpandTable,k=Object(f.a)().t,w=Object(C.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),S=Object(a.a)(w,2),D=S[0],P=S[1],H=Object(i.useCallback)((function(e){D.sortColumn!==e?P(Object(y.a)(D,(function(t){t.sortColumn=e}))):P(Object(y.a)(D,(function(e){e.isAscending=!D.isAscending})))}),[D,P]),z=Object(j.e)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:j.b.wobbly}),M=Object(i.useState)(),A=Object(a.a)(M,2),R=A[0],U=A[1],L=Object(i.useState)("States"),B=Object(a.a)(L,2),I=B[0],_=B[1],K=Object(i.useState)(!1),Z=Object(a.a)(K,2),q=Z[0],F=Z[1],J=Object(i.useState)(!1),W=Object(a.a)(J,2),G=W[0],V=W[1],X=Object(i.useMemo)((function(){var e,t,a,r,i;return function(e){var t,n;if(Object(h.a)(1,arguments),e&&"function"===typeof e.forEach)t=e;else{if("object"!==typeof e||null===e)return new Date(NaN);t=Array.prototype.slice.call(e)}return t.forEach((function(e){var t=Object(v.a)(e);(void 0===n||n<t||isNaN(t))&&(n=t)})),n||new Date(NaN)}([(null===(e=n.TT)||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.last_updated)||l,null===(a=n.TT)||void 0===a||null===(r=a.meta)||void 0===r||null===(i=r.tested)||void 0===i?void 0:i.last_updated].filter((function(e){return e})).map((function(e){return Object(g.k)(e)})))}),[n,l]),Q=Object(i.useCallback)((function(e,t){if("regionName"!==D.sortColumn){var a=s.v[D.sortColumn],r=D.delta&&!a.hideDelta?"delta":"total",i=Object(g.i)((null===R||void 0===R?void 0:R[e])||n[e],D.sortColumn,q,X)[r],o=Object(g.i)((null===R||void 0===R?void 0:R[t])||n[t],D.sortColumn,q,X)[r];return D.isAscending?i-o:o-i}var l,c,u=(null===R||void 0===R||null===(l=R[e])||void 0===l?void 0:l.districtName)||s.e[e],d=(null===R||void 0===R||null===(c=R[t])||void 0===c?void 0:c.districtName)||s.e[t];return D.isAscending?u.localeCompare(d):d.localeCompare(u)}),[R,q,X,D.delta,D.isAscending,D.sortColumn,n]);Object(i.useCallback)((function(){_((function(e){return"States"===e?"Districts":"States"}))}),[]),Object(i.useEffect)((function(){var e=x()();e.getDistricts(n),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(U(t.data),e.terminate())}))}),[I,n]);var Y=Object(j.f)(G,null,{from:b.d,enter:b.c,leave:b.d}),$=O?s.y:s.x;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"table-top"},o.a.createElement(j.a.div,{className:m()("million-toggle",{"is-highlighted":q}),onClick:F.bind(this,!q),style:z[0]},o.a.createElement("span",null,k("10K"))),o.a.createElement(j.a.div,{className:m()("info-toggle",{"is-highlighted":G}),onClick:V.bind(this,!G),style:z[0]},o.a.createElement(u.k,{size:14})),o.a.createElement(j.a.div,{className:m()("expand-table-toggle",{"is-highlighted":O}),style:z[1],onClick:N.bind(this,!O)},o.a.createElement(u.e,{size:16}))),Y.map((function(e){var t=e.item,n=e.key,r=e.props;return t?o.a.createElement(j.a.div,{key:n,className:"table-helper",style:r},o.a.createElement("div",{className:"helper-top"},o.a.createElement("div",{className:"helper-left"},o.a.createElement("div",{className:"info-item"},o.a.createElement("h5",null,k("10K")),o.a.createElement("p",null,k("Per Ten Thousand People"))),o.a.createElement("div",{className:"info-item sort"},o.a.createElement("span",null,o.a.createElement(u.d,{size:14})),o.a.createElement("p",null,k("Sort by Descending"))),o.a.createElement("div",{className:"info-item sort invert"},o.a.createElement("span",null,o.a.createElement(u.d,{size:14})),o.a.createElement("p",null,k("Sort by Ascending"))),o.a.createElement("div",{className:"info-item sort"},o.a.createElement(p,null))),o.a.createElement("div",{className:"helper-right"},o.a.createElement("div",{className:"info-item"},o.a.createElement("p",{style:{whiteSpace:"nowrap"}},k("Units"))),Object.entries({"1K":3}).map((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"info-item",key:n},o.a.createElement("h5",null,n),o.a.createElement("p",null,"10",o.a.createElement("sup",{style:{verticalAlign:"baseline",position:"relative",top:"-.4em"}},r)))})))),o.a.createElement("h5",{className:"text"},k("Compiled from the NZ Ministry Of Health. figures"),","," ",o.a.createElement("a",{href:"https://www.stats.govt.nz/experimental/covid-19-data-portal",target:"_blank",rel:"noopener noreferrer"},k("know more")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",null,k("New Zealand's COVID19 data is collected per DHB (District Health Board) rather than direct regional district boundaries.")),o.a.createElement("a",{target:"_blank",href:"https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases",rel:"noopener noreferrer"},k("Source")))):null})),o.a.createElement("div",{className:"table-container"},o.a.createElement("div",{className:"table fadeInUp",style:{gridTemplateColumns:"repeat(".concat($.length+1,", auto)")}},o.a.createElement("div",{className:"row heading"},o.a.createElement("div",{className:"cell heading",onClick:H.bind(this,"regionName")},o.a.createElement("div",null,k("States"===I?"District Health Board":"States/UT")),"regionName"===D.sortColumn&&o.a.createElement("div",{className:m()("sort-icon",{invert:D.isAscending})},o.a.createElement(u.d,{size:10}))),$.map((function(e){return o.a.createElement(r.a,Object.assign({key:e},{statistic:e,sortData:D,setSortData:P},{handleSort:H.bind(t,e)}))}))),"States"===I&&Object.keys(n).filter((function(e){return"TT"!==e&&!(e===s.D&&q)})).sort((function(e,t){return Q(e,t)})).map((function(e){return o.a.createElement(T,Object.assign({key:e,data:n[e]},{stateCode:e,isPerMillion:q,regionHighlighted:d,setRegionHighlighted:E,expandTable:O,lastUpdatedTT:X}))})),"Districts"===I&&!R&&o.a.createElement(c,null),"Districts"===I&&R&&Object.keys(R).sort((function(e,t){return Q(e,t)})).slice(0,s.g).map((function(e){return o.a.createElement(T,Object.assign({key:e,data:R[e],districtName:R[e].districtName},{isPerMillion:q,regionHighlighted:d,setRegionHighlighted:E,expandTable:O,lastUpdatedTT:X}))})),o.a.createElement(T,Object.assign({key:"TT",data:n.TT,stateCode:"TT"},{isPerMillion:q,regionHighlighted:d,setRegionHighlighted:E,expandTable:O,lastUpdatedTT:X})))))}),(function(e,t){var n,a,r,i;return!!O()(null===(n=e.regionHighlighted)||void 0===n?void 0:n.districtName,null===(a=t.regionHighlighted)||void 0===a?void 0:a.districtName)&&(!!O()(null===(r=e.regionHighlighted)||void 0===r?void 0:r.stateCode,null===(i=t.regionHighlighted)||void 0===i?void 0:i.stateCode)&&(!!O()(e.date,t.date)&&(!!O()(e.data.TT.total.confirmed,t.data.TT.total.confirmed)&&!!O()(e.expandTable,t.expandTable))))}))},74:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var a,r,i;if(Array.isArray(t)){if((a=t.length)!=n.length)return!1;for(r=a;0!==r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((a=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=a;0!==r--;)if(!Object.prototype.hasOwnProperty.call(n,i[r]))return!1;for(r=a;0!==r--;){var o=i[r];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n}},86:function(e,t,n){"use strict";var a=n(0),r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,n=e.backgroundColor,i=e.backgroundOpacity,o=e.baseUrl,l=e.children,c=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,m=e.interval,f=e.rtl,p=e.speed,b=e.style,g=e.title,v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),h=d||Math.random().toString(36).substring(6),E=h+"-diff",O=h+"-animated-diff",y=h+"-aria",j=f?{transform:"scaleX(-1)"}:null,C="0; "+m+"; 1",N=p+"s";return Object(a.createElement)("svg",r({"aria-labelledby":y,role:"img",style:r(r({},b),j)},v),g?Object(a.createElement)("title",{id:y},g):null,Object(a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+E+")",style:{fill:"url("+o+"#"+O+")"}}),Object(a.createElement)("defs",{role:"presentation"},Object(a.createElement)("clipPath",{id:E},l),Object(a.createElement)("linearGradient",{id:O},Object(a.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:c,stopOpacity:s},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:C,dur:N,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var o=function(e){return e.children?Object(a.createElement)(i,r({},e)):Object(a.createElement)(l,r({},e))},l=function(e){return Object(a.createElement)(o,r({viewBox:"0 0 476 124"},e),Object(a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=o},88:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return c}));var a={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},r={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},i={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},o={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},l={opacity:1,transform:"translate3d(0, 0px, 0)",height:200},c={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}},94:function(e,t,n){"use strict";var a=n(72),r=n(88),i=n(0),o=n.n(i),l=n(77);t.a=function(e){var t=e.data,n=e.children,c=Object(i.useState)(!1),s=Object(a.a)(c,2),u=s[0],d=s[1],m=Object(l.f)(u,null,{from:r.f,enter:r.e,leave:r.f,config:{mass:1,tension:210,friction:20}}),f=Object(i.useCallback)((function(e){return e.stopPropagation()}),[]);return o.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:d.bind(void 0,!0),onMouseLeave:d.bind(void 0,!1),onClick:f.bind(void 0)},n,m.map((function(e){var n=e.item,a=e.key,r=e.props;return n?o.a.createElement(l.a.div,{key:a,style:r},o.a.createElement("div",{className:"message"},o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):o.a.createElement(l.a.div,{key:a})})))}}}]);
//# sourceMappingURL=14.780b9c3e.chunk.js.map