(this["webpackJsonpnz.covid19live"]=this["webpackJsonpnz.covid19live"]||[]).push([[13],{134:function(t,e,n){var i=n(177).Symbol;t.exports=i},138:function(t,e,n){"use strict";var i=n(0),r="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,o=n(79),a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=o.a&&window.ResizeObserver?function(){var t=Object(i.useState)(null),e=t[0],n=t[1],o=Object(i.useState)(a),s=o[0],u=o[1],c=Object(i.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,i=e.y,r=e.width,o=e.height,a=e.top,s=e.left,c=e.bottom,d=e.right;u({x:n,y:i,width:r,height:o,top:a,left:s,bottom:c,right:d})}}))}),[]);return r((function(){if(e)return c.observe(e),function(){c.disconnect()}}),[e]),[n,s]}:function(){return[function(){},a]}},171:function(t,e,n){var i=n(172),r=n(173);t.exports=function(t,e,n){return void 0===n&&(n=e,e=void 0),void 0!==n&&(n=(n=r(n))===n?n:0),void 0!==e&&(e=(e=r(e))===e?e:0),i(r(t),e,n)}},172:function(t,e){t.exports=function(t,e,n){return t===t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}},173:function(t,e,n){var i=n(174),r=n(175),o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=s.test(t);return n||u.test(t)?c(t.slice(2),n?2:8):a.test(t)?NaN:+t}},174:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},175:function(t,e,n){var i=n(176),r=n(181);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==i(t)}},176:function(t,e,n){var i=n(134),r=n(179),o=n(180),a=i?i.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?r(t):o(t)}},177:function(t,e,n){var i=n(178),r="object"==typeof self&&self&&self.Object===Object&&self,o=i||r||Function("return this")();t.exports=o},178:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(35))},179:function(t,e,n){var i=n(134),r=Object.prototype,o=r.hasOwnProperty,a=r.toString,s=i?i.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),n=t[s];try{t[s]=void 0;var i=!0}catch(u){}var r=a.call(t);return i&&(e?t[s]=n:delete t[s]),r}},180:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},181:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},182:function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var i=n(0),r=n.n(i);function o(t,e){return t.map((function(t,n){return t+e[n]}))}function a(t,e){return t.map((function(t,n){return t-e[n]}))}function s(t,e,n){return n=n||Math.hypot.apply(Math,t),e?n/e:0}function u(t,e){return e?t.map((function(t){return t/e})):Array(t.length).fill(0)}function c(t){return Math.hypot.apply(Math,t)}function d(t,e){return e=e||Math.hypot.apply(Math,t)||1,t.map((function(t){return t/e}))}function f(t,e,n){var i=Math.hypot.apply(Math,e);return{velocities:u(e,n),velocity:s(e,n,i),distance:c(t),direction:d(e,i)}}function l(t,e){return Math.abs(t)>=e&&Math.sign(t)*e}function v(t,e,n){return 0===e||Math.abs(e)===1/0?function(t,e){return Math.pow(t,5*e)}(t,n):t*e*n/(e+n*t)}function h(t,e,n,i){return void 0===i&&(i=.15),0===i?function(t,e,n){return Math.max(e,Math.min(t,n))}(t,e,n):t<e?-v(e-t,n-e,i)+e:t>n?v(t-n,n-e,i)+n:t}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function y(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function b(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function w(t){var e=0;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(t)))return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function T(){}var S=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.forEach((function(t){return t.apply(void 0,n)}))}},O=function(t){return Array.isArray(t)?t:[t,t]},_=function(t,e){return void 0!==t?t:e};function x(t,e){var n={};return Object.entries(t).forEach((function(t){var i=t[0],r=t[1];return(void 0!==r||i in e)&&(n[i]=r)})),n}function j(t){return"function"===typeof t?t():t}function E(){var t={_active:!1,_blocked:!1,_intentional:[!1,!1],_movement:[0,0],_initial:[0,0],_lastEventType:void 0,event:void 0,values:[0,0],velocities:[0,0],delta:[0,0],movement:[0,0],offset:[0,0],lastOffset:[0,0],direction:[0,0],initial:[0,0],previous:[0,0],first:!1,last:!1,active:!1,timeStamp:0,startTime:0,elapsedTime:0,cancel:T,canceled:!1,memo:void 0,args:void 0},e={axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0},n={da:[0,0],vdva:[0,0],origin:void 0,turns:0};return{shared:{hovering:!1,scrolling:!1,wheeling:!1,dragging:!1,moving:!1,pinching:!1,touches:0,buttons:0,down:!1,shiftKey:!1,altKey:!1,metaKey:!1,ctrlKey:!1},drag:g({},t,{},e,{_isTap:!0,_delayedEvent:!1,tap:!1,swipe:[0,0]}),pinch:g({},t,{},n),wheel:g({},t,{},e),move:g({},t,{},e),scroll:g({},t,{},e)}}var M=function(t){return function(e,n,i){var r=t?"addEventListener":"removeEventListener";n.forEach((function(t){var n=t[0],o=t[1];return e[r](n,o,i)}))}};var D=M(!0),L=M(!1);function k(t){if("touches"in t){var e=t.touches,n=t.changedTouches;return e.length>0?e:n}return null}function K(t){var e="buttons"in t?t.buttons:0,n=k(t),i=n&&n.length||0;return g({touches:i,down:i>0||e>0,buttons:e},function(t){return{shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey}}(t))}function A(t){var e=k(t),n=e?e[0]:t;return{values:[n.clientX,n.clientY]}}var G=function(){var t=this;this.state=E(),this.timeouts={},this.domListeners=[],this.windowListeners={},this.bindings={},this.clean=function(){t.resetBindings(),Object.values(t.timeouts).forEach(clearTimeout),Object.keys(t.windowListeners).forEach((function(e){return t.removeWindowListeners(e)}))},this.resetBindings=function(){t.bindings={};var e=t.getDomTarget();e&&(L(e,t.domListeners,t.config.eventOptions),t.domListeners=[])},this.getDomTarget=function(){var e=t.config.domTarget;return e&&"current"in e?e.current:e},this.addWindowListeners=function(e,n){t.config.window&&(t.windowListeners[e]=n,D(t.config.window,n,t.config.eventOptions))},this.removeWindowListeners=function(e){if(t.config.window){var n=t.windowListeners[e];n&&(L(t.config.window,n,t.config.eventOptions),delete t.windowListeners[e])}},this.addDomTargetListeners=function(e){Object.entries(t.bindings).forEach((function(e){var n=e[0],i=e[1];t.domListeners.push([n.substr(2).toLowerCase(),S.apply(void 0,i)])})),D(e,t.domListeners,t.config.eventOptions)},this.addBindings=function(e,n){(Array.isArray(e)?e:[e]).forEach((function(e){t.bindings[e]?t.bindings[e].push(n):t.bindings[e]=[n]}))},this.getBindings=function(){var e={},n=t.config.captureString;return Object.entries(t.bindings).forEach((function(t){var i=t[0],r=t[1],o=Array.isArray(r)?r:[r];e[i+n]=S.apply(void 0,o)})),e},this.getBind=function(){if(t.config.domTarget){var e=t.getDomTarget();return e&&t.addDomTargetListeners(e),t.clean}return t.getBindings()}};function P(t,e,n,i){var o=r.a.useMemo((function(){var t=new G;return{nativeRefs:i,current:t,bind:function(){t.resetBindings();for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];for(var a,s=w(e);!(a=s()).done;){var u=a.value;new u(t,i).addBindings()}if(o.nativeRefs)for(var c in o.nativeRefs)t.addBindings(c,o.nativeRefs[c]);return t.getBind()}}}),[]);return o.current.config=n,o.current.handlers=t,o.nativeRefs=i,r.a.useEffect((function(){return o.current.clean}),[]),o.bind}var B=function(){function t(t,e,n){var i=this;void 0===n&&(n=[]),this.stateKey=t,this.controller=e,this.args=n,this.debounced=!0,this.setTimeout=function(t,e){var n;void 0===e&&(e=140);for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];i.controller.timeouts[i.stateKey]=(n=window).setTimeout.apply(n,[t,e].concat(o))},this.clearTimeout=function(){clearTimeout(i.controller.timeouts[i.stateKey])},this.addWindowListeners=function(t){i.controller.addWindowListeners(i.stateKey,t)},this.removeWindowListeners=function(){i.controller.removeWindowListeners(i.stateKey)},this.getStartGestureState=function(t,e){return g({},E()[i.stateKey],{_active:!0,values:t,initial:t,offset:i.state.offset,lastOffset:i.state.offset,startTime:e.timeStamp})},this.rubberband=function(t,e){var n=i.config.bounds;return t.map((function(t,i){return h(t,n[i][0],n[i][1],e[i])}))},this.fireGestureHandler=function(t){if(i.state._blocked)return i.debounced||(i.state._active=!1,i.clean()),null;var e=i.state._intentional,n=e[0],r=e[1];if(!t&&!1===n&&!1===r)return null;var o=i.state,a=o._active,s=o.active;i.state.active=a,i.state.first=a&&!s,i.state.last=s&&!a,i.controller.state.shared[i.ingKey]=a;var u=g({},i.controller.state.shared,{},i.state,{},i.mapStateValues(i.state)),c=i.handler(u);return i.state.memo=void 0!==c?c:i.state.memo,a||i.clean(),u}}var e,n,i,r=t.prototype;return r.updateSharedState=function(t){Object.assign(this.controller.state.shared,t)},r.updateGestureState=function(t){Object.assign(this.state,t)},r.getGenericPayload=function(t,e){var n=t.timeStamp,i=t.type,r=this.state,o=r.values,a=r.startTime;return{_lastEventType:i,event:t,timeStamp:n,elapsedTime:e?0:n-a,args:this.args,previous:o}},r.checkIntentionality=function(t,e,n){return{_intentional:t,_blocked:!1}},r.getMovement=function(t,e){void 0===e&&(e=this.state);var n=this.config,i=n.initial,r=n.threshold,s=n.rubberband,u=r[0],c=r[1],d=e,f=d._initial,v=d._active,h=d._intentional,p=d.lastOffset,y=d.movement,b=h[0],m=h[1],w=this.getInternalMovement(t,e),T=w[0],S=w[1];!1===b&&(b=l(T,u)),!1===m&&(m=l(S,c));var O=this.checkIntentionality([b,m],[T,S],e),_=O._intentional,x=O._blocked,E=_[0],M=_[1],D=[T,S];if(!1!==E&&!1===h[0]&&(f[0]=j(i)[0]),!1!==M&&!1===h[1]&&(f[1]=j(i)[1]),x)return g({},O,{_movement:D,delta:[0,0]});var L=[!1!==E?T-E:j(i)[0],!1!==M?S-M:j(i)[1]],k=o(L,p),K=v?s:[0,0];return g({},O,{_initial:f,_movement:D,movement:L=this.rubberband(o(L,f),K),offset:this.rubberband(k,K),delta:a(L,y)})},r.clean=function(){this.clearTimeout(),this.removeWindowListeners()},e=t,(n=[{key:"config",get:function(){return this.controller.config[this.stateKey]}},{key:"enabled",get:function(){return this.controller.config.enabled&&this.config.enabled}},{key:"state",get:function(){return this.controller.state[this.stateKey]}},{key:"handler",get:function(){return this.controller.handlers[this.stateKey]}}])&&p(e.prototype,n),i&&p(e,i),t}(),C=function(t){function e(){return t.apply(this,arguments)||this}y(e,t);var n=e.prototype;return n.getInternalMovement=function(t,e){return a(t,e.initial)},n.checkIntentionality=function(t,e,n){var i=t,r=i[0],o=i[1],a=!1!==r||!1!==o,s=n.axis,u=!1;if(a){var c=e.map(Math.abs),d=c[0],f=c[1],l=this.config,v=l.axis,h=l.lockDirection;if(s=s||(d>f?"x":d<f?"y":void 0),v||h)if(s)if(v&&s!==v)u=!0;else t["x"===s?1:0]=!1;else t=[!1,!1]}return{_intentional:t,_blocked:u,axis:s}},n.getKinematics=function(t,e){var n=this.state.timeStamp,i=this.getMovement(t,this.state),r=i._blocked,o=i.delta,a=i.movement;return r?i:g({values:t,delta:o},i,{},f(a,o,e.timeStamp-n))},n.mapStateValues=function(t){return{xy:t.values,vxvy:t.velocities}},e}(B),I=function(t){function e(e,n){var i;return(i=t.call(this,"drag",e,n)||this).ingKey="dragging",i.wasTouch=!1,i.isEventTypeTouch=function(t){return!!t&&0===t.indexOf("touch")},i.dragShouldStart=function(t){var e=K(t).touches,n=i.state._lastEventType;if(!i.controller.config.pointer&&i.isEventTypeTouch(n)&&!i.isEventTypeTouch(t.type)&&Math.abs(t.timeStamp-i.state.startTime)<200)return!1;return i.enabled&&e<2},i.setPointers=function(t){var e=t.currentTarget,n=t.pointerId;e&&e.setPointerCapture(n),i.updateGestureState({currentTarget:e,pointerId:n})},i.removePointers=function(){var t=i.state,e=t.currentTarget,n=t.pointerId;e&&n&&e.releasePointerCapture(n)},i.setListeners=function(t){i.removeWindowListeners();var e=t?[["touchmove",i.onDragChange],["touchend",i.onDragEnd],["touchcancel",i.onDragEnd]]:[["mousemove",i.onDragChange],["mouseup",i.onDragEnd]];i.addWindowListeners(e)},i.onDragStart=function(t){i.dragShouldStart(t)&&(i.controller.config.pointer?i.setPointers(t):i.setListeners(i.isEventTypeTouch(t.type)),i.config.delay>0?(i.state._delayedEvent=!0,"function"===typeof t.persist&&t.persist(),i.setTimeout((function(){return i.startDrag(t)}),i.config.delay)):i.startDrag(t))},i.onDragChange=function(t){if(!i.state.canceled)if(i.state._active){var e=K(t);if(e.down){i.updateSharedState(e);var n=A(t).values,r=i.getKinematics(n,t),o=i.state._isTap;o&&c(r._movement)>=3&&(o=!1),i.updateGestureState(g({},i.getGenericPayload(t),{},r,{_isTap:o,cancel:function(){return i.onCancel()}})),i.fireGestureHandler()}else i.onDragEnd(t)}else i.state._delayedEvent&&(i.clearTimeout(),i.startDrag(t))},i.onDragEnd=function(t){i.state._active=!1,i.updateSharedState({down:!1,buttons:0,touches:0});var e=i.state,n=e._isTap,r=e.values,o=e.velocities,a=o[0],s=o[1],u=e.movement,c=u[0],d=u[1],f=e._intentional,l=f[0],v=f[1],h=g({},i.getGenericPayload(t),{},i.getMovement(r)),p=h.elapsedTime,y=i.config,b=y.swipeVelocity,m=b[0],w=b[1],T=y.swipeDistance,S=T[0],O=T[1],_=[0,0];p<220&&(!1!==l&&Math.abs(a)>m&&Math.abs(c)>S&&(_[0]=Math.sign(a)),!1!==v&&Math.abs(s)>w&&Math.abs(d)>O&&(_[1]=Math.sign(s))),i.updateGestureState(g({event:t},h,{tap:n,swipe:_})),i.fireGestureHandler(i.config.filterTaps&&i.state._isTap)},i.clean=function(){t.prototype.clean.call(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i)),i.state._delayedEvent=!1,i.controller.config.pointer&&i.removePointers()},i.onCancel=function(){i.updateGestureState({canceled:!0,cancel:T}),i.state._active=!1,i.updateSharedState({down:!1,buttons:0,touches:0}),requestAnimationFrame((function(){return i.fireGestureHandler()}))},i}y(e,t);var n=e.prototype;return n.startDrag=function(t){var e=this,n=A(t).values;this.updateSharedState(K(t));var i=g({},this.getStartGestureState(n,t),{},this.getGenericPayload(t,!0));this.updateGestureState(g({},i,{},this.getMovement(n,i),{cancel:function(){return e.onCancel()}})),this.fireGestureHandler()},n.addBindings=function(){this.controller.config.pointer?(this.controller.addBindings("onPointerDown",this.onDragStart),this.controller.addBindings("onPointerMove",this.onDragChange),this.controller.addBindings(["onPointerUp","onPointerCancel"],this.onDragEnd)):this.controller.addBindings(["onTouchStart","onMouseDown"],this.onDragStart)},e}(C),W="undefined"!==typeof window?window:void 0,R={lockDirection:!1,axis:void 0,bounds:void 0};function N(t){void 0===t&&(t={});var e=t,n=e.eventOptions,i=(n=void 0===n?{}:n).passive,r=void 0===i||i,o=n.capture,a=void 0!==o&&o,s=n.pointer,u=void 0!==s&&s,c=e.window,d=void 0===c?W:c,f=e.domTarget,l=void 0===f?void 0:f,v=e.enabled,h=void 0===v||v;return g({},b(e,["eventOptions","window","domTarget","enabled"]),{enabled:h,domTarget:l,window:d,eventOptions:{passive:!l||!!r,capture:!!a},captureString:a?"Capture":"",pointer:!!u})}function H(t){var e=t.threshold,n=void 0===e?void 0:e,i=t.rubberband,r=void 0===i?0:i,o=t.enabled,a=void 0===o||o,s=t.initial;return"boolean"===typeof r&&(r=r?.15:0),void 0===n&&(n=0),{enabled:a,initial:void 0===s?[0,0]:s,threshold:O(n),rubberband:O(r)}}function V(t){void 0===t&&(t={});var e=t,n=e.axis,i=e.lockDirection,r=e.bounds,o=void 0===r?{}:r,a=b(e,["axis","lockDirection","bounds"]),s=[[_(o.left,-1/0),_(o.right,1/0)],[_(o.top,-1/0),_(o.bottom,1/0)]];return g({},H(a),{},R,{},x({axis:n,lockDirection:i},t),{bounds:s})}function $(t){void 0===t&&(t={});var e=t,n=e.enabled,i=e.threshold,r=e.bounds,o=e.rubberband,a=e.initial,s=b(e,["enabled","threshold","bounds","rubberband","initial"]),u=s.swipeVelocity,c=void 0===u?.5:u,d=s.swipeDistance,f=void 0===d?60:d,l=s.delay,v=void 0!==l&&l,h=s.filterTaps,p=void 0!==h&&h,y=s.axis,m=s.lockDirection;void 0===i?i=Math.max(0,p?3:0,m||y?1:0):p=!0;var w=V(x({enabled:n,threshold:i,bounds:r,rubberband:o,axis:y,lockDirection:m,initial:a},t));return g({},w,{filterTaps:p||w.threshold[0]+w.threshold[1]>0,swipeVelocity:O(c),swipeDistance:O(f),delay:"number"===typeof v?v:v?180:0})}function z(t,e){void 0===e&&(e={});var n=e,i=n.domTarget,r=n.eventOptions,o=n.window,a=b(n,["domTarget","eventOptions","window"]),s=g({},N({domTarget:i,eventOptions:r,window:o}),{drag:$(a)});return P({drag:t},[I],s)}},228:function(t,e,n){"use strict";var i=n(0),r=n(79).a?window:null,o=function(t){return!!t.addEventListener},a=function(t){return!!t.on},s=function(t,e,n,s){void 0===n&&(n=r),Object(i.useEffect)((function(){if(e&&n)return o(n)?n.addEventListener(t,e,s):a(n)&&n.on(t,e,s),function(){o(n)?n.removeEventListener(t,e,s):a(n)&&n.off(t,e,s)}}),[t,e,n,JSON.stringify(s)])},u=function(){},c=function(t,e,n,r){void 0===e&&(e=u),void 0===n&&(n={}),void 0===r&&(r=[t]);var o=n.event,a=void 0===o?"keydown":o,c=n.target,d=n.options,f=Object(i.useMemo)((function(){var n,i="function"===typeof(n=t)?n:"string"===typeof n?function(t){return t.key===n}:n?function(){return!0}:function(){return!1};return function(t){if(i(t))return e(t)}}),r);s(a,f,c,d)},d=function(t){var e=Object(i.useState)([!1,null]),n=e[0],r=e[1];return c(t,(function(t){return r([!0,t])}),{event:"keydown"},[n]),c(t,(function(t){return r([!1,t])}),{event:"keyup"},[n]),n},f=n(191);e.a=function(t,e,n,i){void 0===i&&(i=d);var r=i(t),o=r[0],a=r[1];Object(f.a)((function(){!o&&n?n(a):o&&e&&e(a)}),[o])}}}]);
//# sourceMappingURL=13.1cd04ee3.chunk.js.map