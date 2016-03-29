'use strict';

exports.__esModule = true;
var _bind = Function.prototype.bind;
var Symbol = require('es6-symbol');

function Enum() {
  var _this = this;

  if (!(this instanceof Enum)) {
    var _args = [];
    for (var key in arguments) {
      _args.push(arguments[key]);
    }
    return new (_bind.apply(Enum, [null].concat(_args)))();
  }

  var args = this.deepCopy(Array.prototype.slice.call(arguments));
  if (Object.prototype.toString.call(args) === '[object Object]') {
    args = this.valuesInObj(args);
  }

  args.forEach(function (prams) {
    _this[prams] = Symbol(prams);
  });
}

Enum.prototype = {
  constructor: Enum,
  deepCopy: function deepCopy(target) {
    var result = undefined;
    var type = Object.prototype.toString.call(target);
    var getValue = function getValue(value) {
      if (typeof value === 'object') {
        return undefined.deepCopy(value);
      }
      return value;
    };
    switch (type) {
      case '[object Object]':
        result = {};
        for (var key in target) {
          result[key] = getValue(target[key]);
        }
        break;
      case '[object Array]':
        result = [];
        target.forEach(function (value, i) {
          result[i] = getValue(value);
        });
        break;
      default:
        result = null;
    }
    return result;
  },
  /* Untill Node 5.3.0, Object.values still not supported */
  valuesInObj: function valuesInObj(object) {
    var results = [];
    for (var key in object) {
      results.push(object[key]);
    }
    return results;
  }
};

exports['default'] = Enum;
module.exports = exports['default'];
