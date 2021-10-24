/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Reference = require("./reference");
const KIND = "typereference";

/**
 * Defines a class reference node
 * @constructor TypeReference
 * @memberOf module:php-parser
 * @extends {Reference}
 * @property {string} name
 */
const TypeReference = Reference.extends(
  KIND,
  function TypeReference(name, raw, docs, location) {
    Reference.apply(this, [KIND, docs, location]);
    this.name = name;
    this.raw = raw;
  }
);

TypeReference.types = [
  "int",
  "float",
  "string",
  "bool",
  "object",
  "array",
  "callable",
  "iterable",
  "void",
  "static",
];

module.exports = TypeReference;
