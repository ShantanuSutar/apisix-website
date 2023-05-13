"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[24776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=o(n),g=i,h=d["".concat(p,".").concat(g)]||d[g]||c[g]||r;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17164:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"public-api",keywords:["APISIX","API Gateway","Public API"],description:"The public-api is used for exposing an API endpoint through a general HTTP API router."},l=void 0,u={unversionedId:"plugins/public-api",id:"version-3.1/plugins/public-api",isDocsHomePage:!1,title:"public-api",description:"The public-api is used for exposing an API endpoint through a general HTTP API router.",source:"@site/docs-apisix_versioned_docs/version-3.1/plugins/public-api.md",sourceDirName:"plugins",slug:"/plugins/public-api",permalink:"/docs/apisix/3.1/plugins/public-api",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.1/docs/en/latest/plugins/public-api.md",tags:[],version:"3.1",frontMatter:{title:"public-api",keywords:["APISIX","API Gateway","Public API"],description:"The public-api is used for exposing an API endpoint through a general HTTP API router."},sidebar:"version-3.1/docs",previous:{title:"csrf",permalink:"/docs/apisix/3.1/plugins/csrf"},next:{title:"GM",permalink:"/docs/apisix/3.1/plugins/gm"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Example usage",id:"example-usage",children:[{value:"Basic usage",id:"basic-usage",children:[]},{value:"Using custom URI",id:"using-custom-uri",children:[]},{value:"Securing the Route",id:"securing-the-route",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],o={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," is used for exposing an API endpoint through a general HTTP API router."),(0,i.kt)("p",null,"When you are using custom Plugins, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," Plugin to define a fixed, public API for a particular functionality. For example, you can create a public API endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwt/sign")," for JWT authentication using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.1/plugins/jwt-auth"},"jwt-auth")," Plugin."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The public API added in a custom Plugin is not exposed by default and the user should manually configure a Route and enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," Plugin on it."))),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uri"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},'""'),(0,i.kt)("td",{parentName:"tr",align:null},"URI of the public API. When setting up a Route, use this attribute to configure the original public API URI.")))),(0,i.kt)("h2",{id:"example-usage"},"Example usage"),(0,i.kt)("p",null,"The example below uses the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.1/plugins/jwt-auth"},"jwt-auth")," Plugin and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.1/plugins/key-auth"},"key-auth")," Plugin along with the ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," Plugin. Refer to their documentation for it configuration. This step is omitted below and only explains the configuration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," Plugin."),(0,i.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,i.kt)("p",null,"You can enable the Plugin on a specific Route as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X PUT 'http://127.0.0.1:9180/apisix/admin/routes/r1' \\\n    -H 'X-API-KEY: <api-key>' \\\n    -H 'Content-Type: application/json' \\\n    -d '{\n    \"uri\": \"/apisix/plugin/jwt/sign\",\n    \"plugins\": {\n        \"public-api\": {}\n    }\n}'\n")),(0,i.kt)("p",null,"Now, if you make a request to the configured URI, you will receive a JWT response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key'\n")),(0,i.kt)("h3",{id:"using-custom-uri"},"Using custom URI"),(0,i.kt)("p",null,"You can also use a custom URI for exposing the API as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/routes/r2\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/gen_token",\n    "plugins": {\n        "public-api": {\n            "uri": "/apisix/plugin/jwt/sign"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Now you can make requests to this new endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080/gen_token?key=user-key'\n")),(0,i.kt)("h3",{id:"securing-the-route"},"Securing the Route"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"key-auth")," Plugin to add authentication and secure the Route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/routes/r2\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/gen_token",\n    "plugins": {\n        "public-api": {\n            "uri": "/apisix/plugin/jwt/sign"\n        },\n        "key-auth": {}\n    }\n}\'\n')),(0,i.kt)("p",null,"Now, only authenticated requests are allowed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i 'http://127.0.0.1:9080/gen_token?key=user-key' \\\n    -H \"apikey: test-apikey\"\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n")),(0,i.kt)("p",null,"The below request will fail:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i 'http://127.0.0.1:9080/gen_token?key=user-key'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 401 Unauthorized\n")),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"To disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/hello",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:1980": 1\n    }\n  }\n}\'\n')))}s.isMDXComponent=!0}}]);