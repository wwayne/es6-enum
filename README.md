# es6-enum

[![Version](http://img.shields.io/npm/v/es6-enum.svg)](https://www.npmjs.org/package/es6-enum)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm download][download-image]][download-url]
[![Circle CI](https://circleci.com/gh/wwayne/es6-enum/tree/master.svg?style=svg)](https://circleci.com/gh/wwayne/es6-enum/tree/master)

[download-image]: https://img.shields.io/npm/dm/es6-enum.svg?style=flat-square
[download-url]: https://npmjs.org/package/es6-enum

### Installation

```sh
npm install es6-enum
```

### Usage

```javascript
import Enum from "es6-enum"

const Orientation = new Enum("NORTH", "SOUTH", "WEST", "EAST")
const Orien = new Enum("NORTH", "SOUTH", "WEST", "EAST")

typeof Orientation.NORTH                      // "symbol"

Orientation.NORTH === Orientation.NORTH       // true
Orientation.NORTH === Orien.NORTH             // false

export ORIENTATION
```

### In practice
I like to use this package to define **constant** in **Redux**

```javascript
constant.js
  const Application = new Enum('USER')

action.js
  dispatch({
    type: Application.USER,
    data
  })

reducer.js
  [Application.USER]: (state, action) => {
    ...
  }
```


### License

MIT
