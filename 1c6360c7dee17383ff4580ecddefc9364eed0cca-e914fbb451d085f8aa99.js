(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"086r":function(t,e,n){"use strict";var r=n("q1tI"),i=n("vOnD"),o=n("LvDl"),a=n("dYjQ"),c="undefined"!=typeof window?window:{},u=i.a.div.withConfig({displayName:"Transition__AnimationWrapper",componentId:"hfjil4-0"})(["animation:"," ","s ease-out;animation-delay:","s;animation-fill-mode:forwards;opacity:0;"],(function(t){return t.animated?a.d:"none"}),(function(t){return t.duration}),(function(t){return t.delay}));e.a=function(t){var e=t.children,n=t.delay,i=t.duration,a=r.useState(+c.innerHeight),l=a[0],s=a[1],f=r.useState(+c.innerHeight+100),p=f[0],T=f[1],d=r.useCallback((function(t){null!=t&&T(t.getBoundingClientRect().top)}),[]);r.useEffect((function(){var t=Object(o.throttle)((function(){var t=+c.scrollY+c.innerHeight;s(t)}),25);return c.addEventListener("scroll",t),function(){return c.removeEventListener("scroll",t)}}),[]);var E=p<l;return r.createElement(u,{animated:E,delay:n,duration:i},r.createElement("div",{ref:d},e))}},"0h69":function(t,e,n){},"1/Ks":function(t,e,n){"use strict";n("EU/P")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var i=n("q1tI"),o=r(i),a=r(n("Gytx"));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function f(){l=t(s.map((function(t){return t.props}))),p.canUseDOM?e(l):n&&(l=n(l))}var p=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=l;return l=void 0,s=[],t};var c=i.prototype;return c.shouldComponentUpdate=function(t){return!a(t,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),f()},c.render=function(){return o.createElement(r,this.props)},i}(i.Component);return c(p,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(p,"canUseDOM",u),p}}},HQAx:function(t,e,n){"use strict";var r=n("P8UN"),i=n("ewoU"),o=n("DFzH"),a=n("kiRH"),c=n("nONw"),u=n("ytzU");r(r.P,"Array",{flatMap:function(t){var e,n,r=o(this);return c(t),e=a(r.length),n=u(r,0),i(n,r,r,e,0,1,t,arguments[1]),n}}),n("Dq1/")("flatMap")},I17o:function(t,e,n){"use strict";var r=n("P8UN"),i=n("pTxf"),o=n("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*a,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},L12J:function(t,e,n){"use strict";var r=n("q1tI"),i=n("TJpk"),o=n("vOnD"),a=n("HrMo"),c=n("vI+N"),u=n("UbLL"),l=o.a.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1814f3n-0"})(["background-color:",";"],c.g),s=Object(o.a)(a.a).withConfig({displayName:"Footer__FooterContainer",componentId:"sc-1814f3n-1"})(["padding:20px;text-align:center;","{padding:10px;}"],u.a.below("sm")),f=o.a.p.withConfig({displayName:"Footer__FooterCopy",componentId:"sc-1814f3n-2"})(["color:",";font-size:12px;letter-spacing:0.8px;","{display:",";}","{display:",";}"],c.o,u.a.below("sm"),(function(t){return"mobile"===t.type?"block":"none"}),u.a.above("sm"),(function(t){return"mobile"===t.type?"none":"block"})),p=function(){return r.createElement(l,null,r.createElement(s,null,r.createElement(f,{type:"desktop"},r.createElement(r.Fragment,null,"Copyright (c) 2019  |  Website Designed and Built by ",r.createElement("strong",null,"Terry Chen"),"  | All right reserved.")),r.createElement(f,{type:"mobile"},r.createElement(r.Fragment,null,"Copyright (c) 2019  |  by ",r.createElement("strong",null,"Terry Chen"),"  | All right reserved."))))},T=n("U8j9"),d=function(){var t=T.data.site.siteMetadata;return r.createElement(r.Fragment,null,r.createElement(i.Helmet,{title:t.title},r.createElement("html",{lang:"en"}),r.createElement("meta",{name:"description",content:t.description}),r.createElement("meta",{name:"image",content:t.image}),r.createElement("meta",{property:"og:url",content:t.url}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:description",content:t.description}),r.createElement("meta",{property:"og:image",content:t.image}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:t.title}),r.createElement("meta",{name:"twitter:description",content:t.description}),r.createElement("meta",{name:"twitter:image",content:t.image})))},E=(n("y7hu"),n("PTQi")),m=n("Wbzz"),A=n("j2gC"),h=(n("0h69"),o.a.nav.withConfig({displayName:"Navbar__NavbarWrapper",componentId:"sc-1ef5o77-0"})(["position:fixed;top:0;left:0;right:0;background-color:",";box-shadow:",";transition:all 0.3s linear;z-index:1000;"],(function(t){return"init"===t.theme?"transparent":Object(A.a)(c.i,.95)}),(function(t){return"init"===t.theme?"none":Object(A.a)(c.a,.1)}))),y=Object(o.a)(a.a).withConfig({displayName:"Navbar__NavbarContainer",componentId:"sc-1ef5o77-1"})(["text-align:right;padding:",";transition:all 0.2s linear;","{text-align:center;}"],(function(t){return"init"===t.theme?"30px 15px":"10px 15px"}),u.a.below("sm")),S=o.a.span.withConfig({displayName:"Navbar__NavItem",componentId:"sc-1ef5o77-2"})(["position:relative;margin:0 18px;font-size:16px;opacity:",";","{font-size:14px;}"],(function(t){return"init"===t.theme?.75:1}),u.a.below("sm")),v=function(){var t=E.data,e=r.useState(0),n=e[0],i=e[1];r.useEffect((function(){var t=function(){var t=+window.scrollY;i(t)};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[]);var o=t.allNavItemsJson.nodes,a=n<=40?"init":"dark";return r.createElement(h,{theme:a},r.createElement(y,{theme:a},o.map((function(t){var e=t.title,n=t.path,i=t.link;return r.createElement(S,{key:n,theme:a},n&&r.createElement(m.a,{activeClassName:"active",className:"init"===a?"nav-item__link":"dark nav-item__link",to:n},e),i&&r.createElement("a",{className:"init"===a?"nav-item__link":"dark nav-item__link",target:"_blank",href:i,rel:"noopener noreferrer"},e))}))))};n("ch6i"),e.a=function(t){var e=t.children;return r.createElement(r.Fragment,null,r.createElement(d,null),r.createElement(i.Helmet,null,r.createElement("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet"})),r.createElement(v,null),e,r.createElement(p,null))}},PTQi:function(t){t.exports=JSON.parse('{"data":{"allNavItemsJson":{"nodes":[{"path":"/","link":null,"title":"About Me"},{"path":"/projects/","link":null,"title":"Projects"},{"path":null,"link":"/TerryChen.pdf","title":"Resume"}]}}}')},"QzX/":function(t,e,n){"use strict";n("EU/P")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},Rw9D:function(t,e,n){"use strict";var r=n("P8UN"),i=n("/+AL");r(r.P+r.F*!n("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},TJpk:function(t,e,n){n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=f(n("q1tI")),a=f(n("17x9")),c=f(n("8+s/")),u=f(n("bmMU")),l=n("v1p5"),s=n("hFT/");function f(t){return t&&t.__esModule?t:{default:t}}function p(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var E,m,A,h=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),y=(E=h,A=m=function(t){function e(){return T(this,e),d(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,u.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case s.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,i=t.arrayTypeChildren,o=t.newChildProps,a=t.nestedChildren;return r({},i,((e={})[n.type]=[].concat(i[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,i=t.child,o=t.newProps,a=t.newChildProps,c=t.nestedChildren;switch(i.type){case s.TAG_NAMES.TITLE:return r({},o,((e={})[i.type]=c,e.titleAttributes=r({},a),e));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},a)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},a)})}return r({},o,((n={})[i.type]=r({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var i;n=r({},n,((i={})[e]=t[e],i))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return o.default.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=p(i,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,o),t.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=p(t,["children"]),i=r({},n);return e&&(i=this.mapChildrenToProps(e,i)),o.default.createElement(E,i)},i(e,null,[{key:"canUseDOM",set:function(t){E.canUseDOM=t}}]),e}(o.default.Component),m.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=E.peek,m.rewind=function(){var t=E.rewind();return t||(t=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},A);y.renderStatic=y.rewind,e.Helmet=y,e.default=y},U8j9:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Terry Chen · Software Engineer","description":"Terry Chen\'s Portfolio","url":"https://terrychen86.github.io","image":"/screenshot.png"}}}}')},YuTi:function(t,e,n){n("R48M"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},ZiRl:function(t,e,n){var r=n("P8UN");r(r.P,"String",{repeat:n("gd4K")})},bmMU:function(t,e,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,u,l,s=r(e),f=r(n);if(s&&f){if((u=e.length)!=n.length)return!1;for(c=u;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(s!=f)return!1;var p=e instanceof Date,T=n instanceof Date;if(p!=T)return!1;if(p&&T)return e.getTime()==n.getTime();var d=e instanceof RegExp,E=n instanceof RegExp;if(d!=E)return!1;if(d&&E)return e.toString()==n.toString();var m=i(e);if((u=m.length)!==i(n).length)return!1;for(c=u;0!=c--;)if(!o.call(n,m[c]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(c=u;0!=c--;)if(!("_owner"===(l=m[c])&&e.$$typeof||t(e[l],n[l])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},ch6i:function(t,e,n){},dYjQ:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return c}));var r=n("vOnD"),i=Object(r.b)(["0%{opacity:0;transform:translateX(-50px);}100%{opacity:1;transform:translateX(0);}"]),o=Object(r.b)(["0%{opacity:0;transform:translateX(50px);}100%{opacity:1;transform:translateX(0);}"]),a=Object(r.b)(["0%{opacity:0;transform:translateY(100px);}100%{opacity:1;transform:translateX(0);}"]),c=Object(r.b)(["0%{opacity:0;transform:translateX(6px);}100%{opacity:1;transform:translateX(0);}"])},ewoU:function(t,e,n){"use strict";var r=n("tuyV"),i=n("BjK0"),o=n("kiRH"),a=n("ot9L"),c=n("sOol")("isConcatSpreadable");t.exports=function t(e,n,u,l,s,f,p,T){for(var d,E,m=s,A=0,h=!!p&&a(p,T,3);A<l;){if(A in u){if(d=h?h(u[A],A,n):u[A],E=!1,i(d)&&(E=void 0!==(E=d[c])?!!E:r(d)),E&&f>0)m=t(e,n,d,o(d.length),m,f-1)-1;else{if(m>=9007199254740991)throw TypeError();e[m]=d}m++}A++}return m}},gd4K:function(t,e,n){"use strict";var r=n("1Llc"),i=n("ap2Z");t.exports=function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},"hFT/":function(t,e,n){n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK"),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},i=(e.VALID_TAG_NAMES=Object.keys(r).map((function(t){return r[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(i).reduce((function(t,e){return t[i[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},lizw:function(t,e,n){"use strict";var r=n("P8UN"),i=n("pTxf"),o=n("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*a,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},n0hJ:function(t,e,n){var r=n("P8UN");r(r.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},nMRu:function(t,e,n){"use strict";var r=n("P8UN"),i=n("DFzH"),o=n("kxs/");r(r.P+r.F*n("96qb")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=i(this),n=o(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},oAaA:function(t,e,n){"use strict";function r(t){var e=null==t?void 0:t.edges;return null==e?[]:e.map((function(t){return null==t?void 0:t.node})).filter(Boolean)}n.d(e,"a",(function(){return r}))},pTxf:function(t,e,n){var r=n("kiRH"),i=n("gd4K"),o=n("ap2Z");t.exports=function(t,e,n,a){var c=String(o(t)),u=c.length,l=void 0===n?" ":String(n),s=r(e);if(s<=u||""==l)return c;var f=s-u,p=i.call(l,Math.ceil(f/l.length));return p.length>f&&(p=p.slice(0,f)),a?p+c:c+p}},"t+fG":function(t,e,n){var r=n("P8UN"),i=n("96qb"),o=n("ap2Z"),a=/"/g,c=function(t,e,n,r){var i=String(o(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),c+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},v1p5:function(t,e,n){(function(t){n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX"),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=u(n("q1tI")),a=u(n("MgzW")),c=n("hFT/");function u(t){return t&&t.__esModule?t:{default:t}}var l,s=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(t){var e=m(t,c.TAG_NAMES.TITLE),n=m(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=m(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},p=function(t){return m(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return i({},t,e)}),{})},d=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},E=function(t,e,n){var i={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&v("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var u=o[a],l=u.toLowerCase();-1===e.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===t[l].toLowerCase()||(n=l),-1===e.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(r),u=0;u<o.length;u++){var l=o[u],s=(0,a.default)({},i[l],r[l]);i[l]=s}return t}),[]).reverse()},m=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},A=(l=Date.now(),function(t){var e=Date.now();e-l>16?(l=e,t(e)):setTimeout((function(){A(t)}),0)}),h=function(t){return clearTimeout(t)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:t.requestAnimationFrame||A,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:t.cancelAnimationFrame||h,v=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},g=null,b=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,u=t.noscriptTags,l=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,p=t.title,T=t.titleAttributes;R(c.TAG_NAMES.BODY,r),R(c.TAG_NAMES.HTML,i),P(p,T);var d={baseTag:O(c.TAG_NAMES.BASE,n),linkTags:O(c.TAG_NAMES.LINK,o),metaTags:O(c.TAG_NAMES.META,a),noscriptTags:O(c.TAG_NAMES.NOSCRIPT,u),scriptTags:O(c.TAG_NAMES.SCRIPT,s),styleTags:O(c.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),l(t,E,m)},_=function(t){return Array.isArray(t)?t.join(""):t},P=function(t,e){void 0!==t&&document.title!==t&&(document.title=_(t)),R(c.TAG_NAMES.TITLE,e)},R=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),u=0;u<a.length;u++){var l=a[u],s=e[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===i.indexOf(l)&&i.push(l);var f=o.indexOf(l);-1!==f&&o.splice(f,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);i.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},O=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},w=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e}),e)},C=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,i=M(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=w(n),o=_(e);return i?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+i+">"+s(o,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(e)},toString:function(){return w(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),o.default.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+s(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){g&&S(g),t.defer?g=y((function(){b(t,(function(){g=null}))})):(b(t),g=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,u=t.noscriptTags,l=t.scriptTags,s=t.styleTags,f=t.title,p=void 0===f?"":f,T=t.titleAttributes;return{base:C(c.TAG_NAMES.BASE,e,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,i,r),link:C(c.TAG_NAMES.LINK,o,r),meta:C(c.TAG_NAMES.META,a,r),noscript:C(c.TAG_NAMES.NOSCRIPT,u,r),script:C(c.TAG_NAMES.SCRIPT,l,r),style:C(c.TAG_NAMES.STYLE,s,r),title:C(c.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}},e.reducePropsToState=function(t){return{baseTag:d([c.TAG_PROPERTIES.HREF],t),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,t),defer:m(t,c.HELMET_PROPS.DEFER),encode:m(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,t),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:p(t),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:f(t),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=y,e.warn=v}).call(this,n("yLpj"))},v9g0:function(t,e,n){"use strict";var r=n("P8UN"),i=n("Wadk")(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")("find")},y7hu:function(t,e,n){"use strict";n("t+fG")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n},zTTH:function(t,e,n){"use strict";var r=n("P8UN"),i=n("Wadk")(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(o)}}]);
//# sourceMappingURL=1c6360c7dee17383ff4580ecddefc9364eed0cca-e914fbb451d085f8aa99.js.map