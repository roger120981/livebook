import{B as d,D as v,G as P,a as e,c as u,f as i,g as a,i as m,t as w,v as f,y as b,z as j}from"./chunk-24JW6VB3.js";var A=w(Object.keys,Object),S=A;var C=Object.prototype,V=C.hasOwnProperty;function D(r){if(!f(r))return S(r);var t=[];for(var o in Object(r))V.call(r,o)&&o!="constructor"&&t.push(o);return t}var T=D;var K=a(e,"DataView"),n=K;var N=a(e,"Promise"),s=N;var W=a(e,"Set"),c=W;var B=a(e,"WeakMap"),g=B;var O="[object Map]",z="[object Object]",M="[object Promise]",h="[object Set]",x="[object WeakMap]",k="[object DataView]",E=i(n),G=i(m),L=i(s),q=i(c),F=i(g),p=u;(n&&p(new n(new ArrayBuffer(1)))!=k||m&&p(new m)!=O||s&&p(s.resolve())!=M||c&&p(new c)!=h||g&&p(new g)!=x)&&(p=function(r){var t=u(r),o=t==z?r.constructor:void 0,y=o?i(o):"";if(y)switch(y){case E:return k;case G:return O;case L:return M;case q:return h;case F:return x}return t});var l=p;var H="[object Map]",I="[object Set]",J=Object.prototype,Q=J.hasOwnProperty;function R(r){if(r==null)return!0;if(d(r)&&(j(r)||typeof r=="string"||typeof r.splice=="function"||v(r)||P(r)||b(r)))return!r.length;var t=l(r);if(t==H||t==I)return!r.size;if(f(r))return!T(r).length;for(var o in r)if(Q.call(r,o))return!1;return!0}var kr=R;export{T as a,c as b,l as c,kr as d};