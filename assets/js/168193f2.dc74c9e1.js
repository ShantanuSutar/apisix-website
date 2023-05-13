"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[74135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58305:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Secret"},o=void 0,s={unversionedId:"terminology/secret",id:"version-3.3/terminology/secret",isDocsHomePage:!1,title:"Secret",description:"Secrets refer to any sensitive information required during the running process of APISIX, which may be part of the core configuration (such as the etcd's password) or some sensitive information in the plugin. Common types of Secrets in APISIX include:",source:"@site/docs-apisix_versioned_docs/version-3.3/terminology/secret.md",sourceDirName:"terminology",slug:"/terminology/secret",permalink:"/docs/apisix/terminology/secret",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.3/docs/en/latest/terminology/secret.md",tags:[],version:"3.3",frontMatter:{title:"Secret"},sidebar:"version-3.3/docs",previous:{title:"Upstream",permalink:"/docs/apisix/terminology/upstream"},next:{title:"batch-requests",permalink:"/docs/apisix/plugins/batch-requests"}},l=[{value:"Description",id:"description",children:[]},{value:"Use environment variables to manage secrets",id:"use-environment-variables-to-manage-secrets",children:[{value:"Usage",id:"usage",children:[]},{value:"Example: use in key-auth plugin",id:"example-use-in-key-auth-plugin",children:[]}]},{value:"Use Vault to manage secrets",id:"use-vault-to-manage-secrets",children:[{value:"Usage",id:"usage-1",children:[]},{value:"Example: use in key-auth plugin",id:"example-use-in-key-auth-plugin-1",children:[]}]}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Secrets refer to any sensitive information required during the running process of APISIX, which may be part of the core configuration (such as the etcd's password) or some sensitive information in the plugin. Common types of Secrets in APISIX include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"username, the password for some components (etcd, Redis, Kafka, etc.)"),(0,r.kt)("li",{parentName:"ul"},"the private key of the certificate"),(0,r.kt)("li",{parentName:"ul"},"API key"),(0,r.kt)("li",{parentName:"ul"},"Sensitive plugin configuration fields, typically used for authentication, hashing, signing, or encryption")),(0,r.kt)("p",null,"APISIX Secret allows users to store secrets through some secrets management services (Vault, etc.) in APISIX, and read them according to the key when using them to ensure that ",(0,r.kt)("strong",{parentName:"p"},"Secrets do not exist in plain text throughout the platform"),"."),(0,r.kt)("p",null,"Its working principle is shown in the figure:\n",(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.3/docs/assets/images/secret.png",alt:"secret"})),(0,r.kt)("p",null,"APISIX currently supports storing secrets in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#use-environment-variables-to-manage-secrets"},"Environment Variables")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#use-vault-to-manage-secrets"},"HashiCorp Vault"))),(0,r.kt)("p",null,"You can use APISIX Secret functions by specifying format variables in the consumer configuration of the following plugins, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If a key-value pair ",(0,r.kt)("inlineCode",{parentName:"p"},'key: "$ENV://ABC"')," is configured in APISIX and the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"$ENV://ABC")," is unassigned in the environment variable, ",(0,r.kt)("inlineCode",{parentName:"p"},"$ENV://ABC")," will be interpreted as a string literal, instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),"."))),(0,r.kt)("h2",{id:"use-environment-variables-to-manage-secrets"},"Use environment variables to manage secrets"),(0,r.kt)("p",null,"Using environment variables to manage secrets means that you can save key information in environment variables, and refer to environment variables through variables in a specific format when configuring plugins. APISIX supports referencing system environment variables and environment variables configured through the Nginx ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," directive."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ENV://$env_name/$sub_key\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"env_name: environment variable name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"sub_key: get the value of a property when the value of the environment variable is a JSON string"),(0,r.kt)("p",{parentName:"li"},"If the value of the environment variable is of type string, such as:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export JACK_AUTH_KEY=abc\n")),(0,r.kt)("p",null,"It can be referenced as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ENV://JACK_AUTH_KEY\n")),(0,r.kt)("p",null,"If the value of the environment variable is a JSON string like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export JACK={"auth-key":"abc","openid-key": "def"}\n')),(0,r.kt)("p",null,"It can be referenced as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Get the auth-key of the environment variable JACK\n$ENV://JACK/auth-key\n\n# Get the openid-key of the environment variable JACK\n$ENV://JACK/openid-key\n")),(0,r.kt)("h3",{id:"example-use-in-key-auth-plugin"},"Example: use in key-auth plugin"),(0,r.kt)("p",null,"Step 1: Create environment variables before the APISIX instance starts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export JACK_AUTH_KEY=abc\n")),(0,r.kt)("p",null,"Step 2: Reference the environment variable in the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "$ENV://JACK_AUTH_KEY"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Through the above steps, the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," configuration in the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin can be saved in the environment variable instead of being displayed in plain text when configuring the plugin."),(0,r.kt)("h2",{id:"use-vault-to-manage-secrets"},"Use Vault to manage secrets"),(0,r.kt)("p",null,"Using Vault to manage secrets means that you can store secrets information in the Vault service and refer to it through variables in a specific format when configuring plugins. APISIX currently supports ",(0,r.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/vault/docs/secrets/kv/kv-v1"},"Vault KV engine version V1"),"."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$secret://$manager/$id/$secret_name/$key\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"manager: secrets management service, could be the Vault, AWS, etc."),(0,r.kt)("li",{parentName:"ul"},"id: APISIX Secrets resource ID, which needs to be consistent with the one specified when adding the APISIX Secrets resource"),(0,r.kt)("li",{parentName:"ul"},"secret_name: the secret name in the secrets management service"),(0,r.kt)("li",{parentName:"ul"},"key: the key corresponding to the secret in the secrets management service")),(0,r.kt)("h3",{id:"example-use-in-key-auth-plugin-1"},"Example: use in key-auth plugin"),(0,r.kt)("p",null,"Step 1: Create the corresponding key in the Vault, you can use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault kv put apisix/jack auth-key=value\n")),(0,r.kt)("p",null,"Step 2: Add APISIX Secrets resources through the Admin API, configure the Vault address and other connection information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/secrets/vault/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "https://127.0.0.1:8200"\uff0c\n    "prefix": "apisix",\n    "token": "root"\n}\'\n')),(0,r.kt)("p",null,"If you use APISIX Standalone mode, you can add the following configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix.yaml")," configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"secrets:\n  - id: vault/1\n    prefix: apisix\n    token: root\n    uri: 127.0.0.1:8200\n")),(0,r.kt)("p",null,"Step 3: Reference the APISIX Secrets resource in the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin and fill in the key information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "$secret://vault/1/jack/auth-key"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Through the above two steps, when the user request hits the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin, the real value of the key in the Vault will be obtained through the APISIX Secret component."))}c.isMDXComponent=!0}}]);