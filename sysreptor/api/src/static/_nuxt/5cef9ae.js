/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1738:function(t,e,r){"use strict";r.r(e);var o=r(637),n=r(502),l=r(159);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,desc){t[e]=desc.value},n="function"==typeof Symbol?Symbol:{},l=n.iterator||"@@iterator",d=n.asyncIterator||"@@asyncIterator",v=n.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function m(t,e,r,n){var l=e&&e.prototype instanceof x?e:x,c=Object.create(l.prototype),h=new D(n||[]);return o(c,"_invoke",{value:$(t,r,h)}),c}function y(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=m;var _={};function x(){}function w(){}function O(){}var E={};f(E,l,(function(){return this}));var L=Object.getPrototypeOf,j=L&&L(L(T([])));j&&j!==e&&r.call(j,l)&&(E=j);var k=O.prototype=x.prototype=Object.create(E);function C(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,l,h,d){var v=y(t[o],t,l);if("throw"!==v.type){var f=v.arg,m=f.value;return m&&"object"==c(m)&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){n("next",t,h,d)}),(function(t){n("throw",t,h,d)})):e.resolve(m).then((function(t){f.value=t,h(f)}),(function(t){return n("throw",t,h,d)}))}d(v.arg)}var l;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return l=l?l.then(o,o):o()}})}function $(t,e,r){var o="suspendedStart";return function(n,l){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw l;return A()}for(r.method=n,r.arg=l;;){var c=r.delegate;if(c){var h=B(c,r);if(h){if(h===_)continue;return h}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var d=y(t,e,r);if("normal"===d.type){if(o=r.done?"completed":"suspendedYield",d.arg===_)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(o="completed",r.method="throw",r.arg=d.arg)}}}function B(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,B(t,e),"throw"===e.method))return _;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var o=y(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,_;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,_):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){for(;++i<t.length;)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return w.prototype=O,o(k,"constructor",{value:O,configurable:!0}),o(O,"constructor",{value:w,configurable:!0}),w.displayName=f(O,v,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,f(t,v,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},C(S.prototype),f(S.prototype,d,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,o,n,l){void 0===l&&(l=Promise);var c=new S(m(e,r,o,n),l);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},C(k),f(k,v,"Generator"),f(k,l,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var object=Object(t),e=[];for(var r in object)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in object)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=T,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return l.type="throw",l.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i],l=n.completion;if("root"===n.tryLoc)return o("end");if(n.tryLoc<=this.prev){var c=r.call(n,"catchLoc"),h=r.call(n,"finallyLoc");if(c&&h){if(this.prev<n.catchLoc)return o(n.catchLoc,!0);if(this.prev<n.finallyLoc)return o(n.finallyLoc)}else if(c){if(this.prev<n.catchLoc)return o(n.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return o(n.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var l=n?n.completion:{};return l.type=t,l.arg=e,n?(this.method="next",this.next=n.finallyLoc,_):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),_}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;I(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),_}},t}function d(t,e,r,o,n,l,c){try{var h=t[l](c),d=h.value}catch(t){return void r(t)}h.done?e(d):Promise.resolve(d).then(o,n)}var v={asyncData:function(t){return(e=h().mark((function e(){var r,o,n,c,d,v,f,m;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o=t.$auth,n=t.route,c=null,e.prev=2,e.next=5,r.$post("/pentestusers/self/admin/enable/",{});case 5:d=e.sent,o.setUser(d),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),"reauth-required"===(null===e.t0||void 0===e.t0||null===(v=e.t0.response)||void 0===v||null===(f=v.data)||void 0===f?void 0:f.code)?Object(l.b)({auth:o,route:n}):c=(null===e.t0||void 0===e.t0||null===(m=e.t0.response)||void 0===m?void 0:m.detail)||"Failed to enable superuser permissions";case 12:return e.abrupt("return",{errorMessage:c});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})),function(){var t=this,r=arguments;return new Promise((function(o,n){var l=e.apply(t,r);function c(t){d(l,o,n,c,h,"next",t)}function h(t){d(l,o,n,c,h,"throw",t)}c(void 0)}))})();var e}},f=v,m=r(20),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(n.a,[t.errorMessage?e(o.a,{attrs:{color:"error"}},[t._v("\n    "+t._s(t.errorMessage)+"\n  ")]):e("div",[e("h1",[t._v("Welcome, mighty Superuser")]),t._v(" "),e(o.a,{attrs:{color:"success"}},[t._v("\n      Your superuser permissions are now enabled. Use them responsibly.\n    ")]),t._v(" "),e("s-btn",{attrs:{to:"/",nuxt:"",color:"primary"}},[t._v("Continue")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SBtn:r(145).default})},553:function(t,e,r){var content=r(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("5db1c400",content,!0,{sourceMap:!1})},554:function(t,e,r){var o=r(10)(!1);o.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=o},637:function(t,e,r){"use strict";r(553);var o=r(146),n=r(83),l=r(33),c=r(24),h=r(12),d=r(148),v=r(5),f=r(7);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){_(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a=Object(v.a)(o.a,c.a,d.a).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:_({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(n.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(l.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(l.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=y(y({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})}}]);
//# sourceMappingURL=5cef9ae.js.map