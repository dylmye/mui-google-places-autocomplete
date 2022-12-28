---
id: basic-usage
title: Basics
sidebar_label: Basics
slug: /
---

Welcome! This guide will show you how to use the components and utilities in this package. You'll find:

- `<GooglePlacesAutocomplete />` - The dropdown that is connected to Google's Places API
- `<GooglePlacesAutocompleteField />` - The above dropdown, with state support for Formik
- `geocodeByAddress` - Convert an address string to a Google Maps GeocoderResult. [See Google API Reference](https://developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder).
- `geocodeByLatLng` - Like above, but latitude/longitude rather than an address string.
- `geocodeByPlaceId` - Like above, but a place ID from the Roads API rather than lat/long.

## Install

To install the package in your project:

```bash
npm install --save @dylmye/mui-google-places-autocomplete
```

or

```
yarn add @dylmye/mui-google-places-autocomplete
```

You also need [Material UI Core v5](https://mui.com/material-ui/getting-started/installation/), and [React](https://beta.reactjs.org/learn/start-a-new-react-project).

## Basic Usage

### Load Google Maps JavaScript API

You need an API key to use the [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/cloud-setup#create), including the data loading in this component. When you load the API's scripts, you pass your API key. The key looks like this: `AIzaAAAAABBBBBCCCCCC_zzYYXXWW`.

> It's good practice not to keep API keys in your source code, instead storing it in an [environment variable](https://create-react-app.dev/docs/adding-custom-environment-variables/).

There's two ways to load the API:

#### Method 1: Separate script

Loading the script in your static template or at the root component is great if you need your component straight away or if you are using Map APIs outside of the component.

First, generate an `apiKey` in order to use it to load [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/). Then, use it to load it in your HTML file, adding a script tag:

```html
<!-- public/index.html -->
<script 
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places"
/>
```

You may alternatively wish to use [@googlemaps/js-api-loader](https://github.com/googlemaps/js-api-loader):

```jsx
// App.js
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function App() {
  useEffect(() => {
    const loader = new Loader({
      apiKey: "YOUR_GOOGLE_API_KEY",
      libraries: ["places"],
    });

    loader.load();
  });
}
```

#### Method 2: Passing the key

Pass the API key to the component, as the `apiKey` prop. It'll automatically load the script with the given key. This is better suited for you if you only use Google Maps API for this one field.

### Use the component

If you're not using Formik, you can use it like this:

```jsx
import React from "react";
import GooglePlacesAutocomplete from "@dylmye/mui-google-places-autocomplete";

const Component = () => (
  <div>
    <GooglePlacesAutocomplete apiKey="YOUR_GOOGLE_API_KEY" />
    here if you're using Method 2
  </div>
);
```

All the props are detailed in the [API Reference](/docs/props). Some methods are also exposed through the component's [imperative ref](https://beta.reactjs.org/reference/react/useImperativeHandle#exposing-your-own-imperative-methods), these methods are also documented on that page.

### Save the selected result

You can use a state management solution like Redux, but to keep it simple we're using a simple `useState`.

```jsx
import React, { useState } from 'react';
import GooglePlacesAutocomplete from '@dylmye/mui-google-places-autocomplete';

const Component = () => (
  const [value, setValue] = useState(null);

  return (
    <div>
      <GooglePlacesAutocomplete
        inputValue={value}
        setInputValue={newValue => setValue(newValue)}
        label="Enter your location"
      />
    </div>
  );
}
```

### Usage with Formik

You can use the field like any standard TextField, **just note the different import**:

```jsx
import React, { useState } from 'react';
import { GooglePlacesAutocompleteField } from '@dylmye/mui-google-places-autocomplete';
import { Field, Form, Formik } from "formik";

const MyForm = () => (

  return (
    <Formik initialValues={{ location: '' }} onSubmit={console.log}>
      <Form>
        <Field
          component={GooglePlacesAutocompleteField}
          name="location"
          label="Enter your location"
        />
      </Form>
    </Formik>
  );
}
```
