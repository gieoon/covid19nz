(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[24],{119:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(81),a=r(144),c=r(0),i=function(t){var e=Object(c.useState)(null),r=Object(n.a)(e,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){var e=t.current,r=new a.a((function(t,e){t.forEach((function(t,e){o(t.contentRect)}))}));return r.observe(e),function(){r.unobserve(e)}}),[t]),i}},256:function(t,e,r){"use strict";r.r(e);var n=r(108),a=r(138),c=r.n(a),i=r(181),o=r(7),s=r(119),l=r(31),u=r(169),f=r(251),d=r(109),m=r(237),p=r(225),b=r(243),v=r(220),h=r(121),g=r(168),j=r(114),O=r(218),k=r(0),x=r.n(k),y=r(254);var E=function(t){t.data;var e=t.mapViz,r=t.mapScale,n=t.statistic,a=Object(y.a)().t,c=Object(k.useRef)(null),i=Object(k.useRef)(),E=Object(s.a)(i);return Object(k.useEffect)((function(){var t=Object(O.a)(c.current),s=E||i.current.getBoundingClientRect(),k=s.width,x=s.height;if(!k||!x){var y=i.current.getBoundingClientRect();k=y.width,x=y.height}if(k&&x)if(e===o.m.BUBBLES){var N=t.transition().duration(o.e);t.select(".ramp").transition(N).attr("opacity",0).attr("xlink:href",null),t.select(".bars").selectAll("rect").transition(N).attr("opacity",0).remove(),t.selectAll(".axis > *:not(.axistext)").remove(),t.select(".axistext").text("");var R=r.domain()[1];t.select(".circles").attr("transform","translate(48,40)").attr("text-anchor","middle").selectAll("circle").data([R/10,2*R/5,R]).join("circle").attr("fill","none").attr("stroke","#ccc").transition(N).attr("cy",(function(t){return-r(t)})).attr("r",r);var T=r.copy().range([0,-2*r(R)]);t.select(".circleAxis").attr("transform","translate(48,50)").transition(N).call(Object(d.b)(T).tickSize(0).tickPadding(0).tickValues([R/10,2*R/5,R]).tickFormat((function(t){return Object(l.e)(t,"short")}))).selectAll(".tick text").style("text-anchor","middle"),t.select(".circleAxis").call((function(t){return t.select(".domain").remove()}))}else t.call((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.svg,r=t.color,n=t.title,a=t.tickSize,c=void 0===a?6:a,i=t.width,s=void 0===i?320:i,l=t.height,O=void 0===l?44+c:l,k=t.marginTop,x=void 0===k?18:k,y=t.marginRight,E=void 0===y?0:y,N=t.marginBottom,R=void 0===N?16+c:N,T=t.marginLeft,A=void 0===T?0:T,C=t.ticks,w=void 0===C?s/64:C,L=t.tickFormat,S=t.tickValues,M=t.ordinalWeights;e.selectAll(".circles > *").remove(),e.selectAll(".circleAxis > *").remove();var H,U=e.transition().duration(o.e),_=function(t){t.selectAll(".tick line").attr("y1",x+R-O)};if(r.interpolate){var D=Math.min(r.domain().length,r.range().length);H=r.copy().rangeRound(Object(p.a)(Object(b.a)(A,s-E),D)),e.select(".ramp").attr("class","ramp").attr("x",A).attr("y",x).attr("width",s-A-E).attr("height",O-x-R).attr("preserveAspectRatio","none").attr("xlink:href",B(r.copy().domain(Object(p.a)(Object(b.a)(0,1),D))).toDataURL())}else if(r.interpolator){if(e.select(".bars").selectAll("rect").transition(U).attr("opacity",0).remove(),H=Object.assign(r.copy().interpolator(Object(v.a)(A,s-E)),{range:function(){return[A,s-E]}}),e.select(".ramp").attr("class","ramp").attr("x",A).attr("y",x).attr("width",s-A-E).attr("height",O-x-R).attr("preserveAspectRatio","none").attr("xlink:href",B(r.interpolator()).toDataURL()).transition(U).attr("opacity",1),!H.ticks){if(void 0===S){var F=Math.round(w+1);S=Object(u.a)(F).map((function(t){return Object(f.a)(r.domain(),t/(F-1))}))}"function"!==typeof L&&(L=Object(m.a)(void 0===L?",f":L))}}else if(r.invertExtent){var Y=r.thresholds?r.thresholds():r.quantiles?r.quantiles():r.domain(),z=void 0===L?function(t){return t}:"string"===typeof L?Object(m.a)(L):L;H=Object(h.a)().domain([-1,r.range().length-1]).rangeRound([A,s-E]),e.append("g").selectAll("rect").data(r.range()).join("rect").attr("x",(function(t,e){return H(e-1)})).attr("y",x).attr("width",(function(t,e){return H(e)-H(e-1)})).attr("height",O-x-R).attr("fill",(function(t){return t})),S=Object(u.a)(-1,Y.length),L=function(t){return-1===t?z(1):t!==Y.length-1?t===Y.length-2?z(Y[t]+"+",t):z(Y[t],t):void 0}}else{if(e.select(".ramp").transition(U).attr("opacity",0).attr("xlink:href",null),M){var I=Object(h.a)().domain([0,M.reduce((function(t,e){return t+e}))]).rangeRound([0,s-A-E]),P=M.map((function(t,e){return M.slice(0,e).reduce((function(t,e){return t+I(e)}),A)}));H=Object(j.a)().domain(r.domain()).range(P),e.select(".bars").selectAll("rect").data(r.domain()).join((function(t){return t.append("rect").attr("x",H).attr("width",(function(t,e){return I(M[e])}))})).attr("y",x).attr("height",O-x-R).attr("fill",r).transition(U).attr("x",H).attr("width",(function(t,e){return I(M[e])})).attr("opacity",1)}else H=Object(g.a)().domain(r.domain()).rangeRound([A,s-E]),e.selectAll("rect").data(r.domain()).join("rect").attr("x",H).attr("y",x).attr("width",Math.max(0,H.bandwidth()-1)).attr("height",O-x-R).attr("fill",r);_=function(){}}return e.select(".axis").attr("transform","translate(0,".concat(O-R,")")).transition(U).attr("class","axis").call(Object(d.a)(H).ticks(w,"string"===typeof L?L:void 0).tickFormat("function"===typeof L?L:void 0).tickSize(c).tickValues(S)).on("start",(function(){e.call(_).call((function(t){return t.select(".domain").remove()}))})).call((function(t){return t.select(".axistext").attr("class","axistext").attr("x",A).attr("y",x+R-O-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(n)})),e.node()}({svg:t,color:r,title:"".concat(a(Object(l.a)(n))," ").concat(a("cases")),width:k,height:x,ticks:5,tickFormat:function(t,r,n){if(e!==o.m.CHOROPLETH||Number.isInteger(t))return r===n.length-1?Object(l.e)(t)+"+":Object(l.e)(t)},marginLeft:2,marginRight:0})}))}),[a,E,r,e,n]),x.a.createElement("div",{className:"svg-parent maplegend",style:{height:o.i,marginTop:"48px"},ref:i},x.a.createElement("svg",{id:"legend",preserveAspectRatio:"xMidYMid meet",ref:c},x.a.createElement("image",{className:"ramp"}),x.a.createElement("g",{className:"bars"}),x.a.createElement("g",{className:"circles"}),x.a.createElement("g",{className:"circleAxis"}),x.a.createElement("g",{className:"axis"},x.a.createElement("text",{className:"axistext"}))),x.a.createElement("canvas",{className:"color-scale",style:{position:"absolute",height:0}}))};function B(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,r=Object(O.a)(".color-scale").node(),n=(r.width=e,r.height=1,r).getContext("2d"),a=0;a<e;++a)n.fillStyle=t(a/(e-1)),n.fillRect(a,0,1,1);return r}var N=r(82),R=r.n(N),T=r(172),A=r(232),C=r(241),w=r(235),L=r(182),S=r(258),M=r(226),H=r(227),U=r(228),_=r(229),D=r(230),F=r(231),Y=r(133),z=r(105),I=r(5),P=r(107),V=r(198),Z="MoH_Char_C",q=function(t,e){return Object(l.h)(t,"total",e)};e.default=function(t){var e,r,a=this,s=t.mapCode,u=t.mapView,f=t.mapViz,d=t.data,m=(t.changeMap,t.regionHighlighted),p=t.setRegionHighlighted,b=t.statistic,v=(t.isCountryLoaded,Object(y.a)().t,Object(k.useRef)(null)),h=o.j[s],g=Object(I.g)(),j=Object(P.a)(h.geoDataFile,function(){var t=Object(i.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(A.a)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{suspense:!1,revalidateOnFocus:!1}).data,B=Object(k.useMemo)((function(){var t=Object.keys(d).filter((function(t){return"TT"!==t}));return Object(T.a)(t,(function(t){return q(d[t],b)}))}),[d,u,b]),N=Object(k.useMemo)((function(){return q(d[s],b)}),[d,s,b]),J=Object(k.useMemo)((function(){return f===o.m.BUBBLES?Object(L.b)([0,Math.max(B,1)],[0,40]).clamp(!0).nice(3):Object(S.a)([0,Math.max(1,B)],function(t){switch(t){case"confirmed":return function(t){return Object(M.a)(.85*t)};case"active":return function(t){return Object(H.a)(.85*t)};case"recovered":return function(t){return Object(U.a)(.85*t)};case"deceased":return function(t){return Object(_.a)(.85*t)};case"tested":return function(t){return Object(D.a)(.85*t)};default:return function(t){return Object(F.a)(.85*t)}}}(b)).clamp(!0)}),[f,b,B]),G=Object(k.useMemo)((function(){if(!j)return null;var t=V.a(j,j.objects.NZL_adm2);return Object(C.a)(Object(w.a)().reflectY(!0).reflectX(!0).fitSize([432,488],t))}),[j]),W=Object(k.useCallback)((function(t){if(!t)return"rgba(255,255,255,0)";var e,r=o.b[o.B[t.properties[Z]]],n=d[r];return f===o.m.CHOROPLETH?(e=q(n,b),e=J(e),Array.from(document.getElementsByClassName("region")).forEach((function(t){return t.style.opacity=1}))):f===o.m.BUBBLES&&(e="rgba(255,255,255,0)"),e}),[d,J,b]),X=Object(k.useCallback)((function(t){return o.t[b].color+t}),[b]),K=Object(k.useMemo)((function(){return j?(u===o.l.COUNTRY?V.a(j,j.objects.NZL_adm2).features:h.mapType===o.k.COUNTRY&&f===o.m.BUBBLES?[].concat(Object(n.a)(V.a(j,j.objects.NZL_adm2).features),Object(n.a)(V.a(j,j.objects.NZL_adm2).features)):V.a(j,j.objects.NZL_adm2).features).map((function(t){var e=t.properties.DHB_code,r=t.properties[Z],n=Object.assign({},t);return n.id="".concat(s,"-").concat(r).concat(e?"-"+e:""),n})):null}),[j,s,u,f,h]),Q=Object(k.useCallback)((function(t){t.select("title").text((function(t){if(f===o.m.CHOROPLETH){var e,r,n=t.properties[Z],a=o.b[n],c=t.properties.DHB_code,i=d[a],s=null===i||void 0===i||null===(e=i.districts)||void 0===e?void 0:e[c];return r=q(c?s:i,b),Object(l.e)(r/(N||.001)*100)+"% from "+Object(l.l)(c||n)}}))}),[f,d,b,N]),$=Object(k.useRef)(null);return Object(k.useEffect)((function(){Object(O.a)(v.current).attr("pointer-events","auto").on("click",(function(){$.current=null,p({stateCode:s,districtName:null})}))}),[s,p]),Object(k.useEffect)((function(){if(j){var t=Object(O.a)(v.current),e=Object(z.a)().duration(o.e),r=t.select(".regions").selectAll("path").data(f!==o.m.BUBBLES?K:[],(function(t){return t.id})).data(K,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",G).attr("class","region").attr("stroke-width",1.8).attr("stroke-opacity",0).style("cursor","pointer").on("mouseenter",(function(t){p({stateCode:o.b[o.B[t.properties[Z]]],districtName:t.properties.DHB_name})})).attr("fill","#fff0").attr("stroke","#fff0").call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").attr("fill","#fff0").remove()})).attr("pointer-events","all").on("touchstart",(function(t){$.current===t?$.current=null:$.current=t})).on("click",(function(e){var r;Y.b.stopPropagation();var n=o.b[o.B[e.properties[Z]]];!$.current&&h.mapType!==o.k.STATE&&(null===(r=d[n])||void 0===r?void 0:r.districts)&&(t.attr("pointer-events","none"),t.select(".regions").selectAll("path").attr("pointer-events","none"))})).call((function(t){return t.transition(e).attr("fill",W).attr("stroke",X.bind(a,""))}));window.requestIdleCallback((function(){Q(r)}))}}),[f,d,K,W,j,g,h.mapType,G,Q,p,X]),Object(k.useEffect)((function(){if(K){var t=Object(O.a)(v.current),e=Object(z.a)().duration(o.e),r=[];f===o.m.BUBBLES&&(r=K.map((function(t){var e=o.b[o.B[t.properties[Z]]],r=d[e];if(u===o.l.COUNTRY)t.value=q(r,b);else if(u===o.l.DISTRICTS){var n=r;t.value=q(n,b)}return t})).sort((function(t,e){return e.value-e.value}))),t.select(".circles").selectAll("circle").data(r,(function(t){return t.id})).join((function(t){return t.append("circle").attr("transform",(function(t){return"translate(".concat(G.centroid(t),")")})).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all")}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("r",0).remove()}))})).on("mouseenter",(function(t){p({stateCode:o.b[o.B[t.properties[Z]]],districtName:u===o.l.COUNTRY?null:t.properties.DHB_name})})).on("touchstart",(function(t){$.current===t?$.current=null:$.current=t})).on("click",(function(t){Y.b.stopPropagation(),!$.current&&(h.mapType,o.k.STATE)})).transition(e).attr("fill",o.t[b].color+"70").attr("stroke",o.t[b].color+"70").attr("r",(function(t){return J(t.value)}))}}),[h.mapType,f,u,d,K,g,J,G,p,b]),Object(k.useEffect)((function(){if(j){var t=Object(O.a)(v.current),e=Object(z.a)().duration(o.e),r=[],n=[];h.mapType===o.k.COUNTRY&&((r=[V.b(j,j.objects.NZL_adm2)])[0].id="".concat(s,"-states")),(h.mapType===o.k.STATE||u===o.l.DISTRICTS&&f===o.m.CHOROPLETH)&&((n=[V.b(j,j.objects.NZL_adm2)])[0].id="".concat(s,"-districts")),t.select(".state-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(r,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",G).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",X.bind(a,"40")),t.select(".district-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(n,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",G).attr("d",G).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",X.bind(a,"40"))}}),[j,h,s,f,u,b,G,X]),Object(k.useEffect)((function(){var t=m.stateCode,e=o.d[t],r=Object(O.a)(v.current);f===o.m.BUBBLES?r.select(".circles").selectAll("circle").attr("fill-opacity",(function(t){return e===o.B[t.properties[Z]]?1:.25})):r.select(".regions").selectAll("path").each((function(t){var r=e===o.B[t.properties[Z]];r&&this.parentNode.appendChild(this),Object(O.a)(this).attr("stroke-opacity",r?1:0)}))}),[j,d,s,u,f,m.stateCode,m.districtName,b]),x.a.createElement(x.a.Fragment,null,x.a.createElement("div",{className:"svg-parent"},x.a.createElement("svg",{id:"chart",viewBox:"0 0 ".concat(432," ").concat(488),preserveAspectRatio:"xMidYMid meet",ref:v},x.a.createElement("g",{className:"regions"}),x.a.createElement("g",{className:"state-borders"}),x.a.createElement("g",{className:"district-borders"}),x.a.createElement("g",{className:"circles"})),h.mapType===o.k.STATE&&!!q(null===(e=d[s])||void 0===e||null===(r=e.districts)||void 0===r?void 0:r[o.D],b)&&x.a.createElement("div",{className:R()("disclaimer","is-".concat(b))})),J&&x.a.createElement(E,{data:d,mapViz:f,mapScale:J,statistic:b}),x.a.createElement("svg",{style:{position:"absolute",height:0}},x.a.createElement("defs",null,x.a.createElement("filter",{id:"balance-color",colorInterpolationFilters:"sRGB"},x.a.createElement("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0"})))))}}}]);
//# sourceMappingURL=24.68756741.chunk.js.map