(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-208952f7"],{"00cc":function(n,t,a){"use strict";var e=function(){var n=this,t=n._self._c;return t("div",[t("nav",[t("div",{staticClass:"nav-wrap"},[t("div",{staticClass:"nav-left"},[t("div",{staticClass:"logo-wrap",on:{click:function(t){return n.logoClick()}}},[t("img",{attrs:{src:a("9d64"),alt:""}}),t("div",{staticClass:"logo-text"},[n._v("Embroidery.AI")])])]),t("div",{staticClass:"nav-right"},[t("img",{staticClass:"language-icon",attrs:{src:a("a709"),alt:""}}),t("div",{staticClass:"langue-wrap"},[t("el-select",{attrs:{placeholder:"Language"},on:{change:n.changeLanguage},model:{value:n.currentLanguage,callback:function(t){n.currentLanguage=t},expression:"currentLanguage"}},n._l(n.langueJson,(function(n,a){return t("el-option",{key:a,attrs:{label:n,value:a}})})),1)],1)])])])])},i=[],c=(a("14d9"),{zh:"简体中文",en:"English"}),o=a("fa7d"),s={name:"navBar",data:function(){return{currentLanguage:this.$i18n.locale,langueJson:c}},methods:{logoClick:function(){this.$router.push("/home")},apiClick:function(){this.$router.push("/api")},priceClick:function(){this.$router.push("/pricing")},changeLanguage:function(n){this.$i18n.locale=n,Object(o["b"])("langue",n,100)}},mounted:function(){}},u=s,r=(a("82a2"),a("2877")),l=Object(r["a"])(u,e,i,!1,null,"28dddebe",null);t["a"]=l.exports},"5ebb":function(n,t,a){"use strict";a.r(t);var e=function(){var n=this,t=n._self._c;return t("div",[t("navComponents"),t("h1",[n._v(" "+n._s(n.$t("imageEmApi"))+" ")]),t("h2",{staticClass:"forward"},[n._v(" "+n._s(n.$t("lookForward"))+" ")])],1)},i=[],c=a("00cc"),o={name:"api",components:{navComponents:c["a"]},computed:{},data:function(){return{}},methods:{},watch:{},mounted:function(){}},s=o,u=(a("f110"),a("2877")),r=Object(u["a"])(s,e,i,!1,null,"3ca494b6",null);t["default"]=r.exports},"82a2":function(n,t,a){"use strict";a("f5d0")},"9d64":function(n,t,a){n.exports=a.p+"img/logo.f76a14b9.png"},a709:function(n,t,a){n.exports=a.p+"img/language.d9debd56.svg"},d167:function(n,t,a){},f110:function(n,t,a){"use strict";a("d167")},f5d0:function(n,t,a){}}]);