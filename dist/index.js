"use strict";var v=function(E,e){return function(){return e||E((e={exports:{}}).exports,e),e.exports}};var f=v(function(K,_){
var o={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};_.exports=o
});var b=v(function(O,I){
var n=require('@stdlib/ndarray-base-bytes-per-element/dist'),S=f();function x(E,e,B,L,N,c){var s,u,a,i,l,t,r;return s=n(E),u=n(e),a=n(B),i=n(L),l=n(N),t=n(c),s===null||u===null||a===null||i===null||l===null||t===null?S.BLOCK_SIZE_IN_ELEMENTS:(r=s,u>r&&(r=u),a>r&&(r=a),i>r&&(r=i),l>r&&(r=l),t>r&&(r=t),S.BLOCK_SIZE_IN_BYTES/r|0)}I.exports=x
});var q=b();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
