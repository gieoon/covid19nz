(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[12,23,26,31,33],{101:function(e,t,n){"use strict";var a=n(80),r=n(0),i={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(o(!0),n.unobserve(e.current))}))}),i).observe(e.current)}),[e]),c}},102:function(e,t,n){"use strict";var a=n(80),r=n(96),i=n(0),c=n.n(i),o=n(84);t.a=function(e){var t=e.data,n=e.children,l=Object(i.useState)(!1),s=Object(a.a)(l,2),u=s[0],d=s[1],m=Object(o.f)(u,null,{from:r.f,enter:r.e,leave:r.f,config:{mass:1,tension:210,friction:20}}),f=Object(i.useCallback)((function(e){return e.stopPropagation()}),[]);return c.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:d.bind(void 0,!0),onMouseLeave:d.bind(void 0,!1),onClick:f.bind(void 0)},n,m.map((function(e){var n=e.item,a=e.key,r=e.props;return n?c.a.createElement(o.a.div,{key:a,style:r},c.a.createElement("div",{className:"message"},c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):c.a.createElement(o.a.div,{key:a})})))}},108:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return m}));var a=Array.prototype.slice,r=function(e){return e};function i(e){return"translate("+(e+.5)+",0)"}function c(e){return"translate(0,"+(e+.5)+")"}function o(e){return function(t){return+e(t)}}function l(e){var t=Math.max(0,e.bandwidth()-1)/2;return e.round()&&(t=Math.round(t)),function(n){return+e(n)+t}}function s(){return!this.__axis}function u(e,t){var n=[],u=null,d=null,m=6,f=6,v=3,b=1===e||4===e?-1:1,p=4===e||2===e?"x":"y",h=1===e||3===e?i:c;function O(a){var i=null==u?t.ticks?t.ticks.apply(t,n):t.domain():u,c=null==d?t.tickFormat?t.tickFormat.apply(t,n):r:d,O=Math.max(m,0)+v,g=t.range(),j=+g[0]+.5,y=+g[g.length-1]+.5,E=(t.bandwidth?l:o)(t.copy()),k=a.selection?a.selection():a,w=k.selectAll(".domain").data([null]),M=k.selectAll(".tick").data(i,t).order(),x=M.exit(),N=M.enter().append("g").attr("class","tick"),C=M.select("line"),S=M.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),M=M.merge(N),C=C.merge(N.append("line").attr("stroke","currentColor").attr(p+"2",b*m)),S=S.merge(N.append("text").attr("fill","currentColor").attr(p,b*O).attr("dy",1===e?"0em":3===e?"0.71em":"0.32em")),a!==k&&(w=w.transition(a),M=M.transition(a),C=C.transition(a),S=S.transition(a),x=x.transition(a).attr("opacity",1e-6).attr("transform",(function(e){return isFinite(e=E(e))?h(e):this.getAttribute("transform")})),N.attr("opacity",1e-6).attr("transform",(function(e){var t=this.parentNode.__axis;return h(t&&isFinite(t=t(e))?t:E(e))}))),x.remove(),w.attr("d",4===e||2==e?f?"M"+b*f+","+j+"H0.5V"+y+"H"+b*f:"M0.5,"+j+"V"+y:f?"M"+j+","+b*f+"V0.5H"+y+"V"+b*f:"M"+j+",0.5H"+y),M.attr("opacity",1).attr("transform",(function(e){return h(E(e))})),C.attr(p+"2",b*m),S.attr(p,b*O).text(c),k.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===e?"start":4===e?"end":"middle"),k.each((function(){this.__axis=E}))}return O.scale=function(e){return arguments.length?(t=e,O):t},O.ticks=function(){return n=a.call(arguments),O},O.tickArguments=function(e){return arguments.length?(n=null==e?[]:a.call(e),O):n.slice()},O.tickValues=function(e){return arguments.length?(u=null==e?null:a.call(e),O):u&&u.slice()},O.tickFormat=function(e){return arguments.length?(d=e,O):d},O.tickSize=function(e){return arguments.length?(m=f=+e,O):m},O.tickSizeInner=function(e){return arguments.length?(m=+e,O):m},O.tickSizeOuter=function(e){return arguments.length?(f=+e,O):f},O.tickPadding=function(e){return arguments.length?(v=+e,O):v},O}function d(e){return u(2,e)}function m(e){return u(3,e)}},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),c=n.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,s=l(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Twitter";var u=s;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,o=m(e,["color","size"]);return r.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.a.createElement("polyline",{points:"22,6 12,13 2,6"}))}));f.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},f.displayName="Mail";var v=f,b=n(245);t.default=r.a.memo((function(){var e=Object(b.a)().t;return r.a.createElement("footer",null,r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://nz.covid19live.com",target:"_blank",rel:"noopener noreferrer"},"nz.covid19live")),r.a.createElement("h5",null,e("Keeping Kiwi's updated in challenging times"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,e("This website was built based on ")),r.a.createElement("a",{target:"_blank",href:"https://github.com/covid19india/covid19india-react",rel:"noopener noreferrer"},"covid19india.org")),r.a.createElement("div",{className:"links"},r.a.createElement("a",{href:"https://twitter.com/nzcovid19live",target:"_blank",rel:"noopener noreferrer",className:"twitter"},r.a.createElement(u,null)),r.a.createElement("a",{href:"mailto:jun.a.kagaya@gmail.com",className:"mail",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v,null))))}))},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(93),r=n(90),i=Symbol("implicit");function c(){var e=new Map,t=[],n=[],o=i;function l(a){var r=a+"",c=e.get(r);if(!c){if(o!==i)return o;e.set(r,c=t.push(a))}return n[(c-1)%n.length]}return l.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new Map;var r,i=Object(a.a)(n);try{for(i.s();!(r=i.n()).done;){var c=r.value,o=c+"";e.has(o)||e.set(o,t.push(c))}}catch(s){i.e(s)}finally{i.f()}return l},l.range=function(e){return arguments.length?(n=Array.from(e),l):n.slice()},l.unknown=function(e){return arguments.length?(o=e,l):o},l.copy=function(){return c(t,n).unknown(o)},r.b.apply(l,arguments),l}},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(93);function r(e,t){var n;if(void 0===t){var r,i=Object(a.a)(e);try{for(i.s();!(r=i.n()).done;){var c=r.value;null!=c&&(n>c||void 0===n&&c>=c)&&(n=c)}}catch(d){i.e(d)}finally{i.f()}}else{var o,l=-1,s=Object(a.a)(e);try{for(s.s();!(o=s.n()).done;){var u=o.value;null!=(u=t(u,++l,e))&&(n>u||void 0===n&&u>=u)&&(n=u)}}catch(d){s.e(d)}finally{s.f()}}return n}},135:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(31),i=n(89),c=n(81),o=n.n(c),l=n(85),s=n.n(l),u=n(0),d=n.n(u),m=n(245),f=n(84);var v=d.a.memo((function(e){var t=e.statistic,n=e.total,c=e.delta,o=Object(m.a)().t,l=Object(f.c)({total:n,delta:c,config:a.u}),s=a.v[t];return d.a.createElement(d.a.Fragment,null,d.a.createElement("h5",null,o(Object(r.a)(s.displayName))),d.a.createElement(f.a.h4,null,"active"!==t?c>0?l.delta.interpolate((function(e){return"+".concat(Object(r.e)(e,s.format,t))})):d.a.createElement(i.h,{size:9,verticalAlign:2}):"\xa0"),d.a.createElement(f.a.h1,null,l.total.interpolate((function(e){return Object(r.e)(e,s.format,t)}))))}));t.default=d.a.memo((function(e){var t=e.data,n=Object(u.useMemo)((function(){var e=[];return a.t.map((function(t,n){return e.push({animationDelay:"".concat(750+250*n,"ms")}),null})),e}),[]);return d.a.createElement("div",{className:"Level"},a.t.map((function(e,a){return d.a.createElement(f.a.div,{key:a,className:o()("level-item","is-".concat(e),"fadeInUp"),style:n[a]},d.a.createElement(v,Object.assign({statistic:e},{total:Object(r.h)(t,"total",e),delta:Object(r.h)(t,"delta",e)})))})))}),(function(e,t){return!!s()(Object(r.h)(e.data,"total","active"),Object(r.h)(t.data,"total","active"))}))},136:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(80),i=n(9),c=n(81),o=n.n(c),l=n(0),s=n.n(l),u=n(45),d=n.n(u),m=n(84),f=n(146);t.default=s.a.memo((function(e){var t=e.mapStatistic,n=e.setMapStatistic,c=Object(f.a)(),u=Object(r.a)(c,2),v=u[0],b=u[1].width,p=Object(l.useState)(!1),h=Object(r.a)(p,2),O=h[0],g=h[1],j=Object(l.useState)(0),y=Object(r.a)(j,2),E=y[0],k=y[1],w=Object(m.c)((function(){return{opacity:0,background:"".concat(i.v[t].color,"20"),transform:"translateX(".concat(b*i.t.indexOf(t)*.25,"px)"),config:m.b.gentle}})),M=Object(r.a)(w,2),x=M[0],N=M[1];Object(l.useEffect)((function(){b>0&&d.a.unstable_batchedUpdates((function(){N({transform:"translateX(".concat(b*i.t.indexOf(t)*.25,"px)"),opacity:1,background:"".concat(i.v[t].color,"20"),delay:0===E?1500:0,onStart:g.bind(void 0,!0),onRest:g.bind(void 0,!1)})}))}),[E,t,N,b]);var C=Object(l.useCallback)((function(e){k((function(e){return e+1})),n(e)}),[n]);return s.a.createElement("div",{className:"MapSwitcher",ref:v},s.a.createElement(m.a.div,{className:"highlight",style:x}),i.t.map((function(e,t){return s.a.createElement("div",{key:t,className:o()("clickable",Object(a.a)({},"is-".concat(e),!O)),onClick:C.bind(void 0,e)})})))}),(function(e,t){return e.mapStatistic===t.mapStatistic}))},137:function(e,t,n){"use strict";var a=n(0),r=n(87),i=["mousedown","touchstart"];t.a=function(e,t,n){void 0===n&&(n=i);var c=Object(a.useRef)(t);Object(a.useEffect)((function(){c.current=t}),[t]),Object(a.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&c.current(t)},a=0,i=n;a<i.length;a++){var o=i[a];Object(r.c)(document,o,t)}return function(){for(var e=0,a=n;e<a.length;e++){var i=a[e];Object(r.b)(document,i,t)}}}),[n,e])}},145:function(e,t,n){"use strict";n.r(t);var a=n(80),r=n(9),i=n(0),c=n.n(i),o=n(245),l=n(5),s=n(84),u=n(137),d=function(e){var t=e.stateCode,n=e.trail,d=Object(i.useState)(!1),m=Object(a.a)(d,2),f=m[0],v=m[1],b=Object(i.useRef)(),p=Object(l.g)(),h=Object(o.a)().t;Object(u.a)(b,(function(){v(!1)}));var O=Object(s.f)(f,null,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),g=Object(i.useCallback)((function(e){v(!1),p.push("/state/".concat(e))}),[p]);return c.a.createElement("div",{className:"StateDropdown",ref:b},c.a.createElement(s.a.h1,{className:"state-name fadeInUp",style:n,onClick:v.bind(void 0,!f)},h(r.e[t])),O.map((function(e){var n=e.item,a=e.key,i=e.props;return n?c.a.createElement(s.a.div,{className:"dropdown",style:i,key:a},Object.keys(r.l).filter((function(e){return"TT"!==e&&e!==t})).sort((function(e,t){return r.e[e].localeCompare(r.e[t])})).map((function(e){return c.a.createElement("h1",{key:e,className:"item",onClick:g.bind(void 0,e)},h(r.e[e]))}))):c.a.createElement(s.a.div,{key:t,style:i})})),f&&c.a.createElement("div",{className:"backdrop"}))},m=n(31);t.default=c.a.memo((function(e){var t,n,a,l,u,f=e.data,v=e.stateCode,b=Object(o.a)().t,p=Object(i.useMemo)((function(){var e=[];return[0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),h=Object(s.c)({total:Object(m.h)(f,"total","tested"),config:r.u});return c.a.createElement("div",{className:"StateHeader"},c.a.createElement("div",{className:"header-left"},c.a.createElement(d,Object.assign({stateCode:v},{hyperlink:!1,trail:p[0]})),(null===f||void 0===f||null===(t=f.meta)||void 0===t?void 0:t.last_updated)&&c.a.createElement("h5",{className:"fadeInUp",style:p[1]},"".concat(b("Last Updated on")," ").concat(Object(m.c)(f.meta.last_updated,"dd MMM, p")," NZST"))),c.a.createElement("div",{className:"header-right fadeInUp",style:p[2]},c.a.createElement("h5",null,b("Tested")),c.a.createElement(s.a.h2,null,h.total.interpolate((function(e){return Object(m.e)(Math.floor(e))}))),(null===f||void 0===f||null===(n=f.meta)||void 0===n||null===(a=n.tested)||void 0===a?void 0:a.last_updated)&&c.a.createElement("h5",{className:"timestamp"},"".concat(b("As of ")).concat(Object(m.c)(f.meta.tested.last_updated,"dd MMMM"))),(null===f||void 0===f||null===(l=f.meta)||void 0===l||null===(u=l.tested)||void 0===u?void 0:u.source)&&c.a.createElement("h5",null,b("per "),c.a.createElement("a",{href:f.meta.tested.source,target:"_noblank"},b("source")))))}))},146:function(e,t,n){"use strict";var a=n(0),r="undefined"!==typeof window?a.useLayoutEffect:a.useEffect,i=n(87),c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};t.a=i.a&&window.ResizeObserver?function(){var e=Object(a.useState)(null),t=e[0],n=e[1],i=Object(a.useState)(c),o=i[0],l=i[1],s=Object(a.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,n=t.x,a=t.y,r=t.width,i=t.height,c=t.top,o=t.left,s=t.bottom,u=t.right;l({x:n,y:a,width:r,height:i,top:c,left:o,bottom:s,right:u})}}))}),[]);return r((function(){if(t)return s.observe(t),function(){s.disconnect()}}),[t]),[n,o]}:function(){return[function(){},c]}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(80),r=n(168),i=n(90),c=n(114);function o(){var e,t,n=Object(c.a)().unknown(void 0),l=n.domain,s=n.range,u=0,d=1,m=!1,f=0,v=0,b=.5;function p(){var n=l().length,a=d<u,i=a?d:u,c=a?u:d;e=(c-i)/Math.max(1,n-f+2*v),m&&(e=Math.floor(e)),i+=(c-i-e*(n-f))*b,t=e*(1-f),m&&(i=Math.round(i),t=Math.round(t));var o=Object(r.a)(n).map((function(t){return i+e*t}));return s(a?o.reverse():o)}return delete n.unknown,n.domain=function(e){return arguments.length?(l(e),p()):l()},n.range=function(e){var t,n;return arguments.length?(t=e,n=Object(a.a)(t,2),u=n[0],d=n[1],u=+u,d=+d,p()):[u,d]},n.rangeRound=function(e){var t,n;return t=e,n=Object(a.a)(t,2),u=n[0],d=n[1],u=+u,d=+d,m=!0,p()},n.bandwidth=function(){return t},n.step=function(){return e},n.round=function(e){return arguments.length?(m=!!e,p()):m},n.padding=function(e){return arguments.length?(f=Math.min(1,v=+e),p()):f},n.paddingInner=function(e){return arguments.length?(f=Math.min(1,e),p()):f},n.paddingOuter=function(e){return arguments.length?(v=+e,p()):v},n.align=function(e){return arguments.length?(b=Math.max(0,Math.min(1,e)),p()):b},n.copy=function(){return o(l(),[u,d]).round(m).paddingInner(f).paddingOuter(v).align(b)},i.b.apply(p(),arguments)}},168:function(e,t,n){"use strict";t.a=function(e,t,n){e=+e,t=+t,n=(r=arguments.length)<2?(t=e,e=0,1):r<3?1:+n;for(var a=-1,r=0|Math.max(0,Math.ceil((t-e)/n)),i=new Array(r);++a<r;)i[a]=e+a*n;return i}},229:function(e,t,n){"use strict";n.r(t);var a=n(32),r=n(80),i=n(9),c=n(31),o=n(134),l=n(171),s=n(108),u=n(167),d=n(121),m=n(209),f=(n(104),n(85)),v=n.n(f),b=n(0),p=n.n(b),h=n(146),O=function(e,t){return Object(c.h)(e,"delta",t)},g=50,j=0,y=50,E=0;var k=p.a.memo((function(e){var t=e.timeseries,n=e.statistic,a=e.lookback,f=Object(b.useRef)(),v=Object(h.a)(),k=Object(r.a)(v,2),M=k[0],x=k[1],N=x.width,C=x.height,S=Object.keys(t||{}).filter((function(e){return e<=Object(c.g)()})).slice(-a);return Object(b.useEffect)((function(){if(N){var e=Object(m.a)(f.current),a=N-j,r=C-y,v=Object(u.a)().domain(S).range([E,a]).paddingInner(N/1e3),b=Object(d.a)().domain([Math.min(0,Object(o.a)(S,(function(e){return O(null===t||void 0===t?void 0:t[e],n)}))),Math.max(1,Object(l.a)(S,(function(e){return O(null===t||void 0===t?void 0:t[e],n)})))]).range([r,g]),p=Object(s.a)(v).tickSize(0).tickFormat((function(e){return Object(c.c)(e,"dd MMM")})),h=e.transition().duration(i.f);e.select(".x-axis").transition(h).style("transform","translateY(".concat(b(0),"px)")).call(p).on("start",(function(){return e.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(e,a){return O(null===t||void 0===t?void 0:t[e],n)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",i.v[n].color),e.selectAll(".bar").data(S).join((function(e){return e.append("path").attr("class","bar").attr("d",(function(e){return w(v(e),b(0),v.bandwidth(),0,5)}))})).transition(h).attr("d",(function(e){return w(v(e),b(0),v.bandwidth(),b(0)-b(O(null===t||void 0===t?void 0:t[e],n)),5)})).attr("fill",(function(e,t){return t<S.length-1?i.v[n].color+"90":i.v[n].color}));var k=e.selectAll(".label").data(S).join("text").attr("class","label").attr("x",(function(e){return v(e)+v.bandwidth()/2})).text((function(e){return Object(c.e)(O(null===t||void 0===t?void 0:t[e],n))}));k.transition(h).attr("fill",i.v[n].color).attr("y",(function(e){var a=O(null===t||void 0===t?void 0:t[e],n);return b(a)+(a<0?15:-6)})),k.append("tspan").attr("dy",(function(e){return"".concat(O(null===t||void 0===t?void 0:t[e],n)<0?1.2:-1.2,"em")})).attr("x",(function(e){return v(e)+v.bandwidth()/2})).text((function(e,a){if(0===a)return"";var r=O(null===t||void 0===t?void 0:t[S[a-1]],n);if(!r)return"";var i=O(null===t||void 0===t?void 0:t[e],n)-r;return"".concat(i>0?"+":"").concat(Object(c.e)(100*i/Math.abs(r)),"%")})).transition(h).attr("fill",i.v[n].color+"90")}}),[S,C,n,t,N]),p.a.createElement("div",{className:"DeltaBarGraph",ref:M},p.a.createElement("svg",{ref:f,width:N,height:250,viewBox:"0 0 ".concat(N," ").concat(C),preserveAspectRatio:"xMidYMid meet"},p.a.createElement("g",{className:"x-axis"}),p.a.createElement("g",{className:"y-axis"})))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!v()(e.stateCode,t.stateCode)&&(!!v()(e.lookback,t.lookback)&&!!v()(e.statistic,t.statistic))))}));function w(e,t,n,a,r){return r=Math.sign(a)*Math.min(Math.abs(a),r),["M ".concat(e," ").concat(t),"v ".concat(-a+r),"q 0 ".concat(-r," ").concat(Math.abs(r)," ").concat(-r),"h ".concat(n-2*Math.abs(r)),"q ".concat(Math.abs(r)," 0 ").concat(Math.abs(r)," ").concat(r),"v ".concat(a-r),"Z"].join(" ")}var M=n(109),x=n(135),N=n(136),C=n(145),S=n(102),z=n(89);var R=function(e){var t=e.title,n=e.statistic,a=e.total,r=e.formula,i=e.date,c=e.description,o=e.className;return p.a.createElement("div",{className:"meta-item ".concat(o)},p.a.createElement("div",{className:"meta-item-top"},p.a.createElement("h3",null,t),p.a.createElement(S.a,{data:r},p.a.createElement(z.i,{size:16}))),p.a.createElement("h1",null,n),p.a.createElement("h5",null,i),a&&p.a.createElement("h5",null,"India has ".concat(a," CPM")),p.a.createElement("p",null,c))},I=n(2),T=n(13),_=n(1);function P(e){Object(_.a)(1,arguments);var t=Object(I.a)(e);return t.setHours(0,0,0,0),t}function A(e,t){Object(_.a)(2,arguments);var n=P(e),a=P(t),r=n.getTime()-Object(T.a)(n),i=a.getTime()-Object(T.a)(a);return Math.round((r-i)/864e5)}function F(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function D(e,t){Object(_.a)(2,arguments);var n=Object(I.a)(e),a=Object(I.a)(t),r=F(n,a),i=Math.abs(A(n,a));n.setDate(n.getDate()-r*i);var c=F(n,a)===-r,o=r*(i-c);return 0===o?0:o}var H=n(19),U=n.n(H);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var V=Object(b.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,c=B(e,["color","size"]);return p.a.createElement("svg",L({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),p.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),p.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));V.propTypes={color:U.a.string,size:U.a.oneOfType([U.a.string,U.a.number])},V.displayName="Compass";var W=V;var Y=p.a.memo((function(e){var t,n,a,r,o,l=e.stateCode,s=e.data,u=e.timeseries,d=Object.keys(u||{}).filter((function(e){return e<=Object(c.g)()})),m=d[d.length-1],f=Object(c.h)(null===u||void 0===u?void 0:u[m],"total","confirmed"),v=d.reverse().find((function(e){return D(Object(c.k)(m),Object(c.k)(e))>=7})),b=Object(c.h)(null===u||void 0===u?void 0:u[v],"total","confirmed"),h=D(Object(c.k)(m),Object(c.k)(v)),O=Object(c.h)(s[l],"total","confirmed",!0),g=Object(c.h)(s[l],"total","tested",!0),j=Object(c.h)(s.TT,"total","confirmed",!0),y=Object(c.h)(s[l],"total","activeRatio"),E=Object(c.h)(s[l],"total","recoveryRatio"),k=Object(c.h)(s[l],"total","cfr"),w=(f-b)/b*100/h;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"StateMeta population"},p.a.createElement("div",{className:"meta-item population"},p.a.createElement("h3",null,"Population"),p.a.createElement("h1",null,Object(c.e)(null===(t=s[l])||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.population))),p.a.createElement("div",{className:"alert"},p.a.createElement(W,null),p.a.createElement("div",{className:"alert-right"},"Based on 2019 population projection by NCP"," ",p.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank"},"report")))),p.a.createElement("div",{className:"StateMeta"},p.a.createElement(R,{className:"confirmed",title:"Confirmed Per Million",statistic:Object(c.e)(O),total:Object(c.e)(j),formula:"(confirmed / state population) * 1 Million",description:"\n            ~".concat(Object(c.e)(Math.round(O))," out of every 10 lakh people in ").concat(i.e[l]," have tested positive for the virus.\n            ")}),p.a.createElement(R,{className:"active",title:"Active Ratio",statistic:"".concat(Object(c.e)(y,"%")),formula:"(active / confirmed) * 100",description:y>0?"For every 100 confirmed cases, ~".concat(Object(c.e)(Math.round(y))," are currently infected."):"Currently, there are no active cases in this state."}),p.a.createElement(R,{className:"recovery",title:"Recovery Ratio",statistic:"".concat(Object(c.e)(E,"%")),formula:"(recovered / confirmed) * 100",description:E>0?"For every 100 confirmed cases, ~".concat(Object(c.e)(Math.round(E))," have recovered from the virus."):"Unfortunately, there are no recoveries in this state yet."}),p.a.createElement(R,{className:"mortality",title:"Case Fatality Ratio",statistic:"".concat(Object(c.e)(k,"%")),formula:"(deceased / confirmed) * 100",description:k>0?"For every 100 confirmed cases, ~".concat(Object(c.e)(Math.round(k))," have unfortunately passed away from the virus."):"Fortunately, no one has passed away from the virus in this state."}),p.a.createElement(R,{className:"gr",title:"Avg. Growth Rate",statistic:w>0?"".concat(Object(c.e)(w,"%")):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(Object(c.c)(v,"dd MMM")," - ").concat(Object(c.c)(m,"dd MMM")),description:w>0?"In the last one week, the number of new infections has\n              grown by an average of ".concat(Object(c.e)(w,"%"),"\n              every day."):"There has been no growth in the number of infections in last one week."}),p.a.createElement(R,{className:"tpm",title:"Tests Per Million",statistic:"".concat(Object(c.e)(g)),formula:"(total tests in state / total population of state) * 1 Million",date:g?"As of ".concat(Object(c.d)(null===(a=s[l])||void 0===a||null===(r=a.meta)||void 0===r||null===(o=r.tested)||void 0===o?void 0:o.last_updated)," ago"):"",description:g>0?"For every 10 lakh people in ".concat(i.e[l],",\n                ~").concat(Object(c.e)(Math.round(g))," samples were tested."):"No tests have been conducted in this state yet."})))}),(function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode})),q=n(101),G=n(81),J=n.n(G);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Z=Object(b.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,c=X(e,["color","size"]);return p.a.createElement("svg",K({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),p.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),p.a.createElement("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),p.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),p.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}))}));Z.propTypes={color:U.a.string,size:U.a.oneOfType([U.a.string,U.a.number])},Z.displayName="Smile";var Q=Z,$=n(111),ee=n(245),te=n(5),ne=n(207),ae=n(106),re=Object(b.lazy)((function(){return n.e(19).then(n.bind(null,196))})),ie=Object(b.lazy)((function(){return Promise.all([n.e(6),n.e(29)]).then(n.bind(null,239))})),ce=Object(b.lazy)((function(){return Promise.all([n.e(2),n.e(34)]).then(n.bind(null,174))}));t.default=p.a.memo((function(){var e,t,n,o,l,s,u=Object(ee.a)().t,d=Object(te.i)().stateCode.toUpperCase(),m=Object(ne.a)("mapStatistic","active"),f=Object(r.a)(m,2),v=f[0],h=f[1],O=Object(b.useState)(!1),g=Object(r.a)(O,2),j=g[0],y=g[1],E=Object(b.useState)({stateCode:d,districtName:null}),w=Object(r.a)(E,2),S=w[0],z=w[1];Object(b.useEffect)((function(){S.stateCode!==d&&(z({stateCode:d,districtName:null}),y(!1))}),[S.stateCode,d]);var R=Object(ae.a)("".concat(i.b,"/timeseries-").concat(d,".min.json"),c.b,{revalidateOnMount:!0,refreshInterval:1e5}),I=R.data,T=R.error,_=Object(ae.a)("".concat(i.b,"/data.min.json"),c.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,P=Object(b.useMemo)((function(){var e;if(_){var t=window.innerWidth>=540?3:2,n=(null===(e=_[d])||void 0===e?void 0:e.districts)?Object.keys(_[d].districts).filter((function(e){return"Unknown"!==e})).length:0;return Math.ceil(n/t)}}),[_,d]),A=Object(b.useRef)(),F=Object(q.a)(A,{once:!0}),D=Object(b.useMemo)((function(){var e=[];return[0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),H=j?window.innerWidth>=540?10:8:6;return p.a.createElement(p.a.Fragment,null,p.a.createElement($.a,null,p.a.createElement("title",null,"Coronavirus Outbreak in ",i.e[d]," - nz.covid19live.com"),p.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(i.e[d],": Latest Map and Case Count")})),p.a.createElement("div",{className:"State"},p.a.createElement("div",{className:"state-left"},p.a.createElement(C.default,{data:null===_||void 0===_?void 0:_[d],stateCode:d}),p.a.createElement("div",{style:{position:"relative"}},p.a.createElement(N.default,{mapStatistic:v,setMapStatistic:h}),p.a.createElement(x.default,{data:null===_||void 0===_?void 0:_[d]}),p.a.createElement(ce,Object.assign({timeseries:null===I||void 0===I||null===(e=I[d])||void 0===e?void 0:e.dates},{stateCode:d},{forceRender:!!T}))),_&&p.a.createElement(b.Suspense,{fallback:p.a.createElement("div",{style:{minHeight:"50rem"}})},p.a.createElement(ie,{stateCode:d,data:_,regionHighlighted:S,setRegionHighlighted:z,mapStatistic:v,setMapStatistic:h})),p.a.createElement("span",{ref:A}),_&&F&&p.a.createElement(Y,Object.assign({stateCode:d,data:_},{timeseries:null===I||void 0===I||null===(t=I[d])||void 0===t?void 0:t.dates}))),p.a.createElement("div",{className:"state-right"},p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"district-bar",style:j?{}:{display:"flex"}},p.a.createElement("div",{className:"district-bar-top"},p.a.createElement("div",{className:"district-bar-left"},p.a.createElement("h2",{className:J()(v,"fadeInUp"),style:D[0]},"Top districts"),p.a.createElement("div",{className:"districts fadeInUp ".concat(j?"is-grid":""),style:j?Object(a.a)({gridTemplateRows:"repeat(".concat(P,", 2rem)")},D[1]):D[1]},Object.keys((null===_||void 0===_||null===(n=_[d])||void 0===n?void 0:n.districts)||{}).filter((function(e){return"Unknown"!==e})).sort((function(e,t){return function(e,t){var n=_[d].districts[e],a=_[d].districts[t];return Object(c.h)(a,"total",v)-Object(c.h)(n,"total",v)}(e,t)})).slice(0,j?void 0:5).map((function(e){var t=Object(c.h)(_[d].districts[e],"total",v),n=Object(c.h)(_[d].districts[e],"delta",v);return p.a.createElement("div",{key:e,className:"district"},p.a.createElement("h2",null,Object(c.e)(t)),p.a.createElement("h5",null,u(e)),"active"!==v&&p.a.createElement("div",{className:"delta"},p.a.createElement("h6",{className:v},n>0?"\u2191"+Object(c.e)(n):"")))})))),p.a.createElement("div",{className:"district-bar-right fadeInUp",style:D[2]},I&&("confirmed"===v||"deceased"===v)&&p.a.createElement("div",{className:"happy-sign"},Object.keys((null===(o=I[d])||void 0===o?void 0:o.dates)||{}).slice(-H).every((function(e){return 0===Object(c.h)(I[d].dates[e],"delta",v)}))&&p.a.createElement("div",{className:"alert ".concat("confirmed"===v?"is-green":"")},p.a.createElement(Q,null),p.a.createElement("div",{className:"alert-right"},"No new ",v," cases in the past five days"))),p.a.createElement(k,Object.assign({timeseries:null===I||void 0===I||null===(l=I[d])||void 0===l?void 0:l.dates,statistic:v},{stateCode:d,lookback:H},{forceRender:!!T})))),p.a.createElement("div",{className:"district-bar-bottom"},Object.keys((null===_||void 0===_||null===(s=_[d])||void 0===s?void 0:s.districts)||{}).length>5?p.a.createElement("button",{className:"button fadeInUp",onClick:function(){y(!j)},style:D[3]},p.a.createElement("span",null,j?"View less":"View all")):p.a.createElement("div",{style:{height:"3.75rem",flexBasis:"15%"}}))),p.a.createElement(b.Suspense,{fallback:p.a.createElement("div",null)},p.a.createElement(re,Object.assign({stateCode:d,timeseries:I,regionHighlighted:S,setRegionHighlighted:z},{forceRender:!!T})))))),p.a.createElement(M.default,null))}))},96:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l}));var a={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},r={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},i={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},c={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},o={opacity:1,transform:"translate3d(0, 0px, 0)",height:200},l={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}}}]);
//# sourceMappingURL=12.85d1056b.chunk.js.map