(window.webpackJsonp=window.webpackJsonp||[]).push([[59,46,72],{1020:function(t,e,n){"use strict";n(926)},1021:function(t,e,n){var o=n(10)(!1);o.push([t.i,".note-list-item[data-v-11021e93]{min-height:1em}.note-list-item--children[data-v-11021e93]{padding-left:0}.note-list-item--no-children[data-v-11021e93]{padding-left:1rem}.note-list-item .note-list-children-icon[data-v-11021e93]{width:1rem}.note-list-item[data-v-11021e93]  .v-icon:focus:after{opacity:0}.note-list-item[data-v-11021e93]  .lock-info-icon{margin:0!important;height:1rem}.child-list[data-v-11021e93]{padding-left:1rem}.emoji-status[data-v-11021e93]{margin-top:6px!important;margin-bottom:6px!important}.emoji-status[data-v-11021e93] .emoji-mart-emoji{padding:2px}",""]),t.exports=o},725:function(t,e,n){var content=n(825);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("364cc28e",content,!0,{sourceMap:!1})},782:function(t,e,n){t.exports=n.p+"img/sheet_twitter_32_indexed_128.cb1fbc2.png"},819:function(t,e,n){var content=n(890);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2f5db051",content,!0,{sourceMap:!1})},824:function(t,e,n){"use strict";n(725)},825:function(t,e,n){var o=n(10),l=n(251),r=n(782),d=o(!1),c=l(r);d.push([t.i,".emoji-mart-emoji[data-v-2b358d72]{padding:0}[data-v-2b358d72]  .emoji-type-image.emoji-set-local{background-image:url("+c+")}",""]),t.exports=d},847:function(t,e,n){"use strict";n.r(e);var o=n(844),l=n(845),r=new l.EmojiIndex(o),d={components:{Emoji:l.Emoji},props:{value:{type:String,required:!0},small:{type:Boolean,default:!1}},computed:{emojiIndex:function(){return r},emojiObject:function(){return this.emojiIndex.nativeEmoji(this.value)},size:function(){return this.small?20:24}}},c=(n(824),n(20)),component=Object(c.a)(d,(function(){var t=this;return(0,t._self._c)("emoji",{staticClass:"v-icon",attrs:{tag:"i",data:t.emojiIndex,emoji:t.emojiObject,set:"local",size:t.size}})}),[],!1,null,"2b358d72",null);e.default=component.exports},889:function(t,e,n){"use strict";n(819)},890:function(t,e,n){var o=n(10)(!1);o.push([t.i,".lock-info-icon[data-v-c881cbe8]{margin-right:0!important;min-width:1em!important}",""]),t.exports=o},926:function(t,e,n){var content=n(1021);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("058ede8b",content,!0,{sourceMap:!1})},933:function(t,e,n){"use strict";n.r(e);var o=n(74),l=n(65),r={props:{value:{type:[Object,null],default:null}}},d=(n(889),n(20)),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return t.value?e("s-tooltip",{scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,d=n.attrs;return[e(l.a,t._g(t._b({staticClass:"lock-info-icon"},"v-list-item-icon",d,!1),r),[e(o.a,{attrs:{"x-small":""}},[t._v("mdi-pencil-lock")])],1)]}}],null,!1,461332311)},[t._v(" "),e("span",[t._v(t._s(t.value.user.username)+" is editing")])]):t._e()}),[],!1,null,"c881cbe8",null);e.default=component.exports;installComponents(component,{STooltip:n(247).default})},988:function(t,e,n){"use strict";n.r(e);var o=n(74),l=n(135),r=n(75),d=n(13),c=n(65),m=n(887);function f(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var h={components:{Draggable:n.n(m).a},props:{value:{type:Array,required:!0},disabled:{type:Boolean,default:!1},toPrefix:{type:String,required:!0}},emits:["input"],data:function(){return{localValue:f(this.value)}},watch:{value:{immediate:!0,handler:function(t){this.localValue=f(t)}}},methods:{isExpanded:function(t){return this.$store.getters["settings/isNoteExpanded"](t.id)},toggleExpanded:function(t){this.$store.commit("settings/setNoteExpandState",{noteId:t.id,isExpanded:!this.isExpanded(t)})},updateValue:function(t){this.localValue=t,this.$emit("input",this.localValue)},updateChildren:function(t,e){var n=this.localValue.findIndex((function(i){return i.note.id===t.note.id}));this.localValue[n]=Object.assign({},this.localValue[n],{children:e}),this.$emit("input",this.localValue)},updateChecked:function(t,e){null===t.lock_info&&this.$emit("update:note",{id:t.id,checked:e})}}},_=(n(1020),n(20)),component=Object(_.a)(h,(function(){var t=this,e=t._self._c;return e("draggable",{staticClass:"pb-1",attrs:{value:t.localValue,draggable:".draggable-item",group:"notes",delay:50,disabled:t.disabled},on:{input:t.updateValue}},t._l(t.value,(function(n){return e("div",{key:n.note.id,staticClass:"draggable-item"},[e(r.a,{staticClass:"note-list-item",class:n.children.length>0?"note-list-item--children":"note-list-item--no-children",attrs:{to:t.toPrefix+n.note.id+"/",nuxt:"",ripple:!1}},[n.children.length>0?e(o.a,{staticClass:"note-list-children-icon",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleExpanded(n.note)}}},[t.isExpanded(n.note)?[t._v("mdi-menu-down")]:[t._v("mdi-menu-right")]],2):t._e(),t._v(" "),e(d.a,[e(d.c,[!0===n.note.checked?e(o.a,{staticClass:"text--disabled",attrs:{dense:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.updateChecked(n.note,!1)}}},[t._v("mdi-checkbox-marked")]):!1===n.note.checked?e(o.a,{staticClass:"text--disabled",attrs:{dense:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.updateChecked(n.note,!0)}}},[t._v("mdi-checkbox-blank-outline")]):n.note.icon_emoji?e("s-emoji",{attrs:{value:n.note.icon_emoji,small:""}}):n.children.length>0?e(o.a,{staticClass:"text--disabled",attrs:{dense:""}},[t._v("mdi-folder-outline")]):e(o.a,{staticClass:"text--disabled",attrs:{dense:""}},[t._v("mdi-note-text-outline")]),t._v(" "),e("lock-info",{attrs:{value:n.note.lock_info}}),t._v("\n          "+t._s(n.note.title)+"\n        ")],1)],1),t._v(" "),n.note.status_emoji?e(c.a,{staticClass:"emoji-status"},[e("s-emoji",{attrs:{value:n.note.status_emoji,small:""}})],1):t._e()],1),t._v(" "),t.isExpanded(n.note)?e(l.a,{staticClass:"pt-0 pb-0",attrs:{dense:""}},[e("notes-sortable-list",{staticClass:"child-list",attrs:{value:n.children||[],disabled:t.disabled,"to-prefix":t.toPrefix},on:{input:function(e){return t.updateChildren(n,e)},"update:note":function(e){return t.$emit("update:note",e)}}})],1):t._e()],1)})),0)}),[],!1,null,"11021e93",null);e.default=component.exports;installComponents(component,{SEmoji:n(847).default,LockInfo:n(933).default,NotesSortableList:n(988).default})}}]);
//# sourceMappingURL=7c2b714.js.map