!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports=function(){var e,t,r=Array.prototype.slice.call(arguments),n={},o=r[0];if(!o)return!1;for(var u=1;r[u];u++){e=r[u].split(".");for(var a=0;e[a];a++)t=e[a],0==a?(o[t]||(o[t]={}),n=o[t]):(n[t]||(n[t]={}),n=n[t]);n={}}}},function(e,t,r){e.exports=r(0)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fInt="int",t.fFloat="float",t.fBoolean="boolean",t.fString="string"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",r=t.length,n="",o=0;e>o;o++)n+=t.charAt(Math.floor(Math.random()*r));return n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){return console.log(e,t),Math.random()*(t-e)+e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){return!!Math.floor(2*Math.random())}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=s(r(6)),a=s(r(5)),f=s(r(4)),i=s(r(3)),l=r(2),c=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"create",value:function(e){if(!e)return e;if("object"!==(void 0===e?"undefined":n(e)))return this.replace.apply(this,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(this.generate(e)));var t=e.constructor();for(var r in e)e.hasOwnProperty(r)&&(t[r]=this.create(e[r]));return t}},{key:"generate",value:function(e){var t=/^\{\{(.+)\}\}$/.exec(e);return t?t[1].split(","):e}},{key:"replace",value:function(e,t,r){var n=e;switch(e){case l.fFloat:n=(0,a.default)(t,r);break;case l.fInt:n=(0,f.default)(t,r);break;case l.fString:n=(0,i.default)(t);break;case l.fBoolean:n=(0,u.default)()}return n}}]),e}();(0,c.default)(window,"FakeRandomData"),window.FakeRandomData=d,t.default=d}]);
//# sourceMappingURL=index.js.map