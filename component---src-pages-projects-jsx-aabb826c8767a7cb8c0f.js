(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(191),s=t(179),o=t(237),l=t.n(o),i=t(239),u=t.n(i),m=t(240),f=t.n(m),d=function(){var e=null,a=Object(n.useState)(1),t=a[0],c=a[1];return Object(n.useEffect)(function(){return function(){clearTimeout(e)}},[]),r.a.createElement(s.c,{className:f.a.projectHeader},r.a.createElement(s.b,{className:f.a.headerContainer},r.a.createElement("h1",{className:f.a.title},"Projects")),r.a.createElement(s.b,{className:f.a.terminalContainer},r.a.createElement("div",{className:f.a.imageWrapper},r.a.createElement("img",{src:u.a,alt:"projects"})),r.a.createElement("section",{className:f.a.terminalWindow},r.a.createElement("div",{className:f.a.terminalToolbar},r.a.createElement("span",{className:[f.a.toolbarBtn,f.a.toolbarBtnRed].join(" ")}),r.a.createElement("span",{className:[f.a.toolbarBtn,f.a.toolbarBtnYellow].join(" ")}),r.a.createElement("span",{className:[f.a.toolbarBtn,f.a.toolbarBtnGreen].join(" ")})),r.a.createElement("div",{className:f.a.terminalPanel},"terry $  ",r.a.createElement(l.a,{key:t,onTypingDone:function(){e=setTimeout(function(){c(-1*t)},100)},className:f.a.code},"    ","    ","I CODE therefore I AM             ",r.a.createElement(l.a.Backspace,{count:30}))))))},p=(t(187),t(33),t(241)),b=t(178),h=t.n(b),g=t(190),v=t(242),E=t.n(v),j=t(243),k=t.n(j),N=t(244),w=t.n(N),y=t(245),x=t.n(y),C=t(246),S=t.n(C),O=t(247),B=t.n(O),R=t(248),P=t.n(R),T=t(249),J=t.n(T),_=t(250),D=t.n(_),I={codepad:E.a,jsds:k.a,cod:w.a,tweets:x.a,yrb:S.a,spg:B.a,snake:P.a,crud:J.a},W=function(){var e=Object(n.useState)(window.innerHeight),a=e[0],t=e[1],c=Object(n.useState)(window.innerHeight+100),o=c[0],l=c[1],i=Object(n.useCallback)(function(e){null!==e&&l(e.getBoundingClientRect().top)},[]);Object(n.useEffect)(Object(g.a)(function(e){t(e)}),[]);var u=o<a;return r.a.createElement("section",{className:D.a.projectCardsWrapper},r.a.createElement(s.b,{ref:i,className:h()(D.a.projectCards,u?D.a.fadeIn:"")},p.data.allProjectsJson.nodes.map(function(e,a){return r.a.createElement("div",{key:e.name,className:D.a.projectCardsCol},r.a.createElement("div",{className:D.a.card},r.a.createElement("section",{className:D.a.cardHeader+" "+D.a["colorCard"+(a+1)]},r.a.createElement("h1",{className:D.a.cardTitle},e.title),r.a.createElement("div",{className:D.a.cardImage,style:{backgroundImage:"url("+I[e.name]+")"}})),r.a.createElement("section",{className:D.a.cardDesc},r.a.createElement("div",{className:D.a.cardTags},e.tags.map(function(e){return r.a.createElement("span",{key:e,className:D.a.cardTag},e)}))),r.a.createElement("section",{className:D.a.btnGroup},e.links.map(function(e){return r.a.createElement("a",{className:D.a.iconBtn,key:e.icon,href:e.link,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fa fa-"+e.icon+" "+D.a[e.icon],"aria-hidden":"true"}))}))))})))};a.default=function(){return r.a.createElement(c.a,null,r.a.createElement(d,null),r.a.createElement(W,null))}},179:function(e,a,t){"use strict";t(28),t(23),t(12),t(45);var n=t(0),r=t.n(n),c=t(178),s=t.n(c);t(183);var o=r.a.forwardRef(function(e,a){var t=e.className,n=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className"]).children,c=s()("container",t);return r.a.createElement("div",{className:c,ref:a},n)});o.defaultProps={className:""};var l=o;t(184);var i=function(e){var a=e.className,t=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className"]).children,n=s()("section",a);return r.a.createElement("div",{className:n},t)};i.defaultProps={className:""};var u=i;t(185);var m=function(e){var a=e.className,t=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className"]).children,n=s()("button",a);return r.a.createElement("div",{className:n},t)};m.defaultProps={className:""};var f=m;t.d(a,"b",function(){return l}),t.d(a,"c",function(){return u}),t.d(a,"a",function(){return f})},180:function(e,a,t){var n;e.exports=(n=t(182))&&n.default||n},181:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(58),s=t.n(c);t.d(a,"a",function(){return s.a});t(180),r.a.createContext({})},182:function(e,a,t){"use strict";t.r(a);t(24);var n=t(0),r=t.n(n),c=t(84);a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}},189:function(e){e.exports={data:{allNavItemsJson:{nodes:[{path:"/",link:null,title:"About Me"},{path:"/projects/",link:null,title:"Projects"},{path:null,link:"/TerryChen.pdf",title:"Resume"}]}}}},190:function(e,a,t){"use strict";var n=t(197),r=t.n(n);a.a=function(e){return function(){var a=r.a.throttle(function(){var a=+window.scrollY+window.innerHeight;e(a)},10);return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}}},191:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(192),s=(t(187),t(189)),o=t(181),l=t(179),i=(t(194),function(){var e=Object(n.useState)(0),a=e[0],t=e[1];Object(n.useEffect)(function(){var e=function(){var e=+window.scrollY;t(e)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]);var c=s.data.allNavItemsJson.nodes,i=a>40?"navbar navbar--with_bg":"navbar";return r.a.createElement("div",{className:i},r.a.createElement(l.b,{className:"navbar__container"},function(e){return e.map(function(e){var a=e.title,t=e.path,n=e.link;return r.a.createElement("span",{className:"nav-item",key:t||n},t&&r.a.createElement(o.a,{activeClassName:"active",className:"nav-item__link",to:t},a),n&&r.a.createElement("a",{className:"nav-item__link",target:"_blank",href:n,rel:"noopener noreferrer"},a))})}(c)))}),u=(t(195),function(){return r.a.createElement("section",{className:"footer"},r.a.createElement(l.b,{className:"footer-container"},r.a.createElement("p",{className:"footer-text footer-text-desktop"},"Copyright (c) 2019   |     Website Designed and Built by ",r.a.createElement("strong",null,"Terry Chen"),"  |   All right reserved."),r.a.createElement("p",{className:"footer-text footer-text-mobile"},"Copyright (c) 2019   |  by ",r.a.createElement("strong",null,"Terry Chen"),"  |   All right reserved.")))});a.a=function(e){var a=e.children;return"undefined"!=typeof window&&t(196)('a[href*="#"]'),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Helmet,null,r.a.createElement("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet"})),r.a.createElement(i,null),a,r.a.createElement(u,null))}},239:function(e,a,t){e.exports=t.p+"static/projects-b2faec0a98204979bf51ce8a53620f1c.svg"},241:function(e){e.exports={data:{allProjectsJson:{nodes:[{links:[{icon:"globe",link:"http://codepad.yenhsuan.xyz"},{icon:"github",link:"https://github.com/yenhsuan/CodePad"}],name:"codepad",title:"CodePad",tags:["React.js","React-MobX","JSS","Websocket","Babel","Webpack","Node.js","Redis","Docker"]},{links:[{icon:"github",link:"https://github.com/yenhsuan/js-data-structure"}],name:"jsds",title:"JavaScript DS",tags:["ES6/ES7","Mocha","Webpack","Node.js"]},{links:[{icon:"globe",link:"http://yenhsuan.xyz:5566/"}],name:"cod",title:"Share Docs",tags:["Angular","Node.js","CSS3","Express.js","MongoDB","Socket.io"]},{links:[{icon:"globe",link:"http://tweet.yenhsuan.xyz/"}],name:"tweets",title:"Twitter Search",tags:["React.js","React-MobX","Sass","Webpack","Express.js","Node.js"]},{links:[{icon:"chrome",link:"https://chrome.google.com/webstore/detail/youtube-repeat-button/aihdpnkmhcbjkfonmmfepcjjfaenobip"}],name:"yrb",title:"Youtube Repeater",tags:["JavaScript ES6","Chrome Extension"]},{links:[{icon:"chrome",link:"https://chrome.google.com/webstore/detail/chrome-start-page/cacnefkpccebkfppmhjohfabiejkdpjk"}],name:"spg",title:"Chrome Start Page",tags:["Angular","Sematic UI","Chrome Extension"]},{links:[{icon:"globe",link:"https://chrome.google.com/webstore/detail/chrome-start-page/cacnefkpccebkfppmhjohfabiejkdpjk"}],name:"snake",title:"Snake!",tags:["JavaScript ES6","Canvas"]}]}}}},242:function(e,a,t){e.exports=t.p+"static/project-cp-9c5d993dd39d0c89bbd2ed423b827d44.jpg"},243:function(e,a,t){e.exports=t.p+"static/project-jsds-4bbcefae5928ba135c147e753ff3628e.png"},244:function(e,a,t){e.exports=t.p+"static/project-cod-a8c387e7f031fb3e4c5f33676332f05f.jpg"},245:function(e,a,t){e.exports=t.p+"static/project-tweets-c474c354673123e85f1e5fc0a5bf2820.png"},246:function(e,a,t){e.exports=t.p+"static/project-yrb-9d651e53013107de661ee58978ca84e2.jpg"},247:function(e,a,t){e.exports=t.p+"static/project-spg-4692f51ee0ba76a82ab6f46bde23ae97.jpg"},248:function(e,a,t){e.exports=t.p+"static/project-snake-f5c2c9f6af7f29951ecbfcd955d9296e.png"},249:function(e,a,t){e.exports=t.p+"static/project-crud-755d0b9e674f1fcd7861d86ceb085b93.jpg"}}]);
//# sourceMappingURL=component---src-pages-projects-jsx-aabb826c8767a7cb8c0f.js.map