# es6-enum

[![Version](http://img.shields.io/npm/v/es6-enum.svg)](https://www.npmjs.org/package/es6-enum)

### Why
Well, every time I use `Redux` or implement `flux`, I was thinking if there have `enum` in Javascript. Yes they have, as **reserved word**.

In `SWIFT`, enumerations is the first-class type, it has a lot of awesome features and very useful in developing.

Since we now have `ES6`, so why not implementing an enum to help developing `Redux` or something else in JS.

Becasue it:

* Have specific scope because of using Symbol
* More convenient to define CONSTANT or Actions in Redux 
* Clear when reading your code

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
