'use strict'

const Symbol = require('es6-symbol')

function Enum () {
  if (!(this instanceof Enum)) {
    let args = []
    for (let key in arguments) {
      args.push(arguments[key])
    }
    return new Enum(...args)
  }

  let args = this.deepCopy(Array.prototype.slice.call(arguments))
  if (Object.prototype.toString.call(args) === '[object Object]') {
    args = this.valuesInObj(args)
  }

  args.forEach((prams) => {
    this[prams] = Symbol(prams)
  })
}

Enum.prototype = {
  constructor: Enum,
  deepCopy: (target) => {
    let result
    const type = Object.prototype.toString.call(target)
    const getValue = (value) => {
      if (typeof value === 'object') {
        return this.deepCopy(value)
      }
      return value
    }
    switch (type) {
      case '[object Object]':
        result = {}
        for (let key in target) {
          result[key] = getValue(target[key])
        }
        break
      case '[object Array]':
        result = []
        target.forEach((value, i) => {
          result[i] = getValue(value)
        })
        break
      default:
        result = null
    }
    return result
  },
  /* Untill Node 5.3.0, Object.values still not supported */
  valuesInObj: (object) => {
    let results = []
    for (let key in object) {
      results.push(object[key])
    }
    return results
  }
}

export default Enum
