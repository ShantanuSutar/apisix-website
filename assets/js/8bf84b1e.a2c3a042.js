"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2286],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),h=o,y=m["".concat(s,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const a={title:"How to Easily Deploy Apache APISIX in Kubernetes",authors:[{name:"Bozhong Yu",title:"Author",url:"https://github.com/zaunist",image_url:"https://avatars.githubusercontent.com/u/38528079?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","API Gateway","Kubernetes","APISIX Dashboard","Deployment","Cluster"],description:"API Gateway Apache APISIX currently supports multiple ways to install and deploy. This article focuses on how to deploy APISIX and Dashboard in a Kubernetes environment.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/ecosystem/kubernetes.png"},i=void 0,l={permalink:"/blog/2021/12/15/deploy-apisix-in-kubernetes",source:"@site/blog/2021/12/15/deploy-apisix-in-kubernetes.md",title:"How to Easily Deploy Apache APISIX in Kubernetes",description:"API Gateway Apache APISIX currently supports multiple ways to install and deploy. This article focuses on how to deploy APISIX and Dashboard in a Kubernetes environment.",date:"2021-12-15T00:00:00.000Z",formattedDate:"December 15, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:4.83,truncated:!0,authors:[{name:"Bozhong Yu",title:"Author",url:"https://github.com/zaunist",image_url:"https://avatars.githubusercontent.com/u/38528079?v=4",imageURL:"https://avatars.githubusercontent.com/u/38528079?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Webinar | Apache APISIX \xd7 Apache RocketMQ Online Meetup",permalink:"/blog/2021/12/16/apisix-with-rocketmq-meetup"},nextItem:{title:"Monitor APISIX Ingress Controller with Prometheus",permalink:"/blog/2021/12/13/monitor-apisix-ingress-controller-with-prometheus"}},s={authorsImageUrls:[void 0,void 0]},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache APISIX currently supports multiple ways to install and deploy. This article focuses on how to deploy Apache APISIX and APISIX-Dashboard in a Kubernetes environment.")))}p.isMDXComponent=!0}}]);