import React, { useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { GooglePlacesAutocompleteField } from "@dylmye/mui-google-places-autocomplete";
import { Loader } from "@googlemaps/js-api-loader";

import SignUpFormDto from "./SignUpFormDto";

export default function App() {
  useEffect(() => {
    const init = async () => {
      if (!process.env.REACT_APP_GOOGLE_MAPS_JS_API_KEY) {
        throw new Error("No Google Maps API key provided");
      }

      if (!window.google || !window.google.maps || !window.google.maps.places) {
        await new Loader({
          apiKey: process.env.REACT_APP_GOOGLE_MAPS_JS_API_KEY,
          ...{ libraries: ["places"] },
        }).load();
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
          Sign Up
        </Typography>
        <Formik<SignUpFormDto>
          initialValues={{
            name: "John",
            age: 18,
            address: "Letsby Avenue, Tinsley, Sheffield, UK",
          }}
          onSubmit={console.log}
        >
          {({ values }) => (
            <Form>
              <Stack spacing={3}>
                <Field
                  component={TextField}
                  label="What's your name?"
                  name="name"
                />
                <Field
                  component={GooglePlacesAutocompleteField}
                  name="address"
                  label="Where do you live?"
                />
                <div style={{ backgroundColor: '#CFD8DC', padding: 8, }}>
                  <pre style={{ whiteSpace: 'pre-wrap' }}>
                    <code>
                      {JSON.stringify(values, null, 2)}
                    </code>
                  </pre>
                </div>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
