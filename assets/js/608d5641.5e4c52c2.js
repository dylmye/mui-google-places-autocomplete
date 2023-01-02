"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[870],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(k,i(i({ref:t},s),{},{components:n})):o.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:l,i[1]=r;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1337:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var o=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],r={id:"props",title:"Props",sidebar_label:"Props"},p=void 0,u={unversionedId:"props",id:"props",title:"Props",description:"GooglePlacesAutocomplete",source:"@site/docs/props.md",sourceDirName:".",slug:"/props",permalink:"/mui-google-places-autocomplete/docs/props",draft:!1,editUrl:"https://github.com/dylmye/mui-google-places-autocomplete/edit/master/docs/docs/props.md",tags:[],version:"current",frontMatter:{id:"props",title:"Props",sidebar_label:"Props"},sidebar:"docs",previous:{title:"Basics",permalink:"/mui-google-places-autocomplete/docs/"},next:{title:"Exposed Methods",permalink:"/mui-google-places-autocomplete/docs/exposed-methods"}},s={},c=[{value:"<code>GooglePlacesAutocomplete</code>",id:"googleplacesautocomplete",level:2},{value:"<code>inputValue</code>",id:"inputvalue",level:3},{value:"<code>setInputValue</code>",id:"setinputvalue",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>setValue</code>",id:"setvalue",level:3},{value:"<code>apiKey</code>",id:"apikey",level:3},{value:"<code>apiOptions</code>",id:"apioptions",level:3},{value:"<code>autocompletionRequest</code>",id:"autocompletionrequest",level:3},{value:"<code>debounce</code>",id:"debounce",level:3},{value:"<code>minLengthAutocomplete</code>",id:"minlengthautocomplete",level:3},{value:"<code>onLoadFailed</code>",id:"onloadfailed",level:3},{value:"<code>withSessionToken</code>",id:"withsessiontoken",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>inputProps</code>",id:"inputprops",level:3},{value:"<code>GooglePlacesAutocomplete#ref</code>",id:"googleplacesautocompleteref",level:2},{value:"<code>getSessionToken</code>",id:"getsessiontoken",level:3},{value:"<code>refreshSessionToken</code>",id:"refreshsessiontoken",level:3},{value:"<code>GooglePlacesAutocompleteField</code>",id:"googleplacesautocompletefield",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"googleplacesautocomplete"},(0,a.kt)("inlineCode",{parentName:"h2"},"GooglePlacesAutocomplete")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<GooglePlacesAutocomplete\n  inputValue=""\n  setInputValue={(newValue) => setNewValue(newValue)}\n  value={selectedOption}\n  setValue={(newOption) => setSelectedOption(newOption)}\n  apiKey=""\n  apiOptions={{ language: \'fr\' }}\n  debounce={300}\n  minLengthAutocomplete={0}\n  onLoadFailed={(error) => console.error(error)}\n  withSessionToken={false}\n  label="Search Places"\n  inputProps={{\n    fullWidth: true,\n  }}\n/>\n')),(0,a.kt)("h3",{id:"inputvalue"},(0,a.kt)("inlineCode",{parentName:"h3"},"inputValue")),(0,a.kt)("p",null,"Controlled value that is shown in the text box."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: ",(0,a.kt)("strong",{parentName:"li"},"yes")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("h3",{id:"setinputvalue"},(0,a.kt)("inlineCode",{parentName:"h3"},"setInputValue")),(0,a.kt)("p",null,"This method is called when a new option is selected from the search results, and contains the new value to set ",(0,a.kt)("inlineCode",{parentName:"p"},"inputValue")," to."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: ",(0,a.kt)("strong",{parentName:"li"},"yes")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"(newInputValue: string) => void"))),(0,a.kt)("h3",{id:"value"},(0,a.kt)("inlineCode",{parentName:"h3"},"value")),(0,a.kt)("p",null,"The controlled raw value of the currently selected option. You can optionally use this to grab extra details about the selected option."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: no"),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"PredictionOption | null"))),(0,a.kt)("h3",{id:"setvalue"},(0,a.kt)("inlineCode",{parentName:"h3"},"setValue")),(0,a.kt)("p",null,"This method is called when a new option is selected from the search results, and contains the new value to set ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," to."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: no"),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"(newValue: PredictionOption | null) => void"))),(0,a.kt)("h3",{id:"apikey"},(0,a.kt)("inlineCode",{parentName:"h3"},"apiKey")),(0,a.kt)("p",null,"If this parameter is passed, the component will inject the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/"},"Google Maps JavaScript API")," using this ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey"),". So there's no need to manually add the ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," tag to your HTML document."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: no"),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("h3",{id:"apioptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"apiOptions")),(0,a.kt)("p",null,"Pass any extra options to the API loader. Only takes effect if ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey")," is passed in. All options are defined ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/googlemaps/js-api-loader/blob/947b17b4d5bcedb56757c9c866e34b9c17c01c11/src/index.ts#L46"},"here"),". For example, you can use this object to ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/localization"},"customise the localisation"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: no"),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"LoaderOptions"))),(0,a.kt)("h3",{id:"autocompletionrequest"},(0,a.kt)("inlineCode",{parentName:"h3"},"autocompletionRequest")),(0,a.kt)("p",null,"Add restrictions to the request made when fetching options. All options are defined ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest"},"here"),". You may use this to filter results to a country, or even to a radius of a location or within given bounds."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: no"),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"google.maps.places.AutocompletionRequest"))),(0,a.kt)("h3",{id:"debounce"},(0,a.kt)("inlineCode",{parentName:"h3"},"debounce")),(0,a.kt)("p",null,"The number of milliseconds to delay before making a call to Google Maps API. This prevents the API being called for every keystroke, which could save you from hitting your quota quick."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: no"),(0,a.kt)("li",{parentName:"ul"},"Default: 300"),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("h3",{id:"minlengthautocomplete"},(0,a.kt)("inlineCode",{parentName:"h3"},"minLengthAutocomplete")),(0,a.kt)("p",null,"Defines a minimum number of characters needed on the input in order to make requests to the Google's API."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: no"),(0,a.kt)("li",{parentName:"ul"},"Default: 0"),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("h3",{id:"onloadfailed"},(0,a.kt)("inlineCode",{parentName:"h3"},"onLoadFailed")),(0,a.kt)("p",null,"Function to be called when the injection of the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/"},"Google Maps JavaScript API")," fails due to a network error, for example."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: no"),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"(error: Error) => void"))),(0,a.kt)("h3",{id:"withsessiontoken"},(0,a.kt)("inlineCode",{parentName:"h3"},"withSessionToken")),(0,a.kt)("p",null,"If this prop is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the component will handle changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionToken")," on every session. To learn more about how this works refer to ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/places/web-service/session-tokens"},"Google Places Session Token docs"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: no"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,a.kt)("h3",{id:"label"},(0,a.kt)("inlineCode",{parentName:"h3"},"label")),(0,a.kt)("p",null,"The text to display in the placeholder/above the field."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: no"),(0,a.kt)("li",{parentName:"ul"},"Default: empty string"),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("h3",{id:"inputprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"inputProps")),(0,a.kt)("p",null,"Any props to pass to the TextField."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Required: no"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"TextFieldProps"))),(0,a.kt)("h2",{id:"googleplacesautocompleteref"},(0,a.kt)("inlineCode",{parentName:"h2"},"GooglePlacesAutocomplete#ref")),(0,a.kt)("p",null,"You can retrieve the below methods by creating a ref on the component, using ",(0,a.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/useRef"},(0,a.kt)("inlineCode",{parentName:"a"},"useRef")),". They will live on the ",(0,a.kt)("inlineCode",{parentName:"p"},"current")," property of the ref."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  getSessionToken: () => AutocompleteSessionToken | undefined;\n  refreshSessionToken: () => void;\n}\n")),(0,a.kt)("h3",{id:"getsessiontoken"},(0,a.kt)("inlineCode",{parentName:"h3"},"getSessionToken")),(0,a.kt)("p",null,"Retrieve the current ",(0,a.kt)("inlineCode",{parentName:"p"},"AutocompleteSessionToken"),"."),(0,a.kt)("h3",{id:"refreshsessiontoken"},(0,a.kt)("inlineCode",{parentName:"h3"},"refreshSessionToken")),(0,a.kt)("p",null,"Force update the ",(0,a.kt)("inlineCode",{parentName:"p"},"AutocompleteSessionToken"),"."),(0,a.kt)("h2",{id:"googleplacesautocompletefield"},(0,a.kt)("inlineCode",{parentName:"h2"},"GooglePlacesAutocompleteField")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Field\n  component={GooglePlacesAutocompleteField}\n  value={selectedOption}\n  setValue={(newOption) => setSelectedOption(newOption)}\n  apiKey=""\n  apiOptions={{ language: \'fr\' }}\n  debounce={300}\n  minLengthAutocomplete={0}\n  onLoadFailed={(error) => console.error(error)}\n  withSessionToken={false}\n  label="Search Places"\n/>\n')),(0,a.kt)("p",null,"The props are the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"GooglePlacesAutocomplete"),", other than ",(0,a.kt)("inlineCode",{parentName:"p"},"inputValue")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"setInputValue")," being excluded. ",(0,a.kt)("a",{parentName:"p",href:"https://formik.org/docs/api/field"},"Formik Field props")," are also available."))}m.isMDXComponent=!0}}]);