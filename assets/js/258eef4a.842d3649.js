"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9940],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=s(t),g=i,m=l["".concat(c,".").concat(g)]||l[g]||f[g]||a;return t?r.createElement(m,p(p({ref:n},u),{},{components:t})):r.createElement(m,p({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,p=new Array(a);p[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[l]="string"==typeof e?e:i,p[1]=o;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={title:"Pin Mapping",description:"Map GPIO pins from RP2040 to gamepad inputs in GP2040-CE"},p="Pin Mapping",o={unversionedId:"web-configurator/menu-pages/pin-mapping",id:"web-configurator/menu-pages/pin-mapping",title:"Pin Mapping",description:"Map GPIO pins from RP2040 to gamepad inputs in GP2040-CE",source:"@site/docs/web-configurator/menu-pages/02-pin-mapping.mdx",sourceDirName:"web-configurator/menu-pages",slug:"/web-configurator/menu-pages/pin-mapping",permalink:"/web-configurator/menu-pages/pin-mapping",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Pin Mapping",description:"Map GPIO pins from RP2040 to gamepad inputs in GP2040-CE"},sidebar:"webConfigSidebar",previous:{title:"Settings",permalink:"/web-configurator/menu-pages/settings"},next:{title:"Keyboard Mapping",permalink:"/web-configurator/menu-pages/keyboard-mapping"}},c={},s=[],u={toc:s},l="wrapper";function f(e){let{components:n,...a}=e;return(0,i.kt)(l,(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pin-mapping"},"Pin Mapping"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GP2040-CE Configurator - Pin Mapping",src:t(8593).Z,width:"1326",height:"1659"})),(0,i.kt)("p",null,"Here you can remap the GP2040-CE buttons to different GPIO pins on the RP2040 chip. This can be used to simply remap buttons, or bypass a GPIO pin that may have issues on your device."))}f.isMDXComponent=!0},8593:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/gpc-pin-mapping-fcb8c43641e9895d747a87ed3e1fe311.png"}}]);