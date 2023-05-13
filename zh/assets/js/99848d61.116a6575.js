"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7588],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(r),m=n,A=h["".concat(o,".").concat(m)]||h[m]||u[m]||p;return r?a.createElement(A,i(i({ref:t},c),{},{components:r})):a.createElement(A,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<p;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var a=r(25773),n=(r(27378),r(35318));const p={title:"\u793e\u533a\u53cc\u5468\u62a5 (3.27 - 4.9)",keywords:["Apache APISIX","API \u7f51\u5173","\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005"],description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",tags:["Community"],image:"https://static.apiseven.com/uploads/2023/03/28/wszDNXP4_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E5%A4%B4%E5%9B%BE-06%E6%9C%9F.png"},i=void 0,l={permalink:"/zh/blog/2023/04/12/weekly-report-0409",source:"@site/blog/2023/04/12/weekly-report-0409.md",title:"\u793e\u533a\u53cc\u5468\u62a5 (3.27 - 4.9)",description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",date:"2023-04-12T00:00:00.000Z",formattedDate:"2023\u5e744\u670812\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:1.955,truncated:!0,authors:[],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (4.10 - 4.23)",permalink:"/zh/blog/2023/04/26/weekly-report-0426"},nextItem:{title:"2023 \u5e74\u5341\u5927 API \u7ba1\u7406\u8d8b\u52bf",permalink:"/zh/blog/2023/04/03/10-api-management-trends"}},o={authorsImageUrls:[]},s=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[],level:2},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[],level:2},{value:"Good First Issue",id:"good-first-issue",children:[{value:"Issue #8772",id:"issue-8772",children:[],level:3}],level:2},{value:"\u8fd1\u671f\u4eae\u70b9\u529f\u80fd",id:"\u8fd1\u671f\u4eae\u70b9\u529f\u80fd",children:[{value:"Apache APISIX",id:"apache-apisix",children:[],level:3},{value:"Apache APISIX Ingress",id:"apache-apisix-ingress",children:[],level:3}],level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4ece 2023.3.27 - 2023.4.9\uff0c\u6709 24 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 44 \u4e2a commit\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")),(0,n.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,n.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,n.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u8fd8\u6574\u7406\u4e86\u4e00\u4e9b\u9002\u5408\u65b0\u6765\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u53c2\u52a0\u7684 Issue\uff01\u611f\u5174\u8da3\u7684\u540c\u5b66\u4eec\uff0c\u8d70\u8fc7\u8def\u8fc7\u4e0d\u8981\u9519\u8fc7\uff01"),(0,n.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/04/10/DIDm2aDQ_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E8%B4%A1%E7%8C%AE%E8%80%85%E6%B5%B7%E6%8A%A5-07%E6%9C%9F.png",alt:"\u8d21\u732e\u8005\u540d\u5355"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/04/10/ysgQ4kpJ_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E6%96%B0%E6%99%8B%E6%B5%B7%E6%8A%A5-07%E5%91%A8.png",alt:"\u65b0\u664b\u8d21\u732e\u8005"})),(0,n.kt)("h2",{id:"good-first-issue"},"Good First Issue"),(0,n.kt)("h3",{id:"issue-8772"},"Issue #8772"),(0,n.kt)("p",null,"\u94fe\u63a5\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/8772"},"1. https://github.com/apache/apisix/issues/8772")),(0,n.kt)("p",null,"\u95ee\u9898\u63cf\u8ff0\uff1a OIDC \u63d2\u4ef6\u589e\u52a0\u989d\u5916\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u5c5e\u6027\u9a8c\u8bc1\u652f\u6301\u3002"),(0,n.kt)("h2",{id:"\u8fd1\u671f\u4eae\u70b9\u529f\u80fd"},"\u8fd1\u671f\u4eae\u70b9\u529f\u80fd"),(0,n.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9151"},"\u589e\u52a0 upstream \u72b6\u6001\u5c55\u793a\u9875\u9762\u652f\u6301"),"\uff08\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kingluo"},"kingluo"),"\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9039"},"\u6545\u969c\u6ce8\u5165\u63d2\u4ef6\u589e\u52a0\u54cd\u5e94\u5934\u6ce8\u5165\u652f\u6301"),"\uff08\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kingluo"},"kingluo"),"\uff09"))),(0,n.kt)("h3",{id:"apache-apisix-ingress"},"Apache APISIX Ingress"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/1355"},"\u652f\u6301\u901a\u8fc7 adminssion webhook \u6821\u9a8c plugin"),"\uff08\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AlinsRan"},"AlinsRan"),"\uff09")),(0,n.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u548c Github \u4e0a\u7684 Issue \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 Issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e Issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"))}u.isMDXComponent=!0}}]);