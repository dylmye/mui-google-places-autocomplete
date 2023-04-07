import React, { useState } from "react";

import GooglePlacesAutocomplete from "./GooglePlacesAutocomplete";
import buildPlaceholderOption from "./helpers/buildPlaceholderOption";
import type {
  GooglePlacesAutocompleteFieldProps,
  PredictionOption,
} from "./types";

/** The Google Places Autocomplete component you know and love, but connected up to Formik. The field value will be the string of the selected item. */
const GooglePlacesAutocompleteField = ({
  field,
  form: { setFieldValue, isSubmitting },
  ...autoCompleteProps
}: Omit<
  GooglePlacesAutocompleteFieldProps,
  "inputValue" | "setInputValue"
>): JSX.Element => {
  const [selectedOption, setSelected] = useState<
    PredictionOption | null
  >(field?.value ? buildPlaceholderOption(field.value) : null);
  return (
    <GooglePlacesAutocomplete
      inputValue={field.value}
      setInputValue={(newValue) => setFieldValue(field.name, newValue)}
      value={selectedOption ?? null}
      setValue={newValue => setSelected(newValue ?? null)}
      disabled={isSubmitting}
      {...autoCompleteProps}
    />
  );
};

export default GooglePlacesAutocompleteField;
