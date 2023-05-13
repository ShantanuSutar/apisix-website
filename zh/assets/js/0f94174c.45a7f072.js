"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4582],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(27378);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(a),u=p,A=s["".concat(o,".").concat(u)]||s[u]||h[u]||n;return a?r.createElement(A,i(i({ref:t},m),{},{components:a})):r.createElement(A,i({ref:t},m))}));function u(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,i=new Array(n);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(25773),p=(a(27378),a(35318));const n={title:"\u793e\u533a\u53cc\u5468\u62a5 (1.2 - 1.15)",keywords:["Apache APISIX","API \u7f51\u5173","\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005"],description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",tags:["Community"],image:"https://static.apiseven.com/uploads/2023/01/19/l4EyvNRI_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E5%A4%B4%E5%9B%BE-01%E5%91%A8.png"},i=void 0,l={permalink:"/zh/blog/2023/01/19/weekly-report-0115",source:"@site/blog/2023/01/19/weekly-report-0115.md",title:"\u793e\u533a\u53cc\u5468\u62a5 (1.2 - 1.15)",description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",date:"2023-01-19T00:00:00.000Z",formattedDate:"2023\u5e741\u670819\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:3.225,truncated:!0,authors:[],prevItem:{title:"API \u7f51\u5173\u7b56\u7565\u7684\u4e8c\u4e09\u4e8b",permalink:"/zh/blog/2023/01/30/something-about-api-gateway-policy"},nextItem:{title:"Apache APISIX \u96c6\u6210\u539f\u751f Consul \u7684\u670d\u52a1\u53d1\u73b0\u80fd\u529b",permalink:"/zh/blog/2023/01/18/consul-with-apisix"}},o={authorsImageUrls:[]},c=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[],level:2},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[],level:2},{value:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",children:[],level:2},{value:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",children:[],level:2}],m={toc:c};function h(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u4ece 2023.1.2 - 2023.1.15\uff0c\u6709 19 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 33 \u4e2a commit\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")),(0,p.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,p.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,p.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u65b0\u664b\u8d21\u732e\u8005\u6765\u81ea\u591a\u4e2a\u56fd\u5bb6\uff08\u6ce2\u5170\u3001\u5df4\u57fa\u65af\u5766\u3001\u632a\u5a01\u3001\u8d8a\u5357\uff09\uff0cAPISIX \u6b63\u5728\u88ab\u4e16\u754c\u5404\u5730\u6709\u8da3\u7684\u5f00\u53d1\u8005\u4eec\u5173\u6ce8\u5e76\u53c2\u4e0e\u8d21\u732e\u3002")),(0,p.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/01/19/ttc04wzr_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E8%B4%A1%E7%8C%AE%E8%80%85%E6%B5%B7%E6%8A%A5-01%E5%91%A8.png",alt:"\u8d21\u732e\u8005\u540d\u5355"})),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/01/19/m0C82lr9_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E6%96%B0%E6%99%8B%E6%B5%B7%E6%8A%A5-01%E5%91%A8.png",alt:"\u65b0\u664b\u8d21\u732e\u8005"})),(0,p.kt)("h2",{id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"},"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8558"},(0,p.kt)("inlineCode",{parentName:"a"},"limit-count")," \u63d2\u4ef6\u6dfb\u52a0 Redis \u96c6\u7fa4 TLS/SSL \u8fde\u63a5\u6a21\u5f0f\u652f\u6301\u3002"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ronething"},"ronething"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8578"},(0,p.kt)("inlineCode",{parentName:"a"},"limit-count")," \u63d2\u4ef6\u6dfb\u52a0 ",(0,p.kt)("inlineCode",{parentName:"a"},"X-RateLimit-Reset")," \u652f\u6301\u3002"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mscb402"},"mscb402"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8583"},"Logger \u7c7b\u63d2\u4ef6\u652f\u6301\u5b9a\u5236\u5316\u65e5\u5fd7\u683c\u5f0f\u3002"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8583"},"Stream \u4ee3\u7406\u6a21\u5f0f\u6dfb\u52a0 Eureka \u670d\u52a1\u53d1\u73b0\u652f\u6301\u3002"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ronething"},"ronething"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8593"},"Stream \u4ee3\u7406\u6a21\u5f0f\u6dfb\u52a0 DNS \u670d\u52a1\u53d1\u73b0\u652f\u6301\u3002"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ronething"},"ronething"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8584"},"Stream \u4ee3\u7406\u6a21\u5f0f\u6dfb\u52a0 Nacos \u670d\u52a1\u53d1\u73b0\u652f\u6301\u3002"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ronething"},"ronething"),"\uff09"))),(0,p.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u548c Github \u4e0a\u7684 Issue \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 Issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e Issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"),(0,p.kt)("h2",{id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350"},"\u8fd1\u671f\u535a\u6587\u63a8\u8350"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2023/01/15/mafengwo-with-apisix/"},"\u9a6c\u8702\u7a9d\u5982\u4f55\u5229\u7528 APISIX \u7f51\u5173\u5b9e\u73b0\u5fae\u670d\u52a1\u67b6\u6784\u5347\u7ea7")),(0,p.kt)("p",{parentName:"li"},"  \u672c\u6587\u4ece\u9a6c\u8702\u7a9d\u7684\u5fae\u670d\u52a1\u67b6\u6784\u5e73\u53f0\u8702\u6548\u8fed\u4ee3\u8fc7\u7a0b\u548c\u5e94\u7528 APISIX \u540e\u7684\u4ea7\u54c1\u5b9e\u8df5\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u57fa\u4e8e APISIX \u7684\u7f51\u5173\u5e94\u7528\u5b9e\u4f8b\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2023/01/10/release-apisix-ingress-1.6/"},"Apache APISIX Ingress 1.6 \u6b63\u5f0f\u53d1\u5e03")),(0,p.kt)("p",{parentName:"li"},"  Apache APISIX Ingress 1.6 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u6b64\u7248\u672c\u5e26\u6765\u4e86 Gateway API \u7684\u652f\u6301\uff0c\u540c\u65f6\u65b0\u589e\u670d\u52a1\u53d1\u73b0\u7ec4\u4ef6\u96c6\u6210\u4e0e\u4ee3\u7406\u5916\u90e8\u670d\u52a1\uff0c\u4f18\u5316\u5bf9 APISIX Ingress Controller \u7684\u4f7f\u7528\u4f53\u9a8c\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2023/01/02/2022-summary/"},"2022 Apache APISIX \u5e74\u5ea6\u8bb0\u5fc6")),(0,p.kt)("p",{parentName:"li"},"  \u672c\u6587\u5c06\u5e26\u60a8\u56de\u987e Apache APISIX \u793e\u533a\u5728 2022 \u5e74\u5728\u5404\u9886\u57df\u53d6\u5f97\u7684\u6210\u7ee9\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/12/30/release-apache-apisix-3.1.0/"},"Apache APISIX 3.1.0 \u6b63\u5f0f\u53d1\u5e03")),(0,p.kt)("p",{parentName:"li"},"  Apache APISIX 3.1.0 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u6b64\u7248\u672c\u5e26\u6765\u5f88\u591a\u5173\u4e8e\u5b89\u5168\u5c42\u9762\u7684\u529f\u80fd\u652f\u6301\uff0c\u540c\u65f6\u65b0\u589e\u5185\u7f6e\u8c03\u8bd5\u63d2\u4ef6\uff0c\u65e8\u5728\u4f18\u5316\u5bf9 APISIX \u7684\u4f7f\u7528\u4f53\u9a8c\u3002"))))}h.isMDXComponent=!0}}]);