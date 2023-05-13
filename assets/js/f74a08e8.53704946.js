"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9628],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69436:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(25773),o=(a(27378),a(35318));const i={title:"Hyperchain Technology implements BaaS platform with APISIX",slug:"2021/08/09/apache-apisix-in-quliankeji",author:"Weifeng Sheng",keywords:["APISIX","Kong","Nginx","Hyperchain","BaaS"],description:"This article introduces the implementation of cloud-native API gateway Apache APISIX in the Hyperchain Blockchain BaaS platform, and the reasons for choosing Apache APISIX.",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/%E8%B6%A3%E9%93%BE%E7%A7%91%E6%8A%80.png"},r=void 0,s={permalink:"/blog/2021/08/09/apache-apisix-in-quliankeji",source:"@site/blog/2021/08/09/Apache-APISIX-in-Quliankeji.md",title:"Hyperchain Technology implements BaaS platform with APISIX",description:"This article introduces the implementation of cloud-native API gateway Apache APISIX in the Hyperchain Blockchain BaaS platform, and the reasons for choosing Apache APISIX.",date:"2021-08-09T00:00:00.000Z",formattedDate:"August 9, 2021",tags:[{label:"Case Studies",permalink:"/blog/tags/case-studies"}],readingTime:9.685,truncated:!0,authors:[{name:"Weifeng Sheng"}],prevItem:{title:"APISIX Architecture: How to Dynamically Manage NGINX Cluster?",permalink:"/blog/2021/08/10/apisix-nginx"},nextItem:{title:"How to Improve the Observability of Nginx with Apache APISX",permalink:"/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx"}},l={authorsImageUrls:[void 0]},c=[{value:"Background Information",id:"background-information",children:[],level:2},{value:"Apache APISIX Usage Scenarios and Gains",id:"apache-apisix-usage-scenarios-and-gains",children:[{value:"Scenario 1: Practice on BaaS system",id:"scenario-1-practice-on-baas-system",children:[{value:"Routing and Forwarding",id:"routing-and-forwarding",children:[],level:4},{value:"Traffic Control",id:"traffic-control",children:[],level:4},{value:"Security and Access Control",id:"security-and-access-control",children:[],level:4},{value:"Dynamic Loading",id:"dynamic-loading",children:[],level:4}],level:3},{value:"Scenario 2: Practice on blockchain nodes",id:"scenario-2-practice-on-blockchain-nodes",children:[{value:"Conserve public network ports",id:"conserve-public-network-ports",children:[],level:4},{value:"Access Control",id:"access-control",children:[],level:4},{value:"Improved node stability",id:"improved-node-stability",children:[],level:4},{value:"Multi-protocol support",id:"multi-protocol-support",children:[],level:4}],level:3}],level:2},{value:"What were the kinks we went through before choosing Apache APISIX?",id:"what-were-the-kinks-we-went-through-before-choosing-apache-apisix",children:[],level:2},{value:"Future Plans",id:"future-plans",children:[{value:"Plan 1: Use Apache APISIX provided or self-developed logging plugins",id:"plan-1-use-apache-apisix-provided-or-self-developed-logging-plugins",children:[],level:3},{value:"Plan 2: Development of monitoring plugins to achieve traceability",id:"plan-2-development-of-monitoring-plugins-to-achieve-traceability",children:[],level:3},{value:"Plan 3: Use APISIX Ingress Controller instead of Kubernetes\u2019 default Nginx-Ingress",id:"plan-3-use-apisix-ingress-controller-instead-of-kubernetes-default-nginx-ingress",children:[],level:3},{value:"Plan 4: Explore Service Mesh",id:"plan-4-explore-service-mesh",children:[],level:3}],level:2}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article introduces the landing practice of Apache APISIX in Hyperchain Blockchain BaaS platform, and explains why Hyperchain Technology has chosen Apache APISIX among many gateway applications.")),(0,o.kt)("h2",{id:"background-information"},"Background Information"),(0,o.kt)("p",null,"BaaS, which is also known as \u201cBlockchain as a Service\u201d, is an open platform that embeds blockchain framework into cloud computing platform and provides convenient and high performance blockchain ecological environment and ecological support services for developers by taking advantage of the deployment and management of cloud service infrastructure to support their business expansion and operation. It is an open blockchain platform that supports developers\u2019 business expansion and operation support."),(0,o.kt)("p",null,"Typically, a complete BaaS solution includes four main components: device access, access control, service monitoring and blockchain platform."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723437500-89897c8a-7912-49d3-bea9-1f21e3e6e0d7.001",alt:"BaaS introduction"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We can build blockchain network quickly and flexibly through BaaS. For enterprises, with BaaS platform, we can manage blockchain business in a unified way.")),(0,o.kt)("p",null,"I believe that many of you have come across the contract code on top of Ethernet. Through BaaS platform, we can easily write smart contracts on the IDE and then deploy it to our created blockchain network, and finally for the upper layer services to call the blockchain-related contracts to carry out the flow of business."),(0,o.kt)("p",null,"Because the chain has so many nodes, from tens to thousands, it is difficult to monitor and maintain the operation of the chain without the support of BaaS platform. By using BaaS platform, users can not only save cost, but also manage the blockchain more conveniently and the security of the whole system is higher."),(0,o.kt)("p",null,"The architecture of BaaS product of Hyperchain Technology is divided into four layers in total, which are resource layer, blockchain underlying layer, blockchain service layer and application layer."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723539486-3d0d42a2-217e-420d-8e6f-22eb4b37d464.002",alt:"Hyperchain BaaS Architecture"})),(0,o.kt)("p",null,"Now that we have a preliminary understanding of Baas platform, let\u2019s take a look at the usage scenarios and gains of Apache APISIX on BaaS system."),(0,o.kt)("h2",{id:"apache-apisix-usage-scenarios-and-gains"},"Apache APISIX Usage Scenarios and Gains"),(0,o.kt)("h3",{id:"scenario-1-practice-on-baas-system"},"Scenario 1: Practice on BaaS system"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646814465109-4ec35266-ce3f-4547-bab7-d75edd332e0c.003",alt:"Apache APISIX applied on BaaS system"})),(0,o.kt)("p",null,"The architecture of Hyperchain\u2019s BaaS platform is not only microservices-based, but also divided into two layers, which are business access layer and core service layer."),(0,o.kt)("p",null,"BFF (Backend For Frontend) is generally to the frontend, through HTTP access. The core services are generally registered through services like Dubbo, ETCD, etc., and finally accessed using gRPC."),(0,o.kt)("p",null,"The role of BFF is to do business aggregation, format adaptation, and give the final result data to the frontend."),(0,o.kt)("p",null,"These business modules need to store the relevant information in the registry (ETCD), and then read out the information through the gateway module when it is used."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646814465106-81be15cb-aabf-4240-a98b-e2cd6b8bc5ad.003_1",alt:"Hyperchain BaaS Platform Workflow"})),(0,o.kt)("p",null,"In the whole process, we mainly use four features of Apache APISIX."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Routing and Forwarding"),(0,o.kt)("li",{parentName:"ul"},"Traffic Control"),(0,o.kt)("li",{parentName:"ul"},"Security and Access Control"),(0,o.kt)("li",{parentName:"ul"},"Dynamic Loading")),(0,o.kt)("p",null,"Let\u2019s learn more about how these features are used on the Hyperchain BaaS system below."),(0,o.kt)("h4",{id:"routing-and-forwarding"},"Routing and Forwarding"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635425-8adc8c53-5a00-4457-9ac7-0b8f55308d27.004",alt:"Apache APISIX Proxy-rewrite Routing and Forwarding"})),(0,o.kt)("p",null,"Hyperchain uses the official Proxy-rewrite plugin provided by Apache APISIX to perform route forwarding services."),(0,o.kt)("p",null,"When a request accesses port 8080, through the Proxy-rewrite plugin, the request will be accessed to the API of the corresponding service."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635426-c5de189b-e934-4395-b671-f0d161fa8c19.005",alt:"Apache APISIX Proxy-rewrite Routing and Forwarding 2"})),(0,o.kt)("p",null,"The above figure shows the interface of Proxy-rewrite, we can see that you can match your own forwarding rules by regular matching, of course, you can also write HOST or by URL to match."),(0,o.kt)("h4",{id:"traffic-control"},"Traffic Control"),(0,o.kt)("p",null,"Before Apache APISIX, the platform needed to write its own logic code. With Apache APISIX, we can directly use the officially provided Limit-req plugin to limit the input and output for the purpose of protecting the system."),(0,o.kt)("p",null,"Through the interface of the Limit-req plugin, we can easily configure parameters such as speed, bucket height, etc."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635427-0550eac8-a4dd-40c9-99f8-8ec42646fd2a.006",alt:"Apache APISIX Traffic Control"})),(0,o.kt)("p",null,"In the Hyperchain BaaS platform, customers can build any chains according to their needs. At this point, the BaaS platform needs to quickly support the creation of these chains and manage their lifecycle."),(0,o.kt)("p",null,"The creation of these federated chains is not solved by hard code written directly on the code, but by driver components. In a privatization scenario, we need to have such driver components to provide support quickly and need to control the frequency of access to the driver processes."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635428-5473b0db-b7f9-4bfa-b91c-063d68a6ed60.007",alt:"Apache APISIX Traffic Control 2"})),(0,o.kt)("p",null,"Before Apache APISIX, the platform needed to write its own logic code. With Apache APISIX, we can directly use the officially provided Limit-req plugin to limit the input and output for the purpose of protecting the system. Through the interface of the Limit-req plugin, we can easily configure parameters such as speed, bucket height, etc."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635429-36f04fcf-0596-43b1-9147-af79c2786ba2.008",alt:"Apache APISIX Traffic Control 3"})),(0,o.kt)("h4",{id:"security-and-access-control"},"Security and Access Control"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635429-554b8e0f-8be8-4828-91cf-cc4784d30558.009",alt:"Apache APISIX Security and Access Control"})),(0,o.kt)("p",null,"In Hyperchain\u2019s privatization scenario, many users don\u2019t like to use the account system provided by the platform and ask the platform to connect to their existing account system, so Hyperchain uses Apache APISIX\u2019s Access-Auth plugin to adapt the third-party authentication service address with it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635430-e5e6d1ad-79c5-4a4e-b82b-2803794bc7d0.010",alt:"Apache APISIX Security and Access Control 2"})),(0,o.kt)("p",null,"In Baas platform, all web requests will go through Apache APISIX\u2019s Access-Auth plugin, complete cookie parsing and authentication, then carry user information in HEAD header and pass to back-end microservices to process business. The advantage of this is that the developer of the microservice does not need to parse the cookie, but can send the user information to the microservice module directly, which is very convenient."),(0,o.kt)("h4",{id:"dynamic-loading"},"Dynamic Loading"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635431-1a0f5d29-2643-4d72-8ec7-265ea181bc47.011",alt:"Apache APISIX Dynamic Loading"})),(0,o.kt)("p",null,"The client interface of Baas platform of Hyperchain does not have a \u201cstore\u201d button on top; however, there is a \u201cstore\u201d button on the public platform of Baas of Hyperchain. In some privatization scenarios, the \u201cstore\u201d button is not needed, but the backend services of both are shared, and the platform interface will be displayed differently according to the demand as soon as the backend services are started."),(0,o.kt)("p",null,"Hyperchain uses Apache APISIX to operate in collaboration with the service center to ensure the addition and adjustment of front-end microservice business modules, which makes the online publishing process of Hyperchain\u2019s Baas platform very easy."),(0,o.kt)("h3",{id:"scenario-2-practice-on-blockchain-nodes"},"Scenario 2: Practice on blockchain nodes"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635432-a4e185fd-3648-4a60-83b7-f767560c3a4d.012",alt:"blockchain nodes"})),(0,o.kt)("p",null,"When a user buys a chain through the BaaS platform, its upper business or developer client connects directly to the nodes, for example, a bank connects to three on the left, an insurance connects to three on the right, or some users access a whole chain. This will bring a big problem because basically every node will be accessed, so we need to expose all the nodes on the blockchain to the public network environment."),(0,o.kt)("h4",{id:"conserve-public-network-ports"},"Conserve public network ports"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635433-3999243b-7457-48d3-803a-99860c9e1bac.013",alt:"public network ports"})),(0,o.kt)("p",null,"This situation may be acceptable for private users, but for a BaaS platform like Hyperchain, which is open to all Internet users, it requires dozens or hundreds or thousands of public IPs, which is not only very costly but also a waste of public IP resources."),(0,o.kt)("p",null,"In order to solve this problem, Hyperchain\u2019s Baas platform uses Apache APISIX."),(0,o.kt)("h4",{id:"access-control"},"Access Control"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635433-7e76d02b-99e9-479a-8cbf-a56ae120913d.014",alt:"Access Control"})),(0,o.kt)("p",null,"Unlike traditional software, different heterogeneous chains have their own very complicated RBAC permission control, so users need to add many certificates on the client side, which is a great headache."),(0,o.kt)("p",null,"In order to solve this pain point, Baas platform of Hyperchain Technology uses Apache APISIX\u2019s Key-auth plugin to allow users with permission to access directly and unify the permission control of all chains."),(0,o.kt)("h4",{id:"improved-node-stability"},"Improved node stability"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635434-60398981-d33b-4b7c-b43c-0aba4b0779a7.015",alt:"blockchain nodes 2"})),(0,o.kt)("p",null,"One of the properties of blockchain is that, essentially, accessing any node is the same."),(0,o.kt)("p",null,"Just like Bitcoin, we access any node to get the data, so many users operate directly against a node."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635435-3dd3e082-f1aa-4763-ab46-c15d34a28f58.016",alt:"Improved node stability"})),(0,o.kt)("p",null,"However, the direct access to a single node model is vulnerable to attacks. For example, banks have a very high concurrency, TPS can reach 4\u20135W/sec, and every transaction will hit this node."),(0,o.kt)("p",null,"In order to achieve the effect of fast dynamic scaling, Hyperchain\u2019s Baas platform utilizes Apache APISIX HPA deployment model on Kubernetes to dynamically scale according to the traffic, effectively solving the single-point traffic impact problem."),(0,o.kt)("h4",{id:"multi-protocol-support"},"Multi-protocol support"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635435-d68f64a9-6dc2-40d4-ab81-9604767d363d.017",alt:"Multi-protocol support"})),(0,o.kt)("p",null,"Because Hyperchain\u2019s Baas platform uses a lot of heterogeneous chains, the protocols used are very diverse, such as HTTP, RPC, WebSocket and so on. Apache APISIX supports multi-protocols very well, which can fully meet the use of Baas platform in the relevant scenarios, which significantly reduces the development cost."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635436-2cd77c45-6a60-4ad2-aa24-0d47758fbe3a.018",alt:"Multi-protocol support 2"})),(0,o.kt)("h2",{id:"what-were-the-kinks-we-went-through-before-choosing-apache-apisix"},"What were the kinks we went through before choosing Apache APISIX?"),(0,o.kt)("p",null,"Before choosing Apache APISIX, Hyperchain\u2019s Baas platform was already using Kong, but Kong was later abandoned."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why did we give up on Kong?")),(0,o.kt)("p",null,"Kong uses PostgreSQL to store its information, which is obviously not a good way to do it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635437-69eef80d-9f35-4164-9779-b1c65bc311d8.019",alt:"Kong"})),(0,o.kt)("p",null,"In the software industry, high availability configuration of databases is very complex. Not only do you need to have a dedicated DBA, but the implementation is also very difficult."),(0,o.kt)("p",null,"The Baas system of Hyperchain Technology is already using MySQL, if we need to build a PostgreSQL database here, it means that Hyperchain Technology\u2019s Baas system needs to have two sets of relational databases. This brings problems to the implementation difficulty and operation and maintenance cost, and introduces more risks."),(0,o.kt)("p",null,"At the same time, because ETCD is also used in many places of Hyperchain\u2019s Baas platform, finally, Hyperchain abandoned Kong and invested in Apache APISIX which is based on ETCD."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why did we give up on Nginx?")),(0,o.kt)("p",null,"Some of you may think, \u201cWhy not use Nginx?"),(0,o.kt)("p",null,"Yes, Hyperchain\u2019s BaaS platform used to use Nginx, but later we found that Nginx has many imperfections compared to Apache APISIX."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635437-d6e57e5d-3a6f-4140-9a1a-68adcd3790a0.020",alt:"Nginx"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Issues on hot starts and hot plugins"))),(0,o.kt)("p",null,"In the Hyperchain BaaS platform, we not only need to manage the federated chain, but also need to be able to add and delete nodes at any time."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Clustering difficulties"))),(0,o.kt)("p",null,"While Nginx is very difficult to cluster, Apache APISIX can be implemented with ETCD clustering enhancements."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unable to proxy TCP and UDP directly"))),(0,o.kt)("p",null,"By default, Nginx can only implement proxies for Layer 7 networks. To support Layer 4 networks, you need to recompile the Stream module, while Apache APISIX can support both Layer 4/7 proxies."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lack of Dashboard"))),(0,o.kt)("p",null,"Nginx does not have a Dashboard, and the Apache APISIX Dashboard makes it less difficult for development and operations staff to manage nodes."),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646723635438-7392246c-e644-41ca-a4aa-599533f47239.021",alt:"Future Plans"})),(0,o.kt)("h3",{id:"plan-1-use-apache-apisix-provided-or-self-developed-logging-plugins"},"Plan 1: Use Apache APISIX provided or self-developed logging plugins"),(0,o.kt)("p",null,"The official website of Apache APISIX already provides a lot of logging plugins, such as HTTP and UDP support, including kafka, etc. However, for a platform like Hyperchain BaaS, which needs to control thousands of blockchain networks, it is a big headache to search for fault traces in the logs when every problem occurs."),(0,o.kt)("p",null,"In the near future, Hyperchain will add some APM functions between BaaS system and blockchain system based on Apache APISIX. Improve the efficiency of operation and maintenance management in multi-chain scenarios."),(0,o.kt)("h3",{id:"plan-2-development-of-monitoring-plugins-to-achieve-traceability"},"Plan 2: Development of monitoring plugins to achieve traceability"),(0,o.kt)("p",null,"Domestic regulation of blockchain is very strict, and all operations need to be traceable and traceable."),(0,o.kt)("p",null,"In the future, Hyperchain Technology will develop regulatory plugins based on Apache APISIX to improve the regulatory capability and add VIP, whitelist, replay and other functions."),(0,o.kt)("h3",{id:"plan-3-use-apisix-ingress-controller-instead-of-kubernetes-default-nginx-ingress"},"Plan 3: Use APISIX Ingress Controller instead of Kubernetes\u2019 default Nginx-Ingress"),(0,o.kt)("p",null,"When deploying Kubernetes, we usually choose Nginx-Ingress to handle outbound requests, but because of some of the Nginx issues mentioned above, Hyperchain is investigating using APISIX Ingress Controller."),(0,o.kt)("h3",{id:"plan-4-explore-service-mesh"},"Plan 4: Explore Service Mesh"),(0,o.kt)("p",null,"Hyperchain has tried traffic-mesh before, and will try to use APISIX Mesh in the future."))}h.isMDXComponent=!0}}]);