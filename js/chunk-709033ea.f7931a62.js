(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-709033ea"],{"00cc":function(t,a,n){"use strict";var e=function(){var t=this,a=t._self._c;return a("div",[a("nav",[a("div",{staticClass:"nav-wrap"},[a("div",{staticClass:"nav-left"},[a("div",{staticClass:"logo-wrap",on:{click:function(a){return t.logoClick()}}},[a("img",{attrs:{src:n("9d64"),alt:""}}),a("div",{staticClass:"logo-text"},[t._v("Embroidery.AI")])])]),a("div",{staticClass:"nav-right"},[a("img",{staticClass:"language-icon",attrs:{src:n("a709"),alt:""}}),a("div",{staticClass:"langue-wrap"},[a("el-select",{attrs:{placeholder:"Language"},on:{change:t.changeLanguage},model:{value:t.currentLanguage,callback:function(a){t.currentLanguage=a},expression:"currentLanguage"}},t._l(t.langueJson,(function(t,n){return a("el-option",{key:n,attrs:{label:t,value:n}})})),1)],1)])])])])},s=[],i=(n("14d9"),{zh:"简体中文",en:"English"}),c=n("fa7d"),o={name:"navBar",data:function(){return{currentLanguage:this.$i18n.locale,langueJson:i}},methods:{logoClick:function(){this.$router.push("/home")},apiClick:function(){this.$router.push("/api")},priceClick:function(){this.$router.push("/pricing")},changeLanguage:function(t){this.$i18n.locale=t,Object(c["b"])("langue",t,100)}},mounted:function(){}},l=o,u=(n("82a2"),n("2877")),r=Object(u["a"])(l,e,s,!1,null,"28dddebe",null);a["a"]=r.exports},"211d":function(t,a,n){"use strict";n("54a7")},"54a7":function(t,a,n){},"82a2":function(t,a,n){"use strict";n("f5d0")},"9d64":function(t,a,n){t.exports=n.p+"img/logo.f76a14b9.png"},"9daa":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t._self._c;return a("div",[a("navComponents"),a("h1",[t._v(" "+t._s(t.$t("pricing"))+" ")]),a("div",{staticClass:"middle-line"}),a("div",{staticClass:"wrap"},[a("div",{staticClass:"box box1"},[a("h3",[t._v(" "+t._s(t.$t("webapp"))+" "),a("small",[t._v(" "+t._s(t.$t("freeBeta"))+" ")])]),a("p",{staticClass:"comment"},[t._v(" "+t._s(t.$t("webAppText1"))+" ")]),a("p",{staticClass:"comment"},[t._v(" "+t._s(t.$t("webAppText2"))+" ")])]),a("div",{staticClass:"box"},[a("h3",[t._v(" "+t._s(t.$t("api"))+" "),a("small",[t._v(" "+t._s(t.$t("lookForward"))+" ")])])])])],1)},s=[],i=n("00cc"),c={name:"pricing",components:{navComponents:i["a"]},computed:{},data:function(){return{}},methods:{},watch:{},mounted:function(){}},o=c,l=(n("211d"),n("2877")),u=Object(l["a"])(o,e,s,!1,null,"cf4d671e",null);a["default"]=u.exports},a709:function(t,a,n){t.exports=n.p+"img/language.d9debd56.svg"},f5d0:function(t,a,n){}}]);