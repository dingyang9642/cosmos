webpackJsonp([2],{213:function(e,n,t){"use strict";var r=t(18),o=(t(219),t(235)),i=t(222),s=t(237),a=t(225),c=r.createClass({displayName:"shipinComponent",getInitialState:function(){return{}},componentWillMount:function(){o.use()},componentWillUnmount:function(){o.unuse()},render:function(){return r.createElement("div",{className:"shipin-box"},r.createElement(i,{selectedItem:"shipin"}),r.createElement(s,null),r.createElement(a,null))}});e.exports=c},217:function(e,n){function t(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},218:function(e,n,t){function r(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=m[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],n))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(l(r.parts[i],n));m[r.id]={id:r.id,refs:1,parts:s}}}}function o(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],s=n.base?i[0]+n.base:i[0],a=i[1],c=i[2],u=i[3],l={css:a,media:c,sourceMap:u};r[s]?r[s].parts.push(l):t.push(r[s]={id:s,parts:[l]})}return t}function i(e,n){var t=v(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),y.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=y.indexOf(e);n>=0&&y.splice(n,1)}function a(e){var n=document.createElement("style");return e.attrs.type="text/css",u(n,e.attrs),i(e,n),n}function c(e){var n=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(n,e.attrs),i(e,n),n}function u(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function l(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i=n.transform(e.css)))return function(){};e.css=i}if(n.singleton){var u=g++;t=b||(b=a(n)),r=f.bind(null,t,u,!1),o=f.bind(null,t,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=c(n),r=d.bind(null,t,n),o=function(){s(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(n),r=p.bind(null,t),o=function(){s(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}function f(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=N(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function p(e,n){var t=n.css,r=n.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function d(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var m={},h=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var n={};return function(t){return void 0===n[t]&&(n[t]=e.call(this,t)),n[t]}}(function(e){return document.querySelector(e)}),b=null,g=0,y=[],x=t(221);e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=h()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=o(e,n);return r(t,n),function(e){for(var i=[],s=0;s<t.length;s++){var a=t[s],c=m[a.id];c.refs--,i.push(c)}if(e){r(o(e,n),n)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete m[c.id]}}}};var N=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},219:function(e,n,t){var r=t(220);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(218)(r,o);r.locals&&(e.exports=r.locals)},220:function(e,n,t){n=e.exports=t(217)(void 0),n.push([e.i,'* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n}\nbody {\n\tbackground-color: #fff;\n\tfont-family:"\\5B8B\\4F53", "\\5FAE\\8F6F\\96C5\\9ED1", "arial";\n}\n\n/*浮动*/\n.left { \n\tfloat: left;\n}\n.right { \n\tfloat: right;\n}\n\n/*清除浮动*/\n.clearfix:after {\n\tcontent: "";\n\tdisplay: block;\n\theight: 0;\n\tvisibility: hidden;\n\tclear: both;\n}\n.clearfix {\n\tzoom:1;\n}    ',""])},221:function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},222:function(e,n,t){"use strict";var r=t(18),o=t(223),i=t(95),s=t(96),a=i.projectName,c=r.createClass({displayName:"headerComponent",getInitialState:function(){return{selectedItem:"bianmin"}},getDefaultProps:function(){return{selectedItem:"bianmin"}},componentWillMount:function(){o.use()},componentWillUnmount:function(){o.unuse()},componentDidMount:function(){this.setDefaultSelectedItem()},getMenuList:function(){return[{enName:"bianmin",cnName:"便民"},{enName:"caijing",cnName:"财经"},{enName:"shipin",cnName:"视频"},{enName:"lvtu",cnName:"旅途"}]},handleMenuItemClick:function(e){if(e!==this.state.selectedItem){var n="bianmin"===e?"/"+a:"/"+a+"/"+e;s.replace(n)}},setDefaultSelectedItem:function(){var e=this.props.selectedItem;this.setState({selectedItem:e})},render:function(){var e=this,n=this.getMenuList(),t=this.state.selectedItem;return r.createElement("section",{className:"header-box"},r.createElement("section",{className:"menu-box"},r.createElement("ul",{className:"header-items"},n.map(function(n,o){var i=n.enName,s=n.cnName,a=t===i?"header-item-selected":"";return r.createElement("li",{onClick:e.handleMenuItemClick.bind(e,i),key:o,className:"header-item item-"+i+" "+a},s)}))),r.createElement("section",{className:"menu-box-bg"}))}});e.exports=c},223:function(e,n,t){var r,o=0,i=t(224);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(n.locals=i.locals),n.use=n.ref=function(){return o++||(r=t(218)(i,{})),n},n.unuse=n.unref=function(){o>0&&!--o&&(r(),r=null)}},224:function(e,n,t){n=e.exports=t(217)(void 0),n.push([e.i,".menu-box, .menu-box-bg {\n    height: .88rem;\n    line-height: .88rem;\n}\n.menu-box {\n    position: fixed;\n    z-index: 1000;\n    width: 100%;\n}\n.header-items {\n    background-color: #f4f5f6;\n    overflow: hidden;\n}\n.header-item {\n\tfloat: left;\n\twidth: 25%;\n    list-style-type: none;\n    text-align: center;\n    color: #333;\n    font-size: .32rem;\n}\n.header-item-selected {\n    color: #f85959;\n}",""])},225:function(e,n,t){"use strict";var r=t(18),o=t(226),i=r.createClass({displayName:"footerComponent",getInitialState:function(){return{}},componentWillMount:function(){o.use()},componentWillUnmount:function(){o.unuse()},render:function(){return r.createElement("div",{className:"footer-box"})}});e.exports=i},226:function(e,n,t){var r,o=0,i=t(227);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(n.locals=i.locals),n.use=n.ref=function(){return o++||(r=t(218)(i,{})),n},n.unuse=n.unref=function(){o>0&&!--o&&(r(),r=null)}},227:function(e,n,t){n=e.exports=t(217)(void 0),n.push([e.i,".footer-box {\n\n}",""])},235:function(e,n,t){var r,o=0,i=t(236);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(n.locals=i.locals),n.use=n.ref=function(){return o++||(r=t(218)(i,{})),n},n.unuse=n.unref=function(){o>0&&!--o&&(r(),r=null)}},236:function(e,n,t){n=e.exports=t(217)(void 0),n.push([e.i,".shipin-box {\n\t\n}",""])},237:function(e,n,t){"use strict";var r=t(18),o=t(238),i=r.createClass({displayName:"contentComponent",getInitialState:function(){return{}},componentWillMount:function(){o.use()},componentWillUnmount:function(){o.unuse()},render:function(){return r.createElement("div",{className:"content-box"},r.createElement("div",null,"视频见闻[敬请期待...]"))}});e.exports=i},238:function(e,n,t){var r,o=0,i=t(239);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(n.locals=i.locals),n.use=n.ref=function(){return o++||(r=t(218)(i,{})),n},n.unuse=n.unref=function(){o>0&&!--o&&(r(),r=null)}},239:function(e,n,t){n=e.exports=t(217)(void 0),n.push([e.i,".content-box {\n    font-size: .3rem;\n    text-align: center;\n    margin-top: .5rem;\n}",""])}});