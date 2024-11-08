/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Location = require("./ast/location");
const Position = require("./ast/position");

/**
 * ## Class hierarchy
 *
 * - [Location](#location)
 * - [Position](#position)
 * - [Node](#node)
 *   - [Noop](#noop)
 *   - [NullKeyword](#nullkeyword)
 *   - [StaticVariable](#staticvariable)
 *   - [EncapsedPart](#encapsedpart)
 *   - [Constant](#constant)
 *   - [Identifier](#identifier)
 *   - [Reference](#reference)
 *     - [TypeReference](#typereference)
 *     - [ParentReference](#parentreference)
 *     - [StaticReference](#staticreference)
 *     - [SelfReference](#selfreference)
 *     - [Name](#name)
 *   - [TraitUse](#traituse)
 *   - [TraitAlias](#traitalias)
 *   - [TraitPrecedence](#traitprecedence)
 *   - [Comment](#comment)
 *     - [CommentLine](#commentline)
 *     - [CommentBlock](#commentblock)
 *   - [Error](#error)
 *   - [Expression](#expression)
 *     - [Entry](#entry)
 *     - [ArrowFunc](#arrowfunc)
 *     - [Closure](#closure)
 *     - [ByRef](#byref)
 *     - [Silent](#silent)
 *     - [RetIf](#retif)
 *     - [New](#new)
 *     - [Include](#include)
 *     - [Call](#call)
 *     - [Eval](#eval)
 *     - [Exit](#exit)
 *     - [Clone](#clone)
 *     - [Assign](#assign)
 *     - [AssignRef](#assignref)
 *     - [Array](#array)
 *     - [List](#list)
 *     - [Variable](#variable)
 *     - [Variadic](#variadic)
 *     - [Yield](#yield)
 *     - [YieldFrom](#yieldfrom)
 *     - [Print](#print)
 *     - [Isset](#isset)
 *     - [Empty](#empty)
 *     - [Lookup](#lookup)
 *       - [PropertyLookup](#propertylookup)
 *       - [StaticLookup](#staticlookup)
 *       - [OffsetLookup](#offsetlookup)
 *     - [Operation](#operation)
 *       - [Pre](#pre)
 *       - [Post](#post)
 *       - [Bin](#bin)
 *       - [Unary](#unary)
 *       - [Cast](#cast)
 *     - [Literal](#literal)
 *       - [Boolean](#boolean)
 *       - [String](#string)
 *       - [Number](#number)
 *       - [Inline](#inline)
 *       - [Magic](#magic)
 *       - [Nowdoc](#nowdoc)
 *       - [Encapsed](#encapsed)
 *   - [Statement](#statement)
 *     - [ConstantStatement](#constantstatement)
 *       - [ClassConstant](#classconstant)
 *     - [Return](#return)
 *     - [Label](#label)
 *     - [Continue](#continue)
 *     - [Case](#case)
 *     - [Break](#break)
 *     - [Echo](#echo)
 *     - [Unset](#unset)
 *     - [Halt](#halt)
 *     - [Declare](#declare)
 *     - [Global](#global)
 *     - [Static](#static)
 *     - [If](#if)
 *     - [Do](#do)
 *     - [While](#while)
 *     - [For](#for)
 *     - [Foreach](#foreach)
 *     - [Switch](#switch)
 *     - [Goto](#goto)
 *     - [Try](#try)
 *     - [Catch](#catch)
 *     - [Throw](#throw)
 *     - [UseGroup](#usegroup)
 *     - [UseItem](#useitem)
 *     - [Block](#block)
 *       - [Program](#program)
 *       - [Namespace](#namespace)
 *     - [PropertyStatement](#propertystatement)
 *     - [Property](#property)
 *     - [Declaration](#declaration)
 *       - [Class](#class)
 *       - [Interface](#interface)
 *       - [Trait](#trait)
 *       - [Function](#function)
 *         - [Method](#method)
 *       - [Parameter](#parameter)
 * ---
 */

/**
 * The AST builder class
 * @constructor AST
 * @memberOf module:php-parser
 * @tutorial AST
 * @property {Boolean} withPositions - Should locate any node (by default false)
 * @property {Boolean} withSource - Should extract the node original code (by default false)
 */
const AST = function (withPositions, withSource) {
  this.withPositions = withPositions;
  this.withSource = withSource;
};

