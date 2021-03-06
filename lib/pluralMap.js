"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHINESE = "chinese";
var GERMAN = "german";
var FRENCH = "french";
var RUSSIAN = "russian";
var CZECH = "czech";
var POLISH = "polish";
var ICELANDIC = "icelandic";

var pluralMap = {
  id: CHINESE,
  ja: CHINESE,
  ko: CHINESE,
  ms: CHINESE,
  th: CHINESE,
  tr: CHINESE,
  zh: CHINESE,

  at: GERMAN,
  da: GERMAN,
  de: GERMAN,
  en: GERMAN,
  es: GERMAN,
  fi: GERMAN,
  gb: GERMAN,
  el: GERMAN,
  he: GERMAN,
  hu: GERMAN,
  it: GERMAN,
  nb: GERMAN,
  nl: GERMAN,
  no: GERMAN,
  pt: GERMAN,
  sv: GERMAN,

  fr: FRENCH,
  tl: FRENCH,

  hr: RUSSIAN,
  ru: RUSSIAN,

  cs: CZECH,

  pl: POLISH,

  is: ICELANDIC
};

exports.default = pluralMap;