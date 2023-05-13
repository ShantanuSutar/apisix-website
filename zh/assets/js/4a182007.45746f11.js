"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[64864],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15897:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={title:"Configure Routes",slug:"/getting-started/configure-routes"},o=void 0,s={unversionedId:"getting-started/configure-routes",id:"version-3.3/getting-started/configure-routes",isDocsHomePage:!1,title:"Configure Routes",description:"The Getting Started tutorials are contributed by API7.ai.",source:"@site/docs-apisix_versioned_docs/version-3.3/getting-started/configure-routes.md",sourceDirName:"getting-started",slug:"/getting-started/configure-routes",permalink:"/zh/docs/apisix/getting-started/configure-routes",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.3/docs/zh/latest/getting-started/configure-routes.md",tags:[],version:"3.3",frontMatter:{title:"Configure Routes",slug:"/getting-started/configure-routes"},sidebar:"version-3.3/docs",previous:{title:"Get APISIX",permalink:"/zh/docs/apisix/getting-started/README"},next:{title:"Load Balancing",permalink:"/zh/docs/apisix/getting-started/load-balancing"}},l=[{value:"What is a Route",id:"what-is-a-route",children:[]},{value:"What is an Upstream",id:"what-is-an-upstream",children:[]},{value:"Prerequisite(s)",id:"prerequisites",children:[]},{value:"Create a Route",id:"create-a-route",children:[]},{value:"Validate",id:"validate",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.api7.ai/apisix/getting-started/configure-routes"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Getting Started tutorials are contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://api7.ai/"},"API7.ai"),".")),(0,n.kt)("p",null,"Apache APISIX provides flexible gateway management capabilities based on ",(0,n.kt)("em",{parentName:"p"},"routes"),", where routing paths and targets are defined for requests."),(0,n.kt)("p",null,"This tutorial guides you on how to create a route and validate it. You will complete the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a route with a sample ",(0,n.kt)("em",{parentName:"li"},"upstream")," that points to ",(0,n.kt)("a",{parentName:"li",href:"http://httpbin.org"},"httpbin.org"),"."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("em",{parentName:"li"},"cURL")," to send a test request to see how APISIX proxies and forwards the request.")),(0,n.kt)("h2",{id:"what-is-a-route"},"What is a Route"),(0,n.kt)("p",null,"A route is a routing path to upstream targets. In ",(0,n.kt)("a",{parentName:"p",href:"https://api7.ai/apisix"},"Apache APISIX"),", routes are responsible for matching client's requests based on defined rules, loading and executing the corresponding plugins, as well as forwarding requests to the specified upstream services."),(0,n.kt)("p",null,"In APISIX, a simple route can be set up with a path-matching URI and a corresponding upstream address."),(0,n.kt)("h2",{id:"what-is-an-upstream"},"What is an Upstream"),(0,n.kt)("p",null,"An upstream is a set of target nodes with the same work. It defines a virtual host abstraction that performs load balancing on a given set of service nodes according to the configured rules."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisite(s)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Complete ",(0,n.kt)("a",{parentName:"li",href:"./"},"Get APISIX")," to install APISIX.")),(0,n.kt)("h2",{id:"create-a-route"},"Create a Route"),(0,n.kt)("p",null,"In this section, you will create a route that forwards client requests to ",(0,n.kt)("a",{parentName:"p",href:"http://httpbin.org"},"httpbin.org"),", a public HTTP request and response service."),(0,n.kt)("p",null,"The following command creates a route, which should forward all requests sent to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/ip")," to ",(0,n.kt)("a",{parentName:"p",href:"http://httpbin.org/ip"},"httpbin.org/ip"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9180/apisix/admin/routes" -X PUT -d \'\n{\n  "id": "getting-started-ip",\n  "uri": "/ip",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\'\n')),(0,n.kt)("p",null,"You will receive an ",(0,n.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 201 OK")," response if the route was created successfully."),(0,n.kt)("h2",{id:"validate"},"Validate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9080/ip"\n')),(0,n.kt)("p",null,"The expected response is similar to the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "origin": "183.94.122.205"\n}\n')),(0,n.kt)("h2",{id:"whats-next"},"What's Next"),(0,n.kt)("p",null,"This tutorial creates a route with only one target node. In the next tutorial, you will learn how to configure load balancing with multiple target nodes."))}p.isMDXComponent=!0}}]);