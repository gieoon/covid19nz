(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[17],{127:function(e){e.exports=JSON.parse('{"english":"English","japanese":"\u65e5\u672c\u8a9e","chinese":"\u4e2d\u6587"}')},151:function(e,a,t){},239:function(e,a,t){"use strict";t.r(a);var n=t(81),l=(t(151),function(){window.location.replace("https://blog.covid19india.org")}),i=t(0),c=t.n(i),o=t(38),r=t(85),s=t(245),u=t(127);function b(e){var a,t=e.showLanguageSwitcher,l=e.setShowLanguageSwitcher,b=Object(s.a)(),d=b.i18n,m=(b.t,Object.keys(u).includes(null===d||void 0===d?void 0:d.language)?null===d||void 0===d?void 0:d.language:null===d||void 0===d||null===(a=d.options)||void 0===a?void 0:a.fallbackLng[0]),h=Object(i.useState)(!1),v=Object(n.a)(h,2),p=v[0],g=v[1],w=Object(i.useCallback)((function(){p&&g(!1),l(!t)}),[p,t,g,l]),f=Object(r.c)((function(){return{opacity:0}})),E=Object(n.a)(f,3),j=E[0],O=E[1],k=E[2];return O({opacity:1}),k(),c.a.createElement("div",null,c.a.createElement(r.a.div,{className:"Navbar",style:j},c.a.createElement("div",{className:"navbar-left",onClick:w.bind(this)},u[m]),c.a.createElement("div",{className:"navbar-middle"},c.a.createElement(o.b,{to:"/",onClick:g.bind(this,!1)},"Covid19 in ",c.a.createElement("span",null,"NZ")))))}var d=t(5),m=t(158),h=Object(i.lazy)((function(){return Promise.all([t.e(3),t.e(4),t.e(18),t.e(22)]).then(t.bind(null,243))})),v=Object(i.lazy)((function(){return Promise.all([t.e(3),t.e(21)]).then(t.bind(null,209))})),p=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(4),t.e(12)]).then(t.bind(null,230))})),g=Object(i.lazy)((function(){return t.e(15).then(t.bind(null,244))}));a.default=function(){Object(m.a)(!0);var e=Object(i.useState)(!1),a=Object(n.a)(e,2),t=a[0],o=a[1],r=Object(d.h)(),s=[{pageLink:"/",view:h,displayName:"Home",showInNavbar:!0},{pageLink:"/blog",view:l,displayName:"Blog",showInNavbar:!0},{pageLink:"/about",view:v,displayName:"About",showInNavbar:!0},{pageLink:"/state/:stateCode",view:p,displayName:"State",showInNavbar:!1}];return Object(i.useEffect)((function(){t&&(document.documentElement.scrollTo({top:0,behavior:"smooth"}),document.body.scrollTo({top:0,behavior:"smooth"}))}),[t]),c.a.createElement("div",{className:"App"},c.a.createElement(i.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(g,{showLanguageSwitcher:t,setShowLanguageSwitcher:o})),c.a.createElement(b,{showLanguageSwitcher:t,setShowLanguageSwitcher:o}),c.a.createElement(i.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(d.d,{location:r},s.map((function(e,a){return c.a.createElement(d.b,{exact:!0,path:e.pageLink,render:function(a){a.match;return c.a.createElement(e.view,null)},key:a})})),c.a.createElement(d.a,{to:"/"}))))}}}]);
//# sourceMappingURL=17.7649206c.chunk.js.map