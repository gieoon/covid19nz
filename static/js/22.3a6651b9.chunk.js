(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[22],{233:function(e,t,a){"use strict";a.r(t);var n=a(72),l=a(9),c=a(93),r=a(28),i=a(46),s=a(83),u=a(0),o=a.n(u),d=a(191),b=a(98);var m=function(e,t,a){for(var l=Object(u.useState)(a),c=Object(n.a)(l,2),o=c[0],m=c[1],h=arguments.length,O=new Array(h>3?h-3:0),E=3;E<h;E++)O[E-3]=arguments[E];var j=b.a.apply(void 0,[e,t,o].concat(O)),f=j.data,v=j.isValidating,p=j.error,g=Object(i.a)(j,["data","isValidating","error"]);return Object(d.a)((function(){m(Object(s.a)(o,(function(e){e.initialData=f})))}),[f]),Object(r.a)(Object(r.a)({},g),{},{isValidating:v,error:p,data:f})},h=a(27),O=a(73),E=a.n(O),j=a(103),f=a(5),v=a(154),p=a(199),g=a(189),T=Object(u.lazy)((function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,188))})),y=Object(u.lazy)((function(){return Promise.all([a.e(0),a.e(6),a.e(40)]).then(a.bind(null,229))})),S=Object(u.lazy)((function(){return a.e(30).then(a.bind(null,225))})),k=Object(u.lazy)((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,226))})),x=Object(u.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(26)]).then(a.bind(null,166))})),z=Object(u.lazy)((function(){return a.e(31).then(a.bind(null,101))})),C=Object(u.lazy)((function(){return a.e(35).then(a.bind(null,221))})),H=Object(u.lazy)((function(){return Promise.all([a.e(0),a.e(23)]).then(a.bind(null,127))})),N=Object(u.lazy)((function(){return a.e(24).then(a.bind(null,128))})),M=Object(u.lazy)((function(){return a.e(27).then(a.bind(null,137))})),P=Object(u.lazy)((function(){return Promise.all([a.e(0),a.e(37)]).then(a.bind(null,236))})),w=Object(u.lazy)((function(){return a.e(32).then(a.bind(null,205))}));t.default=function(){var e,t,a=Object(u.useState)({stateCode:"TT",districtName:null}),r=Object(n.a)(a,2),i=r[0],s=r[1],d=Object(v.a)("anchor",null),b=Object(n.a)(d,2),O=b[0],I=b[1],R=Object(v.a)("expandTable",!1),A=Object(n.a)(R,2),V=A[0],D=A[1],F=Object(p.a)("mapStatistic","confirmed"),J=Object(n.a)(F,2),Z=J[0],L=J[1],q=Object(u.useState)(""),B=Object(n.a)(q,2),G=B[0],K=B[1],Q=Object(f.h)(),U=m("".concat(l.b,"/timeseries.min.json"),h.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,W=m("".concat(l.b,"/days/data").concat(G?"-".concat(G):"",".min.json"),h.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,X=Object(u.useRef)(),Y=Object(c.a)(X),$=Object(g.a)().width;return o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a,null,o.a.createElement("title",null,"Coronavirus Outbreak in NZ - nz.covid19live.com"),o.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in NZ: Latest Map and Case Count"})),o.a.createElement("div",{className:"Home"},o.a.createElement(P,null),o.a.createElement(w,{client:"ca-pub-9859357986849249",slot:"3842985080"}),o.a.createElement("div",{className:E()("home-left",{expanded:V})},o.a.createElement("div",{className:"header"},o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(C,null)),U&&o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",{style:{minHeight:"56px"}})},o.a.createElement(S,{setDate:K,dates:Object.keys(null===(e=U.TT)||void 0===e?void 0:e.dates).reverse(),date:G}))),o.a.createElement("div",{style:{position:"relative",marginTop:"1rem"}},W&&o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",{style:{height:"50rem"}})},$>769&&o.a.createElement(N,{mapStatistic:Z,setMapStatistic:L}),o.a.createElement(H,{data:W.TT})),U&&o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",{style:{height:"50rem"}})},o.a.createElement(x,Object.assign({timeseries:null===(t=U.TT)||void 0===t?void 0:t.dates},{date:G})))),W&&o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(k,{data:W,regionHighlighted:i,setRegionHighlighted:s,expandTable:V,setExpandTable:D}))),o.a.createElement("div",{className:E()("home-right",{expanded:V}),ref:X},(Y||Q.hash)&&o.a.createElement(o.a.Fragment,null,W&&o.a.createElement("div",{className:E()("map-container",{expanded:V})},o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",{style:{height:"50rem"}})},o.a.createElement(M,{data:W.TT,stateCode:"TT"}),o.a.createElement(y,Object.assign({stateCode:"TT"},{data:W},{mapStatistic:Z,setMapStatistic:L},{regionHighlighted:i,setRegionHighlighted:s},{anchor:O,setAnchor:I},{expandTable:V})))),U&&o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(T,Object.assign({stateCode:"TT"},{timeseries:U,date:G,regionHighlighted:i,setRegionHighlighted:s,anchor:O,setAnchor:I,expandTable:V})))))),o.a.createElement(w,{client:"ca-pub-9859357986849249",slot:"2856565840"}),Y&&o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(z,null)))}},93:function(e,t,a){"use strict";var n=a(72),l=a(0),c={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(l.useState)(!1),a=Object(n.a)(t,2),r=a[0],i=a[1];return Object(l.useEffect)((function(){e.current&&new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&(i(!0),a.unobserve(e.current))}))}),c).observe(e.current)}),[e]),r}}}]);
//# sourceMappingURL=22.3a6651b9.chunk.js.map