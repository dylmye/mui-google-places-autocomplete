import { LoaderOptions } from '@googlemaps/js-api-loader';
import { AutocompleteProps } from '@mui/material';

export type GooglePlacesAutocompleteHandle = {
  getSessionToken: () => google.maps.places.AutocompleteSessionToken | undefined;
  refreshSessionToken: () => void;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface AutocompletionRequest {
  bounds?: [LatLng, LatLng];
  componentRestrictions?: { country: string | string[] };
  location?: LatLng;
  offset?: number;
  radius?: number;
  types?: string[];
}

export type PredictionOption = google.maps.places.AutocompletePrediction;

export default interface GooglePlacesAutocompleteProps extends AutocompleteProps<PredictionOption, false, false, false> {
  inputValue: string;
  setInputValue: (newValue: string) => void;
  setValue: (newValue: PredictionOption | null) => void;
  apiKey?: string;
  apiOptions?: Partial<LoaderOptions>;
  autocompletionRequest?: AutocompletionRequest;
  debounce?: number;
  minLengthAutocomplete?: number;
  onLoadFailed?: (error: Error) => void;
  withSessionToken?: boolean;
  label?: string;
}
