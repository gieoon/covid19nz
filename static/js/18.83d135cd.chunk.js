(this["webpackJsonpnz.covid19live"]=this["webpackJsonpnz.covid19live"]||[]).push([[18,29],{154:function(t,e,r){"use strict";var n=r(0),i=r(79),o=function(){};e.a=function(t,e,r){if(!i.a)return[e,o,o];if(!t)throw new Error("useLocalStorage key may not be falsy");var u=r?r.raw?function(t){return t}:r.deserializer:JSON.parse,c=Object(n.useState)((function(){try{var n=r?r.raw?String:r.serializer:JSON.stringify,i=localStorage.getItem(t);return null!==i?u(i):(e&&localStorage.setItem(t,n(e)),e)}catch(c){return e}})),f=c[0],a=c[1],s=Object(n.useCallback)((function(e){try{var n="function"===typeof e?e(f):e;if("undefined"===typeof n)return;var i=void 0;i=r?r.raw?"string"===typeof n?n:JSON.stringify(n):r.serializer?r.serializer(n):JSON.stringify(n):JSON.stringify(n),localStorage.setItem(t,i),a(u(i))}catch(c){}}),[t,a]),l=Object(n.useCallback)((function(){try{localStorage.removeItem(t),a(void 0)}catch(c){}}),[t,a]);return[f,s,l]}},189:function(t,e,r){"use strict";var n=r(0),i=function(t){Object(n.useEffect)(t,[])},o=function(t){var e=Object(n.useRef)(t);e.current=t,i((function(){return function(){return e.current()}}))},u=function(t){var e=Object(n.useRef)(0),r=Object(n.useState)(t),i=r[0],u=r[1],c=Object(n.useCallback)((function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame((function(){u(t)}))}),[]);return o((function(){cancelAnimationFrame(e.current)})),[i,c]},c=r(79);e.a=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var r=u({width:c.a?window.innerWidth:t,height:c.a?window.innerHeight:e}),i=r[0],o=r[1];return Object(n.useEffect)((function(){if(c.a){var t=function(){o({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}}),[]),i}},191:function(t,e,r){"use strict";var n=r(0);e.a=function(t,e){var r=function(){var t=Object(n.useRef)(!0);return t.current?(t.current=!1,!0):t.current}();Object(n.useEffect)((function(){if(!r)return t()}),e)}},83:function(t,e,r){"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(t){return!!t&&!!t[H]}function o(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[$]||!!t.constructor[$]||p(t)||y(t))}function u(t,e,r){void 0===r&&(r=!1),0===c(t)?(r?Object.keys:q)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function c(t){var e=t[H];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:p(t)?2:y(t)?3:0}function f(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function a(t,e){return 2===c(t)?t.get(e):t[e]}function s(t,e,r){var n=c(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function l(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function p(t){return M&&t instanceof Map}function y(t){return C&&t instanceof Set}function v(t){return t.o||t.t}function d(t){if(Array.isArray(t))return t.slice();var e=T(t);delete e[H];for(var r=q(e),n=0;n<r.length;n++){var i=r[n],o=e[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(e[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function h(t,e){O(t)||i(t)||!o(t)||(c(t)>1&&(t.set=t.add=t.clear=t.delete=b),Object.freeze(t),e&&u(t,(function(t,e){return h(e,!0)}),!0))}function b(){n(2)}function O(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function m(t){var e=X[t];return e||n(19,t),e}function g(){return W}function P(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function w(t){j(t),t.p.forEach(A),t.p=null}function j(t){t===W&&(W=t.l)}function S(t){return W={p:[],l:W,h:t,m:!0,_:0}}function A(t){var e=t[H];0===e.i||1===e.i?e.j():e.g=!0}function z(t,e){e._=e.p.length;var r=e.p[0],i=void 0!==t&&t!==r;return e.h.O||m("ES5").S(e,t,i),i?(r[H].P&&(w(e),n(4)),o(t)&&(t=E(e,t),e.l||k(e,t)),e.u&&m("Patches").M(r[H],t,e.u,e.s)):t=E(e,r,[]),w(e),e.u&&e.v(e.u,e.s),t!==U?t:void 0}function E(t,e,r){if(O(e))return e;var n=e[H];if(!n)return u(e,(function(i,o){return D(t,n,e,i,o,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return k(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=4===n.i||5===n.i?n.o=d(n.k):n.o;u(i,(function(e,o){return D(t,n,i,e,o,r)})),k(t,i,!1),r&&t.u&&m("Patches").R(n,r,t.u,t.s)}return n.o}function D(t,e,r,n,u,c){if(i(u)){var a=E(t,u,c&&e&&3!==e.i&&!f(e.D,n)?c.concat(n):void 0);if(s(r,n,a),!i(a))return;t.m=!1}if(o(u)&&!O(u)){if(!t.h.N&&t._<1)return;E(t,u),e&&e.A.l||k(t,u)}}function k(t,e,r){void 0===r&&(r=!1),t.h.N&&t.m&&h(e,r)}function N(t,e){var r=t[H];return(r?v(r):t)[e]}function F(t){t.P||(t.P=!0,t.l&&F(t.l))}function I(t){t.o||(t.o=d(t.t))}function x(t,e,r){var n=p(e)?m("MapSet").T(e,r):y(e)?m("MapSet").F(e,r):t.O?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:g(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},i=n,o=B;r&&(i=[n],o=G);var u=Proxy.revocable(i,o),c=u.revoke,f=u.proxy;return n.k=f,n.j=c,f}(e,r):m("ES5").J(e,r);return(r?r.A:g()).p.push(n),n}function R(t){return i(t)||n(22,t),function t(e){if(!o(e))return e;var r,n=e[H],i=c(e);if(n){if(!n.P&&(n.i<4||!m("ES5").K(n)))return n.t;n.I=!0,r=_(e,i),n.I=!1}else r=_(e,i);return u(r,(function(e,i){n&&a(n.t,e)===i||s(r,e,t(i))})),3===i?new Set(r):r}(t)}function _(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return d(t)}var J,W,K="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),M="undefined"!=typeof Map,C="undefined"!=typeof Set,L="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,U=K?Symbol("immer-nothing"):((J={})["immer-nothing"]=!0,J),$=K?Symbol("immer-draftable"):"__$immer_draftable",H=K?Symbol("immer-state"):"__$immer_state",q=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames),T=Object.getOwnPropertyDescriptors||function(t){var e={};return q(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},X={},B={get:function(t,e){if(e===H)return t;var r=v(t);if(!f(r,e))return function(t,e,r){if(r in e)for(var n=Object.getPrototypeOf(e);n;){var i,o=Object.getOwnPropertyDescriptor(n,r);if(o)return"value"in o?o.value:null===(i=o.get)||void 0===i?void 0:i.call(t.k);n=Object.getPrototypeOf(n)}}(t,r,e);var n=r[e];return t.I||!o(n)?n:n===N(t.t,e)?(I(t),t.o[e]=x(t.A.h,n,t)):n},has:function(t,e){return e in v(t)},ownKeys:function(t){return Reflect.ownKeys(v(t))},set:function(t,e,r){if(t.D[e]=!0,!t.P){if(l(r,N(v(t),e))&&void 0!==r)return!0;I(t),F(t)}return t.o[e]=r,!0},deleteProperty:function(t,e){return void 0!==N(t.t,e)||e in t.t?(t.D[e]=!1,I(t),F(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=v(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},G={};u(B,(function(t,e){G[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),G.deleteProperty=function(t,e){return B.deleteProperty.call(this,t[0],e)},G.set=function(t,e,r){return B.set.call(this,t[0],e,r,t[0])};var Q=new(function(){function t(t){this.O=L,this.N=!1,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var e=t.prototype;return e.produce=function(t,e,r){if("function"==typeof t&&"function"!=typeof e){var i=e;e=t;var u=this;return function(t){var r=this;void 0===t&&(t=i);for(var n=arguments.length,o=Array(n>1?n-1:0),c=1;c<n;c++)o[c-1]=arguments[c];return u.produce(t,(function(t){var n;return(n=e).call.apply(n,[r,t].concat(o))}))}}var c;if("function"!=typeof e&&n(6),void 0!==r&&"function"!=typeof r&&n(7),o(t)){var f=S(this),a=x(this,t,void 0),s=!0;try{c=e(a),s=!1}finally{s?w(f):j(f)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return P(f,r),z(t,f)}),(function(t){throw w(f),t})):(P(f,r),z(c,f))}if(!t||"object"!=typeof t){if((c=e(t))===U)return;return void 0===c&&(c=t),this.N&&h(c,!0),c}n(21,t)},e.produceWithPatches=function(t,e){var r,n,i=this;return"function"==typeof t?function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return i.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(n))}))}:[this.produce(t,e,(function(t,e){r=t,n=e})),r,n]},e.createDraft=function(t){o(t)||n(8),i(t)&&(t=R(t));var e=S(this),r=x(this,t,void 0);return r[H].C=!0,j(e),r},e.finishDraft=function(t,e){var r=(t&&t[H]).A;return P(r,e),z(void 0,r)},e.setAutoFreeze=function(t){this.N=t},e.setUseProxies=function(t){t&&!L&&n(20),this.O=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var o=m("Patches").$;return i(t)?o(t,e):this.produce(t,(function(t){return o(t,e.slice(r+1))}))},t}()),V=Q.produce;Q.produceWithPatches.bind(Q),Q.setAutoFreeze.bind(Q),Q.setUseProxies.bind(Q),Q.applyPatches.bind(Q),Q.createDraft.bind(Q),Q.finishDraft.bind(Q);e.a=V}}]);
//# sourceMappingURL=18.83d135cd.chunk.js.map