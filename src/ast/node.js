/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

/**
 * A generic AST node
 * @constructor Node
 * @property {Location|null} loc
 * @property {Comment[]} leadingComments
 * @property {Comment[]?} trailingComments
 * @property {String} kind
 */
const Node = function Node(kind, docs, location) {
  this.kind = kind;
  if (docs) {
    this.leadingComments = docs;
  }
  if (location) {
    this.loc = location;
  }
};

/**
 * Includes current token position of the parser
 * @param {*} parser 
 */
Node.prototype.includeToken = function(parser) {
  if (this.loc) {
    if (this.loc.end) {
      this.loc.end.line = parser.prev[0];
      this.loc.end.column = parser.prev[1];
      this.loc.end.offset = parser.prev[2];
    }
    if (parser.ast.withSource) {
      this.loc.source = parser.lexer._input.substring(
        this.loc.start.offset,
        parser.prev[2]
      );
    }
  }
  return this;
};

/**
 * Helper for extending the Node class
 * @param {Function} constructor
 * @return {Function}
 */
Node.extends = function(constructor) {
  constructor.prototype = Object.create(this.prototype);
  constructor.extends = this.extends;
  constructor.prototype.constructor = constructor;
  return constructor;
};

module.exports = Node;
