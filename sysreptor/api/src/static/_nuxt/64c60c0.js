(window.webpackJsonp=window.webpackJsonp||[]).push([[79,41],{574:function(e,t,r){var content=r(628);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("112ac57b",content,!0,{sourceMap:!1})},617:function(e,t,r){"use strict";r.r(t);var l=r(85),n={emits:["resize"],data:function(){return{height:0}},mounted:function(){this.updateHeight(),window.addEventListener("resize",this.updateHeight)},beforeDestroy:function(){window.removeEventListener("resize",this.updateHeight)},methods:{updateHeight:function(){var e,t=null===(e=this.$refs.container)||void 0===e?void 0:e.getClientRects();if(t&&0!==t.length){var r=t[0].top;this.height=window.innerHeight-r,this.$emit("resize")}}}},o=(r(627),r(20)),component=Object(o.a)(n,(function(){var e=this;return(0,e._self._c)("div",{directives:[{def:l.a,name:"intersect",rawName:"v-intersect",value:e.updateHeight,expression:"updateHeight"}],ref:"container",staticClass:"screen-height-container",style:{height:e.height+"px"}},[e._t("default")],2)}),[],!1,null,"4ae993f5",null);t.default=component.exports},627:function(e,t,r){"use strict";r(574)},628:function(e,t,r){var l=r(10)(!1);l.push([e.i,".screen-height-container[data-v-4ae993f5]{width:100%;display:block;position:relative;overflow-y:auto}",""]),e.exports=l},634:function(e,t,r){var content=r(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("6909c436",content,!0,{sourceMap:!1})},701:function(e,t,r){"use strict";r(634)},702:function(e,t,r){var l=r(10)(!1);l.push([e.i,'.splitpanes{display:flex;width:100%;height:100%}.splitpanes--vertical{flex-direction:row}.splitpanes--horizontal{flex-direction:column}.splitpanes--dragging *{-webkit-user-select:none;-moz-user-select:none;user-select:none}.splitpanes__pane{width:100%;height:100%;overflow:hidden}.splitpanes__splitter{touch-action:none}.splitpanes--vertical>.splitpanes__splitter{min-width:1px;cursor:col-resize}.splitpanes--horizontal>.splitpanes__splitter{min-height:1px;cursor:row-resize}.splitpanes.default-theme .splitpanes__splitter{background-color:#fff;box-sizing:border-box;position:relative;flex-shrink:0}.splitpanes.default-theme .splitpanes__splitter:after,.splitpanes.default-theme .splitpanes__splitter:before{content:"";position:absolute;top:50%;left:50%;background-color:rgba(0,0,0,.15);transition:background-color .3s}.splitpanes.default-theme .splitpanes__splitter:hover:after,.splitpanes.default-theme .splitpanes__splitter:hover:before{background-color:rgba(0,0,0,.25)}.splitpanes.default-theme .splitpanes__splitter:first-child{cursor:auto}.default-theme.splitpanes .splitpanes .splitpanes__splitter{z-index:1}.default-theme.splitpanes--vertical>.splitpanes__splitter,.default-theme .splitpanes--vertical>.splitpanes__splitter{width:7px;border-left:1px solid #eee;border-right:1px solid #eee;margin-left:-1px}.default-theme.splitpanes--vertical>.splitpanes__splitter:after,.default-theme .splitpanes--vertical>.splitpanes__splitter:after,.default-theme.splitpanes--vertical>.splitpanes__splitter:before,.default-theme .splitpanes--vertical>.splitpanes__splitter:before{transform:translateY(-50%);width:1px;height:30px}.default-theme.splitpanes--vertical>.splitpanes__splitter:before,.default-theme .splitpanes--vertical>.splitpanes__splitter:before{margin-left:-2px}.default-theme.splitpanes--vertical>.splitpanes__splitter:after,.default-theme .splitpanes--vertical>.splitpanes__splitter:after{margin-left:1px}.default-theme.splitpanes--horizontal>.splitpanes__splitter,.default-theme .splitpanes--horizontal>.splitpanes__splitter{height:7px;border-top:1px solid #eee;margin-top:-1px}.default-theme.splitpanes--horizontal>.splitpanes__splitter:after,.default-theme .splitpanes--horizontal>.splitpanes__splitter:after,.default-theme.splitpanes--horizontal>.splitpanes__splitter:before,.default-theme .splitpanes--horizontal>.splitpanes__splitter:before{transform:translateX(-50%);width:30px;height:1px}.default-theme.splitpanes--horizontal>.splitpanes__splitter:before,.default-theme .splitpanes--horizontal>.splitpanes__splitter:before{margin-top:-2px}.default-theme.splitpanes--horizontal>.splitpanes__splitter:after,.default-theme .splitpanes--horizontal>.splitpanes__splitter:after{margin-top:1px}',""]),e.exports=l},728:function(e,t,r){"use strict";r.r(t);var l=r(502),n=r(1022),o=r(680),c={components:{Splitpanes:o.b,Pane:o.a},props:{value:{type:Number,default:15}}},h=(r(701),r(20)),component=Object(h.a)(c,(function(){var e=this,t=e._self._c;return t("splitpanes",{staticClass:"default-theme",on:{resized:function(t){return e.$emit("input",t[0].size)}}},[t("pane",{attrs:{size:e.value}},[t("fill-screen-height",[t(n.a,{attrs:{permanent:"",left:"",width:"100%"}},[e._t("menu")],2)],1)],1),e._v(" "),t("pane",{attrs:{size:100-e.value}},[t("fill-screen-height",[t(l.a,{staticClass:"pt-0 pb-0",attrs:{fluid:""}},[e._t("default")],2)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FillScreenHeight:r(617).default})},755:function(e,t,r){"use strict";var l=r(818);t.a=l.a},818:function(e,t,r){"use strict";r(822);var l=r(14),n=r(12),o=r(24),c=r(5);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=Object(c.a)(l.a,n.a,o.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var data=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",data)},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){d(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}})},822:function(e,t,r){var content=r(823);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("3f95a174",content,!0,{sourceMap:!1})},823:function(e,t,r){var l=r(10)(!1);l.push([e.i,".theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;display:flex;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}",""]),e.exports=l},882:function(e,t,r){"use strict";var l=r(755),n=r(2),o=r(1);t.a=o.a.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new l.a({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(n.u)(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(n.a)(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&!e.isActive&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("key"in e){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[n.x.up,n.x.pageup],r=[n.x.down,n.x.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!r.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var style=window.getComputedStyle(e);return(["auto","scroll"].includes(style.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(style.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll:function(e,t){if(e.hasAttribute("data-app"))return!1;var r,l,n=t.shiftKey||t.deltaX?"x":"y",o="y"===n?t.deltaY:t.deltaX||t.deltaY;return"y"===n?(r=0===e.scrollTop,l=e.scrollTop+e.clientHeight===e.scrollHeight):(r=0===e.scrollLeft,l=e.scrollLeft+e.clientWidth===e.scrollWidth),!(r||!(o<0))||(!(l||!(o>0))||!(!r&&!l)&&this.shouldScroll(e.parentNode,t))},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var path=Object(n.g)(e);if("keydown"===e.type&&path[0]===document.body){var dialog=this.$refs.dialog,t=window.getSelection().anchorNode;return!(dialog&&this.hasScrollbar(dialog)&&this.isInside(t,dialog))||!this.shouldScroll(dialog,e)}for(var r=0;r<path.length;r++){var l=path[r];if(l===document)return!0;if(l===document.documentElement)return!0;if(l===this.$refs.content)return!0;if(this.hasScrollbar(l))return!this.shouldScroll(l,e)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(n.b)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=64c60c0.js.map