import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useDebouncedCallback } from "use-debounce";
import { Loader } from "@googlemaps/js-api-loader";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import autocompletionRequestBuilder from "./helpers/autocompletionRequestBuilder";
import GooglePlacesAutocompleteProps, {
  AutocompletionRequest,
  GooglePlacesAutocompleteHandle,
  PredictionOption,
} from "./types";

const GooglePlacesAutocomplete: React.ForwardRefRenderFunction<
  GooglePlacesAutocompleteHandle,
  GooglePlacesAutocompleteProps
> = (
  {
    inputValue,
    setInputValue,
    value,
    setValue,
    apiKey = "",
    apiOptions = {},
    autocompletionRequest = {},
    debounce = 300,
    minLengthAutocomplete = 0,
    onLoadFailed = console.error,
    withSessionToken = false,
    label,
    inputProps = {},
    ...autocompleteProps
  }: GooglePlacesAutocompleteProps,
  ref
): JSX.Element => {
  const [placesService, setPlacesService] = useState<
    google.maps.places.AutocompleteService | undefined
  >(undefined);
  const [sessionToken, setSessionToken] = useState<
    google.maps.places.AutocompleteSessionToken | undefined
  >(undefined);
  const [options, setOptions] = useState<PredictionOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [internalSelectedOption, setInternalSelectedOption] = useState<PredictionOption | null>(null);
  const [fetchSuggestions] = useDebouncedCallback(
    (value: string, cb: (results: PredictionOption[]) => void): void => {
      if (!placesService || value.length < minLengthAutocomplete) return cb([]);
      setLoading(true);

      const autocompletionReq: AutocompletionRequest = {
        ...autocompletionRequest,
      };

      placesService.getPlacePredictions(
        autocompletionRequestBuilder(
          autocompletionReq,
          value,
          withSessionToken && sessionToken
        ),
        (suggestions) => {
          cb(suggestions || []);
          setLoading(false);
        }
      );
    },
    debounce
  );

  const initializeService = (): void => {
    if (!window.google)
      throw new Error(
        "[mui-google-places-autocomplete]: Google script not loaded"
      );
    if (!window.google.maps)
      throw new Error(
        "[mui-google-places-autocomplete]: Google maps script not loaded"
      );
    if (!window.google.maps.places)
      throw new Error(
        "[mui-google-places-autocomplete]: Google maps places script not loaded"
      );

    setPlacesService(new window.google.maps.places.AutocompleteService());
    setSessionToken(new google.maps.places.AutocompleteSessionToken());
  };

  const onSelectedOptionChange = (
    _: React.SyntheticEvent,
    newValue: PredictionOption | null
  ): void => {
    newValue && setOptions([newValue, ...options]);
    setValue ? setValue(newValue) : setInternalSelectedOption(newValue);
  };

  const onInputValueChange = (
    _: React.SyntheticEvent,
    newInputValue: string
  ): void => {
    setInputValue(newInputValue);
  };

  const renderInputField = (
    props: AutocompleteRenderInputParams
  ): JSX.Element => <TextField {...props} {...inputProps} label={label} fullWidth />;

  const renderAutocompleteOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: PredictionOption
  ): JSX.Element => {
    const parts = [{ text: option.structured_formatting.main_text }];
    // const matches =
    //       option.structured_formatting.main_text_matched_substrings || [];

    // const parts = parse(
    //   option.structured_formatting.main_text,
    //   matches.map((match: any) => [match.offset, match.offset + match.length]),
    // );

    return (
      <li {...props}>
        <Grid container alignItems="center">
          <Grid item sx={{ width: "calc(100%)", wordWrap: "break-word" }}>
            {parts.map((part, index) => (
              <Box
                key={index}
                component="span"
                // sx={{ fontWeight: part.highlight ? "bold" : "regular" }}
              >
                {part.text}
              </Box>
            ))}
            <Typography variant="body2" color="text.secondary">
              {option.structured_formatting.secondary_text}
            </Typography>
          </Grid>
        </Grid>
      </li>
    );
  };

  const getOptionLabel = (option: PredictionOption | string): string => typeof option === "string" ? option : option.description;

  const shallowCheckOptionEquality = (option: PredictionOption, value: PredictionOption | null): boolean => !!value && option.description === value?.description;

  useImperativeHandle(
    ref,
    () => ({
      getSessionToken: () => {
        return sessionToken;
      },
      refreshSessionToken: () => {
        setSessionToken(new google.maps.places.AutocompleteSessionToken());
      },
    }),
    [sessionToken]
  );

  useEffect(() => {
    const init = async () => {
      try {
        if (
          !window.google ||
          !window.google.maps ||
          !window.google.maps.places
        ) {
          await new Loader({
            apiKey,
            ...{ libraries: ["places"], ...apiOptions },
          }).load();
        }
        initializeService();
      } catch (error) {
        onLoadFailed(error);
      }
    };

    if (apiKey) init();
    else initializeService();
  }, []);

  useEffect(() => {
    if (placesService) {
      fetchSuggestions(inputValue, setOptions);
    }
  }, [inputValue]);

  return (
    <Autocomplete
      autoComplete
      includeInputInList
      filterSelectedOptions
      noOptionsText="Nothing found"
      onChange={onSelectedOptionChange}
      onInputChange={onInputValueChange}
      loading={loading}
      {...autocompleteProps}
      options={options}
      value={value ?? internalSelectedOption}
      renderInput={renderInputField}
      renderOption={renderAutocompleteOption}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={shallowCheckOptionEquality}
    />
  );
};

export default forwardRef(GooglePlacesAutocomplete);
