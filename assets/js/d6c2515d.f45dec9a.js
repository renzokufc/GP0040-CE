"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,m=c["".concat(d,".").concat(h)]||c[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={title:"Documentation Versioning",pagination_next:null,pagination_prev:null,description:"How to version documents for a new release"},i="Versioning",s={unversionedId:"development/documentation-versioning",id:"development/documentation-versioning",title:"Documentation Versioning",description:"How to version documents for a new release",source:"@site/docs/development/documentation-versioning.mdx",sourceDirName:"development",slug:"/development/documentation-versioning",permalink:"/development/documentation-versioning",draft:!1,tags:[],version:"current",frontMatter:{title:"Documentation Versioning",pagination_next:null,pagination_prev:null,description:"How to version documents for a new release"}},d={},l=[{value:"On New Release",id:"on-new-release",level:2},{value:"Delete Prior Version",id:"delete-prior-version",level:3},{value:"Tag New Version",id:"tag-new-version",level:3},{value:"Updating Documentation",id:"updating-documentation",level:2},{value:"Update Future Release Documentation",id:"update-future-release-documentation",level:3},{value:"Update Current Release Documentation",id:"update-current-release-documentation",level:3}],u={toc:l},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"Versioning is used so that the documentation for features currently in development can be updated without affecting user documentation, which should remain fairly static and only updated with a new release version. There should only ever be ",(0,r.kt)("strong",{parentName:"p"},"one")," versioned copy of the documentation that matches to latest release version number of firmware."),(0,r.kt)("p",null,"The result is a default versions copy for the latest release that is served to the user when visiting ",(0,r.kt)("a",{parentName:"p",href:"https://gp2040-ce.info"},"https://gp2040-ce.info"),' and another "Next" version that reflects unfinished documentation for the next release.'),(0,r.kt)("h2",{id:"on-new-release"},"On New Release"),(0,r.kt)("p",null,"When a new release is ready, first delete the prior version. Then tag a new version with a name that matches the release number (i.e. X.X.X). Once that has been completed, commit the changes and make a pull request to update the site documentation."),(0,r.kt)("h3",{id:"delete-prior-version"},"Delete Prior Version"),(0,r.kt)("p",null,"At the root of the GP2040-CE folder, run the following command to delete the versioned folders and files entirely as they will be recreated in when a new version is tagged."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf docs/versioned_docs\nrm -rf docs/versioned_sidebars\nrm -rf docs/versions.json\n")),(0,r.kt)("h3",{id:"tag-new-version"},"Tag New Version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd docs/\nnpm run docusaurus docs:version X.X.X\n")),(0,r.kt)("p",null,"When tagging a new version, the document versioning mechanism will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy the full docs/ folder contents into a new versioned_docs/version-","[versionName]","/ folder."),(0,r.kt)("li",{parentName:"ul"},"Create a versioned sidebars file based from your current sidebar configuration (if it exists) - saved as versioned_sidebars/version-","[versionName]","-sidebars.json."),(0,r.kt)("li",{parentName:"ul"},"Append the new version number to versions.json.")),(0,r.kt)("h2",{id:"updating-documentation"},"Updating Documentation"),(0,r.kt)("h3",{id:"update-future-release-documentation"},"Update Future Release Documentation"),(0,r.kt)("p",null,"Updates can be made directly in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/docs/")," folder or ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.js")," as these changes are not reflected in the default versioned documents users will see on the site. Any changes to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/docs/")," folder or ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.js")," are made to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Next")," version."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GP2040-CE | Next Version",src:n(2300).Z,width:"196",height:"141"})),(0,r.kt)("h3",{id:"update-current-release-documentation"},"Update Current Release Documentation"),(0,r.kt)("p",null,"This process is different from updating documentation for future releases as changes need to be made with the versioned documents. Changes to the current release version of documentation will need to be made to the files in ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/versioned_docs/version-X.X.X")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/versioned_sidebars/version-X.X.X-sidebars.json"),"."),(0,r.kt)("p",null,"These changes will be reflected in the default user facing documentation that appears when users go to ",(0,r.kt)("a",{parentName:"p",href:"https://gp2040-ce.info"},"https://gp2040-ce.info")," and do not specifically select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Next")," version of documentation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GP2040-CE | Current Version",src:n(9941).Z,width:"196",height:"141"})))}p.isMDXComponent=!0},9941:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},2300:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);