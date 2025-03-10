<p align="center">
  <a href="https://dylmye.me/mui-google-places-autocomplete" target="_blank">
    <img width="250"src="https://raw.githubusercontent.com/dylmye/mui-google-places-autocomplete/master/docs/static/img/logo.png">
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@dylmye/mui-google-places-autocomplete">
    <img src="https://img.shields.io/npm/v/@dylmye/mui-google-places-autocomplete.svg?logo=npm"/>
    <img src="https://img.shields.io/npm/dm/@dylmye/mui-google-places-autocomplete.svg?logo=npm"/>
  </a>
  <a href="https://github.com/dylmye/mui-google-places-autocomplete/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/dylmye/mui-google-places-autocomplete/publish-to-npm.yml?logo=github">
  </a>
  <a href="https://www.npmjs.com/package/@dylmye/mui-google-places-autocomplete">
    <img src="https://img.shields.io/npm/l/@dylmye/mui-google-places-autocomplete.svg?logo=npm">
  </a>
</p>

# MUI Google Places Autocomplete

React component for easily use Google Places Autocomplete, which uses the MUI [React Autocomplete component](https://mui.com/material-ui/react-autocomplete).

A fork of [Nicolas Tinte's brilliant component](https://github.com/Tintef/react-google-places-autocomplete), which uses [react-select](https://react-select.com).

> **Warning**    
> This is currently pre-production - don't expect it to work right now.

<p align="center"><img width="413" alt="a screenshot showing the component in action." src="https://user-images.githubusercontent.com/7024578/209857174-317d4f60-e187-467e-bf20-3bb0bf6c4678.png"></p>


## Getting started

Install the latest version:

```sh
npm install --save mui-google-places-autocomplete
  or
yarn add mui-google-places-autocomplete
```

Use the component:

```jsx
import React from "react";
import GooglePlacesAutocomplete from "@dylmye/mui-google-places-autocomplete";

const Component = () => (
  <div>
    <GooglePlacesAutocomplete apiKey="****" />
  </div>
);

export default Component;
```

Or with [Formik](https://formik.org/):

```jsx
import React from "react";
import { Formik, Form, Field } from "formik";
import { GooglePlacesAutocompleteField } from "@dylmye/mui-google-places-autocomplete";

const MyForm = () => (
  <Formik onSubmit={console.log}>
    <Form>
      <Field
        name="location"
        component={GooglePlacesAutocompleteField}
        apiKey="****"
      />
    </Form>
  </Formik>
);

export default MyForm;
```

## Documentation

[**Read The Docs**](https://dylmye.me/mui-google-places-autocomplete)

## How to contribute?

1. Fork this repo
2. Clone your fork
3. Code 🤓
4. Test your changes

   For this, I like to use [yalc](https://github.com/whitecolor/yalc), as it allows to emulate the process of using npm/yarn.

   1. Install [yalc](https://github.com/whitecolor/yalc)
   2. Build project with `yarn build` or `npm run build`
   3. Publish the package with yalc: `yalc publish`
   4. Add the package to your test project `yalc add @dylmye/mui-google-places-autocomplete`
   5. If needed, to update the package on your test project: `yalc update @dylmye/mui-google-places-autocomplete`

5. Submit a PR!

<br />
<br />
<p align="center">
  Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
</p>
