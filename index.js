(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var _bind = Function.prototype.bind;
exports.Enum = Enum;

function Enum() {
  var _this = this;

  if (!(this instanceof Enum)) {
    return new (_bind.apply(Enum, [null].concat(Object.values(arguments))))();
  }

  var args = this.deepCopy(Array.prototype.slice.call(arguments));
  if (Object.prototype.toString.call(args) === "[object Object]") {
    args = Object.values(args);
  }

  args.forEach(function (prams) {
    _this[prams] = Symbol(prams);
  });
}

Enum.prototype = {
  constructor: Enum,
  deepCopy: (function (_deepCopy) {
    function deepCopy(_x) {
      return _deepCopy.apply(this, arguments);
    }

    deepCopy.toString = function () {
      return _deepCopy.toString();
    };

    return deepCopy;
  })(function (target) {

    var result = undefined;
    var type = Object.prototype.toString.call(target);

    switch (type) {
      case "[object Object]":
        result = {};
        for (var key in target) {
          result[key] = getValue(target[key]);
        }
        break;
      case "[object Array]":
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

    function getValue(value) {
      if (typeof value === "object") {
        return deepCopy(value);
      }
      return value;
    }

    return result;
  })
};

exports["default"] = Enum;

},{}]},{},[1]);
