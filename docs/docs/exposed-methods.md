---
id: exposed-methods
title: Exposed Methods
sidebar_label: Exposed Methods
---

```tsx
interface GooglePlacesAutocompleteHandle {
  getSessionToken: () => google.maps.places.AutocompleteSessionToken | undefined;
  refreshSessionToken: () => void;
}
```

## Usage

In order to access the exposed methods you need to create a ref to the component, like so:

```tsx
import React, { useRef } from 'react';
import GooglePlacesAutocomplete, { GooglePlacesAutocompleteHandle } from '@dylmye/mui-google-places-autocomplete';

const Component = () => {
  const autocompleteRef = useRef<GooglePlacesAutocompleteHandle>(null);
  const refresh = () => {
    // check the ref is set before calling anything on it!
    if (autocompleteRef?.current) {
      autocompleteRef.current.refreshSessionToken();
    }
  }

  return (
    <div>
      <GooglePlacesAutocomplete ref={autocompleteRef} />
      <button onClick={refresh}>
        Refresh session token
      </button>
    </div>
  );
}

export default Component;
```

## `getSessionToken`

This function retrieves the current `sessionToken` being used.


## `refreshSessionToken`

This function allows you to refresh the `sessionToken`.


> **Note:** the component does not refresh the `sessionToken`, so you will need to handle that yourself.
