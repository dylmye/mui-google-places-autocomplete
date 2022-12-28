"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[787],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),s=(n(7294),n(3905)),a=["components"],i={id:"exposed-methods",title:"Exposed Methods",sidebar_label:"Exposed Methods"},l=void 0,c={unversionedId:"exposed-methods",id:"exposed-methods",title:"Exposed Methods",description:"Usage",source:"@site/docs/exposed-methods.md",sourceDirName:".",slug:"/exposed-methods",permalink:"/mui-google-places-autocomplete/docs/exposed-methods",draft:!1,editUrl:"https://github.com/dylmye/mui-google-places-autocomplete/edit/master/docs/docs/exposed-methods.md",tags:[],version:"current",frontMatter:{id:"exposed-methods",title:"Exposed Methods",sidebar_label:"Exposed Methods"},sidebar:"docs",previous:{title:"Props",permalink:"/mui-google-places-autocomplete/docs/props"},next:{title:"Examples",permalink:"/mui-google-places-autocomplete/docs/examples"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"<code>getSessionToken</code>",id:"getsessiontoken",level:2},{value:"<code>refreshSessionToken</code>",id:"refreshsessiontoken",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"type GooglePlacesAutocompleteHandle = {\n  getSessionToken: () => google.maps.places.AutocompleteSessionToken | undefined,\n  refreshSessionToken: () => void,\n}\n")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"In order to access the exposed methods you need to create a ref to the component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useRef } from 'react';\nimport GooglePlacesAutocomplete from 'react-google-places-autocomplete';\n\nconst Component = () => {\n  const rgpa = useRef(null);\n  const refresh = () => {\n    if (rgpa && rgpa.current) {\n      rgpa.current.refreshSessionToken();\n    }\n  }\n\n  return (\n    <div>\n      <GooglePlacesAutocomplete ref={useRef} />\n      <button\n        ref={rgpa}\n        onClick={refresh}\n      >\n        Refresh session token\n      </button>\n    </div>\n  );\n}\n\nexport default Component;\n")),(0,s.kt)("h2",{id:"getsessiontoken"},(0,s.kt)("inlineCode",{parentName:"h2"},"getSessionToken")),(0,s.kt)("p",null,"This function retrieves the current ",(0,s.kt)("inlineCode",{parentName:"p"},"sessionToken")," being used."),(0,s.kt)("h2",{id:"refreshsessiontoken"},(0,s.kt)("inlineCode",{parentName:"h2"},"refreshSessionToken")),(0,s.kt)("p",null,"This function allows you to refresh the ",(0,s.kt)("inlineCode",{parentName:"p"},"sessionToken")," being used."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," the componente does not refresh the ",(0,s.kt)("inlineCode",{parentName:"p"},"sessionToken"),", so you will need to handle that yourself."))}m.isMDXComponent=!0}}]);