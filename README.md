# es6-enum

[![Version](http://img.shields.io/npm/v/es6-enum.svg)](https://www.npmjs.org/package/es6-enum)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Circle CI](https://circleci.com/gh/wwayne/es6-enum/tree/master.svg?style=svg)](https://circleci.com/gh/wwayne/es6-enum/tree/master)

### Support
To use es6-enum, if you are not using babel, you should make sure your Nodejs >= 4.0.0

### Installation

```sh
npm install es6-enum
```

### Usage

```
import Enum from "es6-enum"

const ORIENTATION = Enum("NORTH", "SOURTH", "WEST", "EAST")
const ORIEN = Enum("NORTH", "SOURTH", "WEST", "EAST")

typeof ORIENTATION.NORTH                      // "symbol"

ORIENTATION.NORTH === ORIENTATION.NORTH       // true
ORIENTATION.NORTH === ORIEN.NORTH             // false
 
export ORIENTATION
```


### License

MIT
