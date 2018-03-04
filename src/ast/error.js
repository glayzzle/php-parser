/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Node = require("./node");
const KIND = "error";

/**
 * Defines an error node (used only on silentMode)
 * @constructor Error
 * @extends {Node}
 * @property {string} message
 * @property {number} line
 * @property {number|string} token
 * @property {string|array} expected
 */
const Error = Node.extends(function Error(
  message,
  token,
  line,
  expected,
  docs,
  location
) {
  Node.apply(this, [KIND, docs, location]);
  this.message = message;
  this.token = token;
  this.line = line;
  this.expected = expected;
});

module.exports = Error;
