// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function l(l){return n[l]||null}var t=64,u=8;function i(n,i,o,a,r,e){var f,c,b,p,v,x,m;return f=l(n),c=l(i),b=l(o),p=l(a),v=l(r),x=l(e),null===f||null===c||null===b||null===p||null===v||null===x?u:(c>(m=f)&&(m=c),b>m&&(m=b),p>m&&(m=p),v>m&&(m=v),x>m&&(m=x),t/m|0)}export{i as default};
//# sourceMappingURL=mod.js.map
