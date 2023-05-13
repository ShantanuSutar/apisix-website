"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9602],{35318:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>k});var n=l(27378);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(l),k=r,h=m["".concat(o,".").concat(k)]||m[k]||s[k]||a;return l?n.createElement(h,p(p({ref:t},c),{},{components:l})):n.createElement(h,p({ref:t},c))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,p=new Array(a);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<a;u++)p[u]=l[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},71635:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=l(25773),r=(l(27378),l(35318));const a={title:"\u76d8\u70b9\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u7684\u8bf8\u591a\u8eab\u4efd\u9a8c\u8bc1\u65b9\u5f0f",authors:[{name:"\u7f57\u6cfd\u8f69",title:"Author",url:"https://github.com/spacewander",image_url:"https://github.com/spacewander.png"},{name:"\u8d75\u58eb\u745e",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png"}],keywords:["Apache APISIX","Auth","Serviceless","\u5fae\u670d\u52a1","\u8eab\u4efd\u8ba4\u8bc1"],description:"\u672c\u6587\u5c06\u4ece\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u548c\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u7684\u8eab\u4efd\u8ba4\u8bc1\u65b9\u5f0f\u533a\u522b\u8fdb\u884c\u8ba8\u8bba\uff0c\u5e76\u6700\u7ec8\u8861\u91cf\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u7684\u5404\u79cd\u5b9e\u73b0\u65b9\u5f0f\u7684\u4f18\u52a3\u3002",tags:["Ecosystem"]},p=void 0,i={permalink:"/zh/blog/2023/01/12/serverless-auth-type",source:"@site/blog/2023/01/12/serverless-auth-type.md",title:"\u76d8\u70b9\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u7684\u8bf8\u591a\u8eab\u4efd\u9a8c\u8bc1\u65b9\u5f0f",description:"\u672c\u6587\u5c06\u4ece\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u548c\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u7684\u8eab\u4efd\u8ba4\u8bc1\u65b9\u5f0f\u533a\u522b\u8fdb\u884c\u8ba8\u8bba\uff0c\u5e76\u6700\u7ec8\u8861\u91cf\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u7684\u5404\u79cd\u5b9e\u73b0\u65b9\u5f0f\u7684\u4f18\u52a3\u3002",date:"2023-01-12T00:00:00.000Z",formattedDate:"2023\u5e741\u670812\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:13.145,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",title:"Author",url:"https://github.com/spacewander",image_url:"https://github.com/spacewander.png",imageURL:"https://github.com/spacewander.png"},{name:"\u8d75\u58eb\u745e",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png",imageURL:"https://github.com/soulbird.png"}],prevItem:{title:"\u5982\u4f55\u4f7f\u7528 Amesh \u914d\u7f6e\u63d2\u4ef6",permalink:"/zh/blog/2023/01/12/amesh-config-plugin"},nextItem:{title:"\u57fa\u4e8e APISIX \u7684\u670d\u52a1\u7f51\u683c\u65b9\u6848 Amesh \u79ef\u6781\u5f00\u53d1\u4e2d\uff01",permalink:"/zh/blog/2023/01/11/apisix-amesh-introduction"}},o={authorsImageUrls:[void 0,void 0]},u=[{value:"\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u4e2d\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1",id:"\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u4e2d\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1",children:[{value:"\u5355\u4f53\u67b6\u6784",id:"\u5355\u4f53\u67b6\u6784",children:[],level:3},{value:"ESB \u67b6\u6784",id:"esb-\u67b6\u6784",children:[],level:3}],level:2},{value:"\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1",id:"\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1",children:[{value:"\u901a\u8fc7\u6bcf\u4e2a\u5fae\u670d\u52a1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1",id:"\u901a\u8fc7\u6bcf\u4e2a\u5fae\u670d\u52a1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1",children:[],level:3},{value:"\u901a\u8fc7\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1",id:"\u901a\u8fc7\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1",children:[],level:3},{value:"\u901a\u8fc7\u7f51\u5173\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1",id:"\u901a\u8fc7\u7f51\u5173\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],c={toc:u};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8eab\u4efd\u8ba4\u8bc1\u662f\u6388\u4e88\u7528\u6237\u8bbf\u95ee\u7cfb\u7edf\u5e76\u6388\u4e88\u4f7f\u7528\u7cfb\u7edf\u7684\u5fc5\u8981\u6743\u9650\u7684\u8fc7\u7a0b\u3002\u800c\u63d0\u4f9b\u4e86\u8fd9\u4e00\u529f\u80fd\u7684\u670d\u52a1\uff0c\u5c31\u662f\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8054\u5408\u4f5c\u8005\u7f57\u6cfd\u8f69\uff0cAPI7.ai \u6280\u672f\u4e13\u5bb6\u3001Apache APISIX PMC \u6210\u5458\uff1b"),(0,r.kt)("p",{parentName:"blockquote"},"\u8054\u5408\u4f5c\u8005\u8d75\u58eb\u745e\uff0cAPI7.ai \u6280\u672f\u5de5\u7a0b\u5e08\uff0cApache APISIX Committer\u3002")),(0,r.kt)("p",null,"\u5728\u4f20\u7edf\u7684\u5355\u4f53\u8f6f\u4ef6\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u6240\u6709\u8fd9\u4e9b\u90fd\u53d1\u751f\u5728\u540c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\u4f46\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\uff0c\u7cfb\u7edf\u7531\u591a\u4e2a\u670d\u52a1\u7ec4\u6210\uff0c\u5728\u8fd9\u6837\u7684\u67b6\u6784\u4e2d\uff0c\u6bcf\u4e2a\u5fae\u670d\u52a1\u90fd\u6709\u81ea\u5df1\u7684\u4efb\u52a1\uff0c\u56e0\u6b64\u4e3a\u6bcf\u4e2a\u5fae\u670d\u52a1\u5206\u522b\u5b9e\u73b0\u6388\u6743\u548c\u8eab\u4efd\u9a8c\u8bc1\u8fc7\u7a0b\u5e76\u4e0d\u5b8c\u5168\u7b26\u5408\u6b64\u539f\u5219\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u4ece\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u548c\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u7684\u8eab\u4efd\u8ba4\u8bc1\u65b9\u5f0f\u533a\u522b\u8fdb\u884c\u8ba8\u8bba\uff0c\u5e76\u6700\u7ec8\u8861\u91cf\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u7684\u5404\u79cd\u5b9e\u73b0\u65b9\u5f0f\u7684\u4f18\u52a3\u3002"),(0,r.kt)("h2",{id:"\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u4e2d\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1"},"\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u4e2d\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1"),(0,r.kt)("p",null,"\u5728\u4f01\u4e1a\u5f00\u53d1\u670d\u52a1\u7684\u65e9\u671f\uff0c\u6240\u6709\u529f\u80fd\u90fd\u662f\u505a\u5230\u540c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u91cc\u9762\u7684\u3002\u6211\u4eec\u628a\u8fd9\u79cd\u6a21\u5f0f\u79f0\u4e4b\u4e3a \u201c\u5355\u4f53\u201d\uff0c\u4ee5\u8ddf\u5f53\u4e0b\u66f4\u4e3a\u4e3b\u6d41\u7684 \u201c\u5fae\u670d\u52a1\u201d \u67b6\u6784\u533a\u5206\u5f00\u6765\u3002"),(0,r.kt)("p",null,"\u5355\u4f53\u5e94\u7528\u7531\u5355\u4e2a\u4e0d\u53ef\u5206\u5272\u7684\u5355\u5143\u7ec4\u6210\u3002\u5b83\u901a\u5e38\u7531\u5404\u4e2a\u4e1a\u52a1\u7ebf\u5404\u81ea\u5f00\u53d1\uff0c\u4f46\u662f\u90e8\u7f72\u65f6\u653e\u5165\u5230\u540c\u4e00\u4e2a\u73af\u5883\u4e2d\u3002\u6240\u6709\u8fd9\u4e9b\u90fd\u7d27\u5bc6\u96c6\u6210\u4ee5\u5728\u4e00\u4e2a\u5355\u5143\u4e2d\u63d0\u4f9b\u6240\u6709\u529f\u80fd\u3002\u8fd9\u4e00\u5355\u5143\u91cc\u62e5\u6709\u6240\u9700\u7684\u6240\u6709\u8d44\u6e90\u3002\u5355\u4f53\u5e94\u7528\u7684\u597d\u5904\u5728\u4e8e\u90e8\u7f72\u8fed\u4ee3\u7b80\u5355\uff0c\u9002\u5408\u4e1a\u52a1\u7ebf\u8f83\u5c11\u4e14\u6bd4\u8f83\u72ec\u7acb\u7684\u516c\u53f8\u91c7\u7528\u3002"),(0,r.kt)("p",null,"\u968f\u7740\u4f01\u4e1a\u5f00\u53d1\u51fa\u6765\u7684\u4e1a\u52a1\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u5355\u4f53\u670d\u52a1\u5df2\u7ecf\u65e0\u6cd5\u6ee1\u8db3\u73b0\u5b9e\u751f\u6d3b\u91cc\u9762\u5feb\u901f\u8fed\u4ee3\u7684\u9700\u8981\u4e86\u3002\u6211\u4eec\u9700\u8981\u628a\u8fd9\u4e2a\u5355\u4f53\u7684\u5de8\u65e0\u9738\u62c6\u5206\u4e00\u4e0b\uff0c\u540c\u65f6\u4fdd\u8bc1\u73b0\u6709\u7684\u5404\u4e2a\u529f\u80fd\u95f4\u7684\u8c03\u7528\u80fd\u6b63\u5e38\u8fdb\u884c\u3002\u8fd9\u65f6\u5019\uff0cESB\uff08\u4f01\u4e1a\u670d\u52a1\u603b\u7ebf\uff09\u4fbf\u5e94\u8fd0\u800c\u751f\u4e86\u3002"),(0,r.kt)("p",null,"\u6240\u8c13\u7684 \u201c\u4f01\u4e1a\u670d\u52a1\u603b\u7ebf\u201d\uff0c\u5c31\u662f\u4e00\u6839\u8fde\u63a5\u5404\u4e2a\u4f01\u4e1a\u670d\u52a1\u7684\u7ba1\u9053\u3002ESB \u7684\u5b58\u5728\u662f\u4e3a\u4e86\u96c6\u6210\u57fa\u4e8e\u4e0d\u540c\u534f\u8bae\u7684\u4e0d\u540c\u670d\u52a1\uff0cESB \u505a\u4e86\u6d88\u606f\u7684\u8f6c\u5316\u3001\u89e3\u91ca\u4ee5\u53ca\u8def\u7531\u7684\u5de5\u4f5c\uff0c\u4ee5\u6b64\u6765\u8ba9\u4e0d\u540c\u7684\u670d\u52a1\u4e92\u8054\u4e92\u901a\u3002\u4ece\u540d\u79f0\u5c31\u80fd\u77e5\u9053\uff0c\u5b83\u7684\u6982\u5ff5\u501f\u9274\u4e86\u8ba1\u7b97\u673a\u7ec4\u6210\u539f\u7406\u4e2d\u7684\u901a\u4fe1\u6a21\u578b \u2014\u2014 \u603b\u7ebf\uff0c\u6240\u6709\u9700\u8981\u548c\u5916\u90e8\u7cfb\u7edf\u901a\u4fe1\u7684\u7cfb\u7edf\uff0c\u7edf\u7edf\u63a5\u5165 ESB\uff0c\u5c31\u53ef\u4ee5\u5229\u7528\u73b0\u6709\u7684\u7cfb\u7edf\u6784\u5efa\u4e00\u4e2a\u5168\u65b0\u7684\u677e\u8026\u5408\u7684\u5f02\u6784\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u3002"),(0,r.kt)("p",null,"ESB \u505a\u4e86\u6d88\u606f\u7684\u8f6c\u6362\u89e3\u91ca\u4e0e\u8def\u7531\u7b49\u5de5\u4f5c\uff0c\u8ba9\u4e0d\u540c\u7684\u670d\u52a1\u4e92\u8054\u4e92\u901a\u3002\u4f20\u7edf\u7684 ESB \u7684\u670d\u52a1\u8c03\u7528\u65b9\u5f0f\u662f\uff0c\u6bcf\u4e00\u6b21\u670d\u52a1\u7684\u8c03\u7528\u8005\u8981\u5411\u670d\u52a1\u63d0\u4f9b\u8005\u8fdb\u884c\u670d\u52a1\u4ea4\u4e92\u8bf7\u6c42\u65f6\u90fd\u5fc5\u987b\u901a\u8fc7\u4e2d\u5fc3\u7684 ESB \u6765\u8fdb\u884c\u8def\u7531\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5c06\u6309\u7167\u8fd9\u4e24\u79cd\u60c5\u51b5\uff0c\u5206\u522b\u63cf\u8ff0\u5bf9\u5e94\u7684\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("h3",{id:"\u5355\u4f53\u67b6\u6784"},"\u5355\u4f53\u67b6\u6784"),(0,r.kt)("p",null,"\u5355\u4f53\u67b6\u6784\u4e0b\uff0c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\u548c\u4f1a\u8bdd\u7ba1\u7406\u76f8\u5bf9\u7b80\u5355\u3002\u8eab\u4efd\u8ba4\u8bc1\u548c\u6388\u6743\u53d1\u751f\u5728\u540c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u901a\u5e38\u4f7f\u7528\u57fa\u4e8e session \u7684\u8ba4\u8bc1\u65b9\u6848\u3002\u4e00\u65e6\u901a\u8fc7\u8eab\u4efd\u9a8c\u8bc1\uff0c\u5c31\u4f1a\u521b\u5efa\u4e00\u4e2a\u4f1a\u8bdd\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u670d\u52a1\u5668\u4e0a\uff0c\u4efb\u4f55\u9700\u8981\u5b83\u7684\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u8bbf\u95ee\u5b83\u5e76\u7528\u4e8e\u901a\u77e5\u548c\u6388\u6743\u540e\u7eed\u8981\u6c42\u3002\u4f1a\u8bdd ID \u88ab\u53d1\u9001\u5230\u5ba2\u6237\u7aef\u5e76\u7528\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u6240\u6709\u540e\u7eed\u8bf7\u6c42\uff0c\u4ee5\u5c06\u8bf7\u6c42\u4e0e\u5f53\u524d\u4f1a\u8bdd\u76f8\u5173\u8054\u3002"),(0,r.kt)("h3",{id:"esb-\u67b6\u6784"},"ESB \u67b6\u6784"),(0,r.kt)("p",null,"\u5728 ESB \u67b6\u6784\u4e0b\uff0c\u6240\u6709\u7528\u6237\u4e0e\u670d\u52a1\u4e4b\u95f4\uff0c\u670d\u52a1\u4e0e\u670d\u52a1\u4e4b\u95f4\u5168\u90e8\u901a\u8fc7 ESB \u603b\u7ebf\u8fdb\u884c\u5904\u7406\u3002\u7531\u4e8e ESB \u7684\u67b6\u6784\u662f\u4ece\u5355\u4f53\u62c6\u5206\u4e0b\u6765\u7684\uff0c\u8eab\u4efd\u8ba4\u8bc1\u65b9\u5f0f\u76f8\u5bf9\u4e8e\u5355\u4f53\u67b6\u6784\u5e76\u6ca1\u6709\u53d8\u5316\u3002"),(0,r.kt)("h2",{id:"\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1"},"\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1"),(0,r.kt)("p",null,"\u4ece\u5355\u4f53\u67b6\u6784\u8fc1\u79fb\u5230\u5fae\u670d\u52a1\u67b6\u6784\u6709\u5f88\u591a\u4f18\u52bf\uff0c\u4f46\u5fae\u670d\u52a1\u67b6\u6784\u4f5c\u4e3a\u4e00\u79cd\u5206\u5e03\u5f0f\u67b6\u6784\uff0c\u4f1a\u5b58\u5728\u66f4\u5927\u7684\u653b\u51fb\u9762\uff0c\u5171\u4eab\u7528\u6237\u4e0a\u4e0b\u6587\u66f4\u52a0\u56f0\u96be\u3002\u56e0\u6b64\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u9700\u8981\u6709\u8ddf\u4f20\u7edf\u67b6\u6784\u4e0d\u4e00\u6837\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\uff0c\u624d\u80fd\u54cd\u5e94\u66f4\u5927\u7684\u5b89\u5168\u6027\u6311\u6218\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5206\u4e3a\u4ee5\u4e0b\u4e09\u7c7b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u6bcf\u4e2a\u5fae\u670d\u52a1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u7f51\u5173\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1\u3002")),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u6bcf\u79cd\u505a\u6cd5\u90fd\u6709\u81ea\u5df1\u7279\u5b9a\u7684\u4f18\u7f3a\u70b9\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u6bcf\u4e2a\u5fae\u670d\u52a1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1"},"\u901a\u8fc7\u6bcf\u4e2a\u5fae\u670d\u52a1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1"),(0,r.kt)("p",null,"\u65e2\u7136\u5fae\u670d\u52a1\u67b6\u6784\u662f\u4ece\u5355\u4f53\u67b6\u6784\u62c6\u5206\u51fa\u6765\u7684\uff0c\u56e0\u6b64\u6bd4\u8f83\u81ea\u7136\u7684\u8fc7\u6e21\u65b9\u5f0f\u5c31\u662f\u7531\u6bcf\u4e2a\u5fae\u670d\u52a1\u81ea\u5df1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/01/10/DiCEnbrz_1713208657.png",alt:"\u6bcf\u4e2a\u5fae\u670d\u52a1\u81ea\u5df1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1"})),(0,r.kt)("p",null,"\u6bcf\u4e2a\u5fae\u670d\u52a1\u90fd\u9700\u8981\u5b9e\u73b0\u81ea\u5df1\u72ec\u7acb\u7684\u5b89\u5168\u6027\u4fdd\u969c\uff0c\u5e76\u5728\u6bcf\u4e2a\u5165\u53e3\u70b9\u4e0a\u5f3a\u5236\u6267\u884c\u3002\u6b64\u65b9\u6cd5\u4f7f\u5fae\u670d\u52a1\u56e2\u961f\u80fd\u591f\u81ea\u4e3b\u51b3\u5b9a\u5982\u4f55\u5b9e\u73b0\u5176\u5b89\u5168\u89e3\u51b3\u65b9\u6848\u3002\u4f46\u662f\uff0c\u8fd9\u79cd\u65b9\u6cd5\u6709\u51e0\u4e2a\u7f3a\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u5168\u903b\u8f91\u9700\u8981\u5728\u6bcf\u4e2a\u5fae\u670d\u52a1\u4e2d\u91cd\u590d\u5b9e\u73b0\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u670d\u52a1\u4e4b\u95f4\u7684\u4ee3\u7801\u91cd\u590d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5b83\u5206\u6563\u4e86\u5f00\u53d1\u56e2\u961f\u7684\u6ce8\u610f\u529b\uff0c\u4f7f\u5176\u65e0\u6cd5\u4e13\u6ce8\u4e8e\u5176\u4e3b\u8981\u670d\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5fae\u670d\u52a1\u90fd\u4f9d\u8d56\u4e8e\u5b83\u4e0d\u62e5\u6709\u7684\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f88\u96be\u7ef4\u62a4\u548c\u76d1\u63a7\u3002")),(0,r.kt)("p",null,"\u5b8c\u5584\u8fd9\u4e2a\u89e3\u51b3\u65b9\u6848\u7684\u9009\u62e9\u4e4b\u4e00\u5c31\u662f\u4f7f\u7528\u4e00\u4e2a\u52a0\u8f7d\u5728\u6bcf\u4e2a\u5fae\u670d\u52a1\u4e0a\u7684\u5171\u4eab\u8ba4\u8bc1\u5e93\u3002\u8fd9\u4e2a\u64cd\u4f5c\u53ef\u4ee5\u9632\u6b62\u4ee3\u7801\u91cd\u590d\uff0c\u5f00\u53d1\u56e2\u961f\u5c06\u53ea\u5173\u6ce8\u4ed6\u4eec\u7684\u4e1a\u52a1\u9886\u57df\uff0c\u4f46\u4ecd\u7136\u5b58\u5728\u8fd9\u79cd\u6539\u8fdb\u65e0\u6cd5\u89e3\u51b3\u7684\u7f3a\u70b9\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a\u5171\u4eab\u7684\u8ba4\u8bc1\u5e93\u4ecd\u7136\u9700\u8981\u6709\u5bf9\u5e94\u7684\u7528\u6237\u8eab\u4efd\u6570\u636e\uff0c\u800c\u4e14\u8fd8\u9700\u8981\u4fdd\u8bc1\u5404\u4e2a\u5fae\u670d\u52a1\u4f7f\u7528\u540c\u6837\u7248\u672c\u7684\u8ba4\u8bc1\u5e93\u3002\u8001\u5b9e\u8bf4\uff0c\u5171\u4eab\u8ba4\u8bc1\u5e93\u66f4\u50cf\u662f\u670d\u52a1\u62c6\u5206\u4e0d\u900f\u5f7b\u7684\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u8fd9\u79cd\u65b9\u5f0f\u603b\u7ed3\u6765\u8bf4\uff0c\u4f18\u52bf\u5728\u4e8e\u5b9e\u65bd\u901f\u5ea6\u5feb\uff0c\u72ec\u7acb\u6027\u5f3a\uff1b\u800c\u52a3\u52bf\u4e5f\u6bd4\u8f83\u660e\u663e\uff0c\u670d\u52a1\u4e4b\u95f4\u7684\u4ee3\u7801\u91cd\u590d\u3001\u8fdd\u53cd\u5355\u4e00\u804c\u8d23\u539f\u5219\uff0c\u8f83\u96be\u7ef4\u62a4\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1"},"\u901a\u8fc7\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1"),(0,r.kt)("p",null,"\u65e2\u7136\u6bcf\u4e2a\u5fae\u670d\u52a1\u81ea\u5df1\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1\u96be\u4ee5\u7ef4\u62a4\uff0c\u800c\u4f7f\u7528\u5171\u4eab\u8ba4\u8bc1\u5e93\u53c8\u8fdd\u80cc\u4e86\u5fae\u670d\u52a1\u62c6\u5206\u7684\u672c\u610f\uff0c\u90a3\u4e48\u80fd\u4e0d\u80fd\u628a\u5171\u4eab\u8ba4\u8bc1\u5e93\u5347\u7ea7\u6210\u4e13\u95e8\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5462\uff1f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/01/10/crpx8OA6_3258593430.png",alt:"\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u5b9e\u73b0"})),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u8bbf\u95ee\u90fd\u901a\u8fc7\u540c\u4e00\u670d\u52a1\u8fdb\u884c\u63a7\u5236\uff0c\u7c7b\u4f3c\u4e8e\u5355\u4f53\u5e94\u7528\u91cc\u9762\u7684\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\u3002\u6bcf\u4e2a\u4e1a\u52a1\u670d\u52a1\u90fd\u5fc5\u987b\u5728\u6267\u884c\u64cd\u4f5c\u65f6\uff0c\u5411\u8bbf\u95ee\u63a7\u5236\u6a21\u5757\u53d1\u9001\u5355\u72ec\u7684\u6388\u6743\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u8fd9\u79cd\u65b9\u6cd5\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u51cf\u6162\u4e86\u670d\u52a1\u7684\u8fd0\u884c\u901f\u5ea6\uff0c\u5e76\u589e\u52a0\u4e86\u670d\u52a1\u4e4b\u95f4\u7684\u4e92\u8fde\u91cf\u3002\u5e76\u4e14\u5404\u4e2a\u5fae\u670d\u52a1\u4f1a\u4f9d\u8d56\u8fd9\u4e2a\u201c\u5355\u70b9\u201d\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u3002\u4e07\u4e00\u7edf\u4e00\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\u51fa\u95ee\u9898\uff0c\u4f1a\u9020\u6210\u94fe\u5f0f\u53cd\u5e94\uff0c\u5e26\u6765\u4e8c\u6b21\u4f24\u5bb3\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\u603b\u7ed3\u6765\u770b\uff0c\u8fd9\u79cd\u65b9\u5f0f\u867d\u7136\u786e\u4fdd\u4e86\u6bcf\u4e2a\u5fae\u670d\u52a1\u804c\u8d23\u5355\u4e00\uff0c\u4f7f\u5f97\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\u66f4\u52a0\u96c6\u4e2d\u3002\u4f46\u662f\u4ecd\u4f1a\u9020\u6210\u5355\u70b9\u4f9d\u8d56\uff0c\u8fdb\u800c\u589e\u52a0\u8bf7\u6c42\u5ef6\u8fdf\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u7f51\u5173\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1"},"\u901a\u8fc7\u7f51\u5173\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1"),(0,r.kt)("p",null,"\u8fc1\u79fb\u5230\u5fae\u670d\u52a1\u4f53\u7cfb\u7ed3\u6784\u65f6\uff0c\u9700\u8981\u56de\u7b54\u7684\u95ee\u9898\u4e4b\u4e00\u662f\u5fae\u670d\u52a1\u4e4b\u95f4\u5982\u4f55\u901a\u4fe1\u3002\u524d\u9762\u63d0\u5230\u7684 ESB \u662f\u79cd\u65b9\u6848\uff0c\u4f46\u662f\u66f4\u5e38\u89c1\u7684\u9009\u62e9\u5219\u662f\u91c7\u7528 API \u7f51\u5173\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/01/10/LY1f4mnq_2653992949.png",alt:"\u7f51\u5173\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1"})),(0,r.kt)("p",null,"API \u7f51\u5173\u662f\u6240\u6709\u8bf7\u6c42\u7684\u5355\u4e2a\u7ec8\u7aef\u8282\u70b9\u5165\u53e3\uff0c\u5b83\u901a\u8fc7\u5145\u5f53\u4f7f\u7528\u8fd9\u4e9b\u5fae\u670d\u52a1\u7684\u4e2d\u592e\u63a5\u53e3\u6765\u63d0\u4f9b\u7075\u6d3b\u6027\u3002\u67d0\u4e2a\u9700\u8981\u8bbf\u95ee\u5176\u4ed6\u5fae\u670d\u52a1\u7684\u5fae\u670d\u52a1\uff08\u4ee5\u4e0b\u79f0\u4e4b\u4e3a\u201c\u5ba2\u6237\u7aef\u201d\uff0c\u4ee5\u8ddf\u88ab\u5b83\u8bbf\u95ee\u7684\u5fae\u670d\u52a1\u76f8\u533a\u5206\uff09\u65e0\u6743\u8bbf\u95ee\u591a\u4e2a\u670d\u52a1\uff0c\u800c\u662f\u9700\u8981\u5411\u8d1f\u8d23\u5c06\u5176\u8def\u7531\u5230\u4e0a\u6e38\u670d\u52a1\u7684 API \u7f51\u5173\u53d1\u9001\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e API \u7f51\u5173\u4f4d\u4e8e\u5ba2\u6237\u7aef\u8bbf\u95ee\u7684\u5fc5\u7ecf\u4e4b\u8def\u4e0a\uff0c\u56e0\u6b64\u5b83\u662f\u5f3a\u5236\u5b9e\u65bd\u8eab\u4efd\u9a8c\u8bc1\u95ee\u9898\u7684\u7edd\u4f73\u9009\u62e9\u3002\u4f7f\u7528 API \u7f51\u5173\u53ef\u4ee5\u51cf\u5c11\u5ef6\u8fdf\uff08\u8c03\u7528\u8eab\u4efd\u9a8c\u8bc1\u670d\u52a1\uff09\uff0c\u5e76\u786e\u4fdd\u8eab\u4efd\u9a8c\u8bc1\u8fc7\u7a0b\u5728\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4fdd\u6301\u4e00\u81f4\u3002"),(0,r.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u901a\u8fc7 APISIX \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/jwt-auth/"},"jwt-auth")," \u63d2\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u7f51\u5173\u4e0a\u5b9e\u73b0\u8eab\u4efd\u8ba4\u8bc1\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u89c4\u5212\u82e5\u5e72\u4e2a\u7528\u6237\u8eab\u4efd\u4fe1\u606f\uff08\u540d\u79f0\u3001\u5bc6\u94a5\u7b49\u7b49\uff09\uff0c\u5e76\u5c06\u5176\u914d\u7f6e\u5230 APISIX \u4e0a\u3002\u5176\u6b21\uff0c\u6839\u636e\u7ed9\u5b9a\u7684\u7528\u6237\u5bc6\u94a5\uff0c\u5411 APISIX \u53d1\u8d77\u7b7e\u540d\u8bf7\u6c42\uff0c\u5f97\u5230\u8fd9\u4e2a\u7528\u6237\u7684 JWT token\u3002\u63a5\u7740\uff0c\u5f53\u5ba2\u6237\u7aef\u9700\u8981\u8bbf\u95ee\u67d0\u4e2a\u4e0a\u6e38\u670d\u52a1\u65f6\uff0c\u5e26\u4e0a JWT token\uff0c\u7531 APISIX \u4f5c\u4e3a API \u7f51\u5173\u4ee3\u7406\u8be5\u8bbf\u95ee\u3002\u6700\u540e\uff0cAPISIX \u4f1a\u901a\u8fc7 JWT token\uff0c\u5b8c\u6210\u8eab\u4efd\u8ba4\u8bc1\u7684\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u51e1\u4e8b\u6709\u5229\u5c31\u6709\u5f0a\uff0c\u6ca1\u6709\u5b8c\u5168\u65e0\u52a3\u52bf\u7684\u6280\u672f\u9009\u578b\u3002\u4f7f\u7528\u7f51\u5173\u6765\u5b8c\u6210\u8eab\u4efd\u8ba4\u8bc1\uff0c\u8fd8\u662f\u5e26\u6765\u4e86\u5c11\u8bb8\u5355\u70b9\u95ee\u9898\u3002\u6bd4\u8d77\u5728\u6bcf\u4e2a\u5fae\u670d\u52a1\u5185\u5b8c\u6210\u8eab\u4efd\u8ba4\u8bc1\uff0c\u5728\u7f51\u5173\u4e0a\u89e3\u51b3\u8be5\u95ee\u9898\uff0c\u5b89\u5168\u6027\u76f8\u6bd4\u4f1a\u964d\u4f4e\u4e9b\u3002\u6bd4\u5982 API \u7f51\u5173\u88ab\u653b\u7834\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u8bbf\u95ee\u8be5\u7f51\u5173\u80cc\u540e\u7684\u4efb\u4f55\u5fae\u670d\u52a1\u3002\u4f46\u662f\u98ce\u9669\u662f\u76f8\u5bf9\u7684\uff0c\u6bd4\u8d77\u7edf\u4e00\u7684\u8eab\u4efd\u8ba4\u8bc1\u670d\u52a1\uff0c\u4f7f\u7528 API \u7f51\u5173\u7684\u5355\u70b9\u95ee\u9898\u5e76\u6ca1\u6709\u90a3\u4e48\u4e25\u91cd\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u8fd9\u79cd\u65b9\u5f0f\u64cd\u4f5c\u8d77\u6765\uff0c\u5728\u4f18\u52bf\u4e0a\u8f83\u4e3a\u660e\u663e\uff0c\u6bd4\u5982\u53ef\u4ee5\u6709\u6548\u4fdd\u62a4\u540e\u7aef\u5fae\u670d\u52a1\uff0c\u5fae\u670d\u52a1\u4e0d\u7528\u5904\u7406\u4efb\u4f55\u8ba4\u8bc1\u903b\u8f91\u7b49\u3002\u4f46\u540c\u65f6\u8fd8\u662f\u4f1a\u5b58\u6709\u5c11\u8bb8\u7684\u5355\u70b9\u4f9d\u8d56\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u5728\u4e0d\u540c\u7684\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u4e0d\u540c\u7684\u8eab\u4efd\u8ba4\u8bc1\u65b9\u6848\u3002\u5728\u5355\u4f53\u5e94\u7528\u4e2d\uff0c\u8eab\u4efd\u8ba4\u8bc1\u53d1\u751f\u5728\u540c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u670d\u52a1\u7aef\u4fdd\u5b58\u4e86\u6240\u6709\u7684\u4f1a\u8bdd\u3002\u8fdb\u5165\u5fae\u670d\u52a1\u65f6\u4ee3\uff0c\u5355\u4f53\u5e94\u7528\u6f14\u53d8\u4e3a\u5206\u5e03\u5f0f\u670d\u52a1\uff0c\u5355\u4f53\u5e94\u7528\u4e2d\u7684\u8eab\u4efd\u8ba4\u8bc1\u65b9\u5f0f\u5728\u5fae\u670d\u52a1\u4e2d\u5e76\u4e0d\u9002\u7528\u3002\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\uff0c\u6211\u4eec\u6709\u4e0a\u8ff0\u63d0\u5230\u7684\u4e09\u79cd\u8eab\u4efd\u8ba4\u8bc1\u7684\u65b9\u5f0f\u53ef\u4f9b\u9009\u62e9\u3002\u6bcf\u79cd\u9009\u62e9\u90fd\u6709\u5c5e\u4e8e\u81ea\u5df1\u7684\u5229\u5f0a\uff0c\u9700\u8981\u6839\u636e\u5177\u4f53\u7684\u5b9e\u9645\u60c5\u51b5\u505a\u5177\u4f53\u5206\u6790\u3002"))}s.isMDXComponent=!0}}]);