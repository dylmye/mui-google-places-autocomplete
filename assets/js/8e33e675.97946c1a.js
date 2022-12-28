"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[590],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6564:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"examples",title:"Examples",sidebar_label:"Examples"},c=void 0,p={unversionedId:"examples",id:"examples",title:"Examples",description:"Automatic Google Maps Javascript API injection",source:"@site/docs/recipes.md",sourceDirName:".",slug:"/examples",permalink:"/mui-google-places-autocomplete/docs/examples",draft:!1,editUrl:"https://github.com/dylmye/mui-google-places-autocomplete/edit/master/docs/docs/recipes.md",tags:[],version:"current",frontMatter:{id:"examples",title:"Examples",sidebar_label:"Examples"},sidebar:"docs",previous:{title:"Exposed Methods",permalink:"/mui-google-places-autocomplete/docs/exposed-methods"},next:{title:"Geocode by Place ID",permalink:"/mui-google-places-autocomplete/docs/geocode-by-place-id"}},s={},u=[{value:"Automatic Google Maps Javascript API injection",id:"automatic-google-maps-javascript-api-injection",level:2},{value:"Controlled input",id:"controlled-input",level:2},{value:"Customization",id:"customization",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"automatic-google-maps-javascript-api-injection"},"Automatic Google Maps Javascript API injection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<GooglePlacesAutocomplete apiKey="*****" />\n')),(0,a.kt)("h2",{id:"controlled-input"},"Controlled input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const [value, setValue] = useState(null);\n\n<GooglePlacesAutocomplete\n  selectProps={{\n    value,\n    onChange: setValue,\n  }}\n/>\n")),(0,a.kt)("h2",{id:"customization"},"Customization"),(0,a.kt)("p",null,"In order to customize the input and suggestions list, we need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"styles")," property of ",(0,a.kt)("a",{parentName:"p",href:"https://react-select.com/styles"},"react-select"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<GooglePlacesAutocomplete\n  selectProps={{\n    styles: {\n      input: (provided) => ({\n        ...provided,\n        color: 'blue',\n      }),\n      option: (provided) => ({\n        ...provided,\n        color: 'blue',\n      }),\n      singleValue: (provided) => ({\n        ...provided,\n        color: 'blue',\n      }),\n    },\n  }}\n/>\n")))}d.isMDXComponent=!0}}]);