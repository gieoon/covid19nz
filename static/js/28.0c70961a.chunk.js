(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[28],{197:function(e,t,a){"use strict";a.r(t);var r=a(108),n=a(81),i=a(0),c=a.n(i),o=a(95),s=function(){var e=window.innerWidth,t=e>769?480:e;return c.a.createElement(o.a,{viewBox:"0 0 ".concat(t," ").concat(800),height:800,width:t,speed:2},c.a.createElement("circle",{cx:.4*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.5*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.6*t,cy:400,r:"5"}))},l=a(7),d=a(102),m=a(31),u=a(90),b=a(82),O=a.n(b),f=a(61),h=a(62),j=a(4),p=a(2),g=a(1);function v(e,t){Object(g.a)(2,arguments);var a=Object(p.a)(e),r=Object(j.a)(t);if(isNaN(r))return new Date(NaN);if(!r)return a;var n=a.getDate(),i=new Date(a.getTime());i.setMonth(a.getMonth()+r+1,0);var c=i.getDate();return n>=c?i:(a.setFullYear(i.getFullYear(),i.getMonth(),n),a)}function y(e,t){Object(g.a)(2,arguments);var a=Object(j.a)(t);return v(e,-a)}function E(e,t){if(Object(g.a)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var a="years"in t?Object(j.a)(t.years):0,r="months"in t?Object(j.a)(t.months):0,n="weeks"in t?Object(j.a)(t.weeks):0,i="days"in t?Object(j.a)(t.days):0,c="hours"in t?Object(j.a)(t.hours):0,o="minutes"in t?Object(j.a)(t.minutes):0,s="seconds"in t?Object(j.a)(t.seconds):0,l=y(Object(p.a)(e),r+12*a),d=Object(h.a)(l,i+7*n),m=o+60*c,u=s+60*m,b=1e3*u,O=new Date(d.getTime()-b);return O}var N=a(86),C=a.n(N),k=a(245),x=a(208),w=a(163),T=Object(i.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(5),a.e(27)]).then(a.bind(null,237))}));t.default=c.a.memo((function(e){var t=this,a=e.stateCode,o=e.timeseries,b=e.date,h=e.regionHighlighted,j=e.setRegionHighlighted,p=e.anchor,g=e.setAnchor,v=e.expandTable,y=Object(k.a)().t,N=Object(x.a)("timeseriesLookback",l.B.BEGINNING),C=Object(n.a)(N,2),M=C[0],H=C[1],S=Object(w.a)("chartType","total"),B=Object(n.a)(S,2),P=B[0],D=B[1],R=Object(w.a)("isUniform",!0),U=Object(n.a)(R,2),I=U[0],G=U[1],J=Object(w.a)("isLog",!1),L=Object(n.a)(J,2),F=L[0],q=L[1],A=Object(i.useRef)(),K=Object(d.a)(A,{once:!0}),Y=Object(i.useMemo)((function(){var e;return(null===o||void 0===o||null===(e=o[h.stateCode])||void 0===e?void 0:e.districts)?{stateCode:h.stateCode,districtName:h.districtName}:{stateCode:h.stateCode,districtName:null}}),[o,h.stateCode,h.districtName]),z=Object(i.useMemo)((function(){var e,t,a,r;return Y.districtName?null===o||void 0===o||null===(e=o[Y.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(a=t[Y.districtName])||void 0===a?void 0:a.dates:null===o||void 0===o||null===(r=o[Y.stateCode])||void 0===r?void 0:r.dates}),[o,Y.stateCode,Y.districtName]),W=Object(i.useMemo)((function(){var e=Object.keys(o||{}).filter((function(e){return e!==a})).sort((function(e,t){l.e[e].localeCompare(l.e[t])})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(o||{}).reduce((function(e,t){var a;return[].concat(Object(r.a)(e),Object(r.a)(Object.keys((null===o||void 0===o||null===(a=o[t])||void 0===a?void 0:a.districts)||{}).reduce((function(e,a){return[].concat(Object(r.a)(e),[{stateCode:t,districtName:a}])}),[])))}),[]);return[{stateCode:a,districtName:null}].concat(Object(r.a)(e),Object(r.a)(t))}),[o,a]),X=Object(i.useMemo)((function(){return W.find((function(e){return e.stateCode===h.stateCode&&e.districtName===h.districtName}))?W:[].concat(Object(r.a)(W),[{stateCode:h.stateCode,districtName:h.districtName}])}),[h.stateCode,h.districtName,W]),_=Object(i.useMemo)((function(){var e,t=b||Object(m.g)(),a=Object.keys(z||{}).filter((function(e){return e<=t})),r=a[a.length-1];return M===l.B.BEGINNING?a:(M===l.B.MONTH?e=Object(f.a)(E(Object(m.k)(r),{months:1}),{representation:"date"}):M===l.B.THREE_MONTHS&&(e=Object(f.a)(E(Object(m.k)(r),{months:3}),{representation:"date"})),a.filter((function(t){return t>=e})))}),[z,b,M]),Q=Object(i.useCallback)((function(e){var t=e.target;j(JSON.parse(t.value))}),[j]),V=Object(i.useCallback)((function(){j({stateCode:a,districtName:null})}),[a,j]);return c.a.createElement("div",{className:O()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===p},{expanded:v}),style:{display:"mapexplorer"===p?"none":""},ref:A},c.a.createElement("div",{className:"timeseries-header"},c.a.createElement("div",{className:O()("anchor",{stickied:"timeseries"===p}),onClick:g&&g.bind(this,"timeseries"===p?null:"timeseries")},c.a.createElement(u.j,null)),c.a.createElement("h1",null,y("Spread Trends")),c.a.createElement("div",{className:"tabs"},Object.entries(l.A).map((function(e,a){var r=Object(n.a)(e,2),i=r[0],o=r[1];return c.a.createElement("div",{className:"tab ".concat(P===i?"focused":""),key:i,onClick:D.bind(t,i)},c.a.createElement("h4",null,y(o)))}))),c.a.createElement("div",{className:"scale-modes"},c.a.createElement("label",{className:"main"},y("Scale Modes")),c.a.createElement("div",{className:"timeseries-mode"},c.a.createElement("label",{htmlFor:"timeseries-mode"},y("Uniform")),c.a.createElement("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:I,"aria-label":y("Checked by default to scale uniformly."),onChange:G.bind(this,!I)})),c.a.createElement("div",{className:"timeseries-logmode ".concat("total"!==P?"disabled":"")},c.a.createElement("label",{htmlFor:"timeseries-logmode"},y("Logarithmic")),c.a.createElement("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===P&&F,className:"switch",disabled:"total"!==P,onChange:q.bind(this,!F)})))),X&&c.a.createElement("div",{className:"state-selection"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("select",{value:JSON.stringify(Y),onChange:Q},X.filter((function(e){return l.e[e.stateCode]!==e.districtName})).map((function(e){return c.a.createElement("option",{value:JSON.stringify(e),key:"".concat(e.stateCode,"-").concat(e.districtName)},"TT"===e.stateCode?y(l.e[l.D[e.stateCode]]):y(e.stateCode))})))),c.a.createElement("div",{className:"reset-icon",onClick:V},c.a.createElement(u.l,null))),K&&c.a.createElement(i.Suspense,{fallback:c.a.createElement(s,null)},c.a.createElement(T,Object.assign({timeseries:z,regionHighlighted:Y},{dates:_,chartType:P,isUniform:I,isLog:F}))),!K&&c.a.createElement("div",{style:{height:"50rem"}}),c.a.createElement("div",{className:"pills"},Object.values(l.B).map((function(e){return c.a.createElement("button",{key:e,type:"button",className:O()({selected:M===e}),onClick:function(){return H(e)}},y(e))}))))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!C()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!C()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!C()(t.date,e.date)&&(!!C()(t.anchor,e.anchor)&&!!C()(t.expandTable,e.expandTable))))))}))},95:function(e,t,a){"use strict";var r=a(0),n=function(){return(n=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,a=e.backgroundColor,i=e.backgroundOpacity,c=e.baseUrl,o=e.children,s=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,m=e.uniqueKey,u=e.interval,b=e.rtl,O=e.speed,f=e.style,h=e.title,j=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),p=m||Math.random().toString(36).substring(6),g=p+"-diff",v=p+"-animated-diff",y=p+"-aria",E=b?{transform:"scaleX(-1)"}:null,N="0; "+u+"; 1",C=O+"s";return Object(r.createElement)("svg",n({"aria-labelledby":y,role:"img",style:n(n({},f),E)},j),h?Object(r.createElement)("title",{id:y},h):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+g+")",style:{fill:"url("+c+"#"+v+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:g},o),Object(r.createElement)("linearGradient",{id:v},Object(r.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:i},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:i},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:N,dur:C,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(r.createElement)(i,n({},e)):Object(r.createElement)(o,n({},e))},o=function(e){return Object(r.createElement)(c,n({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=28.0c70961a.chunk.js.map