// operators in ascending order of precedence
AST.precedence = {};
[
  ["or"],
  ["xor"],
  ["and"],
  ["="],
  ["?"],
  ["??"],
  ["||"],
  ["&&"],
  ["|"],
  ["^"],
  ["&"],
  ["==", "!=", "===", "!==", /* '<>', */ "<=>"],
  ["<", "<=", ">", ">="],
  ["<<", ">>"],
  ["+", "-", "."],
  ["*", "/", "%"],
  ["!"],
  ["instanceof"],
  ["cast", "silent"],
  ["**"],
  // TODO: [ (array)
  // TODO: clone, new
].forEach(function (list, index) {
  list.forEach(function (operator) {
    AST.precedence[operator] = index + 1;
  });
});

/**
 * @private
 * @function AST#isRightAssociative
 * @memberOf module:php-parser
 * @param operator
 * @return {boolean}
 */
AST.prototype.isRightAssociative = function (operator) {
  return operator === "**" || operator === "??";
};

/**
 * Change parent node informations after swapping childs
 * @private
 * @function AST#swapLocations
 * @memberOf module:php-parser
 */
AST.prototype.swapLocations = function (target, first, last, parser) {
  if (this.withPositions) {
    target.loc.start = first.loc.start;
    target.loc.end = last.loc.end;
    if (this.withSource) {
      target.loc.source = parser.lexer._input.substring(
        target.loc.start.offset,
        target.loc.end.offset,
      );
    }
  }
};

/**
 * Includes locations from first & last into the target
 * @private
 * @function AST#resolveLocations
 * @memberOf module:php-parser
 */
AST.prototype.resolveLocations = function (target, first, last, parser) {
  if (this.withPositions) {
    if (target.loc.start.offset > first.loc.start.offset) {
      target.loc.start = first.loc.start;
    }
    /* istanbul ignore next */
    if (target.loc.end.offset < last.loc.end.offset) {
      target.loc.end = last.loc.end;
    }
    if (this.withSource) {
      target.loc.source = parser.lexer._input.substring(
        target.loc.start.offset,
        target.loc.end.offset,
      );
    }
  }
};

/**
 * Check and fix precence, by default using right
 * @private
 * @function AST#resolvePrecedence
 * @memberOf module:php-parser
 */
AST.prototype.resolvePrecedence = function (result, parser) {
  let buffer, lLevel, rLevel;
  // handling precendence
  if (result.kind === "call") {
    // including what argument into location
    this.resolveLocations(result, result.what, result, parser);
  } else if (
    result.kind === "propertylookup" ||
    result.kind === "staticlookup" ||
    (result.kind === "offsetlookup" && result.offset)
  ) {
    // including what argument into location
    this.resolveLocations(result, result.what, result.offset, parser);
  } else if (result.kind === "bin") {
    if (result.right && !result.right.parenthesizedExpression) {
      if (result.right.kind === "bin") {
        lLevel = AST.precedence[result.type];
        rLevel = AST.precedence[result.right.type];
        if (
          lLevel &&
          rLevel &&
          rLevel <= lLevel &&
          (result.type !== result.right.type ||
            !this.isRightAssociative(result.type))
        ) {
          // https://github.com/glayzzle/php-parser/issues/79
          // shift precedence
          buffer = result.right;
          result.right = result.right.left;
          this.swapLocations(result, result.left, result.right, parser);
          buffer.left = this.resolvePrecedence(result, parser);
          this.swapLocations(buffer, buffer.left, buffer.right, parser);
          result = buffer;
        }
      } else if (result.right.kind === "retif") {
        lLevel = AST.precedence[result.type];
        rLevel = AST.precedence["?"];
        if (lLevel && rLevel && rLevel <= lLevel) {
          buffer = result.right;
          result.right = result.right.test;
          this.swapLocations(result, result.left, result.right, parser);
          buffer.test = this.resolvePrecedence(result, parser);
          this.swapLocations(buffer, buffer.test, buffer.falseExpr, parser);
          result = buffer;
        }
      }
    }
  } else if (
    (result.kind === "silent" || result.kind === "cast") &&
    result.expr &&
    !result.expr.parenthesizedExpression
  ) {
    // https://github.com/glayzzle/php-parser/issues/172
    if (result.expr.kind === "bin") {
      buffer = result.expr;
      result.expr = result.expr.left;
      this.swapLocations(result, result, result.expr, parser);
      buffer.left = this.resolvePrecedence(result, parser);
      this.swapLocations(buffer, buffer.left, buffer.right, parser);
      result = buffer;
    } else if (result.expr.kind === "retif") {
      buffer = result.expr;
      result.expr = result.expr.test;
      this.swapLocations(result, result, result.expr, parser);
      buffer.test = this.resolvePrecedence(result, parser);
      this.swapLocations(buffer, buffer.test, buffer.falseExpr, parser);
      result = buffer;
    }
  } else if (result.kind === "unary") {
    // https://github.com/glayzzle/php-parser/issues/75
    if (result.what && !result.what.parenthesizedExpression) {
      // unary precedence is always lower
      if (result.what.kind === "bin") {
        buffer = result.what;
        result.what = result.what.left;
        this.swapLocations(result, result, result.what, parser);
        buffer.left = this.resolvePrecedence(result, parser);
        this.swapLocations(buffer, buffer.left, buffer.right, parser);
        result = buffer;
      } else if (result.what.kind === "retif") {
        buffer = result.what;
        result.what = result.what.test;
        this.swapLocations(result, result, result.what, parser);
        buffer.test = this.resolvePrecedence(result, parser);
        this.swapLocations(buffer, buffer.test, buffer.falseExpr, parser);
        result = buffer;
      }
    }
  } else if (result.kind === "retif") {
    // https://github.com/glayzzle/php-parser/issues/77
    if (
      result.falseExpr &&
      result.falseExpr.kind === "retif" &&
      !result.falseExpr.parenthesizedExpression
    ) {
      buffer = result.falseExpr;
      result.falseExpr = buffer.test;
      this.swapLocations(result, result.test, result.falseExpr, parser);
      buffer.test = this.resolvePrecedence(result, parser);
      this.swapLocations(buffer, buffer.test, buffer.falseExpr, parser);
      result = buffer;
    }
  } else if (result.kind === "assign") {
    // https://github.com/glayzzle/php-parser/issues/81
    if (
      result.right &&
      result.right.kind === "bin" &&
      !result.right.parenthesizedExpression
    ) {
      lLevel = AST.precedence["="];
      rLevel = AST.precedence[result.right.type];
      // only shifts with and, xor, or
      if (lLevel && rLevel && rLevel < lLevel) {
        buffer = result.right;
        result.right = result.right.left;
        buffer.left = result;
        this.swapLocations(buffer, buffer.left, result.right, parser);
        result = buffer;
      }
    }
  } else if (result.kind === "expressionstatement") {
    this.swapLocations(result, result.expression, result, parser);
  }
  return result;
};

