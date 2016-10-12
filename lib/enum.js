'use strict'

function Enum () {
  if (!(this instanceof Enum)) return new Enum(...arguments)
  Array.from(arguments).forEach(arg => {
    this[arg] = Symbol(arg)
  })
}

module.exports = Enum
