(function(e){function t(t){for(var n,i,l=t[0],s=t[1],u=t[2],c=0,d=[];c<l.length;c++)i=l[c],o[i]&&d.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=r("bc3a"),a=r.n(o),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("URL Shorter Client")])],1),r("router-view")],1)},l=[],s=(r("034f"),r("2877")),u={},p=Object(s["a"])(u,i,l,!1,null,null,null);p.options.__file="App.vue";var c=p.exports,d=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",[r("p",[r("label",[e._v("Base Url:        ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.shortBaseUrl,expression:"shortBaseUrl"}],staticStyle:{height:"24px",width:"600px"},attrs:{type:"text"},domProps:{value:e.shortBaseUrl},on:{input:function(t){t.target.composing||(e.shortBaseUrl=t.target.value)}}})]),r("p",{staticStyle:{"font-size":"12px"}},[e._v(" currently, only support "),r("font",{staticStyle:{color:"red"}},[e._v("http://(test|test1|test2|test3).example.com")]),e._v(" in nginx")],1),r("p",[r("label",[e._v("Original URL: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.originalUrl,expression:"originalUrl"}],staticStyle:{height:"24px",width:"600px"},attrs:{type:"text"},domProps:{value:e.originalUrl},on:{input:function(t){t.target.composing||(e.originalUrl=t.target.value)}}})]),r("p",[r("button",{staticStyle:{height:"24px"},on:{click:e.generate}},[e._v("Generate")])])]),r("hr",{staticStyle:{width:"800px",border:"1px dashed #CCC"}}),r("div",[r("p",[e._v("Generated URL")]),r("p",[e.generatedURL?r("a",{attrs:{href:e.generatedURL,target:"_blank"}},[e._v(e._s(e.generatedURL))]):e._e()])]),r("div",[r("p",{staticStyle:{color:"red"}},[e._v(e._s(e.error))])])])},h=[],v={name:"home",data:function(){return{error:"",shortBaseUrl:"http://test.example.com",originalUrl:"",generatedURL:null}},methods:{generate:function(){var e=this;this.shortBaseUrl?this.originalUrl?this.$http.post("/api/v1/generation",{shortBaseUrl:this.shortBaseUrl,originalUrl:this.originalUrl}).then(function(t){e.error=null,e.generatedURL=t.data}).catch(function(t){e.error=t.response.data}):this.error="Original URL is required":this.error="Base URL is required"}}},g=v,m=Object(s["a"])(g,f,h,!1,null,null,null);m.options.__file="Home.vue";var y=m.exports;n["a"].use(d["a"]);var _=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:y}]});n["a"].prototype.$http=a.a,n["a"].config.productionTip=!1,new n["a"]({router:_,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.6ed23505.js.map