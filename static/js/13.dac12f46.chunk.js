(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[13,23,26,30,31],{102:function(e,t,n){"use strict";var a=n(81),r=n(0),i={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(o(!0),n.unobserve(e.current))}))}),i).observe(e.current)}),[e]),c}},103:function(e,t,n){"use strict";var a=n(81),r=n(101),i=n(0),c=n.n(i),o=n(85);t.a=function(e){var t=e.data,n=e.children,l=Object(i.useState)(!1),s=Object(a.a)(l,2),u=s[0],d=s[1],m=Object(o.f)(u,null,{from:r.j,enter:r.i,leave:r.j,config:{mass:1,tension:210,friction:20}}),f=Object(i.useCallback)((function(e){return e.stopPropagation()}),[]);return c.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:d.bind(void 0,!0),onMouseLeave:d.bind(void 0,!1),onClick:f.bind(void 0)},n,m.map((function(e){var n=e.item,a=e.key,r=e.props;return n?c.a.createElement(o.a.div,{key:a,style:r},c.a.createElement("div",{className:"message"},c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):c.a.createElement(o.a.div,{key:a})})))}},109:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return m}));var a=Array.prototype.slice,r=function(e){return e};function i(e){return"translate("+(e+.5)+",0)"}function c(e){return"translate(0,"+(e+.5)+")"}function o(e){return function(t){return+e(t)}}function l(e){var t=Math.max(0,e.bandwidth()-1)/2;return e.round()&&(t=Math.round(t)),function(n){return+e(n)+t}}function s(){return!this.__axis}function u(e,t){var n=[],u=null,d=null,m=6,f=6,v=3,b=1===e||4===e?-1:1,h=4===e||2===e?"x":"y",p=1===e||3===e?i:c;function O(a){var i=null==u?t.ticks?t.ticks.apply(t,n):t.domain():u,c=null==d?t.tickFormat?t.tickFormat.apply(t,n):r:d,O=Math.max(m,0)+v,j=t.range(),g=+j[0]+.5,y=+j[j.length-1]+.5,E=(t.bandwidth?l:o)(t.copy()),k=a.selection?a.selection():a,w=k.selectAll(".domain").data([null]),M=k.selectAll(".tick").data(i,t).order(),x=M.exit(),N=M.enter().append("g").attr("class","tick"),C=M.select("line"),S=M.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),M=M.merge(N),C=C.merge(N.append("line").attr("stroke","currentColor").attr(h+"2",b*m)),S=S.merge(N.append("text").attr("fill","currentColor").attr(h,b*O).attr("dy",1===e?"0em":3===e?"0.71em":"0.32em")),a!==k&&(w=w.transition(a),M=M.transition(a),C=C.transition(a),S=S.transition(a),x=x.transition(a).attr("opacity",1e-6).attr("transform",(function(e){return isFinite(e=E(e))?p(e):this.getAttribute("transform")})),N.attr("opacity",1e-6).attr("transform",(function(e){var t=this.parentNode.__axis;return p(t&&isFinite(t=t(e))?t:E(e))}))),x.remove(),w.attr("d",4===e||2==e?f?"M"+b*f+","+g+"H0.5V"+y+"H"+b*f:"M0.5,"+g+"V"+y:f?"M"+g+","+b*f+"V0.5H"+y+"V"+b*f:"M"+g+",0.5H"+y),M.attr("opacity",1).attr("transform",(function(e){return p(E(e))})),C.attr(h+"2",b*m),S.attr(h,b*O).text(c),k.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===e?"start":4===e?"end":"middle"),k.each((function(){this.__axis=E}))}return O.scale=function(e){return arguments.length?(t=e,O):t},O.ticks=function(){return n=a.call(arguments),O},O.tickArguments=function(e){return arguments.length?(n=null==e?[]:a.call(e),O):n.slice()},O.tickValues=function(e){return arguments.length?(u=null==e?null:a.call(e),O):u&&u.slice()},O.tickFormat=function(e){return arguments.length?(d=e,O):d},O.tickSize=function(e){return arguments.length?(m=f=+e,O):m},O.tickSizeInner=function(e){return arguments.length?(m=+e,O):m},O.tickSizeOuter=function(e){return arguments.length?(f=+e,O):f},O.tickPadding=function(e){return arguments.length?(v=+e,O):v},O}function d(e){return u(2,e)}function m(e){return u(3,e)}},110:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),c=n.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,s=l(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.a.createElement("polyline",{points:"22,6 12,13 2,6"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Mail";var u=s,d=n(254);t.default=r.a.memo((function(){var e=Object(d.a)().t;return r.a.createElement("footer",null,r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/covid19india",target:"_blank",rel:"noopener noreferrer"},"nz.covid19live")),r.a.createElement("h5",null,e("Keeping Kiwi's updated through these difficult times"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"This website was built based on "),r.a.createElement("a",{target:"_blank",href:"https://github.com/covid19india/covid19india-react"},"covid19india.org")),r.a.createElement("div",{className:"links"},r.a.createElement("a",{href:"mailto:jun.a.kagaya@gmail.com",className:"mail",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u,null))))}))},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(94),r=n(91),i=Symbol("implicit");function c(){var e=new Map,t=[],n=[],o=i;function l(a){var r=a+"",c=e.get(r);if(!c){if(o!==i)return o;e.set(r,c=t.push(a))}return n[(c-1)%n.length]}return l.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new Map;var r,i=Object(a.a)(n);try{for(i.s();!(r=i.n()).done;){var c=r.value,o=c+"";e.has(o)||e.set(o,t.push(c))}}catch(s){i.e(s)}finally{i.f()}return l},l.range=function(e){return arguments.length?(n=Array.from(e),l):n.slice()},l.unknown=function(e){return arguments.length?(o=e,l):o},l.copy=function(){return c(t,n).unknown(o)},r.b.apply(l,arguments),l}},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(94);function r(e,t){var n;if(void 0===t){var r,i=Object(a.a)(e);try{for(i.s();!(r=i.n()).done;){var c=r.value;null!=c&&(n>c||void 0===n&&c>=c)&&(n=c)}}catch(d){i.e(d)}finally{i.f()}}else{var o,l=-1,s=Object(a.a)(e);try{for(s.s();!(o=s.n()).done;){var u=o.value;null!=(u=t(u,++l,e))&&(n>u||void 0===n&&u>=u)&&(n=u)}}catch(d){s.e(d)}finally{s.f()}}return n}},135:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(31),i=n(89),c=n(82),o=n.n(c),l=n(86),s=n.n(l),u=n(0),d=n.n(u),m=n(254),f=n(85);var v=d.a.memo((function(e){var t=e.statistic,n=e.total,c=e.delta,o=Object(m.a)().t,l=Object(f.c)({total:n,delta:c,config:a.s}),s=a.t[t];return d.a.createElement(d.a.Fragment,null,d.a.createElement("h5",null,o(Object(r.a)(s.displayName))),d.a.createElement(f.a.h4,null,"active"!==t?c>0?l.delta.interpolate((function(e){return"+".concat(Object(r.e)(e,s.format,t))})):d.a.createElement(i.i,{size:9,verticalAlign:2}):"\xa0"),d.a.createElement(f.a.h1,null,l.total.interpolate((function(e){return Object(r.e)(e,s.format,t)}))))}));t.default=d.a.memo((function(e){var t=e.data,n=Object(u.useMemo)((function(){var e=[];return a.r.map((function(t,n){return e.push({animationDelay:"".concat(750+250*n,"ms")}),null})),e}),[]);return d.a.createElement("div",{className:"Level"},a.r.map((function(e,a){return d.a.createElement(f.a.div,{key:a,className:o()("level-item","is-".concat(e),"fadeInUp"),style:n[a]},d.a.createElement(v,Object.assign({statistic:e},{total:Object(r.h)(t,"total",e),delta:Object(r.h)(t,"delta",e)})))})))}),(function(e,t){return!!s()(Object(r.h)(e.data,"total","active"),Object(r.h)(t.data,"total","active"))}))},136:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(81),i=n(7),c=n(82),o=n.n(c),l=n(0),s=n.n(l),u=n(45),d=n.n(u),m=n(85),f=n(146);t.default=s.a.memo((function(e){var t=e.mapStatistic,n=e.setMapStatistic,c=Object(f.a)(),u=Object(r.a)(c,2),v=u[0],b=u[1].width,h=Object(l.useState)(!1),p=Object(r.a)(h,2),O=p[0],j=p[1],g=Object(l.useState)(0),y=Object(r.a)(g,2),E=y[0],k=y[1],w=Object(m.c)((function(){return{opacity:0,background:"".concat(i.t[t].color,"20"),transform:"translateX(".concat(b*i.r.indexOf(t)*.25,"px)"),config:m.b.gentle}})),M=Object(r.a)(w,2),x=M[0],N=M[1];Object(l.useEffect)((function(){b>0&&d.a.unstable_batchedUpdates((function(){N({transform:"translateX(".concat(b*i.r.indexOf(t)*.25,"px)"),opacity:1,background:"".concat(i.t[t].color,"20"),delay:0===E?1500:0,onStart:j.bind(void 0,!0),onRest:j.bind(void 0,!1)})}))}),[E,t,N,b]);var C=Object(l.useCallback)((function(e){k((function(e){return e+1})),n(e)}),[n]);return s.a.createElement("div",{className:"MapSwitcher",ref:v},s.a.createElement(m.a.div,{className:"highlight",style:x}),i.r.map((function(e,t){return s.a.createElement("div",{key:t,className:o()("clickable",Object(a.a)({},"is-".concat(e),!O)),onClick:C.bind(void 0,e)})})))}),(function(e,t){return e.mapStatistic===t.mapStatistic}))},137:function(e,t,n){"use strict";var a=n(0),r=n(90),i=["mousedown","touchstart"];t.a=function(e,t,n){void 0===n&&(n=i);var c=Object(a.useRef)(t);Object(a.useEffect)((function(){c.current=t}),[t]),Object(a.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&c.current(t)},a=0,i=n;a<i.length;a++){var o=i[a];Object(r.c)(document,o,t)}return function(){for(var e=0,a=n;e<a.length;e++){var i=a[e];Object(r.b)(document,i,t)}}}),[n,e])}},145:function(e,t,n){"use strict";n.r(t);var a=n(81),r=n(7),i=n(0),c=n.n(i),o=n(254),l=n(5),s=n(85),u=n(137),d=function(e){var t=e.stateCode,n=e.trail,d=Object(i.useState)(!1),m=Object(a.a)(d,2),f=m[0],v=m[1],b=Object(i.useRef)(),h=Object(l.g)(),p=Object(o.a)().t;Object(u.a)(b,(function(){v(!1)}));var O=Object(s.f)(f,null,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),j=Object(i.useCallback)((function(e){v(!1),h.push("/state/".concat(e))}),[h]);return c.a.createElement("div",{className:"StateDropdown",ref:b},c.a.createElement(s.a.h1,{className:"state-name fadeInUp",style:n,onClick:v.bind(void 0,!f)},p(r.d[t])),O.map((function(e){var n=e.item,a=e.key,i=e.props;return n?c.a.createElement(s.a.div,{className:"dropdown",style:i,key:a},Object.keys(r.j).filter((function(e){return"TT"!==e&&e!==t})).sort((function(e,t){return r.d[e].localeCompare(r.d[t])})).map((function(e){return c.a.createElement("h1",{key:e,className:"item",onClick:j.bind(void 0,e)},p(r.d[e]))}))):c.a.createElement(s.a.div,{key:t,style:i})})),f&&c.a.createElement("div",{className:"backdrop"}))},m=n(31);t.default=c.a.memo((function(e){var t,n,a,l,u,f=e.data,v=e.stateCode,b=Object(o.a)().t,h=Object(i.useMemo)((function(){var e=[];return[0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),p=Object(s.c)({total:Object(m.h)(f,"total","tested"),config:r.s});return c.a.createElement("div",{className:"StateHeader"},c.a.createElement("div",{className:"header-left"},c.a.createElement(d,Object.assign({stateCode:v},{hyperlink:!1,trail:h[0]})),(null===f||void 0===f||null===(t=f.meta)||void 0===t?void 0:t.last_updated)&&c.a.createElement("h5",{className:"fadeInUp",style:h[1]},"Last Updated on ".concat(Object(m.c)(f.meta.last_updated,"dd MMM, p")," NZST"))),c.a.createElement("div",{className:"header-right fadeInUp",style:h[2]},c.a.createElement("h5",null,b("Tested")),c.a.createElement(s.a.h2,null,p.total.interpolate((function(e){return Object(m.e)(Math.floor(e))}))),(null===f||void 0===f||null===(n=f.meta)||void 0===n||null===(a=n.tested)||void 0===a?void 0:a.last_updated)&&c.a.createElement("h5",{className:"timestamp"},"As of ".concat(Object(m.c)(f.meta.tested.last_updated,"dd MMMM"))),(null===f||void 0===f||null===(l=f.meta)||void 0===l||null===(u=l.tested)||void 0===u?void 0:u.source)&&c.a.createElement("h5",null,"per ",c.a.createElement("a",{href:f.meta.tested.source,target:"_noblank"},"source"))))}))},146:function(e,t,n){"use strict";var a=n(0),r="undefined"!==typeof window?a.useLayoutEffect:a.useEffect,i=n(90),c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};t.a=i.a&&window.ResizeObserver?function(){var e=Object(a.useState)(null),t=e[0],n=e[1],i=Object(a.useState)(c),o=i[0],l=i[1],s=Object(a.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,n=t.x,a=t.y,r=t.width,i=t.height,c=t.top,o=t.left,s=t.bottom,u=t.right;l({x:n,y:a,width:r,height:i,top:c,left:o,bottom:s,right:u})}}))}),[]);return r((function(){if(t)return s.observe(t),function(){s.disconnect()}}),[t]),[n,o]}:function(){return[function(){},c]}},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(81),r=n(169),i=n(91),c=n(114);function o(){var e,t,n=Object(c.a)().unknown(void 0),l=n.domain,s=n.range,u=0,d=1,m=!1,f=0,v=0,b=.5;function h(){var n=l().length,a=d<u,i=a?d:u,c=a?u:d;e=(c-i)/Math.max(1,n-f+2*v),m&&(e=Math.floor(e)),i+=(c-i-e*(n-f))*b,t=e*(1-f),m&&(i=Math.round(i),t=Math.round(t));var o=Object(r.a)(n).map((function(t){return i+e*t}));return s(a?o.reverse():o)}return delete n.unknown,n.domain=function(e){return arguments.length?(l(e),h()):l()},n.range=function(e){var t,n;return arguments.length?(t=e,n=Object(a.a)(t,2),u=n[0],d=n[1],u=+u,d=+d,h()):[u,d]},n.rangeRound=function(e){var t,n;return t=e,n=Object(a.a)(t,2),u=n[0],d=n[1],u=+u,d=+d,m=!0,h()},n.bandwidth=function(){return t},n.step=function(){return e},n.round=function(e){return arguments.length?(m=!!e,h()):m},n.padding=function(e){return arguments.length?(f=Math.min(1,v=+e),h()):f},n.paddingInner=function(e){return arguments.length?(f=Math.min(1,e),h()):f},n.paddingOuter=function(e){return arguments.length?(v=+e,h()):v},n.align=function(e){return arguments.length?(b=Math.max(0,Math.min(1,e)),h()):b},n.copy=function(){return o(l(),[u,d]).round(m).paddingInner(f).paddingOuter(v).align(b)},i.b.apply(h(),arguments)}},169:function(e,t,n){"use strict";t.a=function(e,t,n){e=+e,t=+t,n=(r=arguments.length)<2?(t=e,e=0,1):r<3?1:+n;for(var a=-1,r=0|Math.max(0,Math.ceil((t-e)/n)),i=new Array(r);++a<r;)i[a]=e+a*n;return i}},238:function(e,t,n){"use strict";n.r(t);var a=n(32),r=n(81),i=n(7),c=n(31),o=n(134),l=n(172),s=n(109),u=n(168),d=n(121),m=n(218),f=(n(105),n(86)),v=n.n(f),b=n(0),h=n.n(b),p=n(146),O=function(e,t){return Object(c.h)(e,"delta",t)},j=50,g=0,y=50,E=0;var k=h.a.memo((function(e){var t=e.timeseries,n=e.statistic,a=e.lookback,f=Object(b.useRef)(),v=Object(p.a)(),k=Object(r.a)(v,2),M=k[0],x=k[1],N=x.width,C=x.height,S=Object.keys(t||{}).filter((function(e){return e<=Object(c.g)()})).slice(-a);return Object(b.useEffect)((function(){if(N){var e=Object(m.a)(f.current),a=N-g,r=C-y,v=Object(u.a)().domain(S).range([E,a]).paddingInner(N/1e3),b=Object(d.a)().domain([Math.min(0,Object(o.a)(S,(function(e){return O(null===t||void 0===t?void 0:t[e],n)}))),Math.max(1,Object(l.a)(S,(function(e){return O(null===t||void 0===t?void 0:t[e],n)})))]).range([r,j]),h=Object(s.a)(v).tickSize(0).tickFormat((function(e){return Object(c.c)(e,"dd MMM")})),p=e.transition().duration(i.e);e.select(".x-axis").transition(p).style("transform","translateY(".concat(b(0),"px)")).call(h).on("start",(function(){return e.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(e,a){return O(null===t||void 0===t?void 0:t[e],n)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",i.t[n].color),e.selectAll(".bar").data(S).join((function(e){return e.append("path").attr("class","bar").attr("d",(function(e){return w(v(e),b(0),v.bandwidth(),0,5)}))})).transition(p).attr("d",(function(e){return w(v(e),b(0),v.bandwidth(),b(0)-b(O(null===t||void 0===t?void 0:t[e],n)),5)})).attr("fill",(function(e,t){return t<S.length-1?i.t[n].color+"90":i.t[n].color}));var k=e.selectAll(".label").data(S).join("text").attr("class","label").attr("x",(function(e){return v(e)+v.bandwidth()/2})).text((function(e){return Object(c.e)(O(null===t||void 0===t?void 0:t[e],n))}));k.transition(p).attr("fill",i.t[n].color).attr("y",(function(e){var a=O(null===t||void 0===t?void 0:t[e],n);return b(a)+(a<0?15:-6)})),k.append("tspan").attr("dy",(function(e){return"".concat(O(null===t||void 0===t?void 0:t[e],n)<0?1.2:-1.2,"em")})).attr("x",(function(e){return v(e)+v.bandwidth()/2})).text((function(e,a){if(0===a)return"";var r=O(null===t||void 0===t?void 0:t[S[a-1]],n);if(!r)return"";var i=O(null===t||void 0===t?void 0:t[e],n)-r;return"".concat(i>0?"+":"").concat(Object(c.e)(100*i/Math.abs(r)),"%")})).transition(p).attr("fill",i.t[n].color+"90")}}),[S,C,n,t,N]),h.a.createElement("div",{className:"DeltaBarGraph",ref:M},h.a.createElement("svg",{ref:f,width:N,height:250,viewBox:"0 0 ".concat(N," ").concat(C),preserveAspectRatio:"xMidYMid meet"},h.a.createElement("g",{className:"x-axis"}),h.a.createElement("g",{className:"y-axis"})))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!v()(e.stateCode,t.stateCode)&&(!!v()(e.lookback,t.lookback)&&!!v()(e.statistic,t.statistic))))}));function w(e,t,n,a,r){return r=Math.sign(a)*Math.min(Math.abs(a),r),["M ".concat(e," ").concat(t),"v ".concat(-a+r),"q 0 ".concat(-r," ").concat(Math.abs(r)," ").concat(-r),"h ".concat(n-2*Math.abs(r)),"q ".concat(Math.abs(r)," 0 ").concat(Math.abs(r)," ").concat(r),"v ".concat(a-r),"Z"].join(" ")}var M=n(110),x=n(135),N=n(136),C=n(145),S=n(103),R=n(89);var z=function(e){var t=e.title,n=e.statistic,a=e.total,r=e.formula,i=e.date,c=e.description,o=e.className;return h.a.createElement("div",{className:"meta-item ".concat(o)},h.a.createElement("div",{className:"meta-item-top"},h.a.createElement("h3",null,t),h.a.createElement(S.a,{data:r},h.a.createElement(R.j,{size:16}))),h.a.createElement("h1",null,n),h.a.createElement("h5",null,i),a&&h.a.createElement("h5",null,"India has ".concat(a," CPM")),h.a.createElement("p",null,c))},I=n(75),_=n(19),P=n.n(_);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var F=Object(b.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,c=A(e,["color","size"]);return h.a.createElement("svg",T({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),h.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),h.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));F.propTypes={color:P.a.string,size:P.a.oneOfType([P.a.string,P.a.number])},F.displayName="Compass";var U=F;var H=h.a.memo((function(e){var t,n,a,r,o,l=e.stateCode,s=e.data,u=e.timeseries,d=Object.keys(u||{}).filter((function(e){return e<=Object(c.g)()})),m=d[d.length-1],f=Object(c.h)(null===u||void 0===u?void 0:u[m],"total","confirmed"),v=d.reverse().find((function(e){return Object(I.a)(Object(c.k)(m),Object(c.k)(e))>=7})),b=Object(c.h)(null===u||void 0===u?void 0:u[v],"total","confirmed"),p=Object(I.a)(Object(c.k)(m),Object(c.k)(v)),O=Object(c.h)(s[l],"total","confirmed",!0),j=Object(c.h)(s[l],"total","tested",!0),g=Object(c.h)(s.TT,"total","confirmed",!0),y=Object(c.h)(s[l],"total","activeRatio"),E=Object(c.h)(s[l],"total","recoveryRatio"),k=Object(c.h)(s[l],"total","cfr"),w=(f-b)/b*100/p;return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"StateMeta population"},h.a.createElement("div",{className:"meta-item population"},h.a.createElement("h3",null,"Population"),h.a.createElement("h1",null,Object(c.e)(null===(t=s[l])||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.population))),h.a.createElement("div",{className:"alert"},h.a.createElement(U,null),h.a.createElement("div",{className:"alert-right"},"Based on 2019 population projection by NCP"," ",h.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank"},"report")))),h.a.createElement("div",{className:"StateMeta"},h.a.createElement(z,{className:"confirmed",title:"Confirmed Per Million",statistic:Object(c.e)(O),total:Object(c.e)(g),formula:"(confirmed / state population) * 1 Million",description:"\n            ~".concat(Object(c.e)(Math.round(O))," out of every 10 lakh people in ").concat(i.d[l]," have tested positive for the virus.\n            ")}),h.a.createElement(z,{className:"active",title:"Active Ratio",statistic:"".concat(Object(c.e)(y,"%")),formula:"(active / confirmed) * 100",description:y>0?"For every 100 confirmed cases, ~".concat(Object(c.e)(Math.round(y))," are currently infected."):"Currently, there are no active cases in this state."}),h.a.createElement(z,{className:"recovery",title:"Recovery Ratio",statistic:"".concat(Object(c.e)(E,"%")),formula:"(recovered / confirmed) * 100",description:E>0?"For every 100 confirmed cases, ~".concat(Object(c.e)(Math.round(E))," have recovered from the virus."):"Unfortunately, there are no recoveries in this state yet."}),h.a.createElement(z,{className:"mortality",title:"Case Fatality Ratio",statistic:"".concat(Object(c.e)(k,"%")),formula:"(deceased / confirmed) * 100",description:k>0?"For every 100 confirmed cases, ~".concat(Object(c.e)(Math.round(k))," have unfortunately passed away from the virus."):"Fortunately, no one has passed away from the virus in this state."}),h.a.createElement(z,{className:"gr",title:"Avg. Growth Rate",statistic:w>0?"".concat(Object(c.e)(w,"%")):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(Object(c.c)(v,"dd MMM")," - ").concat(Object(c.c)(m,"dd MMM")),description:w>0?"In the last one week, the number of new infections has\n              grown by an average of ".concat(Object(c.e)(w,"%"),"\n              every day."):"There has been no growth in the number of infections in last one week."}),h.a.createElement(z,{className:"tpm",title:"Tests Per Million",statistic:"".concat(Object(c.e)(j)),formula:"(total tests in state / total population of state) * 1 Million",date:j?"As of ".concat(Object(c.d)(null===(a=s[l])||void 0===a||null===(r=a.meta)||void 0===r||null===(o=r.tested)||void 0===o?void 0:o.last_updated)," ago"):"",description:j>0?"For every 10 lakh people in ".concat(i.d[l],",\n                ~").concat(Object(c.e)(Math.round(j))," samples were tested."):"No tests have been conducted in this state yet."})))}),(function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode})),L=n(102),D=n(82),B=n.n(D);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var q=Object(b.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,c=W(e,["color","size"]);return h.a.createElement("svg",V({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),h.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),h.a.createElement("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),h.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),h.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}))}));q.propTypes={color:P.a.string,size:P.a.oneOfType([P.a.string,P.a.number])},q.displayName="Smile";var G=q,J=n(112),K=n(254),X=n(5),Y=n(216),Z=n(107),Q=Object(b.lazy)((function(){return n.e(20).then(n.bind(null,200))})),$=Object(b.lazy)((function(){return Promise.all([n.e(6),n.e(38)]).then(n.bind(null,249))})),ee=Object(b.lazy)((function(){return Promise.all([n.e(2),n.e(32)]).then(n.bind(null,175))}));t.default=h.a.memo((function(){var e,t,n,o,l,s,u=Object(K.a)().t,d=Object(X.i)().stateCode.toUpperCase(),m=Object(Y.a)("mapStatistic","active"),f=Object(r.a)(m,2),v=f[0],p=f[1],O=Object(b.useState)(!1),j=Object(r.a)(O,2),g=j[0],y=j[1],E=Object(b.useState)({stateCode:d,districtName:null}),w=Object(r.a)(E,2),S=w[0],R=w[1];Object(b.useEffect)((function(){S.stateCode!==d&&(R({stateCode:d,districtName:null}),y(!1))}),[S.stateCode,d]);var z=Object(Z.a)("".concat(i.a,"/timeseries-").concat(d,".min.json"),c.b,{revalidateOnMount:!0,refreshInterval:1e5}),I=z.data,_=z.error,P=Object(Z.a)("".concat(i.a,"/data.min.json"),c.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,T=Object(b.useMemo)((function(){var e;if(P){var t=window.innerWidth>=540?3:2,n=(null===(e=P[d])||void 0===e?void 0:e.districts)?Object.keys(P[d].districts).filter((function(e){return"Unknown"!==e})).length:0;return Math.ceil(n/t)}}),[P,d]),A=Object(b.useRef)(),F=Object(L.a)(A,{once:!0}),U=Object(b.useMemo)((function(){var e=[];return[0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),D=g?window.innerWidth>=540?10:8:6;return h.a.createElement(h.a.Fragment,null,h.a.createElement(J.a,null,h.a.createElement("title",null,"Coronavirus Outbreak in ",i.d[d]," - nz.covid19live.com"),h.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(i.d[d],": Latest Map and Case Count")})),h.a.createElement("div",{className:"State"},h.a.createElement("div",{className:"state-left"},h.a.createElement(C.default,{data:null===P||void 0===P?void 0:P[d],stateCode:d}),h.a.createElement("div",{style:{position:"relative"}},h.a.createElement(N.default,{mapStatistic:v,setMapStatistic:p}),h.a.createElement(x.default,{data:null===P||void 0===P?void 0:P[d]}),h.a.createElement(ee,Object.assign({timeseries:null===I||void 0===I||null===(e=I[d])||void 0===e?void 0:e.dates},{stateCode:d},{forceRender:!!_}))),P&&h.a.createElement(b.Suspense,{fallback:h.a.createElement("div",{style:{minHeight:"50rem"}})},h.a.createElement($,{stateCode:d,data:P,regionHighlighted:S,setRegionHighlighted:R,mapStatistic:v,setMapStatistic:p})),h.a.createElement("span",{ref:A}),P&&F&&h.a.createElement(H,Object.assign({stateCode:d,data:P},{timeseries:null===I||void 0===I||null===(t=I[d])||void 0===t?void 0:t.dates}))),h.a.createElement("div",{className:"state-right"},h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"district-bar",style:g?{}:{display:"flex"}},h.a.createElement("div",{className:"district-bar-top"},h.a.createElement("div",{className:"district-bar-left"},h.a.createElement("h2",{className:B()(v,"fadeInUp"),style:U[0]},"Top districts"),h.a.createElement("div",{className:"districts fadeInUp ".concat(g?"is-grid":""),style:g?Object(a.a)({gridTemplateRows:"repeat(".concat(T,", 2rem)")},U[1]):U[1]},Object.keys((null===P||void 0===P||null===(n=P[d])||void 0===n?void 0:n.districts)||{}).filter((function(e){return"Unknown"!==e})).sort((function(e,t){return function(e,t){var n=P[d].districts[e],a=P[d].districts[t];return Object(c.h)(a,"total",v)-Object(c.h)(n,"total",v)}(e,t)})).slice(0,g?void 0:5).map((function(e){var t=Object(c.h)(P[d].districts[e],"total",v),n=Object(c.h)(P[d].districts[e],"delta",v);return h.a.createElement("div",{key:e,className:"district"},h.a.createElement("h2",null,Object(c.e)(t)),h.a.createElement("h5",null,u(e)),"active"!==v&&h.a.createElement("div",{className:"delta"},h.a.createElement("h6",{className:v},n>0?"\u2191"+Object(c.e)(n):"")))})))),h.a.createElement("div",{className:"district-bar-right fadeInUp",style:U[2]},I&&("confirmed"===v||"deceased"===v)&&h.a.createElement("div",{className:"happy-sign"},Object.keys((null===(o=I[d])||void 0===o?void 0:o.dates)||{}).slice(-D).every((function(e){return 0===Object(c.h)(I[d].dates[e],"delta",v)}))&&h.a.createElement("div",{className:"alert ".concat("confirmed"===v?"is-green":"")},h.a.createElement(G,null),h.a.createElement("div",{className:"alert-right"},"No new ",v," cases in the past five days"))),h.a.createElement(k,Object.assign({timeseries:null===I||void 0===I||null===(l=I[d])||void 0===l?void 0:l.dates,statistic:v},{stateCode:d,lookback:D},{forceRender:!!_})))),h.a.createElement("div",{className:"district-bar-bottom"},Object.keys((null===P||void 0===P||null===(s=P[d])||void 0===s?void 0:s.districts)||{}).length>5?h.a.createElement("button",{className:"button fadeInUp",onClick:function(){y(!g)},style:U[3]},h.a.createElement("span",null,g?"View less":"View all")):h.a.createElement("div",{style:{height:"3.75rem",flexBasis:"15%"}}))),h.a.createElement(b.Suspense,{fallback:h.a.createElement("div",null)},h.a.createElement(Q,Object.assign({stateCode:d,timeseries:I,regionHighlighted:S,setRegionHighlighted:R},{forceRender:!!_})))))),h.a.createElement(M.default,null))}))}}]);
//# sourceMappingURL=13.dac12f46.chunk.js.map