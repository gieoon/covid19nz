(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[36],{231:function(e,t,n){"use strict";n.r(t);var r=n(80),a=n(9),c=n(91),l=n(0),o=n.n(l),i=n(19),u=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=Object(l.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,c=void 0===a?24:a,l=f(e,["color","size"]);return o.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),o.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))}));m.propTypes={color:u.a.string,size:u.a.oneOfType([u.a.string,u.a.number])},m.displayName="Search";var p=m;function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=Object(l.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,c=void 0===a?24:a,l=v(e,["color","size"]);return o.a.createElement("svg",b({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}));d.propTypes={color:u.a.string,size:u.a.oneOfType([u.a.string,u.a.number])},d.displayName="X";var O=d;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j=Object(l.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,c=void 0===a?24:a,l=y(e,["color","size"]);return o.a.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("polyline",{points:"12 16 16 12 12 8"}),o.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));j.propTypes={color:u.a.string,size:u.a.oneOfType([u.a.string,u.a.number])},j.displayName="ArrowRightCircle";var g=j,E=n(245),w=n(38),k=n(199);function x(e,t,n){void 0===t&&(t=0),void 0===n&&(n=[]);var r=function(e,t){void 0===t&&(t=0);var n=Object(l.useRef)(!1),r=Object(l.useRef)(),a=Object(l.useRef)(e),c=Object(l.useCallback)((function(){return n.current}),[]),o=Object(l.useCallback)((function(){n.current=!1,r.current&&clearTimeout(r.current),r.current=setTimeout((function(){n.current=!0,a.current()}),t)}),[t]),i=Object(l.useCallback)((function(){n.current=null,r.current&&clearTimeout(r.current)}),[]);return Object(l.useEffect)((function(){a.current=e}),[e]),Object(l.useEffect)((function(){return o(),i}),[t]),[c,i,o]}(e,t),a=r[0],c=r[1],o=r[2];return Object(l.useEffect)(o,n),[a,c]}var N=["Auckland","Waitemata","Waikato","Hawke's Bay","Southern"],C=N,S=N;t.default=o.a.memo((function(){var e=Object(l.useState)(""),t=Object(r.a)(e,2),i=t[0],u=t[1],s=Object(l.useState)(!1),f=Object(r.a)(s,2),m=f[0],b=f[1],v=Object(l.useState)([]),d=Object(r.a)(v,2),h=d[0],y=d[1],j=Object(l.useRef)(null),z=Object(E.a)().t,T=Object(l.useState)(null),P=Object(r.a)(T,2),D=P[0],L=P[1],R=Object(l.useState)(null),B=Object(r.a)(R,2),I=B[0];B[1],Object(k.a)((function(){n.e(16).then(n.t.bind(null,226,7)).then((function(e){L(new e.default({initialize:!0,local:a.d.filter((function(e){return e.code!==a.D})),queryTokenizer:e.default.tokenizers.whitespace,datumTokenizer:e.default.tokenizers.obj.whitespace("name")}))}))}),[m]);var W=Object(l.useCallback)((function(e){if(!D)return null;var t=[];D.search(e,(function(e){e.map((function(e,n){var r={name:e.name,type:"state",route:e.code};return t.push(r),null}))})),I.search(e,(function(e){e.slice(0,3).map((function(e,n){var r={name:e.district,type:"district",route:a.c[e.state]};return t.push(r),null})),y([].concat(t))}))}),[I,D]);function U(e,t){var n=Object.getOwnPropertyDescriptor(e,"value").set,r=Object.getPrototypeOf(e),a=Object.getOwnPropertyDescriptor(r,"value").set;n&&n!==a?a.call(e,t):n.call(e,t)}x((function(){i?W(i):y(Object(c.a)(h,(function(e){e.splice(0)})))}),100,[i]);var M=Object(l.useCallback)((function(e,t,n,r){if(m)return e.textContent="",!0;var a=z(N[t]),c=e.textContent;if(e.classList.remove("disappear"),e.textContent=c+a[n],n<a.length-1)return setTimeout((function(){M(e,t,n+1,r)}),200),!0;r()}),[m,z]),A=Object(l.useCallback)((function(e,t){var n=e.textContent;if(e.classList.add("disappear"),n.length>0)return setTimeout((function(){e.textContent="",A(e,t)}),1e3),!0;t()}),[]),F=Object(l.useCallback)((function(e,t){if(m)return e.textContent="",!0;M(e,t,0,(function(){setTimeout((function(){A(e,(function(){F(e,(t+1)%N.length)}))}),2e3)}))}),[A,m,M]);Object(l.useEffect)((function(){if(!m){var e=document.getElementsByClassName("search-placeholder")[0];e&&F(e,0)}}),[m,F]);var J=Object(l.useMemo)((function(){var e=[];return[0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),q=Object(l.useCallback)((function(){u(""),y([])}),[]),H=Object(l.useCallback)((function(e){u(e.target.value)}),[]);return o.a.createElement("div",{className:"Search"},o.a.createElement("label",{className:"fadeInUp",style:J[0]},z("Search your district health board")),o.a.createElement("div",{className:"line fadeInUp",style:J[1]}),o.a.createElement("div",{className:"search-input-wrapper fadeInUp",style:J[2]},o.a.createElement("input",{type:"text",value:i,ref:j,onFocus:b.bind(this,!0),onBlur:b.bind(this,!1),onChange:H}),!m&&""===i&&o.a.createElement("span",{className:"search-placeholder"}),o.a.createElement("div",{className:"search-button"},o.a.createElement(p,null)),i.length>0&&o.a.createElement("div",{className:"close-button",onClick:q},o.a.createElement(O,null))),h.length>0&&o.a.createElement("div",{className:"results"},h.map((function(e,t){return o.a.createElement(w.b,{key:t,to:"state/".concat(e.route)},o.a.createElement("div",{className:"result"},o.a.createElement("div",{className:"result-left"},o.a.createElement("div",{className:"result-name"},"".concat(e.name),"district"===e.type&&", ".concat(a.e[e.route]))),o.a.createElement("div",{className:"result-type"},o.a.createElement("span",null,[e.route]),o.a.createElement(g,{size:14}))))}))),m&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"expanded"},o.a.createElement("div",{className:"expanded-left"},o.a.createElement("h3",null,z("District")),o.a.createElement("div",{className:"suggestions"},C.map((function(e,t){return o.a.createElement("div",{className:"suggestion",key:t},o.a.createElement("div",null,"-"),o.a.createElement("h4",{onMouseDown:function(t){t.preventDefault(),U(j.current,e),j.current.dispatchEvent(new Event("input",{bubbles:!0}))}},z(e)))})))),o.a.createElement("div",{className:"expanded-right"},o.a.createElement("h3",null,z("State/UT")),o.a.createElement("div",{className:"suggestions"},S.map((function(e,t){return o.a.createElement("div",{className:"suggestion",key:t},o.a.createElement("div",null,"-"),o.a.createElement("h4",{onMouseDown:function(t){t.preventDefault(),U(j.current,e),j.current.dispatchEvent(new Event("input",{bubbles:!0}))}},z(e)))})))))))}),(function(){return!0}))}}]);
//# sourceMappingURL=36.45059643.chunk.js.map