# Pretty Table

Pretty tables display JavaScript Objects and Arrays in a tabular format.
Importantly, it supports nested objects.

Pretty tables was originally made to be used in [Obseravble Notebooks](https://observablehq.com/@saneef/pretty-tables).
The code is made as package to be used in Observable Framework.

## Usage

```js run=false
import { prettyTable } from "npm:@saneef/observable-framework-utils";

const obj = [
  /* Array of objects */
];

display(prettyTable(obj));
```

```js
import { prettyTable } from "../index.js";
```

```js echo
const sampleObject = sampleArray[0];
display(sampleObject);
```

```js echo
const sampleObjectTable = prettyTable(sampleObject);
display(sampleObjectTable);
```

```js echo
const sampleArrayTable = prettyTable(sampleArray);
display(sampleArrayTable);
```

## Sample data

```js echo
const sampleArray = [
  {
    name: "Jim",
    birthday: new Date(Date.UTC(1990, 1, 18)),
    courses: [
      { title: "English", score: 87 },
      { title: "Chinese", score: 67 },
    ],
  },
  {
    name: "Lucy",
    birthday: new Date(Date.UTC(1994, 4, 4)),
    courses: [
      { title: "Math", score: 97 },
      { title: "Music", score: 77 },
      { title: "Gym", score: 57 },
    ],
  },
  {
    name: "Karen",
    birthday: new Date(Date.UTC(1994, 2, 27)),
    courses: [
      { title: "Math", score: 98 },
      { title: "Music", score: 81 },
      { title: "English", score: 79 },
    ],
  },
];
```