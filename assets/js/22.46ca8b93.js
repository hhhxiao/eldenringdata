(window.webpackJsonp=window.webpackJsonp||[]).push([[22,29,31,51,54],{243:function(t,e,n){"use strict";function a(t){return decodeURI(t).replace(e.hashRE,"").replace(e.extRE,"")}function i(t){const n=t.match(e.hashRE);if(n)return n[0]}function s(t){return e.outboundRE.test(t)}function r(t){if(s(t))return t;const n=t.match(e.hashRE),i=n?n[0]:"",r=a(t);return e.endingSlashRE.test(r)?t:r+".html"+i}function l(t,e,n){if(s(e))return{type:"external",path:e};n&&(e=function(t,e,n=!1){const a=t.charAt(0);if("/"===a)return t;if("?"===a||"#"===a)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const i=a(e);for(let e=0;e<t.length;e++)if(a(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:r(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function o(t){const e=c(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function c(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function p(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const a in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(a)))return{base:a,config:e[a]};var n;return{}}n(91),Object.defineProperty(e,"__esModule",{value:!0}),e.resolveMatchingConfig=e.resolveNavLinkItem=e.groupHeaders=e.resolveSidebarItems=e.resolvePage=e.isActive=e.ensureExt=e.isTel=e.isMailto=e.isExternal=e.getHash=e.normalize=e.outboundRE=e.endingSlashRE=e.extRE=e.hashRE=void 0,e.hashRE=/#.*$/,e.extRE=/\.(md|html)$/,e.endingSlashRE=/\/$/,e.outboundRE=/^[a-z]+:/i,e.normalize=a,e.getHash=i,e.isExternal=s,e.isMailto=function(t){return/^mailto:/.test(t)},e.isTel=function(t){return/^tel:/.test(t)},e.ensureExt=r,e.isActive=function(t,e){const n=decodeURIComponent(t.hash),s=i(e);return(!s||n===s)&&a(t.path)===a(e)},e.resolvePage=l,e.resolveSidebarItems=function(t,e,n,a){const{pages:i,themeConfig:s}=n,r=a&&s.locales&&s.locales[a]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return o(t);const c=r.sidebar||s.sidebar;if(c){const{base:n,config:a}=p(e,c);return"auto"===a?o(t):a?a.map(t=>function t(e,n,a,i=1){if("string"==typeof e)return l(n,e,a);if(Array.isArray(e))return Object.assign(l(n,e[0],a),{title:e[1]});{const s=e.children||[];return 0===s.length&&e.path?Object.assign(l(n,e.path,a),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map(e=>t(e,n,a,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]},e.groupHeaders=c,e.resolveNavLinkItem=function(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})},e.resolveMatchingConfig=p},249:function(t,e){t.exports=function(t){return null==t}},254:function(t,e,n){},255:function(t,e,n){},267:function(t,e,n){"use strict";n.r(e);var a={name:"FluentWindowDevEdit20Regular"},i=n(15),s=Object(i.a)(a,(function(){var t=this._self._c;return t("svg",{attrs:{width:"1em",height:"1em",viewBox:"0 0 20 20"}},[t("g",{attrs:{fill:"none"}},[t("path",{attrs:{d:"M4.5 2A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h4.975c.11-.361.283-.7.51-1H4.5A1.5 1.5 0 0 1 3 13.5V5.999h12v3.944l.102-.102c.266-.267.572-.47.898-.61V4.5A2.5 2.5 0 0 0 13.5 2h-9zM2.999 4.499a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v.5h-12v-.5zm5.353 2.646a.5.5 0 0 1 0 .707L6.206 10l2.146 2.146a.5.5 0 0 1-.707.707l-2.5-2.5a.5.5 0 0 1 0-.707l2.5-2.5a.5.5 0 0 1 .707 0zm1.794 5a.5.5 0 0 0 .708.707l2.5-2.5a.5.5 0 0 0 0-.707l-2.5-2.5a.5.5 0 0 0-.708.707L12.293 10l-2.147 2.146zm5.663-1.597l-4.83 4.83a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374c.386-.097.739-.296 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644z",fill:"currentColor"}})])])}),[],!1,null,null,null);e.default=s.exports},271:function(t,e,n){"use strict";n.r(e);var a=n(15),i=Object(a.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{width:"1em",height:"1em",viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1a6.887 6.887 0 0 0 0 9.8c2.73 2.7 7.15 2.7 9.88 0c1.36-1.35 2.04-2.92 2.04-4.9h2c0 1.98-.88 4.55-2.64 6.29c-3.51 3.48-9.21 3.48-12.72 0c-3.5-3.47-3.53-9.11-.02-12.58a8.987 8.987 0 0 1 12.65 0L21 3v7.12M12.5 8v4.25l3.5 2.08l-.72 1.21L11 13V8h1.5z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=i.exports},283:function(t,e,n){"use strict";n(254)},284:function(t,e,n){var a=n(12),i=n(6),s=n(11);t.exports=function(t){return"string"==typeof t||!i(t)&&s(t)&&"[object String]"==a(t)}},285:function(t,e,n){"use strict";n(255)},286:function(t,e,n){},296:function(t,e,n){"use strict";n.r(e);var a=n(249),i=n.n(a),s=n(243),r=n(267),l=n(271),o={name:"PageEdit",components:{VPIconEdit:r.default,VPIconLastUpdated:l.default},computed:{enableLastUpdated(){return(!this.$frontmatter||!1!==this.$frontmatter.lastUpdated)&&!!this.$page.lastUpdated},lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=i()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:a="master",docsRepo:s=e}=this.$site.themeConfig;return t&&s&&this.$page.relativePath?this.createEditLink(e,s,n,a,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,a,i){if(/bitbucket.org/.test(e)){return e.replace(s.endingSlashRE,"")+"/src"+`/${a}/`+(n?n.replace(s.endingSlashRE,"")+"/":"")+i+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(s.endingSlashRE,"")+"/-/edit"+`/${a}/`+(n?n.replace(s.endingSlashRE,"")+"/":"")+i}return(s.outboundRE.test(e)?e:"https://github.com/"+e).replace(s.endingSlashRE,"")+"/edit"+`/${a}/`+(n?n.replace(s.endingSlashRE,"")+"/":"")+i}}},c=(n(283),n(15)),p=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("VPIconEdit",{staticClass:"edit-icon"}),t._v(" "),e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))])],1):t._e(),t._v(" "),t.enableLastUpdated?e("div",{staticClass:"last-updated"},[e("VPIconLastUpdated",{staticClass:"last-updated-icon"}),t._v(" "),e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])],1):t._e()])}),[],!1,null,null,null);e.default=p.exports},297:function(t,e,n){"use strict";n.r(e);n(91);var a=n(243),i=n(284),s=n.n(i),r=n(249),l=n.n(r);const o={title:"N/A",path:"N/A",class:"noop"};var c={name:"PageNav",props:["sidebarItems"],computed:{prev(){return u(p.PREV,this)||o},next(){return u(p.NEXT,this)||o}}};const p={NEXT:{resolveLink:function(t,e){return h(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return h(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function u(t,{$themeConfig:e,$page:n,$route:i,$site:r,sidebarItems:o}){const{resolveLink:c,getThemeLinkConfig:p,getPageLinkConfig:u}=t,h=p(e),d=u(n),f=l()(d)?h:d;return!1===f?void 0:s()(f)?Object(a.resolvePage)(r.pages,f,i.path):c(n,o)}function h(t,e,n){const a=[];!function t(e,n){for(let a=0,i=e.length;a<i;a++)"group"===e[a].type?t(e[a].children||[],n):n.push(e[a])}(e,a);for(let e=0;e<a.length;e++){const i=a[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return a[e+n]}}var d=c,f=(n(285),n(15)),g=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("div",{staticClass:"inner"},[t.prev?e("VPLink",{class:["prev",t.prev.class],attrs:{text:t.prev.title||t.prev.path,link:t.prev.path}},[e("span",{attrs:{slot:"before"},slot:"before"},[t._v("←")]),t._v(" "),e("span",{attrs:{slot:"after"},slot:"after"},[e("br"),t._v(" "),e("span",{staticClass:"prev-link"},[t._v(t._s(t.prev.path))])])]):t._e(),t._v(" "),t.next?e("VPLink",{class:["next",t.next.class],attrs:{text:t.next.title||t.next.path,link:t.next.path}},[e("span",{attrs:{slot:"after"},slot:"after"},[t._v("\n        →\n        "),e("br"),t._v(" "),e("span",{staticClass:"next-link"},[t._v(t._s(t.next.path))])])]):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=g.exports},312:function(t,e,n){"use strict";n(286)},342:function(t,e,n){"use strict";n.r(e);var a=n(296),i=n(297),s={components:{PageEdit:a.default,PageNav:i.default},props:["sidebarItems"],computed:{isHomepage(){return this.$route.path===this.$localeConfig.path},pageName(){return this.$route.path.replace(/\//g,"")}}},r=(n(312),n(15)),l=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("main",{class:["page",t.isHomepage?"homepage":"",t.$page.frontmatter.api?"enable-api":"",t.pageName]},[t._t("top"),t._v(" "),e("Content",{staticClass:"theme-default-content vp-doc"}),t._v(" "),!1!==this.$page.frontmatter.pageEdit?e("PageEdit"):t._e(),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=l.exports}}]);