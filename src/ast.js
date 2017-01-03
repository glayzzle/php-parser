/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://gla*yzzle.com
 */

var Location = require('./ast/location');
var Position = require('./ast/position');

/**
 * ## Class hierarchy
 *
 * - [Location](#location)
 * - [Position](#position)
 * - [Node](#node)
 *   - [Identifier](#identifier)
 *   - [TraitUse](#traituse)
 *   - [TraitAlias](#traitalias)
 *   - [TraitPrecedence](#traitprecedence)
 *   - [Entry](#entry)
 *   - [Case](#case)
 *   - [Label](#label)
 *   - [Doc](#doc)
 *   - [Error](#error)
 *   - [Expression](#expression)
 *     - [Array](#array)
 *     - [Variable](#variable)
 *     - [Variadic](#variadic)
 *     - [ConstRef](#constref)
 *     - [Yield](#yield)
 *     - [YieldFrom](#yieldfrom)
 *     - [Lookup](#lookup)
 *       - [PropertyLookup](#propertylookup)
 *       - [StaticLookup](#staticlookup)
 *       - [OffsetLookup](#offsetlookup)
 *     - [Operation](#operation)
 *       - [Coalesce](#coalesce)
 *       - [Pre](#pre)
 *       - [Post](#post)
 *       - [Bin](#bin)
 *       - [Parenthesis](#parenthesis)
 *       - [Bool](#Bool)
 *       - [Unary](#unary)
 *       - [Cast](#cast)
 *     - [Literal](#literal)
 *       - [Boolean](#boolean)
 *       - [String](#string)
 *       - [Number](#number)
 *       - [Inline](#inline)
 *       - [Magic](#magic)
 *       - [Shell](#shell)
 *       - [Nowdoc](#nowdoc)
 *       - [Encapsed](#encapsed)
 *   - [Statement](#statement)
 *     - [Eval](#eval)
 *     - [Exit](#exit)
 *     - [Halt](#halt)
 *     - [Clone](#clone)
 *     - [Declare](#declare)
 *     - [Global](#global)
 *     - [Static](#static)
 *     - [Include](#include)
 *     - [Assign](#assign)
 *     - [RetIf](#retif)
 *     - [If](#if)
 *     - [Do](#do)
 *     - [While](#while)
 *     - [For](#for)
 *     - [Foreach](#foreach)
 *     - [Switch](#switch)
 *     - [Goto](#goto)
 *     - [Silent](#silent)
 *     - [Try](#try)
 *     - [Catch](#catch)
 *     - [Throw](#throw)
 *     - [Call](#call)
 *     - [Closure](#closure)
 *     - [New](#new)
 *     - [UseGroup](#usegroup)
 *     - [UseItem](#useitem)
 *     - [Block](#block)
 *       - [Program](#program)
 *       - [Namespace](#namespace)
 *     - [Sys](#sys)
 *       - [Echo](#echo)
 *       - [List](#list)
 *       - [Print](#print)
 *       - [Isset](#isset)
 *       - [Unset](#unset)
 *       - [Empty](#empty)
 *     - [Declaration](#declaration)
 *       - [Class](#class)
 *       - [Interface](#interface)
 *       - [Trait](#trait)
 *       - [Constant](#constant)
 *         - [ClassConstant](#classconstant)
 *       - [Function](#function)
 *         - [Method](#method)
 *       - [Parameter](#parameter)
 *       - [Property](#property)
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
 * Create a position node from specified parser
 * including it's lexer current state
 * @param {Parser}
 * @return {Position}
 * @private
 */
AST.prototype.position = function(parser) {
  return new Position(
    parser.lexer.yylloc.first_line,
    parser.lexer.yylloc.first_column,
    parser.lexer.yylloc.first_offset
  );
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
    start = this.position(parser);
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
          parser.lexer.yylloc.prev_offset
        );
      }
      if (self.withPositions) {
        location = new Location(src, start, new Position(
          parser.lexer.yylloc.prev_line,
          parser.lexer.yylloc.prev_column,
          parser.lexer.yylloc.prev_offset
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
  require('./ast/bin'),
  require('./ast/block'),
  require('./ast/bool'),
  require('./ast/boolean'),
  require('./ast/break'),
  require('./ast/call'),
  require('./ast/case'),
  require('./ast/cast'),
  require('./ast/catch'),
  require('./ast/class'),
  require('./ast/classconstant'),
  require('./ast/clone'),
  require('./ast/closure'),
  require('./ast/coalesce'),
  require('./ast/constant'),
  require('./ast/constref'),
  require('./ast/continue'),
  require('./ast/declaration'),
  require('./ast/declare'),
  require('./ast/do'),
  require('./ast/doc'),
  require('./ast/echo'),
  require('./ast/empty'),
  require('./ast/encapsed'),
  require('./ast/entry'),
  require('./ast/error'),
  require('./ast/eval'),
  require('./ast/exit'),
  require('./ast/expression'),
  require('./ast/for'),
  require('./ast/foreach'),
  require('./ast/function'),
  require('./ast/global'),
  require('./ast/goto'),
  require('./ast/halt'),
  require('./ast/identifier'),
  require('./ast/if'),
  require('./ast/include'),
  require('./ast/inline'),
  require('./ast/interface'),
  require('./ast/isset'),
  require('./ast/label'),
  require('./ast/list'),
  require('./ast/literal'),
  require('./ast/lookup'),
  require('./ast/magic'),
  require('./ast/method'),
  require('./ast/namespace'),
  require('./ast/new'),
  require('./ast/node'),
  require('./ast/nowdoc'),
  require('./ast/number'),
  require('./ast/offsetlookup'),
  require('./ast/operation'),
  require('./ast/parameter'),
  require('./ast/parenthesis'),
  require('./ast/post'),
  require('./ast/pre'),
  require('./ast/print'),
  require('./ast/program'),
  require('./ast/property'),
  require('./ast/propertylookup'),
  require('./ast/retif'),
  require('./ast/return'),
  require('./ast/shell'),
  require('./ast/silent'),
  require('./ast/statement'),
  require('./ast/static'),
  require('./ast/staticlookup'),
  require('./ast/string'),
  require('./ast/switch'),
  require('./ast/sys'),
  require('./ast/throw'),
  require('./ast/trait'),
  require('./ast/traitalias'),
  require('./ast/traitprecedence'),
  require('./ast/traituse'),
  require('./ast/try'),
  require('./ast/unary'),
  require('./ast/unset'),
  require('./ast/usegroup'),
  require('./ast/useitem'),
  require('./ast/variable'),
  require('./ast/variadic'),
  require('./ast/while'),
  require('./ast/yield'),
  require('./ast/yieldfrom')
].forEach(function (ctor) {
  var kind = ctor.prototype.constructor.name.toLowerCase();
  if (kind[0] === '_') kind = kind.substring(1);
  AST.prototype[kind] = ctor;
});

module.exports = AST;
