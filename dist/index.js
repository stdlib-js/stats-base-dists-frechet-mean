"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=s(function(m,u){
var t=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-special-gamma/dist'),q=require('@stdlib/constants-float64-pinf/dist');function v(e,r,i){return t(e)||t(r)||t(i)||e<=0||r<=0?NaN:e<=1?q:i+r*a(1-1/e)}u.exports=v
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
