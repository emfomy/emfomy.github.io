(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],m=0,p=[];m<s.length;m++)o=s[m],i[o]&&p.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"084d":function(t,e,a){"use strict";var n=a("f324"),i=a.n(n);i.a},"10e7":function(t,e,a){"use strict";var n=a("1ba4"),i=a.n(n);i.a},"1ba4":function(t,e,a){},"2d00":function(t,e,a){"use strict";var n=a("cda0"),i=a.n(n);i.a},"2d42":function(t,e,a){},"3b47":function(t,e,a){},4750:function(t,e,a){"use strict";var n=a("2d42"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("91a8"),a("902e"),a("55ba"),a("e72f");var n=a("da3e"),i=a("b061"),r=a.n(i);a("f2e7");n["default"].use(r.a);var o=a("660f"),s=a.n(o);n["default"].use(s.a,{duration:1e3});var l=a("cebb"),c=a("a3ad"),u=a("fa6e"),m=a("95eb"),p=a("890b");n["default"].component("font-awesome-icon",l["a"]),n["default"].component("font-awesome-layers",l["b"]),n["default"].component("font-awesome-layers-text",l["c"]),c["c"].add(u["a"]),c["c"].add(m["a"]),c["c"].add(p["a"]);var f=a("0ace"),d=a("c0b9"),g=a.n(d),v={name:"IconButton",render:function(t){return t(g.a,{props:Object(f["a"])({},this.$props),class:["IconButton"]},[t("font-awesome-icon",{props:{icon:[this.faStyle,this.faIcon]},class:[{"mr-1":!!this.$slots.default}]}),this.$slots.default])},props:Object(f["a"])({faIcon:String,faStyle:String},d["props"])},h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ButtonGroup"},[t._t("default")],2)},b=[],_={name:"ButtonGroup"},y=_,w=(a("ef63"),a("6f85")),C=Object(w["a"])(y,h,b,!1,null,"5ccac83c",null),k=C.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Collapse border rounded"},[a("Opener",{ref:"opener",attrs:{target:t.name}}),a("b-collapse",{ref:"collapse",attrs:{id:t.name}},[t._t("default")],2)],1)},x=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.target,expression:"target"}],staticClass:"Opener text-center w-100 collapsed",attrs:{size:"sm",variant:"light"}},[a("font-awesome-icon",{staticClass:"OpenerInner text-primary",attrs:{icon:"chevron-down"}})],1)},B=[],j={name:"Opener",props:{target:String}},P=j,T=(a("d7a7"),Object(w["a"])(P,I,B,!1,null,"82d62850",null)),M=T.exports,z={name:"Collapse",props:{name:String},components:{Opener:M}},O=z,A=Object(w["a"])(O,S,x,!1,null,null,null),E=A.exports;n["default"].component("IconButton",v),n["default"].component("ButtonGroup",k),n["default"].component("Collapse",E);var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Wrapper",{attrs:{id:"app"}})},G=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Wrapper"},[a("b-button",{staticClass:"navbar-toggler navbar-light",attrs:{id:"toggler",variant:"outline-light",pressed:t.is_toggled},on:{"update:pressed":function(e){t.is_toggled=e}}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("b-container",{class:{"is-toggled":t.is_toggled},attrs:{id:"container",fluid:""}},[a("b-row",[a("div",{attrs:{id:"sidebar"}},[a("SideBar",{attrs:{role:"navigation","reset-toggle":t.resetToggle}})],1),a("div",{attrs:{id:"content"}},[a("Content",{attrs:{role:"main"}}),a("Footer",{attrs:{role:"footer"}})],1)])],1),a("b-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#app",expression:"'#app'"}],attrs:{id:"back"},on:{click:t.resetToggle}},[a("font-awesome-icon",{staticClass:"fa-2x text-primary",attrs:{icon:"chevron-circle-up"}})],1)],1)},W=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"SideBar text-center d-flex flex-column p-3",attrs:{type:"light",variant:"light"}},[a("div",{staticClass:"flex-fill w-100"},[a("b-navbar-brand",{staticClass:"pt-3"},[a("b-link",{attrs:{href:"/img/avatar.jpg",target:"_blank"}},[a("b-img",{staticClass:"h-50 w-50",attrs:{center:"",rounded:"circle",src:"/img/avatar.jpg"}})],1)],1),a("b-nav-text",{staticClass:"p-0"},[a("h3",[t._v("Mu Yang")]),a("p",[t._v("Research Assistant")]),a("hr")]),a("b-nav",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy"}],staticClass:"w-100",attrs:{pills:"",vertical:""}},[a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{href:"#about"},on:{click:t.resetToggle}},[t._v("\n        About\n      ")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#education",expression:"'#education'"}],attrs:{href:"#education"},on:{click:t.resetToggle}},[t._v("\n        Experiences\n      ")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#publication",expression:"'#publication'"}],attrs:{href:"#publication"},on:{click:t.resetToggle}},[t._v("\n        Publications\n      ")]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project",expression:"'#project'"}],attrs:{href:"#project"},on:{click:t.resetToggle}},[t._v("\n        Projects\n      ")])],1)],1),a("div",{staticClass:"w-100 mt-3"},[a("div",{staticClass:"d-block",on:{mouseleave:t.iconTextOff}},[a("b-nav-text",{staticClass:"IconText text-nowrap p-0",domProps:{innerHTML:t._s(t.icon_text)}}),a("div",{staticClass:"d-flex justify-content-around my-1"},t._l(t.icon_list,function(e,n){return a("b-link",{key:n,attrs:{href:e.href,target:"_blank"},on:{mouseenter:function(a){return t.iconTextOn(e)},touchstart:function(a){return t.iconTextOn(e)}}},[a("font-awesome-icon",{staticClass:"fa-fw",attrs:{icon:[e.style,e.icon]}})],1)}),1)],1),a("hr"),a("footer",[a("small",[a("span",{staticClass:"text-muted"},[t._v("© Mu Yang. All rights reserved.")])])])])])},H=[],L={name:"SideBar",props:{resetToggle:Function},data:function(){return{icon_text:" ",icon_list:{email:{icon:"envelope",style:"fas",href:"mailto:emfomy@gmail.com",text:"emfomy@gmail.com"},phone:{icon:"phone",style:"fas",href:"tel:+886-2-27883799;ext=1562",text:"+886 (2) 2788-3799 ext. 1562"},github:{icon:"github",style:"fab",href:"//github.com/emfomy",text:"github.com/emfomy"},pypi:{icon:"python",style:"fab",href:"//pypi.org/user/emfomy",text:"pypi.org/user/emfomy"},linkedin:{icon:"linkedin-in",style:"fab",href:"//www.linkedin.com/in/emfomy",text:"www.linkedin.com/in/emfomy"},facebook:{icon:"facebook-f",style:"fab",href:"//www.facebook.com/emfomy",text:"www.facebook.com/emfomy"},twitter:{icon:"twitter",style:"fab",href:"//www.twitter.com/emfomy",text:"www.twitter.com/emfomy"}}}},methods:{iconTextOn:function(t){this.icon_text=t.text},iconTextOff:function(){this.icon_text=" "}}},D=L,Y=(a("f793"),Object(w["a"])(D,$,H,!1,null,"1fb900f3",null)),R=Y.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"Content px-0 px-md-3"},[a("About",{ref:"about",attrs:{id:"about"}}),a("b-container",[a("b-row",[a("Education",{ref:"education",staticClass:"col-12 col-xl-6",attrs:{id:"education"}}),a("Employment",{ref:"employment",staticClass:"col-12 col-xl-6",attrs:{id:"employment"}})],1)],1),a("Publication",{ref:"publication",attrs:{id:"publication"}}),a("Project",{ref:"project",attrs:{id:"project"}})],1)},J=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",[a("template",{slot:"header"},[a("h1",[t._v("Mu Yang")]),a("p",[t._v("Research Assistant, "),a("b-link",{attrs:{to:"http://ckip.iis.sinica.edu.tw",target:"_blank"}},[t._v("CKIP Lab")]),t._v(", "),a("b-link",{attrs:{to:"//www.sinica.edu.tw/en",target:"_blank"}},[t._v("Academia Sinica")])],1)]),a("header",[a("h3",[t._v("Skills")]),a("p")]),a("div",[a("Progress",{attrs:{value:90*t.progress,variant:"success",name:"C/C++"}}),a("Progress",{attrs:{value:85*t.progress,variant:"info",name:"Python"}}),a("Progress",{attrs:{value:75*t.progress,variant:"warning",name:"Web Design"}}),a("Progress",{attrs:{value:60*t.progress,variant:"danger",name:"Java"}})],1),a("IconButton",{attrs:{variant:"outline-primary",href:"/file/resume.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n    Résumé\n  ")])],2)},K=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"Section container p-3 p-md-4 p-lg-5"},[a("header",{staticClass:"mb-3 mb-md-4 text-center"},[t._t("header")],2),t._t("default")],2)},q=[],Q={name:"Section"},Z=Q,tt=Object(w["a"])(Z,X,q,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-progress",{staticClass:"my-3",attrs:{variant:t.variant}},[a("b-progress-bar",{staticClass:"d-block",attrs:{value:t.value}},[a("span",{staticClass:"float-left ml-2",domProps:{textContent:t._s(t.name)}}),a("span",{staticClass:"float-right mr-2",domProps:{textContent:t._s(t.value+"%")}})])],1)},nt=[],it=(a("2834"),{name:"Progress",props:{name:String,value:Number,variant:String}}),rt=it,ot=(a("4750"),Object(w["a"])(rt,at,nt,!1,null,"5bb360d8",null)),st=ot.exports,lt={name:"About",components:{Section:et,Progress:st},data:function(){return{progress:0}},mounted:function(){var t=this;setTimeout(function(){t.progress=1},1e3)}},ct=lt,ut=Object(w["a"])(ct,V,K,!1,null,null,null),mt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",[a("template",{slot:"header"},[a("h2",[t._v("Educations")]),a("p")]),a("Card1",{attrs:{year:"2015-2017",title:"Master of Science",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[a("a",{attrs:{href:"http://www.math.ntu.edu.tw/~iams/eng",target:"_blank"}},[t._v("Institute of Applied Mathematical Sciences")]),t._v(","),a("br"),t._v("National Taiwan University, Taipei, Taiwan")])],2),a("Card1",{attrs:{year:"2011-2015",title:"Bachelor of Science",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[a("a",{attrs:{href:"http://www.math.ntu.edu.tw/en",target:"_blank"}},[t._v("Department of Mathematics")]),t._v(","),a("br"),t._v("National Taiwan University, Taipei, Taiwan")])],2)],2)},ft=[],dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"my-1 my-md-3"},[a("header",{staticClass:"d-flex"},[a("div",{staticClass:"Logo d-flex align-items-center justify-content-center h-100 mr-3 my-1"},[t.imgSrc?a("b-img",{staticClass:"mh-100 mw-100",attrs:{center:"",src:t.imgSrc}}):t._e()],1),a("div",[a("h4",[t._v(t._s(t.year)+" | "+t._s(t.institution)),a("br"),t._v(t._s(t.title))]),a("p",[t._t("description")],2)])]),t._t("default")],2)},gt=[],vt={name:"Card1",props:{year:{style:String,defulat:""},title:{style:String,defulat:""},institution:{style:String,defulat:""},imgSrc:String}},ht=vt,bt=(a("72b8"),Object(w["a"])(ht,dt,gt,!1,null,"13133f5a",null)),_t=bt.exports,yt={name:"Education",components:{Section:et,Card1:_t}},wt=yt,Ct=Object(w["a"])(wt,pt,ft,!1,null,null,null),kt=Ct.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",[a("template",{slot:"header"},[a("h2",[t._v("Employments")]),a("p")]),a("Card1",{attrs:{year:"2017-Pres.",title:"Research Assistant",institution:"Academia Sinica","img-src":"/img/sinica_logo.png"}},[a("template",{slot:"description"},[a("a",{attrs:{href:"http://ckip.iis.sinica.edu.tw",target:"_blank"}},[t._v("CKIP Lab")]),t._v(", "),a("a",{attrs:{href:"//www.iis.sinica.edu.tw/index_en.html",target:"_blank"}},[t._v("Institute of Information Science")]),t._v(","),a("br"),t._v("Academia Sinica, Taipei, Taiwan")])],2),a("Card1",{attrs:{year:"2015-2015",title:"Internship",institution:"IBM Corp.","img-src":"/img/ibm_logo.png"}},[a("template",{slot:"description"},[a("a",{attrs:{href:"http://www.watson.ibm.com",target:"_blank"}},[t._v("Thomas J. Watson Research Center")]),t._v(","),a("br"),t._v("IBM, Yorktown Heights, NY, USA")])],2),a("Collapse",{attrs:{name:"employment-more"}},[a("Card1",{attrs:{year:"2013-2017",title:"Research Assistant",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[t._v("Supervised by Prof. Weichung Wang"),a("br"),a("a",{attrs:{href:"http://wlab.pro",target:"_blank"}},[t._v("WLab")]),t._v(", "),a("a",{attrs:{href:"http://www.math.ntu.edu.tw/~iams/eng",target:"_blank"}},[t._v("Institute of Applied Mathematical Sciences")]),t._v(", National Taiwan University, Taipei, Taiwan"),a("br"),a("i",[t._v("conducting researches of parallel computing of large-scale hybrid CPU-GPU clusters")])])],2),a("Card1",{attrs:{year:"2016-2016",title:"Research Assistant",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[t._v("Supervised by Prof. Semin Kim"),a("br"),a("a",{attrs:{href:"http://www.econ.ntu.edu.tw/?locale=en",target:"_blank"}},[t._v("Department of Economics")]),t._v(", National Taiwan University, Taipei, Taiwan"),a("br"),a("i",[t._v("conducting researches of ordinal versus cardinal voting rules")])])],2),a("Card1",{attrs:{year:"2015-2017",title:"Research Assistant",institution:"Nat'l. Taiwan Univ.","img-src":"/img/ntu_logo.png"}},[a("template",{slot:"description"},[a("i",[t._v("Software Development for Computational and Data Science, High Performance Computing and Deep Learning, Introduction to Computational & Data Sciences, Introduction to Scientific Computing, Numerical Linear Algebra, Introduction to Computational Mathematics, Computer Programming, Mathematic Software, Calculus")])])],2)],1)],2)},xt=[],It={name:"Employment",components:{Section:et,Card1:_t}},Bt=It,jt=Object(w["a"])(Bt,St,xt,!1,null,null,null),Pt=jt.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",{staticClass:"Publication"},[a("template",{slot:"header"},[a("h2",[t._v("Publications")]),a("p")]),a("Card2",{attrs:{src:"/img/icsc_2019.png",href:"//semanticcomputing.wixsite.com/icsc-2019"}},[a("header",[a("h4",[t._v("HWE: Word Embedding with Heterogeneous Features")]),a("p",[t._v("Jhih-Sheng Fan, Mu Yang, Peng-Hsuan Li and Wei-Yun Ma"),a("br"),t._v("2019, 13th IEEE International Conference on Semantic Computing (ICSC2019)")])]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/icsc_2019_hwe.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"//doi.org/10.1109/ICOSC.2019.8665508",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/hwe",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//semanticcomputing.wixsite.com/icsc-2019",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n        Conference\n      ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-hwe",expression:"'#project-hwe'"}],attrs:{size:"sm",variant:"outline-primary",href:"","fa-icon":"info","fa-style":"fas"}},[t._v("\n        More\n      ")])],1)],1),a("Card2",{attrs:{src:"/img/ntu_banner.png",srcSide:"/img/ntu_logo.png",href:"//doi.org/10.6342/NTU201702960"}},[a("header",[a("h4",[t._v("Highly Scalable Parallelism of Integrated Randomized Singular Value Decomposition with Big Data Applications")]),a("p",[t._v("Mu Yang"),a("br"),t._v("2017, Master's Thesis, National Taiwan University")])]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ntu_thesis_2017_isvd.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"//doi.org/10.6342/NTU201702960",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/isvd",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-isvd",expression:"'#project-isvd'"}],attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"}},[t._v("\n        More\n      ")])],1)],1),a("Card2",{attrs:{src:"/img/ieee_cit_2016.png",href:"http://nsclab.org/cit2016"}},[a("header",[a("h4",[t._v("Particle Swarm Stepwise Algorithm (PaSS) on Multicore Hybrid CPU-GPU Clusters")]),a("p",[t._v("Mu Yang, Ray-Bing Chen, I-Hsin Chung, and Weichung Wang"),a("br"),t._v("2016, 16th IEEE International Conference on Computer and Information Technology (CIT2016)")])]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ieee_cse_2016_pass.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"//doi.org/10.1109/CIT.2016.101",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/pass",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"http://nsclab.org/cit2016",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n        Conference\n      ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-pass",expression:"'#project-pass'"}],attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"}},[t._v("\n        More\n      ")])],1)],1),a("Card2",{attrs:{src:"/img/siam_cse_2017.jpg",href:"//www.siam.org/meetings/cse17"}},[a("header",[a("h4",[t._v("Parallel Implementations of Integrated Singular Value Decomposition (iSVD)")]),a("p",[t._v("Mu Yang, Su-Yun Huang, Ting-Li Chen, and Weichung Wang"),a("br"),t._v("2017, 9th SIAM Conference on Computational Science and Engineering (CSE2017)")])]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/isvd",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//www.siam.org/meetings/cse17",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n        Conference\n      ")]),a("IconButton",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-isvd",expression:"'#project-isvd'"}],attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"}},[t._v("\n        More\n      ")])],1)],1),a("Collapse",{staticClass:"mt-4",attrs:{name:"publication-more"}},[a("Card2",{attrs:{src:"/img/tjjw_jsam_2016.png",href:"//www.ncts.ntu.edu.tw/events_2_detail.php?nid=54"}},[a("header",[a("h4",[t._v("A Parallel and Hybrid Sparse Linear System Solver")]),a("p",[t._v("Mu Yang and Weichung Wang"),a("br"),t._v("2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics")])]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Workshop\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Presentation Excellence Award",size:"sm",variant:"outline-primary","fa-icon":"award","fa-style":"fas"}},[t._v("\n          Award\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary","fa-icon":"info","fa-style":"fas"},nativeOn:{click:function(e){return t.scrollProject("#project-hhis")}}},[t._v("\n          More\n        ")])],1)],1)],1)],2)},Mt=[],zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"Card2 p-3 p-lg-4"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center justify-content-center mb-3 mb-lg-0",attrs:{cols:"12",lg:"3"}},[a("b-link",{attrs:{href:t.href,target:t.target,disabled:void 0===t.href}},[t.src?a("picture",[t.srcSide?a("source",{attrs:{media:"(min-width: 992px)",srcset:t.srcSide}}):t._e(),a("b-img",{staticClass:"mh-100 mw-100",attrs:{center:"",rounded:"",fluid:"",src:t.src}})],1):t._e()])],1),a("b-col",{attrs:{cols:"12",lg:"9"}},[t._t("default")],2)],1)],1)},Ot=[],At={name:"Card2",props:{src:String,srcSide:String,href:String,target:{style:String,default:"_blank"}}},Et=At,Nt=Object(w["a"])(Et,zt,Ot,!1,null,null,null),Gt=Nt.exports,Ut={name:"Publication",components:{Section:et,Card2:Gt},methods:{scrollProject:function(t){var e=this;this.$parent.$refs.project.$refs["project-more"].$refs.collapse.show=!0,this.$nextTick(function(){e.$scrollTo(t)})}}},Wt=Ut,$t=(a("a1e2"),Object(w["a"])(Wt,Tt,Mt,!1,null,"d8c9def2",null)),Ht=$t.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Section",{staticClass:"Project"},[a("template",{slot:"header"},[a("h2",[t._v("Projects")]),a("p")]),a("Card3",{attrs:{id:"project-ehn"}},[a("header",[a("h4",[t._v("E-HowNet Parsing and Visualization")]),a("p",[t._v("2018-2019")])]),a("p",[t._v("\n      A Parser for "),a("b-link",{attrs:{to:"http://ehownet.iis.sinica.edu.tw",target:"_blank"}},[t._v("E-HowNet")]),t._v(", and the visualization demo.\n    ")],1),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"http://ckip.iis.sinica.edu.tw/service/ehnvis",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n        Demo\n      ")]),a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/ehn",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          Github\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/ehn-demo",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          (Demo)\n        ")])],1)],1)],1),a("Card3",{attrs:{id:"project-ckip-nlp"}},[a("header",[a("h4",[t._v("CKIP Word-Segmentation and Parser Python API")]),a("p",[t._v("2018-2019")])]),a("p",[t._v("\n      A Python API for CKIP "),a("b-link",{attrs:{to:"http://ckipsvr.iis.sinica.edu.tw",target:"_blank"}},[t._v("Word-Segmentation")]),t._v(" and "),a("b-link",{attrs:{to:"http://parser.iis.sinica.edu.tw",target:"_blank"}},[t._v("Word-Segmentation")]),t._v(".\n    ")],1),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//pypi.org/project/pyckip",target:"_blank","fa-icon":"python","fa-style":"fab"}},[t._v("\n        PyPI\n      ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/pyckip",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")])],1)],1),a("Card3",{attrs:{id:"project-hwe"}},[a("header",[a("h4",[t._v("HWE: Heterogeneous Word Embedding")]),a("p",[t._v("2017-2018")])]),a("p",[t._v("\n      A general and flexible framework of word embeddings to incorporate each type (e.g. word-sense, part-of-speech, topic) of contextual feature for learning feature-specific word embeddings in an explicit fashion.\n    ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/icsc_2019_hwe.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper (ICSC 2019)\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"//doi.org/10.1109/ICOSC.2019.8665508",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/hwe",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")])],1)],1),a("Card3",{attrs:{id:"project-cosmel"}},[a("header",[a("h4",[t._v("CosmEL: Cosmetic Entity Linking")]),a("p",[t._v("2017-2018")])]),a("p",[t._v("\n      An industrial-academic project with "),a("b-link",{attrs:{to:"//www.pixnet.net",target:"_blank"}},[t._v("PIXNET")]),t._v(". Cosmetics domain entity linking."),a("br"),t._v("\n      My work including data analysis, data preprocessing, programming design, model design, Python code implementation.\n    ")],1)]),a("Card3",{attrs:{id:"project-isvd"}},[a("header",[a("h4",[t._v("iSVD: Integrated Singular Value Decomposition Algorithm")]),a("p",[t._v("2015-Present")])]),a("p",[t._v("\n      iSVD is a parallel low-rank approximate singular value decomposition solver using integrated randomized algorithm for multinode systems."),a("br"),t._v("\n      My work including algorithm modifying, programming design, C++ code implementation.\n    ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ntu_thesis_2017_isvd.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper (NTU Thesis)\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"//doi.org/10.6342/NTU201702960",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/isvd",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")])],1)],1),a("Card3",{attrs:{id:"project-pass"}},[a("header",[a("h4",[t._v("PaSS: Particle Swarm Stepwise Algorithm")]),a("p",[t._v("2013-2015")])]),a("p",[t._v("\n      PaSS is a parallel stochastic search algorithm for information criterion variable selection problems on multinode systems."),a("br"),t._v("\n      My work including programming design, CUDA & C++ code implementation, non-general model developing and implementation.\n    ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/ieee_cse_2016_pass.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n          Paper (CIT 2016)\n        ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"//doi.org/10.1109/CIT.2016.101",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/pass",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n        Github\n      ")])],1)],1),a("Collapse",{ref:"project-more",staticClass:"mt-4",attrs:{name:"project-more"}},[a("Card3",{attrs:{id:"project-voting"}},[a("header",[a("h4",[t._v("Ordinal Versus Cardinal Voting Rules")]),a("p",[t._v("2016")])]),a("p",[t._v("\n        A research about the performance and incentive compatibility of voting rules in a Bayesian environment."),a("br"),t._v("\n        My work including numerical analysis and MATLAB code implementation.\n      ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/other/geb_2017_voting.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n            Paper (GEB 2017)\n          ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"//doi.org/10.1016/j.geb.2017.04.012",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1)],1)],1),a("Card3",{attrs:{id:"project-his"}},[a("header",[a("h4",[t._v("HiS: Hierarchical Schur Solver")]),a("p",[t._v("2015-2016")])]),a("p",[t._v("\n        HiS is a direct linear solver exploiting the sparse structure of multilevel nested dissection matrix to maximize parallel scalability on multinode GPU clusters."),a("br"),t._v("\n        My work including algorithm modifying, C++ code implementation, matrix structure and operation forming.\n      ")]),a("ButtonGroup",[a("b-button-group",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"/file/paper/other/ntu_thesis_2016_his.pdf",target:"_blank","fa-icon":"file-pdf","fa-style":"far"}},[t._v("\n            Paper\n          ")]),a("IconButton",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Official Link",size:"sm",variant:"outline-primary",href:"http://www.airitilibrary.com/Publication/alDetailedMesh1?DocID=U0001-2412201522263000",target:"_blank","fa-icon":"external-link-alt","fa-style":"fas"}})],1),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//bitbucket.org/nanaHa1003/his",target:"_blank","fa-icon":"bitbucket","fa-style":"fab"}},[t._v("\n          BitBucket\n        ")])],1)],1),a("Card3",{attrs:{id:"project-hhis"}},[a("header",[a("h4",[t._v("hHiS: Hybrid Hierarchical Schur Solver")]),a("p",[t._v("2014-2016")])]),a("p",[t._v("\n        hHiS is a parallel linear system solver for sparse symmetric positive definite matrices using direct/iterative method on each parts of k-way vertex partitioning to maximize parallel scalability on multinode systems."),a("br"),t._v("\n        My work including theoretical researching, algorithm modifying, programming design, C++ code implementation.\n      ")])]),a("Card3",{attrs:{id:"project-nbfmm"}},[a("header",[a("h4",[t._v("NBFMM: N-Body Simulation Using Fast Multipole Method with CUDA GPU")]),a("p",[t._v("2016")])]),a("p",[t._v("\n        An n-body simulation using fast multipole method (FMM) with GPU acceleration."),a("br"),t._v("\n        My work including project leading, C++ code implementation, CUDA GPU code implementation, and data structure designing.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//sites.google.com/site/nbfmmprojectforgpuprograming",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Website\n        ")]),a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/nbfmm",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          GitHub\n        ")])],1)],1),a("Card3",{attrs:{id:"project-dsa"}},[a("header",[a("h4",[t._v("Bank Account Management System Project")]),a("p",[t._v("2015")])]),a("p",[t._v("\n        A bank account management system."),a("br"),t._v("\n        My work including programming design, data structure developing, C++ code implementation, and team management.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/dsa_final",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          GitHub\n        ")])],1)],1),a("Card3",{attrs:{id:"project-wtf"}},[a("header",[a("h4",[t._v("Wonderful Transportation Forming")]),a("p",[t._v("2013")])]),a("p",[t._v("\n        A city traffic simulation of pedestrian, vehicle, and public transportation."),a("br"),t._v("\n        My work including programming design, data structure developing, Java code implementation, MATLAB GUI code modifying, and team management.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//sites.google.com/site/wonderfultf",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Website\n        ")])],1)],1),a("Card3",{attrs:{id:"project-assembly"}},[a("header",[a("h4",[t._v("The Matrix Project")]),a("p",[t._v("2012")])]),a("p",[t._v("\n        A linear algebra library implemented with assembly language."),a("br"),t._v("\n        My work including programming design, data structure developing, Intel assembly code & main C code implementation, and team management.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//sites.google.com/site/tragedytriangle",target:"_blank","fa-icon":"globe","fa-style":"fas"}},[t._v("\n          Website\n        ")])],1)],1),a("Card3",[a("header",{attrs:{id:"project-chessai"}},[a("h4",[t._v("Chess AI Project")]),a("p",[t._v("2007")])]),a("p",[t._v("\n        A chess game program with an AI that can defeat me."),a("br"),t._v("\n        My work including programming design, algorithm developing, data structure developing, C & Java code implementation, and Java GUI modifying.\n      ")]),a("ButtonGroup",[a("IconButton",{attrs:{size:"sm",variant:"outline-primary",href:"//github.com/emfomy/chess_ai",target:"_blank","fa-icon":"github","fa-style":"fab"}},[t._v("\n          GitHub\n        ")])],1)],1)],1)],2)},Dt=[],Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"Card3 p-3 p-lg-4"},[t._t("default")],2)},Rt=[],Ft={name:"Card3",props:{title:{style:String,default:""},author:{style:String,default:""},publish:{style:String,default:""},imgSrc:String,imgLink:String,imgTarget:{style:String,default:"_blank"}}},Jt=Ft,Vt=(a("084d"),Object(w["a"])(Jt,Yt,Rt,!1,null,"74b6cdea",null)),Kt=Vt.exports,Xt={name:"Project",components:{Section:et,Card3:Kt}},qt=Xt,Qt=(a("10e7"),Object(w["a"])(qt,Lt,Dt,!1,null,"ef0be0ce",null)),Zt=Qt.exports,te={name:"Content",components:{About:mt,Education:kt,Employment:Pt,Publication:Ht,Project:Zt}},ee=te,ae=(a("2d00"),Object(w["a"])(ee,F,J,!1,null,"01508fe2",null)),ne=ae.exports,ie=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},re=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"container-fluid text-center bg-light w-100 py-3 py-md-4 py-lg-5"},[a("span",{staticClass:"text-muted"},[t._v("© Mu Yang. All rights reserved.")])])}],oe={name:"Footer"},se=oe,le=Object(w["a"])(se,ie,re,!1,null,null,null),ce=le.exports,ue={name:"Wrapper",components:{SideBar:R,Content:ne,Footer:ce},data:function(){return{is_toggled:!1}},methods:{resetToggle:function(){this.is_toggled=!1}}},me=ue,pe=(a("8245"),Object(w["a"])(me,U,W,!1,null,"44394138",null)),fe=pe.exports,de={name:"app",components:{Wrapper:fe}},ge=de,ve=(a("6294"),Object(w["a"])(ge,N,G,!1,null,null,null)),he=ve.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(he)}}).$mount("#app")},6294:function(t,e,a){"use strict";var n=a("7bb8"),i=a.n(n);i.a},"6e2f":function(t,e,a){},"72b8":function(t,e,a){"use strict";var n=a("3b47"),i=a.n(n);i.a},"7bb8":function(t,e,a){},8245:function(t,e,a){"use strict";var n=a("8474"),i=a.n(n);i.a},8474:function(t,e,a){},"86e8":function(t,e,a){},9031:function(t,e,a){},a1e2:function(t,e,a){"use strict";var n=a("9031"),i=a.n(n);i.a},b9b1:function(t,e,a){},cda0:function(t,e,a){},d7a7:function(t,e,a){"use strict";var n=a("b9b1"),i=a.n(n);i.a},ef63:function(t,e,a){"use strict";var n=a("6e2f"),i=a.n(n);i.a},f324:function(t,e,a){},f793:function(t,e,a){"use strict";var n=a("86e8"),i=a.n(n);i.a}});
//# sourceMappingURL=app.5b516d47.js.map