/**
 * Prepares an AST node
 * @private
 * @function AST#prepare
 * @memberOf module:php-parser
 * @param {String|null} kind - Defines the node type
 * @param {*} docs - (if null, the kind must be passed at the function call)
 * @param {Parser} parser - The parser instance (use for extracting locations)
 * @return {Function}
 */
AST.prototype.prepare = function (kind, docs, parser) {
  let start = null;
  if (this.withPositions || this.withSource) {
    start = parser.position();
  }
  const self = this;
  // returns the node
  const result = function () {
    let location = null;
    const args = Array.prototype.slice.call(arguments);
    args.push(docs);
    if (self.withPositions || self.withSource) {
      let src = null;
      if (self.withSource) {
        src = parser.lexer._input.substring(start.offset, parser.prev[2]);
      }
      // if with source, need location on swapLocations function
      location = new Location(
        src,
        start,
        new Position(parser.prev[0], parser.prev[1], parser.prev[2]),
      );
      // last argument is always the location
      args.push(location);
    }
    // handle lazy kind definitions
    if (!kind) {
      kind = args.shift();
    }
    // build the object
    const node = self[kind];
    if (typeof node !== "function") {
      throw new Error('Undefined node "' + kind + '"');
    }
    const astNode = Object.create(node.prototype);
    node.apply(astNode, args);
    result.instance = astNode;
    /* istanbul ignore next */
    if (result.trailingComments) {
      // buffer of trailingComments
      astNode.trailingComments = result.trailingComments;
    }
    if (typeof result.postBuild === "function") {
      result.postBuild(astNode);
    }
    if (parser.debug) {
      delete self.stack[result.stackUid];
    }
    return self.resolvePrecedence(astNode, parser);
  };
  if (parser.debug) {
    if (!this.stack) {
      this.stack = {};
      this.stackUid = 1;
    }
    this.stack[++this.stackUid] = {
      position: start,
      stack: new Error().stack.split("\n").slice(3, 5),
    };
    result.stackUid = this.stackUid;
  }

  /**
   * Sets a list of trailing comments
   * @private
   * @param {*} docs
   */
  result.setTrailingComments = function (docs) {
    if (result.instance) {
      // already created
      result.instance.setTrailingComments(docs);
    } else {
      result.trailingComments = docs;
    }
  };

  /**
   * Release a node without using it on the AST
   * @private
   * @param {*} target
   */
  result.destroy = function (target) {
    if (docs) {
      // release current docs stack
      if (target) {
        if (!target.leadingComments) {
          target.leadingComments = docs;
        } else {
          target.leadingComments = docs.concat(target.leadingComments);
        }
      } else {
        parser._docIndex = parser._docs.length - docs.length;
      }
    }
    if (parser.debug) {
      delete self.stack[result.stackUid];
    }
  };
  return result;
};

