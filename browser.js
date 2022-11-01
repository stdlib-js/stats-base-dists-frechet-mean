// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}var e=Number.NEGATIVE_INFINITY;function u(r){return Math.abs(r)}var o,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol.toStringTag:"";o=f&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return i.call(r);t=r[c],o=c,n=null!=(u=r)&&a.call(u,o);try{r[c]=void 0}catch(n){return i.call(r)}return e=i.call(r),n?r[c]=t:delete r[c],e}:function(r){return i.call(r)};var l,y=o,v="function"==typeof Uint32Array,p="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var r,n,t;if("function"!=typeof p)return!1;try{n=new p(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(v&&t instanceof Uint32Array||"[object Uint32Array]"===y(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var s,w=l,d="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,_="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A([1,3.14,-3.14,NaN]),t=n,r=(d&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,h=s,N="function"==typeof Uint8Array,U="function"==typeof Uint8Array?Uint8Array:null,g="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,256,257]),t=n,r=(N&&t instanceof Uint8Array||"[object Uint8Array]"===y(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,I=m,O="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,E="function"==typeof Uint16Array?Uint16Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,65536,65537]),t=n,r=(O&&t instanceof Uint16Array||"[object Uint16Array]"===y(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T={uint16:j,uint8:I};(F=new T.uint16(1))[0]=4660;var H=52===new T.uint8(F.buffer)[0],G=!0===H?1:0,P=new h(1),M=new w(P.buffer);function L(r){return P[0]=r,M[G]}function V(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var W=-.16666666666666632;function k(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(W+u*t):r-(u*(.5*n-e*t)-n-e*W)}var x,Y,q=!0===H?0:1,C=new h(1),z=new w(C.buffer);!0===H?(x=1,Y=0):(x=0,Y=1);var B={HIGH:x,LOW:Y},D=new h(1),J=new w(D.buffer),K=B.HIGH,Q=B.LOW;function R(r,n){return J[K]=r,J[Q]=n,D[0]}var X,Z,$=Number.POSITIVE_INFINITY,rr=1023;function nr(r){return r===$||r===e}!0===H?(X=1,Z=0):(X=0,Z=1);var tr={HIGH:X,LOW:Z},er=new h(1),ur=new w(er.buffer),or=tr.HIGH,fr=tr.LOW;function ir(r,n){return er[0]=n,r[0]=ur[or],r[1]=ur[fr],r}function ar(r,n){return 1===arguments.length?ir([0,0],r):ir(r,n)}var cr=[0,0];function lr(r,n){var t,e;return ar(cr,r),t=cr[0],t&=2147483647,e=L(n),R(t|=e&=2147483648,cr[1])}var yr,vr="function"==typeof Object.defineProperty?Object.defineProperty:null,pr=Object.defineProperty,br=Object.prototype,sr=br.toString,wr=br.__defineGetter__,dr=br.__defineSetter__,Ar=br.__lookupGetter__,_r=br.__lookupSetter__;function mr(n,t,e,o){return r(n)||nr(n)?(t[o]=n,t[o+e]=0,t):0!==n&&u(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}yr=function(){try{return vr({},"x",{}),!0}catch(r){return!1}}()?pr:function(r,n,t){var e,u,o,f;if("object"!=typeof r||null===r||"[object Array]"===sr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===sr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(Ar.call(r,n)||_r.call(r,n)?(e=r.__proto__,r.__proto__=br,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,f="set"in t,u&&(o||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&wr&&wr.call(r,n,t.get),f&&dr&&dr.call(r,n,t.set),r},yr((function(r){return mr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:mr});var hr=[0,0],Nr=[0,0];function Ur(n,t){var u,o;return 0===t||0===n||r(n)||nr(n)?n:(mr(n,hr,1,0),t+=hr[1],t+=function(r){var n=L(r);return(n=(2146435072&n)>>>20)-rr|0}(n=hr[0]),t<-1074?lr(0,n):t>1023?n<0?e:$:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,ar(Nr,n),u=Nr[0],u&=2148532223,o*R(u|=t+rr<<20,Nr[1])))}function gr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var jr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ir=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Or=16777216,Sr=5.960464477539063e-8,Er=gr(20),Fr=gr(20),Tr=gr(20),Hr=gr(20);function Gr(r,t,e,u,o,f,i,a,c){var l,y,v,p,b,s,w,d,A;for(p=f,A=u[e],d=e,b=0;d>0;b++)y=Sr*A|0,Hr[b]=A-Or*y|0,A=u[d-1]+y,d-=1;if(A=Ur(A,o),A-=8*n(.125*A),A-=w=0|A,v=0,o>0?(w+=b=Hr[e-1]>>24-o,Hr[e-1]-=b<<24-o,v=Hr[e-1]>>23-o):0===o?v=Hr[e-1]>>23:A>=.5&&(v=2),v>0){for(w+=1,l=0,b=0;b<e;b++)d=Hr[b],0===l?0!==d&&(l=1,Hr[b]=16777216-d):Hr[b]=16777215-d;if(o>0)switch(o){case 1:Hr[e-1]&=8388607;break;case 2:Hr[e-1]&=4194303}2===v&&(A=1-A,0!==l&&(A-=Ur(1,o)))}if(0===A){for(d=0,b=e-1;b>=f;b--)d|=Hr[b];if(0===d){for(s=1;0===Hr[f-s];s++);for(b=e+1;b<=e+s;b++){for(c[a+b]=jr[i+b],y=0,d=0;d<=a;d++)y+=r[d]*c[a+(b-d)];u[b]=y}return Gr(r,t,e+=s,u,o,f,i,a,c)}}if(0===A)for(e-=1,o-=24;0===Hr[e];)e-=1,o-=24;else(A=Ur(A,-o))>=Or?(y=Sr*A|0,Hr[e]=A-Or*y|0,o+=24,Hr[e+=1]=y):Hr[e]=0|A;for(y=Ur(1,o),b=e;b>=0;b--)u[b]=y*Hr[b],y*=Sr;for(b=e;b>=0;b--){for(y=0,s=0;s<=p&&s<=e-b;s++)y+=Ir[s]*u[b+s];Tr[e-b]=y}for(y=0,b=e;b>=0;b--)y+=Tr[b];for(t[0]=0===v?y:-y,y=Tr[0]-y,b=1;b<=e;b++)y+=Tr[b];return t[1]=0===v?y:-y,7&w}function Pr(r,n,t,e){var u,o,f,i,a,c,l;for((o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),l=f+4,a=0;a<=l;a++)Er[a]=c<0?0:jr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Er[f+(a-c)];Fr[a]=u}return Gr(r,n,4,Fr,i,4,o,f,Er)}var Mr=Math.round;function Lr(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=Mr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(L(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(L(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e}var Vr=1.5707963267341256,Wr=6077100506506192e-26,kr=2*Wr,xr=3*Wr,Yr=4*Wr,qr=[0,0,0],Cr=[0,0];function zr(r,n){var t,e,u,o,f,i,a;if((u=2147483647&L(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Lr(r,u,n):u<=1073928572?r>0?(a=r-Vr,n[0]=a-Wr,n[1]=a-n[0]-Wr,1):(a=r+Vr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-1):r>0?(a=r-2*Vr,n[0]=a-kr,n[1]=a-n[0]-kr,2):(a=r+2*Vr,n[0]=a+kr,n[1]=a-n[0]+kr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Lr(r,u,n):r>0?(a=r-3*Vr,n[0]=a-xr,n[1]=a-n[0]-xr,3):(a=r+3*Vr,n[0]=a+xr,n[1]=a-n[0]+xr,-3):1075388923===u?Lr(r,u,n):r>0?(a=r-4*Vr,n[0]=a-Yr,n[1]=a-n[0]-Yr,4):(a=r+4*Vr,n[0]=a+Yr,n[1]=a-n[0]+Yr,-4);if(u<1094263291)return Lr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return C[0]=r,z[q]}(r),a=R(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)qr[f]=0|a,a=16777216*(a-qr[f]);for(qr[2]=a,o=3;0===qr[o-1];)o-=1;return i=Pr(qr,Cr,e,o),r<0?(n[0]=-Cr[0],n[1]=-Cr[1],-i):(n[0]=Cr[0],n[1]=Cr[1],i)}var Br=[0,0],Dr=3.141592653589793;function Jr(r){return t(r/2)}function Kr(r){return Jr(r>0?r-1:r+1)}var Qr=Math.sqrt,Rr=!0===H?0:1,Xr=new h(1),Zr=new w(Xr.buffer);function $r(r,n){return Xr[0]=r,Zr[Rr]=n>>>0,Xr[0]}function rn(r){return 0|r}var nn=!0===H?1:0,tn=new h(1),en=new w(tn.buffer);function un(r,n){return tn[0]=r,en[nn]=n>>>0,tn[0]}var on=1048576,fn=[1,1.5],an=[0,.5849624872207642],cn=[0,1.350039202129749e-8],ln=2147483647,yn=1048575,vn=1048576,pn=2147483647,bn=1083179008,sn=1e300,wn=1e-300,dn=[0,0],An=[0,0];function _n(n,o){var f,i,a,c,l,y,v,p,b,s,w,d,A,_;if(r(n)||r(o))return NaN;if(ar(dn,o),l=dn[0],0===dn[1]){if(0===o)return 1;if(1===o)return n;if(-1===o)return 1/n;if(.5===o)return Qr(n);if(-.5===o)return 1/Qr(n);if(2===o)return n*n;if(3===o)return n*n*n;if(4===o)return(n*=n)*n;if(nr(o))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:u(r)<1==(n===$)?0:$}(n,o)}if(ar(dn,n),c=dn[0],0===dn[1]){if(0===c)return function(r,n){return n===e?$:n===$?0:n>0?Kr(n)?r:0:Kr(n)?lr($,r):$}(n,o);if(1===n)return 1;if(-1===n&&Kr(o))return-1;if(nr(n))return n===e?_n(-0,-o):o<0?0:$}if(n<0&&!1===t(o))return(n-n)/(n-n);if(a=u(n),f=c&pn|0,i=l&pn|0,v=l>>>31|0,y=(y=c>>>31|0)&&Kr(o)?-1:1,i>1105199104){if(i>1139802112)return function(r,n){return(2147483647&L(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,o);if(f<1072693247)return 1===v?y*sn*sn:y*wn*wn;if(f>1072693248)return 0===v?y*sn*sn:y*wn*wn;w=function(r,n){var t,e,u,o,f,i;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(i=u)?.5:.5+i*(.25*i-.3333333333333333))*1.4426950408889634)-((e=$r(e=(o=1.4426950216293335*u)+f,0))-o),r[0]=e,r[1]=t,r}(An,a)}else w=function(r,n,t){var e,u,o,f,i,a,c,l,y,v,p,b,s,w,d,A,_,m,h,N,U;return m=0,t<on&&(m-=53,t=L(n*=9007199254740992)),m+=(t>>20)-rr|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=on),f=$r(u=(A=(n=un(n,t))-(c=fn[N]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=un(0,e+=N<<18),d=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=$r(a=3+(o=f*f)+(d+=(i=_*(A-f*a-f*(n-(a-c))))*(f+u)),0),s=(p=-7.028461650952758e-9*(y=$r(y=(A=f*a)+(_=i*a+(d-(a-3-o))*u),0))+.9617966939259756*(_-(y-A))+cn[N])-((b=$r(b=(v=.9617967009544373*y)+p+(l=an[N])+(w=m),0))-w-l-v),r[0]=b,r[1]=s,r}(An,a,f);if(s=(o-(p=$r(o,0)))*w[0]+o*w[1],b=p*w[0],ar(dn,d=s+b),A=rn(dn[0]),_=rn(dn[1]),A>=bn){if(0!=(A-bn|_))return y*sn*sn;if(s+8008566259537294e-32>d-b)return y*sn*sn}else if((A&pn)>=1083231232){if(0!=(A-3230714880|_))return y*wn*wn;if(s<=d-b)return y*wn*wn}return d=function(r,n,t){var e,u,o,f,i,a,c,l,y,v;return y=((l=r&ln|0)>>20)-rr|0,c=0,l>1071644672&&(u=un(0,((c=r+(vn>>y+1)>>>0)&~(yn>>(y=((c&ln)>>20)-rr|0)))>>>0),c=(c&yn|vn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=rn(r=L(a=1-((a=(o=.6931471824645996*(u=$r(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((i=f-(a-o))+a*i)-a))),(r+=c<<20>>>0)>>20<=0?Ur(a,c):un(a,r)}(A,b,s),y*d}var mn=Math.ceil;function hn(r){return r<0?mn(r):n(r)}var Nn=1.4426950408889634,Un=1/(1<<28);function gn(n){var t;return r(n)||n===$?n:n===e?0:n>709.782712893384?$:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Un?1+n:function(r,n,t){var e,u,o,f;return Ur(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(n-.6931471803691238*(t=hn(n<0?Nn*n-.5:Nn*n+.5)),1.9082149292705877e-10*t,t)}function jn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=gn(r),2.5066282746310007*(t=r>143.01608?(e=_n(r,.5*r-.25))*(e/t):_n(r,r-.5)/t)*n}function In(r,n){return n/((1+.5772156649015329*r)*r)}function On(o){var f,i,a,c;if(t(o)&&o<0||o===e||r(o))return NaN;if(0===o)return function(r){return 0===r&&1/r===e}(o)?e:$;if(o>171.61447887182297)return $;if(o<-170.5674972726612)return 0;if((i=u(o))>33)return o>=0?jn(o):(f=0==(1&(a=n(i)))?-1:1,(c=i-a)>.5&&(c=i-(a+=1)),c=i*function(r){var n;if(n=L(r),(n&=2147483647)<=1072243195)return n<1045430272?r:k(r,0);if(n>=2146435072)return NaN;switch(3&zr(r,Br)){case 0:return k(Br[0],Br[1]);case 1:return V(Br[0],Br[1]);case 2:return-k(Br[0],Br[1]);default:return-V(Br[0],Br[1])}}(Dr*c),f*Dr/(u(c)*jn(i)));for(c=1;o>=3;)c*=o-=1;for(;o<0;){if(o>-1e-9)return In(o,c);c/=o,o+=1}for(;o<2;){if(o<1e-9)return In(o,c);c/=o,o+=1}return 2===o?c:c*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(o-=2)}return function(n,t,e){return r(n)||r(t)||r(e)||n<=0||t<=0?NaN:n<=1?$:e+t*On(1-1/n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).mean=n();
//# sourceMappingURL=browser.js.map
