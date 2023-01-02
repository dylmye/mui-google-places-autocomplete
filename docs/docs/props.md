---
id: props
title: Props
sidebar_label: Props
---

## `GooglePlacesAutocomplete`

```jsx
<GooglePlacesAutocomplete
  inputValue=""
  setInputValue={(newValue) => setNewValue(newValue)}
  value={selectedOption}
  setValue={(newOption) => setSelectedOption(newOption)}
  apiKey=""
  apiOptions={{ language: 'fr' }}
  debounce={300}
  minLengthAutocomplete={0}
  onLoadFailed={(error) => console.error(error)}
  withSessionToken={false}
  label="Search Places"
  inputProps={{
    fullWidth: true,
  }}
/>
```

### `inputValue`

Controlled value that is shown in the text box.

* Required: **yes**
* Type: `string`

### `setInputValue`

This method is called when a new option is selected from the search results, and contains the new value to set `inputValue` to.

* Required: **yes**
* Type: `(newInputValue: string) => void`

### `value`

The controlled raw value of the currently selected option. You can optionally use this to grab extra details about the selected option.

* Required: no
* Type: `PredictionOption | null`

### `setValue`

This method is called when a new option is selected from the search results, and contains the new value to set `value` to.

* Required: no
* Type: `(newValue: PredictionOption | null) => void`

### `apiKey`

If this parameter is passed, the component will inject the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/) using this `apiKey`. So there's no need to manually add the `script` tag to your HTML document.

* Required: no
* Type: `string`

### `apiOptions`

Pass any extra options to the API loader. Only takes effect if `apiKey` is passed in. All options are defined [here](https://github.com/googlemaps/js-api-loader/blob/947b17b4d5bcedb56757c9c866e34b9c17c01c11/src/index.ts#L46). For example, you can use this object to [customise the localisation](https://developers.google.com/maps/documentation/javascript/localization).

* Required: no
* Type: `LoaderOptions`

### `autocompletionRequest`

Add restrictions to the request made when fetching options. All options are defined [here](https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest). You may use this to filter results to a country, or even to a radius of a location or within given bounds.

* Required: no
* Type: `google.maps.places.AutocompletionRequest`

### `debounce`

The number of milliseconds to delay before making a call to Google Maps API. This prevents the API being called for every keystroke, which could save you from hitting your quota quick.

* Required: no
* Default: 300
* Type: `number`

### `minLengthAutocomplete`

Defines a minimum number of characters needed on the input in order to make requests to the Google's API.

* Required: no
* Default: 0
* Type: `number`

### `onLoadFailed`

Function to be called when the injection of the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/) fails due to a network error, for example.

* Required: no
* Type: `(error: Error) => void`

### `withSessionToken`

If this prop is set to `true`, the component will handle changing the `sessionToken` on every session. To learn more about how this works refer to [Google Places Session Token docs](https://developers.google.com/places/web-service/session-tokens).

* Required: no
* Default: `false`
* Type: `boolean`

### `label`

The text to display in the placeholder/above the field.

* Required: no
* Default: empty string
* Type: `string`

### `inputProps`

Any props to pass to the TextField.

* Required: no
* Default: `{}`
* Type: `TextFieldProps`

## `GooglePlacesAutocomplete#ref`

You can retrieve the below methods by creating a ref on the component, using [`useRef`](https://beta.reactjs.org/reference/react/useRef). They will live on the `current` property of the ref.

```ts
{
  getSessionToken: () => AutocompleteSessionToken | undefined;
  refreshSessionToken: () => void;
}
```

### `getSessionToken`

Retrieve the current `AutocompleteSessionToken`.

### `refreshSessionToken`

Force update the `AutocompleteSessionToken`.

## `GooglePlacesAutocompleteField`

```jsx
<Field
  component={GooglePlacesAutocompleteField}
  value={selectedOption}
  setValue={(newOption) => setSelectedOption(newOption)}
  apiKey=""
  apiOptions={{ language: 'fr' }}
  debounce={300}
  minLengthAutocomplete={0}
  onLoadFailed={(error) => console.error(error)}
  withSessionToken={false}
  label="Search Places"
/>
```

The props are the same as `GooglePlacesAutocomplete`, other than `inputValue` and `setInputValue` being excluded. [Formik Field props](https://formik.org/docs/api/field) are also available.
