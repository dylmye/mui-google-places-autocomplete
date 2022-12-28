import React from "react";

import GooglePlacesAutocomplete from "./GooglePlacesAutocomplete";
import { GooglePlacesAutocompleteFieldProps } from "./types";

/** The Google Places Autocomplete component you know and love, but connected up to Formik. The field value will be the string of the selected item. */
const GooglePlacesAutocompleteField = ({
  field,
  form: { setFieldValue },
  ...autoCompleteProps
}: Omit<
  GooglePlacesAutocompleteFieldProps,
  "inputValue" | "setInputValue"
>): JSX.Element => (
  <GooglePlacesAutocomplete
    inputValue={field.value}
    setInputValue={(newValue) => setFieldValue(field.name, newValue)}
    {...autoCompleteProps}
  />
);

export default GooglePlacesAutocompleteField;
