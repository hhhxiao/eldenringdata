(window.webpackJsonp=window.webpackJsonp||[]).push([[30,36],{243:function(t,e,n){"use strict";function i(t){return decodeURI(t).replace(e.hashRE,"").replace(e.extRE,"")}function s(t){const n=t.match(e.hashRE);if(n)return n[0]}function o(t){return e.outboundRE.test(t)}function r(t){if(o(t))return t;const n=t.match(e.hashRE),s=n?n[0]:"",r=i(t);return e.endingSlashRE.test(r)?t:r+".html"+s}function l(t,e,n){if(o(e))return{type:"external",path:e};n&&(e=function(t,e,n=!1){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const e=o[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const s=i(e);for(let e=0;e<t.length;e++)if(i(t[e].regularPath)===s)return Object.assign({},t[e],{type:"page",path:r(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function c(t){const e=a(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function a(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function h(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}n(91),Object.defineProperty(e,"__esModule",{value:!0}),e.resolveMatchingConfig=e.resolveNavLinkItem=e.groupHeaders=e.resolveSidebarItems=e.resolvePage=e.isActive=e.ensureExt=e.isTel=e.isMailto=e.isExternal=e.getHash=e.normalize=e.outboundRE=e.endingSlashRE=e.extRE=e.hashRE=void 0,e.hashRE=/#.*$/,e.extRE=/\.(md|html)$/,e.endingSlashRE=/\/$/,e.outboundRE=/^[a-z]+:/i,e.normalize=i,e.getHash=s,e.isExternal=o,e.isMailto=function(t){return/^mailto:/.test(t)},e.isTel=function(t){return/^tel:/.test(t)},e.ensureExt=r,e.isActive=function(t,e){const n=decodeURIComponent(t.hash),o=s(e);return(!o||n===o)&&i(t.path)===i(e)},e.resolvePage=l,e.resolveSidebarItems=function(t,e,n,i){const{pages:s,themeConfig:o}=n,r=i&&o.locales&&o.locales[i]||o;if("auto"===(t.frontmatter.sidebar||r.sidebar||o.sidebar))return c(t);const a=r.sidebar||o.sidebar;if(a){const{base:n,config:i}=h(e,a);return"auto"===i?c(t):i?i.map(t=>function t(e,n,i,s=1){if("string"==typeof e)return l(n,e,i);if(Array.isArray(e))return Object.assign(l(n,e[0],i),{title:e[1]});{const o=e.children||[];return 0===o.length&&e.path?Object.assign(l(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:o.map(e=>t(e,n,i,s+1)),collapsable:!1!==e.collapsable}}}(t,s,n)):[]}return[]},e.groupHeaders=a,e.resolveNavLinkItem=function(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})},e.resolveMatchingConfig=h},258:function(t,e,n){},291:function(t,e,n){"use strict";n(258)},292:function(t,e,n){},299:function(t,e,n){"use strict";n.r(e);var i=n(243),s={props:["stick","tag"],data:()=>({needFloat:!1,stickBottom:0}),watch:{stick(){this.unStick(),this.stickHandle()}},methods:{stickHandle(){if(!this.stick)return;const t=Object(i.findContainerInVm)(this.stick,this);t&&(this._stickerScroll=()=>{const e=this.$el.getBoundingClientRect(),n=document.body.scrollTop+document.documentElement.scrollTop;this.needFloat=document.body.offsetHeight-n-e.height<t.offsetHeight,this.stickBottom=t.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))},unStick(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}},mounted(){this.stickHandle()},beforeDestroy(){this.unStick()}},o=(n(291),n(15)),r=Object(o.a)(s,(function(){return(0,this._self._c)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},315:function(t,e,n){"use strict";n(292)},345:function(t,e,n){"use strict";n.r(e);let i;function s(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var o={components:{Sticker:n(299).default},data:()=>({activeIndex:0}),computed:{visible(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex(){const t=(this.$refs.chairTocItem||[])[this.activeIndex];if(!t)return;const e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),i=e.top-n.top;i<20?this.$el.scrollTop=this.$el.scrollTop+i-20:i+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))},$route(){}},methods:{onScroll(){void 0===i&&(i=s(this.$el));const t=document.body.scrollTop+document.documentElement.scrollTop,e=this.$page.headers||[];let n=0;const o=t=>{this.activeIndex=t};for(;n<e.length;n++){if(!(s(document.getElementById(e[n].slug))-50<t)){n||o(n);break}o(n)}},triggerEvt(){this._onScroll(),this._onHashChange()}},mounted(){const t=()=>{this.$emit("visible-change",this.visible)};t(),this.$watch("visible",t),setTimeout(()=>this.triggerEvt(),1e3),this._onScroll=()=>this.onScroll(),this._onHashChange=()=>{const t=decodeURIComponent(location.hash.substring(1)),e=(this.$page.headers||[]).findIndex(e=>e.slug===t);e>=0&&(this.activeIndex=e);const n=t&&document.getElementById(t);n&&window.scrollTo(0,s(n)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)}},r=(n(315),n(15)),l=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.visible?e("Sticker",t._b({staticClass:"toc"},"Sticker",t.$attrs,!1),[e("div",{staticClass:"on-this-page"},[t._v("ON THIS PAGE")]),t._v(" "),t._l(t.$page.headers,(function(n,i){return e("div",{key:i,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+n.level,{active:t.activeIndex===i}]},[e("a",{attrs:{href:"#"+n.slug,title:n.title}},[t._v(t._s(n.title))])])}))],2):t._e()}),[],!1,null,null,null);e.default=l.exports}}]);