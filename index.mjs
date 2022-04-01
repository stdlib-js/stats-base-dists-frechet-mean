// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var n=s,a=t,i=e;var m=function(s,t,e){return n(s)||n(t)||n(e)||s<=0||t<=0?NaN:s<=1?i:e+t*a(1-1/s)};export{m as default};
//# sourceMappingURL=index.mjs.map
