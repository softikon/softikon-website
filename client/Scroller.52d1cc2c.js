import{S as t,i as s,s as e,x as n,e as o,c as a,b as l,d as r,g as i,P as u,h as c,q as h,r as d,t as f,u as $,M as p,X as m,Y as g,o as b,p as w}from"./client.bd009450.js";function v(t){let s,e;const p=t[10].default,m=n(p,t,t[9],null);return{c(){s=o("div"),m&&m.c(),this.h()},l(t){s=a(t,"DIV",{class:!0});var e=l(s);m&&m.l(e),e.forEach(r),this.h()},h(){i(s,"class","top-0 svelte-1nc46sq"),u(s,"w-full",!t[0]),u(s,"fixed",t[2]),u(s,"absolute",!t[2]),u(s,"bottom-0",t[3]),u(s,"top-unset",t[3])},m(n,o){c(n,s,o),m&&m.m(s,null),t[11](s),e=!0},p(t,[e]){m&&m.p&&512&e&&m.p(h(p,t,t[9],null),d(p,t[9],e,null)),1&e&&u(s,"w-full",!t[0]),4&e&&u(s,"fixed",t[2]),4&e&&u(s,"absolute",!t[2]),8&e&&u(s,"bottom-0",t[3]),8&e&&u(s,"top-unset",t[3])},i(t){e||(f(m,t),e=!0)},o(t){$(m,t),e=!1},d(e){e&&r(s),m&&m.d(e),t[11](null)}}}function M(t,s,e){let n,o,a,l;p(t,m,t=>e(7,n=t));const r=g();let{autoWidth:i=!1}=s,{length:u=1}=s,{currentItem:c=0}=s;b(()=>{e(1,a=a.parentElement.parentElement);const t=()=>{e(6,o=Math.floor(a.offsetTop-window.scrollY))};return window.addEventListener("scroll",t),t(),()=>{window.removeEventListener("scroll",t)}});let h,{$$slots:d={},$$scope:f}=s;return t.$set=t=>{"autoWidth"in t&&e(0,i=t.autoWidth),"length"in t&&e(5,u=t.length),"currentItem"in t&&e(4,c=t.currentItem),"$$scope"in t&&e(9,f=t.$$scope)},t.$$.update=()=>{if(194&t.$$.dirty&&e(2,l=0===o||o<0&&Math.floor(Math.abs(o-n))<=a.offsetHeight),230&t.$$.dirty){const t=l&&Math.abs(o)/(a.offsetHeight-n);t&&e(4,c=Math.floor(100*(t>=1?t-.001:t)/(100/u)))}16&t.$$.dirty&&r("itemChanged",c),4&t.$$.dirty&&r("stateChanged",l),68&t.$$.dirty&&e(3,h=o<0&&!l)},[i,a,l,h,c,u,o,n,r,f,d,function(t){w[t?"unshift":"push"](()=>{e(1,a=t)})}]}class x extends t{constructor(t){super(),s(this,t,M,v,e,{autoWidth:0,length:5,currentItem:4})}}export{x as S};