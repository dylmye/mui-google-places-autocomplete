---
id: examples
title: Examples
sidebar_label: Examples
---

## Automatic Google Maps Javascript API injection

```jsx
<GooglePlacesAutocomplete apiKey="*****" />
```


## Controlled input

You can store the selected value and the text used to search/show the selected option:

```tsx
// this is the text shown in the search box (the search or the selected option)
const [value, setValue] = useState<string | null>(null);
// this is the currently selected option
const [selected, setSelected] = useState<PredictionOption | null>(null);

<GooglePlacesAutocomplete
  inputValue={value}
  setInputValue={setValue}
  value={selected}
  setValue={setSelected}
/>
```

## Formik Usage

Formik's `Field` component is supported out of the box, including disabling when submitting and setting the field properly:

```tsx
<Field
  component={GooglePlacesAutocompleteField}
  name="location"
  label="Enter your location"
/>
```

The value of the field is the inputValue, so whatever is currently entered in the box. You can override any of the props for `GooglePlacesAutocomplete` by adding them to the `Field`'s props.
