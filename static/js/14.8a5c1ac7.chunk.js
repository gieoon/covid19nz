(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[14],{103:function(e,t,a){"use strict";var n=a(81),r=a(101),i=a(0),l=a.n(i),c=a(84);t.a=function(e){var t=e.data,a=e.children,o=Object(i.useState)(!1),s=Object(n.a)(o,2),u=s[0],d=s[1],m=Object(c.f)(u,null,{from:r.j,enter:r.i,leave:r.j,config:{mass:1,tension:210,friction:20}}),f=Object(i.useCallback)((function(e){return e.stopPropagation()}),[]);return l.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:d.bind(void 0,!0),onMouseLeave:d.bind(void 0,!1),onClick:f.bind(void 0)},a,m.map((function(e){var a=e.item,n=e.key,r=e.props;return a?l.a.createElement(c.a.div,{key:n,style:r},l.a.createElement("div",{className:"message"},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):l.a.createElement(c.a.div,{key:n})})))}},147:function(e,t,a){"use strict";var n=a(19),r=a(103),i=a(7),l=a(31),c=a(88),o=a(82),s=a.n(o),u=a(85),d=a.n(u),m=a(92),f=a(0),b=a.n(f),v=a(251),g=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},p=function(e,t){var a=void 0===t?{}:t,n=a.isPreventDefault,r=void 0===n||n,i=a.delay,l=void 0===i?300:i,c=Object(f.useRef)(),o=Object(f.useRef)(),s=Object(f.useCallback)((function(t){r&&t.target&&(t.target.addEventListener("touchend",g,{passive:!1}),o.current=t.target),c.current=setTimeout((function(){return e(t)}),l)}),[e,l]),u=Object(f.useCallback)((function(){c.current&&clearTimeout(c.current),r&&o.current&&o.current.removeEventListener("touchend",g)}),[]);return{onMouseDown:function(e){return s(e)},onTouchStart:function(e){return s(e)},onMouseUp:u,onMouseLeave:u,onTouchEnd:u}};t.a=b.a.memo((function(e){var t=e.handleSort,a=e.sortData,o=e.setSortData,u=e.statistic,d=Object(v.a)().t,f=p((function(){a.sortColumn===u&&o(Object(m.a)(a,(function(e){e.delta=!a.delta})))}),{isPreventDefault:!1});return b.a.createElement("div",Object.assign({className:"cell heading",onClick:t.bind(this,u)},f),a.sortColumn===u&&b.a.createElement("div",{className:s()("sort-icon",Object(n.a)({invert:a.isAscending},"is-".concat(u),a.delta))},b.a.createElement(c.e,{size:10})),b.a.createElement("div",null,d(Object(l.l)(i.t[u].displayName))),"other"===u&&b.a.createElement(r.a,{data:"Migrated cases or non-COVID deaths"},b.a.createElement(c.j,{size:14})))}),(function(e,t){return!!d()(e.sortData,t.sortData)}))},173:function(e,t,a){var n=a(174),r=["getDistricts"];e.exports=function(){var e=new Worker(a.p+"2607bfc30afc84ea4e21.worker.js",{name:"[hash].worker.js"});return n(e,r),e}},174:function(e,t){e.exports=function(e,t){var a=0,n={};e.addEventListener("message",(function(t){var a=t.data;if("RPC"===a.type)if(a.id){var r=n[a.id];r&&(delete n[a.id],a.error?r[1](Object.assign(Error(a.error.message),a.error)):r[0](a.result))}else{var i=document.createEvent("Event");i.initEvent(a.method,!1,!1),i.data=a.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){var r=arguments;return new Promise((function(i,l){var c=++a;n[c]=[i,l],e.postMessage({type:"RPC",id:c,method:t,params:[].slice.call(r)})}))}}))}},241:function(e,t,a){"use strict";a.r(t);var n=a(81),r=a(147),i=a(0),l=a.n(i),c=a(95),o=function(){var e=window.innerWidth,t=e>769?448:e;return l.a.createElement("div",{className:"TableLoader"},l.a.createElement(c.a,{viewBox:"0 0 ".concat(t," ").concat(135),height:135,width:t,speed:2,animate:!1},l.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:t,height:"40"}),l.a.createElement("rect",{x:"0",y:"45",rx:"3",ry:"3",width:t,height:"40"}),l.a.createElement("rect",{x:"0",y:"90",rx:"3",ry:"3",width:t,height:"40"})))},s=a(7),u=a(88),d=a(82),m=a.n(d),f=function(){var e=Object(i.useState)(0),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(i.useEffect)((function(){var e=window.setTimeout((function(){r((function(e){return e===s.v.length-1?0:e+1})),window.clearTimeout(e)}),1e3)}),[a]),l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:m()("is-".concat(s.v[a]))},l.a.createElement(u.e,{size:14})),l.a.createElement("p",null,"Sort by Delta [long press]"))},b=a(101),v=a(31),g=a(2),p=a(1);var h=a(85),E=a.n(h),O=a(92),j=a(251),y=a(38),C=a(84),N=a(213),T=a(173),k=a.n(T),w=Object(i.lazy)((function(){return a.e(33).then(a.bind(null,247))}));t.default=l.a.memo((function(e){var t=this,a=e.data,c=e.date,d=e.regionHighlighted,h=e.setRegionHighlighted,E=e.expandTable,T=e.setExpandTable,x=Object(j.a)().t,D=Object(N.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),S=Object(n.a)(D,2),P=S[0],H=S[1],L=Object(i.useCallback)((function(e){P.sortColumn!==e?H(Object(O.a)(P,(function(t){t.sortColumn=e}))):H(Object(O.a)(P,(function(e){e.isAscending=!P.isAscending})))}),[P,H]),M=Object(C.e)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:C.b.wobbly}),z=Object(i.useState)(),R=Object(n.a)(z,2),A=R[0],U=R[1],I=Object(i.useState)("States"),_=Object(n.a)(I,2),B=_[0],K=_[1],q=Object(i.useState)(!1),F=Object(n.a)(q,2),G=F[0],J=F[1],W=Object(i.useState)(!1),V=Object(n.a)(W,2),X=V[0],Q=V[1],Y=Object(i.useMemo)((function(){var e,t,n,r,i;return function(e){var t,a;if(Object(p.a)(1,arguments),e&&"function"===typeof e.forEach)t=e;else{if("object"!==typeof e||null===e)return new Date(NaN);t=Array.prototype.slice.call(e)}return t.forEach((function(e){var t=Object(g.a)(e);(void 0===a||a<t||isNaN(t))&&(a=t)})),a||new Date(NaN)}([(null===(e=a.TT)||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.last_updated)||c,null===(n=a.TT)||void 0===n||null===(r=n.meta)||void 0===r||null===(i=r.tested)||void 0===i?void 0:i.last_updated].filter((function(e){return e})).map((function(e){return Object(v.k)(e)})))}),[a,c]),Z=Object(i.useCallback)((function(e,t){if("regionName"!==P.sortColumn){var n=s.t[P.sortColumn],r=P.delta&&!n.hideDelta?"delta":"total",i=Object(v.i)((null===A||void 0===A?void 0:A[e])||a[e],P.sortColumn,G,Y)[r],l=Object(v.i)((null===A||void 0===A?void 0:A[t])||a[t],P.sortColumn,G,Y)[r];return P.isAscending?i-l:l-i}var c,o,u=(null===A||void 0===A||null===(c=A[e])||void 0===c?void 0:c.districtName)||s.s[e],d=(null===A||void 0===A||null===(o=A[t])||void 0===o?void 0:o.districtName)||s.s[t];return P.isAscending?u.localeCompare(d):d.localeCompare(u)}),[A,G,Y,P.delta,P.isAscending,P.sortColumn,a]),$=Object(i.useCallback)((function(){K((function(e){return"States"===e?"Districts":"States"}))}),[]);Object(i.useEffect)((function(){var e=k()();e.getDistricts(a),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(U(t.data),e.terminate())}))}),[B,a]);var ee=Object(C.f)(X,null,{from:b.h,enter:b.g,leave:b.h}),te=E?s.w:s.v;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"table-top"},l.a.createElement(C.a.div,{className:m()("option-toggle",{"is-highlighted":"Districts"===B}),onClick:$,style:M[0]},l.a.createElement(u.l,{size:14})),l.a.createElement(C.a.div,{className:m()("million-toggle",{"is-highlighted":G}),onClick:J.bind(this,!G),style:M[0]},l.a.createElement("span",null,"10L")),l.a.createElement(C.a.div,{className:m()("info-toggle",{"is-highlighted":X}),onClick:Q.bind(this,!X),style:M[0]},l.a.createElement(u.n,{size:14})),l.a.createElement(C.a.div,{className:m()("expand-table-toggle",{"is-highlighted":E}),style:M[1],onClick:T.bind(this,!E)},l.a.createElement(u.f,{size:16}))),ee.map((function(e){var t=e.item,a=e.key,r=e.props;return t?l.a.createElement(C.a.div,{key:a,className:"table-helper",style:r},l.a.createElement("div",{className:"helper-top"},l.a.createElement("div",{className:"helper-left"},l.a.createElement("div",{className:"info-item"},l.a.createElement("span",null,l.a.createElement(u.l,{size:14})),l.a.createElement("p",null,"Toggle between States/Districts")),l.a.createElement("div",{className:"info-item"},l.a.createElement("h5",null,"10L"),l.a.createElement("p",null,"Per Ten Lakh People")),l.a.createElement("div",{className:"info-item sort"},l.a.createElement("span",null,l.a.createElement(u.e,{size:14})),l.a.createElement("p",null,"Sort by Descending")),l.a.createElement("div",{className:"info-item sort invert"},l.a.createElement("span",null,l.a.createElement(u.e,{size:14})),l.a.createElement("p",null,"Sort by Ascending")),l.a.createElement("div",{className:"info-item sort"},l.a.createElement(f,null)),l.a.createElement("div",{className:"info-item notes"},l.a.createElement("span",null,l.a.createElement(u.j,{size:15})),l.a.createElement("p",null,"Notes"))),l.a.createElement("div",{className:"helper-right"},l.a.createElement("div",{className:"info-item"},l.a.createElement("p",null,"Units")),Object.entries({"1K":3,"1L":5,"1Cr":7}).map((function(e){var t=Object(n.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"info-item",key:a},l.a.createElement("h5",null,a),l.a.createElement("p",null,"10",l.a.createElement("sup",{style:{verticalAlign:"baseline",position:"relative",top:"-.4em"}},r)))})))),l.a.createElement("h5",{className:"text"},x("Compiled from State Govt. numbers"),","," ",l.a.createElement(y.b,{to:"/about"},x("know more"),"!"))):null})),l.a.createElement("div",{className:"table-container"},l.a.createElement("div",{className:"table fadeInUp",style:{gridTemplateColumns:"repeat(".concat(te.length+1,", auto)")}},l.a.createElement("div",{className:"row heading"},l.a.createElement("div",{className:"cell heading",onClick:L.bind(this,"regionName")},l.a.createElement("div",null,x("States"===B?"State/UT":"District")),"regionName"===P.sortColumn&&l.a.createElement("div",{className:m()("sort-icon",{invert:P.isAscending})},l.a.createElement(u.e,{size:10}))),te.map((function(e){return l.a.createElement(r.a,Object.assign({key:e},{statistic:e,sortData:P,setSortData:H},{handleSort:L.bind(t,e)}))}))),"States"===B&&Object.keys(a).filter((function(e){return"TT"!==e&&!(e===s.B&&G)})).sort((function(e,t){return Z(e,t)})).map((function(e){return l.a.createElement(w,Object.assign({key:e,data:a[e]},{stateCode:e,isPerMillion:G,regionHighlighted:d,setRegionHighlighted:h,expandTable:E,lastUpdatedTT:Y}))})),"Districts"===B&&!A&&l.a.createElement(o,null),"Districts"===B&&A&&Object.keys(A).sort((function(e,t){return Z(e,t)})).slice(0,s.c).map((function(e){return l.a.createElement(w,Object.assign({key:e,data:A[e],districtName:A[e].districtName},{isPerMillion:G,regionHighlighted:d,setRegionHighlighted:h,expandTable:E,lastUpdatedTT:Y}))})),l.a.createElement(w,Object.assign({key:"TT",data:a.TT,stateCode:"TT"},{isPerMillion:G,regionHighlighted:d,setRegionHighlighted:h,expandTable:E,lastUpdatedTT:Y})))))}),(function(e,t){var a,n,r,i;return!!E()(null===(a=e.regionHighlighted)||void 0===a?void 0:a.districtName,null===(n=t.regionHighlighted)||void 0===n?void 0:n.districtName)&&(!!E()(null===(r=e.regionHighlighted)||void 0===r?void 0:r.stateCode,null===(i=t.regionHighlighted)||void 0===i?void 0:i.stateCode)&&(!!E()(e.date,t.date)&&(!!E()(e.data.TT.total.confirmed,t.data.TT.total.confirmed)&&!!E()(e.expandTable,t.expandTable))))}))},95:function(e,t,a){"use strict";var n=a(0),r=function(){return(r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,a=e.backgroundColor,i=e.backgroundOpacity,l=e.baseUrl,c=e.children,o=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,m=e.interval,f=e.rtl,b=e.speed,v=e.style,g=e.title,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),h=d||Math.random().toString(36).substring(6),E=h+"-diff",O=h+"-animated-diff",j=h+"-aria",y=f?{transform:"scaleX(-1)"}:null,C="0; "+m+"; 1",N=b+"s";return Object(n.createElement)("svg",r({"aria-labelledby":j,role:"img",style:r(r({},v),y)},p),g?Object(n.createElement)("title",{id:j},g):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+E+")",style:{fill:"url("+l+"#"+O+")"}}),Object(n.createElement)("defs",{role:"presentation"},Object(n.createElement)("clipPath",{id:E},c),Object(n.createElement)("linearGradient",{id:O},Object(n.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:C,dur:N,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var l=function(e){return e.children?Object(n.createElement)(i,r({},e)):Object(n.createElement)(c,r({},e))},c=function(e){return Object(n.createElement)(l,r({viewBox:"0 0 476 124"},e),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=l}}]);
//# sourceMappingURL=14.8a5c1ac7.chunk.js.map