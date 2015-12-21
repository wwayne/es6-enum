'use strict';

exports.__esModule = true;
var _bind = Function.prototype.bind;
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
        for (var _iterator = target.entries(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var key = _ref[0];
          var value = _ref[1];

          result[key] = getValue(value);
        }
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
