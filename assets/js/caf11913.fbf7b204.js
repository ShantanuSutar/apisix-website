"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5380],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),y=o,f=m["".concat(c,".").concat(y)]||m[y]||s[y]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={title:"Biweekly Report (Feb 13 - Feb 26)",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"The cloud-native API gateway Apache APISIX has added functions such as enabling opentelemetry plugin to support https upstream and adding 'range_id' algorithm for 'request-id' plugin.",tags:["Community"],image:"https://static.apiseven.com/uploads/2023/03/01/8dHeqsLZ_%E9%A3%9E%E4%B9%A620230301-134627.png"},i=void 0,l={permalink:"/blog/2023/03/02/weekly-report-0226",source:"@site/blog/2023/03/02/weekly-report-0226.md",title:"Biweekly Report (Feb 13 - Feb 26)",description:"The cloud-native API gateway Apache APISIX has added functions such as enabling opentelemetry plugin to support https upstream and adding 'range_id' algorithm for 'request-id' plugin.",date:"2023-03-02T00:00:00.000Z",formattedDate:"March 2, 2023",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:1.96,truncated:!0,authors:[],prevItem:{title:"Make your security policy auditable",permalink:"/blog/2023/03/02/security-policy-auditable"},nextItem:{title:"The right feature at the right place",permalink:"/blog/2023/02/23/right-feature-right-place"}},c={authorsImageUrls:[]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"From 2.13 to 2.26, 23 contributors submitted 51 commits for Apache APISIX. Thank you for your contributions to Apache APISIX.")))}s.isMDXComponent=!0}}]);