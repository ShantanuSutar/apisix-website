"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[32186],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66738:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Observe APIs",keywords:["API gateway","Apache APISIX","Observability","Monitor","Plugins"],description:"Apache APISIX Observability Plugins and take a look at how to set up these plugins."},o=void 0,s={unversionedId:"tutorials/observe-your-api",id:"tutorials/observe-your-api",isDocsHomePage:!1,title:"Observe APIs",description:"Apache APISIX Observability Plugins and take a look at how to set up these plugins.",source:"@site/docs/apisix/tutorials/observe-your-api.md",sourceDirName:"tutorials",slug:"/tutorials/observe-your-api",permalink:"/docs/apisix/next/tutorials/observe-your-api",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/tutorials/observe-your-api.md",tags:[],version:"current",frontMatter:{title:"Observe APIs",keywords:["API gateway","Apache APISIX","Observability","Monitor","Plugins"],description:"Apache APISIX Observability Plugins and take a look at how to set up these plugins."},sidebar:"docs",previous:{title:"Protect API",permalink:"/docs/apisix/next/tutorials/protect-api"},next:{title:"Manage API Consumers",permalink:"/docs/apisix/next/tutorials/manage-api-consumers"}},p=[{value:"API Observability",id:"api-observability",children:[]},{value:"A central point for observation",id:"a-central-point-for-observation",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Metrics",id:"metrics",children:[]},{value:"Tracing",id:"tracing",children:[]},{value:"Summary",id:"summary",children:[]}],l={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide, we can leverage the power of some ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," Observability Plugins and take a look at how to set up these plugins, how to use them to understand API behavior, and later solve problems that impact our users."),(0,r.kt)("h2",{id:"api-observability"},"API Observability"),(0,r.kt)("p",null,"Nowadays ",(0,r.kt)("strong",{parentName:"p"},"API Observability")," is already a part of every API development as it addresses many problems related to API consistency, reliability, and the ability to quickly iterate on new API features. When you design for full-stack observability, you get everything you need to find issues and catch breaking changes."),(0,r.kt)("p",null,"API observability can help every team in your organization:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sales and growth teams to monitor your API usage, free trials, observe expansion opportunities and ensure that API serves the correct data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Engineering teams to monitor and troubleshoot API issues.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Product teams to understand API usage and business value.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Security teams to detect and protect from API threats."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/14/6321ceff5548e.jpg",alt:"API observability in every team"})),(0,r.kt)("h2",{id:"a-central-point-for-observation"},"A central point for observation"),(0,r.kt)("p",null,"We know that ",(0,r.kt)("strong",{parentName:"p"},"an API gateway")," offers a central control point for incoming traffic to a variety of destinations but it can also be a central point for observation as well since it is uniquely qualified to know about all the traffic moving between clients and our service networks."),(0,r.kt)("p",null,"The core of observability breaks down into ",(0,r.kt)("em",{parentName:"p"},"three key areas"),": structured logs, metrics, and traces. Let\u2019s break down each pillar of API observability and learn how with Apache APISIX Plugins we can simplify these tasks and provides a solution that you can use to better understand API usage."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/14/6321cf14c555a.jpg",alt:"Observability of three key areas"})),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before enabling our plugins we need to install Apache APISIX, create a route, an upstream, and map the route to the upstream. You can simply follow ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/getting-started"},"getting started guide")," provided on the website."),(0,r.kt)("h2",{id:"logs"},"Logs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Logs")," are also easy to instrument and trivial steps of API observability, they can be used to inspect API calls in real-time for debugging, auditing, and recording time-stamped events that happened over time. There are several logger plugins Apache APISIX provides such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/http-logger/"},"http-logger"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/skywalking-logger/"},"skywalking-logger"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/tcp-logger"},"tcp-logger"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/kafka-logger"},"kafka-logger"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/rocketmq-logger"},"rocketmq-logger"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/udp-logger"},"udp-logger"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/clickhouse-logger"},"clickhouse-logger"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/error-log-logger"},"error-logger"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/google-cloud-logging"},"google-cloud-logging")))),(0,r.kt)("p",null,"And you can see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/http-logger"},"full list")," on the official website of Apache APISIX. Now for demo purposes, let's choose a simple but mostly used ",(0,r.kt)("em",{parentName:"p"},"http-logger")," plugin that is capable of sending API Log data requests to HTTP/HTTPS servers or sends as JSON objects to Monitoring tools. We can assume that a route and an upstream are created.  You can learn how to set up them in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://youtu.be/dUOjJkb61so"},"Getting started with Apache APISIX"))," video tutorial. Also, you can find all command-line examples on the GitHub page ",(0,r.kt)("a",{parentName:"p",href:"https://boburmirzo.github.io/apisix-observability-plugins/"},"apisix-observability-plugins")),(0,r.kt)("p",null,"You can generate a mock HTTP server at ",(0,r.kt)("a",{parentName:"p",href:"https://mockbin.org/"},"mockbin.com")," to record and view the logs. Note that we also bind the route to an upstream (You can refer to this documentation to learn about more ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/architecture-design/apisix"},"core concepts of Apache APISIX"),")."),(0,r.kt)("p",null,"The following is an example of how to enable the http-logger for a specific route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\ncurl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "plugins": {\n    "http-logger": {\n      "uri": "http://mockbin.org/bin/5451b7cd-af27-41b8-8df1-282ffea13a61"\n    }\n  },\n  "upstream_id": "1",\n  "uri": "/get"\n}\'\n\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To ",(0,r.kt)("inlineCode",{parentName:"p"},"http-logger")," plugin settings, your can just put your mock server URI address like below:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uri": "http://mockbin.org/bin/5451b7cd-af27-41b8-8df1-282ffea13a61"\n}\n')))),(0,r.kt)("p",null,"Once we get a successful response from APISIX server, we can send a request to this ",(0,r.kt)("em",{parentName:"p"},"get")," endpoint to generate logs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\ncurl -i http://127.0.0.1:9080/get\n\n")),(0,r.kt)("p",null,"Then if you click and navigate to the following our ",(0,r.kt)("a",{parentName:"p",href:"http://mockbin.org/bin/5451b7cd-af27-41b8-8df1-282ffea13a61/log"},"mock server link")," some recent logs are sent and we can see them:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/14/6321d1d83eb7a.png",alt:"http-logger-plugin-test-screenshot"})),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metrics")," are a numeric representation of data measured over intervals of time. You can also aggregate this data into daily or weekly frequency and run queries against a distributed system like ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/"},"Elasticsearch"),". Or sometimes based on metrics you trigger alerts to take any action later. Once API metrics are collected, you can track them with metrics tracking tools such as ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),"."),(0,r.kt)("p",null,"Apache APISIX API Gateway also offers ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/prometheus/"},"prometheus-plugin")," to fetch your API metrics and expose them in Prometheus. Behind the scene, Apache APISIX downloads the Grafana dashboard meta, imports it to ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana"),", and fetches real-time metrics from the Prometheus plugin."),(0,r.kt)("p",null,"Let\u2019s enable prometheus-plugin for our route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "prometheus": {}\n  },\n  "upstream_id": "1"\n}\'\n')),(0,r.kt)("p",null,"We fetch the metric data from the specified URL ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9091/apisix/prometheus/metrics\n")),(0,r.kt)("p",null,"You will get a response with Prometheus metrics something like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nServer: openresty\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\n\n# HELP apisix_batch_process_entries batch process remaining entries\n# TYPE apisix_batch_process_entries gauge\napisix_batch_process_entries{name="http logger",route_id="1",server_addr="172.19.0.8"} 0\n# HELP apisix_etcd_modify_indexes Etcd modify index for APISIX keys\n# TYPE apisix_etcd_modify_indexes gauge\napisix_etcd_modify_indexes{key="consumers"} 17819\napisix_etcd_modify_indexes{key="global_rules"} 17832\napisix_etcd_modify_indexes{key="max_modify_index"} 20028\napisix_etcd_modify_indexes{key="prev_index"} 18963\napisix_etcd_modify_indexes{key="protos"} 0\napisix_etcd_modify_indexes{key="routes"} 20028\n...\n')),(0,r.kt)("p",null,"And we can also check the status of our endpoint at the Prometheus dashboard by pointing to this URL ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/targets")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/14/6321d30b32024.png",alt:"plugin-orchestration-configure-rule-screenshot"})),(0,r.kt)("p",null,"As you can see, Apache APISIX exposed metrics endpoint is upon and running."),(0,r.kt)("p",null,"Now you can query metrics for ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix_http_status")," to see what HTTP requests are handled by API Gateway and what was the outcome."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/14/6321d30aed3b2.png",alt:"prometheus-plugin-dashboard-query-http-status-screenshot"})),(0,r.kt)("p",null,"In addition to this, you can view the Grafana dashboard running in your local instance. Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/14/6321d30bba97c.png",alt:"prometheus-plugin-grafana-dashboard-screenshot"})),(0,r.kt)("p",null,"You can also check two other plugins for metrics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/node-status"},"Node status Plugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/datadog"},"Datadog Plugin")))),(0,r.kt)("h2",{id:"tracing"},"Tracing"),(0,r.kt)("p",null,"The third is ",(0,r.kt)("strong",{parentName:"p"},"tracing")," or distributed tracing allows you to understand the life of a request as it traverses your service network and allows you to answer questions like what service has this request touched and how much latency was introduced. Traces enable you to further explore which logs to look at for a particular session or related set of API calls."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zipkin.io/"},"Zipkin")," an open-source distributed tracing system. ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/zipkin"},"APISIX plugin")," is supported to collect tracing and report to Zipkin Collector based on ",(0,r.kt)("a",{parentName:"p",href:"https://zipkin.io/pages/instrumenting.html"},"Zipkin API specification"),"."),(0,r.kt)("p",null,"Here\u2019s an example to enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"zipkin")," plugin on the specified route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "methods": [\n    "GET"\n  ],\n  "uri": "/get",\n  "plugins": {\n    "zipkin": {\n      "endpoint": "http://127.0.0.1:9411/api/v2/spans",\n      "sample_ratio": 1\n    }\n  },\n  "upstream_id": "1"\n}\'\n')),(0,r.kt)("p",null,"We can test our example by simply running the following curl command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/get\n")),(0,r.kt)("p",null,"As you can see, there are some additional trace identifiers (like traceId, spanId, parentId) were appended to the headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"X-B3-Parentspanid": "61bd3f4046a800e7",\n"X-B3-Sampled": "1",\n"X-B3-Spanid": "855cd5465957f414",\n"X-B3-Traceid": "e18985df47dab632d62083fd96626692",\n')),(0,r.kt)("p",null,"Then you can use a browser to access ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9411/zipkin"),", see traces on the Web UI of Zipkin."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that you need to run the Zipkin instance in order to install Zipkin Web UI. For example, by using docker you can simply run it:\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker run -d -p 9411:9411 openzipkin/zipkin"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/14/6321dc27f3d33.png",alt:"Zipkin plugin output 1"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/14/6321dc284049c.png",alt:"Zipkin plugin output 2"})),(0,r.kt)("p",null,"As you noticed, the recent traces were exposed in the above pictures."),(0,r.kt)("p",null,"You can also check two other plugins for tracing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/skywalking"},"Skywalking-plugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/opentelemetry"},"Opentelemetry-plugin")))),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"As we learned, API Observability is a sort of framework for managing your applications in an API world and Apache APISIX API Gateway plugins can help when observing modern API-driven applications by integrating to several observability platforms. So, you can make your development work focused on core business features instead of building a custom integration for observability tools."))}c.isMDXComponent=!0}}]);