import React, { useEffect, useState } from "react";
import { Box, Button, Container, Skeleton, Stack, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { GooglePlacesAutocompleteField } from "@dylmye/mui-google-places-autocomplete";
import { Loader } from "@googlemaps/js-api-loader";

import SignUpFormDto from "./SignUpFormDto";

export default function App() {
  const [loading, setLoading] = useState(true);
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
          {({ values, resetForm }) => (
            <Form>
              <Stack spacing={3}>
                <Field
                  component={TextField}
                  label="What's your name?"
                  name="name"
                />
                <Field
                  component={TextField}
                  label="How old are you?"
                  name="age"
                />
                {loading ? (
                  <Skeleton variant="rectangular" height={64} />
                ) : (
                  <Field
                    component={GooglePlacesAutocompleteField}
                    name="address"
                    label="Where do you live?"
                  />
                )}
                <div style={{ backgroundColor: "#CFD8DC", padding: 8 }}>
                  <pre style={{ whiteSpace: "pre-wrap" }}>
                    <code>{JSON.stringify(values, null, 2)}</code>
                  </pre>
                </div>
                <Button onClick={() => resetForm()}>Reset Form</Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
