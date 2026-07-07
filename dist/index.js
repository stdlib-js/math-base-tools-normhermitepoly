"use strict";var v=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var f=v(function(b,s){
var o=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-integer/dist');function m(r,e){var a,u,i,t;if(o(r)||o(e)||r<0||!l(r))return NaN;if(r===0)return 1;if(r===1)return e;for(u=1,i=0,t=r;t>1;t--)a=e*u-t*i,i=u,u=a;return e*u-i}s.exports=m
});var N=v(function(g,q){
var y=require('@stdlib/utils-constant-function/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-assert-is-integer/dist');function h(r){if(r<0||c(r)||!d(r))return y(NaN);if(r===0)return y(1);return e;function e(a){var u,i,t,n;if(c(a))return NaN;for(i=1,t=0,n=r;n>1;n--)u=a*i-n*t,t=i,i=u;return a*i-t}}q.exports=h
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=f(),O=N();F(p,"factory",O);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
