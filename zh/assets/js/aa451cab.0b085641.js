"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9335],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,g=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u5fae\u670d\u52a1\u4e3a\u4ec0\u4e48\u8981\u7528\u5230 API \u7f51\u5173\uff1f",authors:[{name:"\u7a0b\u5c0f\u5170",title:"Author",url:"https://github.com/Hazel6869",image_url:"https://github.com/Hazel6869.png"}],keywords:["RESTful","Apache APISIX","API"],description:"\u968f\u7740\u5fae\u670d\u52a1\u7684\u6570\u636e\u8d8a\u6765\u8d8a\u591a\uff0cAPI \u7684\u6570\u91cf\u4e5f\u8d8a\u6765\u8d8a\u591a\uff0c\u5bf9\u4e8e\u5927\u6d41\u91cf\u7684\u6cbb\u7406\uff0c\u9009\u62e9\u4e00\u4e2a\u4f18\u79c0\u7684 API \u7f51\u5173\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002\u672c\u6587\u5217\u4e3e\u4e86\u5e38\u89c1\u7f51\u5173\uff0c\u5e76\u8fdb\u884c\u5bf9\u6bd4\uff0c\u5217\u51fa\u5404\u81ea\u7684\u4f18\u7f3a\u70b9\uff0c\u5982\u679c\u4f60\u6b63\u5728\u505a API \u7f51\u5173\u7684\u6280\u672f\u9009\u578b\uff0c\u6216\u8005\u4f60\u7684\u5fae\u670d\u52a1\u7cfb\u7edf\u51fa\u73b0\u4e86\u6027\u80fd\u95ee\u9898\uff0c\u518d\u6216\u8005\u4f60\u60f3\u642d\u5efa\u4e00\u4e2a\u9ad8\u6548\u7a33\u5b9a\u7684\u5fae\u670d\u52a1\u7cfb\u7edf\uff0c\u5e0c\u671b\u672c\u6587\u53ef\u4ee5\u5e26\u7ed9\u4f60\u4e00\u5b9a\u7684\u542f\u53d1\u3002",tags:["Ecosystem"]},l=void 0,i={permalink:"/zh/blog/2023/03/08/why-do-microservices-need-an-api-gateway",source:"@site/blog/2023/03/08/why-do-microservices-need-an-api-gateway.md",title:"\u5fae\u670d\u52a1\u4e3a\u4ec0\u4e48\u8981\u7528\u5230 API \u7f51\u5173\uff1f",description:"\u968f\u7740\u5fae\u670d\u52a1\u7684\u6570\u636e\u8d8a\u6765\u8d8a\u591a\uff0cAPI \u7684\u6570\u91cf\u4e5f\u8d8a\u6765\u8d8a\u591a\uff0c\u5bf9\u4e8e\u5927\u6d41\u91cf\u7684\u6cbb\u7406\uff0c\u9009\u62e9\u4e00\u4e2a\u4f18\u79c0\u7684 API \u7f51\u5173\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002\u672c\u6587\u5217\u4e3e\u4e86\u5e38\u89c1\u7f51\u5173\uff0c\u5e76\u8fdb\u884c\u5bf9\u6bd4\uff0c\u5217\u51fa\u5404\u81ea\u7684\u4f18\u7f3a\u70b9\uff0c\u5982\u679c\u4f60\u6b63\u5728\u505a API \u7f51\u5173\u7684\u6280\u672f\u9009\u578b\uff0c\u6216\u8005\u4f60\u7684\u5fae\u670d\u52a1\u7cfb\u7edf\u51fa\u73b0\u4e86\u6027\u80fd\u95ee\u9898\uff0c\u518d\u6216\u8005\u4f60\u60f3\u642d\u5efa\u4e00\u4e2a\u9ad8\u6548\u7a33\u5b9a\u7684\u5fae\u670d\u52a1\u7cfb\u7edf\uff0c\u5e0c\u671b\u672c\u6587\u53ef\u4ee5\u5e26\u7ed9\u4f60\u4e00\u5b9a\u7684\u542f\u53d1\u3002",date:"2023-03-08T00:00:00.000Z",formattedDate:"2023\u5e743\u67088\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:15.145,truncated:!0,authors:[{name:"\u7a0b\u5c0f\u5170",title:"Author",url:"https://github.com/Hazel6869",image_url:"https://github.com/Hazel6869.png",imageURL:"https://github.com/Hazel6869.png"}],prevItem:{title:"Apache APISIX 3.2.0 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2023/03/09/release-apache-apisix-3.2.0"},nextItem:{title:"\u4ece 1 \u79d2\u5230 10 \u6beb\u79d2\uff01\u5728 APISIX \u4e2d\u51cf\u5c11 Prometheus \u8bf7\u6c42\u963b\u585e",permalink:"/zh/blog/2023/03/06/the-mystery-of-prometheus-plugins-and-long-tail-requests"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u968f\u7740\u5fae\u670d\u52a1\u7684\u6570\u636e\u8d8a\u6765\u8d8a\u591a\uff0cAPI \u7684\u6570\u91cf\u4e5f\u8d8a\u6765\u8d8a\u591a\uff0c\u5bf9\u4e8e\u5927\u6d41\u91cf\u7684\u6cbb\u7406\uff0c\u9009\u62e9\u4e00\u4e2a\u4f18\u79c0\u7684 API \u7f51\u5173\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002\u672c\u6587\u5217\u4e3e\u4e86\u5e38\u89c1\u7f51\u5173\uff0c\u5e76\u8fdb\u884c\u5bf9\u6bd4\uff0c\u5217\u51fa\u5404\u81ea\u7684\u4f18\u7f3a\u70b9\uff0c\u5982\u679c\u4f60\u6b63\u5728\u505a API \u7f51\u5173\u7684\u6280\u672f\u9009\u578b\uff0c\u6216\u8005\u4f60\u7684\u5fae\u670d\u52a1\u7cfb\u7edf\u51fa\u73b0\u4e86\u6027\u80fd\u95ee\u9898\uff0c\u518d\u6216\u8005\u4f60\u60f3\u642d\u5efa\u4e00\u4e2a\u9ad8\u6548\u7a33\u5b9a\u7684\u5fae\u670d\u52a1\u7cfb\u7edf\uff0c\u5e0c\u671b\u672c\u6587\u53ef\u4ee5\u5e26\u7ed9\u4f60\u4e00\u5b9a\u7684\u542f\u53d1\u3002")))}s.isMDXComponent=!0}}]);