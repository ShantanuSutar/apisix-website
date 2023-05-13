"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[69567],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=i,k=h["".concat(p,".").concat(d)]||h[d]||u[d]||r;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},52700:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={title:"Annotations"},o=void 0,s={unversionedId:"concepts/annotations",id:"version-1.5.0/concepts/annotations",isDocsHomePage:!1,title:"Annotations",description:"This document describes all supported annotations and their functions. You can add these annotations in the Ingress resources so that advanced features in Apache APISIX can be combined into Ingress resources.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.5.0/concepts/annotations.md",sourceDirName:"concepts",slug:"/concepts/annotations",permalink:"/zh/docs/ingress-controller/1.5.0/concepts/annotations",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.5.0/docs/zh/latest/concepts/annotations.md",tags:[],version:"1.5.0",frontMatter:{title:"Annotations"},sidebar:"version-1.5.0/docs",previous:{title:"ApisixClusterConfig",permalink:"/zh/docs/ingress-controller/1.5.0/concepts/apisix_cluster_config"},next:{title:"Ingress Controller",permalink:"/zh/docs/ingress-controller/1.5.0/design"}},p=[{value:"CORS Support",id:"cors-support",children:[]},{value:"Allowlist Source Range",id:"allowlist-source-range",children:[]},{value:"Blocklist Source Range",id:"blocklist-source-range",children:[]},{value:"Rewrite Target",id:"rewrite-target",children:[]},{value:"Redirect",id:"redirect",children:[]},{value:"Path regular expression",id:"path-regular-expression",children:[]},{value:"Enable websocket",id:"enable-websocket",children:[]},{value:"Use ApisixPluginConfig",id:"use-apisixpluginconfig",children:[]}],l={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes all supported annotations and their functions. You can add these annotations in the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")," resources so that advanced features in ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," can be combined into ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress"},"Ingress")," resources."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note all keys and values of annotations are strings, so boolean value like ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," should be represented as ",(0,i.kt)("inlineCode",{parentName:"p"},'"true"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"false"'),".")),(0,i.kt)("h2",{id:"cors-support"},"CORS Support"),(0,i.kt)("p",null,"In order to enable ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"CORS"),", the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/enable-cors")," should be set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"true"'),", also, there are some other annotations to customize the cors behavior."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-origin"))),(0,i.kt)("p",null,"This annotation controls which origins will be allowed, multiple origins join together with ",(0,i.kt)("inlineCode",{parentName:"p"},","),", for instance: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://foo.com,http://bar.com:8080")),(0,i.kt)("p",null,"Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all origins are allowed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-headers"))),(0,i.kt)("p",null,"This annotation controls which headers are accepted, multiple headers join together with ",(0,i.kt)("inlineCode",{parentName:"p"},","),"."),(0,i.kt)("p",null,"Default is ",(0,i.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all headers are accepted."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-methods"))),(0,i.kt)("p",null,"This annotation controls which methods are accepted, multiple methods join together with ",(0,i.kt)("inlineCode",{parentName:"p"},","),"."),(0,i.kt)("p",null,"Default is ",(0,i.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all HTTP methods are accepted."),(0,i.kt)("h2",{id:"allowlist-source-range"},"Allowlist Source Range"),(0,i.kt)("p",null,"You can specify the allowed client IP addresses or nets by the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/allowlist-source-range"),", multiple IP addresses or nets join together with ",(0,i.kt)("inlineCode",{parentName:"p"},","),",\nfor instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/allowlist-source-range: 10.0.5.0/16,127.0.0.1,192.168.3.98"),". Default value is ",(0,i.kt)("em",{parentName:"p"},"empty"),", which means the sources are not limited."),(0,i.kt)("h2",{id:"blocklist-source-range"},"Blocklist Source Range"),(0,i.kt)("p",null,"You can specify the denied client IP addresses or nets by the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/blocklist-source-range"),", multiple IP addresses or nets join together with ",(0,i.kt)("inlineCode",{parentName:"p"},","),",\nfor instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/blocklist-source-range: 127.0.0.1,172.17.0.0/16"),". Default value is ",(0,i.kt)("em",{parentName:"p"},"empty"),", which means the sources are not limited."),(0,i.kt)("h2",{id:"rewrite-target"},"Rewrite Target"),(0,i.kt)("p",null,"You can rewrite requests by specifying the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex"),"."),(0,i.kt)("p",null,"The annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target")," controls where the request will be forwarded to."),(0,i.kt)("p",null,"If you want to use regex and match groups, use annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex-template"),". The first annotation contains the matching rule (regex), the second one contains the rewrite rule."),(0,i.kt)("p",null,"Both annotations must be used together, otherwise they will be ignored."),(0,i.kt)("p",null,"For example, we have an Ingress matches prefix path ",(0,i.kt)("inlineCode",{parentName:"p"},"/app"),", and we set ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/app/(.*)")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex-template")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/$1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: apisix\n    k8s.apisix.apache.org/rewrite-target-regex: "/app/(.*)"\n    k8s.apisix.apache.org/rewrite-target-regex-template: "/$1"\n  name: ingress-v1\nspec:\n  rules:\n  - host: httpbin.org\n    http:\n      paths:\n      - path: /app\n        pathType: Prefix\n        backend:\n          service:\n            name: httpbin\n            port:\n              number: 80\n')),(0,i.kt)("p",null,"With this Ingress, any requests with ",(0,i.kt)("inlineCode",{parentName:"p"},"/app")," prefix will be forwarded to backend without the ",(0,i.kt)("inlineCode",{parentName:"p"},"/app/")," part, e.g. request ",(0,i.kt)("inlineCode",{parentName:"p"},"/app/ip")," will be forwarded to ",(0,i.kt)("inlineCode",{parentName:"p"},"/ip"),"."),(0,i.kt)("h2",{id:"redirect"},"Redirect"),(0,i.kt)("p",null,"You can use the following annotations to control the redirect behavior."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/http-to-https"))),(0,i.kt)("p",null,"If this annotation set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and the request is HTTP, it will be automatically redirected to HTTPS with 301 response code,\nand the URI will keep the same as client request."),(0,i.kt)("p",null,"For example, the following Ingress, if we set ",(0,i.kt)("inlineCode",{parentName:"p"},'k8s.apisix.apache.org/http-to-https: "true"'),". The client will get a response with 301 status code, and the response header ",(0,i.kt)("inlineCode",{parentName:"p"},"Location"),"  will be ",(0,i.kt)("inlineCode",{parentName:"p"},"https://httpbin.org/sample"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: apisix\n    k8s.apisix.apache.org/http-to-https: "true"\n  name: ingress-v1\nspec:\n  rules:\n  - host: httpbin.org\n    http:\n      paths:\n      - path: /sample\n        pathType: Exact\n        backend:\n          service:\n            name: httpbin\n            port:\n              number: 80\n')),(0,i.kt)("h2",{id:"path-regular-expression"},"Path regular expression"),(0,i.kt)("p",null,"You can use the follow annotations to enable path regular expression"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/use-regex"))),(0,i.kt)("p",null,"If this annotations set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"PathType")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"ImplementationSpecific"),", the path will be match as regular expression."),(0,i.kt)("p",null,"For example, the following Ingress. Request path with ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/*/action1")," will use ",(0,i.kt)("inlineCode",{parentName:"p"},"service1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/*/action2")," will be use ",(0,i.kt)("inlineCode",{parentName:"p"},"service2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: apisix\n    k8s.apisix.apache.org/use-regex: "true"\n  name: ingress-v1\nspec:\n  rules:\n  - host: httpbin.org\n    http:\n      paths:\n      - path: /api/.*/action1\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: service1\n            port:\n              number: 80\n      - path: /api/.*/action2\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: service2\n            port:\n              number: 80\n')),(0,i.kt)("h2",{id:"enable-websocket"},"Enable websocket"),(0,i.kt)("p",null,"You can use the follow annotations to enable websocket"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/enable-websocket"))),(0,i.kt)("p",null,"If this annotations set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," the route will enable websoket"),(0,i.kt)("p",null,"For example, the following Ingress, if we set ",(0,i.kt)("inlineCode",{parentName:"p"},'k8s.apisix.apache.org/enable-websocket: "true"'),". ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/*")," route will enable websocket"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: apisix\n    k8s.apisix.apache.org/enable-websocket: "true"\n  name: ingress-v1\nspec:\n  rules:\n  - host: httpbin.org\n    http:\n      paths:\n      - path: /api/*\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: service1\n            port:\n              number: 80\n')),(0,i.kt)("h2",{id:"use-apisixpluginconfig"},"Use ApisixPluginConfig"),(0,i.kt)("p",null,"You can use the following annotations to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApisixPluginConfig"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/plugin-conifg-name"))),(0,i.kt)("p",null,"If this annotations set to ",(0,i.kt)("inlineCode",{parentName:"p"},"ApisixPluginConfig.metadata.name")," the route will use ",(0,i.kt)("inlineCode",{parentName:"p"},"ApisixPluginConfig")),(0,i.kt)("p",null,"ApisixPluginConfig is a resource under the same Namespace as Ingress"),(0,i.kt)("p",null,"As an example, we attach the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},'k8s.apisix.apache.org/plugin-conifg-name: "echo-and-cors-apc')," for the following Ingress resource, so that ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/*")," route will enable the ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/echo/"},"echo")," and ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/cors/"},"cors")," plugins."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2\nkind: ApisixPluginConfig\nmetadata:\n  name: echo-and-cors-apc\nspec:\n  plugins:\n  - name: echo\n    enable: true\n    config:\n      before_body: "This is the preface"\n      after_body: "This is the epilogue"\n      headers:\n        X-Foo: v1\n        X-Foo2: v2\n  - name: cors\n    enable: true\n---\n\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: apisix\n    k8s.apisix.apache.org/plugin-conifg-name: "echo-and-cors-apc"\n  name: ingress-v1\nspec:\n  rules:\n  - host: httpbin.org\n    http:\n      paths:\n      - path: /api/*\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: service1\n            port:\n              number: 80\n')))}c.isMDXComponent=!0}}]);