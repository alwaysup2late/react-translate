"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _render = require("./render");

var _render2 = _interopRequireDefault(_render);

var _getPluralType = require("./getPluralType");

var _getPluralType2 = _interopRequireDefault(_getPluralType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolve(path, obj) {
  return path.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : undefined;
  }, obj || self);
}

var createTranslator = function createTranslator(keys) {
  var pluralType = (0, _getPluralType2.default)(keys.locale);
  return function (componentName) {
    if (!keys.hasOwnProperty(componentName)) {
      return function (key) {
        return componentName + "." + key;
      };
    }
    var componentKeys = keys[componentName];
    return function (key, params) {
      var translation = componentKeys[key];

      if (key.indexOf('.') > -1 && translation === undefined) {
        translation = resolve(key, componentKeys);
      }

      if (translation === undefined || (typeof translation === "undefined" ? "undefined" : _typeof(translation)) === 'object') {
        return "[" + componentName + "." + key + "]";
      }

      if (Array.isArray(translation)) {
        // plural
        if (params != null && typeof params.n === "number") {
          translation = translation[pluralType(params.n)];
        } else {
          return (0, _render2.default)(translation.join("\n"), params);
        }
      }
      return (0, _render2.default)(translation, params);
    };
  };
};

exports.default = createTranslator;