"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[870],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<a;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1337:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],p={id:"props",title:"Props",sidebar_label:"Props"},s=void 0,i={unversionedId:"props",id:"props",title:"Props",description:"Where SelectProps are the ones accepted by react-select.",source:"@site/docs/props.md",sourceDirName:".",slug:"/props",permalink:"/mui-google-places-autocomplete/docs/props",draft:!1,editUrl:"https://github.com/dylmye/mui-google-places-autocomplete/edit/master/docs/docs/props.md",tags:[],version:"current",frontMatter:{id:"props",title:"Props",sidebar_label:"Props"},sidebar:"docs",previous:{title:"Basics",permalink:"/mui-google-places-autocomplete/docs/docs/"},next:{title:"Exposed Methods",permalink:"/mui-google-places-autocomplete/docs/exposed-methods"}},c={},u=[{value:"<code>apiKey</code>",id:"apikey",level:2},{value:"<code>apiOptions</code>",id:"apioptions",level:2},{value:"<code>autocompletionRequest</code>",id:"autocompletionrequest",level:2},{value:"<code>debounce</code>",id:"debounce",level:2},{value:"<code>minLengthAutocomplete</code>",id:"minlengthautocomplete",level:2},{value:"<code>onLoadFailed</code>",id:"onloadfailed",level:2},{value:"<code>selectProps</code>",id:"selectprops",level:2},{value:"<code>withSessionToken</code>",id:"withsessiontoken",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"interface GooglePlacesAutocompleteProps {\n  apiKey?: string;                               // default: ''\n  apiOptions?: ApiOptions;                       // default: { }\n  autocompletionRequest?: AutocompletionRequest; // default: { }\n  debounce?: number;                             // default: 300\n  minLengthAutocomplete?: number;                // default: 0\n  onLoadFailed?: (error: Error) => void;         // default: console.error\n  selectProps?: SelectProps;                     // default: { }\n  withSessionToken?: boolean;                    // default: false\n}\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectProps")," are the ones accepted by ",(0,a.kt)("a",{parentName:"p",href:"https://react-select.com/props"},"react-select"),"."),(0,a.kt)("h2",{id:"apikey"},(0,a.kt)("inlineCode",{parentName:"h2"},"apiKey")),(0,a.kt)("p",null,"If this parameter is passed, the component will inject the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/"},"Google Maps JavaScript API")," usign this ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey"),". So there's no need to manually add the ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," tag to yout HTML document."),(0,a.kt)("h2",{id:"apioptions"},(0,a.kt)("inlineCode",{parentName:"h2"},"apiOptions")),(0,a.kt)("p",null,"Object to configure the google script to inject. Let's see the shape this prop can take:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface ApiOptions {\n  language?: string;\n  region?: string;\n}\n")),(0,a.kt)("p",null,"Here's an example on how to use it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<GooglePlacesAutocomplete\n  apiKey=\"***************\"\n  apiOptions={{ language: 'fr', region: 'fr' }}\n/>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," for more information check ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/localization"},"localization documentation"),"."),(0,a.kt)("h2",{id:"autocompletionrequest"},(0,a.kt)("inlineCode",{parentName:"h2"},"autocompletionRequest")),(0,a.kt)("p",null,"Autocompletion request object to add restrictions to the search. Let's see the shape this prop can take:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"interface LatLng {\n  lat: number;\n  lng: number;\n}\n\ninterface AutocompletionRequest {\n  bounds?: [LatLng, LatLng];\n  componentRestrictions?: { country: string | string[] };\n  location?: LatLng;\n  offset?: number;\n  radius?: number;\n  types?: string[];\n}\n")),(0,a.kt)("p",null,"Here's an example on how to use it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<GooglePlacesAutocomplete\n  autocompletionRequest={{\n    bounds: [\n      { lat: 50, lng: 50 },\n      { lat: 100, lng: 100 }\n    ],\n    componentRestrictions: {\n    country: ['us', 'ca', 'uy'],\n    }\n  }}\n/>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," for more information check ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest"},"google documentation"),"."),(0,a.kt)("h2",{id:"debounce"},(0,a.kt)("inlineCode",{parentName:"h2"},"debounce")),(0,a.kt)("p",null,"The number of milliseconds to delay before making a call to Google Maps API."),(0,a.kt)("h2",{id:"minlengthautocomplete"},(0,a.kt)("inlineCode",{parentName:"h2"},"minLengthAutocomplete")),(0,a.kt)("p",null,"Defines a minimum number of characters needed on the input in order to make requests to the Google's API."),(0,a.kt)("h2",{id:"onloadfailed"},(0,a.kt)("inlineCode",{parentName:"h2"},"onLoadFailed")),(0,a.kt)("p",null,"Function to be called when the injection of the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/"},"Google Maps JavaScript API")," fails due to network error."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<GooglePlacesAutocomplete\n  onLoadFailed={(error) => (\n    console.error("Could not inject Google script", error)\n  )}\n/>\n')),(0,a.kt)("h2",{id:"selectprops"},(0,a.kt)("inlineCode",{parentName:"h2"},"selectProps")),(0,a.kt)("p",null,"As this component uses ",(0,a.kt)("a",{parentName:"p",href:"https://react-select.com"},"react-select")," under the hood, this prop accepts everything that's accepted by it. You can check ",(0,a.kt)("a",{parentName:"p",href:"https://react-select.com/props"},"react-select props here"),"."),(0,a.kt)("p",null,"For example, a really common use would be to use it as a controlled input:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const [value, setValue] = useState(null);\n\n<GooglePlacesAutocomplete\n  selectProps={{\n    value,\n    onChange: setValue,\n  }}\n/>\n")),(0,a.kt)("h2",{id:"withsessiontoken"},(0,a.kt)("inlineCode",{parentName:"h2"},"withSessionToken")),(0,a.kt)("p",null,"If this prop is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the component will handle changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionToken")," on every session. To learn more about how this works refer to ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/places/web-service/session-tokens"},"Google Places Session Token docs"),"."))}m.isMDXComponent=!0}}]);