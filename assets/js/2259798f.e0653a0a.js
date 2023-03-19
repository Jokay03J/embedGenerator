"use strict";(self.webpackChunkembedgenerator_docs=self.webpackChunkembedgenerator_docs||[]).push([[373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,b=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(b,u(u({ref:t},c),{},{components:r})):n.createElement(b,u({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6601:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3,title:"Youtube Generator"},u=void 0,l={unversionedId:"api/youtube",id:"api/youtube",title:"Youtube Generator",description:"Import",source:"@site/docs/api/youtube.md",sourceDirName:"api",slug:"/api/youtube",permalink:"/embedGenerator/docs/api/youtube",draft:!1,editUrl:"https://github.com/Jokay03J/embedGenerator/tree/docs/docs/api/youtube.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Youtube Generator"},sidebar:"tutorialSidebar",previous:{title:"SoundCloud Generator",permalink:"/embedGenerator/docs/api/soundcloud"}},p={},i=[{value:"Import",id:"import",level:2},{value:"Embed",id:"embed",level:2},{value:"supported youtube url types",id:"supported-youtube-url-types",level:3},{value:"Parameters",id:"parameters",level:3},{value:"url",id:"url",level:4},{value:"Exemple",id:"exemple",level:3}],c={toc:i},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { YoutubeGenerator } from "embedgenerator"; //support also CommonJS syntax\n')),(0,a.kt)("h2",{id:"embed"},"Embed"),(0,a.kt)("h3",{id:"supported-youtube-url-types"},"supported youtube url types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"supported"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"video"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"playlist"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"user"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"embed")," accepts single parameters, with the following options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"interface YoutubeGeneratorEmbed {\n  /**\n   * youtube valid url\n   */\n  url: string;\n}\n\nYoutubeGenerator.embed(YoutubeGeneratorEmbed): Promise<string>\n")),(0,a.kt)("h4",{id:"url"},"url"),(0,a.kt)("p",null,"youtube valid url."),(0,a.kt)("h3",{id:"exemple"},"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { YoutubeGenerator } from "embedgenerator"; //support also CommonJS syntax\n\nYoutubeGenerator.embed("https://www.youtube.com/watch?v=dQw4w9WgXcQ").then(\n  (url) => {\n    console.log(url); //output: https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1\n  }\n);\n')))}s.isMDXComponent=!0}}]);