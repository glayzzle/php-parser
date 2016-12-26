/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Location = require('./ast/location');
var Position = require('./ast/position');

/**
 * The AST builder class
 * @constructor AST
 * @property {Boolean} withPositions - Should locate any node (by default false)
 * @property {Boolean} withSource - Should extract the node original code (by default false)
 */
var AST = function(withPositions, withSource) {
  this.withPositions = withPositions;
  this.withSource = withSource;
};

/**
 * Prepares an AST node
 */
AST.prototype.prepare = function(kind, parser) {
  var start = null;
  if (this.withPositions || this.withSource) {
    start = new Position(
      parser.lexer.yylloc.first_line,
      parser.lexer.yylloc.first_column,
      parser.lexer.yylloc.first_offset
    );
  }
  var self = this;
  // returns the node
  return function() {
    var location = null;
    var args = Array.prototype.slice.call(arguments);
    if (self.withPositions || self.withSource) {
      var src = null;
      if (self.withSource) {
        src = parser.lexer._input.substring(
          start.offset,
          parser.lexer.offset
        );
      }
      if (self.withPositions) {
        location = new Location(src, start, new Position(
          parser.lexer.yylloc.first_line,
          parser.lexer.yylloc.first_column,
          parser.lexer.offset
        ));
      } else {
        location = new Location(src, null, null);
      }
      // last argument is allways the location
      args.push(location);
    }
    // build the object
    var node = self[kind];
    if (typeof node !== 'function') {
      throw new Error('Undefined node "'+kind+'"');
    }
    var result = Object.create(node.prototype);
    node.apply(result, args);
    return result;
  };
};

// Define all AST nodes
[
  require('./ast/array'),
  require('./ast/entry'),
  require('./ast/error'),
  require('./ast/namespace'),
  require('./ast/program')
].forEach(function (ctor) {
  var kind = ctor.prototype.constructor.name.toLowerCase();
  AST.prototype[kind] = ctor;
});

module.exports = AST;
