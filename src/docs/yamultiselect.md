# Yet Another Multi-select

A replacement for [Observable Input: Select][1] with autocomplete and means to pick multiple options. Uses [`datalist`][2], making it accessible and usable within Observable Notebooks.

The control was originally made to be used in Obseravble Notebooks.
You can read usage and options [documentation on Obseravble][3].

## Usage

```js run=false
import { yamultiselect } from "npm:@saneef/observable-framework-utils";

const flavorsSelect = yamultiselect(
  ["salty", "sweet", "bitter", "sour", "umami"], // data
  { label: "Flavors" }, // options
);

const flavors = view(flavorsSelect);
```

```js
import { yamultiselect } from "../index.js";
```

## Example

```js echo
const flavorsSelect = yamultiselect(
  ["salty", "sweet", "bitter", "sour", "umami"],
  {
    label: "Flavors",
  },
);
const flavours = view(flavorsSelect);
```

```js echo
display(flavours);
```

[1]: https://observablehq.com/@observablehq/input-select
[2]: http://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
[3]: https://observablehq.com/@saneef/yet-another-multi-select