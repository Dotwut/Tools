/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15,66],{537:function(t,e,n){"use strict";n.d(e,"c",(function(){return _})),n.d(e,"a",(function(){return L})),n.d(e,"b",(function(){return O}));var r=n(541),o=n(19);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=v(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function h(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,r,o=[],c=!0,l=!1;try{for(e=e.call(t);!(c=(n=e.next()).done)&&(o.push(n.value),!i||o.length!==i);c=!0);}catch(t){l=!0,r=t}finally{try{c||null==e.return||e.return()}finally{if(l)throw r}}return o}(t,i)||v(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(){f=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,desc){t[e]=desc.value},o="function"==typeof Symbol?Symbol:{},l=o.iterator||"@@iterator",h=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function v(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{v({},"")}catch(t){v=function(t,e,n){return t[e]=n}}function m(t,e,n,o){var c=e&&e.prototype instanceof w?e:w,l=Object.create(c.prototype),h=new A(o||[]);return r(l,"_invoke",{value:k(t,n,h)}),l}function y(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=m;var x={};function w(){}function I(){}function S(){}var _={};v(_,l,(function(){return this}));var L=Object.getPrototypeOf,O=L&&L(L(C([])));O&&O!==e&&n.call(O,l)&&(_=O);var P=S.prototype=w.prototype=Object.create(_);function j(t){["next","throw","return"].forEach((function(e){v(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(r,l,h,f){var d=y(t[r],t,l);if("throw"!==d.type){var v=d.arg,m=v.value;return m&&"object"==c(m)&&n.call(m,"__await")?e.resolve(m.__await).then((function(t){o("next",t,h,f)}),(function(t){o("throw",t,h,f)})):e.resolve(m).then((function(t){v.value=t,h(v)}),(function(t){return o("throw",t,h,f)}))}f(d.arg)}var l;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return l=l?l.then(r,r):r()}})}function k(t,e,n){var r="suspendedStart";return function(o,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw c;return $()}for(n.method=o,n.arg=c;;){var l=n.delegate;if(l){var h=D(l,n);if(h){if(h===x)continue;return h}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var f=y(t,e,n);if("normal"===f.type){if(r=n.done?"completed":"suspendedYield",f.arg===x)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(r="completed",n.method="throw",n.arg=f.arg)}}}function D(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,D(t,e),"throw"===e.method))return x;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return x}var r=y(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,x;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,x):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,x)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:$}}function $(){return{value:void 0,done:!0}}return I.prototype=S,r(P,"constructor",{value:S,configurable:!0}),r(S,"constructor",{value:I,configurable:!0}),I.displayName=v(S,d,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===I||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,v(t,d,"GeneratorFunction")),t.prototype=Object.create(P),t},t.awrap=function(t){return{__await:t}},j(E.prototype),v(E.prototype,h,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,c){void 0===c&&(c=Promise);var l=new E(m(e,n,r,o),c);return t.isGeneratorFunction(n)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},j(P),v(P,d,"Generator"),v(P,l,(function(){return this})),v(P,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var object=Object(t),e=[];for(var n in object)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in object)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),h=n.call(o,"finallyLoc");if(l&&h){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),x},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),F(e),x}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var r=n.arg;F(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),x}},t}function d(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function y(t,e,n,r,o,c,l){try{var h=t[c](l),f=h.value}catch(t){return void n(t)}h.done?e(f):Promise.resolve(f).then(r,o)}function x(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function l(t){y(c,r,o,l,h,"next",t)}function h(t){y(c,r,o,l,h,"throw",t)}l(void 0)}))}}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e,n){return e&&I(t.prototype,e),n&&I(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _(t,e){return["http","data"].some((function(p){return t.startsWith(p)}))?t:t.startsWith("/api/")?Object(r.a)(new URL(e.defaults.baseURL,window.location).origin,t):Object(r.a)(e.defaults.baseURL,t)}var L=function(){function t(e,n,r){w(this,t),this.axios=n,this.toast=r,this.baseURL=e,this.nextPageURL=this.baseURL,this.isLoading=!1,this.data=[],this.hasError=!1,this.errorData=null}var e;return S(t,[{key:"hasNextPage",get:function(){return null!==this.nextPageURL}},{key:"fetchNextPage",value:(e=x(f().mark((function t(){var e,n,r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this&&!this.isLoading&&this.hasNextPage){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,this.isLoading=!0,t.next=6,this.axios.$get(this.nextPageURL);case 6:n=t.sent,this.nextPageURL=n.next,(e=this.data).push.apply(e,d(n.results)),this.hasError=!1,this.errorData=null,t.next=18;break;case 13:t.prev=13,t.t0=t.catch(2),this.hasError=!0,this.errorData=(null===t.t0||void 0===t.t0||null===(r=t.t0.response)||void 0===r?void 0:r.data)||null,this.toast.global.requestError({error:t.t0});case 18:return t.prev=18,this.isLoading=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,this,[[2,13,18,21]])}))),function(){return e.apply(this,arguments)})}]),t}(),O=function(){function t(e){var n=e.baseURL,r=e.searchFilters,c=void 0===r?{search:""}:r,l=e.axios,h=e.toast;w(this,t),this.axios=l,this.toast=h,this.baseURL=n,this._searchFilters=c,this._fetchNextPageDebounced=Object(o.debounce)((function(){this._fetchNextPage()}),500),this.fetcher=null,this._createFetcher()}var e;return S(t,[{key:"_createFetcher",value:function(){for(var t=new URLSearchParams(this.baseURL.split("?")[1]),e=0,n=Object.entries(this.searchFilters);e<n.length;e++){var r=h(n[e],2),o=r[0],c=r[1];if(c)if(Array.isArray(c)){t.delete(o);var f,d=l(c);try{for(d.s();!(f=d.n()).done;){var v=f.value;t.append(o,v)}}catch(t){d.e(t)}finally{d.f()}}else t.set(o,c)}var m=this.baseURL.split("?")[0]+"?"+t.toString();this.fetcher=new L(m,this.axios,this.toast)}},{key:"search",value:function(t){this._searchFilters=Object.assign(this._searchFilters,{search:t}),this._createFetcher(),this.fetchNextPage()}},{key:"applyFilters",value:function(t){Object.assign(this._searchFilters,t),this._createFetcher(),this.fetchNextPageImmediate()}},{key:"searchFilters",get:function(){return this._searchFilters}},{key:"searchQuery",get:function(){return this.searchFilters.search},set:function(t){this.search(t,this._searchFilters)}},{key:"hasNextPage",get:function(){return this.fetcher.hasNextPage}},{key:"hasError",get:function(){return this.fetcher.hasError}},{key:"errorData",get:function(){return this.fetcher.errorData}},{key:"data",get:function(){return this.fetcher.data}},{key:"fetchNextPage",value:function(){this._fetchNextPageDebounced()}},{key:"_fetchNextPage",value:(e=x(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetcher.fetchNextPage();case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"fetchNextPageImmediate",value:function(){this&&(this._fetchNextPageDebounced(),this._fetchNextPageDebounced.flush())}}]),t}()},567:function(t,e,n){var content=n(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("50788f08",content,!0,{sourceMap:!1})},575:function(t,e,n){"use strict";n.r(e);var r=n(628),o={props:{outlined:{type:Boolean,default:!0}}},c=n(20),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,t._g(t._b({staticClass:"mt-4",attrs:{"hide-details":"auto","error-count":100,"persistent-hint":"",outlined:t.outlined,spellcheck:"false"},scopedSlots:t._u([t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(data){return[t._t(n,null,null,data)]}}})),{key:"no-data",fn:function(){return[e("div")]},proxy:!0}],null,!0)},"v-autocomplete",t.$attrs,!1),t.$listeners),[t._v(" "),t._l(t.$slots,(function(n,r){return e("template",{slot:r},[t._t(r)],2)}))],2)}),[],!1,null,null,null);e.default=component.exports},584:function(t,e,n){"use strict";n.r(e);var r=n(640),o=n(74),c=n(107),l=n(85);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function f(){f=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,desc){t[e]=desc.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function v(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{v({},"")}catch(t){v=function(t,e,n){return t[e]=n}}function m(t,e,n,o){var c=e&&e.prototype instanceof w?e:w,l=Object.create(c.prototype),h=new A(o||[]);return r(l,"_invoke",{value:k(t,n,h)}),l}function y(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=m;var x={};function w(){}function I(){}function S(){}var _={};v(_,c,(function(){return this}));var L=Object.getPrototypeOf,O=L&&L(L(C([])));O&&O!==e&&n.call(O,c)&&(_=O);var P=S.prototype=w.prototype=Object.create(_);function j(t){["next","throw","return"].forEach((function(e){v(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(r,c,l,f){var d=y(t[r],t,c);if("throw"!==d.type){var v=d.arg,m=v.value;return m&&"object"==h(m)&&n.call(m,"__await")?e.resolve(m.__await).then((function(t){o("next",t,l,f)}),(function(t){o("throw",t,l,f)})):e.resolve(m).then((function(t){v.value=t,l(v)}),(function(t){return o("throw",t,l,f)}))}f(d.arg)}var c;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return c=c?c.then(r,r):r()}})}function k(t,e,n){var r="suspendedStart";return function(o,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw c;return $()}for(n.method=o,n.arg=c;;){var l=n.delegate;if(l){var h=D(l,n);if(h){if(h===x)continue;return h}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var f=y(t,e,n);if("normal"===f.type){if(r=n.done?"completed":"suspendedYield",f.arg===x)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(r="completed",n.method="throw",n.arg=f.arg)}}}function D(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,D(t,e),"throw"===e.method))return x;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return x}var r=y(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,x;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,x):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,x)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:$}}function $(){return{value:void 0,done:!0}}return I.prototype=S,r(P,"constructor",{value:S,configurable:!0}),r(S,"constructor",{value:I,configurable:!0}),I.displayName=v(S,d,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===I||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,v(t,d,"GeneratorFunction")),t.prototype=Object.create(P),t},t.awrap=function(t){return{__await:t}},j(E.prototype),v(E.prototype,l,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,c){void 0===c&&(c=Promise);var l=new E(m(e,n,r,o),c);return t.isGeneratorFunction(n)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},j(P),v(P,d,"Generator"),v(P,c,(function(){return this})),v(P,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var object=Object(t),e=[];for(var n in object)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in object)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),h=n.call(o,"finallyLoc");if(l&&h){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),x},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),F(e),x}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var r=n.arg;F(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),x}},t}function d(t,e,n,r,o,c,l){try{var h=t[c](l),f=h.value}catch(t){return void n(t)}h.done?e(f):Promise.resolve(f).then(r,o)}var v={props:{items:{type:Object,required:!0}},methods:{onIntersect:function(t,e,n){n&&this.fetchNextPage()},fetchNextPage:function(){var t,e=this;return(t=f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e.items.fetchNextPageImmediate){t.next=6;break}return t.next=3,e.items.fetchNextPageImmediate();case 3:case 8:return t.abrupt("return",t.sent);case 6:return t.next=8,e.items.fetchNextPage();case 9:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function l(t){d(c,r,o,l,h,"next",t)}function h(t){d(c,r,o,l,h,"throw",t)}l(void 0)}))})()}}},m=v,y=n(20),component=Object(y.a)(m,(function(){var t,e=this,n=e._self._c;return e.items.hasNextPage?n("div",{staticClass:"text-center"},[e.items.isLoading||e.items.hasError?e._e():n("div",{directives:[{def:l.a,name:"intersect",rawName:"v-intersect",value:e.onIntersect,expression:"onIntersect"}]}),e._v(" "),e.items.hasError?n("div",[n(r.a,{attrs:{color:"error"}},[e._v("\n      Failed to load data\n      "),null!==(t=e.items.errorData)&&void 0!==t&&t.detail?[e._v(": "+e._s(e.items.errorData.detail))]:e._e(),e._v(" "),n("br"),e._v(" "),n("s-btn",{attrs:{loading:e.items.isLoading,color:"secondary"},on:{click:e.fetchNextPage}},[n(o.a,[e._v("mdi-refresh")]),e._v("\n        Retry\n      ")],1)],2)],1):n(c.a,{attrs:{indeterminate:""}})],1):e._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SBtn:n(145).default})},593:function(t,e,n){var r=n(10)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},628:function(t,e,n){"use strict";n(567);var r=n(620),o=n(578),c=n(45),l=n(2);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){d(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=f(f({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=r.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return v}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(l.r)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=r.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},v),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===l.x.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l.x.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l.x.backspace&&t!==l.x.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(l.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(l.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[l.x.home,l.x.end].includes(e)||r.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){r.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){r.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},677:function(t,e,n){"use strict";n.r(e);var r=n(537),o={props:{value:{type:[Array,Object,String],default:null},label:{type:String,default:"Users"},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},preventUnselectingSelf:{type:Boolean,default:!1},selectableUsers:{type:Array,default:null},outlined:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0}},emits:["input"],data:function(){return{items:new r.a("/pentestusers/",this.$axios,this.$toast),rules:{single:[function(t){return!!t||"Item is required"}],multiple:[function(t){return t&&t.length>0||"Item is required"}]}}},computed:{autocompleteAttrs:function(){var t=this;return Object.assign({},this.$attrs,{label:this.label,itemValue:"id",itemText:function(u){return u.username&&u.name?"".concat(u.username," (").concat(u.name,")"):u.username||u.name||""},itemDisabled:function(u){return t.preventUnselectingSelf&&u.id===t.$auth.user.id&&t.value.some((function(t){return t.id===u.id}))},disabled:this.disabled,returnObject:!0,outlined:this.outlined,clearable:this.clearable},this.selectableUsers?{items:this.selectableUsers}:{items:this.items.data,loading:this.items.isLoading},this.multiple?{multiple:!0,chips:!0,deletableChips:!0}:{},this.required?{rules:this.multiple?this.rules.multiple:this.rules.single}:{})}},mounted:function(){this.value&&this.items.fetchNextPage()}},c=n(20),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("s-autocomplete",t._b({attrs:{value:t.value},on:{change:function(e){return t.$emit("input",e)}},scopedSlots:t._u([t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(data){return[t._t(n,null,null,data)]}}})),{key:"append-item",fn:function(){return[t.selectableUsers?t._e():e("page-loader",{attrs:{items:t.items}})]},proxy:!0}],null,!0)},"s-autocomplete",t.autocompleteAttrs,!1),[t._v(" "),t._l(t.$slots,(function(n,r){return e("template",{slot:r},[t._t(r)],2)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageLoader:n(584).default,SAutocomplete:n(575).default})}}]);
//# sourceMappingURL=330f067.js.map