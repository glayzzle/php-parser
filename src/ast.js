/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Location = require('./ast/location');
var Position = require('./ast/position');

/**
 * ## Class hierarchy
 *
 * - [Node](#Node)
 *   - [Expression](#expression)
 *     - [Literal](#literal)
 *       - [Boolean](#boolean)
 *       - [String](#string)
 *       - [Number](#number)
 *       - [Inline](#inline)
 *       - [Magic](#magic)
 *       - [Shell](#shell)
 *     - [Array](#array)
 *     - [Variable](#variable)
 *   - [Statement](#statement)
 *     - [Block](#block)
 *       - [Program](#program)
 *       - [Namespace](#namespace)
 *     - [Sys](#sys)
 *       - [Echo](#echo)
 *       - [Print](#print)
 *       - [Isset](#isset)
 *       - [Unset](#unset)
 *       - [Empty](#empty)
 *     - [Declaration](#declaration)
 *       - [Class](#class)
 *       - [Constant](#constant)
 *         - [ClassConstant](#classconstant)
 *       - [Function](#function)
 *         - [Method](#method)
 *       - [Parameter](#parameter)
 *       - [Property](#property)
 *     - [Eval](#eval)
 *     - [Exit](#exit)
 *     - [Clone](#clone)
 *     - [Coalesce](#coalesce)
 *     - [Include](#include)
 *     - [Assign](#assign)
 *   - [Identifier](#identifier)
 *   - [Entry](#entry)
 *   - [Documentation](#documentation)
 *   - [Error](#error)
 * - [Location](#location)
 * - [Position](#position)
 * ---
 */

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
 * @param {String|null} kind - Defines the node type
 * (if null, the kind must be passed at the function call)
 * @param {Parser} parser - The parser instance (use for extracting locations)
 * @return {Function}
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
    // handle lazy kind definitions
    if (!kind) {
      kind = args.shift();
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
  require('./ast/assign'),
  require('./ast/boolean'),
  require('./ast/class'),
  require('./ast/classconstant'),
  require('./ast/clone'),
  require('./ast/coalesce'),
  require('./ast/constant'),
  require('./ast/echo'),
  require('./ast/empty'),
  require('./ast/entry'),
  require('./ast/error'),
  require('./ast/eval'),
  require('./ast/exit'),
  require('./ast/function'),
  require('./ast/identifier'),
  require('./ast/include'),
  require('./ast/inline'),
  require('./ast/isset'),
  require('./ast/literal'),
  require('./ast/magic'),
  require('./ast/method'),
  require('./ast/namespace'),
  require('./ast/number'),
  require('./ast/parameter'),
  require('./ast/print'),
  require('./ast/program'),
  require('./ast/property'),
  require('./ast/shell'),
  require('./ast/string'),
  require('./ast/unset'),
  require('./ast/variable')
].forEach(function (ctor) {
  var kind = ctor.prototype.constructor.name.toLowerCase();
  if (kind[0] === '_') kind = kind.substring(1);
  AST.prototype[kind] = ctor;
});

module.exports = AST;
