// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,f=function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},_=e()?c:f;var p=function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var v=function(r){return r!=r},b=Math.floor;var y=function(r){return b(r)===r};function d(r,e){var t,n,o,a;if(v(r)||v(e)||r<0||!y(r))return NaN;if(0===r)return 1;if(1===r)return e;for(n=1,o=0,a=r;a>1;a--)t=e*n-a*o,o=n,n=t;return e*n-o}var s=function(r){return function(){return r}};function j(r){return r<0||v(r)||!y(r)?s(NaN):0===r?s(1):function(e){var t,n,o,a;if(v(e))return NaN;for(n=1,o=0,a=r;a>1;a--)t=e*n-a*o,o=n,n=t;return e*n-o}}p(d,"factory",j);export{d as default,j as factory};
//# sourceMappingURL=mod.js.map