AST.prototype.checkNodes = function () {
  const errors = [];
  for (const k in this.stack) {
    if (Object.prototype.hasOwnProperty.call(this.stack, k)) {
      this.stack[k].key = k;
      errors.push(this.stack[k]);
    }
  }
  this.stack = {};
  return errors;
};

// Define all AST nodes
[
  require("./ast/array"),
  require("./ast/arrowfunc"),
  require("./ast/assign"),
  require("./ast/assignref"),
  require("./ast/attribute"),
  require("./ast/attrgroup"),
  require("./ast/bin"),
  require("./ast/block"),
  require("./ast/boolean"),
  require("./ast/break"),
  require("./ast/byref"),
  require("./ast/call"),
  require("./ast/case"),
  require("./ast/cast"),
  require("./ast/catch"),
  require("./ast/class"),
  require("./ast/classconstant"),
  require("./ast/clone"),
  require("./ast/closure"),
  require("./ast/comment"),
  require("./ast/commentblock"),
  require("./ast/commentline"),
  require("./ast/constant"),
  require("./ast/constantstatement"),
  require("./ast/continue"),
  require("./ast/declaration"),
  require("./ast/declare"),
  require("./ast/declaredirective"),
  require("./ast/do"),
  require("./ast/echo"),
  require("./ast/empty"),
  require("./ast/encapsed"),
  require("./ast/encapsedpart"),
  require("./ast/entry"),
  require("./ast/enum"),
  require("./ast/enumcase"),
  require("./ast/error"),
  require("./ast/eval"),
  require("./ast/exit"),
  require("./ast/expression"),
  require("./ast/expressionstatement"),
  require("./ast/for"),
  require("./ast/foreach"),
  require("./ast/function"),
  require("./ast/global"),
  require("./ast/goto"),
  require("./ast/halt"),
  require("./ast/identifier"),
  require("./ast/if"),
  require("./ast/include"),
  require("./ast/inline"),
  require("./ast/interface"),
  require("./ast/intersectiontype"),
  require("./ast/isset"),
  require("./ast/label"),
  require("./ast/list"),
  require("./ast/literal"),
  require("./ast/lookup"),
  require("./ast/magic"),
  require("./ast/match"),
  require("./ast/matcharm"),
  require("./ast/method"),
  require("./ast/name"),
  require("./ast/namespace"),
  require("./ast/namedargument"),
  require("./ast/new"),
  require("./ast/node"),
  require("./ast/noop"),
  require("./ast/nowdoc"),
  require("./ast/nullkeyword"),
  require("./ast/nullsafepropertylookup"),
  require("./ast/number"),
  require("./ast/offsetlookup"),
  require("./ast/operation"),
  require("./ast/parameter"),
  require("./ast/parentreference"),
  require("./ast/post"),
  require("./ast/pre"),
  require("./ast/print"),
  require("./ast/program"),
  require("./ast/property"),
  require("./ast/propertylookup"),
  require("./ast/propertystatement"),
  require("./ast/reference"),
  require("./ast/retif"),
  require("./ast/return"),
  require("./ast/selfreference"),
  require("./ast/silent"),
  require("./ast/statement"),
  require("./ast/static"),
  require("./ast/staticvariable"),
  require("./ast/staticlookup"),
  require("./ast/staticreference"),
  require("./ast/string"),
  require("./ast/switch"),
  require("./ast/throw"),
  require("./ast/trait"),
  require("./ast/traitalias"),
  require("./ast/traitprecedence"),
  require("./ast/traituse"),
  require("./ast/try"),
  require("./ast/typereference"),
  require("./ast/unary"),
  require("./ast/uniontype"),
  require("./ast/unset"),
  require("./ast/usegroup"),
  require("./ast/useitem"),
  require("./ast/variable"),
  require("./ast/variadic"),
  require("./ast/variadicplaceholder"),
  require("./ast/while"),
  require("./ast/yield"),
  require("./ast/yieldfrom"),
].forEach(function (ctor) {
  AST.prototype[ctor.kind] = ctor;
});

module.exports = AST;
