(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(193),s=a(179),o=a(237),l=a.n(o),i=a(239),m=a.n(i),u=a(240),d=a.n(u),p=function(){var e=null,t=Object(n.useState)(1),a=t[0],c=t[1];return Object(n.useEffect)(function(){return function(){clearTimeout(e)}},[]),r.a.createElement(s.c,{className:d.a.projectHeader},r.a.createElement(s.b,{className:d.a.headerContainer},r.a.createElement("h1",{className:d.a.title},"Projects")),r.a.createElement(s.b,{className:d.a.terminalContainer},r.a.createElement("div",{className:d.a.imageWrapper},r.a.createElement("img",{src:m.a,alt:"projects"})),r.a.createElement("section",{className:d.a.terminalWindow},r.a.createElement("div",{className:d.a.terminalToolbar},r.a.createElement("span",{className:[d.a.toolbarBtn,d.a.toolbarBtnRed].join(" ")}),r.a.createElement("span",{className:[d.a.toolbarBtn,d.a.toolbarBtnYellow].join(" ")}),r.a.createElement("span",{className:[d.a.toolbarBtn,d.a.toolbarBtnGreen].join(" ")})),r.a.createElement("div",{className:d.a.terminalPanel},"terry $  ",r.a.createElement(l.a,{key:a,onTypingDone:function(){e=setTimeout(function(){c(-1*a)},100)},className:d.a.code},"    ","    ","I CODE therefore I AM             ",r.a.createElement(l.a.Backspace,{count:30}))))))},f=(a(189),a(33),a(241)),b=a(178),g=a.n(b),E=a(191),h=a(192),v=a(242),j=a.n(v),k=a(243),N=a.n(k),w=a(244),y=a.n(w),x=a(245),C=a.n(x),S=a(246),O=a.n(S),T=a(247),R=a.n(T),B=a(248),P=a.n(B),I=a(249),_=a.n(I),J=a(250),W=a.n(J),M=a(251),D=a.n(M),H=a(252),A=a.n(H),L={codepad:y.a,jsds:C.a,cod:O.a,tweets:R.a,yrb:P.a,spg:_.a,snake:W.a,crud:D.a,website:N.a},G=function(){var e=Object(n.useState)(E.a.innerHeight),t=e[0],a=e[1],c=Object(n.useState)(E.a.innerHeight+100),o=c[0],l=c[1],i=Object(n.useCallback)(function(e){null!==e&&l(e.getBoundingClientRect().top)},[]);Object(n.useEffect)(Object(h.a)(function(e){a(e)}),[]);var m=o<t;return r.a.createElement("section",{className:A.a.projectCardsWrapper},r.a.createElement(s.b,{ref:i,className:g()(A.a.projectCards,m?A.a.fadeIn:"")},f.data.allProjectsJson.nodes.map(function(e,t){return r.a.createElement("div",{key:e.name,className:A.a.projectCardsCol},r.a.createElement("div",{className:A.a.card},r.a.createElement("section",{className:A.a.cardHeader+" "+A.a["colorCard"+(t+1)]},r.a.createElement("h1",{className:A.a.cardTitle},e.title),r.a.createElement("div",{className:A.a.cardImage,style:{backgroundImage:"url("+L[e.name]+")"}})),r.a.createElement("section",{className:A.a.cardDesc},r.a.createElement("div",{className:A.a.cardTags},e.tags.map(function(e){return r.a.createElement("span",{key:e,className:A.a.cardTag},e)}))),r.a.createElement("section",{className:A.a.btnGroup},e.links.map(function(e){return r.a.createElement("a",{className:A.a.iconBtn,key:e.icon,href:e.link,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fa fa-"+e.icon+" "+A.a[e.icon],"aria-hidden":"true"}))}))))})),r.a.createElement("div",{className:A.a.decoratorImg},r.a.createElement("img",{src:j.a,alt:"decorator"})))};t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(p,null),r.a.createElement(G,null))}},179:function(e,t,a){"use strict";a(28),a(23),a(12),a(45);var n=a(0),r=a.n(n),c=a(178),s=a.n(c);a(184);var o=r.a.forwardRef(function(e,t){var a=e.className,n=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["className"]).children,c=s()("container",a);return r.a.createElement("div",{className:c,ref:t},n)});o.defaultProps={className:""};var l=o;a(185);var i=function(e){var t=e.className,a=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["className"]).children,n=s()("section",t);return r.a.createElement("div",{className:n},a)};i.defaultProps={className:""};var m=i;a(186);var u=function(e){var t=e.className,a=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["className"]).children,n=s()("button",t);return r.a.createElement("div",{className:n},a)};u.defaultProps={className:""};var d=u;a.d(t,"b",function(){return l}),a.d(t,"c",function(){return m}),a.d(t,"a",function(){return d})},180:function(e,t,a){var n;e.exports=(n=a(182))&&n.default||n},181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(58),s=a.n(c);a.d(t,"a",function(){return s.a});a(180),r.a.createContext({})},182:function(e,t,a){"use strict";a.r(t);a(24);var n=a(0),r=a.n(n),c=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},188:function(e){e.exports={data:{site:{siteMetadata:{title:"Terry Chen · Software Engineer",description:"Terry Chen's Portfolio",url:"https://terrychen86.github.io",image:"/screenshot.png"}}}}},190:function(e){e.exports={data:{allNavItemsJson:{nodes:[{path:"/",link:null,title:"About Me"},{path:"/projects/",link:null,title:"Projects"},{path:null,link:"/TerryChen.pdf",title:"Resume"}]}}}},191:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n="undefined"!=typeof window&&window},192:function(e,t,a){"use strict";var n=a(198),r=a.n(n);t.a=function(e){return function(){var t=r.a.throttle(function(){var t=+window.scrollY+window.innerHeight;e(t)},10);return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}}},193:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(183),s=a(188),o=function(){var e=s.data.site.siteMetadata;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Helmet,{title:e.title},r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{name:"description",content:e.description}),r.a.createElement("meta",{name:"image",content:e.image}),r.a.createElement("meta",{property:"og:url",content:e.url}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:description",content:e.description}),r.a.createElement("meta",{property:"og:image",content:e.image}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:e.title}),r.a.createElement("meta",{name:"twitter:description",content:e.description}),r.a.createElement("meta",{name:"twitter:image",content:e.image})))},l=(a(189),a(190)),i=a(181),m=a(179),u=(a(196),function(){var e=Object(n.useState)(0),t=e[0],a=e[1];Object(n.useEffect)(function(){var e=function(){var e=+window.scrollY;a(e)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]);var c=l.data.allNavItemsJson.nodes,s=t>40?"navbar navbar--with_bg":"navbar";return r.a.createElement("div",{className:s},r.a.createElement(m.b,{className:"navbar__container"},function(e){return e.map(function(e){var t=e.title,a=e.path,n=e.link;return r.a.createElement("span",{className:"nav-item",key:a||n},a&&r.a.createElement(i.a,{activeClassName:"active",className:"nav-item__link",to:a},t),n&&r.a.createElement("a",{className:"nav-item__link",target:"_blank",href:n,rel:"noopener noreferrer"},t))})}(c)))}),d=(a(197),function(){return r.a.createElement("section",{className:"footer"},r.a.createElement(m.b,{className:"footer-container"},r.a.createElement("p",{className:"footer-text footer-text-desktop"},"Copyright (c) 2019   |     Website Designed and Built by ",r.a.createElement("strong",null,"Terry Chen"),"  |   All right reserved."),r.a.createElement("p",{className:"footer-text footer-text-mobile"},"Copyright (c) 2019   |  by ",r.a.createElement("strong",null,"Terry Chen"),"  |   All right reserved.")))});t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement(c.Helmet,null,r.a.createElement("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet"})),r.a.createElement(u,null),t,r.a.createElement(d,null))}},239:function(e,t,a){e.exports=a.p+"static/projects-b2faec0a98204979bf51ce8a53620f1c.svg"},241:function(e){e.exports={data:{allProjectsJson:{nodes:[{links:[{icon:"github",link:"https://github.com/terrychen86/terrychen86.github.io"}],name:"website",title:"This Website",tags:["React.js","React Hook","Gastby.js","GrapgQL","CSS Module","Sass","Webpack","Node.js","Travis CI"]},{links:[{icon:"globe",link:"http://codepad.yenhsuan.xyz"},{icon:"github",link:"https://github.com/yenhsuan/CodePad"}],name:"codepad",title:"CodePad",tags:["React.js","React-MobX","JSS","Websocket","Babel","Webpack","Node.js","Redis","Docker"]},{links:[{icon:"github",link:"https://github.com/yenhsuan/js-data-structure"}],name:"jsds",title:"JavaScript DS",tags:["ES6/ES7","Mocha","Webpack","Babel","Node.js"]},{links:[{icon:"globe",link:"http://yenhsuan.xyz:5566/"}],name:"cod",title:"Share Docs",tags:["Angular","Node.js","CSS3","Express.js","MongoDB","Socket.io"]},{links:[{icon:"globe",link:"http://tweet.yenhsuan.xyz/"}],name:"tweets",title:"Twitter Search",tags:["React.js","React-MobX","Sass","Webpack","Express.js","Node.js"]},{links:[{icon:"chrome",link:"https://chrome.google.com/webstore/detail/youtube-repeat-button/aihdpnkmhcbjkfonmmfepcjjfaenobip"}],name:"yrb",title:"Youtube Repeater",tags:["JavaScript ES6","CSS3","Chrome Extension"]},{links:[{icon:"chrome",link:"https://chrome.google.com/webstore/detail/chrome-start-page/cacnefkpccebkfppmhjohfabiejkdpjk"}],name:"spg",title:"Chrome Start Page",tags:["Angular","Sematic UI","Chrome Extension","Chrome API"]},{links:[{icon:"globe",link:"/snake/index.html"}],name:"snake",title:"Snake!",tags:["JavaScript ES6","Canvas","CSS3"]}]}}}},242:function(e,t,a){e.exports=a.p+"static/background-090edaab07e33fd45ba71f0721faf9c9.png"},243:function(e,t,a){e.exports=a.p+"static/project-website-0af3e0dd78e33c1ddb5f865d4039d520.png"},244:function(e,t,a){e.exports=a.p+"static/project-cp-9c5d993dd39d0c89bbd2ed423b827d44.jpg"},245:function(e,t,a){e.exports=a.p+"static/project-jsds-4bbcefae5928ba135c147e753ff3628e.png"},246:function(e,t,a){e.exports=a.p+"static/project-cod-a8c387e7f031fb3e4c5f33676332f05f.jpg"},247:function(e,t,a){e.exports=a.p+"static/project-tweets-c474c354673123e85f1e5fc0a5bf2820.png"},248:function(e,t,a){e.exports=a.p+"static/project-yrb-9d651e53013107de661ee58978ca84e2.jpg"},249:function(e,t,a){e.exports=a.p+"static/project-spg-4692f51ee0ba76a82ab6f46bde23ae97.jpg"},250:function(e,t,a){e.exports=a.p+"static/project-snake-f5c2c9f6af7f29951ecbfcd955d9296e.png"},251:function(e,t,a){e.exports=a.p+"static/project-crud-755d0b9e674f1fcd7861d86ceb085b93.jpg"}}]);
//# sourceMappingURL=component---src-pages-projects-jsx-593e865e9211ec1a6b31.js.map