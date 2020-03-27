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
 * Attach comments to current node
 * @param {*} docs
 */
Node.prototype.setTrailingComments = function (docs) {
  this.trailingComments = docs;
};

/**
 * Destroying an unused node
 */
Node.prototype.destroy = function (node) {
  if (!node) {
    throw new Error(
      "Node already initialized, you must swap with another node"
    );
  }
  if (this.leadingComments) {
    if (node.leadingComments) {
      node.leadingComments = Array.concat(
        this.leadingComments,
        node.leadingComments
      );
    } else {
      node.leadingComments = this.leadingComments;
    }
  }
  if (this.trailingComments) {
    if (node.trailingComments) {
      node.trailingComments = Array.concat(
        this.trailingComments,
        node.trailingComments
      );
    } else {
      node.trailingComments = this.trailingComments;
    }
  }
  return node;
};

/**
 * Includes current token position of the parser
 * @param {*} parser
 */
Node.prototype.includeToken = function (parser) {
  if (this.loc) {
    if (this.loc.end) {
      this.loc.end.line = parser.lexer.yylloc.last_line;
      this.loc.end.column = parser.lexer.yylloc.last_column;
      this.loc.end.offset = parser.lexer.offset;
    }
    if (parser.ast.withSource) {
      this.loc.source = parser.lexer._input.substring(
        this.loc.start.offset,
        parser.lexer.offset
      );
    }
  }
  return this;
};

/**
 * Helper for extending the Node class
 * @param {String} type
 * @param {Function} constructor
 * @return {Function}
 */
Node.extends = function (type, constructor) {
  constructor.prototype = Object.create(this.prototype);
  constructor.extends = this.extends;
  constructor.prototype.constructor = constructor;
  constructor.kind = type;
  return constructor;
};

module.exports = Node;
