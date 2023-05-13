"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6633],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,h=m["".concat(l,".").concat(g)]||m[g]||s[g]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const o={title:"\u4f7f\u7528 Keycloak \u4e0e API \u7f51\u5173\u4fdd\u62a4\u4f60\u7684 API",authors:[{name:"\u6731\u6b23\u6b23",title:"Apache APISIX Committer",url:"https://github.com/starsz",image_url:"https://github.com/starsz.png"},{name:"\u741a\u81f4\u8fdc",title:"Apache Member",url:"https://github.com/juzhiyuan",image_url:"https://github.com/juzhiyuan.png"}],keywords:["Apache APISIX","API \u7f51\u5173","Authentication","OpenID Connect","Keycloak"],description:"\u672c\u7bc7\u6587\u7ae0\u5c06\u4e00\u6b65\u4e00\u6b65\u5f15\u5bfc\u4f60\u5982\u4f55\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u4e0e Keycloak \u4fdd\u62a4\u4f60\u7684 API\uff0c\u5e76\u4e14\u4ecb\u7ecd\u4e86 OpenID Connect \u76f8\u5173\u6982\u5ff5\u4ee5\u53ca\u4ea4\u4e92\u6d41\u7a0b\u548c\u76f8\u5173\u672f\u8bed\u3002",tags:["Authentication","Plugins"],image:"https://static.apiseven.com/2022/blog/0818/plugins/keycloak.png"},i=void 0,c={permalink:"/zh/blog/2022/07/06/use-keycloak-with-api-gateway-to-secure-apis",source:"@site/blog/2022/07/06/use-keycloak-with-api-gateway-to-secure-apis.md",title:"\u4f7f\u7528 Keycloak \u4e0e API \u7f51\u5173\u4fdd\u62a4\u4f60\u7684 API",description:"\u672c\u7bc7\u6587\u7ae0\u5c06\u4e00\u6b65\u4e00\u6b65\u5f15\u5bfc\u4f60\u5982\u4f55\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u4e0e Keycloak \u4fdd\u62a4\u4f60\u7684 API\uff0c\u5e76\u4e14\u4ecb\u7ecd\u4e86 OpenID Connect \u76f8\u5173\u6982\u5ff5\u4ee5\u53ca\u4ea4\u4e92\u6d41\u7a0b\u548c\u76f8\u5173\u672f\u8bed\u3002",date:"2022-07-06T00:00:00.000Z",formattedDate:"2022\u5e747\u67086\u65e5",tags:[{label:"Authentication",permalink:"/zh/blog/tags/authentication"},{label:"Plugins",permalink:"/zh/blog/tags/plugins"}],readingTime:9.715,truncated:!0,authors:[{name:"\u6731\u6b23\u6b23",title:"Apache APISIX Committer",url:"https://github.com/starsz",image_url:"https://github.com/starsz.png",imageURL:"https://github.com/starsz.png"},{name:"\u741a\u81f4\u8fdc",title:"Apache Member",url:"https://github.com/juzhiyuan",image_url:"https://github.com/juzhiyuan.png",imageURL:"https://github.com/juzhiyuan.png"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 6.16 - 6.30",permalink:"/zh/blog/2022/07/07/weekly-report-0630"},nextItem:{title:"\u5982\u4f55\u4f7f\u7528 DataAnt \u76d1\u63a7 Apache APISIX",permalink:"/zh/blog/2022/07/05/use-dataant-to-monitor-apisix"}},l={authorsImageUrls:[void 0,void 0]},p=[],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u7bc7\u6587\u7ae0\u5c06\u4e00\u6b65\u4e00\u6b65\u5f15\u5bfc\u4f60\u5982\u4f55\u4f7f\u7528 API \u7f51\u5173\u4e0e Keycloak \u4fdd\u62a4\u4f60\u7684 API\u3002")))}s.isMDXComponent=!0}}]);