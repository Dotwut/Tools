/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1759:function(t,e,r){"use strict";r.r(e);var n=r(514),o=r(746),c=r(74),l=r(135),h=r(75),v=r(137),f=r(13),d=r(147);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,desc){t[e]=desc.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",h=o.toStringTag||"@@toStringTag";function v(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{v({},"")}catch(t){v=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var c=e&&e.prototype instanceof w?e:w,l=Object.create(c.prototype),h=new M(o||[]);return n(l,"_invoke",{value:P(t,r,h)}),l}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var x={};function w(){}function _(){}function k(){}var O={};v(O,c,(function(){return this}));var j=Object.getPrototypeOf,E=j&&j(j(I([])));E&&E!==e&&r.call(E,c)&&(O=E);var C=k.prototype=w.prototype=Object.create(O);function L(t){["next","throw","return"].forEach((function(e){v(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function o(n,c,l,h){var v=d(t[n],t,c);if("throw"!==v.type){var f=v.arg,m=f.value;return m&&"object"==y(m)&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){o("next",t,l,h)}),(function(t){o("throw",t,l,h)})):e.resolve(m).then((function(t){f.value=t,l(f)}),(function(t){return o("throw",t,l,h)}))}h(v.arg)}var c;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return c=c?c.then(n,n):n()}})}function P(t,e,r){var n="suspendedStart";return function(o,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw c;return G()}for(r.method=o,r.arg=c;;){var l=r.delegate;if(l){var h=$(l,r);if(h){if(h===x)continue;return h}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var v=d(t,e,r);if("normal"===v.type){if(n=r.done?"completed":"suspendedYield",v.arg===x)continue;return{value:v.arg,done:r.done}}"throw"===v.type&&(n="completed",r.method="throw",r.arg=v.arg)}}}function $(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,$(t,e),"throw"===e.method))return x;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return x}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,x;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,x):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,x)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function I(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,n=function e(){for(;++i<t.length;)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:G}}function G(){return{value:void 0,done:!0}}return _.prototype=k,n(C,"constructor",{value:k,configurable:!0}),n(k,"constructor",{value:_,configurable:!0}),_.displayName=v(k,h,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,v(t,h,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},L(S.prototype),v(S.prototype,l,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var l=new S(f(e,r,n,o),c);return t.isGeneratorFunction(r)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},L(C),v(C,h,"Generator"),v(C,c,(function(){return this})),v(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var object=Object(t),e=[];for(var r in object)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in object)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=I,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),h=r.call(o,"finallyLoc");if(l&&h){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),x},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),z(e),x}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var n=r.arg;z(e)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),x}},t}function x(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,n,o=[],c=!0,l=!1;try{for(e=e.call(t);!(c=(r=e.next()).done)&&(o.push(r.value),!i||o.length!==i);c=!0);}catch(t){l=!0,n=t}finally{try{c||null==e.return||e.return()}finally{if(l)throw n}}return o}(t,i)||function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(t,e)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function _(t,e,r,n,o,c,l){try{var h=t[c](l),v=h.value}catch(t){return void r(t)}h.done?e(v):Promise.resolve(v).then(n,o)}function k(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function l(t){_(c,n,o,l,h,"next",t)}function h(t){_(c,n,o,l,h,"throw",t)}l(void 0)}))}}var O={asyncData:function(t){return k(m().mark((function e(){var r,n,o,c,l,h;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,e.next=3,Promise.all([r.$get("/pentestusers/".concat(n.userId,"/mfa/")),r.$get("/pentestusers/".concat(n.userId,"/"))]);case 3:return o=e.sent,c=x(o,2),l=c[0],h=c[1],e.abrupt("return",{mfaMethods:l,user:h});case 8:case"end":return e.stop()}}),e)})))()},computed:{mfaMethodChoices:function(){return d.b},canEdit:function(){return this.$auth.hasScope("user_manager")&&!this.user.is_system_user}},methods:{deleteMfaMethod:function(t){var e=this;return k(m().mark((function r(){return m().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.$delete("/pentestusers/".concat(e.params.userId,"/mfa/").concat(t.id,"/"));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()}}},j=r(20),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;return e("s-card",[e(n.c,[t._v("Multi Factor Authentication")]),t._v(" "),e(n.b,[e("p",[t._v("\n      If this user lost all its MFA methods and cannot log in anymore, you can remove all MFA devices to disable MFA.\n    ")]),t._v(" "),e(l.a,[t._l(t.mfaMethods,(function(r){return e(h.a,{key:r.id},[e(f.c,[e(c.a,{staticClass:"mr-3"},[t._v(t._s(t.mfaMethodChoices.find((function(t){return t.value===r.method_type})).icon))]),t._v("\n          "+t._s(r.name)+"\n          "),r.is_primary?[e(o.a,{staticClass:"ml-3",attrs:{small:""}},[t._v("Primary")])]:t._e()],2),t._v(" "),e(v.a,[e("btn-delete",{attrs:{icon:"",delete:function(){return t.deleteMfaMethod(r)},disabled:!t.canEdit}})],1)],1)})),t._v(" "),0===t.mfaMethods.length?e(h.a,[e(f.c,[t._v("Multi Factor Authentication is disabled")])],1):t._e()],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BtnDelete:r(557).default,SCard:r(533).default})},625:function(t,e,r){var content=r(626);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("197fcea4",content,!0,{sourceMap:!1})},626:function(t,e,r){var n=r(10)(!1);n.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=n},746:function(t,e,r){"use strict";r(625);var n=r(5),o=r(84),c=r(33),l=r(14),h=r(51),v=r(12),f=r(24),d=r(30),y=r(89),m=r(7);function x(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,n,o=[],c=!0,l=!1;try{for(e=e.call(t);!(c=(r=e.next()).done)&&(o.push(r.value),!i||o.length!==i);c=!0);}catch(t){l=!0,n=t}finally{try{c||null==e.return||e.return()}finally{if(l)throw n}}return o}(t,i)||function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(t,e)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){O(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a=Object(n.a)(l.a,y.a,d.a,v.a,Object(h.a)("chipGroup"),Object(f.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return k(k(k(k({"v-chip":!0},d.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=x(e,2),n=r[0],o=r[1];t.$attrs.hasOwnProperty(n)&&Object(m.a)(n,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(c.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o.b,t)},genClose:function(){var t=this;return this.$createElement(c.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),n=r.tag,data=r.data;data.attrs=k(k({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(o,data),e)}})}}]);
//# sourceMappingURL=5af6342.js.map