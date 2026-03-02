"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(m,u){
var i=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-special-gamma/dist'),q=require('@stdlib/constants-float64-pinf/dist');function v(e,r,t){return i(e)||i(r)||i(t)||e<=0||r<=0?NaN:e<=1?q:t+r*a(1-1/e)}u.exports=v
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
