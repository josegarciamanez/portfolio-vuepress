(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{115:function(t,e,i){},122:function(t,e,i){"use strict";var n=i(115);i.n(n).a},130:function(t,e,i){"use strict";i.r(e);var n={props:{logo:{type:String,required:!1},sticky:{type:Boolean,required:!1}},data:function(){return{mobileNavActive:!1}},computed:{navLinks:function(){return this.$site.themeConfig.nav}},methods:{toggleMobileNav:function(){this.mobileNavActive=!this.mobileNavActive}}},a=(i(122),i(10)),l=Object(a.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header",style:t.sticky&&{position:"relative",top:"0",left:"0",width:"100%"}},[t.navLinks?i("nav",{staticClass:"navigation left desktop-nav"},[i("ul",[t._l(t.navLinks,function(e){return"left"!==e.position||e.external?t._e():i("router-link",{key:e.text,attrs:{tag:"li",to:e.link,"active-class":"active"},domProps:{textContent:t._s(e.text)}})}),t._v(" "),t._l(t.navLinks,function(e){return"left"===e.position&&e.external?i("li",[i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.text))])]):t._e()})],2)]):t._e(),t._v(" "),i("div",{staticClass:"brand"},[i("router-link",{attrs:{to:"/"}},[t.logo?i("div",{staticClass:"logo",style:{backgroundImage:"url("+t.logo+")"},attrs:{title:t.$site.title}}):i("span",[t._v(t._s(t.$site.title))])])],1),t._v(" "),t.navLinks?i("nav",{staticClass:"navigation right desktop-nav"},[i("ul",[t._l(t.navLinks,function(e){return"right"!==e.position||e.external?t._e():i("router-link",{key:e.text,attrs:{tag:"li",to:e.link,"active-class":"active",exact:""},domProps:{textContent:t._s(e.text)}})}),t._v(" "),t._l(t.navLinks,function(e){return"right"===e.position&&e.external?i("li",[i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.text))])]):t._e()})],2)]):t._e(),t._v(" "),i("div",{staticClass:"mobile-nav-toggle",on:{click:t.toggleMobileNav}}),t._v(" "),i("div",{staticClass:"mobile-nav",class:{"mobile-nav--active":t.mobileNavActive}},[i("nav",[i("ul",{on:{click:t.toggleMobileNav}},[t._l(t.navLinks,function(e){return e.external?t._e():i("router-link",{key:e.text,attrs:{tag:"li",to:e.link,"active-class":"active",exact:""},domProps:{textContent:t._s(e.text)}})}),t._v(" "),t._l(t.navLinks,function(e){return e.external?i("li",{on:{click:t.toggleMobileNav}},[i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.text))])]):t._e()})],2),t._v(" "),i("div",{staticClass:"mobile-nav-close",on:{click:t.toggleMobileNav}})])])])},[],!1,null,"fda1d72e",null);l.options.__file="Navbar.vue";e.default=l.exports}}]);