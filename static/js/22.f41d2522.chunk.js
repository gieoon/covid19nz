(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[22,30],{110:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),l=n.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,l=void 0===i?24:i,s=c(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.a.createElement("polyline",{points:"22,6 12,13 2,6"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="Mail";var u=s,m=n(254);t.default=r.a.memo((function(){var e=Object(m.a)().t;return r.a.createElement("footer",null,r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/covid19india",target:"_blank",rel:"noopener noreferrer"},"nz.covid19live")),r.a.createElement("h5",null,e("Keeping Kiwi's updated through these difficult times"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"This website was built based on "),r.a.createElement("a",{target:"_blank",href:"https://github.com/covid19india/covid19india-react"},"covid19india.org")),r.a.createElement("div",{className:"links"},r.a.createElement("a",{href:"mailto:jun.a.kagaya@gmail.com",className:"mail",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u,null))))}))},217:function(e,t,n){"use strict";n.r(t);var a=n(81),r=n(110),i=n(0),l=n.n(i),o=n(112);t.default=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1];Object(i.useEffect)((function(){s()}),[]),Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]);var s=function(){fetch("https://api.covid19india.org/website_data.json").then((function(e){return e.json()})).then((function(e){c(e.faq)})).catch((function(e){console.log(e)}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement("title",null,"About - nz.covid19live.com"),l.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in NZ: Latest Map and Case Count"})),l.a.createElement("div",{className:"About"},n.map((function(e,t){return l.a.createElement("div",{key:t,className:"faq fadeInUp",style:{animationDelay:"".concat(.5+.1*t,"s")}},l.a.createElement("h2",{className:"question"},e.question),l.a.createElement("h2",{className:"answer",dangerouslySetInnerHTML:{__html:e.answer}}))}))),l.a.createElement(r.default,null))}}}]);
//# sourceMappingURL=22.f41d2522.chunk.js.map