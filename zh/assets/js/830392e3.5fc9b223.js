"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[85028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=o(n),k=r,m=c["".concat(u,".").concat(k)]||c[k]||s[k]||l;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14330:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"key-auth",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","Key Auth","key-auth"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `key-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,p={unversionedId:"plugins/key-auth",id:"version-3.3/plugins/key-auth",isDocsHomePage:!1,title:"key-auth",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `key-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.3/plugins/key-auth.md",sourceDirName:"plugins",slug:"/plugins/key-auth",permalink:"/zh/docs/apisix/plugins/key-auth",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.3/docs/zh/latest/plugins/key-auth.md",tags:[],version:"3.3",frontMatter:{title:"key-auth",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","Key Auth","key-auth"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `key-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.3/docs",previous:{title:"body-transformer",permalink:"/zh/docs/apisix/plugins/body-transformer"},next:{title:"jwt-auth",permalink:"/zh/docs/apisix/plugins/jwt-auth"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],o={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u7528\u4e8e\u5411 Route \u6216 Service \u6dfb\u52a0\u8eab\u4efd\u9a8c\u8bc1\u5bc6\u94a5\uff08API key\uff09\u3002"),(0,r.kt)("p",null,"\u5b83\u9700\u8981\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/consumer"},"Consumer")," \u4e00\u8d77\u914d\u5408\u624d\u80fd\u5de5\u4f5c\uff0c\u901a\u8fc7 Consumer \u5c06\u5176\u5bc6\u94a5\u6dfb\u52a0\u5230\u67e5\u8be2\u5b57\u7b26\u4e32\u53c2\u6570\u6216\u6807\u5934\u4e2d\u4ee5\u9a8c\u8bc1\u5176\u8bf7\u6c42\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("p",null,"Consumer \u7aef\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u540c\u7684 Consumer \u5e94\u6709\u4e0d\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"key"),"\uff0c\u5b83\u5e94\u5f53\u662f\u552f\u4e00\u7684\u3002\u5982\u679c\u591a\u4e2a Consumer \u4f7f\u7528\u4e86\u76f8\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"key"),"\uff0c\u5c06\u4f1a\u51fa\u73b0\u8bf7\u6c42\u5339\u914d\u5f02\u5e38\u3002\u8be5\u5b57\u6bb5\u652f\u6301\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/apisix/terminology/secret"},"APISIX Secret")," \u8d44\u6e90\uff0c\u5c06\u503c\u4fdd\u5b58\u5728 Secret Manager \u4e2d\u3002")))),(0,r.kt)("p",null,"\u6ce8\u610f\uff1aschema \u4e2d\u8fd8\u5b9a\u4e49\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"key"}'),"\uff0c\u8fd9\u610f\u5473\u7740\u8be5\u5b57\u6bb5\u5c06\u4f1a\u88ab\u52a0\u5bc6\u5b58\u50a8\u5728 etcd \u4e2d\u3002\u5177\u4f53\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/plugin-develop#%E5%8A%A0%E5%AF%86%E5%AD%98%E5%82%A8%E5%AD%97%E6%AE%B5"},"\u52a0\u5bc6\u5b58\u50a8\u5b57\u6bb5"),"\u3002"),(0,r.kt)("p",null,"Router \u7aef\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"apikey"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6211\u4eec\u4ece\u54ea\u4e2a header \u83b7\u53d6 key\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"apikey"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6211\u4eec\u4ece\u54ea\u4e2a query string \u83b7\u53d6 key\uff0c\u4f18\u5148\u7ea7\u4f4e\u4e8e ",(0,r.kt)("inlineCode",{parentName:"td"},"header"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hide_credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u65f6\u5c06\u542b\u6709\u8ba4\u8bc1\u4fe1\u606f\u7684 header \u6216 query string \u4f20\u9012\u7ed9 Upstream\u3002 \u5982\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u5c06\u5220\u9664\u5bf9\u5e94\u7684 header \u6216 query string\uff0c\u5177\u4f53\u5220\u9664\u54ea\u4e00\u4e2a\u53d6\u51b3\u4e8e\u662f\u4ece header \u83b7\u53d6 key \u8fd8\u662f\u4ece query string  \u83b7\u53d6 key\u3002")))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8981\u542f\u7528\u63d2\u4ef6\uff0c\u5c31\u5fc5\u987b\u4f7f\u7528\u8eab\u4efd\u9a8c\u8bc1\u5bc6\u94a5\u521b\u5efa\u4e00\u4e2a Consumer \u5bf9\u8c61\uff0c\u5e76\u4e14\u9700\u8981\u914d\u7f6e Route \u624d\u53ef\u4ee5\u5bf9\u8bf7\u6c42\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Admin API \u521b\u5efa\u4e00\u4e2a\u5177\u6709\u552f\u4e00 key \u7684 Consumer\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"APISIX Dashboard")," \u7684 Web \u754c\u9762\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u521b\u5efa Consumer \u5bf9\u8c61\u540e\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa Route \u8fdb\u884c\u9a8c\u8bc1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u60f3\u4ece\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey")," header \u83b7\u53d6 key\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49 header\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "key-auth": {\n        "header": "Authorization"\n    }\n}\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u65b9\u6cd5\u914d\u7f6e\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6d4b\u8bd5\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.2:9080/index.html -H 'apikey: auth-one' -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n...\n")),(0,r.kt)("p",null,"\u5982\u679c\u5f53\u524d\u8bf7\u6c42\u6ca1\u6709\u6b63\u786e\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey"),"\uff0c\u5c06\u5f97\u5230\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"401")," \u7684\u5e94\u7b54\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.2:9080/index.html -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Missing API key found in request"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.2:9080/index.html -H 'apikey: abcabcabc' -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Invalid API key in request"}\n')),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);