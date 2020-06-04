"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Enum = function Enum() {
  var _this = this;

  _classCallCheck(this, Enum);

  for (
    var _len = arguments.length, names = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    names[_key] = arguments[_key];
  }

  names.forEach(function (name) {
    _this[name] = Symbol(name);
  });
};

module.exports = Enum;
