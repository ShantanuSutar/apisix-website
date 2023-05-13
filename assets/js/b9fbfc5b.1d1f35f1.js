"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[10077],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=l(r),m=a,h=g["".concat(p,".").concat(m)]||g[m]||u[m]||s;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88673:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={title:"How to proxy the gRPC service"},i=void 0,o={unversionedId:"tutorials/proxy-grpc-service",id:"version-1.6.1/tutorials/proxy-grpc-service",isDocsHomePage:!1,title:"How to proxy the gRPC service",description:"In this practice, we will introduce how to proxy the gRPC service.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.1/tutorials/proxy-grpc-service.md",sourceDirName:"tutorials",slug:"/tutorials/proxy-grpc-service",permalink:"/docs/ingress-controller/tutorials/proxy-grpc-service",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.6.1/docs/en/latest/tutorials/proxy-grpc-service.md",tags:[],version:"1.6.1",frontMatter:{title:"How to proxy the gRPC service"},sidebar:"version-1.6.1/docs",previous:{title:"Proxy the httpbin service",permalink:"/docs/ingress-controller/tutorials/proxy-the-httpbin-service"},next:{title:"Manage Certificates With Cert Manager",permalink:"/docs/ingress-controller/tutorials/manage-certificates-with-cert-manager"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare a gRPC service",id:"prepare-a-grpc-service",children:[]},{value:"Declare gRPC proxy configuration",id:"declare-grpc-proxy-configuration",children:[{value:"Create a route and tell APISIX proxy rules",id:"create-a-route-and-tell-apisix-proxy-rules",children:[]},{value:"Inform APISIX the yages is a gRPC server through ApisixUpstream",id:"inform-apisix-the-yages-is-a-grpc-server-through-apisixupstream",children:[]},{value:"Configure certificates for gRPC",id:"configure-certificates-for-grpc",children:[]},{value:"Test",id:"test",children:[]},{value:"Cleanup",id:"cleanup",children:[]}]}],l={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this practice, we will introduce how to proxy the gRPC service."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"KIND")," to create a local Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"Apache APISIX")," in Kubernetes by ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Helm Chart"),"."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/blob/master/install.md"},"apisix-ingress-controller"),".")),(0,a.kt)("p",null,"Please note that in this practice, all components will be installed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ingress-apisix")," namespace. If your Kubernetes cluster does not have such namespace, please create it first."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns ingress-apisix\n")),(0,a.kt)("p",null,"You could install APISIX and APISIX ingress controller by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install apisix apisix/apisix -n ingress-apisix --set gateway.type=NodePort --set ingress-controller.enabled=true --set gateway.tls.enabled=true --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\n")),(0,a.kt)("p",null,"Check that all related components have been installed successfully, including ETCD cluster / APISIX / apisix-ingress-controller."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n ingress-apisix\nNAME                                        READY   STATUS    RESTARTS   AGE\napisix-569f94b7b6-qt5jj                     1/1     Running   0          101m\napisix-etcd-0                               1/1     Running   0          101m\napisix-etcd-1                               1/1     Running   0          101m\napisix-etcd-2                               1/1     Running   0          101m\napisix-ingress-controller-b5f5d49db-r9cxb   1/1     Running   0          101m\n")),(0,a.kt)("h2",{id:"prepare-a-grpc-service"},"Prepare a gRPC service"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mhausenblas/yages"},"yages")," as the gRPC server."),(0,a.kt)("p",null,"Declare the deployment configuration of yapes, exposing port ",(0,a.kt)("inlineCode",{parentName:"p"},"9000"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run yages -n ingress-apisix --image smirl/yages:0.1.3 --expose --port 9000\n")),(0,a.kt)("p",null,"Use the service that includes ",(0,a.kt)("inlineCode",{parentName:"p"},"grpcurl")," to test gRPC connectivity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl run -it -n ingress-apisix --rm grpcurl --restart=Never --image=quay.io/mhausenblas/gump:0.1 -- sh\nIf you don\'t see a command prompt, try pressing enter.\n/go $ grpcurl --plaintext yages:9000 yages.Echo.Ping\n{\n  "text": "pong"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you encounter a timeout error, you can first download ",(0,a.kt)("inlineCode",{parentName:"strong"},"quay.io/mhausenblas/gump:0.1")," to the local.")),(0,a.kt)("h2",{id:"declare-grpc-proxy-configuration"},"Declare gRPC proxy configuration"),(0,a.kt)("h3",{id:"create-a-route-and-tell-apisix-proxy-rules"},"Create a route and tell APISIX proxy rules"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: grpc-proxy-route\n  namespace: ingress-apisix\nspec:\n  http:\n    - name: grpc-route\n      match:\n        hosts:\n          - grpc-proxy\n        paths:\n          - "/*"\n      backends:\n      - serviceName: yages\n        servicePort: 9000\n        weight: 10\nEOF\n')),(0,a.kt)("h3",{id:"inform-apisix-the-yages-is-a-grpc-server-through-apisixupstream"},"Inform APISIX the yages is a gRPC server through ApisixUpstream"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixUpstream\nmetadata:\n  name: yages\n  namespace: ingress-apisix\nspec:\n  scheme: grpc\nEOF\n")),(0,a.kt)("h3",{id:"configure-certificates-for-grpc"},"Configure certificates for gRPC"),(0,a.kt)("p",null,"Common Name should be ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-proxy"),", which needs to be consistent with the hosts declared in ApisixRoute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout tls.key -out tls.crt -subj "/CN=grpc-proxy/O=grpc-proxy"\n')),(0,a.kt)("p",null,"Store key and crt in secret."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret tls grpc-secret -n ingress-apisix --cert=tls.crt --key=tls.key\n")),(0,a.kt)("p",null,"Inform APISIX SSL configuration through ApisixTls."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixTls\nmetadata:\n  name: grpc-secret\n  namespace: ingress-apisix\nspec:\n  hosts:\n    - "grpc-proxy"\n  secret:\n    name: grpc-secret\n    namespace: ingress-apisix\nEOF\n')),(0,a.kt)("h3",{id:"test"},"Test"),(0,a.kt)("p",null,"OK, the configuration is complete, continue to verify through ",(0,a.kt)("inlineCode",{parentName:"p"},"grpcurl"),", this time we visit the ",(0,a.kt)("inlineCode",{parentName:"p"},"yages")," service through the Apache APISIX proxy."),(0,a.kt)("p",null,"Check the APISIX DP (Data Plane) service, which is apisix-gateway in this example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n ingress-apisix\nNAME                        TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                      AGE\napisix-admin                ClusterIP   10.96.49.113   <none>        9180/TCP                     98m\napisix-etcd                 ClusterIP   10.96.81.162   <none>        2379/TCP,2380/TCP            98m\napisix-etcd-headless        ClusterIP   None           <none>        2379/TCP,2380/TCP            98m\napisix-gateway              NodePort    10.96.74.145   <none>        80:32600/TCP,443:32103/TCP   98m\napisix-ingress-controller   ClusterIP   10.96.78.108   <none>        80/TCP                       98m\nyages                       ClusterIP   10.96.37.236   <none>        9000/TCP                     94m\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl run -it -n ingress-apisix --rm grpcurl --restart=Never --image=quay.io/mhausenblas/gump:0.1 -- sh\nIf you don\'t see a command prompt, try pressing enter.\n/go $ grpcurl --insecure -servername grpc-proxy apisix-gateway:443 yages.Echo.Ping\n{\n  "text": "pong"\n}\n')),(0,a.kt)("p",null,"APISIX proxy gRPC server succeeded."),(0,a.kt)("h3",{id:"cleanup"},"Cleanup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns ingress-apisix\n")))}c.isMDXComponent=!0}}]);