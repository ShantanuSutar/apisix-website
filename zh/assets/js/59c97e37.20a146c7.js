"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[86452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=o(n),d=a,m=k["".concat(u,".").concat(d)]||k[d]||s[d]||l;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},63179:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"Secret"},p=void 0,i={unversionedId:"terminology/secret",id:"version-3.2/terminology/secret",isDocsHomePage:!1,title:"Secret",description:"\u5bc6\u94a5\u662f\u6307 APISIX \u8fd0\u884c\u8fc7\u7a0b\u4e2d\u6240\u9700\u7684\u4efb\u4f55\u654f\u611f\u4fe1\u606f\uff0c\u5b83\u53ef\u80fd\u662f\u6838\u5fc3\u914d\u7f6e\u7684\u4e00\u90e8\u5206\uff08\u5982 etcd \u7684\u5bc6\u7801\uff09\uff0c\u4e5f\u53ef\u80fd\u662f\u63d2\u4ef6\u4e2d\u7684\u4e00\u4e9b\u654f\u611f\u4fe1\u606f\u3002APISIX \u4e2d\u5e38\u89c1\u7684\u5bc6\u94a5\u7c7b\u578b\u5305\u62ec\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.2/terminology/secret.md",sourceDirName:"terminology",slug:"/terminology/secret",permalink:"/zh/docs/apisix/3.2/terminology/secret",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.2/docs/zh/latest/terminology/secret.md",tags:[],version:"3.2",frontMatter:{title:"Secret"},sidebar:"version-3.2/docs",previous:{title:"Upstream",permalink:"/zh/docs/apisix/3.2/terminology/upstream"},next:{title:"batch-requests",permalink:"/zh/docs/apisix/3.2/plugins/batch-requests"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u7ba1\u7406\u5bc6\u94a5",id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u7ba1\u7406\u5bc6\u94a5",children:[{value:"\u5f15\u7528\u65b9\u5f0f",id:"\u5f15\u7528\u65b9\u5f0f",children:[]},{value:"\u793a\u4f8b\uff1a\u5728 key-auth \u63d2\u4ef6\u4e2d\u4f7f\u7528",id:"\u793a\u4f8b\u5728-key-auth-\u63d2\u4ef6\u4e2d\u4f7f\u7528",children:[]}]},{value:"\u4f7f\u7528 Vault \u7ba1\u7406\u5bc6\u94a5",id:"\u4f7f\u7528-vault-\u7ba1\u7406\u5bc6\u94a5",children:[{value:"\u5f15\u7528\u65b9\u5f0f",id:"\u5f15\u7528\u65b9\u5f0f-1",children:[]},{value:"\u793a\u4f8b\uff1a\u5728 key-auth \u63d2\u4ef6\u4e2d\u4f7f\u7528",id:"\u793a\u4f8b\u5728-key-auth-\u63d2\u4ef6\u4e2d\u4f7f\u7528-1",children:[]}]}],o={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"\u5bc6\u94a5\u662f\u6307 APISIX \u8fd0\u884c\u8fc7\u7a0b\u4e2d\u6240\u9700\u7684\u4efb\u4f55\u654f\u611f\u4fe1\u606f\uff0c\u5b83\u53ef\u80fd\u662f\u6838\u5fc3\u914d\u7f6e\u7684\u4e00\u90e8\u5206\uff08\u5982 etcd \u7684\u5bc6\u7801\uff09\uff0c\u4e5f\u53ef\u80fd\u662f\u63d2\u4ef6\u4e2d\u7684\u4e00\u4e9b\u654f\u611f\u4fe1\u606f\u3002APISIX \u4e2d\u5e38\u89c1\u7684\u5bc6\u94a5\u7c7b\u578b\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u7ec4\u4ef6\uff08etcd\u3001Redis\u3001Kafka \u7b49\uff09\u7684\u7528\u6237\u540d\u3001\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u7684\u79c1\u94a5"),(0,a.kt)("li",{parentName:"ul"},"API \u5bc6\u94a5"),(0,a.kt)("li",{parentName:"ul"},"\u654f\u611f\u7684\u63d2\u4ef6\u914d\u7f6e\u5b57\u6bb5\uff0c\u901a\u5e38\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u3001hash\u3001\u7b7e\u540d\u6216\u52a0\u5bc6")),(0,a.kt)("p",null,"APISIX Secret \u5141\u8bb8\u7528\u6237\u5728 APISIX \u4e2d\u901a\u8fc7\u4e00\u4e9b\u5bc6\u94a5\u7ba1\u7406\u670d\u52a1\uff08Vault \u7b49\uff09\u6765\u5b58\u50a8\u5bc6\u94a5\uff0c\u5728\u4f7f\u7528\u7684\u65f6\u5019\u6839\u636e key \u8fdb\u884c\u8bfb\u53d6\uff0c\u786e\u4fdd\u5bc6\u94a5\u5728\u6574\u4e2a\u5e73\u53f0\u4e2d\u4e0d\u4ee5\u660e\u6587\u7684\u5f62\u5f0f\u5b58\u5728\u3002"),(0,a.kt)("p",null,"\u5176\u5de5\u4f5c\u539f\u7406\u5982\u56fe\u6240\u793a\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.2/docs/assets/images/secret.png",alt:"secret"})),(0,a.kt)("p",null,"APISIX \u76ee\u524d\u652f\u6301\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b58\u50a8\u5bc6\u94a5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E7%AE%A1%E7%90%86%E5%AF%86%E9%92%A5"},"\u73af\u5883\u53d8\u91cf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8-vault-%E7%AE%A1%E7%90%86%E5%AF%86%E9%92%A5"},"HashiCorp Vault"))),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u63d2\u4ef6\u7684 consumer \u914d\u7f6e\u4e2d\u901a\u8fc7\u6307\u5b9a\u683c\u5f0f\u7684\u53d8\u91cf\u6765\u4f7f\u7528 APISIX Secret \u529f\u80fd\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"::: note"),(0,a.kt)("p",null,"\u5982\u679c\u67d0\u4e2a\u914d\u7f6e\u9879\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},'key: "$ENV://ABC"'),'\uff0c\u5f53 APISIX Secret \u4e2d\u6ca1\u6709\u68c0\u7d22\u5230 $ENV://ABC \u5bf9\u5e94\u7684\u771f\u5b9e\u503c\uff0c\u90a3\u4e48 key \u7684\u503c\u5c06\u662f "$ENV://ABC" \u800c\u4e0d\u662f ',(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"\u3002"),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u7ba1\u7406\u5bc6\u94a5"},"\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u7ba1\u7406\u5bc6\u94a5"),(0,a.kt)("p",null,"\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u6765\u7ba1\u7406\u5bc6\u94a5\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5c06\u5bc6\u94a5\u4fe1\u606f\u4fdd\u5b58\u5728\u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u5728\u914d\u7f6e\u63d2\u4ef6\u65f6\u901a\u8fc7\u7279\u5b9a\u683c\u5f0f\u7684\u53d8\u91cf\u6765\u5f15\u7528\u73af\u5883\u53d8\u91cf\u3002APISIX \u652f\u6301\u5f15\u7528\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u548c\u901a\u8fc7 Nginx ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," \u6307\u4ee4\u914d\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,a.kt)("h3",{id:"\u5f15\u7528\u65b9\u5f0f"},"\u5f15\u7528\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ENV://$env_name/$sub_key\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"env_name: \u73af\u5883\u53d8\u91cf\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"sub_key: \u5f53\u73af\u5883\u53d8\u91cf\u7684\u503c\u662f JSON \u5b57\u7b26\u4e32\u65f6\uff0c\u83b7\u53d6\u67d0\u4e2a\u5c5e\u6027\u7684\u503c")),(0,a.kt)("p",null,"\u5982\u679c\u73af\u5883\u53d8\u91cf\u7684\u503c\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export JACK_AUTH_KEY=abc\n")),(0,a.kt)("p",null,"\u5219\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u5f15\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ENV://JACK_AUTH_KEY\n")),(0,a.kt)("p",null,"\u5982\u679c\u73af\u5883\u53d8\u91cf\u7684\u503c\u662f\u4e00\u4e2a JSON \u5b57\u7b26\u4e32\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export JACK={"auth-key":"abc","openid-key": "def"}\n')),(0,a.kt)("p",null,"\u5219\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u5f15\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u83b7\u53d6\u73af\u5883\u53d8\u91cf JACK \u7684 auth-key\n$ENV://JACK/auth-key\n\n# \u83b7\u53d6\u73af\u5883\u53d8\u91cf JACK \u7684 openid-key\n$ENV://JACK/openid-key\n")),(0,a.kt)("h3",{id:"\u793a\u4f8b\u5728-key-auth-\u63d2\u4ef6\u4e2d\u4f7f\u7528"},"\u793a\u4f8b\uff1a\u5728 key-auth \u63d2\u4ef6\u4e2d\u4f7f\u7528"),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b65\uff1aAPISIX \u5b9e\u4f8b\u542f\u52a8\u524d\u521b\u5efa\u73af\u5883\u53d8\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export JACK_AUTH_KEY=abc\n")),(0,a.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u4e2d\u5f15\u7528\u73af\u5883\u53d8\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "$ENV://JACK_AUTH_KEY"\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u4e2d\u7684 key \u914d\u7f6e\u4fdd\u5b58\u5728\u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u800c\u4e0d\u662f\u5728\u914d\u7f6e\u63d2\u4ef6\u65f6\u660e\u6587\u663e\u793a\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-vault-\u7ba1\u7406\u5bc6\u94a5"},"\u4f7f\u7528 Vault \u7ba1\u7406\u5bc6\u94a5"),(0,a.kt)("p",null,"\u4f7f\u7528 Vault \u6765\u7ba1\u7406\u5bc6\u94a5\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5c06\u5bc6\u94a5\u4fe1\u606f\u4fdd\u5b58\u5728 Vault \u670d\u52a1\u4e2d\uff0c\u5728\u914d\u7f6e\u63d2\u4ef6\u65f6\u901a\u8fc7\u7279\u5b9a\u683c\u5f0f\u7684\u53d8\u91cf\u6765\u5f15\u7528\u3002APISIX \u76ee\u524d\u652f\u6301\u5bf9\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/vault/docs/secrets/kv/kv-v1"},"Vault KV \u5f15\u64ce\u7684 V1 \u7248\u672c"),"\u3002"),(0,a.kt)("h3",{id:"\u5f15\u7528\u65b9\u5f0f-1"},"\u5f15\u7528\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$secret://$manager/$id/$secret_name/$key\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"manager: \u5bc6\u94a5\u7ba1\u7406\u670d\u52a1\uff0c\u53ef\u4ee5\u662f Vault\u3001AWS \u7b49"),(0,a.kt)("li",{parentName:"ul"},"APISIX Secret \u8d44\u6e90 ID\uff0c \u9700\u8981\u4e0e\u6dfb\u52a0 APISIX Secret \u8d44\u6e90\u65f6\u6307\u5b9a\u7684 ID \u4fdd\u6301\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},"secret_name: \u5bc6\u94a5\u7ba1\u7406\u670d\u52a1\u4e2d\u7684\u5bc6\u94a5\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"key\uff1a \u5bc6\u94a5\u7ba1\u7406\u670d\u52a1\u4e2d\u5bc6\u94a5\u5bf9\u5e94\u7684 key")),(0,a.kt)("h3",{id:"\u793a\u4f8b\u5728-key-auth-\u63d2\u4ef6\u4e2d\u4f7f\u7528-1"},"\u793a\u4f8b\uff1a\u5728 key-auth \u63d2\u4ef6\u4e2d\u4f7f\u7528"),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b65\uff1a\u5728 Vault \u4e2d\u521b\u5efa\u5bf9\u5e94\u7684\u5bc6\u94a5\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vault kv put apisix/jack auth-key=value\n")),(0,a.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff1a\u901a\u8fc7 Admin API \u6dfb\u52a0 Secret \u8d44\u6e90\uff0c\u914d\u7f6e Vault \u7684\u5730\u5740\u7b49\u8fde\u63a5\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/secrets/vault/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "https://127.0.0.1:8200"\uff0c\n    "prefix": "apisix",\n    "token": "root"\n}\'\n')),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528 APISIX Standalone \u7248\u672c\uff0c\u5219\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix.yaml"),"  \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"secrets:\n  - id: vault/1\n    prefix: apisix\n    token: root\n    uri: 127.0.0.1:8200\n")),(0,a.kt)("p",null,"\u7b2c\u4e09\u6b65\uff1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u4e2d\u5f15\u7528 APISIX Secret \u8d44\u6e90\uff0c\u586b\u5145\u79d8\u94a5\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "$secret://vault/1/jack/auth-key"\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u4e24\u6b65\u64cd\u4f5c\uff0c\u5f53\u7528\u6237\u8bf7\u6c42\u547d\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u65f6\uff0c\u4f1a\u901a\u8fc7 APISIX Secret \u7ec4\u4ef6\u83b7\u53d6\u5230 key \u5728 Vault \u4e2d\u7684\u771f\u5b9e\u503c\u3002"))}c.isMDXComponent=!0}}]);