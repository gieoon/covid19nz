(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[35],{240:function(e,t,a){"use strict";a.r(t);var i=a(80),l=a(9),n=a(31),d=a(81),s=a.n(d),o=a(85),c=a.n(o),r=a(0),m=a.n(r),u=a(84),v=m.a.memo((function(e){var t=e.statistic,a=e.data,i=e.isPerMillion,d=e.lastUpdatedTT,o=Object(n.i)(a,t,i,d),c=o.total,r=o.delta,v=Object(u.c)({total:c,delta:r,config:l.u}),g=l.v[t];return m.a.createElement("div",{className:"cell statistic"},!g.hideDelta&&m.a.createElement(u.a.div,{className:s()("delta","is-".concat(t)),title:r},v.delta.interpolate((function(e){return e>0?"\u2191"+Object(n.e)(e,g.format):e<0?"\u2193"+Object(n.e)(Math.abs(e),g.format):""}))),m.a.createElement(u.a.div,{className:"total",title:c},v.total.interpolate((function(e){return Object(n.e)(e,g.format,t)}))))}),(function(e,t){var a,i,l,n;return!!c()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!c()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&!!c()(e.isPerMillion,t.isPerMillion))})),g=a(102),h=a(89),b=a(91),N=a(245);var E=m.a.memo((function(e){var t,a=e.stateCode,i=e.districtName,n=e.data,d=e.isPerMillion,o=e.regionHighlighted,c=e.setRegionHighlighted,u=e.expandTable,E=e.lastUpdatedTT,C=Object(N.a)().t,p=Object(r.useCallback)((function(){o.districtName!==i&&c(Object(b.a)(o,(function(e){e.stateCode=a,e.districtName=i})))}),[o,i,c,a]),f=u?l.y:l.x;return m.a.createElement("div",{className:s()("row","district",{"is-highlighted":(null===o||void 0===o?void 0:o.districtName)===i}),onMouseEnter:p},m.a.createElement("div",{className:"cell"},m.a.createElement("div",{className:"state-name"},C(i)),(null===n||void 0===n||null===(t=n.meta)||void 0===t?void 0:t.notes)&&m.a.createElement(g.a,{data:n.meta.notes},m.a.createElement(h.i,{size:16}))),f.map((function(e){return m.a.createElement(v,Object.assign({key:e},{statistic:e,data:n,isPerMillion:d,lastUpdatedTT:E}))})))}),(function(e,t){var a,i,l,n,d,s;return!!c()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!c()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&(!!c()(null===(d=e.data)||void 0===d?void 0:d.last_updated,null===(s=t.data)||void 0===s?void 0:s.last_updated)&&(!!c()(e.isPerMillion,t.isPerMillion)&&(!(!c()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(c()(e.regionHighlighted.districtName,e.districtName)||c()(t.regionHighlighted.districtName,t.districtName)))&&!!c()(e.expandTable,t.expandTable)))))})),C=a(147),p=a(5),f=a(207);t.default=m.a.memo((function(e){var t,a,d=this,o=e.data,c=e.stateCode,u=e.districtName,j=e.isPerMillion,O=e.regionHighlighted,T=e.setRegionHighlighted,H=e.expandTable,k=e.lastUpdatedTT,M=Object(r.useState)(!1),P=Object(i.a)(M,2),x=P[0],w=P[1],y=Object(f.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),U=Object(i.a)(y,2),A=U[0],D=U[1],S=(Object(p.g)(),Object(N.a)().t),R=Object(r.useRef)(),_=Object(r.useCallback)((function(e){D(Object(b.a)(A,(function(t){t.isAscending=!A.isAscending,t.sortColumn=e})))}),[A,D]),z=Object(r.useCallback)((function(e,t){if("districtName"!==A.sortColumn){var a=l.v[A.sortColumn],i=A.delta&&!a.hideDelta?"delta":"total",d=Object(n.i)(o.districts[e],A.sortColumn,j,k)[i],s=Object(n.i)(o.districts[t],A.sortColumn,j,k)[i];return A.isAscending?d-s:s-d}return A.isAscending?e.localeCompare(t):t.localeCompare(e)}),[A,o,j,k]),F=Object(r.useCallback)((function(){c?O.stateCode!==c&&T(Object(b.a)(O,(function(e){e.stateCode=c,e.districtName=null}))):u&&(O.districtName===u&&O.stateCode===o.stateCode||T(Object(b.a)(O,(function(e){e.stateCode=o.stateCode,e.districtName=u}))))}),[o.stateCode,u,O,T,c]),I=Object(r.useCallback)((function(){o.districts&&w(!x)}),[x,o]),J=S(u);u===l.E&&(J="".concat(S(l.E)," [").concat(S(l.e[o.stateCode]),"]"));var V=Object(r.useCallback)((function(){w(!1),R.current.scrollIntoView({block:"start"})}),[c]),q=H?l.y:l.x;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:s()("row",{"is-total":"TT"===c},{"is-highlighted":c&&(null===O||void 0===O?void 0:O.stateCode)===c||u&&(null===O||void 0===O?void 0:O.districtName)===u&&(null===O||void 0===O?void 0:O.stateCode)===o.stateCode}),onMouseEnter:F,onClick:I,ref:R},m.a.createElement("div",{className:"cell"},m.a.createElement("div",{className:"state-name fadeInUp"},S(l.e[l.C[c]])||S(l.e[c])||S(J)),(null===o||void 0===o||null===(t=o.meta)||void 0===t?void 0:t.notes)&&m.a.createElement(g.a,{data:o.meta.notes},m.a.createElement(h.i,{size:16}))),q.map((function(e){return m.a.createElement(v,Object.assign({key:e},{data:o,statistic:e,isPerMillion:j,lastUpdatedTT:k}))}))),x&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"state-meta"},m.a.createElement("div",{className:"state-meta-top"},(null===o||void 0===o||null===(a=o.meta)||void 0===a?void 0:a.last_updated)&&m.a.createElement("p",{className:"last-updated"},m.a.createElement(h.b,null),Object(n.a)("".concat(Object(n.d)(o.meta.last_updated)," ").concat(S("ago")))),m.a.createElement("div",{className:"state-page"},m.a.createElement(h.g,null),m.a.createElement("span",null,S("See more details on {{state}}",{state:c}))))),m.a.createElement("div",{className:s()("row","heading")},m.a.createElement("div",{className:"cell heading",onClick:_.bind(this,"districtName")},m.a.createElement("div",{className:"district-name"},S("District")),"districtName"===A.sortColumn&&m.a.createElement("div",{className:s()("sort-icon",{invert:!A.isAscending})},m.a.createElement(h.d,{size:10}))),q.map((function(e){return m.a.createElement(C.a,Object.assign({key:e},{statistic:e,sortData:A,setSortData:D},{handleSort:_.bind(d,e)}))})))),x&&Object.keys(o.districts).sort((function(e,t){return z(e,t)})).map((function(e){return m.a.createElement(E,Object.assign({data:o.districts[e],key:e},{districtName:e,regionHighlighted:O,setRegionHighlighted:T,stateCode:c,isPerMillion:j,expandTable:H,lastUpdatedTT:k}))})),x&&m.a.createElement("div",{className:"spacer-row"},m.a.createElement("div",{className:"spacer"},m.a.createElement("p",null,"End of ".concat(S(l.e[c]),"'s districts")),m.a.createElement("div",{className:"fold",onClick:V},m.a.createElement(h.f,null)))))}),(function(e,t){var a,i,l,n;return!!c()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!c()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&(!!c()(e.isPerMillion,t.isPerMillion)&&(!(!c()(e.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&c()(e.regionHighlighted.stateCode,e.stateCode)||c()(t.regionHighlighted.stateCode,t.stateCode))&&(!(!c()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&c()(e.regionHighlighted.districtName,e.districtName)||c()(t.regionHighlighted.districtName,t.districtName))&&!!c()(e.expandTable,t.expandTable)))))}))}}]);
//# sourceMappingURL=35.ae151a00.chunk.js.map