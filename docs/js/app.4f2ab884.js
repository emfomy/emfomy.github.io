(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],p=0,m=[];p<s.length;p++)o=s[p],i[o]&&m.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0346":function(t,e,a){},"084d":function(t,e,a){"use strict";var n=a("d770"),i=a.n(n);i.a},"0e92":function(t,e,a){},"1f5e":function(t,e,a){"use strict";var n=a("0346"),i=a.n(n);i.a},"1f96":function(t,e,a){"use strict";var n=a("0e92"),i=a.n(n);i.a},"214f":function(t,e,a){"use strict";var n=a("fa3d"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=a("5f5b");a("177c");n["default"].use(i["a"]);a("8e6e"),a("ac6a"),a("456d");var r=a("bd86"),o=a("b664"),s=a.n(o);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var u={name:"IconButton",render:function(t){return t(s.a,{props:c({},this.$props),class:["IconButton"]},[t("font-awesome-icon",{props:{icon:[this.faStyle,this.faIcon]},class:[{"mr-1":!!this.$slots.default}]}),this.$slots.default])},props:c({faIcon:String,faStyle:String},o["props"])},p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ButtonGroup"},[t._t("default")],2)},m=[],f={name:"ButtonGroup"},d=f,h=(a("ef63"),a("2877")),g=Object(h["a"])(d,p,m,!1,null,"5ccac83c",null),v=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Collapse border rounded"},[a("Opener",{ref:"opener",attrs:{target:t.name}}),a("b-collapse",{ref:"collapse",attrs:{id:t.name}},[t._t("default")],2)],1)},_=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.target,expression:"target"}],staticClass:"Opener text-center w-100 collapsed",attrs:{size:"sm",variant:"light"}},[a("font-awesome-icon",{staticClass:"OpenerInner1 text-primary",attrs:{icon:"chevron-down"}}),a("span",{staticClass:"OpenerText mx-2"}),a("font-awesome-icon",{staticClass:"OpenerInner2 text-primary",attrs:{icon:"chevron-down"}})],1)},w=[],k={name:"Opener",props:{target:String}},C=k,S=(a("1f96"),Object(h["a"])(C,y,w,!1,null,"09f43bf4",null)),x=S.exports,I={name:"Collapse",props:{name:String},components:{Opener:x}},j=I,P=Object(h["a"])(j,b,_,!1,null,null,null),B=P.exports;n["default"].component("IconButton",u),n["default"].component("ButtonGroup",v),n["default"].component("Collapse",B);var T=a("ad3d"),O=a("ecee"),M=a("c074"),A=a("b702"),z=a("f2d1");n["default"].component("font-awesome-icon",T["a"]),n["default"].component("font-awesome-layers",T["b"]),n["default"].component("font-awesome-layers-text",T["c"]),O["c"].add(M["a"]),O["c"].add(A["a"]),O["c"].add(z["a"]);var E=a("f13c"),G=a.n(E);n["default"].use(G.a,{duration:1e3});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{id:"app"}})},$=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Layout"},[a("b-button",{staticClass:"navbar-toggler navbar-light",attrs:{id:"toggler",variant:"outline-light",pressed:t.is_toggled},on:{"update:pressed":function(e){t.is_toggled=e}}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("b-container",{class:{"is-toggled":t.is_toggled},attrs:{id:"container",fluid:""}},[a("b-row",[a("div",{attrs:{id:"sidebar"}},[a("SideBar",{attrs:{role:"navigation","reset-toggle":t.resetToggle}})],1),a("div",{attrs:{id:"content"}},[a("Content",{attrs:{role:"main"}})],1)])],1),a("b-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#app",expression:"'#app'"}],attrs:{id:"back"},on:{click:t.resetToggle}},[a("font-awesome-icon",{staticClass:"fa-2x text-primary",attrs:{icon:"chevron-circle-up"}})],1)],1)},D=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"SideBar text-center d-flex flex-column p-3",attrs:{type:"light",variant:"milk-light"}},[a("div",{staticClass:"flex-fill w-100"},[a("b-navbar-brand",{staticClass:"pt-3"},[a("b-link",{attrs:{href:"/img/avatar.jpg",target:"_blank"}},[a("b-img",{staticClass:"h-50 w-50",attrs:{center:"",rounded:"circle",src:"/img/avatar.jpg"}})],1)],1),a("b-nav-text",{staticClass:"p-0"},[a("h3",[t._v("Mu Yang")]),a("p",[t._v("Research Assistant")]),a("hr")]),a("b-nav",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy"}],staticClass:"w-100",attrs:{pills:"",vertical:""}},[a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{href:"#about"},on:{click:t.resetToggle}},[t._v("\n        About\n      ")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#education",expression:"'#education'"}],attrs:{href:"#education"},on:{click:t.resetToggle}},[t._v("\n        Experiences\n      ")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#publication",expression:"'#publication'"}],attrs:{href:"#publication"},on:{click:t.resetToggle}},[t._v("\n        Publications\n      ")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#certificate",expression:"'#certificate'"}],attrs:{href:"#certificate"},on:{click:t.resetToggle}},[t._v("\n        Certificates\n      ")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project",expression:"'#project'"}],attrs:{href:"#project"},on:{click:t.resetToggle}},[t._v("\n        Projects\n      ")])],1)],1),a("div",{staticClass:"w-100 mt-3"},[a("div",{staticClass:"d-block",on:{mouseleave:t.iconTextOff}},[a("b-nav-text",{staticClass:"IconText text-nowrap p-0",domProps:{innerHTML:t._s(t.icon_text)}}),a("div",{staticClass:"d-flex justify-content-around my-1"},t._l(t.icon_list,function(e,n){return a("b-link",{key:n,attrs:{href:e.href,target:"_blank"},on:{mouseenter:function(a){return t.iconTextOn(e)},touchstart:function(a){return t.iconTextOn(e)}}},["ai"==e.type?a("i",{staticClass:"ai ai-fw",class:"ai-"+e.icon}):a("font-awesome-icon",{staticClass:"fa-fw",attrs:{icon:[e.style,e.icon]}})],1)}),1)],1),a("hr"),a("footer",[a("small",[a("span",{staticClass:"text-muted"},[t._v("© Mu Yang. All rights reserved.")])])])])])},W=[],H=(a("d34a"),{name:"SideBar",props:{resetToggle:Function},data:function(){return{icon_text:" ",icon_list:{email:{icon:"envelope",style:"fas",href:"mailto:emfomy@gmail.com",text:"emfomy@gmail.com"},phone:{icon:"phone",style:"fas",href:"tel:+886-2-27883799;ext=1562",text:"+886 (2) 2788-3799 ext. 1562"},github:{icon:"github",style:"fab",href:"//github.com/emfomy",text:"github.com/emfomy"},pypi:{icon:"python",style:"fab",href:"//pypi.org/user/emfomy",text:"pypi.org/user/emfomy"},linkedin:{icon:"linkedin-in",style:"fab",href:"//www.linkedin.com/in/emfomy",text:"www.linkedin.com/in/emfomy"},facebook:{icon:"facebook-f",style:"fab",href:"//www.facebook.com/emfomy",text:"www.facebook.com/emfomy"},orcid:{icon:"orcid",type:"ai",href:"//orcid.org/0000-0001-6404-7842",text:"0000-0001-6404-7842"}}}},methods:{iconTextOn:function(t){this.icon_text=t.text},iconTextOff:function(){this.icon_text=" "}}}),Y=H,R=(a("5b91"),Object(h["a"])(Y,L,W,!1,null,"1bb0b160",null)),J=R.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"Content px-0 px-md-3"},[a("About",{ref:"about",attrs:{id:"about"}}),a("b-container",[a("b-row",[a("Education",{ref:"education",staticClass:"col-12 col-xl-6",attrs:{id:"education"}}),a("Employment",{ref:"employment",staticClass:"col-12 col-xl-6",attrs:{id:"employment"}})],1)],1),a("Publication",{ref:"publication",attrs:{id:"publication"}}),a("Certificate",{ref:"certificate",attrs:{id:"certificate"}}),a("Project",{ref:"project",attrs:{id:"project"}})],1)},V=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",[a("template",{slot:"header"},[a("h1",[t._v("Mu Yang")]),a("h5",[t._v("Research Assistant, "),a("b-link",{attrs:{to:"https://ckip.iis.sinica.edu.tw",target:"_blank"}},[t._v("CKIP Lab")]),t._v(", "),a("b-link",{attrs:{to:"https://www.sinica.edu.tw/en",target:"_blank"}},[t._v("Academia Sinica")])],1)]),a("p",[t._v("I currently work as a research assistant at the "),a("b-link",{attrs:{to:"https://www.iis.sinica.edu.tw/index_en.html",target:"_blank"}},[t._v("Institute of Information Science, Academia Sinica")]),t._v(" at the "),a("b-link",{attrs:{to:"https://ckip.iis.sinica.eu.tw",target:"_blank"}},[t._v("Chinese Knowledge and Information Processing (CKIP) Lab")]),t._v(",  advised by "),a("b-link",{attrs:{to:"https://www.iis.sinica.edu.tw/pages/ma/"}},[t._v("Dr. Wei-Yun Ma")]),t._v(", whose research interest is in natural language processing and computational linguistics.")],1),a("p",[t._v("Previously, I received my master degree at "),a("b-link",{attrs:{to:"http://www.math.ntu.edu.tw/~iams/eng",target:"_blank"}},[t._v("Institute of Applied Mathematical Sciences, National Taiwan University")]),t._v(" at the "),a("b-link",{attrs:{to:"https://meda.ai",target:"_blank"}},[t._v("Medical Data Analytics (MeDA) Lab")]),t._v(", advised by "),a("b-link",{attrs:{to:"http://www.math.ntu.edu.tw/~wwang/",target:"_blank"}},[t._v("Dr. Weichung Wang")]),t._v(", whose research interest is in GPU and high-performance computing, data-driven modeling, and medical data analytics.")],1),a("p",[t._v("I have a working experiences at "),a("b-link",{attrs:{to:"http://www.watson.ibm.com/",target:"_blank"}},[t._v("Thomas J. Watson Research Center, IBM Corporation")]),t._v(" as an internship.")],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/resume.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n    Résumé\n  ")])],2)},Q=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"Section container p-3 p-md-4 p-lg-5"},[a("header",{staticClass:"mb-3 mb-md-4 text-center"},[t._t("header")],2),t._t("default")],2)},q=[],Z={name:"Section"},tt=Z,et=Object(h["a"])(tt,X,q,!1,null,null,null),at=et.exports,nt={name:"About",components:{Section:at}},it=nt,rt=Object(h["a"])(it,K,Q,!1,null,null,null),ot=rt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",{staticClass:"Certificate"},[a("template",{slot:"header"},[a("h2",[t._v("Certificates & Awards")]),a("p")]),a("Card3",{attrs:{id:"award-fgc"}},[a("header",[a("h4",[t._v("Top 2 Short Answer, Top 3 Multiple Choice, Out of 143 Teams.")]),a("p",[t._v("2018–2019, Formosa Grand Challenge (Chinese TOEFL-like listening comprehension QA).")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://fgc.stpi.narl.org.tw/news/newsDetail?id=4b11413069b2d4110169b3d72dfa0002",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}},[t._v("\n        Official Post\n      ")])],1)]),a("Card3",{attrs:{id:"award-tjjw-jsam-2016"}},[a("header",[a("h4",[t._v("Presentation Excellence Award")]),a("p",[t._v("2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"},nativeOn:{click:function(e){return t.scrollPublication("#publication-tjjw-jsam-2016")}}},[t._v("\n        More\n      ")])],1)]),a("Card3",{attrs:{id:"certificate-gre"}},[a("header",[a("h4",[t._v("GRE Mathematics Subject Test")]),a("p",[t._v("2018, Score 840, Percentile 84%.")])])])],2)},lt=[],ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"Card3 p-3 p-lg-4"},[t._t("default")],2)},ut=[],pt={name:"Card3",props:{title:{style:String,default:""},author:{style:String,default:""},publish:{style:String,default:""},imgSrc:String,imgLink:String,imgTarget:{style:String,default:"_blank"}}},mt=pt,ft=(a("084d"),Object(h["a"])(mt,ct,ut,!1,null,"74b6cdea",null)),dt=ft.exports,ht={name:"Certificate",components:{Section:at,Card3:dt},methods:{scrollPublication:function(t){var e=this;this.$parent.$refs.publication.$refs.collapse.$refs.collapse.show=!0,this.$nextTick(function(){e.$scrollTo(t)})}}},gt=ht,vt=(a("214f"),Object(h["a"])(gt,st,lt,!1,null,"4363f224",null)),bt=vt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",[a("template",{slot:"header"},[a("h2",[t._v("Educations")]),a("p")]),a("Card1",{attrs:{year:"2015-2017",title:"Master of Science",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[a("b-link",{attrs:{href:"http://www.math.ntu.edu.tw/~iams/eng",target:"_blank"}},[t._v("Institute of Applied Mathematical Sciences")]),t._v(","),a("br"),t._v("National Taiwan University, Taipei, Taiwan")],1)],2),a("Card1",{attrs:{year:"2011-2015",title:"Bachelor of Science",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[a("b-link",{attrs:{href:"http://www.math.ntu.edu.tw/en",target:"_blank"}},[t._v("Department of Mathematics")]),t._v(","),a("br"),t._v("National Taiwan University, Taipei, Taiwan")],1)],2)],2)},yt=[],wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"my-1 my-md-3"},[a("header",{staticClass:"d-flex"},[a("div",{staticClass:"Logo d-flex align-items-center justify-content-center h-100 mr-3 my-1"},[t.imgSrc?a("b-img",{staticClass:"mh-100 mw-100",attrs:{center:"",src:t.imgSrc}}):t._e()],1),a("div",[a("h4",[t._v(t._s(t.year)+" | "+t._s(t.institution)),a("br"),t._v(t._s(t.title))]),a("p",[t._t("description")],2)])]),t._t("default")],2)},kt=[],Ct={name:"Card1",props:{year:{style:String,defulat:""},title:{style:String,defulat:""},institution:{style:String,defulat:""},imgSrc:String}},St=Ct,xt=(a("72b8"),Object(h["a"])(St,wt,kt,!1,null,"13133f5a",null)),It=xt.exports,jt={name:"Education",components:{Section:at,Card1:It}},Pt=jt,Bt=Object(h["a"])(Pt,_t,yt,!1,null,null,null),Tt=Bt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",[a("template",{slot:"header"},[a("h2",[t._v("Employments")]),a("p")]),a("Card1",{attrs:{year:"2017-Pres.",title:"Research Assistant",institution:"Academia Sinica","img-src":"/img/sinica_logo.png"}},[a("template",{slot:"description"},[a("b-link",{attrs:{href:"http://ckip.iis.sinica.edu.tw",target:"_blank"}},[t._v("CKIP Lab")]),t._v(", "),a("b-link",{attrs:{href:"https://www.iis.sinica.edu.tw/index_en.html",target:"_blank"}},[t._v("Institute of Information Science")]),t._v(","),a("br"),t._v("Academia Sinica, Taipei, Taiwan")],1)],2),a("Card1",{attrs:{year:"2015-2015",title:"Internship",institution:"IBM Corp.","img-src":"/img/ibm_logo.png"}},[a("template",{slot:"description"},[a("b-link",{attrs:{href:"http://www.watson.ibm.com",target:"_blank"}},[t._v("Thomas J. Watson Research Center")]),t._v(","),a("br"),t._v("IBM, Yorktown Heights, NY, USA")],1)],2),a("Collapse",{attrs:{name:"employment-more"}},[a("Card1",{attrs:{year:"2013-2017",title:"Research Assistant",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[t._v("Supervised by Prof. Weichung Wang"),a("br"),a("b-link",{attrs:{href:"https://meda.ai",target:"_blank"}},[t._v("MeDA Lab")]),t._v(", "),a("b-link",{attrs:{href:"http://www.math.ntu.edu.tw/~iams/eng",target:"_blank"}},[t._v("Institute of Applied Mathematical Sciences")]),t._v(", National Taiwan University, Taipei, Taiwan"),a("br"),a("i",[t._v("conducting researches of parallel computing of large-scale hybrid CPU-GPU clusters")])],1)],2),a("Card1",{attrs:{year:"2016-2016",title:"Research Assistant",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[t._v("Supervised by Prof. Semin Kim"),a("br"),a("b-link",{attrs:{href:"http://www.econ.ntu.edu.tw/?locale=en",target:"_blank"}},[t._v("Department of Economics")]),t._v(", National Taiwan University, Taipei, Taiwan"),a("br"),a("i",[t._v("conducting researches of ordinal versus cardinal voting rules")])],1)],2),a("Card1",{attrs:{year:"2015-2017",title:"Research Assistant",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[a("i",[t._v("Software Development for Computational and Data Science, High Performance Computing and Deep Learning, Introduction to Computational & Data Sciences, Introduction to Scientific Computing, Numerical Linear Algebra, Introduction to Computational Mathematics, Computer Programming, Mathematic Software, Calculus")])])],2)],1)],2)},Mt=[],At={name:"Employment",components:{Section:at,Card1:It}},zt=At,Et=Object(h["a"])(zt,Ot,Mt,!1,null,null,null),Gt=Et.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",{staticClass:"Project"},[a("template",{slot:"header"},[a("h2",[t._v("Projects")]),a("p")]),a("Card3",{attrs:{id:"project-ehn"}},[a("header",[a("h4",[t._v("E-HowNet Parsing and Visualization")]),a("p",[t._v("2018-2019")])]),a("p",[t._v("\n      A Parser for "),a("b-link",{attrs:{to:"http://ehownet.iis.sinica.edu.tw",target:"_blank"}},[t._v("E-HowNet")]),t._v(", and the visualization demo.\n    ")],1),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/ehownet",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github (Parser)\n      ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"http://ckip.iis.sinica.edu.tw/service/ehnvis",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n        Demo\n      ")]),a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/ehn-demo",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          Github (Demo)\n        ")])],1)],1)],1),a("Card3",{attrs:{id:"project-ckip-nlp"}},[a("header",[a("h4",[t._v("CKIP Word-Segmentation and Parser Python API")]),a("p",[t._v("2018-2019")])]),a("p",[t._v("\n      A Python API for CKIP "),a("b-link",{attrs:{to:"http://ckipsvr.iis.sinica.edu.tw",target:"_blank"}},[t._v("Word-Segmentation")]),t._v(" and "),a("b-link",{attrs:{to:"http://parser.iis.sinica.edu.tw",target:"_blank"}},[t._v("Sentence-Parsing")]),t._v(".\n    ")],1),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://pypi.org/project/ckipnlp",target:"_blank","fa-icon":"python","fa-style":"fab"}},[t._v("\n        PyPI\n      ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/ckipnlp",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")])],1)],1),a("Card3",{attrs:{id:"project-hwe"}},[a("header",[a("h4",[t._v("HWE: Heterogeneous Word Embedding")]),a("p",[t._v("2017-2018")])]),a("p",[t._v("\n      A general and flexible framework of word embeddings to incorporate each type (e.g. word-sense, part-of-speech, topic) of contextual feature for learning feature-specific word embeddings in an explicit fashion.\n    ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/icsc_2019_hwe.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper (ICSC 2019)\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"https://doi.org/10.1109/ICOSC.2019.8665508",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/hwe",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")])],1)],1),a("Card3",{attrs:{id:"project-cosmel"}},[a("header",[a("h4",[t._v("CosmEL: Cosmetic Entity Linking")]),a("p",[t._v("2017-2018")])]),a("p",[t._v("\n      An industrial-academic project with "),a("b-link",{attrs:{to:"https://www.pixnet.net",target:"_blank"}},[t._v("PIXNET")]),t._v(". Cosmetics domain entity linking."),a("br"),t._v("\n      My work including data analysis, data preprocessing, programming design, model design, Python code implementation.\n    ")],1)]),a("Card3",{attrs:{id:"project-isvd"}},[a("header",[a("h4",[t._v("iSVD: Integrated Singular Value Decomposition Algorithm")]),a("p",[t._v("2015-Present")])]),a("p",[t._v("\n      iSVD is a parallel low-rank approximate singular value decomposition solver using integrated randomized algorithm for multinode systems."),a("br"),t._v("\n      My work including algorithm modifying, programming design, C++ code implementation.\n    ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ntu_thesis_2017_isvd.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper (NTU Thesis)\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"https://doi.org/10.6342/NTU201702960",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/isvd",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")])],1)],1),a("Card3",{attrs:{id:"project-pass"}},[a("header",[a("h4",[t._v("PaSS: Particle Swarm Stepwise Algorithm")]),a("p",[t._v("2013-2015")])]),a("p",[t._v("\n      PaSS is a parallel stochastic search algorithm for information criterion variable selection problems on multinode systems."),a("br"),t._v("\n      My work including programming design, CUDA & C++ code implementation, non-general model developing and implementation.\n    ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ieee_cse_2016_pass.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper (CIT 2016)\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"https://doi.org/10.1109/CIT.2016.101",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/pass",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")])],1)],1),a("Collapse",{ref:"collapse",staticClass:"mt-4",attrs:{name:"project-more"}},[a("Card3",{attrs:{id:"project-voting"}},[a("header",[a("h4",[t._v("Ordinal Versus Cardinal Voting Rules")]),a("p",[t._v("2016")])]),a("p",[t._v("\n        A research about the performance and incentive compatibility of voting rules in a Bayesian environment."),a("br"),t._v("\n        My work including numerical analysis and MATLAB code implementation.\n      ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/other/geb_2017_voting.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n            Paper (GEB 2017)\n          ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"https://doi.org/10.1016/j.geb.2017.04.012",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1)],1)],1),a("Card3",{attrs:{id:"project-his"}},[a("header",[a("h4",[t._v("HiS: Hierarchical Schur Solver")]),a("p",[t._v("2015-2016")])]),a("p",[t._v("\n        HiS is a direct linear solver exploiting the sparse structure of multilevel nested dissection matrix to maximize parallel scalability on multinode GPU clusters."),a("br"),t._v("\n        My work including algorithm modifying, C++ code implementation, matrix structure and operation forming.\n      ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/other/ntu_thesis_2016_his.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n            Paper\n          ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"http://www.airitilibrary.com/Publication/alDetailedMesh1?DocID=U0001-2412201522263000",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://bitbucket.org/nanaHa1003/his",target:"_blank","fa-icon":"bitbucket","fa-style":"fab"}},[t._v("\n          BitBucket\n        ")])],1)],1),a("Card3",{attrs:{id:"project-hhis"}},[a("header",[a("h4",[t._v("hHiS: Hybrid Hierarchical Schur Solver")]),a("p",[t._v("2014-2016")])]),a("p",[t._v("\n        hHiS is a parallel linear system solver for sparse symmetric positive definite matrices using direct/iterative method on each parts of k-way vertex partitioning to maximize parallel scalability on multinode systems."),a("br"),t._v("\n        My work including theoretical researching, algorithm modifying, programming design, C++ code implementation.\n      ")])]),a("Card3",{attrs:{id:"project-nbfmm"}},[a("header",[a("h4",[t._v("NBFMM: N-Body Simulation Using Fast Multipole Method with CUDA GPU")]),a("p",[t._v("2016")])]),a("p",[t._v("\n        An n-body simulation using fast multipole method (FMM) with GPU acceleration."),a("br"),t._v("\n        My work including project leading, C++ code implementation, CUDA GPU code implementation, and data structure designing.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://sites.google.com/site/nbfmmprojectforgpuprograming",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Website\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/nbfmm",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          GitHub\n        ")])],1)],1),a("Card3",{attrs:{id:"project-dsa"}},[a("header",[a("h4",[t._v("Bank Account Management System Project")]),a("p",[t._v("2015")])]),a("p",[t._v("\n        A bank account management system."),a("br"),t._v("\n        My work including programming design, data structure developing, C++ code implementation, and team management.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/dsa_final",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          GitHub\n        ")])],1)],1),a("Card3",{attrs:{id:"project-wtf"}},[a("header",[a("h4",[t._v("Wonderful Transportation Forming")]),a("p",[t._v("2013")])]),a("p",[t._v("\n        A city traffic simulation of pedestrian, vehicle, and public transportation."),a("br"),t._v("\n        My work including programming design, data structure developing, Java code implementation, MATLAB GUI code modifying, and team management.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://sites.google.com/site/wonderfultf",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Website\n        ")])],1)],1),a("Card3",{attrs:{id:"project-assembly"}},[a("header",[a("h4",[t._v("The Matrix Project")]),a("p",[t._v("2012")])]),a("p",[t._v("\n        A linear algebra library implemented with assembly language."),a("br"),t._v("\n        My work including programming design, data structure developing, Intel assembly code & main C code implementation, and team management.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://sites.google.com/site/tragedytriangle",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Website\n        ")])],1)],1),a("Card3",[a("header",{attrs:{id:"project-chessai"}},[a("h4",[t._v("Chess AI Project")]),a("p",[t._v("2007")])]),a("p",[t._v("\n        A chess game program with an AI that can defeat me."),a("br"),t._v("\n        My work including programming design, algorithm developing, data structure developing, C & Java code implementation, and Java GUI modifying.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/chess_ai",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          GitHub\n        ")])],1)],1)],1)],2)},$t=[],Ut={name:"Project",components:{Section:at,Card3:dt}},Dt=Ut,Lt=(a("8edd"),Object(h["a"])(Dt,Nt,$t,!1,null,"38e5543e",null)),Wt=Lt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",{staticClass:"Publication"},[a("template",{slot:"header"},[a("h2",[t._v("Publications & Conferences")]),a("p")]),a("Card2",{attrs:{id:"publication-icsc-2019",src:"/img/icsc_2019.png",href:"https://semanticcomputing.wixsite.com/icsc-2019"}},[a("header",[a("h4",[t._v("HWE: Word Embedding with Heterogeneous Features")]),a("p",[t._v("Jhih-Sheng Fan, Mu Yang, Peng-Hsuan Li and Wei-Yun Ma"),a("br"),t._v("2019, 13th IEEE International Conference on Semantic Computing (ICSC2019)")])]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/icsc_2019_hwe.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"https://doi.org/10.1109/ICOSC.2019.8665508",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/hwe",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://semanticcomputing.wixsite.com/icsc-2019",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n        Conference\n      ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-hwe",expression:"'#project-hwe'"}],attrs:{size:"sm",variant:"outline-primary",href:"","fa-icon":"info","fa-style":"fas"}},[t._v("\n        More\n      ")])],1)],1),a("Card2",{attrs:{id:"publication-ntu-thesis",src:"/img/ntu_banner.png",srcSide:"/img/ntu_logo.png",href:"https://doi.org/10.6342/NTU201702960"}},[a("header",[a("h4",[t._v("Highly Scalable Parallelism of Integrated Randomized Singular Value Decomposition with Big Data Applications")]),a("p",[t._v("Mu Yang"),a("br"),t._v("2017, Master's Thesis, National Taiwan University")])]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ntu_thesis_2017_isvd.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"https://doi.org/10.6342/NTU201702960",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/isvd",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-isvd",expression:"'#project-isvd'"}],attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"}},[t._v("\n        More\n      ")])],1)],1),a("Card2",{attrs:{id:"publication-ieee-cit-2016",src:"/img/ieee_cit_2016.png",href:"http://nsclab.org/cit2016"}},[a("header",[a("h4",[t._v("Particle Swarm Stepwise Algorithm (PaSS) on Multicore Hybrid CPU-GPU Clusters")]),a("p",[t._v("Mu Yang, Ray-Bing Chen, I-Hsin Chung, and Weichung Wang"),a("br"),t._v("2016, 16th IEEE International Conference on Computer and Information Technology (CIT2016)")])]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ieee_cse_2016_pass.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"https://doi.org/10.1109/CIT.2016.101",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/pass",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"http://nsclab.org/cit2016",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n        Conference\n      ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-pass",expression:"'#project-pass'"}],attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"}},[t._v("\n        More\n      ")])],1)],1),a("Card2",{attrs:{id:"publication-siam-cse-2017",src:"/img/siam_cse_2017.jpg",href:"https://archive.siam.org/meetings/cse17/"}},[a("header",[a("h4",[t._v("Parallel Implementations of Integrated Singular Value Decomposition (iSVD)")]),a("p",[t._v("Mu Yang, Su-Yun Huang, Ting-Li Chen, and Weichung Wang"),a("br"),t._v("2017, 9th SIAM Conference on Computational Science and Engineering (CSE2017)")])]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://github.com/emfomy/isvd",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"https://archive.siam.org/meetings/cse17/",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n        Conference\n      ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-isvd",expression:"'#project-isvd'"}],attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"}},[t._v("\n        More\n      ")])],1)],1),a("Collapse",{ref:"collapse",staticClass:"mt-4",attrs:{name:"publication-more"}},[a("Card2",{attrs:{id:"publication-tjjw-jsam-2016",src:"/img/tjjw_jsam_2016.png",href:"http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54"}},[a("header",[a("h4",[t._v("A Parallel and Hybrid Sparse Linear System Solver")]),a("p",[t._v("Mu Yang and Weichung Wang"),a("br"),t._v("2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics")])]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Workshop\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Presentation Excellence Award",size:"sm",variant:"outline-primary","fa-icon":"award","fa-style":"fas"}},[t._v("\n          Award\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"},nativeOn:{click:function(e){return t.scrollProject("#project-hhis")}}},[t._v("\n          More\n        ")])],1)],1)],1)],2)},Yt=[],Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"Card2 p-3 p-lg-4"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center justify-content-center mb-3 mb-lg-0",attrs:{cols:"12",lg:"3"}},[a("b-link",{attrs:{href:t.href,target:t.target,disabled:void 0===t.href}},[t.src?a("picture",[t.srcSide?a("source",{attrs:{media:"(min-width: 992px)",srcset:t.srcSide}}):t._e(),a("b-img",{staticClass:"mh-100 mw-100",attrs:{center:"",rounded:"",fluid:"",src:t.src}})],1):t._e()])],1),a("b-col",{attrs:{cols:"12",lg:"9"}},[t._t("default")],2)],1)],1)},Jt=[],Ft={name:"Card2",props:{src:String,srcSide:String,href:String,target:{style:String,default:"_blank"}}},Vt=Ft,Kt=Object(h["a"])(Vt,Rt,Jt,!1,null,null,null),Qt=Kt.exports,Xt={name:"Publication",components:{Section:at,Card2:Qt},methods:{scrollProject:function(t){var e=this;this.$parent.$refs.project.$refs.collapse.$refs.collapse.show=!0,this.$nextTick(function(){e.$scrollTo(t)})}}},qt=Xt,Zt=(a("d3a5"),Object(h["a"])(qt,Ht,Yt,!1,null,"6b419eec",null)),te=Zt.exports,ee={name:"Content",components:{About:ot,Education:Tt,Certificate:bt,Employment:Gt,Publication:te,Project:Wt}},ae=ee,ne=(a("5ad7"),Object(h["a"])(ae,F,V,!1,null,"12bc06e0",null)),ie=ne.exports,re={name:"Layout",components:{SideBar:J,Content:ie},data:function(){return{is_toggled:!1}},methods:{resetToggle:function(){this.is_toggled=!1}}},oe=re,se=(a("1f5e"),Object(h["a"])(oe,U,D,!1,null,"69a111cf",null)),le=se.exports,ce={name:"app",components:{Layout:le}},ue=ce,pe=Object(h["a"])(ue,N,$,!1,null,null,null),me=pe.exports;a("c1c3");n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(me)}}).$mount("#app")},"5ad7":function(t,e,a){"use strict";var n=a("7d3f"),i=a.n(n);i.a},"5b91":function(t,e,a){"use strict";var n=a("8316"),i=a.n(n);i.a},"5c3a":function(t,e,a){},"6d4c":function(t,e,a){},"72b8":function(t,e,a){"use strict";var n=a("6d4c"),i=a.n(n);i.a},"7d3f":function(t,e,a){},8316:function(t,e,a){},"8edd":function(t,e,a){"use strict";var n=a("cd13"),i=a.n(n);i.a},c1c3:function(t,e,a){},cd13:function(t,e,a){},d34a:function(t,e,a){},d3a5:function(t,e,a){"use strict";var n=a("5c3a"),i=a.n(n);i.a},d770:function(t,e,a){},ef63:function(t,e,a){"use strict";var n=a("f7b2"),i=a.n(n);i.a},f7b2:function(t,e,a){},fa3d:function(t,e,a){}});
//# sourceMappingURL=app.4f2ab884.js.map