(()=>{"use strict";var e,n,r,t={185:(e,n,r)=>{r.d(n,{Z:()=>u});var t=r(361),o=r.n(t),i=r(626),a=r.n(i),c=r(230),s=o()((function(e){return e[1]})),l=a()(c.Z);s.push([e.id,"*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ndiv{\r\n    color: red;\r\n    background-color: azure ;\r\n    margin:20px;\r\n}\r\n\r\n.a{\r\n    color: black;\r\n    background-color: bisque;\r\n    font-size: 20px;\r\n}\r\n\r\n.logo{\r\n    background-image: url("+l+");\r\n    background-size: cover;\r\n    height:250px;\r\n    width:200px;\r\n    padding: 20px;\r\n    margin: auto;\r\n    /* position: absolute; */\r\n}",""]);const u=s},361:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),n.push(s))}},n}},626:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},230:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"f370743dc18888e6fe666147c47ebe5a.png"},487:(e,n,r)=>{var t,o=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),i=[];function a(e){for(var n=-1,r=0;r<i.length;r++)if(i[r].identifier===e){n=r;break}return n}function c(e,n){for(var r={},t=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var d=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:v(f,n),references:1}),t.push(u)}return t}function s(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,h=0;function v(e,n){var r,t,o;if(n.singleton){var i=h++;r=p||(p=s(n)),t=d.bind(null,r,i,!1),o=d.bind(null,r,i,!0)}else r=s(n),t=f.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=a(r[t]);i[o].references--}for(var s=c(e,n),l=0;l<r.length;l++){var u=a(r[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=s}}}}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={id:e,exports:{}};return t[e](r,r.exports,i),r.exports}i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var r in n)i.o(n,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),e=i(487),n=i.n(e),r=i(185),n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,new class{constructor(e,n){this.name=e,this.age=n}sayhello(){console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`)}}("John",23).sayhello()})();