"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[45033],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=u(t),d=r,g=h["".concat(o,".").concat(d)]||h[d]||c[d]||l;return t?a.createElement(g,i(i({ref:n},s),{},{components:t})):a.createElement(g,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=h;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9481:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const l={title:"degraphql",keywords:["Apache APISIX","API Gateway","Plugin","Degraphql"],description:"This document contains information about the Apache APISIX degraphql Plugin."},i=void 0,p={unversionedId:"plugins/degraphql",id:"version-3.3/plugins/degraphql",isDocsHomePage:!1,title:"degraphql",description:"This document contains information about the Apache APISIX degraphql Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.3/plugins/degraphql.md",sourceDirName:"plugins",slug:"/plugins/degraphql",permalink:"/zh/docs/apisix/plugins/degraphql",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.3/docs/zh/latest/plugins/degraphql.md",tags:[],version:"3.3",frontMatter:{title:"degraphql",keywords:["Apache APISIX","API Gateway","Plugin","Degraphql"],description:"This document contains information about the Apache APISIX degraphql Plugin."},sidebar:"version-3.3/docs",previous:{title:"mocking",permalink:"/zh/docs/apisix/plugins/mocking"},next:{title:"body-transformer",permalink:"/zh/docs/apisix/plugins/body-transformer"}},o=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Example usage",id:"example-usage",children:[{value:"Start GraphQL server",id:"start-graphql-server",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:o};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"degraphql")," Plugin is used to support decoding RESTful API to GraphQL."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"The GraphQL query sent to the upstream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operation_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the operation, is only required if multiple operations are present in the query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variables"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"The variables used in the GraphQL query")))),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("h3",{id:"start-graphql-server"},"Start GraphQL server"),(0,r.kt)("p",null,"We use docker to deploy a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/npalm/graphql-java-demo"},"GraphQL server demo")," as the backend."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name grapql-demo -p 8080:8080 npalm/graphql-java-demo\n")),(0,r.kt)("p",null,"After starting the server, the following endpoints are now available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"http://localhost:8080/graphiql - GraphQL IDE - GrahphiQL"),(0,r.kt)("li",{parentName:"ul"},"http://localhost:8080/playground - GraphQL IDE - Prisma GraphQL Client"),(0,r.kt)("li",{parentName:"ul"},"http://localhost:8080/altair - GraphQL IDE - Altair GraphQL Client"),(0,r.kt)("li",{parentName:"ul"},"http://localhost:8080/ - A simple reacter"),(0,r.kt)("li",{parentName:"ul"},"ws://localhost:8080/subscriptions")),(0,r.kt)("h3",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("h4",{id:"query-list"},"Query list"),(0,r.kt)("p",null,"If we have a GraphQL query like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  persons {\n    id\n    name\n  }\n}\n")),(0,r.kt)("p",null,"We can execute it on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/playground"),", and get the data as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "persons": [\n      {\n        "id": "7",\n        "name": "Niek"\n      },\n      {\n        "id": "8",\n        "name": "Josh"\n      },\n      ......\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"Now we can use RESTful API to query the same data that is proxy by APISIX."),(0,r.kt)("p",null,"First, we need to create a route in APISIX, and enable the degreaph plugin on the route, we need to define the GraphQL query in the plugin's config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request PUT \'http://localhost:9080/apisix/admin/routes/1\' \\\n--header \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "uri": "/graphql",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    },\n    "plugins": {\n        "degraphql": {\n            "query": "{\\n  persons {\\n    id\\n    name\\n  }\\n}\\n"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"We convert the GraphQL query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  persons {\n    id\n    name\n  }\n}\n")),(0,r.kt)("p",null,"to JSON string ",(0,r.kt)("inlineCode",{parentName:"p"},'"{\\n  persons {\\n    id\\n    name\\n  }\\n}\\n"'),", and put it in the plugin's configuration."),(0,r.kt)("p",null,"Then we can query the data by RESTful API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'http://localhost:9080/graphql'\n")),(0,r.kt)("p",null,"and get the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "persons": [\n      {\n        "id": "7",\n        "name": "Niek"\n      },\n      {\n        "id": "8",\n        "name": "Josh"\n      },\n      ......\n    ]\n  }\n}\n')),(0,r.kt)("h4",{id:"query-with-variables"},"Query with variables"),(0,r.kt)("p",null,"If we have a GraphQL query like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query($name: String!, $githubAccount: String!) {\n  persons(filter: { name: $name, githubAccount: $githubAccount }) {\n    id\n    name\n    blog\n    githubAccount\n    talks {\n      id\n      title\n    }\n  }\n}\n\nvariables:\n{\n  "name": "Niek",\n  "githubAccount": "npalm"\n}\n')),(0,r.kt)("p",null,"we can execute it on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/playground"),", and get the data as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "persons": [\n      {\n        "id": "7",\n        "name": "Niek",\n        "blog": "https://040code.github.io",\n        "githubAccount": "npalm",\n        "talks": [\n          {\n            "id": "19",\n            "title": "GraphQL - The Next API Language"\n          },\n          {\n            "id": "20",\n            "title": "Immutable Infrastructure"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"We convert the GraphQL query to JSON string like ",(0,r.kt)("inlineCode",{parentName:"p"},'"query($name: String!, $githubAccount: String!) {\\n  persons(filter: { name: $name, githubAccount: $githubAccount }) {\\n    id\\n    name\\n    blog\\n    githubAccount\\n    talks {\\n      id\\n      title\\n    }\\n  }\\n}"'),", so we create a route like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request PUT \'http://localhost:9080/apisix/admin/routes/1\' \\\n--header \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "uri": "/graphql",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    },\n    "plugins": {\n        "degraphql": {\n            "query": "query($name: String!, $githubAccount: String!) {\\n  persons(filter: { name: $name, githubAccount: $githubAccount }) {\\n    id\\n    name\\n    blog\\n    githubAccount\\n    talks {\\n      id\\n      title\\n    }\\n  }\\n}",\n            "variables": [\n                "name",\n                "githubAccount"\n            ]\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"We define the ",(0,r.kt)("inlineCode",{parentName:"p"},"variables")," in the plugin's config, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"variables")," is an array, which contains the variables' name in the GraphQL query, so that we can pass the query variables by RESTful API."),(0,r.kt)("p",null,"Query the data by RESTful API that proxy by APISIX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:9080/graphql\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "Niek",\n    "githubAccount": "npalm"\n}\'\n')),(0,r.kt)("p",null,"and get the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "persons": [\n      {\n        "id": "7",\n        "name": "Niek",\n        "blog": "https://040code.github.io",\n        "githubAccount": "npalm",\n        "talks": [\n          {\n            "id": "19",\n            "title": "GraphQL - The Next API Language"\n          },\n          {\n            "id": "20",\n            "title": "Immutable Infrastructure"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"which is the same as the result of the GraphQL query."),(0,r.kt)("p",null,"It's also possible to get the same result via GET request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl 'http://localhost:9080/graphql?name=Niek&githubAccount=npalm'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "persons": [\n      {\n        "id": "7",\n        "name": "Niek",\n        "blog": "https://040code.github.io",\n        "githubAccount": "npalm",\n        "talks": [\n          {\n            "id": "19",\n            "title": "GraphQL - The Next API Language"\n          },\n          {\n            "id": "20",\n            "title": "Immutable Infrastructure"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"In the GET request, the variables are passed in the query string."),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"degraphql")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "methods": ["GET"],\n  "uri": "/graphql",\n  "plugins": {},\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:8080": 1\n    }\n  }\n}\'\n')))}s.isMDXComponent=!0}}]);