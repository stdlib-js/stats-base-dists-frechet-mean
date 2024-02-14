// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}var e=Number,o=e.NEGATIVE_INFINITY;function i(r){return Math.abs(r)}var a,f=2146435072,u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,l=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol:void 0,p="function"==typeof s?s.toStringTag:"",y=u&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return c.call(r);t=r[p],i=p,n=null!=(o=r)&&l.call(o,i);try{r[p]=void 0}catch(n){return c.call(r)}return e=c.call(r),n?r[p]=t:delete r[p],e}:function(r){return c.call(r)},v="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,w="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(v&&t instanceof Uint32Array||"[object Uint32Array]"===y(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var h,g=a,A="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b([1,3.14,-3.14,NaN]),t=n,r=(A&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var m,N=h,I="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,_="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),t=n,r=(I&&t instanceof Uint8Array||"[object Uint8Array]"===y(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var T,j=m,U="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,65536,65537]),t=n,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===y(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var x,G={uint16:T,uint8:j};(x=new G.uint16(1))[0]=4660;var V=52===new G.uint8(x.buffer)[0],O=!0===V?1:0,H=new N(1),W=new g(H.buffer);function L(r){return H[0]=r,W[O]}function $(r,n){var t,e,o,i;return o=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*e-r*n))}var M=-.16666666666666632;function C(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(M+o*t):r-(o*(.5*n-e*t)-n-e*M)}var P,Y=1048575,R="function"==typeof Float64Array,Z="function"==typeof Float64Array?Float64Array:null,X="function"==typeof Float64Array?Float64Array:void 0;P=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z([1,3.14,-3.14,NaN]),t=n,r=(R&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?X:function(){throw new Error("not implemented")};var q,z,B,D=!0===V?0:1,J=new P(1),K=new g(J.buffer),Q="function"==typeof Float64Array,rr="function"==typeof Float64Array?Float64Array:null,nr="function"==typeof Float64Array?Float64Array:void 0;q=function(){var r,n,t;if("function"!=typeof rr)return!1;try{n=new rr([1,3.14,-3.14,NaN]),t=n,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?nr:function(){throw new Error("not implemented")},!0===V?(z=1,B=0):(z=0,B=1);var tr={HIGH:z,LOW:B},er=new q(1),or=new g(er.buffer),ir=tr.HIGH,ar=tr.LOW;function fr(r,n){return or[ir]=r,or[ar]=n,er[0]}var ur=Number.POSITIVE_INFINITY,cr=e.NEGATIVE_INFINITY,lr=1023,sr=e.NEGATIVE_INFINITY;function pr(r){return r===ur||r===sr}var yr="function"==typeof Object.defineProperty?Object.defineProperty:null,vr=Object.defineProperty;function dr(r){return"number"==typeof r}function wr(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function hr(r,n,t){var e=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+wr(o):wr(o)+r,e&&(r="-"+r)),r}var gr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase;function br(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!dr(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=hr(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=hr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===Ar.call(r.specifier)?Ar.call(t):gr.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Fr(r){return"string"==typeof r}var mr=Math.abs,Nr=String.prototype.toLowerCase,Ir=String.prototype.toUpperCase,Er=String.prototype.replace,_r=/e\+(\d)$/,Tr=/e-(\d)$/,jr=/^(\d+)$/,Ur=/^(\d+)e/,Sr=/\.0$/,kr=/\.0*e/,xr=/(\..*[^0])0*e/;function Gr(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!dr(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":mr(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=Er.call(t,xr,"$1e"),t=Er.call(t,kr,"e"),t=Er.call(t,Sr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Er.call(t,_r,"e+0$1"),t=Er.call(t,Tr,"e-0$1"),r.alternate&&(t=Er.call(t,jr,"$1."),t=Er.call(t,Ur,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ir.call(r.specifier)?Ir.call(t):Nr.call(t)}function Vr(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Or(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Vr(e):Vr(e)+r}var Hr=String.fromCharCode,Wr=isNaN,Lr=Array.isArray;function $r(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Mr(r){var n,t,e,o,i,a,f,u,c;if(!Lr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",f=1,u=0;u<r.length;u++)if(Fr(e=r[u]))a+=e;else{if(n=void 0!==e.precision,!(e=$r(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(o=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,Wr(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,Wr(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=br(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!Wr(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Wr(i)?String(e.arg):Hr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Gr(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=hr(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Or(e.arg,e.width,e.padRight)),a+=e.arg||"",f+=1}return a}var Cr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Pr(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Yr(r){var n,t,e,o;for(t=[],o=0,e=Cr.exec(r);e;)(n=r.slice(o,Cr.lastIndex-e[0].length)).length&&t.push(n),t.push(Pr(e)),o=Cr.lastIndex,e=Cr.exec(r);return(n=r.slice(o)).length&&t.push(n),t}function Rr(r){return"string"==typeof r}function Zr(r){var n,t;if(!Rr(r))throw new TypeError(Zr("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[Yr(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return Mr.apply(null,n)}var Xr=Object.prototype,qr=Xr.toString,zr=Xr.__defineGetter__,Br=Xr.__defineSetter__,Dr=Xr.__lookupGetter__,Jr=Xr.__lookupSetter__,Kr=function(){try{return yr({},"x",{}),!0}catch(r){return!1}}()?vr:function(r,n,t){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===qr.call(r))throw new TypeError(Zr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===qr.call(t))throw new TypeError(Zr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(Dr.call(r,n)||Jr.call(r,n)?(e=r.__proto__,r.__proto__=Xr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&zr&&zr.call(r,n,t.get),a&&Br&&Br.call(r,n,t.set),r};function Qr(r,n,t){Kr(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var rn,nn,tn,en="function"==typeof Float64Array,on="function"==typeof Float64Array?Float64Array:null,an="function"==typeof Float64Array?Float64Array:void 0;rn=function(){var r,n,t;if("function"!=typeof on)return!1;try{n=new on([1,3.14,-3.14,NaN]),t=n,r=(en&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?an:function(){throw new Error("not implemented")},!0===V?(nn=1,tn=0):(nn=0,tn=1);var fn={HIGH:nn,LOW:tn},un=new rn(1),cn=new g(un.buffer),ln=fn.HIGH,sn=fn.LOW;function pn(r,n,t,e){return un[0]=r,n[e]=cn[ln],n[e+t]=cn[sn],n}function yn(r){return pn(r,[0,0],1,0)}Qr(yn,"assign",pn);var vn=[0,0];function dn(r,n){var t,e;return yn.assign(r,vn,1,0),t=vn[0],t&=2147483647,e=L(n),fr(t|=e&=2147483648,vn[1])}function wn(n,t,e,o){return r(n)||pr(n)?(t[o]=n,t[o+e]=0,t):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}Qr((function(r){return wn(r,[0,0],1,0)}),"assign",wn);var hn,gn,An,bn="function"==typeof Float64Array,Fn="function"==typeof Float64Array?Float64Array:null,mn="function"==typeof Float64Array?Float64Array:void 0;hn=function(){var r,n,t;if("function"!=typeof Fn)return!1;try{n=new Fn([1,3.14,-3.14,NaN]),t=n,r=(bn&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?mn:function(){throw new Error("not implemented")},!0===V?(gn=1,An=0):(gn=0,An=1);var Nn={HIGH:gn,LOW:An},In=new hn(1),En=new g(In.buffer),_n=Nn.HIGH,Tn=Nn.LOW;function jn(r,n,t,e){return In[0]=r,n[e]=En[_n],n[e+t]=En[Tn],n}function Un(r){return jn(r,[0,0],1,0)}Qr(Un,"assign",jn);var Sn=[0,0],kn=[0,0];function xn(n,t){var e,o;return 0===t||0===n||r(n)||pr(n)?n:(wn(n,Sn,1,0),t+=Sn[1],t+=function(r){var n=L(r);return(n=(n&f)>>>20)-lr|0}(n=Sn[0]),t<-1074?dn(0,n):t>1023?n<0?cr:ur:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,Un.assign(n,kn,1,0),e=kn[0],e&=2148532223,o*fr(e|=t+lr<<20,kn[1])))}function Gn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Vn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],On=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Hn=16777216,Wn=5.960464477539063e-8,Ln=Gn(20),$n=Gn(20),Mn=Gn(20),Cn=Gn(20);function Pn(r,t,e,o,i,a,f,u,c){var l,s,p,y,v,d,w,h,g;for(y=a,g=o[e],h=e,v=0;h>0;v++)s=Wn*g|0,Cn[v]=g-Hn*s|0,g=o[h-1]+s,h-=1;if(g=xn(g,i),g-=8*n(.125*g),g-=w=0|g,p=0,i>0?(w+=v=Cn[e-1]>>24-i,Cn[e-1]-=v<<24-i,p=Cn[e-1]>>23-i):0===i?p=Cn[e-1]>>23:g>=.5&&(p=2),p>0){for(w+=1,l=0,v=0;v<e;v++)h=Cn[v],0===l?0!==h&&(l=1,Cn[v]=16777216-h):Cn[v]=16777215-h;if(i>0)switch(i){case 1:Cn[e-1]&=8388607;break;case 2:Cn[e-1]&=4194303}2===p&&(g=1-g,0!==l&&(g-=xn(1,i)))}if(0===g){for(h=0,v=e-1;v>=a;v--)h|=Cn[v];if(0===h){for(d=1;0===Cn[a-d];d++);for(v=e+1;v<=e+d;v++){for(c[u+v]=Vn[f+v],s=0,h=0;h<=u;h++)s+=r[h]*c[u+(v-h)];o[v]=s}return Pn(r,t,e+=d,o,i,a,f,u,c)}}if(0===g)for(e-=1,i-=24;0===Cn[e];)e-=1,i-=24;else(g=xn(g,-i))>=Hn?(s=Wn*g|0,Cn[e]=g-Hn*s|0,i+=24,Cn[e+=1]=s):Cn[e]=0|g;for(s=xn(1,i),v=e;v>=0;v--)o[v]=s*Cn[v],s*=Wn;for(v=e;v>=0;v--){for(s=0,d=0;d<=y&&d<=e-v;d++)s+=On[d]*o[v+d];Mn[e-v]=s}for(s=0,v=e;v>=0;v--)s+=Mn[v];for(t[0]=0===p?s:-s,s=Mn[0]-s,v=1;v<=e;v++)s+=Mn[v];return t[1]=0===p?s:-s,7&w}function Yn(r,n,t,e){var o,i,a,f,u,c,l;for((i=(t-3)/24|0)<0&&(i=0),f=t-24*(i+1),c=i-(a=e-1),l=a+4,u=0;u<=l;u++)Ln[u]=c<0?0:Vn[c],c+=1;for(u=0;u<=4;u++){for(o=0,c=0;c<=a;c++)o+=r[c]*Ln[a+(u-c)];$n[u]=o}return Pn(r,n,4,$n,f,4,i,a,Ln)}var Rn=Math.round;function Zn(r,n,t){var e,o,i,a,f;return i=r-1.5707963267341256*(e=Rn(.6366197723675814*r)),a=6077100506506192e-26*e,f=n>>20|0,t[0]=i-a,f-(L(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),t[0]=i-a,f-(L(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),t[0]=i-a)),t[1]=i-t[0]-a,e}var Xn=1.5707963267341256,qn=6077100506506192e-26,zn=2*qn,Bn=3*qn,Dn=4*qn,Jn=[0,0,0],Kn=[0,0];function Qn(r,n){var t,e,o,i,a,u,c;if((o=2147483647&L(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(o&Y)?Zn(r,o,n):o<=1073928572?r>0?(c=r-Xn,n[0]=c-qn,n[1]=c-n[0]-qn,1):(c=r+Xn,n[0]=c+qn,n[1]=c-n[0]+qn,-1):r>0?(c=r-2*Xn,n[0]=c-zn,n[1]=c-n[0]-zn,2):(c=r+2*Xn,n[0]=c+zn,n[1]=c-n[0]+zn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Zn(r,o,n):r>0?(c=r-3*Xn,n[0]=c-Bn,n[1]=c-n[0]-Bn,3):(c=r+3*Xn,n[0]=c+Bn,n[1]=c-n[0]+Bn,-3):1075388923===o?Zn(r,o,n):r>0?(c=r-4*Xn,n[0]=c-Dn,n[1]=c-n[0]-Dn,4):(c=r+4*Xn,n[0]=c+Dn,n[1]=c-n[0]+Dn,-4);if(o<1094263291)return Zn(r,o,n);if(o>=f)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return J[0]=r,K[D]}(r),c=fr(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Jn[a]=0|c,c=16777216*(c-Jn[a]);for(Jn[2]=c,i=3;0===Jn[i-1];)i-=1;return u=Yn(Jn,Kn,e,i),r<0?(n[0]=-Kn[0],n[1]=-Kn[1],-u):(n[0]=Kn[0],n[1]=Kn[1],u)}var rt=[0,0],nt=e.NEGATIVE_INFINITY,tt=3.141592653589793;function et(r){return t(r/2)}function ot(r){return et(r>0?r-1:r+1)}var it=Math.sqrt;function at(r){return Math.abs(r)}var ft,ut,ct,lt="function"==typeof Float64Array,st="function"==typeof Float64Array?Float64Array:null,pt="function"==typeof Float64Array?Float64Array:void 0;ft=function(){var r,n,t;if("function"!=typeof st)return!1;try{n=new st([1,3.14,-3.14,NaN]),t=n,r=(lt&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?pt:function(){throw new Error("not implemented")},!0===V?(ut=1,ct=0):(ut=0,ct=1);var yt={HIGH:ut,LOW:ct},vt=new ft(1),dt=new g(vt.buffer),wt=yt.HIGH,ht=yt.LOW;function gt(r,n,t,e){return vt[0]=r,n[e]=dt[wt],n[e+t]=dt[ht],n}function At(r){return gt(r,[0,0],1,0)}Qr(At,"assign",gt);var bt,Ft="function"==typeof Float64Array,mt="function"==typeof Float64Array?Float64Array:null,Nt="function"==typeof Float64Array?Float64Array:void 0;bt=function(){var r,n,t;if("function"!=typeof mt)return!1;try{n=new mt([1,3.14,-3.14,NaN]),t=n,r=(Ft&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Nt:function(){throw new Error("not implemented")};var It=!0===V?0:1,Et=new bt(1),_t=new g(Et.buffer);function Tt(r,n){return Et[0]=r,_t[It]=n>>>0,Et[0]}function jt(r){return 0|r}var Ut,St=e.NEGATIVE_INFINITY,kt=2147483647,xt="function"==typeof Float64Array,Gt="function"==typeof Float64Array?Float64Array:null,Vt="function"==typeof Float64Array?Float64Array:void 0;Ut=function(){var r,n,t;if("function"!=typeof Gt)return!1;try{n=new Gt([1,3.14,-3.14,NaN]),t=n,r=(xt&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Vt:function(){throw new Error("not implemented")};var Ot=!0===V?1:0,Ht=new Ut(1),Wt=new g(Ht.buffer);function Lt(r,n){return Ht[0]=r,Wt[Ot]=n>>>0,Ht[0]}var $t=1048576,Mt=[1,1.5],Ct=[0,.5849624872207642],Pt=[0,1.350039202129749e-8],Yt=1048576,Rt=1083179008,Zt=1e300,Xt=1e-300,qt=[0,0],zt=[0,0];function Bt(n,e){var o,i,a,f,u,c,l,s,p,y,v,d,w,h;if(r(n)||r(e))return NaN;if(At.assign(e,qt,1,0),u=qt[0],0===qt[1]){if(0===e)return 1;if(1===e)return n;if(-1===e)return 1/n;if(.5===e)return it(n);if(-.5===e)return 1/it(n);if(2===e)return n*n;if(3===e)return n*n*n;if(4===e)return(n*=n)*n;if(pr(e))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:at(r)<1==(n===ur)?0:ur}(n,e)}if(At.assign(n,qt,1,0),f=qt[0],0===qt[1]){if(0===f)return function(r,n){return n===St?ur:n===ur?0:n>0?ot(n)?r:0:ot(n)?dn(ur,r):ur}(n,e);if(1===n)return 1;if(-1===n&&ot(e))return-1;if(pr(n))return n===St?Bt(-0,-e):e<0?0:ur}if(n<0&&!1===t(e))return(n-n)/(n-n);if(a=at(n),o=f&kt|0,i=u&kt|0,l=u>>>31|0,c=(c=f>>>31|0)&&ot(e)?-1:1,i>1105199104){if(i>1139802112)return function(r,n){return(L(r)&kt)<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,e);if(o<1072693247)return 1===l?c*Zt*Zt:c*Xt*Xt;if(o>1072693248)return 0===l?c*Zt*Zt:c*Xt*Xt;v=function(r,n){var t,e,o,i,a,f;return t=(a=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Tt(e=(i=1.4426950216293335*o)+a,0))-i),r[0]=e,r[1]=t,r}(zt,a)}else v=function(r,n,t){var e,o,i,a,f,u,c,l,s,p,y,v,d,w,h,g,A,b,F,m,N;return b=0,t<$t&&(b-=53,t=L(n*=9007199254740992)),b+=(t>>20)-lr|0,t=1072693248|(F=1048575&t|0),F<=235662?m=0:F<767610?m=1:(m=0,b+=1,t-=$t),a=Tt(o=(g=(n=Lt(n,t))-(c=Mt[m]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),u=Lt(0,e+=m<<18),h=(i=o*o)*i*(0===(N=i)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),u=Tt(u=3+(i=a*a)+(h+=(f=A*(g-a*u-a*(n-(u-c))))*(a+o)),0),d=(y=-7.028461650952758e-9*(s=Tt(s=(g=a*u)+(A=f*u+(h-(u-3-i))*o),0))+.9617966939259756*(A-(s-g))+Pt[m])-((v=Tt(v=(p=.9617967009544373*s)+y+(l=Ct[m])+(w=b),0))-w-l-p),r[0]=v,r[1]=d,r}(zt,a,o);if(d=(y=(e-(s=Tt(e,0)))*v[0]+e*v[1])+(p=s*v[0]),At.assign(d,qt,1,0),w=jt(qt[0]),h=jt(qt[1]),w>=Rt){if(0!=(w-Rt|h))return c*Zt*Zt;if(y+8008566259537294e-32>d-p)return c*Zt*Zt}else if((w&kt)>=1083231232){if(0!=(w-3230714880|h))return c*Xt*Xt;if(y<=d-p)return c*Xt*Xt}return d=function(r,n,t){var e,o,i,a,f,u,c,l,s,p;return s=((l=r&kt|0)>>20)-lr|0,c=0,l>1071644672&&(o=Lt(0,((c=r+(Yt>>s+1)>>>0)&~(Y>>(s=((c&kt)>>20)-lr|0)))>>>0),c=(c&Y|Yt)>>20-s>>>0,r<0&&(c=-c),n-=o),r=jt(r=L(u=1-((u=(i=.6931471824645996*(o=Tt(o=t+n,0)))+(a=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=u-(o=u*u)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=a-(u-i))+u*f)-u))),(r+=c<<20>>>0)>>20<=0?xn(u,c):Lt(u,r)}(w,p,y),c*d}var Dt=Math.ceil;function Jt(r){return r<0?Dt(r):n(r)}var Kt=e.NEGATIVE_INFINITY,Qt=1.4426950408889634,re=1/(1<<28);function ne(n){var t;return r(n)||n===ur?n:n===Kt?0:n>709.782712893384?ur:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<re?1+n:function(r,n,t){var e,o,i,a;return xn(1-(n-(e=r-n)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(n-.6931471803691238*(t=Jt(n<0?Qt*n-.5:Qt*n+.5)),1.9082149292705877e-10*t,t)}function te(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=ne(r),2.5066282746310007*(t=r>143.01608?(e=Bt(r,.5*r-.25))*(e/t):Bt(r,r-.5)/t)*n}function ee(r,n){return n/((1+.5772156649015329*r)*r)}function oe(e){var a,u,c,l;if(t(e)&&e<0||e===nt||r(e))return NaN;if(0===e)return function(r){return 0===r&&1/r===o}(e)?nt:ur;if(e>171.61447887182297)return ur;if(e<-170.5674972726612)return 0;if((u=i(e))>33)return e>=0?te(e):(a=0==(1&(c=n(u)))?-1:1,(l=u-c)>.5&&(l=u-(c+=1)),l=u*function(r){var n;if(n=L(r),(n&=2147483647)<=1072243195)return n<1045430272?r:C(r,0);if(n>=f)return NaN;switch(3&Qn(r,rt)){case 0:return C(rt[0],rt[1]);case 1:return $(rt[0],rt[1]);case 2:return-C(rt[0],rt[1]);default:return-$(rt[0],rt[1])}}(tt*l),a*tt/(i(l)*te(u)));for(l=1;e>=3;)l*=e-=1;for(;e<0;){if(e>-1e-9)return ee(e,l);l/=e,e+=1}for(;e<2;){if(e<1e-9)return ee(e,l);l/=e,e+=1}return 2===e?l:l*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(e-=2)}return function(n,t,e){return r(n)||r(t)||r(e)||n<=0||t<=0?NaN:n<=1?ur:e+t*oe(1-1/n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).mean=n();
//# sourceMappingURL=browser.js.map
