(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[38],{214:function(e,a,t){"use strict";t.r(a);t(9);var n=t(27),r=t(65),c=t(66),l=t(0),u=t.n(l),d=new Date,s=d;a.default=function(e){var a=e.updates;return Object(l.useLayoutEffect)((function(){s=d})),console.log(s),u.a.createElement("div",{className:"updates"},u.a.createElement("div",{className:"updates-header"},u.a.createElement("h2",null,Object(r.a)(s,"d MMM"))),a.reverse().map((function(e,a){e.update=e.update.replace(/\n/g,"<br/>");var t=new Date(e.date);return u.a.createElement(u.a.Fragment,{key:a},t.getDate()!==s.getDate()?(s=t,u.a.createElement(u.a.Fragment,null,0===a?u.a.createElement("div",{className:"update"},u.a.createElement("h4",null,"No updates yet!")):"",u.a.createElement("div",{className:"updates-header"},u.a.createElement("h2",null,Object(r.a)(t,"d MMM"))))):" ",u.a.createElement("a",{href:e.source,target:"_blank",rel:"noopener noreferrer"},u.a.createElement("div",{key:a,className:"update"},u.a.createElement("h5",null,Object(n.a)(Object(c.a)(new Date(e.date),new Date))+" ago"),u.a.createElement("h4",{dangerouslySetInnerHTML:{__html:e.update}}))))})))}}}]);
//# sourceMappingURL=38.90391945.chunk.js.map