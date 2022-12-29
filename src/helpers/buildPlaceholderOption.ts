import { PredictionOption } from "../types";

export default (placeDescription: string): PredictionOption => ({
  description: placeDescription,
  matched_substrings: [],
  place_id: "",
  structured_formatting: {
    main_text: "",
    main_text_matched_substrings: [],
    secondary_text: "",
  },
  terms: [],
  types: [],
});
