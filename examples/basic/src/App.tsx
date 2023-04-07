import React, { useEffect, useState } from "react";
import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import GooglePlacesAutocomplete from "@dylmye/mui-google-places-autocomplete";
import { Loader } from "@googlemaps/js-api-loader";
import { PredictionOption } from "@dylmye/mui-google-places-autocomplete/types";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [value, setValue] = useState<PredictionOption | null>(null);
  useEffect(() => {
    const init = async () => {
      if (!process.env.REACT_APP_GOOGLE_MAPS_JS_API_KEY) {
        throw new Error("No Google Maps API key provided");
      }

      if (!window.google || !window.google.maps || !window.google.maps.places) {
        setLoading(true);
        await new Loader({
          apiKey: process.env.REACT_APP_GOOGLE_MAPS_JS_API_KEY,
          ...{ libraries: ["places"] },
        }).load();
        setLoading(false);
      }
    };

    try {
      init();
    } catch (error) {
      console.error("Unable to load Google Maps API:", error);
    }
  });

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Shipping Location
        </Typography>
        <Stack spacing={2}>
          {loading ? (
            <>
              <Skeleton variant="rectangular" height={64} />
              <Skeleton variant="rectangular" height={400} />
            </>
          ) : (
            <>
              <GooglePlacesAutocomplete
                inputValue={inputValue}
                setInputValue={setInputValue}
                value={value ?? null}
                setValue={setValue}
                label="Address to ship to"
              />
              <div
                style={{
                  backgroundColor: "#CFD8DC",
                  padding: 8,
                  maxHeight: 400,
                  overflow: "auto",
                }}
              >
                <pre style={{ whiteSpace: "pre-wrap" }}>
                  <code>
                    <strong>Input Value: </strong>
                    {JSON.stringify(inputValue, null, 2)}
                    <br />
                    <strong>Value: </strong>
                    {JSON.stringify(value, null, 2)}
                  </code>
                </pre>
              </div>
            </>
          )}
        </Stack>
      </Box>
    </Container>
  );
}
