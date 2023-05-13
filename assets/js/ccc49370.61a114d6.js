"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103,2139],{2240:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(7378),l=a(1956),r=a(4884),o=a(3179),s=a(1787),i=a(4142);const c=function(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var m=a(5013);const p=function(e){var t;const{content:a,sidebar:s}=e,{frontMatter:i,assets:p,metadata:u}=a,{title:h,description:g,nextItem:d,prevItem:b,date:f,tags:w,authors:E}=u,{hide_table_of_contents:v,keywords:_}=i,k=null!=(t=p.image)?t:i.image;return n.createElement(r.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:s,toc:!v&&a.toc?a.toc:void 0},n.createElement(l.Z,{title:h,description:g,keywords:_,image:k},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:f}),E.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:E.map((e=>e.url)).filter(Boolean).join(",")}),w.length>0&&n.createElement("meta",{property:"article:tag",content:w.map((e=>e.label)).join(",")})),n.createElement(o.Z,{frontMatter:i,assets:p,metadata:u,isBlogPostPage:!0},n.createElement(a,null)),(d||b)&&n.createElement(c,{nextItem:d,prevItem:b}))}},6459:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(5773),l=a(7378),r=a(4142),o=a(8948),s=a(8374),i=a(5423),c=a(5565),m=a(5519),p=a(7645),u=a(9861);const h={container:"container_MP5Z",linksRow:"linksRow_iwpv",linksCol:"linksCol_a1ec",copyright:"copyright_ZfFh"},g={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:i.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:m.Z,label:"Slack",to:"/docs/general/join"},{icon:c.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:p.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-"+(new Date).getFullYear()+" The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},d=e=>{let{to:t,icon:a,href:i,label:c,prependBaseUrlToHref:m,...p}=e;const u=(0,o.Z)(t),h=(0,o.Z)(i,{forcePrependBaseUrl:!0}),g=i?{href:m?h:i}:{to:u};return l.createElement(r.Z,(0,n.Z)({},g,p),l.createElement(s.JO,{icon:a}),l.createElement("span",null,c))},b=()=>{const{copyright:e,links:t,logo:a}=g;return g?l.createElement("footer",{className:h.container},t&&t.length>0&&l.createElement("div",{className:h.linksRow},t.map((e=>{let{title:t,items:a}=e;return l.createElement("div",{key:t,className:h.linksCol},l.createElement("div",null,t),l.createElement("ul",null,a.map((e=>l.createElement("li",{key:e.to,className:"footer__item"},l.createElement(d,e))))))}))),l.createElement("div",{className:h.copyright},l.createElement(r.Z,{href:a.href},l.createElement(u.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),l.createElement("div",{className:h.text},e))):null}},4867:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(5773),l=a(7378),r=a(3727),o=a(6281),s=a(353),i=a(5013),c=a(9635),m=a(4142);const p="iconLanguage_zID8",u="localizedBlogLink_cE-3",h=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:h,...g}=e,{i18n:{currentLocale:d,locales:b,localeConfigs:f}}=(0,s.Z)(),w=(0,i.l5)(),{pathname:E}=(0,c.TH)();if(E.startsWith("/zh/blog"))return l.createElement(m.Z,{className:u,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_self"},"English Blog");if(E.startsWith("/blog"))return l.createElement(m.Z,{className:u,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_self"},"\u4e2d\u6587\u535a\u5ba2");function v(e){return f[e].label}const _=[...a,...b.map((e=>{const t="pathname://"+w.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...h],k=t?"Languages":v(d);return l.createElement(r.Z,(0,n.Z)({},g,{href:"#",mobile:t,label:l.createElement("span",null,l.createElement(o.Z,{className:p}),l.createElement("span",null,k)),items:_}))}},5403:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(5773),l=a(7378),r=a(1542),o=a(353),s=a(8948),i=a(4142),c=a(5361),m=a(9033),p=a(9495),u=a(2492),h=a(7489),g=a(1787);const d="searchBox_fBfG";let b=null;function f(e){let{hit:t,children:a}=e;return l.createElement("a",{href:t.url,target:"_parent"},a)}function w(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:n}=(0,m.Z)();return l.createElement(i.Z,{to:n(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function E(e){var t,i;let{contextualSearch:m,...E}=e;const{siteMetadata:v}=(0,o.Z)(),_=(0,h.Z)(),k=null!=(t=null==(i=E.searchParameters)?void 0:i.facetFilters)?t:[],Z=m?[..._,...k]:k,C={...E.searchParameters,facetFilters:Z},{withBaseUrl:y}=(0,s.C)(),P=(0,l.useRef)(null),A=(0,l.useRef)(null),[N,I]=(0,l.useState)(!1),[S,B]=(0,l.useState)(null),x=(0,l.useCallback)((()=>b?Promise.resolve():Promise.all([a.e(6295).then(a.bind(a,6295)),Promise.all([a.e(532),a.e(9127)]).then(a.bind(a,9127)),Promise.all([a.e(532),a.e(160)]).then(a.bind(a,160))]).then((e=>{let[{DocSearchModal:t}]=e;b=t}))),[]),L=(0,l.useCallback)((()=>{x().then((()=>{P.current=document.createElement("div"),document.body.insertBefore(P.current,document.body.firstChild),I(!0)}))}),[x,I]),T=(0,l.useCallback)((()=>{I(!1),P.current.remove()}),[I]),F=(0,l.useCallback)((e=>{x().then((()=>{I(!0),B(e.key)}))}),[x,I,B]),M=(0,l.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,R=(0,l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:y(""+t.pathname+t.hash)}})))).current,U=(0,l.useMemo)((()=>e=>l.createElement(w,(0,n.Z)({},e,{onClose:T}))),[T]),O=(0,l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e)),[v.docusaurusVersion]);(0,p.D)({isOpen:N,onOpen:L,onClose:T,onInput:F,searchButtonRef:A});const z=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(c.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:d},l.createElement(u.a,{onTouchStart:x,onFocus:x,onMouseOver:x,onClick:L,ref:A,translations:{buttonText:z,buttonAriaLabel:z}})),N&&(0,r.createPortal)(l.createElement(b,(0,n.Z)({onClose:T,initialScrollY:window.scrollY,initialQuery:S,navigator:M,transformItems:R,hitComponent:f,resultsFooterComponent:U,transformSearchClient:O},E,{searchParameters:C})),P.current))}const v=function(){const{siteConfig:e}=(0,o.Z)();return l.createElement(E,e.themeConfig.algolia)}}}]);