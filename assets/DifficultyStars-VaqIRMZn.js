import{c as f,r as x,j as r,b as e}from"./index-Cq9aA6Wl.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=f("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);function b({value:o,onChange:s,size:i="md",disabled:a,className:l}){const[m,c]=x.useState(0),u=s&&m||o,p={sm:"h-3.5 w-3.5",md:"h-5 w-5",lg:"h-7 w-7"}[i];return r.jsx("div",{className:e("flex items-center gap-0.5",l),onMouseLeave:()=>c(0),children:[1,2,3,4,5].map(t=>r.jsx("button",{type:"button",disabled:a||!s,onClick:()=>s==null?void 0:s(t),onMouseEnter:()=>s&&c(t),"aria-label":`${t} 星`,className:e("transition-transform",s&&!a?"cursor-pointer hover:scale-110":"cursor-default"),children:r.jsx(d,{className:e(p,t<=u?"fill-amber-400 text-amber-400":"text-muted-foreground/40")})},t))})}export{b as D,d as S};
