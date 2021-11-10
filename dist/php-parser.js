/*!
 * 
 *   Package: php-parser
 *   Parse PHP code from JS and returns its AST
 *   Build: 8e6598903998e5d7291e - 2021-4-4
 *   Copyright (C) 2021 Glayzzle (BSD-3-Clause)
 *   @authors https://github.com/glayzzle/php-parser/graphs/contributors
 *   @url http://glayzzle.com
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PhpParser"] = factory();
	else
		root["PhpParser"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Location = __webpack_require__(1907);

var Position = __webpack_require__(7724);
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


var AST = function AST(withPositions, withSource) {
  this.withPositions = withPositions;
  this.withSource = withSource;
};
/**
 * Create a position node from specified parser
 * including it's lexer current state
 * @private
 * @function AST#position
 * @memberOf module:php-parser
 * @param {Parser} parser
 * @return {Position}
 */


AST.prototype.position = function (parser) {
  return new Position(parser.lexer.yylloc.first_line, parser.lexer.yylloc.first_column, parser.lexer.yylloc.first_offset);
}; // operators in ascending order of precedence


AST.precedence = {};
[["or"], ["xor"], ["and"], ["="], ["?"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "!=", "===", "!==",
/* '<>', */
"<=>"], ["<", "<=", ">", ">="], ["<<", ">>"], ["+", "-", "."], ["*", "/", "%"], ["!"], ["instanceof"], ["cast", "silent"], ["**"] // TODO: [ (array)
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
      target.loc.source = parser.lexer._input.substring(target.loc.start.offset, target.loc.end.offset);
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

    if (target.loc.end.offset < last.loc.end.offset) {
      target.loc.end = last.loc.end;
    }

    if (this.withSource) {
      target.loc.source = parser.lexer._input.substring(target.loc.start.offset, target.loc.end.offset);
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
  var buffer, lLevel, rLevel; // handling precendence

  if (result.kind === "call") {
    // including what argument into location
    this.resolveLocations(result, result.what, result, parser);
  } else if (result.kind === "propertylookup" || result.kind === "staticlookup" || result.kind === "offsetlookup" && result.offset) {
    // including what argument into location
    this.resolveLocations(result, result.what, result.offset, parser);
  } else if (result.kind === "bin") {
    if (result.right && !result.right.parenthesizedExpression) {
      if (result.right.kind === "bin") {
        lLevel = AST.precedence[result.type];
        rLevel = AST.precedence[result.right.type];

        if (lLevel && rLevel && rLevel <= lLevel && (result.type !== result.right.type || !this.isRightAssociative(result.type))) {
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
  } else if ((result.kind === "silent" || result.kind === "cast") && result.expr && !result.expr.parenthesizedExpression) {
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
    if (result.falseExpr && result.falseExpr.kind === "retif" && !result.falseExpr.parenthesizedExpression) {
      buffer = result.falseExpr;
      result.falseExpr = buffer.test;
      this.swapLocations(result, result.test, result.falseExpr, parser);
      buffer.test = this.resolvePrecedence(result, parser);
      this.swapLocations(buffer, buffer.test, buffer.falseExpr, parser);
      result = buffer;
    }
  } else if (result.kind === "assign") {
    // https://github.com/glayzzle/php-parser/issues/81
    if (result.right && result.right.kind === "bin" && !result.right.parenthesizedExpression) {
      lLevel = AST.precedence["="];
      rLevel = AST.precedence[result.right.type]; // only shifts with and, xor, or

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
  var start = null;

  if (this.withPositions || this.withSource) {
    start = this.position(parser);
  }

  var self = this; // returns the node

  var result = function result() {
    var location = null;
    var args = Array.prototype.slice.call(arguments);
    args.push(docs);

    if (self.withPositions || self.withSource) {
      var src = null;

      if (self.withSource) {
        src = parser.lexer._input.substring(start.offset, parser.prev[2]);
      } // if with source, need location on swapLocations function


      location = new Location(src, start, new Position(parser.prev[0], parser.prev[1], parser.prev[2])); // last argument is always the location

      args.push(location);
    } // handle lazy kind definitions


    if (!kind) {
      kind = args.shift();
    } // build the object


    var node = self[kind];

    if (typeof node !== "function") {
      throw new Error('Undefined node "' + kind + '"');
    }

    var astNode = Object.create(node.prototype);
    node.apply(astNode, args);
    result.instance = astNode;

    if (result.trailingComments) {
      // buffer of trailingComments
      astNode.trailingComments = result.trailingComments;
    }

    if (typeof result.postBuild === "function") {
      result.postBuild(astNode);
    }

    if (parser.debug) {
      delete AST.stack[result.stackUid];
    }

    return self.resolvePrecedence(astNode, parser);
  };

  if (parser.debug) {
    if (!AST.stack) {
      AST.stack = {};
      AST.stackUid = 1;
    }

    AST.stack[++AST.stackUid] = {
      position: start,
      stack: new Error().stack.split("\n").slice(3, 5)
    };
    result.stackUid = AST.stackUid;
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
      delete AST.stack[result.stackUid];
    }
  };

  return result;
};

AST.prototype.checkNodes = function () {
  var errors = [];

  for (var k in AST.stack) {
    if (AST.stack.hasOwnProperty(k)) {
      errors.push(AST.stack[k]);
    }
  }

  AST.stack = {};
  return errors;
}; // Define all AST nodes


[__webpack_require__(1538), __webpack_require__(4253), __webpack_require__(1997), __webpack_require__(1889), __webpack_require__(4230), __webpack_require__(2325), __webpack_require__(504), __webpack_require__(2271), __webpack_require__(5871), __webpack_require__(1578), __webpack_require__(7521), __webpack_require__(8212), __webpack_require__(1119), __webpack_require__(5178), __webpack_require__(4027), __webpack_require__(5436), __webpack_require__(5411), __webpack_require__(2001), __webpack_require__(6659), __webpack_require__(387), __webpack_require__(408), __webpack_require__(7224), __webpack_require__(6560), __webpack_require__(9036), __webpack_require__(4067), __webpack_require__(2514), __webpack_require__(8014), __webpack_require__(4395), __webpack_require__(4514), __webpack_require__(6129), __webpack_require__(3321), __webpack_require__(3689), __webpack_require__(4042), __webpack_require__(5886), __webpack_require__(6389), __webpack_require__(1530), __webpack_require__(9317), __webpack_require__(4607), __webpack_require__(358), __webpack_require__(1057), __webpack_require__(7887), __webpack_require__(7752), __webpack_require__(6547), __webpack_require__(6403), __webpack_require__(5851), __webpack_require__(8454), __webpack_require__(7133), __webpack_require__(7298), __webpack_require__(9132), __webpack_require__(9522), __webpack_require__(298), __webpack_require__(6602), __webpack_require__(7592), __webpack_require__(679), __webpack_require__(3110), __webpack_require__(3174), __webpack_require__(8356), __webpack_require__(3725), __webpack_require__(2730), __webpack_require__(2450), __webpack_require__(1358), __webpack_require__(8588), __webpack_require__(1480), __webpack_require__(368), __webpack_require__(6210), __webpack_require__(9281), __webpack_require__(1771), __webpack_require__(8377), __webpack_require__(5003), __webpack_require__(6340), __webpack_require__(1558), __webpack_require__(3429), __webpack_require__(6966), __webpack_require__(2037), __webpack_require__(1211), __webpack_require__(4847), __webpack_require__(619), __webpack_require__(5182), __webpack_require__(7228), __webpack_require__(2898), __webpack_require__(5037), __webpack_require__(9732), __webpack_require__(8409), __webpack_require__(2941), __webpack_require__(7129), __webpack_require__(2589), __webpack_require__(5228), __webpack_require__(2523), __webpack_require__(8084), __webpack_require__(4398), __webpack_require__(3181), __webpack_require__(8466), __webpack_require__(8062), __webpack_require__(6178), __webpack_require__(2379), __webpack_require__(3693), __webpack_require__(7880), __webpack_require__(6520), __webpack_require__(3656), __webpack_require__(41), __webpack_require__(288), __webpack_require__(8789)].forEach(function (ctor) {
  AST.prototype[ctor.kind] = ctor;
});
module.exports = AST;

/***/ }),

/***/ 1538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expr = __webpack_require__(1530);

var KIND = "array";
/**
 * Defines an array structure
 * @constructor Array
 * @memberOf module:php-parser
 * @example
 * // PHP code :
 * [1, 'foo' => 'bar', 3]
 *
 * // AST structure :
 * {
 *  "kind": "array",
 *  "shortForm": true
 *  "items": [
 *    {"kind": "number", "value": "1"},
 *    {
 *      "kind": "entry",
 *      "key": {"kind": "string", "value": "foo", "isDoubleQuote": false},
 *      "value": {"kind": "string", "value": "bar", "isDoubleQuote": false}
 *    },
 *    {"kind": "number", "value": "3"}
 *  ]
 * }
 * @extends {Expression}
 * @property {Entry|Expression|Variable} items List of array items
 * @property {boolean} shortForm Indicate if the short array syntax is used, ex `[]` instead `array()`
 */

module.exports = Expr["extends"](KIND, function Array(shortForm, items, docs, location) {
  Expr.apply(this, [KIND, docs, location]);
  this.items = items;
  this.shortForm = shortForm;
});

/***/ }),

/***/ 4253:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "arrowfunc";
/**
 * Defines an arrow function (it's like a closure)
 * @constructor ArrowFunc
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Parameter[]} arguments
 * @property {Identifier} type
 * @property {Expression} body
 * @property {boolean} byref
 * @property {boolean} nullable
 * @property {boolean} isStatic
 */

module.exports = Expression["extends"](KIND, function Closure(args, byref, body, type, nullable, isStatic, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.arguments = args;
  this.byref = byref;
  this.body = body;
  this.type = type;
  this.nullable = nullable;
  this.isStatic = isStatic || false;
});

/***/ }),

/***/ 1997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "assign";
/**
 * Assigns a value to the specified target
 * @constructor Assign
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} left
 * @property {Expression} right
 * @property {String} operator
 */

module.exports = Expression["extends"](KIND, function Assign(left, right, operator, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.left = left;
  this.right = right;
  this.operator = operator;
});

/***/ }),

/***/ 1889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "assignref";
/**
 * Assigns a value to the specified target
 * @constructor AssignRef
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} left
 * @property {Expression} right
 * @property {String} operator
 */

module.exports = Expression["extends"](KIND, function AssignRef(left, right, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.left = left;
  this.right = right;
});

/***/ }),

/***/ 4230:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Operation = __webpack_require__(6210);

var KIND = "bin";
/**
 * Binary operations
 * @constructor Bin
 * @memberOf module:php-parser
 * @extends {Operation}
 * @property {String} type
 * @property {Expression} left
 * @property {Expression} right
 */

module.exports = Operation["extends"](KIND, function Bin(type, left, right, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.left = left;
  this.right = right;
});

/***/ }),

/***/ 2325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "block";
/**
 * A block statement, i.e., a sequence of statements surrounded by braces.
 * @constructor Block
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Node[]} children
 */

module.exports = Statement["extends"](KIND, function Block(kind, children, docs, location) {
  Statement.apply(this, [kind || KIND, docs, location]);
  this.children = children.filter(Boolean);
});

/***/ }),

/***/ 504:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Literal = __webpack_require__(6602);

var KIND = "boolean";
/**
 * Defines a boolean value (true/false)
 * @constructor Boolean
 * @memberOf module:php-parser
 * @extends {Literal}
 */

module.exports = Literal["extends"](KIND, function Boolean(value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
});

/***/ }),

/***/ 2271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "break";
/**
 * A break statement
 * @constructor Break
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Number|Null} level
 */

module.exports = Statement["extends"](KIND, function Break(level, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.level = level;
});

/***/ }),

/***/ 5871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "byref";
/**
 * Passing by Reference - so the function can modify the variable
 * @constructor ByRef
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {ExpressionStatement} what
 */

module.exports = Expression["extends"](KIND, function ByRef(what, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.what = what;
});

/***/ }),

/***/ 1578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "call";
/**
 * Executes a call statement
 * @constructor Call
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Identifier|Variable} what
 * @property {Variable[]} arguments
 */

module.exports = Expression["extends"](KIND, function Call(what, args, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.what = what;
  this.arguments = args;
});

/***/ }),

/***/ 7521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "case";
/**
 * A switch case statement
 * @constructor Case
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression|null} test - if null, means that the default case
 * @property {Block|null} body
 */

module.exports = Statement["extends"](KIND, function Case(test, body, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
});

/***/ }),

/***/ 8212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Operation = __webpack_require__(6210);

var KIND = "cast";
/**
 * Binary operations
 * @constructor Cast
 * @memberOf module:php-parser
 * @extends {Operation}
 * @property {String} type
 * @property {String} raw
 * @property {Expression} expr
 */

module.exports = Operation["extends"](KIND, function Cast(type, raw, expr, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.raw = raw;
  this.expr = expr;
});

/***/ }),

/***/ 1119:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "catch";
/**
 * Defines a catch statement
 * @constructor Catch
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Identifier[]} what
 * @property {Variable} variable
 * @property {Statement} body
 * @see http://php.net/manual/en/language.exceptions.php
 */

module.exports = Statement["extends"](KIND, function Catch(body, what, variable, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.body = body;
  this.what = what;
  this.variable = variable;
});

/***/ }),

/***/ 5178:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Declaration = __webpack_require__(9036);

var KIND = "class";
/**
 * A class definition
 * @constructor Class
 * @memberOf module:php-parser
 * @extends {Declaration}
 * @property {Identifier|null} extends
 * @property {Identifier[]} implements
 * @property {Declaration[]} body
 * @property {boolean} isAnonymous
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 */

module.exports = Declaration["extends"](KIND, function Class(name, ext, impl, body, flags, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.isAnonymous = name ? false : true;
  this["extends"] = ext;
  this["implements"] = impl;
  this.body = body;
  this.parseFlags(flags);
});

/***/ }),

/***/ 4027:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var ConstantStatement = __webpack_require__(7224);

var KIND = "classconstant";
var IS_UNDEFINED = "";
var IS_PUBLIC = "public";
var IS_PROTECTED = "protected";
var IS_PRIVATE = "private";
/**
 * Defines a class/interface/trait constant
 * @constructor ClassConstant
 * @memberOf module:php-parser
 * @extends {ConstantStatement}
 * @property {string} visibility
 */

var ClassConstant = ConstantStatement["extends"](KIND, function ClassConstant(kind, constants, flags, docs, location) {
  ConstantStatement.apply(this, [kind || KIND, constants, docs, location]);
  this.parseFlags(flags);
});
/**
 * Generic flags parser
 * @function
 * @name ClassConstant#parseFlags
 * @memberOf module:php-parser
 * @param {Array<number|null>} flags
 * @return {void}
 */

ClassConstant.prototype.parseFlags = function (flags) {
  if (flags[0] === -1) {
    this.visibility = IS_UNDEFINED;
  } else if (flags[0] === null) {
    this.visibility = null;
  } else if (flags[0] === 0) {
    this.visibility = IS_PUBLIC;
  } else if (flags[0] === 1) {
    this.visibility = IS_PROTECTED;
  } else if (flags[0] === 2) {
    this.visibility = IS_PRIVATE;
  }
};

module.exports = ClassConstant;

/***/ }),

/***/ 5436:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "clone";
/**
 * Defines a clone call
 * @constructor Clone
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} what
 */

module.exports = Expression["extends"](KIND, function Clone(what, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.what = what;
});

/***/ }),

/***/ 5411:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "closure";
/**
 * Defines a closure
 * @constructor Closure
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Parameter[]} arguments
 * @property {Variable[]} uses
 * @property {Identifier} type
 * @property {Boolean} byref
 * @property {boolean} nullable
 * @property {Block|null} body
 * @property {boolean} isStatic
 */

module.exports = Expression["extends"](KIND, function Closure(args, byref, uses, type, nullable, isStatic, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.uses = uses;
  this.arguments = args;
  this.byref = byref;
  this.type = type;
  this.nullable = nullable;
  this.isStatic = isStatic || false;
  this.body = null;
});

/***/ }),

/***/ 2001:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);
/**
 * Abstract documentation node (ComentLine or CommentBlock)
 * @constructor Comment
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {String} value
 */


module.exports = Node["extends"]("comment", function Comment(kind, value, docs, location) {
  Node.apply(this, [kind, docs, location]);
  this.value = value;
});

/***/ }),

/***/ 6659:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Comment = __webpack_require__(2001);

var KIND = "commentblock";
/**
 * A comment block (multiline)
 * @constructor CommentBlock
 * @memberOf module:php-parser
 * @extends {Comment}
 */

module.exports = Comment["extends"](KIND, function CommentBlock(value, docs, location) {
  Comment.apply(this, [KIND, value, docs, location]);
});

/***/ }),

/***/ 387:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Comment = __webpack_require__(2001);

var KIND = "commentline";
/**
 * A single line comment
 * @constructor CommentLine
 * @memberOf module:php-parser
 * @extends {Comment}
 */

module.exports = Comment["extends"](KIND, function CommentLine(value, docs, location) {
  Comment.apply(this, [KIND, value, docs, location]);
});

/***/ }),

/***/ 408:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "constant";
/**
 * Defines a constant
 * @constructor Constant
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {string} name
 * @property {Node|string|number|boolean|null} value
 */

module.exports = Node["extends"](KIND, function Constant(name, value, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.name = name;
  this.value = value;
});

/***/ }),

/***/ 7224:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "constantstatement";
/**
 * Declares a constants into the current scope
 * @constructor ConstantStatement
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Constant[]} constants
 */

module.exports = Statement["extends"](KIND, function ConstantStatement(kind, constants, docs, location) {
  Statement.apply(this, [kind || KIND, docs, location]);
  this.constants = constants;
});

/***/ }),

/***/ 6560:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "continue";
/**
 * A continue statement
 * @constructor Continue
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {number|null} level
 */

module.exports = Statement["extends"](KIND, function Continue(level, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.level = level;
});

/***/ }),

/***/ 9036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "declaration";
var IS_UNDEFINED = "";
var IS_PUBLIC = "public";
var IS_PROTECTED = "protected";
var IS_PRIVATE = "private";
/**
 * A declaration statement (function, class, interface...)
 * @constructor Declaration
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Identifier|string} name
 */

var Declaration = Statement["extends"](KIND, function Declaration(kind, name, docs, location) {
  Statement.apply(this, [kind || KIND, docs, location]);
  this.name = name;
});
/**
 * Generic flags parser
 * @function
 * @name Declaration#parseFlags
 * @memberOf module:php-parser
 * @param {Array<number|null>} flags
 * @return {void}
 */

Declaration.prototype.parseFlags = function (flags) {
  this.isAbstract = flags[2] === 1;
  this.isFinal = flags[2] === 2;

  if (this.kind !== "class") {
    if (flags[0] === -1) {
      this.visibility = IS_UNDEFINED;
    } else if (flags[0] === null) {
      this.visibility = null;
    } else if (flags[0] === 0) {
      this.visibility = IS_PUBLIC;
    } else if (flags[0] === 1) {
      this.visibility = IS_PROTECTED;
    } else if (flags[0] === 2) {
      this.visibility = IS_PRIVATE;
    }

    this.isStatic = flags[1] === 1;
  }
};

module.exports = Declaration;

/***/ }),

/***/ 4067:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Block = __webpack_require__(2325);

var KIND = "declare";
/**
 * The declare construct is used to set execution directives for a block of code
 * @constructor Declare
 * @memberOf module:php-parser
 * @extends {Block}
 * @property {Array[]} directives
 * @property {String} mode
 * @see http://php.net/manual/en/control-structures.declare.php
 */

var Declare = Block["extends"](KIND, function Declare(directives, body, mode, docs, location) {
  Block.apply(this, [KIND, body, docs, location]);
  this.directives = directives;
  this.mode = mode;
});
/**
 * The node is declared as a short tag syntax :
 * ```php
 * <?php
 * declare(ticks=1):
 * // some statements
 * enddeclare;
 * ```
 * @constant {String} Declare#MODE_SHORT
 * @memberOf module:php-parser
 */

Declare.MODE_SHORT = "short";
/**
 * The node is declared bracket enclosed code :
 * ```php
 * <?php
 * declare(ticks=1) {
 * // some statements
 * }
 * ```
 * @constant {String} Declare#MODE_BLOCK
 * @memberOf module:php-parser
 */

Declare.MODE_BLOCK = "block";
/**
 * The node is declared as a simple statement. In order to make things simpler
 * children of the node are automatically collected until the next
 * declare statement.
 * ```php
 * <?php
 * declare(ticks=1);
 * // some statements
 * declare(ticks=2);
 * // some statements
 * ```
 * @constant {String} Declare#MODE_NONE
 * @memberOf module:php-parser
 */

Declare.MODE_NONE = "none";
module.exports = Declare;

/***/ }),

/***/ 2514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "declaredirective";
/**
 * Defines a constant
 * @constructor DeclareDirective
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {Identifier} name
 * @property {Node|string|number|boolean|null} value
 */

module.exports = Node["extends"](KIND, function DeclareDirective(key, value, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.key = key;
  this.value = value;
});

/***/ }),

/***/ 8014:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "do";
/**
 * Defines a do/while statement
 * @constructor Do
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression} test
 * @property {Statement} body
 */

module.exports = Statement["extends"](KIND, function Do(test, body, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
});

/***/ }),

/***/ 4395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "echo";
/**
 * Defines system based call
 * @constructor Echo
 * @memberOf module:php-parser
 * @property {boolean} shortForm
 * @extends {Statement}
 */

module.exports = Statement["extends"](KIND, function Echo(expressions, shortForm, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.shortForm = shortForm;
  this.expressions = expressions;
});

/***/ }),

/***/ 4514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "empty";
/**
 * Defines an empty check call
 * @constructor Empty
 * @memberOf module:php-parser
 * @extends {Expression}
 */

module.exports = Expression["extends"](KIND, function Empty(expression, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.expression = expression;
});

/***/ }),

/***/ 6129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Literal = __webpack_require__(6602);

var KIND = "encapsed";
/**
 * Defines an encapsed string (contains expressions)
 * @constructor Encapsed
 * @memberOf module:php-parser
 * @extends {Literal}
 * @property {String} type - Defines the type of encapsed string (shell, heredoc, string)
 * @property {String|Null} label - The heredoc label, defined only when the type is heredoc
 */

var Encapsed = Literal["extends"](KIND, function Encapsed(value, raw, type, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
  this.type = type;
});
/**
 * The node is a double quote string :
 * ```php
 * <?php
 * echo "hello $world";
 * ```
 * @constant {String} Encapsed#TYPE_STRING - `string`
 * @memberOf module:php-parser
 */

Encapsed.TYPE_STRING = "string";
/**
 * The node is a shell execute string :
 * ```php
 * <?php
 * echo `ls -larth $path`;
 * ```
 * @constant {String} Encapsed#TYPE_SHELL - `shell`
 * @memberOf module:php-parser
 */

Encapsed.TYPE_SHELL = "shell";
/**
 * The node is a shell execute string :
 * ```php
 * <?php
 * echo <<<STR
 *  Hello $world
 * STR
 * ;
 * ```
 * @constant {String} Encapsed#TYPE_HEREDOC - `heredoc`
 * @memberOf module:php-parser
 */

Encapsed.TYPE_HEREDOC = "heredoc";
/**
 * The node contains a list of constref / variables / expr :
 * ```php
 * <?php
 * echo $foo->bar_$baz;
 * ```
 * @constant {String} Encapsed#TYPE_OFFSET - `offset`
 * @memberOf module:php-parser
 */

Encapsed.TYPE_OFFSET = "offset";
module.exports = Encapsed;

/***/ }),

/***/ 3321:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "encapsedpart";
/**
 * Part of `Encapsed` node
 * @constructor EncapsedPart
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} expression
 * @property {String} syntax
 * @property {Boolean} curly
 */

module.exports = Expression["extends"](KIND, function EncapsedPart(expression, syntax, curly, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.expression = expression;
  this.syntax = syntax;
  this.curly = curly;
});

/***/ }),

/***/ 3689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "entry";
/**
 * An array entry - see [Array](#array)
 * @constructor Entry
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Node|null} key The entry key/offset
 * @property {Node} value The entry value
 * @property {Boolean} byRef By reference
 * @property {Boolean} unpack Argument unpacking
 */

module.exports = Expression["extends"](KIND, function Entry(key, value, byRef, unpack, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.key = key;
  this.value = value;
  this.byRef = byRef;
  this.unpack = unpack;
});

/***/ }),

/***/ 4042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "error";
/**
 * Defines an error node (used only on silentMode)
 * @constructor Error
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {string} message
 * @property {number} line
 * @property {number|string} token
 * @property {string|array} expected
 */

module.exports = Node["extends"](KIND, function Error(message, token, line, expected, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.message = message;
  this.token = token;
  this.line = line;
  this.expected = expected;
});

/***/ }),

/***/ 5886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "eval";
/**
 * Defines an eval statement
 * @constructor Eval
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Node} source
 */

module.exports = Expression["extends"](KIND, function Eval(source, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.source = source;
});

/***/ }),

/***/ 6389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "exit";
/**
 * Defines an exit / die call
 * @constructor Exit
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Node|null} expression
 * @property {boolean} useDie
 */

module.exports = Expression["extends"](KIND, function Exit(expression, useDie, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.expression = expression;
  this.useDie = useDie;
});

/***/ }),

/***/ 1530:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "expression";
/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 * @constructor Expression
 * @memberOf module:php-parser
 * @extends {Node}
 */

module.exports = Node["extends"](KIND, function Expression(kind, docs, location) {
  Node.apply(this, [kind || KIND, docs, location]);
});

/***/ }),

/***/ 9317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "expressionstatement";
/**
 * Defines an expression based statement
 * @constructor ExpressionStatement
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression} expression
 */

module.exports = Statement["extends"](KIND, function ExpressionStatement(expr, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.expression = expr;
});

/***/ }),

/***/ 4607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "for";
/**
 * Defines a for iterator
 * @constructor For
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression[]} init
 * @property {Expression[]} test
 * @property {Expression[]} increment
 * @property {Statement} body
 * @property {boolean} shortForm
 * @see http://php.net/manual/en/control-structures.for.php
 */

module.exports = Statement["extends"](KIND, function For(init, test, increment, body, shortForm, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.init = init;
  this.test = test;
  this.increment = increment;
  this.shortForm = shortForm;
  this.body = body;
});

/***/ }),

/***/ 358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "foreach";
/**
 * Defines a foreach iterator
 * @constructor Foreach
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression} source
 * @property {Expression|null} key
 * @property {Expression} value
 * @property {Statement} body
 * @property {boolean} shortForm
 * @see http://php.net/manual/en/control-structures.foreach.php
 */

module.exports = Statement["extends"](KIND, function Foreach(source, key, value, body, shortForm, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.source = source;
  this.key = key;
  this.value = value;
  this.shortForm = shortForm;
  this.body = body;
});

/***/ }),

/***/ 1057:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Declaration = __webpack_require__(9036);

var KIND = "function";
/**
 * Defines a classic function
 * @constructor Function
 * @memberOf module:php-parser
 * @extends {Declaration}
 * @property {Parameter[]} arguments
 * @property {Identifier} type
 * @property {boolean} byref
 * @property {boolean} nullable
 * @property {Block|null} body
 */

module.exports = Declaration["extends"](KIND, function _Function(name, args, byref, type, nullable, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.arguments = args;
  this.byref = byref;
  this.type = type;
  this.nullable = nullable;
  this.body = null;
});

/***/ }),

/***/ 7887:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "global";
/**
 * Imports a variable from the global scope
 * @constructor Global
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Variable[]} items
 */

module.exports = Statement["extends"](KIND, function Global(items, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.items = items;
});

/***/ }),

/***/ 7752:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "goto";
/**
 * Defines goto statement
 * @constructor Goto
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {string} label
 * @see {Label}
 */

module.exports = Statement["extends"](KIND, function Goto(label, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.label = label;
});

/***/ }),

/***/ 6547:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "halt";
/**
 * Halts the compiler execution
 * @constructor Halt
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {String} after - String after the halt statement
 * @see http://php.net/manual/en/function.halt-compiler.php
 */

module.exports = Statement["extends"](KIND, function Halt(after, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.after = after;
});

/***/ }),

/***/ 6403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "identifier";
/**
 * Defines an identifier node
 * @constructor Identifier
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {string} name
 */

var Identifier = Node["extends"](KIND, function Identifier(name, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.name = name;
});
module.exports = Identifier;

/***/ }),

/***/ 5851:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "if";
/**
 * Defines a if statement
 * @constructor If
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression} test
 * @property {Block} body
 * @property {Block|If|null} alternate
 * @property {boolean} shortForm
 */

module.exports = Statement["extends"](KIND, function If(test, body, alternate, shortForm, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
  this.alternate = alternate;
  this.shortForm = shortForm;
});

/***/ }),

/***/ 8454:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "include";
/**
 * Defines system include call
 * @constructor Include
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Node} target
 * @property {boolean} once
 * @property {boolean} require
 */

module.exports = Expression["extends"](KIND, function Include(once, require, target, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.once = once;
  this.require = require;
  this.target = target;
});

/***/ }),

/***/ 7133:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Literal = __webpack_require__(6602);

var KIND = "inline";
/**
 * Defines inline html output (treated as echo output)
 * @constructor Inline
 * @memberOf module:php-parser
 * @extends {Literal}
 */

module.exports = Literal["extends"](KIND, function Inline(value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
});

/***/ }),

/***/ 7298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Declaration = __webpack_require__(9036);

var KIND = "interface";
/**
 * An interface definition
 * @constructor Interface
 * @memberOf module:php-parser
 * @extends {Declaration}
 * @property {Identifier[]} extends
 * @property {Declaration[]} body
 */

module.exports = Declaration["extends"](KIND, function Interface(name, ext, body, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this["extends"] = ext;
  this.body = body;
});

/***/ }),

/***/ 9132:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "isset";
/**
 * Defines an isset call
 * @constructor Isset
 * @memberOf module:php-parser
 * @extends {Expression}
 */

module.exports = Expression["extends"](KIND, function Isset(variables, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.variables = variables;
});

/***/ }),

/***/ 9522:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "label";
/**
 * A label statement (referenced by goto)
 * @constructor Label
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {String} name
 */

module.exports = Statement["extends"](KIND, function Label(name, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.name = name;
});

/***/ }),

/***/ 298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "list";
/**
 * Defines list assignment
 * @constructor List
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {boolean} shortForm
 */

module.exports = Expression["extends"](KIND, function List(items, shortForm, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.items = items;
  this.shortForm = shortForm;
});

/***/ }),

/***/ 6602:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "literal";
/**
 * Defines an array structure
 * @constructor Literal
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {string} raw
 * @property {Node|string|number|boolean|null} value
 */

module.exports = Expression["extends"](KIND, function Literal(kind, value, raw, docs, location) {
  Expression.apply(this, [kind || KIND, docs, location]);
  this.value = value;

  if (raw) {
    this.raw = raw;
  }
});

/***/ }),

/***/ 1907:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * Defines the location of the node (with it's source contents as string)
 * @constructor Location
 * @memberOf module:php-parser
 * @property {string|null} source
 * @property {Position} start
 * @property {Position} end
 */

var Location = function Location(source, start, end) {
  this.source = source;
  this.start = start;
  this.end = end;
};

module.exports = Location;

/***/ }),

/***/ 7592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expr = __webpack_require__(1530);

var KIND = "lookup";
/**
 * Lookup on an offset in the specified object
 * @constructor Lookup
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} what
 * @property {Expression} offset
 */

module.exports = Expr["extends"](KIND, function Lookup(kind, what, offset, docs, location) {
  Expr.apply(this, [kind || KIND, docs, location]);
  this.what = what;
  this.offset = offset;
});

/***/ }),

/***/ 679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Literal = __webpack_require__(6602);

var KIND = "magic";
/**
 * Defines magic constant
 * @constructor Magic
 * @memberOf module:php-parser
 * @extends {Literal}
 */

module.exports = Literal["extends"](KIND, function Magic(value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
});

/***/ }),

/***/ 3110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Function_ = __webpack_require__(1057);

var KIND = "method";
/**
 * Defines a class/interface/trait method
 * @constructor Method
 * @memberOf module:php-parser
 * @extends {Function}
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 * @property {boolean} isStatic
 * @property {string} visibility
 */

module.exports = Function_["extends"](KIND, function Method() {
  Function_.apply(this, arguments);
  this.kind = KIND;
});

/***/ }),

/***/ 3174:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Reference = __webpack_require__(1211);

var KIND = "name";
/**
 * Defines a class reference node
 * @constructor Name
 * @memberOf module:php-parser
 * @extends {Reference}
 * @property {string} name
 * @property {string} resolution
 */

var Name = Reference["extends"](KIND, function Name(name, isRelative, docs, location) {
  Reference.apply(this, [KIND, docs, location]);

  if (isRelative) {
    this.resolution = Name.RELATIVE_NAME;
  } else if (name.length === 1) {
    this.resolution = Name.UNQUALIFIED_NAME;
  } else if (!name[0]) {
    this.resolution = Name.FULL_QUALIFIED_NAME;
  } else {
    this.resolution = Name.QUALIFIED_NAME;
  }

  this.name = name.join("\\");
});
/**
 * This is an identifier without a namespace separator, such as Foo
 * @constant {String} Name#UNQUALIFIED_NAME
 * @memberOf module:php-parser
 */

Name.UNQUALIFIED_NAME = "uqn";
/**
 * This is an identifier with a namespace separator, such as Foo\Bar
 * @constant {String} Name#QUALIFIED_NAME
 * @memberOf module:php-parser
 */

Name.QUALIFIED_NAME = "qn";
/**
 * This is an identifier with a namespace separator that begins with
 * a namespace separator, such as \Foo\Bar. The namespace \Foo is also
 * a fully qualified name.
 * @constant {String} Name#FULL_QUALIFIED_NAME
 * @memberOf module:php-parser
 */

Name.FULL_QUALIFIED_NAME = "fqn";
/**
 * This is an identifier starting with namespace, such as namespace\Foo\Bar.
 * @constant {String} Name#RELATIVE_NAME
 * @memberOf module:php-parser
 */

Name.RELATIVE_NAME = "rn";
module.exports = Name;

/***/ }),

/***/ 8356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Block = __webpack_require__(2325);

var KIND = "namespace";
/**
 * The main program node
 * @constructor Namespace
 * @memberOf module:php-parser
 * @extends {Block}
 * @property {string} name
 * @property {boolean} withBrackets
 */

module.exports = Block["extends"](KIND, function Namespace(name, children, withBrackets, docs, location) {
  Block.apply(this, [KIND, children, docs, location]);
  this.name = name;
  this.withBrackets = withBrackets || false;
});

/***/ }),

/***/ 3725:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "new";
/**
 * Creates a new instance of the specified class
 * @constructor New
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Identifier|Variable|Class} what
 * @property {Variable[]} arguments
 */

module.exports = Expression["extends"](KIND, function New(what, args, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.what = what;
  this.arguments = args;
});

/***/ }),

/***/ 2730:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * A generic AST node
 * @constructor Node
 * @memberOf module:php-parser
 * @property {Location|null} loc
 * @property {CommentBlock[]|Comment[]|null} leadingComments
 * @property {CommentBlock[]|Comment[]|null} trailingComments
 * @property {string} kind
 */

var Node = function Node(kind, docs, location) {
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
 * @function Node#setTrailingComments
 * @memberOf module:php-parser
 * @param {*} docs
 */


Node.prototype.setTrailingComments = function (docs) {
  this.trailingComments = docs;
};
/**
 * Destroying an unused node
 * @function Node#destroy
 * @memberOf module:php-parser
 */


Node.prototype.destroy = function (node) {
  if (!node) {
    throw new Error("Node already initialized, you must swap with another node");
  }

  if (this.leadingComments) {
    if (node.leadingComments) {
      node.leadingComments = Array.concat(this.leadingComments, node.leadingComments);
    } else {
      node.leadingComments = this.leadingComments;
    }
  }

  if (this.trailingComments) {
    if (node.trailingComments) {
      node.trailingComments = Array.concat(this.trailingComments, node.trailingComments);
    } else {
      node.trailingComments = this.trailingComments;
    }
  }

  return node;
};
/**
 * Includes current token position of the parser
 * @function Node#includeToken
 * @memberOf module:php-parser
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
      this.loc.source = parser.lexer._input.substring(this.loc.start.offset, parser.lexer.offset);
    }
  }

  return this;
};
/**
 * Helper for extending the Node class
 * @function Node.extends
 * @memberOf module:php-parser
 * @param {string} type
 * @param {Function} constructor
 * @return {Function}
 */


Node["extends"] = function (type, constructor) {
  constructor.prototype = Object.create(this.prototype);
  constructor["extends"] = this["extends"];
  constructor.prototype.constructor = constructor;
  constructor.kind = type;
  return constructor;
};

module.exports = Node;

/***/ }),

/***/ 2450:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "noop";
/**
 * Ignore this node, it implies a no operation block, for example :
 * [$foo, $bar, /* here a noop node * /]
 * @constructor Noop
 * @memberOf module:php-parser
 * @extends {Node}
 */

module.exports = Node["extends"](KIND, function Noop(docs, location) {
  Node.apply(this, [KIND, docs, location]);
});

/***/ }),

/***/ 1358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Literal = __webpack_require__(6602);

var KIND = "nowdoc";
/**
 * Defines a nowdoc string
 * @constructor NowDoc
 * @memberOf module:php-parser
 * @extends {Literal}
 * @property {string} label
 * @property {string} raw
 */

module.exports = Literal["extends"](KIND, function Nowdoc(value, raw, label, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
  this.label = label;
});

/***/ }),

/***/ 8588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "nullkeyword";
/**
 * Represents the null keyword
 * @constructor NullKeyword
 * @memberOf module:php-parser
 * @extends {Node}
 */

module.exports = Node["extends"](KIND, function NullKeyword(raw, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.raw = raw;
});

/***/ }),

/***/ 1480:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Literal = __webpack_require__(6602);

var KIND = "number";
/**
 * Defines a numeric value
 * @constructor Number
 * @memberOf module:php-parser
 * @extends {Literal}
 */

module.exports = Literal["extends"](KIND, function Number(value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
});

/***/ }),

/***/ 368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Lookup = __webpack_require__(7592);

var KIND = "offsetlookup";
/**
 * Lookup on an offset in an array
 * @constructor OffsetLookup
 * @memberOf module:php-parser
 * @extends {Lookup}
 */

module.exports = Lookup["extends"](KIND, function OffsetLookup(what, offset, docs, location) {
  Lookup.apply(this, [KIND, what, offset, docs, location]);
});

/***/ }),

/***/ 6210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expr = __webpack_require__(1530);

var KIND = "operation";
/**
 * Defines binary operations
 * @constructor Operation
 * @memberOf module:php-parser
 * @extends {Expression}
 */

module.exports = Expr["extends"](KIND, function Operation(kind, docs, location) {
  Expr.apply(this, [kind || KIND, docs, location]);
});

/***/ }),

/***/ 9281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Declaration = __webpack_require__(9036);

var KIND = "parameter";
/**
 * Defines a function parameter
 * @constructor Parameter
 * @memberOf module:php-parser
 * @extends {Declaration}
 * @property {Identifier|null} type
 * @property {Node|null} value
 * @property {boolean} byref
 * @property {boolean} variadic
 * @property {boolean} nullable
 */

module.exports = Declaration["extends"](KIND, function Parameter(name, type, value, isRef, isVariadic, nullable, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.value = value;
  this.type = type;
  this.byref = isRef;
  this.variadic = isVariadic;
  this.nullable = nullable;
});

/***/ }),

/***/ 1771:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Reference = __webpack_require__(1211);

var KIND = "parentreference";
/**
 * Defines a class reference node
 * @constructor ParentReference
 * @memberOf module:php-parser
 * @extends {Reference}
 */

var ParentReference = Reference["extends"](KIND, function ParentReference(raw, docs, location) {
  Reference.apply(this, [KIND, docs, location]);
  this.raw = raw;
});
module.exports = ParentReference;

/***/ }),

/***/ 7724:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * Each Position object consists of a line number (1-indexed) and a column number (0-indexed):
 * @constructor Position
 * @memberOf module:php-parser
 * @property {number} line
 * @property {number} column
 * @property {number} offset
 */

var Position = function Position(line, column, offset) {
  this.line = line;
  this.column = column;
  this.offset = offset;
};

module.exports = Position;

/***/ }),

/***/ 8377:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Operation = __webpack_require__(6210);

var KIND = "post";
/**
 * Defines a post operation `$i++` or `$i--`
 * @constructor Post
 * @memberOf module:php-parser
 * @extends {Operation}
 * @property {String} type
 * @property {Variable} what
 */

module.exports = Operation["extends"](KIND, function Post(type, what, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.what = what;
});

/***/ }),

/***/ 5003:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Operation = __webpack_require__(6210);

var KIND = "pre";
/**
 * Defines a pre operation `++$i` or `--$i`
 * @constructor Pre
 * @memberOf module:php-parser
 * @extends {Operation}
 * @property {String} type
 * @property {Variable} what
 */

module.exports = Operation["extends"](KIND, function Pre(type, what, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.what = what;
});

/***/ }),

/***/ 6340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "print";
/**
 * Outputs
 * @constructor Print
 * @memberOf module:php-parser
 * @extends {Expression}
 */

module.exports = Expression["extends"](KIND, function Print(expression, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.expression = expression;
});

/***/ }),

/***/ 1558:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Block = __webpack_require__(2325);

var KIND = "program";
/**
 * The main program node
 * @constructor Program
 * @memberOf module:php-parser
 * @extends {Block}
 * @property {Error[]} errors
 * @property {Comment[]|null} comments
 * @property {String[]|null} tokens
 */

module.exports = Block["extends"](KIND, function Program(children, errors, comments, tokens, docs, location) {
  Block.apply(this, [KIND, children, docs, location]);
  this.errors = errors;

  if (comments) {
    this.comments = comments;
  }

  if (tokens) {
    this.tokens = tokens;
  }
});

/***/ }),

/***/ 3429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "property";
/**
 * Defines a class property
 * @constructor Property
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {string} name
 * @property {Node|null} value
 * @property {boolean} nullable
 * @property {Identifier|Array<Identifier>|null} type
 */

module.exports = Statement["extends"](KIND, function Property(name, value, nullable, type, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.name = name;
  this.value = value;
  this.nullable = nullable;
  this.type = type;
});

/***/ }),

/***/ 6966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Lookup = __webpack_require__(7592);

var KIND = "propertylookup";
/**
 * Lookup to an object property
 * @constructor PropertyLookup
 * @memberOf module:php-parser
 * @extends {Lookup}
 */

module.exports = Lookup["extends"](KIND, function PropertyLookup(what, offset, docs, location) {
  Lookup.apply(this, [KIND, what, offset, docs, location]);
});

/***/ }),

/***/ 2037:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "propertystatement";
var IS_UNDEFINED = "";
var IS_PUBLIC = "public";
var IS_PROTECTED = "protected";
var IS_PRIVATE = "private";
/**
 * Declares a properties into the current scope
 * @constructor PropertyStatement
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Property[]} properties
 */

var PropertyStatement = Statement["extends"](KIND, function PropertyStatement(kind, properties, flags, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.properties = properties;
  this.parseFlags(flags);
});
/**
 * Generic flags parser
 * @function PropertyStatement#parseFlags
 * @memberOf module:php-parser
 * @param {Array<number|null>} flags
 * @return {void}
 */

PropertyStatement.prototype.parseFlags = function (flags) {
  if (flags[0] === -1) {
    this.visibility = IS_UNDEFINED;
  } else if (flags[0] === null) {
    this.visibility = null;
  } else if (flags[0] === 0) {
    this.visibility = IS_PUBLIC;
  } else if (flags[0] === 1) {
    this.visibility = IS_PROTECTED;
  } else if (flags[0] === 2) {
    this.visibility = IS_PRIVATE;
  }

  this.isStatic = flags[1] === 1;
};

module.exports = PropertyStatement;

/***/ }),

/***/ 1211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "reference";
/**
 * Defines a reference node
 * @constructor Reference
 * @memberOf module:php-parser
 * @extends {Node}
 */

var Reference = Node["extends"](KIND, function Reference(kind, docs, location) {
  Node.apply(this, [kind || KIND, docs, location]);
});
module.exports = Reference;

/***/ }),

/***/ 4847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "retif";
/**
 * Defines a short if statement that returns a value
 * @constructor RetIf
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} test
 * @property {Expression} trueExpr
 * @property {Expression} falseExpr
 */

module.exports = Expression["extends"](KIND, function RetIf(test, trueExpr, falseExpr, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.test = test;
  this.trueExpr = trueExpr;
  this.falseExpr = falseExpr;
});

/***/ }),

/***/ 619:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "return";
/**
 * A continue statement
 * @constructor Return
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression|null} expr
 */

module.exports = Statement["extends"](KIND, function Return(expr, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.expr = expr;
});

/***/ }),

/***/ 5182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Reference = __webpack_require__(1211);

var KIND = "selfreference";
/**
 * Defines a class reference node
 * @constructor SelfReference
 * @memberOf module:php-parser
 * @extends {Reference}
 */

var SelfReference = Reference["extends"](KIND, function SelfReference(raw, docs, location) {
  Reference.apply(this, [KIND, docs, location]);
  this.raw = raw;
});
module.exports = SelfReference;

/***/ }),

/***/ 7228:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "silent";
/**
 * Avoids to show/log warnings & notices from the inner expression
 * @constructor Silent
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} expr
 */

module.exports = Expression["extends"](KIND, function Silent(expr, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.expr = expr;
});

/***/ }),

/***/ 2898:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "statement";
/**
 * Any statement.
 * @constructor Statement
 * @memberOf module:php-parser
 * @extends {Node}
 */

module.exports = Node["extends"](KIND, function Statement(kind, docs, location) {
  Node.apply(this, [kind || KIND, docs, location]);
});

/***/ }),

/***/ 5037:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "static";
/**
 * Declares a static variable into the current scope
 * @constructor Static
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {StaticVariable[]} variables
 */

module.exports = Statement["extends"](KIND, function Static(variables, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.variables = variables;
});

/***/ }),

/***/ 8409:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Lookup = __webpack_require__(7592);

var KIND = "staticlookup";
/**
 * Lookup to a static property
 * @constructor StaticLookup
 * @memberOf module:php-parser
 * @extends {Lookup}
 */

module.exports = Lookup["extends"](KIND, function StaticLookup(what, offset, docs, location) {
  Lookup.apply(this, [KIND, what, offset, docs, location]);
});

/***/ }),

/***/ 2941:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Reference = __webpack_require__(1211);

var KIND = "staticreference";
/**
 * Defines a class reference node
 * @constructor StaticReference
 * @memberOf module:php-parser
 * @extends {Reference}
 */

var StaticReference = Reference["extends"](KIND, function StaticReference(raw, docs, location) {
  Reference.apply(this, [KIND, docs, location]);
  this.raw = raw;
});
module.exports = StaticReference;

/***/ }),

/***/ 9732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "staticvariable";
/**
 * Defines a constant
 * @constructor StaticVariable
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {Variable} variable
 * @property {Node|string|number|boolean|null} defaultValue
 */

module.exports = Node["extends"](KIND, function StaticVariable(variable, defaultValue, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.variable = variable;
  this.defaultValue = defaultValue;
});

/***/ }),

/***/ 7129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Literal = __webpack_require__(6602);

var KIND = "string";
/**
 * Defines a string (simple or double quoted) - chars are already escaped
 * @constructor String
 * @memberOf module:php-parser
 * @extends {Literal}
 * @property {boolean} unicode
 * @property {boolean} isDoubleQuote
 * @see {Encapsed}
 */

module.exports = Literal["extends"](KIND, function String(isDoubleQuote, value, unicode, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
  this.unicode = unicode;
  this.isDoubleQuote = isDoubleQuote;
});

/***/ }),

/***/ 2589:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "switch";
/**
 * Defines a switch statement
 * @constructor Switch
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression} test
 * @property {Block} body
 * @property {boolean} shortForm
 */

module.exports = Statement["extends"](KIND, function Switch(test, body, shortForm, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
  this.shortForm = shortForm;
});

/***/ }),

/***/ 5228:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "throw";
/**
 * Defines a throw statement
 * @constructor Throw
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression} what
 */

module.exports = Statement["extends"](KIND, function Throw(what, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.what = what;
});

/***/ }),

/***/ 2523:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Declaration = __webpack_require__(9036);

var KIND = "trait";
/**
 * A trait definition
 * @constructor Trait
 * @memberOf module:php-parser
 * @extends {Declaration}
 * @property {Declaration[]} body
 */

module.exports = Declaration["extends"](KIND, function Trait(name, body, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.body = body;
});

/***/ }),

/***/ 8084:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "traitalias";
var IS_UNDEFINED = "";
var IS_PUBLIC = "public";
var IS_PROTECTED = "protected";
var IS_PRIVATE = "private";
/**
 * Defines a trait alias
 * @constructor TraitAlias
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {Identifier|null} trait
 * @property {Identifier} method
 * @property {Identifier|null} as
 * @property {string|null} visibility
 */

module.exports = Node["extends"](KIND, function TraitAlias(trait, method, as, flags, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.trait = trait;
  this.method = method;
  this.as = as;
  this.visibility = IS_UNDEFINED;

  if (flags) {
    if (flags[0] === 0) {
      this.visibility = IS_PUBLIC;
    } else if (flags[0] === 1) {
      this.visibility = IS_PROTECTED;
    } else if (flags[0] === 2) {
      this.visibility = IS_PRIVATE;
    }
  }
});

/***/ }),

/***/ 4398:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "traitprecedence";
/**
 * Defines a trait alias
 * @constructor TraitPrecedence
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {Identifier|null} trait
 * @property {Identifier} method
 * @property {Identifier[]} instead
 */

module.exports = Node["extends"](KIND, function TraitPrecedence(trait, method, instead, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.trait = trait;
  this.method = method;
  this.instead = instead;
});

/***/ }),

/***/ 3181:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Node = __webpack_require__(2730);

var KIND = "traituse";
/**
 * Defines a trait usage
 * @constructor TraitUse
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {Identifier[]} traits
 * @property {Node[]|null} adaptations
 */

module.exports = Node["extends"](KIND, function TraitUse(traits, adaptations, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.traits = traits;
  this.adaptations = adaptations;
});

/***/ }),

/***/ 8466:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "try";
/**
 * Defines a try statement
 * @constructor Try
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Block} body
 * @property {Catch[]} catches
 * @property {Block} always
 */

module.exports = Statement["extends"](KIND, function Try(body, catches, always, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.body = body;
  this.catches = catches;
  this.always = always;
});

/***/ }),

/***/ 8062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Reference = __webpack_require__(1211);

var KIND = "typereference";
/**
 * Defines a class reference node
 * @constructor TypeReference
 * @memberOf module:php-parser
 * @extends {Reference}
 * @property {string} name
 */

var TypeReference = Reference["extends"](KIND, function TypeReference(name, raw, docs, location) {
  Reference.apply(this, [KIND, docs, location]);
  this.name = name;
  this.raw = raw;
});
TypeReference.types = ["int", "float", "string", "bool", "object", "array", "callable", "iterable", "void"];
module.exports = TypeReference;

/***/ }),

/***/ 6178:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Operation = __webpack_require__(6210);

var KIND = "unary";
/**
 * Unary operations
 * @constructor Unary
 * @memberOf module:php-parser
 * @extends {Operation}
 * @property {string} type
 * @property {Expression} what
 */

module.exports = Operation["extends"](KIND, function Unary(type, what, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.what = what;
});

/***/ }),

/***/ 2379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "unset";
/**
 * Deletes references to a list of variables
 * @constructor Unset
 * @memberOf module:php-parser
 * @extends {Statement}
 */

module.exports = Statement["extends"](KIND, function Unset(variables, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.variables = variables;
});

/***/ }),

/***/ 3693:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "usegroup";
/**
 * Defines a use statement (with a list of use items)
 * @constructor UseGroup
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {string|null} name
 * @property {string|null} type - Possible value : function, const
 * @property {UseItem[]} item
 * @see {Namespace}
 * @see http://php.net/manual/en/language.namespaces.importing.php
 */

module.exports = Statement["extends"](KIND, function UseGroup(name, type, items, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.name = name;
  this.type = type;
  this.items = items;
});

/***/ }),

/***/ 7880:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "useitem";
/**
 * Defines a use statement (from namespace)
 * @constructor UseItem
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {string} name
 * @property {string|null} type - Possible value : function, const
 * @property {Identifier|null} alias
 * @see {Namespace}
 * @see http://php.net/manual/en/language.namespaces.importing.php
 */

var UseItem = Statement["extends"](KIND, function UseItem(name, alias, type, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.name = name;
  this.alias = alias;
  this.type = type;
});
/**
 * Importing a constant
 * @constant {string} UseItem#TYPE_CONST
 * @memberOf module:php-parser
 */

UseItem.TYPE_CONST = "const";
/**
 * Importing a function
 * @constant {string} UseItem#TYPE_FUNC
 * @memberOf module:php-parser
 */

UseItem.TYPE_FUNCTION = "function";
module.exports = UseItem;

/***/ }),

/***/ 6520:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "variable";
/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 * @constructor Variable
 * @memberOf module:php-parser
 * @extends {Expression}
 * @example
 * // PHP code :
 * $foo
 * // AST output
 * {
 *  "kind": "variable",
 *  "name": "foo",
 *  "curly": false
 * }
 * @property {string|Node} name The variable name (can be a complex expression when the name is resolved dynamically)
 * @property {boolean} curly Indicate if the name is defined between curlies, ex `${foo}`
 */

module.exports = Expression["extends"](KIND, function Variable(name, curly, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.name = name;
  this.curly = curly || false;
});

/***/ }),

/***/ 3656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "variadic";
/**
 * Introduce a list of items into the arguments of the call
 * @constructor Variadic
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Array|Expression} what
 * @see https://wiki.php.net/rfc/argument_unpacking
 */

module.exports = Expression["extends"](KIND, function variadic(what, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.what = what;
});

/***/ }),

/***/ 41:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Statement = __webpack_require__(2898);

var KIND = "while";
/**
 * Defines a while statement
 * @constructor While
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression} test
 * @property {Statement} body
 * @property {boolean} shortForm
 */

module.exports = Statement["extends"](KIND, function While(test, body, shortForm, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
  this.shortForm = shortForm;
});

/***/ }),

/***/ 288:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "yield";
/**
 * Defines a yield generator statement
 * @constructor Yield
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression|null} value
 * @property {Expression|null} key
 * @see http://php.net/manual/en/language.generators.syntax.php
 */

module.exports = Expression["extends"](KIND, function Yield(value, key, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.value = value;
  this.key = key;
});

/***/ }),

/***/ 8789:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var Expression = __webpack_require__(1530);

var KIND = "yieldfrom";
/**
 * Defines a yield from generator statement
 * @constructor YieldFrom
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} value
 * @see http://php.net/manual/en/language.generators.syntax.php
 */

module.exports = Expression["extends"](KIND, function YieldFrom(value, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.value = value;
});

/***/ }),

/***/ 1427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2020 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var lexer = __webpack_require__(8720);

var parser = __webpack_require__(8410);

var tokens = __webpack_require__(6455);

var AST = __webpack_require__(555);
/**
 * @private
 */


function combine(src, to) {
  var keys = Object.keys(src);
  var i = keys.length;

  while (i--) {
    var k = keys[i];
    var val = src[k];

    if (val === null) {
      delete to[k];
    } else if (typeof val === "function") {
      to[k] = val.bind(to);
    } else if (Array.isArray(val)) {
      to[k] = Array.isArray(to[k]) ? to[k].concat(val) : val;
    } else if (_typeof(val) === "object") {
      to[k] = _typeof(to[k]) === "object" ? combine(val, to[k]) : val;
    } else {
      to[k] = val;
    }
  }

  return to;
}
/**
 * Initialise a new parser instance with the specified options
 *
 * @class
 * @memberOf module:php-parser
 * @tutorial Engine
 * @example
 * var parser = require('php-parser');
 * var instance = new parser({
 *   parser: {
 *     extractDoc: true,
 *     suppressErrors: true,
 *     version: 704 // or '7.4'
 *   },
 *   ast: {
 *     withPositions: true
 *   },
 *   lexer: {
 *     short_tags: true,
 *     asp_tags: true
 *   }
 * });
 *
 * var evalAST = instance.parseEval('some php code');
 * var codeAST = instance.parseCode('<?php some php code', 'foo.php');
 * var tokens = instance.tokenGetAll('<?php some php code');
 *
 * @param {Object} options - List of options
 * @property {Lexer} lexer
 * @property {Parser} parser
 * @property {AST} ast
 * @property {Object} tokens
 */


var Engine = function Engine(options) {
  if (typeof this === "function") {
    return new this(options);
  }

  this.tokens = tokens;
  this.lexer = new lexer(this);
  this.ast = new AST();
  this.parser = new parser(this.lexer, this.ast);

  if (options && _typeof(options) === "object") {
    // disable php7 from lexer if already disabled from parser
    if (options.parser) {
      if (!options.lexer) {
        options.lexer = {};
      }

      if (options.parser.version) {
        if (typeof options.parser.version === "string") {
          var version = options.parser.version.split(".");
          version = parseInt(version[0]) * 100 + parseInt(version[1]);

          if (isNaN(version)) {
            throw new Error("Bad version number : " + options.parser.version);
          } else {
            options.parser.version = version;
          }
        } else if (typeof options.parser.version !== "number") {
          throw new Error("Expecting a number for version");
        }

        if (options.parser.version < 500 || options.parser.version > 704) {
          throw new Error("Can only handle versions between 5.x to 7.x");
        }
      }
    }

    combine(options, this); // same version flags based on parser options

    this.lexer.version = this.parser.version;
  }
};
/**
 * Check if the inpyt is a buffer or a string
 * @private
 * @param  {Buffer|String} buffer Input value that can be either a buffer or a string
 * @return {String}   Returns the string from input
 */


var getStringBuffer = function getStringBuffer(buffer) {
  return typeof buffer.write === "function" ? buffer.toString() : buffer;
};
/**
 * Creates a new instance (Helper)
 * @param {Object} options
 * @return {Engine}
 * @private
 */


Engine.create = function (options) {
  return new Engine(options);
};
/**
 * Evaluate the buffer
 * @private
 */


Engine.parseEval = function (buffer, options) {
  var self = new Engine(options);
  return self.parseEval(buffer);
};
/**
 * Parse an evaluating mode string (no need to open php tags)
 * @param {String} buffer
 * @return {Program}
 */


Engine.prototype.parseEval = function (buffer) {
  this.lexer.mode_eval = true;
  this.lexer.all_tokens = false;
  buffer = getStringBuffer(buffer);
  return this.parser.parse(buffer, "eval");
};
/**
 * Static function that parse a php code with open/close tags
 * @private
 */


Engine.parseCode = function (buffer, filename, options) {
  if (_typeof(filename) === "object" && !options) {
    // retro-compatibility
    options = filename;
    filename = "unknown";
  }

  var self = new Engine(options);
  return self.parseCode(buffer, filename);
};
/**
 * Function that parse a php code with open/close tags
 *
 * Sample code :
 * ```php
 * <?php $x = 1;
 * ```
 *
 * Usage :
 * ```js
 * var parser = require('php-parser');
 * var phpParser = new parser({
 *   // some options
 * });
 * var ast = phpParser.parseCode('...php code...', 'foo.php');
 * ```
 * @param {String} buffer - The code to be parsed
 * @param {String} filename - Filename
 * @return {Program}
 */


Engine.prototype.parseCode = function (buffer, filename) {
  this.lexer.mode_eval = false;
  this.lexer.all_tokens = false;
  buffer = getStringBuffer(buffer);
  return this.parser.parse(buffer, filename);
};
/**
 * Split the buffer into tokens
 * @private
 */


Engine.tokenGetAll = function (buffer, options) {
  var self = new Engine(options);
  return self.tokenGetAll(buffer);
};
/**
 * Extract tokens from the specified buffer.
 * > Note that the output tokens are *STRICLY* similar to PHP function `token_get_all`
 * @param {String} buffer
 * @return {String[]} - Each item can be a string or an array with following informations [token_name, text, line_number]
 */


Engine.prototype.tokenGetAll = function (buffer) {
  this.lexer.mode_eval = false;
  this.lexer.all_tokens = true;
  buffer = getStringBuffer(buffer);
  var EOF = this.lexer.EOF;
  var names = this.tokens.values;
  this.lexer.setInput(buffer);
  var token = this.lexer.lex() || EOF;
  var result = [];

  while (token != EOF) {
    var entry = this.lexer.yytext;

    if (names.hasOwnProperty(token)) {
      entry = [names[token], entry, this.lexer.yylloc.first_line];
    }

    result.push(entry);
    token = this.lexer.lex() || EOF;
  }

  return result;
};
/** @module php-parser */
// exports the function


module.exports = Engine; // makes libraries public

module.exports.tokens = tokens;
module.exports.lexer = lexer;
module.exports.AST = AST;
module.exports.parser = parser;
module.exports.combine = combine;
module.exports.Engine = Engine; // allow the default export in index.d.ts

module.exports.default = Engine;

/***/ }),

/***/ 8720:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * This is the php lexer. It will tokenize the string for helping the
 * parser to build the AST from its grammar.
 *
 * @constructor Lexer
 * @memberOf module:php-parser
 * @property {number} EOF
 * @property {boolean} all_tokens defines if all tokens must be retrieved (used by token_get_all only)
 * @property {boolean} comment_tokens extracts comments tokens
 * @property {boolean} mode_eval enables the evald mode (ignore opening tags)
 * @property {boolean} asp_tags disables by default asp tags mode
 * @property {boolean} short_tags enables by default short tags mode
 * @property {object} keywords List of php keyword
 * @property {object} castKeywords List of php keywords for type casting
 */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Lexer = function Lexer(engine) {
  this.engine = engine;
  this.tok = this.engine.tokens.names;
  this.EOF = 1;
  this.debug = false;
  this.all_tokens = true;
  this.comment_tokens = false;
  this.mode_eval = false;
  this.asp_tags = false;
  this.short_tags = false;
  this.version = 704;
  this.yyprevcol = 0;
  this.keywords = {
    __class__: this.tok.T_CLASS_C,
    __trait__: this.tok.T_TRAIT_C,
    __function__: this.tok.T_FUNC_C,
    __method__: this.tok.T_METHOD_C,
    __line__: this.tok.T_LINE,
    __file__: this.tok.T_FILE,
    __dir__: this.tok.T_DIR,
    __namespace__: this.tok.T_NS_C,
    exit: this.tok.T_EXIT,
    die: this.tok.T_EXIT,
    "function": this.tok.T_FUNCTION,
    "const": this.tok.T_CONST,
    "return": this.tok.T_RETURN,
    "try": this.tok.T_TRY,
    "catch": this.tok.T_CATCH,
    "finally": this.tok.T_FINALLY,
    "throw": this.tok.T_THROW,
    "if": this.tok.T_IF,
    elseif: this.tok.T_ELSEIF,
    endif: this.tok.T_ENDIF,
    "else": this.tok.T_ELSE,
    "while": this.tok.T_WHILE,
    endwhile: this.tok.T_ENDWHILE,
    "do": this.tok.T_DO,
    "for": this.tok.T_FOR,
    endfor: this.tok.T_ENDFOR,
    foreach: this.tok.T_FOREACH,
    endforeach: this.tok.T_ENDFOREACH,
    declare: this.tok.T_DECLARE,
    enddeclare: this.tok.T_ENDDECLARE,
    "instanceof": this.tok.T_INSTANCEOF,
    as: this.tok.T_AS,
    "switch": this.tok.T_SWITCH,
    endswitch: this.tok.T_ENDSWITCH,
    "case": this.tok.T_CASE,
    "default": this.tok.T_DEFAULT,
    "break": this.tok.T_BREAK,
    "continue": this.tok.T_CONTINUE,
    "goto": this.tok.T_GOTO,
    echo: this.tok.T_ECHO,
    print: this.tok.T_PRINT,
    "class": this.tok.T_CLASS,
    "interface": this.tok.T_INTERFACE,
    trait: this.tok.T_TRAIT,
    "extends": this.tok.T_EXTENDS,
    "implements": this.tok.T_IMPLEMENTS,
    "new": this.tok.T_NEW,
    clone: this.tok.T_CLONE,
    "var": this.tok.T_VAR,
    eval: this.tok.T_EVAL,
    include: this.tok.T_INCLUDE,
    include_once: this.tok.T_INCLUDE_ONCE,
    require: this.tok.T_REQUIRE,
    require_once: this.tok.T_REQUIRE_ONCE,
    namespace: this.tok.T_NAMESPACE,
    use: this.tok.T_USE,
    insteadof: this.tok.T_INSTEADOF,
    global: this.tok.T_GLOBAL,
    isset: this.tok.T_ISSET,
    empty: this.tok.T_EMPTY,
    __halt_compiler: this.tok.T_HALT_COMPILER,
    "static": this.tok.T_STATIC,
    "abstract": this.tok.T_ABSTRACT,
    "final": this.tok.T_FINAL,
    "private": this.tok.T_PRIVATE,
    "protected": this.tok.T_PROTECTED,
    "public": this.tok.T_PUBLIC,
    unset: this.tok.T_UNSET,
    list: this.tok.T_LIST,
    array: this.tok.T_ARRAY,
    callable: this.tok.T_CALLABLE,
    or: this.tok.T_LOGICAL_OR,
    and: this.tok.T_LOGICAL_AND,
    xor: this.tok.T_LOGICAL_XOR
  };
  this.castKeywords = {
    "int": this.tok.T_INT_CAST,
    integer: this.tok.T_INT_CAST,
    real: this.tok.T_DOUBLE_CAST,
    "double": this.tok.T_DOUBLE_CAST,
    "float": this.tok.T_DOUBLE_CAST,
    string: this.tok.T_STRING_CAST,
    binary: this.tok.T_STRING_CAST,
    array: this.tok.T_ARRAY_CAST,
    object: this.tok.T_OBJECT_CAST,
    bool: this.tok.T_BOOL_CAST,
    "boolean": this.tok.T_BOOL_CAST,
    unset: this.tok.T_UNSET_CAST
  };
};
/**
 * Initialize the lexer with the specified input
 * @function Lexer#setInput
 * @memberOf module:php-parser
 */


Lexer.prototype.setInput = function (input) {
  this._input = input;
  this.size = input.length;
  this.yylineno = 1;
  this.offset = 0;
  this.yyprevcol = 0;
  this.yytext = "";
  this.yylloc = {
    first_offset: 0,
    first_line: 1,
    first_column: 0,
    prev_offset: 0,
    prev_line: 1,
    prev_column: 0,
    last_line: 1,
    last_column: 0
  };
  this.tokens = [];

  if (this.version > 703) {
    this.keywords.fn = this.tok.T_FN;
  } else {
    delete this.keywords.fn;
  }

  this.done = this.offset >= this.size;

  if (!this.all_tokens && this.mode_eval) {
    this.conditionStack = ["INITIAL"];
    this.begin("ST_IN_SCRIPTING");
  } else {
    this.conditionStack = [];
    this.begin("INITIAL");
  } // https://github.com/php/php-src/blob/999e32b65a8a4bb59e27e538fa68ffae4b99d863/Zend/zend_language_scanner.h#L59
  // Used for heredoc and nowdoc


  this.heredoc_label = {
    label: "",
    length: 0,
    indentation: 0,
    indentation_uses_spaces: false,
    finished: false,

    /*
     * this used for parser to detemine the if current node segment is first encaps node.
     * if ture, the indentation will remove from the begining. and if false, the prev node
     * might be a variable '}' ,and the leading spaces should not be removed util meet the
     * first \n
     */
    first_encaps_node: false,
    // for backward compatible
    toString: function toString() {
      this.label;
    }
  };
  return this;
};
/**
 * consumes and returns one char from the input
 * @function Lexer#input
 * @memberOf module:php-parser
 */


Lexer.prototype.input = function () {
  var ch = this._input[this.offset];
  if (!ch) return "";
  this.yytext += ch;
  this.offset++;

  if (ch === "\r" && this._input[this.offset] === "\n") {
    this.yytext += "\n";
    this.offset++;
  }

  if (ch === "\n" || ch === "\r") {
    this.yylloc.last_line = ++this.yylineno;
    this.yyprevcol = this.yylloc.last_column;
    this.yylloc.last_column = 0;
  } else {
    this.yylloc.last_column++;
  }

  return ch;
};
/**
 * revert eating specified size
 * @function Lexer#unput
 * @memberOf module:php-parser
 */


Lexer.prototype.unput = function (size) {
  if (size === 1) {
    // 1 char unput (most cases)
    this.offset--;

    if (this._input[this.offset] === "\n" && this._input[this.offset - 1] === "\r") {
      this.offset--;
      size++;
    }

    if (this._input[this.offset] === "\r" || this._input[this.offset] === "\n") {
      this.yylloc.last_line--;
      this.yylineno--;
      this.yylloc.last_column = this.yyprevcol;
    } else {
      this.yylloc.last_column--;
    }

    this.yytext = this.yytext.substring(0, this.yytext.length - size);
  } else if (size > 0) {
    this.offset -= size;

    if (size < this.yytext.length) {
      this.yytext = this.yytext.substring(0, this.yytext.length - size); // re-calculate position

      this.yylloc.last_line = this.yylloc.first_line;
      this.yylloc.last_column = this.yyprevcol = this.yylloc.first_column;

      for (var i = 0; i < this.yytext.length; i++) {
        var c = this.yytext[i];

        if (c === "\r") {
          c = this.yytext[++i];
          this.yyprevcol = this.yylloc.last_column;
          this.yylloc.last_line++;
          this.yylloc.last_column = 0;

          if (c !== "\n") {
            if (c === "\r") {
              this.yylloc.last_line++;
            } else {
              this.yylloc.last_column++;
            }
          }
        } else if (c === "\n") {
          this.yyprevcol = this.yylloc.last_column;
          this.yylloc.last_line++;
          this.yylloc.last_column = 0;
        } else {
          this.yylloc.last_column++;
        }
      }

      this.yylineno = this.yylloc.last_line;
    } else {
      // reset full text
      this.yytext = "";
      this.yylloc.last_line = this.yylineno = this.yylloc.first_line;
      this.yylloc.last_column = this.yylloc.first_column;
    }
  }

  return this;
};
/**
 * check if the text matches
 * @function Lexer#tryMatch
 * @memberOf module:php-parser
 * @param {string} text
 * @returns {boolean}
 */


Lexer.prototype.tryMatch = function (text) {
  return text === this.ahead(text.length);
};
/**
 * check if the text matches
 * @function Lexer#tryMatchCaseless
 * @memberOf module:php-parser
 * @param {string} text
 * @returns {boolean}
 */


Lexer.prototype.tryMatchCaseless = function (text) {
  return text === this.ahead(text.length).toLowerCase();
};
/**
 * look ahead
 * @function Lexer#ahead
 * @memberOf module:php-parser
 * @param {number} size
 * @returns {string}
 */


Lexer.prototype.ahead = function (size) {
  var text = this._input.substring(this.offset, this.offset + size);

  if (text[text.length - 1] === "\r" && this._input[this.offset + size + 1] === "\n") {
    text += "\n";
  }

  return text;
};
/**
 * consume the specified size
 * @function Lexer#consume
 * @memberOf module:php-parser
 * @param {number} size
 * @returns {Lexer}
 */


Lexer.prototype.consume = function (size) {
  for (var i = 0; i < size; i++) {
    var ch = this._input[this.offset];
    if (!ch) break;
    this.yytext += ch;
    this.offset++;

    if (ch === "\r" && this._input[this.offset] === "\n") {
      this.yytext += "\n";
      this.offset++;
      i++;
    }

    if (ch === "\n" || ch === "\r") {
      this.yylloc.last_line = ++this.yylineno;
      this.yyprevcol = this.yylloc.last_column;
      this.yylloc.last_column = 0;
    } else {
      this.yylloc.last_column++;
    }
  }

  return this;
};
/**
 * Gets the current state
 * @function Lexer#getState
 * @memberOf module:php-parser
 */


Lexer.prototype.getState = function () {
  return {
    yytext: this.yytext,
    offset: this.offset,
    yylineno: this.yylineno,
    yyprevcol: this.yyprevcol,
    yylloc: {
      first_offset: this.yylloc.first_offset,
      first_line: this.yylloc.first_line,
      first_column: this.yylloc.first_column,
      last_line: this.yylloc.last_line,
      last_column: this.yylloc.last_column
    },
    heredoc_label: this.heredoc_label
  };
};
/**
 * Sets the current lexer state
 * @function Lexer#setState
 * @memberOf module:php-parser
 */


Lexer.prototype.setState = function (state) {
  this.yytext = state.yytext;
  this.offset = state.offset;
  this.yylineno = state.yylineno;
  this.yyprevcol = state.yyprevcol;
  this.yylloc = state.yylloc;

  if (state.heredoc_label) {
    this.heredoc_label = state.heredoc_label;
  }

  return this;
};
/**
 * prepend next token
 * @function Lexer#appendToken
 * @memberOf module:php-parser
 * @param {*} value
 * @param {*} ahead
 * @returns {Lexer}
 */


Lexer.prototype.appendToken = function (value, ahead) {
  this.tokens.push([value, ahead]);
  return this;
};
/**
 * return next match that has a token
 * @function Lexer#lex
 * @memberOf module:php-parser
 * @returns {number|string}
 */


Lexer.prototype.lex = function () {
  this.yylloc.prev_offset = this.offset;
  this.yylloc.prev_line = this.yylloc.last_line;
  this.yylloc.prev_column = this.yylloc.last_column;
  var token = this.next() || this.lex();

  if (!this.all_tokens) {
    while (token === this.tok.T_WHITESPACE || // ignore white space
    !this.comment_tokens && (token === this.tok.T_COMMENT || // ignore single lines comments
    token === this.tok.T_DOC_COMMENT) || // ignore doc comments
    // ignore open tags
    token === this.tok.T_OPEN_TAG) {
      token = this.next() || this.lex();
    }

    if (token == this.tok.T_OPEN_TAG_WITH_ECHO) {
      // https://github.com/php/php-src/blob/7ff186434e82ee7be7c59d0db9a976641cf7b09c/Zend/zend_compile.c#L1683
      // open tag with echo statement
      return this.tok.T_ECHO;
    } else if (token === this.tok.T_CLOSE_TAG) {
      // https://github.com/php/php-src/blob/7ff186434e82ee7be7c59d0db9a976641cf7b09c/Zend/zend_compile.c#L1680
      return ";";
      /* implicit ; */
    }
  }

  if (!this.yylloc.prev_offset) {
    this.yylloc.prev_offset = this.yylloc.first_offset;
    this.yylloc.prev_line = this.yylloc.first_line;
    this.yylloc.prev_column = this.yylloc.first_column;
  }
  /*else if (this.yylloc.prev_offset === this.offset && this.offset !== this.size) {
    throw new Error('Infinite loop @ ' + this.offset + ' / ' + this.size);
  }*/


  return token;
};
/**
 * activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
 * @function Lexer#begin
 * @memberOf module:php-parser
 * @param {*} condition
 * @returns {Lexer}
 */


Lexer.prototype.begin = function (condition) {
  this.conditionStack.push(condition);
  this.curCondition = condition;
  this.stateCb = this["match" + condition];

  if (typeof this.stateCb !== "function") {
    throw new Error('Undefined condition state "' + condition + '"');
  }

  return this;
};
/**
 * pop the previously active lexer condition state off the condition stack
 * @function Lexer#popState
 * @memberOf module:php-parser
 * @returns {string|*}
 */


Lexer.prototype.popState = function () {
  var n = this.conditionStack.length - 1;
  var condition = n > 0 ? this.conditionStack.pop() : this.conditionStack[0];
  this.curCondition = this.conditionStack[this.conditionStack.length - 1];
  this.stateCb = this["match" + this.curCondition];

  if (typeof this.stateCb !== "function") {
    throw new Error('Undefined condition state "' + this.curCondition + '"');
  }

  return condition;
};
/**
 * return next match in input
 * @function Lexer#next
 * @memberOf module:php-parser
 * @returns {number|*}
 */


Lexer.prototype.next = function () {
  var token;

  if (!this._input) {
    this.done = true;
  }

  this.yylloc.first_offset = this.offset;
  this.yylloc.first_line = this.yylloc.last_line;
  this.yylloc.first_column = this.yylloc.last_column;
  this.yytext = "";

  if (this.done) {
    this.yylloc.prev_offset = this.yylloc.first_offset;
    this.yylloc.prev_line = this.yylloc.first_line;
    this.yylloc.prev_column = this.yylloc.first_column;
    return this.EOF;
  }

  if (this.tokens.length > 0) {
    token = this.tokens.shift();

    if (_typeof(token[1]) === "object") {
      this.setState(token[1]);
    } else {
      this.consume(token[1]);
    }

    token = token[0];
  } else {
    token = this.stateCb.apply(this, []);
  }

  if (this.offset >= this.size && this.tokens.length === 0) {
    this.done = true;
  }

  if (this.debug) {
    var tName = token;

    if (typeof tName === "number") {
      tName = this.engine.tokens.values[tName];
    } else {
      tName = '"' + tName + '"';
    }

    var e = new Error(tName + "\tfrom " + this.yylloc.first_line + "," + this.yylloc.first_column + "\t - to " + this.yylloc.last_line + "," + this.yylloc.last_column + '\t"' + this.yytext + '"'); // eslint-disable-next-line no-console

    console.error(e.stack);
  }

  return token;
}; // extends the lexer with states


[__webpack_require__(438), __webpack_require__(3607), __webpack_require__(7405), __webpack_require__(465), __webpack_require__(5135), __webpack_require__(4437), __webpack_require__(1298), __webpack_require__(5609)].forEach(function (ext) {
  for (var k in ext) {
    Lexer.prototype[k] = ext[k];
  }
});
module.exports = Lexer;

/***/ }),

/***/ 438:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * Reads a single line comment
   */
  T_COMMENT: function T_COMMENT() {
    while (this.offset < this.size) {
      var ch = this.input();

      if (ch === "\n" || ch === "\r") {
        return this.tok.T_COMMENT;
      } else if (ch === "?" && !this.aspTagMode && this._input[this.offset] === ">") {
        this.unput(1);
        return this.tok.T_COMMENT;
      } else if (ch === "%" && this.aspTagMode && this._input[this.offset] === ">") {
        this.unput(1);
        return this.tok.T_COMMENT;
      }
    }

    return this.tok.T_COMMENT;
  },

  /*
   * Behaviour : https://github.com/php/php-src/blob/master/Zend/zend_language_scanner.l#L1927
   */
  T_DOC_COMMENT: function T_DOC_COMMENT() {
    var ch = this.input();
    var token = this.tok.T_COMMENT;

    if (ch === "*") {
      // started with '/*' , check is next is '*'
      ch = this.input();

      if (this.is_WHITESPACE()) {
        // check if next is WHITESPACE
        token = this.tok.T_DOC_COMMENT;
      }

      if (ch === "/") {
        return token;
      } else {
        this.unput(1); // reset
      }
    }

    while (this.offset < this.size) {
      ch = this.input();

      if (ch === "*" && this._input[this.offset] === "/") {
        this.input();
        break;
      }
    }

    return token;
  }
};

/***/ }),

/***/ 3607:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  nextINITIAL: function nextINITIAL() {
    if (this.conditionStack.length > 1 && this.conditionStack[this.conditionStack.length - 1] === "INITIAL") {
      // Return to HEREDOC/ST_DOUBLE_QUOTES mode
      this.popState();
    } else {
      this.begin("ST_IN_SCRIPTING");
    }

    return this;
  },
  matchINITIAL: function matchINITIAL() {
    while (this.offset < this.size) {
      var ch = this.input();

      if (ch == "<") {
        ch = this.ahead(1);

        if (ch == "?") {
          if (this.tryMatch("?=")) {
            this.unput(1).appendToken(this.tok.T_OPEN_TAG_WITH_ECHO, 3).nextINITIAL();
            break;
          } else if (this.tryMatchCaseless("?php")) {
            ch = this._input[this.offset + 4];

            if (ch === " " || ch === "\t" || ch === "\n" || ch === "\r") {
              this.unput(1).appendToken(this.tok.T_OPEN_TAG, 6).nextINITIAL();
              break;
            }
          }

          if (this.short_tags) {
            this.unput(1).appendToken(this.tok.T_OPEN_TAG, 2).nextINITIAL();
            break;
          }
        } else if (this.asp_tags && ch == "%") {
          if (this.tryMatch("%=")) {
            this.aspTagMode = true;
            this.unput(1).appendToken(this.tok.T_OPEN_TAG_WITH_ECHO, 3).nextINITIAL();
            break;
          } else {
            this.aspTagMode = true;
            this.unput(1).appendToken(this.tok.T_OPEN_TAG, 2).nextINITIAL();
            break;
          }
        }
      }
    }

    if (this.yytext.length > 0) {
      return this.tok.T_INLINE_HTML;
    } else {
      return false;
    }
  }
};

/***/ }),

/***/ 7405:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/* istanbul ignore else  */

var MAX_LENGTH_OF_LONG = 10;
var long_min_digits = "2147483648";

if (process.arch == "x64") {
  MAX_LENGTH_OF_LONG = 19;
  long_min_digits = "9223372036854775808";
}

module.exports = {
  consume_NUM: function consume_NUM() {
    var ch = this.yytext[0];
    var hasPoint = ch === ".";

    if (ch === "0") {
      ch = this.input(); // check if hexa

      if (ch === "x" || ch === "X") {
        ch = this.input();

        if (ch !== "_" && this.is_HEX()) {
          return this.consume_HNUM();
        } else {
          this.unput(ch ? 2 : 1);
        } // check binary notation

      } else if (ch === "b" || ch === "B") {
        ch = this.input();

        if (ch !== "_" && ch === "0" || ch === "1") {
          return this.consume_BNUM();
        } else {
          this.unput(ch ? 2 : 1);
        } // @fixme check octal notation ? not usefull

      } else if (!this.is_NUM()) {
        if (ch) this.unput(1);
      }
    }

    while (this.offset < this.size) {
      var prev = ch;
      ch = this.input();

      if (ch === "_") {
        if (prev === "_") {
          // restriction : next to underscore / 1__1;
          this.unput(2); // keep 1

          break;
        }

        if (prev === ".") {
          // next to decimal point  "1._0"
          this.unput(1); // keep 1.

          break;
        }

        if (prev === "e" || prev === "E") {
          // next to e "1e_10"
          this.unput(2); // keep 1

          break;
        }
      } else if (ch === ".") {
        if (hasPoint) {
          // no multiple points "1.0.5"
          this.unput(1); // keep 1.0

          break;
        }

        if (prev === "_") {
          // next to decimal point  "1_.0"
          this.unput(2); // keep 1

          break;
        }

        hasPoint = true;
        continue;
      } else if (ch === "e" || ch === "E") {
        if (prev === "_") {
          // next to e "1_e10"
          this.unput(1);
          break;
        }

        var undo = 2;
        ch = this.input();

        if (ch === "+" || ch === "-") {
          // 1e-5
          undo = 3;
          ch = this.input();
        }

        if (this.is_NUM_START()) {
          this.consume_LNUM();
          return this.tok.T_DNUMBER;
        }

        this.unput(ch ? undo : undo - 1); // keep only 1

        break;
      }

      if (!this.is_NUM()) {
        // example : 10.0a
        if (ch) this.unput(1); // keep 10.0

        break;
      }
    }

    if (hasPoint) {
      return this.tok.T_DNUMBER;
    } else if (this.yytext.length < MAX_LENGTH_OF_LONG - 1) {
      return this.tok.T_LNUMBER;
    } else {
      if (this.yytext.length < MAX_LENGTH_OF_LONG || this.yytext.length == MAX_LENGTH_OF_LONG && this.yytext < long_min_digits) {
        return this.tok.T_LNUMBER;
      }

      return this.tok.T_DNUMBER;
    }
  },
  // read hexa
  consume_HNUM: function consume_HNUM() {
    while (this.offset < this.size) {
      var ch = this.input();

      if (!this.is_HEX()) {
        if (ch) this.unput(1);
        break;
      }
    }

    return this.tok.T_LNUMBER;
  },
  // read a generic number
  consume_LNUM: function consume_LNUM() {
    while (this.offset < this.size) {
      var ch = this.input();

      if (!this.is_NUM()) {
        if (ch) this.unput(1);
        break;
      }
    }

    return this.tok.T_LNUMBER;
  },
  // read binary
  consume_BNUM: function consume_BNUM() {
    var ch;

    while (this.offset < this.size) {
      ch = this.input();

      if (ch !== "0" && ch !== "1" && ch !== "_") {
        if (ch) this.unput(1);
        break;
      }
    }

    return this.tok.T_LNUMBER;
  }
};

/***/ }),

/***/ 465:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  matchST_LOOKING_FOR_PROPERTY: function matchST_LOOKING_FOR_PROPERTY() {
    var ch = this.input();

    if (ch === "-") {
      ch = this.input();

      if (ch === ">") {
        // https://github.com/php/php-src/blob/master/Zend/zend_language_scanner.l#L1296
        return this.tok.T_OBJECT_OPERATOR;
      }

      if (ch) this.unput(1);
    } else if (this.is_WHITESPACE()) {
      return this.tok.T_WHITESPACE;
    } else if (this.is_LABEL_START()) {
      // https://github.com/php/php-src/blob/master/Zend/zend_language_scanner.l#L1300
      this.consume_LABEL();
      this.popState();
      return this.tok.T_STRING;
    } // https://github.com/php/php-src/blob/master/Zend/zend_language_scanner.l#L1306


    this.popState();
    if (ch) this.unput(1);
    return false;
  },
  matchST_LOOKING_FOR_VARNAME: function matchST_LOOKING_FOR_VARNAME() {
    var ch = this.input(); // SHIFT STATE

    this.popState();
    this.begin("ST_IN_SCRIPTING");

    if (this.is_LABEL_START()) {
      this.consume_LABEL();
      ch = this.input();

      if (ch === "[" || ch === "}") {
        this.unput(1);
        return this.tok.T_STRING_VARNAME;
      } else {
        // any char (that's started with a label sequence)
        this.unput(this.yytext.length);
      }
    } else {
      // any char (thats not a label start sequence)
      if (ch) this.unput(1);
    } // stops looking for a varname and starts the scripting mode


    return false;
  },
  matchST_VAR_OFFSET: function matchST_VAR_OFFSET() {
    var ch = this.input();

    if (this.is_NUM_START()) {
      this.consume_NUM();
      return this.tok.T_NUM_STRING;
    } else if (ch === "]") {
      this.popState();
      return "]";
    } else if (ch === "$") {
      this.input();

      if (this.is_LABEL_START()) {
        this.consume_LABEL();
        return this.tok.T_VARIABLE;
      } else {
        throw new Error("Unexpected terminal");
      }
    } else if (this.is_LABEL_START()) {
      this.consume_LABEL();
      return this.tok.T_STRING;
    } else if (this.is_WHITESPACE() || ch === "\\" || ch === "'" || ch === "#") {
      return this.tok.T_ENCAPSED_AND_WHITESPACE;
    } else if (ch === "[" || ch === "{" || ch === "}" || ch === '"' || ch === "`" || this.is_TOKEN()) {
      return ch;
    } else {
      throw new Error("Unexpected terminal");
    }
  }
};

/***/ }),

/***/ 5135:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  matchST_IN_SCRIPTING: function matchST_IN_SCRIPTING() {
    var ch = this.input();

    switch (ch) {
      case " ":
      case "\t":
      case "\n":
      case "\r":
      case "\r\n":
        return this.T_WHITESPACE();

      case "#":
        return this.T_COMMENT();

      case "/":
        if (this._input[this.offset] === "/") {
          return this.T_COMMENT();
        } else if (this._input[this.offset] === "*") {
          this.input();
          return this.T_DOC_COMMENT();
        }

        return this.consume_TOKEN();

      case "'":
        return this.T_CONSTANT_ENCAPSED_STRING();

      case '"':
        return this.ST_DOUBLE_QUOTES();

      case "`":
        this.begin("ST_BACKQUOTE");
        return "`";

      case "?":
        if (!this.aspTagMode && this.tryMatch(">")) {
          this.input();
          var nextCH = this._input[this.offset];
          if (nextCH === "\n" || nextCH === "\r") this.input();

          if (this.conditionStack.length > 1) {
            this.begin("INITIAL");
          }

          return this.tok.T_CLOSE_TAG;
        }

        return this.consume_TOKEN();

      case "%":
        if (this.aspTagMode && this._input[this.offset] === ">") {
          this.input(); // consume the '>'

          ch = this._input[this.offset]; // read next

          if (ch === "\n" || ch === "\r") {
            this.input(); // consume the newline
          }

          this.aspTagMode = false;

          if (this.conditionStack.length > 1) {
            this.begin("INITIAL");
          }

          return this.tok.T_CLOSE_TAG;
        }

        return this.consume_TOKEN();

      case "{":
        this.begin("ST_IN_SCRIPTING");
        return "{";

      case "}":
        if (this.conditionStack.length > 2) {
          // Return to HEREDOC/ST_DOUBLE_QUOTES mode
          this.popState();
        }

        return "}";

      default:
        if (ch === ".") {
          ch = this.input();

          if (this.is_NUM_START()) {
            return this.consume_NUM();
          } else {
            if (ch) this.unput(1);
          }
        }

        if (this.is_NUM_START()) {
          return this.consume_NUM();
        } else if (this.is_LABEL_START()) {
          return this.consume_LABEL().T_STRING();
        } else if (this.is_TOKEN()) {
          return this.consume_TOKEN();
        }

    }

    throw new Error('Bad terminal sequence "' + ch + '" at line ' + this.yylineno + " (offset " + this.offset + ")");
  },
  T_WHITESPACE: function T_WHITESPACE() {
    while (this.offset < this.size) {
      var ch = this.input();

      if (ch === " " || ch === "\t" || ch === "\n" || ch === "\r") {
        continue;
      }

      if (ch) this.unput(1);
      break;
    }

    return this.tok.T_WHITESPACE;
  }
};

/***/ }),

/***/ 4437:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var newline = ["\n", "\r"];
var valid_after_heredoc = ["\n", "\r", ";"];
var valid_after_heredoc_73 = valid_after_heredoc.concat(["\t", " ", ",", "]", ")", "/", "=", "!"]);
module.exports = {
  T_CONSTANT_ENCAPSED_STRING: function T_CONSTANT_ENCAPSED_STRING() {
    var ch;

    while (this.offset < this.size) {
      ch = this.input();

      if (ch == "\\") {
        this.input();
      } else if (ch == "'") {
        break;
      }
    }

    return this.tok.T_CONSTANT_ENCAPSED_STRING;
  },
  // check if matching a HEREDOC state
  is_HEREDOC: function is_HEREDOC() {
    var revert = this.offset;

    if (this._input[this.offset - 1] === "<" && this._input[this.offset] === "<" && this._input[this.offset + 1] === "<") {
      this.offset += 3; // optional tabs / spaces

      if (this.is_TABSPACE()) {
        while (this.offset < this.size) {
          this.offset++;

          if (!this.is_TABSPACE()) {
            break;
          }
        }
      } // optional quotes


      var tChar = this._input[this.offset - 1];

      if (tChar === "'" || tChar === '"') {
        this.offset++;
      } else {
        tChar = null;
      } // required label


      if (this.is_LABEL_START()) {
        var yyoffset = this.offset - 1;

        while (this.offset < this.size) {
          this.offset++;

          if (!this.is_LABEL()) {
            break;
          }
        }

        var yylabel = this._input.substring(yyoffset, this.offset - 1);

        if (!tChar || tChar === this._input[this.offset - 1]) {
          // required ending quote
          if (tChar) this.offset++; // require newline

          if (newline.includes(this._input[this.offset - 1])) {
            // go go go
            this.heredoc_label.label = yylabel;
            this.heredoc_label.length = yylabel.length;
            this.heredoc_label.finished = false;
            yyoffset = this.offset - revert;
            this.offset = revert;
            this.consume(yyoffset);

            if (tChar === "'") {
              this.begin("ST_NOWDOC");
            } else {
              this.begin("ST_HEREDOC");
            } // prematch to get the indentation information from end of doc


            this.prematch_ENDOFDOC();
            return this.tok.T_START_HEREDOC;
          }
        }
      }
    }

    this.offset = revert;
    return false;
  },
  ST_DOUBLE_QUOTES: function ST_DOUBLE_QUOTES() {
    var ch;

    while (this.offset < this.size) {
      ch = this.input();

      if (ch == "\\") {
        this.input();
      } else if (ch == '"') {
        break;
      } else if (ch == "$") {
        ch = this.input();

        if (ch == "{" || this.is_LABEL_START()) {
          this.unput(2);
          break;
        }

        if (ch) this.unput(1);
      } else if (ch == "{") {
        ch = this.input();

        if (ch == "$") {
          this.unput(2);
          break;
        }

        if (ch) this.unput(1);
      }
    }

    if (ch == '"') {
      return this.tok.T_CONSTANT_ENCAPSED_STRING;
    } else {
      var prefix = 1;

      if (this.yytext[0] === "b" || this.yytext[0] === "B") {
        prefix = 2;
      }

      if (this.yytext.length > 2) {
        this.appendToken(this.tok.T_ENCAPSED_AND_WHITESPACE, this.yytext.length - prefix);
      }

      this.unput(this.yytext.length - prefix);
      this.begin("ST_DOUBLE_QUOTES");
      return this.yytext;
    }
  },
  // check if its a DOC end sequence
  isDOC_MATCH: function isDOC_MATCH(offset, consumeLeadingSpaces) {
    // @fixme : check if out of text limits
    // consumeLeadingSpaces is false happen DOC prematch END HEREDOC stage.
    // Ensure current state is really after a new line break, not after a such as ${variables}
    var prev_ch = this._input[offset - 2];

    if (!newline.includes(prev_ch)) {
      return false;
    } // skip leading spaces or tabs


    var indentation_uses_spaces = false;
    var indentation_uses_tabs = false; // reset heredoc_label structure

    var indentation = 0;
    var leading_ch = this._input[offset - 1];

    if (this.version >= 703) {
      while (leading_ch === "\t" || leading_ch === " ") {
        if (leading_ch === " ") {
          indentation_uses_spaces = true;
        } else if (leading_ch === "\t") {
          indentation_uses_tabs = true;
        }

        leading_ch = this._input[offset + indentation];
        indentation++;
      } // Move offset to skip leading whitespace


      offset = offset + indentation; // return out if there was only whitespace on this line

      if (newline.includes(this._input[offset - 1])) {
        return false;
      }
    }

    if (this._input.substring(offset - 1, offset - 1 + this.heredoc_label.length) === this.heredoc_label.label) {
      var ch = this._input[offset - 1 + this.heredoc_label.length];

      if ((this.version >= 703 ? valid_after_heredoc_73 : valid_after_heredoc).includes(ch)) {
        if (consumeLeadingSpaces) {
          this.consume(indentation); // https://wiki.php.net/rfc/flexible_heredoc_nowdoc_syntaxes

          if (indentation_uses_spaces && indentation_uses_tabs) {
            throw new Error("Parse error:  mixing spaces and tabs in ending marker at line " + this.yylineno + " (offset " + this.offset + ")");
          }
        } else {
          // Called in prematch_ENDOFDOC
          this.heredoc_label.indentation = indentation;
          this.heredoc_label.indentation_uses_spaces = indentation_uses_spaces;
          this.heredoc_label.first_encaps_node = true;
        }

        return true;
      }
    }

    return false;
  },

  /*
   * Prematch the end of HEREDOC/NOWDOC end tag to preset the
   * context of this.heredoc_label
   */
  prematch_ENDOFDOC: function prematch_ENDOFDOC() {
    // reset heredoc
    this.heredoc_label.indentation_uses_spaces = false;
    this.heredoc_label.indentation = 0;
    this.heredoc_label.first_encaps_node = true;
    var offset = this.offset + 1;

    while (offset < this._input.length) {
      // if match heredoc_label structrue will be set
      if (this.isDOC_MATCH(offset, false)) {
        return;
      }

      if (!newline.includes(this._input[offset - 1])) {
        // skip one line
        while (!newline.includes(this._input[offset++]) && offset < this._input.length) {// skip
        }
      }

      offset++;
    }
  },
  matchST_NOWDOC: function matchST_NOWDOC() {
    // edge case : empty now doc
    if (this.isDOC_MATCH(this.offset, true)) {
      // @fixme : never reached (may be caused by quotes)
      this.consume(this.heredoc_label.length);
      this.popState();
      return this.tok.T_END_HEREDOC;
    } // SCANNING CONTENTS


    var ch = this._input[this.offset - 1];

    while (this.offset < this.size) {
      if (newline.includes(ch)) {
        ch = this.input();

        if (this.isDOC_MATCH(this.offset, true)) {
          this.unput(1).popState();
          this.appendToken(this.tok.T_END_HEREDOC, this.heredoc_label.length);
          return this.tok.T_ENCAPSED_AND_WHITESPACE;
        }
      } else {
        ch = this.input();
      }
    } // too bad ! reached end of document (will get a parse error)


    return this.tok.T_ENCAPSED_AND_WHITESPACE;
  },
  matchST_HEREDOC: function matchST_HEREDOC() {
    // edge case : empty here doc
    var ch = this.input();

    if (this.isDOC_MATCH(this.offset, true)) {
      this.consume(this.heredoc_label.length - 1);
      this.popState();
      return this.tok.T_END_HEREDOC;
    } // SCANNING CONTENTS


    while (this.offset < this.size) {
      if (ch === "\\") {
        ch = this.input(); // ignore next

        if (!newline.includes(ch)) {
          ch = this.input();
        }
      }

      if (newline.includes(ch)) {
        ch = this.input();

        if (this.isDOC_MATCH(this.offset, true)) {
          this.unput(1).popState();
          this.appendToken(this.tok.T_END_HEREDOC, this.heredoc_label.length);
          return this.tok.T_ENCAPSED_AND_WHITESPACE;
        }
      } else if (ch === "$") {
        ch = this.input();

        if (ch === "{") {
          // start of ${
          this.begin("ST_LOOKING_FOR_VARNAME");

          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
          }
        } else if (this.is_LABEL_START()) {
          // start of $var...
          var yyoffset = this.offset;
          var next = this.consume_VARIABLE();

          if (this.yytext.length > this.offset - yyoffset + 2) {
            this.appendToken(next, this.offset - yyoffset + 2);
            this.unput(this.offset - yyoffset + 2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return next;
          } //console.log(this.yytext);

        }
      } else if (ch === "{") {
        ch = this.input();

        if (ch === "$") {
          // start of {$...
          this.begin("ST_IN_SCRIPTING");

          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_CURLY_OPEN, 1);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            this.unput(1);
            return this.tok.T_CURLY_OPEN;
          }
        }
      } else {
        ch = this.input();
      }
    } // too bad ! reached end of document (will get a parse error)


    return this.tok.T_ENCAPSED_AND_WHITESPACE;
  },
  consume_VARIABLE: function consume_VARIABLE() {
    this.consume_LABEL();
    var ch = this.input();

    if (ch == "[") {
      this.unput(1);
      this.begin("ST_VAR_OFFSET");
      return this.tok.T_VARIABLE;
    } else if (ch === "-") {
      if (this.input() === ">") {
        this.input();

        if (this.is_LABEL_START()) {
          this.begin("ST_LOOKING_FOR_PROPERTY");
        }

        this.unput(3);
        return this.tok.T_VARIABLE;
      } else {
        this.unput(2);
      }
    } else {
      if (ch) this.unput(1);
    }

    return this.tok.T_VARIABLE;
  },
  // HANDLES BACKQUOTES
  matchST_BACKQUOTE: function matchST_BACKQUOTE() {
    var ch = this.input();

    if (ch === "$") {
      ch = this.input();

      if (ch === "{") {
        this.begin("ST_LOOKING_FOR_VARNAME");
        return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
      } else if (this.is_LABEL_START()) {
        var tok = this.consume_VARIABLE();
        return tok;
      }
    } else if (ch === "{") {
      if (this._input[this.offset] === "$") {
        this.begin("ST_IN_SCRIPTING");
        return this.tok.T_CURLY_OPEN;
      }
    } else if (ch === "`") {
      this.popState();
      return "`";
    } // any char


    while (this.offset < this.size) {
      if (ch === "\\") {
        this.input();
      } else if (ch === "`") {
        this.unput(1);
        this.popState();
        this.appendToken("`", 1);
        break;
      } else if (ch === "$") {
        ch = this.input();

        if (ch === "{") {
          this.begin("ST_LOOKING_FOR_VARNAME");

          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
          }
        } else if (this.is_LABEL_START()) {
          // start of $var...
          var yyoffset = this.offset;
          var next = this.consume_VARIABLE();

          if (this.yytext.length > this.offset - yyoffset + 2) {
            this.appendToken(next, this.offset - yyoffset + 2);
            this.unput(this.offset - yyoffset + 2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return next;
          }
        }

        continue;
      } else if (ch === "{") {
        ch = this.input();

        if (ch === "$") {
          // start of {$...
          this.begin("ST_IN_SCRIPTING");

          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_CURLY_OPEN, 1);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            this.unput(1);
            return this.tok.T_CURLY_OPEN;
          }
        }

        continue;
      }

      ch = this.input();
    }

    return this.tok.T_ENCAPSED_AND_WHITESPACE;
  },
  matchST_DOUBLE_QUOTES: function matchST_DOUBLE_QUOTES() {
    var ch = this.input();

    if (ch === "$") {
      ch = this.input();

      if (ch === "{") {
        this.begin("ST_LOOKING_FOR_VARNAME");
        return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
      } else if (this.is_LABEL_START()) {
        var tok = this.consume_VARIABLE();
        return tok;
      }
    } else if (ch === "{") {
      if (this._input[this.offset] === "$") {
        this.begin("ST_IN_SCRIPTING");
        return this.tok.T_CURLY_OPEN;
      }
    } else if (ch === '"') {
      this.popState();
      return '"';
    } // any char


    while (this.offset < this.size) {
      if (ch === "\\") {
        this.input();
      } else if (ch === '"') {
        this.unput(1);
        this.popState();
        this.appendToken('"', 1);
        break;
      } else if (ch === "$") {
        ch = this.input();

        if (ch === "{") {
          this.begin("ST_LOOKING_FOR_VARNAME");

          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
          }
        } else if (this.is_LABEL_START()) {
          // start of $var...
          var yyoffset = this.offset;
          var next = this.consume_VARIABLE();

          if (this.yytext.length > this.offset - yyoffset + 2) {
            this.appendToken(next, this.offset - yyoffset + 2);
            this.unput(this.offset - yyoffset + 2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            return next;
          }
        }

        if (ch) this.unput(1);
      } else if (ch === "{") {
        ch = this.input();

        if (ch === "$") {
          // start of {$...
          this.begin("ST_IN_SCRIPTING");

          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_CURLY_OPEN, 1);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            // @fixme : yytext = '"{$' (this.yytext.length > 3)
            this.unput(1);
            return this.tok.T_CURLY_OPEN;
          }
        }

        if (ch) this.unput(1);
      }

      ch = this.input();
    }

    return this.tok.T_ENCAPSED_AND_WHITESPACE;
  }
};

/***/ }),

/***/ 1298:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  T_STRING: function T_STRING() {
    var token = this.yytext.toLowerCase();
    var id = this.keywords[token];

    if (typeof id !== "number") {
      if (token === "yield") {
        if (this.version >= 700 && this.tryMatch(" from")) {
          this.consume(5);
          id = this.tok.T_YIELD_FROM;
        } else {
          id = this.tok.T_YIELD;
        }
      } else {
        id = this.tok.T_STRING;

        if (token === "b" || token === "B") {
          var ch = this.input(1);

          if (ch === '"') {
            return this.ST_DOUBLE_QUOTES();
          } else if (ch === "'") {
            return this.T_CONSTANT_ENCAPSED_STRING();
          } else if (ch) {
            this.unput(1);
          }
        }
      }
    }

    return id;
  },
  // reads a custom token
  consume_TOKEN: function consume_TOKEN() {
    var ch = this._input[this.offset - 1];
    var fn = this.tokenTerminals[ch];

    if (fn) {
      return fn.apply(this, []);
    } else {
      return this.yytext;
    }
  },
  // list of special char tokens
  tokenTerminals: {
    $: function $() {
      this.offset++;

      if (this.is_LABEL_START()) {
        this.offset--;
        this.consume_LABEL();
        return this.tok.T_VARIABLE;
      } else {
        this.offset--;
        return "$";
      }
    },
    "-": function _() {
      var nchar = this._input[this.offset];

      if (nchar === ">") {
        this.begin("ST_LOOKING_FOR_PROPERTY").input();
        return this.tok.T_OBJECT_OPERATOR;
      } else if (nchar === "-") {
        this.input();
        return this.tok.T_DEC;
      } else if (nchar === "=") {
        this.input();
        return this.tok.T_MINUS_EQUAL;
      }

      return "-";
    },
    "\\": function _() {
      return this.tok.T_NS_SEPARATOR;
    },
    "/": function _() {
      if (this._input[this.offset] === "=") {
        this.input();
        return this.tok.T_DIV_EQUAL;
      }

      return "/";
    },
    ":": function _() {
      if (this._input[this.offset] === ":") {
        this.input();
        return this.tok.T_DOUBLE_COLON;
      } else {
        return ":";
      }
    },
    "(": function _() {
      var initial = this.offset;
      this.input();

      if (this.is_TABSPACE()) {
        this.consume_TABSPACE().input();
      }

      if (this.is_LABEL_START()) {
        var yylen = this.yytext.length;
        this.consume_LABEL();
        var castToken = this.yytext.substring(yylen - 1).toLowerCase();
        var castId = this.castKeywords[castToken];

        if (typeof castId === "number") {
          this.input();

          if (this.is_TABSPACE()) {
            this.consume_TABSPACE().input();
          }

          if (this._input[this.offset - 1] === ")") {
            return castId;
          }
        }
      } // revert the check


      this.unput(this.offset - initial);
      return "(";
    },
    "=": function _() {
      var nchar = this._input[this.offset];

      if (nchar === ">") {
        this.input();
        return this.tok.T_DOUBLE_ARROW;
      } else if (nchar === "=") {
        if (this._input[this.offset + 1] === "=") {
          this.consume(2);
          return this.tok.T_IS_IDENTICAL;
        } else {
          this.input();
          return this.tok.T_IS_EQUAL;
        }
      }

      return "=";
    },
    "+": function _() {
      var nchar = this._input[this.offset];

      if (nchar === "+") {
        this.input();
        return this.tok.T_INC;
      } else if (nchar === "=") {
        this.input();
        return this.tok.T_PLUS_EQUAL;
      }

      return "+";
    },
    "!": function _() {
      if (this._input[this.offset] === "=") {
        if (this._input[this.offset + 1] === "=") {
          this.consume(2);
          return this.tok.T_IS_NOT_IDENTICAL;
        } else {
          this.input();
          return this.tok.T_IS_NOT_EQUAL;
        }
      }

      return "!";
    },
    "?": function _() {
      if (this.version >= 700 && this._input[this.offset] === "?") {
        if (this.version >= 704 && this._input[this.offset + 1] === "=") {
          this.consume(2);
          return this.tok.T_COALESCE_EQUAL;
        } else {
          this.input();
          return this.tok.T_COALESCE;
        }
      }

      return "?";
    },
    "<": function _() {
      var nchar = this._input[this.offset];

      if (nchar === "<") {
        nchar = this._input[this.offset + 1];

        if (nchar === "=") {
          this.consume(2);
          return this.tok.T_SL_EQUAL;
        } else if (nchar === "<") {
          if (this.is_HEREDOC()) {
            return this.tok.T_START_HEREDOC;
          }
        }

        this.input();
        return this.tok.T_SL;
      } else if (nchar === "=") {
        this.input();

        if (this.version >= 700 && this._input[this.offset] === ">") {
          this.input();
          return this.tok.T_SPACESHIP;
        } else {
          return this.tok.T_IS_SMALLER_OR_EQUAL;
        }
      } else if (nchar === ">") {
        this.input();
        return this.tok.T_IS_NOT_EQUAL;
      }

      return "<";
    },
    ">": function _() {
      var nchar = this._input[this.offset];

      if (nchar === "=") {
        this.input();
        return this.tok.T_IS_GREATER_OR_EQUAL;
      } else if (nchar === ">") {
        nchar = this._input[this.offset + 1];

        if (nchar === "=") {
          this.consume(2);
          return this.tok.T_SR_EQUAL;
        } else {
          this.input();
          return this.tok.T_SR;
        }
      }

      return ">";
    },
    "*": function _() {
      var nchar = this._input[this.offset];

      if (nchar === "=") {
        this.input();
        return this.tok.T_MUL_EQUAL;
      } else if (nchar === "*") {
        this.input();

        if (this._input[this.offset] === "=") {
          this.input();
          return this.tok.T_POW_EQUAL;
        } else {
          return this.tok.T_POW;
        }
      }

      return "*";
    },
    ".": function _() {
      var nchar = this._input[this.offset];

      if (nchar === "=") {
        this.input();
        return this.tok.T_CONCAT_EQUAL;
      } else if (nchar === "." && this._input[this.offset + 1] === ".") {
        this.consume(2);
        return this.tok.T_ELLIPSIS;
      }

      return ".";
    },
    "%": function _() {
      if (this._input[this.offset] === "=") {
        this.input();
        return this.tok.T_MOD_EQUAL;
      }

      return "%";
    },
    "&": function _() {
      var nchar = this._input[this.offset];

      if (nchar === "=") {
        this.input();
        return this.tok.T_AND_EQUAL;
      } else if (nchar === "&") {
        this.input();
        return this.tok.T_BOOLEAN_AND;
      }

      return "&";
    },
    "|": function _() {
      var nchar = this._input[this.offset];

      if (nchar === "=") {
        this.input();
        return this.tok.T_OR_EQUAL;
      } else if (nchar === "|") {
        this.input();
        return this.tok.T_BOOLEAN_OR;
      }

      return "|";
    },
    "^": function _() {
      if (this._input[this.offset] === "=") {
        this.input();
        return this.tok.T_XOR_EQUAL;
      }

      return "^";
    }
  }
};

/***/ }),

/***/ 5609:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var tokens = ";:,.\\[]()|^&+-/*=%!~$<>?@";
module.exports = {
  // check if the char can be a numeric
  is_NUM: function is_NUM() {
    var ch = this._input.charCodeAt(this.offset - 1);

    return ch > 47 && ch < 58 || ch === 95;
  },
  // check if the char can be a numeric
  is_NUM_START: function is_NUM_START() {
    var ch = this._input.charCodeAt(this.offset - 1);

    return ch > 47 && ch < 58;
  },
  // check if current char can be a label
  is_LABEL: function is_LABEL() {
    var ch = this._input.charCodeAt(this.offset - 1);

    return ch > 96 && ch < 123 || ch > 64 && ch < 91 || ch === 95 || ch > 47 && ch < 58 || ch > 126;
  },
  // check if current char can be a label
  is_LABEL_START: function is_LABEL_START() {
    var ch = this._input.charCodeAt(this.offset - 1); // A - Z


    if (ch > 64 && ch < 91) return true; // a - z

    if (ch > 96 && ch < 123) return true; // _ (95)

    if (ch === 95) return true; // utf8 / extended

    if (ch > 126) return true; // else

    return false;
  },
  // reads each char of the label
  consume_LABEL: function consume_LABEL() {
    while (this.offset < this.size) {
      var ch = this.input();

      if (!this.is_LABEL()) {
        if (ch) this.unput(1);
        break;
      }
    }

    return this;
  },
  // check if current char is a token char
  is_TOKEN: function is_TOKEN() {
    var ch = this._input[this.offset - 1];
    return tokens.indexOf(ch) !== -1;
  },
  // check if current char is a whitespace
  is_WHITESPACE: function is_WHITESPACE() {
    var ch = this._input[this.offset - 1];
    return ch === " " || ch === "\t" || ch === "\n" || ch === "\r";
  },
  // check if current char is a whitespace (without newlines)
  is_TABSPACE: function is_TABSPACE() {
    var ch = this._input[this.offset - 1];
    return ch === " " || ch === "\t";
  },
  // consume all whitespaces (excluding newlines)
  consume_TABSPACE: function consume_TABSPACE() {
    while (this.offset < this.size) {
      var ch = this.input();

      if (!this.is_TABSPACE()) {
        if (ch) this.unput(1);
        break;
      }
    }

    return this;
  },
  // check if current char can be a hexadecimal number
  is_HEX: function is_HEX() {
    var ch = this._input.charCodeAt(this.offset - 1); // 0 - 9


    if (ch > 47 && ch < 58) return true; // A - F

    if (ch > 64 && ch < 71) return true; // a - f

    if (ch > 96 && ch < 103) return true; // _ (code 95)

    if (ch === 95) return true; // else

    return false;
  }
};

/***/ }),

/***/ 8410:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * @private
 */

function isNumber(n) {
  return n != "." && n != "," && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * The PHP Parser class that build the AST tree from the lexer
 *
 * @constructor Parser
 * @memberOf module:php-parser
 * @tutorial Parser
 * @property {Lexer} lexer - current lexer instance
 * @property {AST} ast - the AST factory instance
 * @property {number|string} token - current token
 * @property {boolean} extractDoc - should extract documentation as AST node
 * @property {boolean} extractTokens - should extract each token
 * @property {boolean} suppressErrors - should ignore parsing errors and continue
 * @property {boolean} debug - should output debug informations
 */


var Parser = function Parser(lexer, ast) {
  this.lexer = lexer;
  this.ast = ast;
  this.tok = lexer.tok;
  this.EOF = lexer.EOF;
  this.token = null;
  this.prev = null;
  this.debug = false;
  this.version = 704;
  this.extractDoc = false;
  this.extractTokens = false;
  this.suppressErrors = false;

  var mapIt = function mapIt(item) {
    return [item, null];
  };

  this.entries = {
    // reserved_non_modifiers
    IDENTIFIER: new Map([this.tok.T_ABSTRACT, this.tok.T_ARRAY, this.tok.T_AS, this.tok.T_BREAK, this.tok.T_CALLABLE, this.tok.T_CASE, this.tok.T_CATCH, this.tok.T_CLASS, this.tok.T_CLASS_C, this.tok.T_CLONE, this.tok.T_CONST, this.tok.T_CONTINUE, this.tok.T_DECLARE, this.tok.T_DEFAULT, this.tok.T_DIR, this.tok.T_DO, this.tok.T_ECHO, this.tok.T_ELSE, this.tok.T_ELSEIF, this.tok.T_EMPTY, this.tok.T_ENDDECLARE, this.tok.T_ENDFOR, this.tok.T_ENDFOREACH, this.tok.T_ENDIF, this.tok.T_ENDSWITCH, this.tok.T_ENDWHILE, this.tok.T_EVAL, this.tok.T_EXIT, this.tok.T_EXTENDS, this.tok.T_FILE, this.tok.T_FINAL, this.tok.T_FINALLY, this.tok.T_FN, this.tok.T_FOR, this.tok.T_FOREACH, this.tok.T_FUNC_C, this.tok.T_FUNCTION, this.tok.T_GLOBAL, this.tok.T_GOTO, this.tok.T_IF, this.tok.T_IMPLEMENTS, this.tok.T_INCLUDE, this.tok.T_INCLUDE_ONCE, this.tok.T_INSTANCEOF, this.tok.T_INSTEADOF, this.tok.T_INTERFACE, this.tok.T_ISSET, this.tok.T_LINE, this.tok.T_LIST, this.tok.T_LOGICAL_AND, this.tok.T_LOGICAL_OR, this.tok.T_LOGICAL_XOR, this.tok.T_METHOD_C, this.tok.T_NAMESPACE, this.tok.T_NEW, this.tok.T_NS_C, this.tok.T_PRINT, this.tok.T_PRIVATE, this.tok.T_PROTECTED, this.tok.T_PUBLIC, this.tok.T_REQUIRE, this.tok.T_REQUIRE_ONCE, this.tok.T_RETURN, this.tok.T_STATIC, this.tok.T_SWITCH, this.tok.T_THROW, this.tok.T_TRAIT, this.tok.T_TRY, this.tok.T_UNSET, this.tok.T_USE, this.tok.T_VAR, this.tok.T_WHILE, this.tok.T_YIELD].map(mapIt)),
    VARIABLE: new Map([this.tok.T_VARIABLE, "$", "&", this.tok.T_NS_SEPARATOR, this.tok.T_STRING, this.tok.T_NAMESPACE, this.tok.T_STATIC].map(mapIt)),
    SCALAR: new Map([this.tok.T_CONSTANT_ENCAPSED_STRING, this.tok.T_START_HEREDOC, this.tok.T_LNUMBER, this.tok.T_DNUMBER, this.tok.T_ARRAY, "[", this.tok.T_CLASS_C, this.tok.T_TRAIT_C, this.tok.T_FUNC_C, this.tok.T_METHOD_C, this.tok.T_LINE, this.tok.T_FILE, this.tok.T_DIR, this.tok.T_NS_C, '"', 'b"', 'B"', "-", this.tok.T_NS_SEPARATOR].map(mapIt)),
    T_MAGIC_CONST: new Map([this.tok.T_CLASS_C, this.tok.T_TRAIT_C, this.tok.T_FUNC_C, this.tok.T_METHOD_C, this.tok.T_LINE, this.tok.T_FILE, this.tok.T_DIR, this.tok.T_NS_C].map(mapIt)),
    T_MEMBER_FLAGS: new Map([this.tok.T_PUBLIC, this.tok.T_PRIVATE, this.tok.T_PROTECTED, this.tok.T_STATIC, this.tok.T_ABSTRACT, this.tok.T_FINAL].map(mapIt)),
    EOS: new Map([";", this.EOF, this.tok.T_INLINE_HTML].map(mapIt)),
    EXPR: new Map(["@", "-", "+", "!", "~", "(", "`", this.tok.T_LIST, this.tok.T_CLONE, this.tok.T_INC, this.tok.T_DEC, this.tok.T_NEW, this.tok.T_ISSET, this.tok.T_EMPTY, this.tok.T_INCLUDE, this.tok.T_INCLUDE_ONCE, this.tok.T_REQUIRE, this.tok.T_REQUIRE_ONCE, this.tok.T_EVAL, this.tok.T_INT_CAST, this.tok.T_DOUBLE_CAST, this.tok.T_STRING_CAST, this.tok.T_ARRAY_CAST, this.tok.T_OBJECT_CAST, this.tok.T_BOOL_CAST, this.tok.T_UNSET_CAST, this.tok.T_EXIT, this.tok.T_PRINT, this.tok.T_YIELD, this.tok.T_STATIC, this.tok.T_FUNCTION, this.tok.T_FN, // using VARIABLES :
    this.tok.T_VARIABLE, "$", this.tok.T_NS_SEPARATOR, this.tok.T_STRING, // using SCALAR :
    this.tok.T_STRING, // @see variable.js line 45 > conflict with variable = shift/reduce :)
    this.tok.T_CONSTANT_ENCAPSED_STRING, this.tok.T_START_HEREDOC, this.tok.T_LNUMBER, this.tok.T_DNUMBER, this.tok.T_ARRAY, "[", this.tok.T_CLASS_C, this.tok.T_TRAIT_C, this.tok.T_FUNC_C, this.tok.T_METHOD_C, this.tok.T_LINE, this.tok.T_FILE, this.tok.T_DIR, this.tok.T_NS_C, '"', 'b"', 'B"', "-", this.tok.T_NS_SEPARATOR].map(mapIt))
  };
};
/**
 * helper : gets a token name
 * @function Parser#getTokenName
 * @memberOf module:php-parser
 */


Parser.prototype.getTokenName = function (token) {
  if (!isNumber(token)) {
    return "'" + token + "'";
  } else {
    if (token == this.EOF) return "the end of file (EOF)";
    return this.lexer.engine.tokens.values[token];
  }
};
/**
 * main entry point : converts a source code to AST
 * @function Parser#parse
 * @memberOf module:php-parser
 */


Parser.prototype.parse = function (code, filename) {
  this._errors = [];
  this.filename = filename || "eval";
  this.currentNamespace = [""];

  if (this.extractDoc) {
    this._docs = [];
  } else {
    this._docs = null;
  }

  if (this.extractTokens) {
    this._tokens = [];
  } else {
    this._tokens = null;
  }

  this._docIndex = 0;
  this._lastNode = null;
  this.lexer.setInput(code);
  this.lexer.all_tokens = this.extractTokens;
  this.lexer.comment_tokens = this.extractDoc;
  this.length = this.lexer._input.length;
  this.innerList = false;
  this.innerListForm = false;
  var program = this.node("program");
  var childs = [];
  this.next();

  while (this.token != this.EOF) {
    childs.push(this.read_start());
  } // append last comment


  if (childs.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
    childs.push(this.node("noop")());
  } // #176 : register latest position


  this.prev = [this.lexer.yylloc.last_line, this.lexer.yylloc.last_column, this.lexer.offset];
  var result = program(childs, this._errors, this._docs, this._tokens);

  if (this.debug) {
    var errors = this.ast.checkNodes();

    if (errors.length > 0) {
      errors.forEach(function (error) {
        if (error.position) {
          // eslint-disable-next-line no-console
          console.log("Node at line " + error.position.line + ", column " + error.position.column);
        } // eslint-disable-next-line no-console


        console.log(error.stack.join("\n"));
      });
      throw new Error("Some nodes are not closed");
    }
  }

  return result;
};
/**
 * Raise an error
 * @function Parser#raiseError
 * @memberOf module:php-parser
 */


Parser.prototype.raiseError = function (message, msgExpect, expect, token) {
  message += " on line " + this.lexer.yylloc.first_line;

  if (!this.suppressErrors) {
    var err = new SyntaxError(message, this.filename, this.lexer.yylloc.first_line);
    err.lineNumber = this.lexer.yylloc.first_line;
    err.fileName = this.filename;
    err.columnNumber = this.lexer.yylloc.first_column;
    throw err;
  } // Error node :


  var node = this.ast.prepare("error", null, this)(message, token, this.lexer.yylloc.first_line, expect);

  this._errors.push(node);

  return node;
};
/**
 * handling errors
 * @function Parser#error
 * @memberOf module:php-parser
 */


Parser.prototype.error = function (expect) {
  var msg = "Parse Error : syntax error";
  var token = this.getTokenName(this.token);
  var msgExpect = "";

  if (this.token !== this.EOF) {
    if (isNumber(this.token)) {
      var symbol = this.text();

      if (symbol.length > 10) {
        symbol = symbol.substring(0, 7) + "...";
      }

      token = "'" + symbol + "' (" + token + ")";
    }

    msg += ", unexpected " + token;
  }

  if (expect && !Array.isArray(expect)) {
    if (isNumber(expect) || expect.length === 1) {
      msgExpect = ", expecting " + this.getTokenName(expect);
    }

    msg += msgExpect;
  }

  return this.raiseError(msg, msgExpect, expect, token);
};
/**
 * Creates a new AST node
 * @function Parser#node
 * @memberOf module:php-parser
 */


Parser.prototype.node = function (name) {
  if (this.extractDoc) {
    var docs = null;

    if (this._docIndex < this._docs.length) {
      docs = this._docs.slice(this._docIndex);
      this._docIndex = this._docs.length;

      if (this.debug) {
        // eslint-disable-next-line no-console
        console.log(new Error("Append docs on " + name)); // eslint-disable-next-line no-console

        console.log(docs);
      }
    }

    var node = this.ast.prepare(name, docs, this);
    /*
     * TOKENS :
     * node1 commentA token commmentB node2 commentC token commentD node3 commentE token
     *
     * AST :
     * structure:S1 [
     *    left: node1 ( trail: commentA ),
     *    right: structure:S2 [
     *       node2 (lead: commentB, trail: commentC),
     *       node3 (lead: commentD)
     *    ],
     *    trail: commentE
     * ]
     *
     * Algorithm :
     *
     * Attach the last comments on parent of current node
     * If a new node is started and the parent has a trailing comment
     * the move it on previous node
     *
     * start S2
     * start node1
     * consume node1 & set commentA as trailingComment on S2
     * start S2
     * S1 has a trailingComment, attach it on node1
     * ...
     * NOTE : As the trailingComment Behavior depends on AST, it will be build on
     * the AST layer - last child node will keep it's trailingComment nodes
     */

    node.postBuild = function (self) {
      if (this._docIndex < this._docs.length) {
        if (this._lastNode) {
          var offset = this.prev[2];
          var max = this._docIndex;

          for (; max < this._docs.length; max++) {
            if (this._docs[max].offset > offset) {
              break;
            }
          }

          if (max > this._docIndex) {
            // inject trailing comment on child node
            this._lastNode.setTrailingComments(this._docs.slice(this._docIndex, max));

            this._docIndex = max;
          }
        } else if (this.token === this.EOF) {
          // end of content
          self.setTrailingComments(this._docs.slice(this._docIndex));
          this._docIndex = this._docs.length;
        }
      }

      this._lastNode = self;
    }.bind(this);

    return node;
  }

  return this.ast.prepare(name, null, this);
};
/**
 * expects an end of statement or end of file
 * @function Parser#expectEndOfStatement
 * @memberOf module:php-parser
 * @return {boolean}
 */


Parser.prototype.expectEndOfStatement = function (node) {
  if (this.token === ";") {
    // include only real ';' statements
    // https://github.com/glayzzle/php-parser/issues/164
    if (node && this.lexer.yytext === ";") {
      node.includeToken(this);
    }
  } else if (this.token !== this.tok.T_INLINE_HTML && this.token !== this.EOF) {
    this.error(";");
    return false;
  }

  this.next();
  return true;
};

var ignoreStack = ["parser.next", "parser.node", "parser.showlog"];
/**
 * outputs some debug information on current token
 * @private
 * @function Parser#showlog
 * @memberOf module:php-parser
 */

Parser.prototype.showlog = function () {
  var stack = new Error().stack.split("\n");
  var line;

  for (var offset = 2; offset < stack.length; offset++) {
    line = stack[offset].trim();
    var found = false;

    for (var i = 0; i < ignoreStack.length; i++) {
      if (line.substring(3, 3 + ignoreStack[i].length) === ignoreStack[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
      break;
    }
  } // eslint-disable-next-line no-console


  console.log("Line " + this.lexer.yylloc.first_line + " : " + this.getTokenName(this.token) + ">" + this.lexer.yytext + "<" + " @-->" + line);
  return this;
};
/**
 * Force the parser to check the current token.
 *
 * If the current token does not match to expected token,
 * the an error will be raised.
 *
 * If the suppressError mode is activated, then the error will
 * be added to the program error stack and this function will return `false`.
 *
 * @function Parser#expect
 * @memberOf module:php-parser
 * @param {String|Number} token
 * @return {boolean}
 * @throws Error
 */


Parser.prototype.expect = function (token) {
  if (Array.isArray(token)) {
    if (token.indexOf(this.token) === -1) {
      this.error(token);
      return false;
    }
  } else if (this.token != token) {
    this.error(token);
    return false;
  }

  return true;
};
/**
 * Returns the current token contents
 * @function Parser#text
 * @memberOf module:php-parser
 * @return {String}
 */


Parser.prototype.text = function () {
  return this.lexer.yytext;
};
/**
 * consume the next token
 * @function Parser#next
 * @memberOf module:php-parser
 */


Parser.prototype.next = function () {
  // prepare the back command
  if (this.token !== ";" || this.lexer.yytext === ";") {
    // ignore '?>' from automated resolution
    // https://github.com/glayzzle/php-parser/issues/168
    this.prev = [this.lexer.yylloc.last_line, this.lexer.yylloc.last_column, this.lexer.offset];
  } // eating the token


  this.lex(); // showing the debug

  if (this.debug) {
    this.showlog();
  } // handling comments


  if (this.extractDoc) {
    while (this.token === this.tok.T_COMMENT || this.token === this.tok.T_DOC_COMMENT) {
      // APPEND COMMENTS
      if (this.token === this.tok.T_COMMENT) {
        this._docs.push(this.read_comment());
      } else {
        this._docs.push(this.read_doc_comment());
      }
    }
  }

  return this;
};
/**
 * Eating a token
 * @function Parser#lex
 * @memberOf module:php-parser
 */


Parser.prototype.lex = function () {
  // append on token stack
  if (this.extractTokens) {
    do {
      // the token
      this.token = this.lexer.lex() || this.EOF;
      if (this.token === this.EOF) return this;
      var entry = this.lexer.yytext;

      if (this.lexer.engine.tokens.values.hasOwnProperty(this.token)) {
        entry = [this.lexer.engine.tokens.values[this.token], entry, this.lexer.yylloc.first_line, this.lexer.yylloc.first_offset, this.lexer.offset];
      } else {
        entry = [null, entry, this.lexer.yylloc.first_line, this.lexer.yylloc.first_offset, this.lexer.offset];
      }

      this._tokens.push(entry);

      if (this.token === this.tok.T_CLOSE_TAG) {
        // https://github.com/php/php-src/blob/7ff186434e82ee7be7c59d0db9a976641cf7b09c/Zend/zend_compile.c#L1680
        this.token = ";";
        return this;
      } else if (this.token === this.tok.T_OPEN_TAG_WITH_ECHO) {
        this.token = this.tok.T_ECHO;
        return this;
      }
    } while (this.token === this.tok.T_WHITESPACE || // ignore white space
    !this.extractDoc && (this.token === this.tok.T_COMMENT || // ignore single lines comments
    this.token === this.tok.T_DOC_COMMENT) || // ignore doc comments
    // ignore open tags
    this.token === this.tok.T_OPEN_TAG);
  } else {
    this.token = this.lexer.lex() || this.EOF;
  }

  return this;
};
/**
 * Check if token is of specified type
 * @function Parser#is
 * @memberOf module:php-parser
 */


Parser.prototype.is = function (type) {
  if (Array.isArray(type)) {
    return type.indexOf(this.token) !== -1;
  }

  return this.entries[type].has(this.token);
}; // extends the parser with syntax files


[__webpack_require__(3665), __webpack_require__(8342), __webpack_require__(9673), __webpack_require__(3166), __webpack_require__(2706), __webpack_require__(4002), __webpack_require__(3745), __webpack_require__(9905), __webpack_require__(1250), __webpack_require__(9889), __webpack_require__(4992), __webpack_require__(7991), __webpack_require__(4544), __webpack_require__(9957), __webpack_require__(1099)].forEach(function (ext) {
  for (var k in ext) {
    if (Parser.prototype.hasOwnProperty(k)) {
      // @see https://github.com/glayzzle/php-parser/issues/234
      throw new Error("Function " + k + " is already defined - collision");
    }

    Parser.prototype[k] = ext[k];
  }
});
module.exports = Parser;

/***/ }),

/***/ 3665:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * Parse an array
   * ```ebnf
   * array ::= T_ARRAY '(' array_pair_list ')' |
   *   '[' array_pair_list ']'
   * ```
   */
  read_array: function read_array() {
    var expect = null;
    var shortForm = false;
    var result = this.node("array");

    if (this.token === this.tok.T_ARRAY) {
      this.next().expect("(");
      expect = ")";
    } else {
      shortForm = true;
      expect = "]";
    }

    var items = [];

    if (this.next().token !== expect) {
      items = this.read_array_pair_list(shortForm);
    }

    this.expect(expect);
    this.next();
    return result(shortForm, items);
  },

  /*
   * Reads an array of items
   * ```ebnf
   * array_pair_list ::= array_pair (',' array_pair?)*
   * ```
   */
  read_array_pair_list: function read_array_pair_list(shortForm) {
    var self = this;
    return this.read_list(function () {
      return self.read_array_pair(shortForm);
    }, ",", true);
  },

  /*
   * Reads an entry
   * array_pair:
   *  expr T_DOUBLE_ARROW expr
   *  | expr
   *  | expr T_DOUBLE_ARROW '&' variable
   *  | '&' variable
   *  | expr T_DOUBLE_ARROW T_LIST '(' array_pair_list ')'
   *  | T_LIST '(' array_pair_list ')'
   */
  read_array_pair: function read_array_pair(shortForm) {
    if (!shortForm && this.token === ")" || shortForm && this.token === "]") {
      return;
    }

    if (this.token === ",") {
      return this.node("noop")();
    }

    var entry = this.node("entry");
    var key = null;
    var value = null;
    var byRef = false;
    var unpack = false;

    if (this.token === "&") {
      this.next();
      byRef = true;
      value = this.read_variable(true, false);
    } else if (this.token === this.tok.T_ELLIPSIS && this.version >= 704) {
      this.next();

      if (this.token === "&") {
        this.error();
      }

      unpack = true;
      value = this.read_expr();
    } else {
      var expr = this.read_expr();

      if (this.token === this.tok.T_DOUBLE_ARROW) {
        this.next();
        key = expr;

        if (this.token === "&") {
          this.next();
          byRef = true;
          value = this.read_variable(true, false);
        } else {
          value = this.read_expr();
        }
      } else {
        value = expr;
      }
    }

    return entry(key, value, byRef, unpack);
  }
};

/***/ }),

/***/ 8342:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = {
  /*
   * reading a class
   * ```ebnf
   * class ::= class_scope? T_CLASS T_STRING (T_EXTENDS NAMESPACE_NAME)? (T_IMPLEMENTS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' CLASS_BODY '}'
   * ```
   */
  read_class_declaration_statement: function read_class_declaration_statement() {
    var result = this.node("class");
    var flag = this.read_class_modifiers(); // graceful mode : ignore token & go next

    if (this.token !== this.tok.T_CLASS) {
      this.error(this.tok.T_CLASS);
      this.next();
      return null;
    }

    this.next().expect(this.tok.T_STRING);
    var propName = this.node("identifier");
    var name = this.text();
    this.next();
    propName = propName(name);
    var propExtends = this.read_extends_from();
    var propImplements = this.read_implements_list();
    this.expect("{");
    var body = this.next().read_class_body();
    return result(propName, propExtends, propImplements, body, flag);
  },
  read_class_modifiers: function read_class_modifiers() {
    return [0, 0, this.read_class_modifier()];
  },
  read_class_modifier: function read_class_modifier() {
    var result = 0;

    if (this.token === this.tok.T_ABSTRACT) {
      this.next();
      return 1;
    } else if (this.token === this.tok.T_FINAL) {
      this.next();
      return 2;
    }

    return result;
  },

  /*
   * Reads a class body
   * ```ebnf
   *   class_body ::= (member_flags? (T_VAR | T_STRING | T_FUNCTION))*
   * ```
   */
  read_class_body: function read_class_body() {
    var result = [];

    while (this.token !== this.EOF && this.token !== "}") {
      if (this.token === this.tok.T_COMMENT) {
        result.push(this.read_comment());
        continue;
      }

      if (this.token === this.tok.T_DOC_COMMENT) {
        result.push(this.read_doc_comment());
        continue;
      } // check T_USE trait


      if (this.token === this.tok.T_USE) {
        result = result.concat(this.read_trait_use_statement());
        continue;
      } // read member flags


      var flags = this.read_member_flags(false); // check constant

      if (this.token === this.tok.T_CONST) {
        var constants = this.read_constant_list(flags);

        if (this.expect(";")) {
          this.next();
        }

        result = result.concat(constants);
        continue;
      } // jump over T_VAR then land on T_VARIABLE


      if (this.token === this.tok.T_VAR) {
        this.next().expect(this.tok.T_VARIABLE);
        flags[0] = null; // public (as null)

        flags[1] = 0; // non static var
      }

      if (this.token === this.tok.T_FUNCTION) {
        // reads a function
        result.push(this.read_function(false, flags));
      } else if (this.token === this.tok.T_VARIABLE || // support https://wiki.php.net/rfc/typed_properties_v2
      this.version >= 704 && (this.token === "?" || this.token === this.tok.T_CALLABLE || this.token === this.tok.T_ARRAY || this.token === this.tok.T_NS_SEPARATOR || this.token === this.tok.T_STRING || this.token === this.tok.T_NAMESPACE)) {
        // reads a variable
        var variables = this.read_variable_list(flags);
        this.expect(";");
        this.next();
        result = result.concat(variables);
      } else {
        // raise an error
        this.error([this.tok.T_CONST, this.tok.T_VARIABLE, this.tok.T_FUNCTION]); // ignore token

        this.next();
      }
    }

    this.expect("}");
    this.next();
    return result;
  },

  /*
   * Reads variable list
   * ```ebnf
   *  variable_list ::= (variable_declaration ',')* variable_declaration
   * ```
   */
  read_variable_list: function read_variable_list(flags) {
    var result = this.node("propertystatement");
    var properties = this.read_list(
    /*
     * Reads a variable declaration
     *
     * ```ebnf
     *  variable_declaration ::= T_VARIABLE '=' scalar
     * ```
     */
    function read_variable_declaration() {
      var result = this.node("property");

      var _this$read_optional_t = this.read_optional_type(),
          _this$read_optional_t2 = _slicedToArray(_this$read_optional_t, 2),
          nullable = _this$read_optional_t2[0],
          type = _this$read_optional_t2[1];

      this.expect(this.tok.T_VARIABLE);
      var propName = this.node("identifier");
      var name = this.text().substring(1); // ignore $

      this.next();
      propName = propName(name);

      if (this.token === ";" || this.token === ",") {
        return result(propName, null, nullable, type);
      } else if (this.token === "=") {
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L815
        return result(propName, this.next().read_expr(), nullable, type);
      } else {
        this.expect([",", ";", "="]);
        return result(propName, null, nullable, type);
      }
    }, ",");
    return result(null, properties, flags);
  },

  /*
   * Reads constant list
   * ```ebnf
   *  constant_list ::= T_CONST (constant_declaration ',')* constant_declaration
   * ```
   */
  read_constant_list: function read_constant_list(flags) {
    if (this.expect(this.tok.T_CONST)) {
      this.next();
    }

    var result = this.node("classconstant");
    var items = this.read_list(
    /*
     * Reads a constant declaration
     *
     * ```ebnf
     *  constant_declaration ::= (T_STRING | IDENTIFIER) '=' expr
     * ```
     * @return {Constant} [:link:](AST.md#constant)
     */
    function read_constant_declaration() {
      var result = this.node("constant");
      var constName = null;
      var value = null;

      if (this.token === this.tok.T_STRING || this.version >= 700 && this.is("IDENTIFIER")) {
        constName = this.node("identifier");
        var name = this.text();
        this.next();
        constName = constName(name);
      } else {
        this.expect("IDENTIFIER");
      }

      if (this.expect("=")) {
        value = this.next().read_expr();
      }

      return result(constName, value);
    }, ",");
    return result(null, items, flags);
  },

  /*
   * Read member flags
   * @return array
   *  1st index : 0 => public, 1 => protected, 2 => private
   *  2nd index : 0 => instance member, 1 => static member
   *  3rd index : 0 => normal, 1 => abstract member, 2 => final member
   */
  read_member_flags: function read_member_flags(asInterface) {
    var result = [-1, -1, -1];

    if (this.is("T_MEMBER_FLAGS")) {
      var idx = 0,
          val = 0;

      do {
        switch (this.token) {
          case this.tok.T_PUBLIC:
            idx = 0;
            val = 0;
            break;

          case this.tok.T_PROTECTED:
            idx = 0;
            val = 1;
            break;

          case this.tok.T_PRIVATE:
            idx = 0;
            val = 2;
            break;

          case this.tok.T_STATIC:
            idx = 1;
            val = 1;
            break;

          case this.tok.T_ABSTRACT:
            idx = 2;
            val = 1;
            break;

          case this.tok.T_FINAL:
            idx = 2;
            val = 2;
            break;
        }

        if (asInterface) {
          if (idx == 0 && val == 2) {
            // an interface can't be private
            this.expect([this.tok.T_PUBLIC, this.tok.T_PROTECTED]);
            val = -1;
          } else if (idx == 2 && val == 1) {
            // an interface cant be abstract
            this.error();
            val = -1;
          }
        }

        if (result[idx] !== -1) {
          // already defined flag
          this.error();
        } else if (val !== -1) {
          result[idx] = val;
        }
      } while (this.next().is("T_MEMBER_FLAGS"));
    }

    if (result[1] == -1) result[1] = 0;
    if (result[2] == -1) result[2] = 0;
    return result;
  },

  /*
   * optional_type:
   *	  /- empty -/	{ $$ = NULL; }
   *   |	type_expr	{ $$ = $1; }
   * ;
   *
   * type_expr:
   *		type		{ $$ = $1; }
   *	|	'?' type	{ $$ = $2; $$->attr |= ZEND_TYPE_NULLABLE; }
   *	|	union_type	{ $$ = $1; }
   * ;
   *
   * type:
   * 		T_ARRAY		{ $$ = zend_ast_create_ex(ZEND_AST_TYPE, IS_ARRAY); }
   * 	|	T_CALLABLE	{ $$ = zend_ast_create_ex(ZEND_AST_TYPE, IS_CALLABLE); }
   * 	|	name		{ $$ = $1; }
   * ;
   *
   * union_type:
   * 		type '|' type       { $$ = zend_ast_create_list(2, ZEND_AST_TYPE_UNION, $1, $3); }
   * 	|	union_type '|' type { $$ = zend_ast_list_add($1, $3); }
   * ;
   */
  read_optional_type: function read_optional_type() {
    var nullable = false;

    if (this.token === "?") {
      nullable = true;
      this.next();
    }

    var type = this.read_type();

    if (nullable && !type) {
      this.raiseError("Expecting a type definition combined with nullable operator");
    }

    if (!nullable && !type) {
      return [false, null];
    }

    if (this.token === "|") {
      type = [type];

      do {
        this.next();
        var variant = this.read_type();

        if (!variant) {
          this.raiseError("Expecting a type definition");
          break;
        }

        type.push(variant);
      } while (this.token === "|");
    }

    return [nullable, type];
  },

  /*
   * reading an interface
   * ```ebnf
   * interface ::= T_INTERFACE T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' INTERFACE_BODY '}'
   * ```
   */
  read_interface_declaration_statement: function read_interface_declaration_statement() {
    var result = this.node("interface");

    if (this.token !== this.tok.T_INTERFACE) {
      this.error(this.tok.T_INTERFACE);
      this.next();
      return null;
    }

    this.next().expect(this.tok.T_STRING);
    var propName = this.node("identifier");
    var name = this.text();
    this.next();
    propName = propName(name);
    var propExtends = this.read_interface_extends_list();
    this.expect("{");
    var body = this.next().read_interface_body();
    return result(propName, propExtends, body);
  },

  /*
   * Reads an interface body
   * ```ebnf
   *   interface_body ::= (member_flags? (T_CONST | T_FUNCTION))*
   * ```
   */
  read_interface_body: function read_interface_body() {
    var result = [];

    while (this.token !== this.EOF && this.token !== "}") {
      if (this.token === this.tok.T_COMMENT) {
        result.push(this.read_comment());
        continue;
      }

      if (this.token === this.tok.T_DOC_COMMENT) {
        result.push(this.read_doc_comment());
        continue;
      } // read member flags


      var flags = this.read_member_flags(true); // check constant

      if (this.token == this.tok.T_CONST) {
        var constants = this.read_constant_list(flags);

        if (this.expect(";")) {
          this.next();
        }

        result = result.concat(constants);
      } else if (this.token === this.tok.T_FUNCTION) {
        // reads a function
        var method = this.read_function_declaration(2, flags);
        method.parseFlags(flags);
        result.push(method);

        if (this.expect(";")) {
          this.next();
        }
      } else {
        // raise an error
        this.error([this.tok.T_CONST, this.tok.T_FUNCTION]);
        this.next();
      }
    }

    if (this.expect("}")) {
      this.next();
    }

    return result;
  },

  /*
   * reading a trait
   * ```ebnf
   * trait ::= T_TRAIT T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' FUNCTION* '}'
   * ```
   */
  read_trait_declaration_statement: function read_trait_declaration_statement() {
    var result = this.node("trait"); // graceful mode : ignore token & go next

    if (this.token !== this.tok.T_TRAIT) {
      this.error(this.tok.T_TRAIT);
      this.next();
      return null;
    }

    this.next().expect(this.tok.T_STRING);
    var propName = this.node("identifier");
    var name = this.text();
    this.next();
    propName = propName(name);
    this.expect("{");
    var body = this.next().read_class_body();
    return result(propName, body);
  },

  /*
   * reading a use statement
   * ```ebnf
   * trait_use_statement ::= namespace_name (',' namespace_name)* ('{' trait_use_alias '}')?
   * ```
   */
  read_trait_use_statement: function read_trait_use_statement() {
    // defines use statements
    var node = this.node("traituse");
    this.expect(this.tok.T_USE) && this.next();
    var traits = [this.read_namespace_name()];
    var adaptations = null;

    while (this.token === ",") {
      traits.push(this.next().read_namespace_name());
    }

    if (this.token === "{") {
      adaptations = []; // defines alias statements

      while (this.next().token !== this.EOF) {
        if (this.token === "}") break;
        adaptations.push(this.read_trait_use_alias());
        this.expect(";");
      }

      if (this.expect("}")) {
        this.next();
      }
    } else {
      if (this.expect(";")) {
        this.next();
      }
    }

    return node(traits, adaptations);
  },

  /*
   * Reading trait alias
   * ```ebnf
   * trait_use_alias ::= namespace_name ( T_DOUBLE_COLON T_STRING )? (T_INSTEADOF namespace_name) | (T_AS member_flags? T_STRING)
   * ```
   * name list : https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L303
   * trait adaptation : https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L742
   */
  read_trait_use_alias: function read_trait_use_alias() {
    var node = this.node();
    var trait = null;
    var method;

    if (this.is("IDENTIFIER")) {
      method = this.node("identifier");
      var methodName = this.text();
      this.next();
      method = method(methodName);
    } else {
      method = this.read_namespace_name();

      if (this.token === this.tok.T_DOUBLE_COLON) {
        this.next();

        if (this.token === this.tok.T_STRING || this.version >= 700 && this.is("IDENTIFIER")) {
          trait = method;
          method = this.node("identifier");

          var _methodName = this.text();

          this.next();
          method = method(_methodName);
        } else {
          this.expect(this.tok.T_STRING);
        }
      } else {
        // convert identifier as string
        method = method.name;
      }
    } // handle trait precedence


    if (this.token === this.tok.T_INSTEADOF) {
      return node("traitprecedence", trait, method, this.next().read_name_list());
    } else if (this.token === this.tok.T_AS) {
      // handle trait alias
      var flags = null;
      var alias = null;

      if (this.next().is("T_MEMBER_FLAGS")) {
        flags = this.read_member_flags();
      }

      if (this.token === this.tok.T_STRING || this.version >= 700 && this.is("IDENTIFIER")) {
        alias = this.node("identifier");
        var name = this.text();
        this.next();
        alias = alias(name);
      } else if (flags === false) {
        // no visibility flags and no name => too bad
        this.expect(this.tok.T_STRING);
      }

      return node("traitalias", trait, method, alias, flags);
    } // handle errors


    this.expect([this.tok.T_AS, this.tok.T_INSTEADOF]);
    return node("traitalias", trait, method, null, null);
  }
};

/***/ }),

/***/ 9673:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   *  Comments with // or # or / * ... * /
   */
  read_comment: function read_comment() {
    var text = this.text();
    var result = this.ast.prepare(text.substring(0, 2) === "/*" ? "commentblock" : "commentline", null, this);
    var offset = this.lexer.yylloc.first_offset; // handle location on comment

    var prev = this.prev;
    this.prev = [this.lexer.yylloc.last_line, this.lexer.yylloc.last_column, this.lexer.offset];
    this.lex();
    result = result(text);
    result.offset = offset;
    this.prev = prev;
    return result;
  },

  /*
   * Comments with / ** ... * /
   */
  read_doc_comment: function read_doc_comment() {
    var result = this.ast.prepare("commentblock", null, this);
    var offset = this.lexer.yylloc.first_offset;
    var text = this.text();
    var prev = this.prev;
    this.prev = [this.lexer.yylloc.last_line, this.lexer.yylloc.last_column, this.lexer.offset];
    this.lex();
    result = result(text);
    result.offset = offset;
    this.prev = prev;
    return result;
  }
};

/***/ }),

/***/ 3166:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  read_expr: function read_expr(expr) {
    var result = this.node();

    if (this.token === "@") {
      if (!expr) {
        expr = this.next().read_expr();
      }

      return result("silent", expr);
    }

    if (!expr) {
      expr = this.read_expr_item();
    } // binary operations


    if (this.token === "|") return result("bin", "|", expr, this.next().read_expr());
    if (this.token === "&") return result("bin", "&", expr, this.next().read_expr());
    if (this.token === "^") return result("bin", "^", expr, this.next().read_expr());
    if (this.token === ".") return result("bin", ".", expr, this.next().read_expr());
    if (this.token === "+") return result("bin", "+", expr, this.next().read_expr());
    if (this.token === "-") return result("bin", "-", expr, this.next().read_expr());
    if (this.token === "*") return result("bin", "*", expr, this.next().read_expr());
    if (this.token === "/") return result("bin", "/", expr, this.next().read_expr());
    if (this.token === "%") return result("bin", "%", expr, this.next().read_expr());
    if (this.token === this.tok.T_POW) return result("bin", "**", expr, this.next().read_expr());
    if (this.token === this.tok.T_SL) return result("bin", "<<", expr, this.next().read_expr());
    if (this.token === this.tok.T_SR) return result("bin", ">>", expr, this.next().read_expr()); // more binary operations (formerly bool)

    if (this.token === this.tok.T_BOOLEAN_OR) return result("bin", "||", expr, this.next().read_expr());
    if (this.token === this.tok.T_LOGICAL_OR) return result("bin", "or", expr, this.next().read_expr());
    if (this.token === this.tok.T_BOOLEAN_AND) return result("bin", "&&", expr, this.next().read_expr());
    if (this.token === this.tok.T_LOGICAL_AND) return result("bin", "and", expr, this.next().read_expr());
    if (this.token === this.tok.T_LOGICAL_XOR) return result("bin", "xor", expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_IDENTICAL) return result("bin", "===", expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_NOT_IDENTICAL) return result("bin", "!==", expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_EQUAL) return result("bin", "==", expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_NOT_EQUAL) return result("bin", "!=", expr, this.next().read_expr());
    if (this.token === "<") return result("bin", "<", expr, this.next().read_expr());
    if (this.token === ">") return result("bin", ">", expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_SMALLER_OR_EQUAL) return result("bin", "<=", expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_GREATER_OR_EQUAL) return result("bin", ">=", expr, this.next().read_expr());
    if (this.token === this.tok.T_SPACESHIP) return result("bin", "<=>", expr, this.next().read_expr());

    if (this.token === this.tok.T_INSTANCEOF) {
      expr = result("bin", "instanceof", expr, this.next().read_class_name_reference());

      if (this.token !== ";" && this.token !== this.tok.T_INLINE_HTML && this.token !== this.EOF) {
        expr = this.read_expr(expr);
      }
    } // extra operations :
    // $username = $_GET['user'] ?? 'nobody';


    if (this.token === this.tok.T_COALESCE) return result("bin", "??", expr, this.next().read_expr()); // extra operations :
    // $username = $_GET['user'] ? true : false;

    if (this.token === "?") {
      var trueArg = null;

      if (this.next().token !== ":") {
        trueArg = this.read_expr();
      }

      this.expect(":") && this.next();
      return result("retif", expr, trueArg, this.read_expr());
    } else {
      // see #193
      result.destroy(expr);
    }

    return expr;
  },

  /*
   * Reads a cast expression
   */
  read_expr_cast: function read_expr_cast(type) {
    return this.node("cast")(type, this.text(), this.next().read_expr());
  },

  /*
   * Read a isset variable
   */
  read_isset_variable: function read_isset_variable() {
    return this.read_expr();
  },

  /*
   * Reads isset variables
   */
  read_isset_variables: function read_isset_variables() {
    return this.read_function_list(this.read_isset_variable, ",");
  },

  /*
   * Reads internal PHP functions
   */
  read_internal_functions_in_yacc: function read_internal_functions_in_yacc() {
    var result = null;

    switch (this.token) {
      case this.tok.T_ISSET:
        {
          result = this.node("isset");

          if (this.next().expect("(")) {
            this.next();
          }

          var variables = this.read_isset_variables();

          if (this.expect(")")) {
            this.next();
          }

          result = result(variables);
        }
        break;

      case this.tok.T_EMPTY:
        {
          result = this.node("empty");

          if (this.next().expect("(")) {
            this.next();
          }

          var expression = this.read_expr();

          if (this.expect(")")) {
            this.next();
          }

          result = result(expression);
        }
        break;

      case this.tok.T_INCLUDE:
        result = this.node("include")(false, false, this.next().read_expr());
        break;

      case this.tok.T_INCLUDE_ONCE:
        result = this.node("include")(true, false, this.next().read_expr());
        break;

      case this.tok.T_EVAL:
        {
          result = this.node("eval");

          if (this.next().expect("(")) {
            this.next();
          }

          var expr = this.read_expr();

          if (this.expect(")")) {
            this.next();
          }

          result = result(expr);
        }
        break;

      case this.tok.T_REQUIRE:
        result = this.node("include")(false, true, this.next().read_expr());
        break;

      case this.tok.T_REQUIRE_ONCE:
        result = this.node("include")(true, true, this.next().read_expr());
        break;
    }

    return result;
  },

  /*
   * Reads optional expression
   */
  read_optional_expr: function read_optional_expr(stopToken) {
    if (this.token !== stopToken) {
      return this.read_expr();
    }

    return null;
  },

  /*
   * Reads exit expression
   */
  read_exit_expr: function read_exit_expr() {
    var expression = null;

    if (this.token === "(") {
      this.next();
      expression = this.read_optional_expr(")");
      this.expect(")") && this.next();
    }

    return expression;
  },

  /*
   * ```ebnf
   * Reads an expression
   *  expr ::= @todo
   * ```
   */
  read_expr_item: function read_expr_item() {
    var result, expr;
    if (this.token === "+") return this.node("unary")("+", this.next().read_expr());
    if (this.token === "-") return this.node("unary")("-", this.next().read_expr());
    if (this.token === "!") return this.node("unary")("!", this.next().read_expr());
    if (this.token === "~") return this.node("unary")("~", this.next().read_expr());

    if (this.token === "(") {
      expr = this.next().read_expr();
      expr.parenthesizedExpression = true;
      this.expect(")") && this.next();
      return this.handleDereferencable(expr);
    }

    if (this.token === "`") {
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1048
      return this.read_encapsed_string("`");
    }

    if (this.token === this.tok.T_LIST) {
      var assign = null;
      var isInner = this.innerList;
      result = this.node("list");

      if (!isInner) {
        assign = this.node("assign");
      }

      if (this.next().expect("(")) {
        this.next();
      }

      if (!this.innerList) this.innerList = true; // reads inner items

      var assignList = this.read_array_pair_list(false);

      if (this.expect(")")) {
        this.next();
      } // check if contains at least one assignment statement


      var hasItem = false;

      for (var i = 0; i < assignList.length; i++) {
        if (assignList[i] !== null && assignList[i].kind !== "noop") {
          hasItem = true;
          break;
        }
      }

      if (!hasItem) {
        this.raiseError("Fatal Error :  Cannot use empty list on line " + this.lexer.yylloc.first_line);
      } // handles the node resolution


      if (!isInner) {
        this.innerList = false;

        if (this.expect("=")) {
          return assign(result(assignList, false), this.next().read_expr(), "=");
        } else {
          // error fallback : list($a, $b);
          return result(assignList, false);
        }
      } else {
        return result(assignList, false);
      }
    }

    if (this.token === this.tok.T_CLONE) return this.node("clone")(this.next().read_expr());

    switch (this.token) {
      case this.tok.T_INC:
        return this.node("pre")("+", this.next().read_variable(false, false));

      case this.tok.T_DEC:
        return this.node("pre")("-", this.next().read_variable(false, false));

      case this.tok.T_NEW:
        return this.read_new_expr();

      case this.tok.T_ISSET:
      case this.tok.T_EMPTY:
      case this.tok.T_INCLUDE:
      case this.tok.T_INCLUDE_ONCE:
      case this.tok.T_EVAL:
      case this.tok.T_REQUIRE:
      case this.tok.T_REQUIRE_ONCE:
        return this.read_internal_functions_in_yacc();

      case this.tok.T_INT_CAST:
        return this.read_expr_cast("int");

      case this.tok.T_DOUBLE_CAST:
        return this.read_expr_cast("float");

      case this.tok.T_STRING_CAST:
        return this.read_expr_cast(this.text().indexOf("binary") !== -1 ? "binary" : "string");

      case this.tok.T_ARRAY_CAST:
        return this.read_expr_cast("array");

      case this.tok.T_OBJECT_CAST:
        return this.read_expr_cast("object");

      case this.tok.T_BOOL_CAST:
        return this.read_expr_cast("bool");

      case this.tok.T_UNSET_CAST:
        return this.read_expr_cast("unset");

      case this.tok.T_EXIT:
        {
          var useDie = this.lexer.yytext.toLowerCase() === "die";
          result = this.node("exit");
          this.next();
          var expression = this.read_exit_expr();
          return result(expression, useDie);
        }

      case this.tok.T_PRINT:
        return this.node("print")(this.next().read_expr());
      // T_YIELD (expr (T_DOUBLE_ARROW expr)?)?

      case this.tok.T_YIELD:
        {
          var value = null;
          var key = null;
          result = this.node("yield");

          if (this.next().is("EXPR")) {
            // reads the yield return value
            value = this.read_expr();

            if (this.token === this.tok.T_DOUBLE_ARROW) {
              // reads the yield returned key
              key = value;
              value = this.next().read_expr();
            }
          }

          return result(value, key);
        }
      // T_YIELD_FROM expr

      case this.tok.T_YIELD_FROM:
        result = this.node("yieldfrom");
        expr = this.next().read_expr();
        return result(expr);

      case this.tok.T_FN:
      case this.tok.T_FUNCTION:
        return this.read_inline_function();

      case this.tok.T_STATIC:
        {
          var backup = [this.token, this.lexer.getState()];
          this.next();

          if (this.token === this.tok.T_FUNCTION || this.version >= 704 && this.token === this.tok.T_FN) {
            // handles static function
            return this.read_inline_function([0, 1, 0]);
          } else {
            // rollback
            this.lexer.tokens.push(backup);
            this.next();
          }
        }
    } // SCALAR | VARIABLE


    if (this.is("VARIABLE")) {
      result = this.node();
      expr = this.read_variable(false, false); // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L877
      // should accept only a variable

      var isConst = expr.kind === "identifier" || expr.kind === "staticlookup" && expr.offset.kind === "identifier"; // VARIABLES SPECIFIC OPERATIONS

      switch (this.token) {
        case "=":
          {
            if (isConst) this.error("VARIABLE");

            if (this.next().token == "&") {
              return this.read_assignref(result, expr);
            }

            return result("assign", expr, this.read_expr(), "=");
          }
        // operations :

        case this.tok.T_PLUS_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "+=");

        case this.tok.T_MINUS_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "-=");

        case this.tok.T_MUL_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "*=");

        case this.tok.T_POW_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "**=");

        case this.tok.T_DIV_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "/=");

        case this.tok.T_CONCAT_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), ".=");

        case this.tok.T_MOD_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "%=");

        case this.tok.T_AND_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "&=");

        case this.tok.T_OR_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "|=");

        case this.tok.T_XOR_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "^=");

        case this.tok.T_SL_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "<<=");

        case this.tok.T_SR_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), ">>=");

        case this.tok.T_COALESCE_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "??=");

        case this.tok.T_INC:
          if (isConst) this.error("VARIABLE");
          this.next();
          return result("post", "+", expr);

        case this.tok.T_DEC:
          if (isConst) this.error("VARIABLE");
          this.next();
          return result("post", "-", expr);

        default:
          // see #193
          result.destroy(expr);
      }
    } else if (this.is("SCALAR")) {
      result = this.node();
      expr = this.read_scalar();

      if (expr.kind === "array" && expr.shortForm && this.token === "=") {
        // list assign
        var list = this.convertToList(expr);
        if (expr.loc) list.loc = expr.loc;
        var right = this.next().read_expr();
        return result("assign", list, right, "=");
      } else {
        // see #189 - swap docs on nodes
        result.destroy(expr);
      } // classic array


      return this.handleDereferencable(expr);
    } else {
      this.error("EXPR");
      this.next();
    } // returns variable | scalar


    return expr;
  },

  /*
   * Recursively convert nested array to nested list.
   */
  convertToList: function convertToList(array) {
    var _this = this;

    var convertedItems = array.items.map(function (entry) {
      if (entry.value && entry.value.kind === "array" && entry.value.shortForm) {
        entry.value = _this.convertToList(entry.value);
      }

      return entry;
    });
    var node = this.node("list")(convertedItems, true);
    if (array.loc) node.loc = array.loc;
    if (array.leadingComments) node.leadingComments = array.leadingComments;
    if (array.trailingComments) node.trailingComments = array.trailingComments;
    return node;
  },

  /*
   * Reads assignment
   * @param {*} left
   */
  read_assignref: function read_assignref(result, left) {
    this.next();
    var right;

    if (this.token === this.tok.T_NEW) {
      if (this.version >= 700) {
        this.error();
      }

      right = this.read_new_expr();
    } else {
      right = this.read_variable(false, false);
    }

    return result("assignref", left, right);
  },

  /*
   *
   * inline_function:
   * 		function returns_ref backup_doc_comment '(' parameter_list ')' lexical_vars return_type
   * 		backup_fn_flags '{' inner_statement_list '}' backup_fn_flags
   * 			{ $$ = zend_ast_create_decl(ZEND_AST_CLOSURE, $2 | $13, $1, $3,
   * 				  zend_string_init("{closure}", sizeof("{closure}") - 1, 0),
   * 				  $5, $7, $11, $8); CG(extra_fn_flags) = $9; }
   * 	|	fn returns_ref '(' parameter_list ')' return_type backup_doc_comment T_DOUBLE_ARROW backup_fn_flags backup_lex_pos expr backup_fn_flags
   * 			{ $$ = zend_ast_create_decl(ZEND_AST_ARROW_FUNC, $2 | $12, $1, $7,
   * 				  zend_string_init("{closure}", sizeof("{closure}") - 1, 0), $4, NULL,
   * 				  zend_ast_create(ZEND_AST_RETURN, $11), $6);
   * 				  ((zend_ast_decl *) $$)->lex_pos = $10;
   * 				  CG(extra_fn_flags) = $9; }   *
   */
  read_inline_function: function read_inline_function(flags) {
    if (this.token === this.tok.T_FUNCTION) {
      return this.read_function(true, flags);
    } // introduced in PHP 7.4


    if (!this.version >= 704) {
      this.raiseError("Arrow Functions are not allowed");
    } // as an arrowfunc


    var node = this.node("arrowfunc"); // eat T_FN

    if (this.expect(this.tok.T_FN)) this.next(); // check the &

    var isRef = this.is_reference(); // ...

    if (this.expect("(")) this.next();
    var params = this.read_parameter_list();
    if (this.expect(")")) this.next();
    var nullable = false;
    var returnType = null;

    if (this.token === ":") {
      if (this.next().token === "?") {
        nullable = true;
        this.next();
      }

      returnType = this.read_type();
    }

    if (this.expect(this.tok.T_DOUBLE_ARROW)) this.next();
    var body = this.read_expr();
    return node(params, isRef, body, returnType, nullable, flags ? true : false);
  },

  /*
   * ```ebnf
   *    new_expr ::= T_NEW (namespace_name function_argument_list) | (T_CLASS ... class declaration)
   * ```
   * https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L850
   */
  read_new_expr: function read_new_expr() {
    var result = this.node("new");
    this.expect(this.tok.T_NEW) && this.next();
    var args = [];

    if (this.token === this.tok.T_CLASS) {
      var what = this.node("class"); // Annonymous class declaration

      if (this.next().token === "(") {
        args = this.read_argument_list();
      }

      var propExtends = this.read_extends_from();
      var propImplements = this.read_implements_list();
      var body = null;

      if (this.expect("{")) {
        body = this.next().read_class_body();
      }

      return result(what(null, propExtends, propImplements, body, [0, 0, 0]), args);
    } // Already existing class


    var name = this.read_new_class_name();

    if (this.token === "(") {
      args = this.read_argument_list();
    }

    return result(name, args);
  },

  /*
   * Reads a class name
   * ```ebnf
   * read_new_class_name ::= namespace_name | variable
   * ```
   */
  read_new_class_name: function read_new_class_name() {
    if (this.token === this.tok.T_NS_SEPARATOR || this.token === this.tok.T_STRING || this.token === this.tok.T_NAMESPACE) {
      var result = this.read_namespace_name(true);

      if (this.token === this.tok.T_DOUBLE_COLON) {
        result = this.read_static_getter(result);
      }

      return result;
    } else if (this.is("VARIABLE")) {
      return this.read_variable(true, false);
    } else {
      this.expect([this.tok.T_STRING, "VARIABLE"]);
    }
  },
  handleDereferencable: function handleDereferencable(expr) {
    while (this.token !== this.EOF) {
      if (this.token === this.tok.T_OBJECT_OPERATOR || this.token === this.tok.T_DOUBLE_COLON) {
        expr = this.recursive_variable_chain_scan(expr, false, false, true);
      } else if (this.token === this.tok.T_CURLY_OPEN || this.token === "[") {
        expr = this.read_dereferencable(expr);
      } else if (this.token === "(") {
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1118
        expr = this.node("call")(expr, this.read_argument_list());
      } else {
        return expr;
      }
    }

    return expr;
  }
};

/***/ }),

/***/ 2706:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * checks if current token is a reference keyword
   */
  is_reference: function is_reference() {
    if (this.token == "&") {
      this.next();
      return true;
    }

    return false;
  },

  /*
   * checks if current token is a variadic keyword
   */
  is_variadic: function is_variadic() {
    if (this.token === this.tok.T_ELLIPSIS) {
      this.next();
      return true;
    }

    return false;
  },

  /*
   * reading a function
   * ```ebnf
   * function ::= function_declaration code_block
   * ```
   */
  read_function: function read_function(closure, flag) {
    var result = this.read_function_declaration(closure ? 1 : flag ? 2 : 0, flag && flag[1] === 1);

    if (flag && flag[2] == 1) {
      // abstract function :
      result.parseFlags(flag);

      if (this.expect(";")) {
        this.next();
      }
    } else {
      if (this.expect("{")) {
        result.body = this.read_code_block(false);

        if (result.loc && result.body.loc) {
          result.loc.end = result.body.loc.end;
        }
      }

      if (!closure && flag) {
        result.parseFlags(flag);
      }
    }

    return result;
  },

  /*
   * reads a function declaration (without his body)
   * ```ebnf
   * function_declaration ::= T_FUNCTION '&'?  T_STRING '(' parameter_list ')'
   * ```
   */
  read_function_declaration: function read_function_declaration(type, isStatic) {
    var nodeName = "function";

    if (type === 1) {
      nodeName = "closure";
    } else if (type === 2) {
      nodeName = "method";
    }

    var result = this.node(nodeName);

    if (this.expect(this.tok.T_FUNCTION)) {
      this.next();
    }

    var isRef = this.is_reference();
    var name = false,
        use = [],
        returnType = null,
        nullable = false;

    if (type !== 1) {
      var nameNode = this.node("identifier");

      if (type === 2) {
        if (this.version >= 700) {
          if (this.token === this.tok.T_STRING || this.is("IDENTIFIER")) {
            name = this.text();
            this.next();
          } else if (this.version < 704) {
            this.error("IDENTIFIER");
          }
        } else if (this.token === this.tok.T_STRING) {
          name = this.text();
          this.next();
        } else {
          this.error("IDENTIFIER");
        }
      } else {
        if (this.version >= 700) {
          if (this.token === this.tok.T_STRING) {
            name = this.text();
            this.next();
          } else if (this.version >= 704) {
            if (!this.expect("(")) {
              this.next();
            }
          } else {
            this.error(this.tok.T_STRING);
            this.next();
          }
        } else {
          if (this.expect(this.tok.T_STRING)) {
            name = this.text();
          }

          this.next();
        }
      }

      name = nameNode(name);
    }

    if (this.expect("(")) this.next();
    var params = this.read_parameter_list();
    if (this.expect(")")) this.next();

    if (type === 1) {
      use = this.read_lexical_vars();
    }

    if (this.token === ":") {
      if (this.next().token === "?") {
        nullable = true;
        this.next();
      }

      returnType = this.read_type();
    }

    if (type === 1) {
      // closure
      return result(params, isRef, use, returnType, nullable, isStatic);
    }

    return result(name, params, isRef, returnType, nullable);
  },
  read_lexical_vars: function read_lexical_vars() {
    var result = [];

    if (this.token === this.tok.T_USE) {
      this.next();
      this.expect("(") && this.next();
      result = this.read_lexical_var_list();
      this.expect(")") && this.next();
    }

    return result;
  },
  read_lexical_var_list: function read_lexical_var_list() {
    return this.read_list(this.read_lexical_var, ",");
  },

  /*
   * ```ebnf
   * lexical_var ::= '&'? T_VARIABLE
   * ```
   */
  read_lexical_var: function read_lexical_var() {
    if (this.token === "&") {
      return this.read_byref(this.read_lexical_var.bind(this));
    }

    var result = this.node("variable");
    this.expect(this.tok.T_VARIABLE);
    var name = this.text().substring(1);
    this.next();
    return result(name, false);
  },

  /*
   * reads a list of parameters
   * ```ebnf
   *  parameter_list ::= (parameter ',')* parameter?
   * ```
   */
  read_parameter_list: function read_parameter_list() {
    var result = [];

    if (this.token != ")") {
      while (this.token != this.EOF) {
        result.push(this.read_parameter());

        if (this.token == ",") {
          this.next();
        } else if (this.token == ")") {
          break;
        } else {
          this.error([",", ")"]);
          break;
        }
      }
    }

    return result;
  },

  /*
   * ```ebnf
   *  parameter ::= type? '&'? T_ELLIPSIS? T_VARIABLE ('=' expr)?
   * ```
   * @see https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L640
   */
  read_parameter: function read_parameter() {
    var node = this.node("parameter");
    var parameterName = null;
    var value = null;
    var type = null;
    var nullable = false;

    if (this.token === "?") {
      this.next();
      nullable = true;
    }

    type = this.read_type();

    if (nullable && !type) {
      this.raiseError("Expecting a type definition combined with nullable operator");
    }

    var isRef = this.is_reference();
    var isVariadic = this.is_variadic();

    if (this.expect(this.tok.T_VARIABLE)) {
      parameterName = this.node("identifier");
      var name = this.text().substring(1);
      this.next();
      parameterName = parameterName(name);
    }

    if (this.token == "=") {
      value = this.next().read_expr();
    }

    return node(parameterName, type, value, isRef, isVariadic, nullable);
  },

  /*
   * Reads a list of arguments
   * ```ebnf
   *  function_argument_list ::= '(' (argument_list (',' argument_list)*)? ')'
   * ```
   */
  read_argument_list: function read_argument_list() {
    var result = [];
    this.expect("(") && this.next();

    if (this.token !== ")") {
      result = this.read_non_empty_argument_list();
    }

    this.expect(")") && this.next();
    return result;
  },

  /*
   * Reads non empty argument list
   */
  read_non_empty_argument_list: function read_non_empty_argument_list() {
    var wasVariadic = false;
    return this.read_function_list(function () {
      var argument = this.read_argument();

      if (argument) {
        if (wasVariadic) {
          this.raiseError("Unexpected argument after a variadic argument");
        }

        if (argument.kind === "variadic") {
          wasVariadic = true;
        }
      }

      return argument;
    }.bind(this), ",");
  },

  /*
   * ```ebnf
   *    argument_list ::= T_ELLIPSIS? expr
   * ```
   */
  read_argument: function read_argument() {
    if (this.token === this.tok.T_ELLIPSIS) {
      return this.node("variadic")(this.next().read_expr());
    }

    return this.read_expr();
  },

  /*
   * read type hinting
   * ```ebnf
   *  type ::= T_ARRAY | T_CALLABLE | namespace_name
   * ```
   */
  read_type: function read_type() {
    var result = this.node();

    if (this.token === this.tok.T_ARRAY || this.token === this.tok.T_CALLABLE) {
      var type = this.text();
      this.next();
      return result("typereference", type.toLowerCase(), type);
    } else if (this.token === this.tok.T_STRING) {
      var _type = this.text();

      var backup = [this.token, this.lexer.getState()];
      this.next();

      if (this.token !== this.tok.T_NS_SEPARATOR && this.ast.typereference.types.indexOf(_type.toLowerCase()) > -1) {
        return result("typereference", _type.toLowerCase(), _type);
      } else {
        // rollback a classic namespace
        this.lexer.tokens.push(backup);
        this.next(); // fix : destroy not consumed node (release comments)

        result.destroy();
        return this.read_namespace_name();
      }
    } else if (this.token === this.tok.T_NAMESPACE || this.token === this.tok.T_NS_SEPARATOR) {
      // fix : destroy not consumed node (release comments)
      result.destroy();
      return this.read_namespace_name();
    } // fix : destroy not consumed node (release comments)


    result.destroy();
    return null;
  }
};

/***/ }),

/***/ 4002:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * Reads an IF statement
   *
   * ```ebnf
   *  if ::= T_IF '(' expr ')' ':' ...
   * ```
   */
  read_if: function read_if() {
    var result = this.node("if");
    var test = this.next().read_if_expr();
    var body = null;
    var alternate = null;
    var shortForm = false;

    if (this.token === ":") {
      shortForm = true;
      this.next();
      body = this.node("block");
      var items = [];

      while (this.token !== this.EOF && this.token !== this.tok.T_ENDIF) {
        if (this.token === this.tok.T_ELSEIF) {
          alternate = this.read_elseif_short();
          break;
        } else if (this.token === this.tok.T_ELSE) {
          alternate = this.read_else_short();
          break;
        }

        items.push(this.read_inner_statement());
      }

      body = body(null, items);
      this.expect(this.tok.T_ENDIF) && this.next();
      this.expectEndOfStatement();
    } else {
      body = this.read_statement();

      if (this.token === this.tok.T_ELSEIF) {
        alternate = this.read_if();
      } else if (this.token === this.tok.T_ELSE) {
        alternate = this.next().read_statement();
      }
    }

    return result(test, body, alternate, shortForm);
  },

  /*
   * reads an if expression : '(' expr ')'
   */
  read_if_expr: function read_if_expr() {
    this.expect("(") && this.next();
    var result = this.read_expr();
    this.expect(")") && this.next();
    return result;
  },

  /*
   * reads an elseif (expr): statements
   */
  read_elseif_short: function read_elseif_short() {
    var alternate = null;
    var result = this.node("if");
    var test = this.next().read_if_expr();
    if (this.expect(":")) this.next();
    var body = this.node("block");
    var items = [];

    while (this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
      if (this.token === this.tok.T_ELSEIF) {
        alternate = this.read_elseif_short();
        break;
      } else if (this.token === this.tok.T_ELSE) {
        alternate = this.read_else_short();
        break;
      }

      items.push(this.read_inner_statement());
    }

    return result(test, body(null, items), alternate, true);
  },

  /*
   *
   */
  read_else_short: function read_else_short() {
    if (this.next().expect(":")) this.next();
    var body = this.node("block");
    var items = [];

    while (this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
      items.push(this.read_inner_statement());
    }

    return body(null, items);
  }
};

/***/ }),

/***/ 3745:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * Reads a while statement
   * ```ebnf
   * while ::= T_WHILE (statement | ':' inner_statement_list T_ENDWHILE ';')
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L587
   * @return {While}
   */
  read_while: function read_while() {
    var result = this.node("while");
    this.expect(this.tok.T_WHILE) && this.next();
    var test = null;
    var body = null;
    var shortForm = false;
    if (this.expect("(")) this.next();
    test = this.read_expr();
    if (this.expect(")")) this.next();

    if (this.token === ":") {
      shortForm = true;
      body = this.read_short_form(this.tok.T_ENDWHILE);
    } else {
      body = this.read_statement();
    }

    return result(test, body, shortForm);
  },

  /*
   * Reads a do / while loop
   * ```ebnf
   * do ::= T_DO statement T_WHILE '(' expr ')' ';'
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L423
   * @return {Do}
   */
  read_do: function read_do() {
    var result = this.node("do");
    this.expect(this.tok.T_DO) && this.next();
    var test = null;
    var body = null;
    body = this.read_statement();

    if (this.expect(this.tok.T_WHILE)) {
      if (this.next().expect("(")) this.next();
      test = this.read_expr();
      if (this.expect(")")) this.next();
      if (this.expect(";")) this.next();
    }

    return result(test, body);
  },

  /*
   * Read a for incremental loop
   * ```ebnf
   * for ::= T_FOR '(' for_exprs ';' for_exprs ';' for_exprs ')' for_statement
   * for_statement ::= statement | ':' inner_statement_list T_ENDFOR ';'
   * for_exprs ::= expr? (',' expr)*
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L425
   * @return {For}
   */
  read_for: function read_for() {
    var result = this.node("for");
    this.expect(this.tok.T_FOR) && this.next();
    var init = [];
    var test = [];
    var increment = [];
    var body = null;
    var shortForm = false;
    if (this.expect("(")) this.next();

    if (this.token !== ";") {
      init = this.read_list(this.read_expr, ",");
      if (this.expect(";")) this.next();
    } else {
      this.next();
    }

    if (this.token !== ";") {
      test = this.read_list(this.read_expr, ",");
      if (this.expect(";")) this.next();
    } else {
      this.next();
    }

    if (this.token !== ")") {
      increment = this.read_list(this.read_expr, ",");
      if (this.expect(")")) this.next();
    } else {
      this.next();
    }

    if (this.token === ":") {
      shortForm = true;
      body = this.read_short_form(this.tok.T_ENDFOR);
    } else {
      body = this.read_statement();
    }

    return result(init, test, increment, body, shortForm);
  },

  /*
   * Reads a foreach loop
   * ```ebnf
   * foreach ::= '(' expr T_AS foreach_variable (T_DOUBLE_ARROW foreach_variable)? ')' statement
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L438
   * @return {Foreach}
   */
  read_foreach: function read_foreach() {
    var result = this.node("foreach");
    this.expect(this.tok.T_FOREACH) && this.next();
    var source = null;
    var key = null;
    var value = null;
    var body = null;
    var shortForm = false;
    if (this.expect("(")) this.next();
    source = this.read_expr();

    if (this.expect(this.tok.T_AS)) {
      this.next();
      value = this.read_foreach_variable();

      if (this.token === this.tok.T_DOUBLE_ARROW) {
        key = value;
        value = this.next().read_foreach_variable();
      }
    } // grammatically correct but not supported by PHP


    if (key && key.kind === "list") {
      this.raiseError("Fatal Error : Cannot use list as key element");
    }

    if (this.expect(")")) this.next();

    if (this.token === ":") {
      shortForm = true;
      body = this.read_short_form(this.tok.T_ENDFOREACH);
    } else {
      body = this.read_statement();
    }

    return result(source, key, value, body, shortForm);
  },

  /*
   * Reads a foreach variable statement
   * ```ebnf
   * foreach_variable =
   *    variable |
   *    '&' variable |
   *    T_LIST '(' assignment_list ')' |
   *    '[' assignment_list ']'
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L544
   * @return {Expression}
   */
  read_foreach_variable: function read_foreach_variable() {
    if (this.token === this.tok.T_LIST || this.token === "[") {
      var isShort = this.token === "[";
      var result = this.node("list");
      this.next();
      if (!isShort && this.expect("(")) this.next();
      var assignList = this.read_array_pair_list(isShort);
      if (this.expect(isShort ? "]" : ")")) this.next();
      return result(assignList, isShort);
    } else {
      return this.read_variable(false, false);
    }
  }
};

/***/ }),

/***/ 9905:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * ```ebnf
   * start ::= (namespace | top_statement)*
   * ```
   */
  read_start: function read_start() {
    if (this.token == this.tok.T_NAMESPACE) {
      return this.read_namespace();
    } else {
      return this.read_top_statement();
    }
  }
};

/***/ }),

/***/ 1250:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * Reads a namespace declaration block
   * ```ebnf
   * namespace ::= T_NAMESPACE namespace_name? '{'
   *    top_statements
   * '}'
   * | T_NAMESPACE namespace_name ';' top_statements
   * ```
   * @see http://php.net/manual/en/language.namespaces.php
   * @return {Namespace}
   */
  read_namespace: function read_namespace() {
    var result = this.node("namespace");
    var body;
    this.expect(this.tok.T_NAMESPACE) && this.next();
    var name;

    if (this.token == "{") {
      name = {
        name: [""]
      };
    } else {
      name = this.read_namespace_name();
    }

    this.currentNamespace = name;

    if (this.token == ";") {
      this.currentNamespace = name;
      body = this.next().read_top_statements();
      this.expect(this.EOF);
      return result(name.name, body, false);
    } else if (this.token == "{") {
      this.currentNamespace = name;
      body = this.next().read_top_statements();
      this.expect("}") && this.next();

      if (body.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
        body.push(this.node("noop")());
      }

      return result(name.name, body, true);
    } else if (this.token === "(") {
      // @fixme after merging #478
      name.resolution = this.ast.reference.RELATIVE_NAME;
      name.name = name.name.substring(1);
      result.destroy();
      return this.node("call")(name, this.read_argument_list());
    } else {
      this.error(["{", ";"]); // graceful mode :

      this.currentNamespace = name;
      body = this.read_top_statements();
      this.expect(this.EOF);
      return result(name, body, false);
    }
  },

  /*
   * Reads a namespace name
   * ```ebnf
   *  namespace_name ::= T_NS_SEPARATOR? (T_STRING T_NS_SEPARATOR)* T_STRING
   * ```
   * @see http://php.net/manual/en/language.namespaces.rules.php
   * @return {Reference}
   */
  read_namespace_name: function read_namespace_name(resolveReference) {
    var result = this.node();
    var relative = false;

    if (this.token === this.tok.T_NAMESPACE) {
      this.next().expect(this.tok.T_NS_SEPARATOR) && this.next();
      relative = true;
    }

    var names = this.read_list(this.tok.T_STRING, this.tok.T_NS_SEPARATOR, true);

    if (!relative && names.length === 1 && (resolveReference || this.token !== "(")) {
      if (names[0].toLowerCase() === "parent") {
        return result("parentreference", names[0]);
      } else if (names[0].toLowerCase() === "self") {
        return result("selfreference", names[0]);
      }
    }

    return result("name", names, relative);
  },

  /*
   * Reads a use statement
   * ```ebnf
   * use_statement ::= T_USE
   *   use_type? use_declarations |
   *   use_type use_statement '{' use_declarations '}' |
   *   use_statement '{' use_declarations(=>typed) '}'
   * ';'
   * ```
   * @see http://php.net/manual/en/language.namespaces.importing.php
   * @return {UseGroup}
   */
  read_use_statement: function read_use_statement() {
    var result = this.node("usegroup");
    var items = [];
    var name = null;
    this.expect(this.tok.T_USE) && this.next();
    var type = this.read_use_type();
    items.push(this.read_use_declaration(false));

    if (this.token === ",") {
      items = items.concat(this.next().read_use_declarations(false));
    } else if (this.token === "{") {
      name = items[0].name;
      items = this.next().read_use_declarations(type === null);
      this.expect("}") && this.next();
    }

    result = result(name, type, items);
    this.expect(";") && this.next();
    return result;
  },

  /*
   *
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1045
   */
  read_class_name_reference: function read_class_name_reference() {
    // resolved as the same
    return this.read_variable(true, false);
  },

  /*
   * Reads a use declaration
   * ```ebnf
   * use_declaration ::= use_type? namespace_name use_alias
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L380
   * @return {UseItem}
   */
  read_use_declaration: function read_use_declaration(typed) {
    var result = this.node("useitem");
    var type = null;
    if (typed) type = this.read_use_type();
    var name = this.read_namespace_name();
    var alias = this.read_use_alias();
    return result(name.name, alias, type);
  },

  /*
   * Reads a list of use declarations
   * ```ebnf
   * use_declarations ::= use_declaration (',' use_declaration)*
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L380
   * @return {UseItem[]}
   */
  read_use_declarations: function read_use_declarations(typed) {
    var result = [this.read_use_declaration(typed)];

    while (this.token === ",") {
      this.next();

      if (typed) {
        if (this.token !== this.tok.T_FUNCTION && this.token !== this.tok.T_CONST && this.token !== this.tok.T_STRING) {
          break;
        }
      } else if (this.token !== this.tok.T_STRING && this.token !== this.tok.T_NS_SEPARATOR) {
        break;
      }

      result.push(this.read_use_declaration(typed));
    }

    return result;
  },

  /*
   * Reads a use statement
   * ```ebnf
   * use_alias ::= (T_AS T_STRING)?
   * ```
   * @return {String|null}
   */
  read_use_alias: function read_use_alias() {
    var result = null;

    if (this.token === this.tok.T_AS) {
      if (this.next().expect(this.tok.T_STRING)) {
        var aliasName = this.node("identifier");
        var name = this.text();
        this.next();
        result = aliasName(name);
      }
    }

    return result;
  },

  /*
   * Reads the namespace type declaration
   * ```ebnf
   * use_type ::= (T_FUNCTION | T_CONST)?
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L335
   * @return {String|null} Possible values : function, const
   */
  read_use_type: function read_use_type() {
    if (this.token === this.tok.T_FUNCTION) {
      this.next();
      return this.ast.useitem.TYPE_FUNCTION;
    } else if (this.token === this.tok.T_CONST) {
      this.next();
      return this.ast.useitem.TYPE_CONST;
    }

    return null;
  }
};

/***/ }),

/***/ 9889:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


var specialChar = {
  "\\": "\\",
  $: "$",
  n: "\n",
  r: "\r",
  t: "\t",
  f: String.fromCharCode(12),
  v: String.fromCharCode(11),
  e: String.fromCharCode(27)
};
module.exports = {
  /*
   * Unescape special chars
   */
  resolve_special_chars: function resolve_special_chars(text, doubleQuote) {
    if (!doubleQuote) {
      // single quote fix
      return text.replace(/\\\\/g, "\\").replace(/\\'/g, "'");
    }

    return text.replace(/\\"/, '"').replace(/\\([\\$nrtfve]|[xX][0-9a-fA-F]{1,2}|[0-7]{1,3}|u{([0-9a-fA-F]+)})/g, function ($match, p1, p2) {
      if (specialChar[p1]) {
        return specialChar[p1];
      } else if ("x" === p1[0] || "X" === p1[0]) {
        return String.fromCodePoint(parseInt(p1.substr(1), 16));
      } else if ("u" === p1[0]) {
        return String.fromCodePoint(parseInt(p2, 16));
      } else {
        return String.fromCodePoint(parseInt(p1, 8));
      }
    });
  },

  /*
   * Remove all leading spaces each line for heredoc text if there is a indentation
   * @param {string} text
   * @param {number} indentation
   * @param {boolean} indentation_uses_spaces
   * @param {boolean} first_encaps_node if it is behind a variable, the first N spaces should not be removed
   */
  remove_heredoc_leading_whitespace_chars: function remove_heredoc_leading_whitespace_chars(text, indentation, indentation_uses_spaces, first_encaps_node) {
    if (indentation === 0) {
      return text;
    }

    this.check_heredoc_indentation_level(text, indentation, indentation_uses_spaces, first_encaps_node);
    var matchedChar = indentation_uses_spaces ? " " : "\t";
    var removementRegExp = new RegExp("\\n".concat(matchedChar, "{").concat(indentation, "}"), "g");
    var removementFirstEncapsNodeRegExp = new RegExp("^".concat(matchedChar, "{").concat(indentation, "}")); // Rough replace, need more check

    if (first_encaps_node) {
      // Remove text leading whitespace
      text = text.replace(removementFirstEncapsNodeRegExp, "");
    } // Remove leading whitespace after \n


    return text.replace(removementRegExp, "\n");
  },

  /*
   * Check indentation level of heredoc in text, if mismatch, raiseError
   * @param {string} text
   * @param {number} indentation
   * @param {boolean} indentation_uses_spaces
   * @param {boolean} first_encaps_node if it is behind a variable, the first N spaces should not be removed
   */
  check_heredoc_indentation_level: function check_heredoc_indentation_level(text, indentation, indentation_uses_spaces, first_encaps_node) {
    var textSize = text.length;
    var offset = 0;
    var leadingWhitespaceCharCount = 0;
    /*
     * @var inCoutingState {boolean} reset to true after a new line
     * @private
     */

    var inCoutingState = true;
    var chToCheck = indentation_uses_spaces ? " " : "\t";
    var inCheckState = false;

    if (!first_encaps_node) {
      // start from first \n
      offset = text.indexOf("\n"); // if no \n, just return

      if (offset === -1) {
        return;
      }

      offset++;
    }

    while (offset < textSize) {
      if (inCoutingState) {
        if (text[offset] === chToCheck) {
          leadingWhitespaceCharCount++;
        } else {
          inCheckState = true;
        }
      } else {
        inCoutingState = false;
      }

      if (text[offset] !== "\n" && inCheckState && leadingWhitespaceCharCount < indentation) {
        this.raiseError("Invalid body indentation level (expecting an indentation at least ".concat(indentation, ")"));
      } else {
        inCheckState = false;
      }

      if (text[offset] === "\n") {
        // Reset counting state
        inCoutingState = true;
        leadingWhitespaceCharCount = 0;
      }

      offset++;
    }
  },

  /*
   * Reads dereferencable scalar
   */
  read_dereferencable_scalar: function read_dereferencable_scalar() {
    var result = null;

    switch (this.token) {
      case this.tok.T_CONSTANT_ENCAPSED_STRING:
        {
          var value = this.node("string");
          var text = this.text();
          var offset = 0;

          if (text[0] === "b" || text[0] === "B") {
            offset = 1;
          }

          var isDoubleQuote = text[offset] === '"';
          this.next();
          var textValue = this.resolve_special_chars(text.substring(offset + 1, text.length - 1), isDoubleQuote);
          value = value(isDoubleQuote, textValue, offset === 1, // unicode flag
          text);

          if (this.token === this.tok.T_DOUBLE_COLON) {
            // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1151
            result = this.read_static_getter(value);
          } else {
            // dirrect string
            result = value;
          }
        }
        break;

      case this.tok.T_ARRAY:
        // array parser
        result = this.read_array();
        break;

      case "[":
        // short array format
        result = this.read_array();
        break;
    }

    return result;
  },

  /*
   * ```ebnf
   *  scalar ::= T_MAGIC_CONST
   *       | T_LNUMBER | T_DNUMBER
   *       | T_START_HEREDOC T_ENCAPSED_AND_WHITESPACE? T_END_HEREDOC
   *       | '"' encaps_list '"'
   *       | T_START_HEREDOC encaps_list T_END_HEREDOC
   *       | namespace_name (T_DOUBLE_COLON T_STRING)?
   * ```
   */
  read_scalar: function read_scalar() {
    if (this.is("T_MAGIC_CONST")) {
      return this.get_magic_constant();
    } else {
      var value, node;

      switch (this.token) {
        // NUMERIC
        case this.tok.T_LNUMBER: // long

        case this.tok.T_DNUMBER:
          {
            // double
            var result = this.node("number");
            value = this.text();
            this.next();
            return result(value, null);
          }

        case this.tok.T_START_HEREDOC:
          if (this.lexer.curCondition === "ST_NOWDOC") {
            var start = this.lexer.yylloc.first_offset;
            node = this.node("nowdoc");
            value = this.next().text(); // strip the last line return char

            if (this.lexer.heredoc_label.indentation > 0) {
              value = value.substring(0, value.length - this.lexer.heredoc_label.indentation);
            }

            var lastCh = value[value.length - 1];

            if (lastCh === "\n") {
              if (value[value.length - 2] === "\r") {
                // windows style
                value = value.substring(0, value.length - 2);
              } else {
                // linux style
                value = value.substring(0, value.length - 1);
              }
            } else if (lastCh === "\r") {
              // mac style
              value = value.substring(0, value.length - 1);
            }

            this.expect(this.tok.T_ENCAPSED_AND_WHITESPACE) && this.next();
            this.expect(this.tok.T_END_HEREDOC) && this.next();

            var raw = this.lexer._input.substring(start, this.lexer.yylloc.first_offset);

            node = node(this.remove_heredoc_leading_whitespace_chars(value, this.lexer.heredoc_label.indentation, this.lexer.heredoc_label.indentation_uses_spaces, this.lexer.heredoc_label.first_encaps_node), raw, this.lexer.heredoc_label.label);
            return node;
          } else {
            return this.read_encapsed_string(this.tok.T_END_HEREDOC);
          }

        case '"':
          return this.read_encapsed_string('"');

        case 'b"':
        case 'B"':
          {
            return this.read_encapsed_string('"', true);
          }
        // TEXTS

        case this.tok.T_CONSTANT_ENCAPSED_STRING:
        case this.tok.T_ARRAY: // array parser

        case "[":
          // short array format
          return this.read_dereferencable_scalar();

        default:
          {
            var err = this.error("SCALAR"); // graceful mode : ignore token & return error node

            this.next();
            return err;
          }
      }
    }
  },

  /*
   * Handles the dereferencing
   */
  read_dereferencable: function read_dereferencable(expr) {
    var result, offset;
    var node = this.node("offsetlookup");

    if (this.token === "[") {
      offset = this.next().read_expr();
      if (this.expect("]")) this.next();
      result = node(expr, offset);
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      offset = this.read_encapsed_string_item(false);
      result = node(expr, offset);
    }

    return result;
  },

  /*
   * Reads and extracts an encapsed item
   * ```ebnf
   * encapsed_string_item ::= T_ENCAPSED_AND_WHITESPACE
   *  | T_DOLLAR_OPEN_CURLY_BRACES expr '}'
   *  | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '}'
   *  | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '[' expr ']' '}'
   *  | T_CURLY_OPEN variable '}'
   *  | variable
   *  | variable '[' expr ']'
   *  | variable T_OBJECT_OPERATOR T_STRING
   * ```
   * @return {String|Variable|Expr|Lookup}
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1219
   */
  read_encapsed_string_item: function read_encapsed_string_item(isDoubleQuote) {
    var encapsedPart = this.node("encapsedpart");
    var syntax = null;
    var curly = false;
    var result = this.node(),
        offset,
        node,
        name; // plain text
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1222

    if (this.token === this.tok.T_ENCAPSED_AND_WHITESPACE) {
      var text = this.text();
      this.next(); // if this.lexer.heredoc_label.first_encaps_node -> remove first indents

      result = result("string", false, this.version >= 703 && !this.lexer.heredoc_label.finished ? this.remove_heredoc_leading_whitespace_chars(this.resolve_special_chars(text, isDoubleQuote), this.lexer.heredoc_label.indentation, this.lexer.heredoc_label.indentation_uses_spaces, this.lexer.heredoc_label.first_encaps_node) : text, false, text);
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      syntax = "simple";
      curly = true; // dynamic variable name
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1239

      name = null;

      if (this.next().token === this.tok.T_STRING_VARNAME) {
        name = this.node("variable");
        var varName = this.text();
        this.next(); // check if lookup an offset
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1243

        if (this.token === "[") {
          name = name(varName, false);
          node = this.node("offsetlookup");
          offset = this.next().read_expr();
          this.expect("]") && this.next();
          result = node(name, offset);
        } else {
          result = name(varName, false);
        }
      } else {
        result = result("variable", this.read_expr(), false);
      }

      this.expect("}") && this.next();
    } else if (this.token === this.tok.T_CURLY_OPEN) {
      // expression
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1246
      syntax = "complex";
      result.destroy();
      result = this.next().read_variable(false, false);
      this.expect("}") && this.next();
    } else if (this.token === this.tok.T_VARIABLE) {
      syntax = "simple"; // plain variable
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1231

      result.destroy();
      result = this.read_simple_variable(); // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1233

      if (this.token === "[") {
        node = this.node("offsetlookup");
        offset = this.next().read_encaps_var_offset();
        this.expect("]") && this.next();
        result = node(result, offset);
      } // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1236


      if (this.token === this.tok.T_OBJECT_OPERATOR) {
        node = this.node("propertylookup");
        this.next().expect(this.tok.T_STRING);
        var what = this.node("identifier");
        name = this.text();
        this.next();
        result = node(result, what(name));
      } // error / fallback

    } else {
      this.expect(this.tok.T_ENCAPSED_AND_WHITESPACE);
      var value = this.text();
      this.next(); // consider it as string

      result.destroy();
      result = result("string", false, value, false, value);
    } // reset first_encaps_node to false after access any node


    this.lexer.heredoc_label.first_encaps_node = false;
    return encapsedPart(result, syntax, curly);
  },

  /*
   * Reads an encapsed string
   */
  read_encapsed_string: function read_encapsed_string(expect) {
    var isBinary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var labelStart = this.lexer.yylloc.first_offset;
    var node = this.node("encapsed");
    this.next();
    var start = this.lexer.yylloc.prev_offset - (isBinary ? 1 : 0);
    var value = [];
    var type = null;

    if (expect === "`") {
      type = this.ast.encapsed.TYPE_SHELL;
    } else if (expect === '"') {
      type = this.ast.encapsed.TYPE_STRING;
    } else {
      type = this.ast.encapsed.TYPE_HEREDOC;
    } // reading encapsed parts


    while (this.token !== expect && this.token !== this.EOF) {
      value.push(this.read_encapsed_string_item(true));
    }

    if (value.length > 0 && value[value.length - 1].kind === "encapsedpart" && value[value.length - 1].expression.kind === "string") {
      var _node = value[value.length - 1].expression;
      var lastCh = _node.value[_node.value.length - 1];

      if (lastCh === "\n") {
        if (_node.value[_node.value.length - 2] === "\r") {
          // windows style
          _node.value = _node.value.substring(0, _node.value.length - 2);
        } else {
          // linux style
          _node.value = _node.value.substring(0, _node.value.length - 1);
        }
      } else if (lastCh === "\r") {
        // mac style
        _node.value = _node.value.substring(0, _node.value.length - 1);
      }
    }

    this.expect(expect) && this.next();

    var raw = this.lexer._input.substring(type === "heredoc" ? labelStart : start - 1, this.lexer.yylloc.first_offset);

    node = node(value, raw, type);

    if (expect === this.tok.T_END_HEREDOC) {
      node.label = this.lexer.heredoc_label.label;
      this.lexer.heredoc_label.finished = true;
    }

    return node;
  },

  /*
   * Constant token
   */
  get_magic_constant: function get_magic_constant() {
    var result = this.node("magic");
    var name = this.text();
    this.next();
    return result(name.toUpperCase(), name);
  }
};

/***/ }),

/***/ 4992:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * reading a list of top statements (helper for top_statement*)
   * ```ebnf
   *  top_statements ::= top_statement*
   * ```
   */
  read_top_statements: function read_top_statements() {
    var result = [];

    while (this.token !== this.EOF && this.token !== "}") {
      var statement = this.read_top_statement();

      if (statement) {
        if (Array.isArray(statement)) {
          result = result.concat(statement);
        } else {
          result.push(statement);
        }
      }
    }

    return result;
  },

  /*
   * reading a top statement
   * ```ebnf
   *  top_statement ::=
   *       namespace | function | class
   *       | interface | trait
   *       | use_statements | const_list
   *       | statement
   * ```
   */
  read_top_statement: function read_top_statement() {
    switch (this.token) {
      case this.tok.T_FUNCTION:
        return this.read_function(false, false);
      // optional flags

      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL:
      case this.tok.T_CLASS:
        return this.read_class_declaration_statement();

      case this.tok.T_INTERFACE:
        return this.read_interface_declaration_statement();

      case this.tok.T_TRAIT:
        return this.read_trait_declaration_statement();

      case this.tok.T_USE:
        return this.read_use_statement();

      case this.tok.T_CONST:
        {
          var result = this.node("constantstatement");
          var items = this.next().read_const_list();
          this.expectEndOfStatement();
          return result(null, items);
        }

      case this.tok.T_NAMESPACE:
        return this.read_namespace();

      case this.tok.T_HALT_COMPILER:
        {
          var _result = this.node("halt");

          if (this.next().expect("(")) this.next();
          if (this.expect(")")) this.next();
          this.expect(";");
          this.lexer.done = true;
          return _result(this.lexer._input.substring(this.lexer.offset));
        }

      default:
        return this.read_statement();
    }
  },

  /*
   * reads a list of simple inner statements (helper for inner_statement*)
   * ```ebnf
   *  inner_statements ::= inner_statement*
   * ```
   */
  read_inner_statements: function read_inner_statements() {
    var result = [];

    while (this.token != this.EOF && this.token !== "}") {
      var statement = this.read_inner_statement();

      if (statement) {
        if (Array.isArray(statement)) {
          result = result.concat(statement);
        } else {
          result.push(statement);
        }
      }
    }

    return result;
  },

  /*
   * Reads a list of constants declaration
   * ```ebnf
   *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)* ';'
   * ```
   */
  read_const_list: function read_const_list() {
    return this.read_list(function () {
      this.expect(this.tok.T_STRING);
      var result = this.node("constant");
      var constName = this.node("identifier");
      var name = this.text();
      this.next();
      constName = constName(name);

      if (this.expect("=")) {
        return result(constName, this.next().read_expr());
      } else {
        // fallback
        return result(constName, null);
      }
    }, ",", false);
  },

  /*
   * Reads a list of constants declaration
   * ```ebnf
   *   declare_list ::= IDENTIFIER '=' expr (',' IDENTIFIER '=' expr)*
   * ```
   * @retrurn {Array}
   */
  read_declare_list: function read_declare_list() {
    var result = [];

    while (this.token != this.EOF && this.token !== ")") {
      this.expect(this.tok.T_STRING);
      var directive = this.node("declaredirective");
      var key = this.node("identifier");
      var name = this.text();
      this.next();
      key = key(name);
      var value = null;

      if (this.expect("=")) {
        value = this.next().read_expr();
      }

      result.push(directive(key, value));
      if (this.token !== ",") break;
      this.next();
    }

    return result;
  },

  /*
   * reads a simple inner statement
   * ```ebnf
   *  inner_statement ::= '{' inner_statements '}' | token
   * ```
   */
  read_inner_statement: function read_inner_statement() {
    switch (this.token) {
      case this.tok.T_FUNCTION:
        return this.read_function(false, false);
      // optional flags

      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL:
      case this.tok.T_CLASS:
        return this.read_class_declaration_statement();

      case this.tok.T_INTERFACE:
        return this.read_interface_declaration_statement();

      case this.tok.T_TRAIT:
        return this.read_trait_declaration_statement();

      case this.tok.T_HALT_COMPILER:
        {
          this.raiseError("__HALT_COMPILER() can only be used from the outermost scope"); // fallback : returns a node but does not stop the parsing

          var node = this.node("halt");
          this.next().expect("(") && this.next();
          this.expect(")") && this.next();
          node = node(this.lexer._input.substring(this.lexer.offset));
          this.expect(";") && this.next();
          return node;
        }

      default:
        return this.read_statement();
    }
  },

  /*
   * Reads statements
   */
  read_statement: function read_statement() {
    switch (this.token) {
      case "{":
        return this.read_code_block(false);

      case this.tok.T_IF:
        return this.read_if();

      case this.tok.T_SWITCH:
        return this.read_switch();

      case this.tok.T_FOR:
        return this.read_for();

      case this.tok.T_FOREACH:
        return this.read_foreach();

      case this.tok.T_WHILE:
        return this.read_while();

      case this.tok.T_DO:
        return this.read_do();

      case this.tok.T_COMMENT:
        return this.read_comment();

      case this.tok.T_DOC_COMMENT:
        return this.read_doc_comment();

      case this.tok.T_RETURN:
        {
          var result = this.node("return");
          this.next();
          var expr = this.read_optional_expr(";");
          this.expectEndOfStatement();
          return result(expr);
        }
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L429

      case this.tok.T_BREAK:
      case this.tok.T_CONTINUE:
        {
          var _result2 = this.node(this.token === this.tok.T_CONTINUE ? "continue" : "break");

          this.next();
          var level = this.read_optional_expr(";");
          this.expectEndOfStatement();
          return _result2(level);
        }

      case this.tok.T_GLOBAL:
        {
          var _result3 = this.node("global");

          var items = this.next().read_list(this.read_simple_variable, ",");
          this.expectEndOfStatement();
          return _result3(items);
        }

      case this.tok.T_STATIC:
        {
          var current = [this.token, this.lexer.getState()];

          var _result4 = this.node();

          if (this.next().token === this.tok.T_DOUBLE_COLON) {
            // static keyword for a class
            this.lexer.tokens.push(current);

            var _expr = this.next().read_expr();

            this.expectEndOfStatement(_expr);
            return _result4("expressionstatement", _expr);
          }

          if (this.token === this.tok.T_FUNCTION) {
            return this.read_function(true, [0, 1, 0]);
          }

          var _items = this.read_variable_declarations();

          this.expectEndOfStatement();
          return _result4("static", _items);
        }

      case this.tok.T_ECHO:
        {
          var _result5 = this.node("echo");

          var text = this.text();
          var shortForm = text === "<?=" || text === "<%=";
          var expressions = this.next().read_function_list(this.read_expr, ",");
          this.expectEndOfStatement();
          return _result5(expressions, shortForm);
        }

      case this.tok.T_INLINE_HTML:
        {
          var value = this.text();
          var prevChar = this.lexer.yylloc.first_offset > 0 ? this.lexer._input[this.lexer.yylloc.first_offset - 1] : null;
          var fixFirstLine = prevChar === "\r" || prevChar === "\n"; // revert back the first stripped line

          if (fixFirstLine) {
            if (prevChar === "\n" && this.lexer.yylloc.first_offset > 1 && this.lexer._input[this.lexer.yylloc.first_offset - 2] === "\r") {
              prevChar = "\r\n";
            }
          }

          var _result6 = this.node("inline");

          this.next();
          return _result6(value, fixFirstLine ? prevChar + value : value);
        }

      case this.tok.T_UNSET:
        {
          var _result7 = this.node("unset");

          this.next().expect("(") && this.next();
          var variables = this.read_function_list(this.read_variable, ",");
          this.expect(")") && this.next();
          this.expect(";") && this.next();
          return _result7(variables);
        }

      case this.tok.T_DECLARE:
        {
          var _result8 = this.node("declare");

          var body = [];
          var mode;
          this.next().expect("(") && this.next();
          var directives = this.read_declare_list();
          this.expect(")") && this.next();

          if (this.token === ":") {
            this.next();

            while (this.token != this.EOF && this.token !== this.tok.T_ENDDECLARE) {
              // @todo : check declare_statement from php / not valid
              body.push(this.read_top_statement());
            }

            if (body.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
              body.push(this.node("noop")());
            }

            this.expect(this.tok.T_ENDDECLARE) && this.next();
            this.expectEndOfStatement();
            mode = this.ast.declare.MODE_SHORT;
          } else if (this.token === "{") {
            this.next();

            while (this.token != this.EOF && this.token !== "}") {
              // @todo : check declare_statement from php / not valid
              body.push(this.read_top_statement());
            }

            if (body.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
              body.push(this.node("noop")());
            }

            this.expect("}") && this.next();
            mode = this.ast.declare.MODE_BLOCK;
          } else {
            this.expect(";") && this.next();
            mode = this.ast.declare.MODE_NONE;
          }

          return _result8(directives, body, mode);
        }

      case this.tok.T_TRY:
        return this.read_try();

      case this.tok.T_THROW:
        {
          var _result9 = this.node("throw");

          var _expr2 = this.next().read_expr();

          this.expectEndOfStatement();
          return _result9(_expr2);
        }
      // ignore this (extra ponctuation)

      case ";":
        {
          this.next();
          return null;
        }

      case this.tok.T_STRING:
        {
          var _result10 = this.node();

          var _current = [this.token, this.lexer.getState()];
          var labelNameText = this.text();
          var labelName = this.node("identifier"); // AST : https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L457

          if (this.next().token === ":") {
            labelName = labelName(labelNameText);
            this.next();
            return _result10("label", labelName);
          } else {
            labelName.destroy();
          } // default fallback expr / T_STRING '::' (etc...)


          _result10.destroy();

          this.lexer.tokens.push(_current);
          var statement = this.node("expressionstatement");

          var _expr3 = this.next().read_expr();

          this.expectEndOfStatement(_expr3);
          return statement(_expr3);
        }

      case this.tok.T_GOTO:
        {
          var _result11 = this.node("goto");

          var _labelName = null;

          if (this.next().expect(this.tok.T_STRING)) {
            _labelName = this.node("identifier");
            var name = this.text();
            this.next();
            _labelName = _labelName(name);
            this.expectEndOfStatement();
          }

          return _result11(_labelName);
        }

      default:
        {
          // default fallback expr
          var _statement = this.node("expressionstatement");

          var _expr4 = this.read_expr();

          this.expectEndOfStatement(_expr4);
          return _statement(_expr4);
        }
    }
  },

  /*
   * ```ebnf
   *  code_block ::= '{' (inner_statements | top_statements) '}'
   * ```
   */
  read_code_block: function read_code_block(top) {
    var result = this.node("block");
    this.expect("{") && this.next();
    var body = top ? this.read_top_statements() : this.read_inner_statements();

    if (body.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
      body.push(this.node("noop")());
    }

    this.expect("}") && this.next();
    return result(null, body);
  }
};

/***/ }),

/***/ 7991:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * Reads a switch statement
   * ```ebnf
   *  switch ::= T_SWITCH '(' expr ')' switch_case_list
   * ```
   * @return {Switch}
   * @see http://php.net/manual/en/control-structures.switch.php
   */
  read_switch: function read_switch() {
    var result = this.node("switch");
    this.expect(this.tok.T_SWITCH) && this.next();
    this.expect("(") && this.next();
    var test = this.read_expr();
    this.expect(")") && this.next();
    var shortForm = this.token === ":";
    var body = this.read_switch_case_list();
    return result(test, body, shortForm);
  },

  /*
   * ```ebnf
   *  switch_case_list ::= '{' ';'? case_list* '}' | ':' ';'? case_list* T_ENDSWITCH ';'
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L566
   */
  read_switch_case_list: function read_switch_case_list() {
    // DETECT SWITCH MODE
    var expect = null;
    var result = this.node("block");
    var items = [];

    if (this.token === "{") {
      expect = "}";
    } else if (this.token === ":") {
      expect = this.tok.T_ENDSWITCH;
    } else {
      this.expect(["{", ":"]);
    }

    this.next(); // OPTIONNAL ';'
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L570

    if (this.token === ";") {
      this.next();
    } // EXTRACTING CASES


    while (this.token !== this.EOF && this.token !== expect) {
      items.push(this.read_case_list(expect));
    }

    if (items.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
      items.push(this.node("noop")());
    } // CHECK END TOKEN


    this.expect(expect) && this.next();

    if (expect === this.tok.T_ENDSWITCH) {
      this.expectEndOfStatement();
    }

    return result(null, items);
  },

  /*
   * ```ebnf
   *   case_list ::= ((T_CASE expr) | T_DEFAULT) (':' | ';') inner_statement*
   * ```
   */
  read_case_list: function read_case_list(stopToken) {
    var result = this.node("case");
    var test = null;

    if (this.token === this.tok.T_CASE) {
      test = this.next().read_expr();
    } else if (this.token === this.tok.T_DEFAULT) {
      // the default entry - no condition
      this.next();
    } else {
      this.expect([this.tok.T_CASE, this.tok.T_DEFAULT]);
    } // case_separator


    this.expect([":", ";"]) && this.next();
    var body = this.node("block");
    var items = [];

    while (this.token !== this.EOF && this.token !== stopToken && this.token !== this.tok.T_CASE && this.token !== this.tok.T_DEFAULT) {
      items.push(this.read_inner_statement());
    }

    return result(test, body(null, items));
  }
};

/***/ }),

/***/ 4544:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * ```ebnf
   *  try ::= T_TRY '{' inner_statement* '}'
   *          (
   *              T_CATCH '(' namespace_name variable ')' '{'  inner_statement* '}'
   *          )*
   *          (T_FINALLY '{' inner_statement* '}')?
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L448
   * @return {Try}
   */
  read_try: function read_try() {
    this.expect(this.tok.T_TRY);
    var result = this.node("try");
    var always = null;
    var catches = [];
    var body = this.next().read_statement(); // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L455

    while (this.token === this.tok.T_CATCH) {
      var item = this.node("catch");
      this.next().expect("(") && this.next();
      var what = this.read_list(this.read_namespace_name, "|", false);
      var variable = this.read_variable(true, false);
      this.expect(")");
      catches.push(item(this.next().read_statement(), what, variable));
    }

    if (this.token === this.tok.T_FINALLY) {
      always = this.next().read_statement();
    }

    return result(body, catches, always);
  }
};

/***/ }),

/***/ 9957:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * Reads a short form of tokens
   * @param {Number} token - The ending token
   * @return {Block}
   */
  read_short_form: function read_short_form(token) {
    var body = this.node("block");
    var items = [];
    if (this.expect(":")) this.next();

    while (this.token != this.EOF && this.token !== token) {
      items.push(this.read_inner_statement());
    }

    if (items.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
      items.push(this.node("noop")());
    }

    if (this.expect(token)) this.next();
    this.expectEndOfStatement();
    return body(null, items);
  },

  /*
   * https://wiki.php.net/rfc/trailing-comma-function-calls
   * @param {*} item
   * @param {*} separator
   */
  read_function_list: function read_function_list(item, separator) {
    var result = [];

    do {
      if (this.token == separator && this.version >= 703 && result.length > 0) {
        result.push(this.node("noop")());
        break;
      }

      result.push(item.apply(this, []));

      if (this.token != separator) {
        break;
      }

      if (this.next().token == ")" && this.version >= 703) {
        break;
      }
    } while (this.token != this.EOF);

    return result;
  },

  /*
   * Helper : reads a list of tokens / sample : T_STRING ',' T_STRING ...
   * ```ebnf
   * list ::= separator? ( item separator )* item
   * ```
   */
  read_list: function read_list(item, separator, preserveFirstSeparator) {
    var result = [];

    if (this.token == separator) {
      if (preserveFirstSeparator) {
        result.push(typeof item === "function" ? this.node("noop")() : null);
      }

      this.next();
    }

    if (typeof item === "function") {
      do {
        var itemResult = item.apply(this, []);

        if (itemResult) {
          result.push(itemResult);
        }

        if (this.token != separator) {
          break;
        }
      } while (this.next().token != this.EOF);
    } else {
      if (this.expect(item)) {
        result.push(this.text());
      } else {
        return [];
      }

      while (this.next().token != this.EOF) {
        if (this.token != separator) break; // trim current separator & check item

        if (this.next().token != item) break;
        result.push(this.text());
      }
    }

    return result;
  },

  /*
   * Reads a list of names separated by a comma
   *
   * ```ebnf
   * name_list ::= namespace (',' namespace)*
   * ```
   *
   * Sample code :
   * ```php
   * <?php class foo extends bar, baz { }
   * ```
   *
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L726
   * @return {Reference[]}
   */
  read_name_list: function read_name_list() {
    return this.read_list(this.read_namespace_name, ",", false);
  },

  /*
   * Reads the byref token and assign it to the specified node
   * @param {*} cb
   */
  read_byref: function read_byref(cb) {
    var byref = this.node("byref");
    this.next();
    byref = byref(null);
    var result = cb();

    if (result) {
      this.ast.swapLocations(result, byref, result, this);
      result.byref = true;
    }

    return result;
  },

  /*
   * Reads a list of variables declarations
   *
   * ```ebnf
   * variable_declaration ::= T_VARIABLE ('=' expr)?*
   * variable_declarations ::= variable_declaration (',' variable_declaration)*
   * ```
   *
   * Sample code :
   * ```php
   * <?php static $a = 'hello', $b = 'world';
   * ```
   * @return {StaticVariable[]} Returns an array composed by a list of variables, or
   * assign values
   */
  read_variable_declarations: function read_variable_declarations() {
    return this.read_list(function () {
      var node = this.node("staticvariable");
      var variable = this.node("variable"); // plain variable name

      if (this.expect(this.tok.T_VARIABLE)) {
        var name = this.text().substring(1);
        this.next();
        variable = variable(name, false);
      } else {
        variable = variable("#ERR", false);
      }

      if (this.token === "=") {
        return node(variable, this.next().read_expr());
      } else {
        return variable;
      }
    }, ",");
  },

  /*
   * Reads class extends
   */
  read_extends_from: function read_extends_from() {
    if (this.token === this.tok.T_EXTENDS) {
      return this.next().read_namespace_name();
    }

    return null;
  },

  /*
   * Reads interface extends list
   */
  read_interface_extends_list: function read_interface_extends_list() {
    if (this.token === this.tok.T_EXTENDS) {
      return this.next().read_name_list();
    }

    return null;
  },

  /*
   * Reads implements list
   */
  read_implements_list: function read_implements_list() {
    if (this.token === this.tok.T_IMPLEMENTS) {
      return this.next().read_name_list();
    }

    return null;
  }
};

/***/ }),

/***/ 1099:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */


module.exports = {
  /*
   * Reads a variable
   *
   * ```ebnf
   *   variable ::= &? ...complex @todo
   * ```
   *
   * Some samples of parsed code :
   * ```php
   *  &$var                      // simple var
   *  $var                      // simple var
   *  classname::CONST_NAME     // dynamic class name with const retrieval
   *  foo()                     // function call
   *  $var->func()->property    // chained calls
   * ```
   */
  read_variable: function read_variable(read_only, encapsed) {
    var result; // check the byref flag

    if (this.token === "&") {
      return this.read_byref(this.read_variable.bind(this, read_only, encapsed));
    } // reads the entry point


    if (this.is([this.tok.T_VARIABLE, "$"])) {
      result = this.read_reference_variable(encapsed);
    } else if (this.is([this.tok.T_NS_SEPARATOR, this.tok.T_STRING, this.tok.T_NAMESPACE])) {
      result = this.node();
      var name = this.read_namespace_name();

      if (this.token != this.tok.T_DOUBLE_COLON && this.token != "(" && ["parentreference", "selfreference"].indexOf(name.kind) === -1) {
        // @see parser.js line 130 : resolves a conflict with scalar
        var literal = name.name.toLowerCase();

        if (literal === "true") {
          result = name.destroy(result("boolean", true, name.name));
        } else if (literal === "false") {
          result = name.destroy(result("boolean", false, name.name));
        } else if (literal === "null") {
          result = name.destroy(result("nullkeyword", name.name));
        } else {
          result.destroy(name);
          result = name;
        }
      } else {
        // @fixme possible #193 bug
        result.destroy(name);
        result = name;
      }
    } else if (this.token === this.tok.T_STATIC) {
      result = this.node("staticreference");
      var raw = this.text();
      this.next();
      result = result(raw);
    } else {
      this.expect("VARIABLE");
    } // static mode


    if (this.token === this.tok.T_DOUBLE_COLON) {
      result = this.read_static_getter(result, encapsed);
    }

    return this.recursive_variable_chain_scan(result, read_only, encapsed);
  },
  // resolves a static call
  read_static_getter: function read_static_getter(what, encapsed) {
    var result = this.node("staticlookup");
    var offset, name;

    if (this.next().is([this.tok.T_VARIABLE, "$"])) {
      offset = this.read_reference_variable(encapsed);
    } else if (this.token === this.tok.T_STRING || this.token === this.tok.T_CLASS || this.version >= 700 && this.is("IDENTIFIER")) {
      offset = this.node("identifier");
      name = this.text();
      this.next();
      offset = offset(name);
    } else if (this.token === "{") {
      offset = this.node("literal");
      name = this.next().read_expr();
      this.expect("}") && this.next();
      offset = offset("literal", name, null);
      this.expect("(");
    } else {
      this.error([this.tok.T_VARIABLE, this.tok.T_STRING]); // graceful mode : set getter as error node and continue

      offset = this.node("identifier");
      name = this.text();
      this.next();
      offset = offset(name);
    }

    return result(what, offset);
  },
  read_what: function read_what() {
    var is_static_lookup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var what = null;
    var name = null;

    switch (this.next().token) {
      case this.tok.T_STRING:
        what = this.node("identifier");
        name = this.text();
        this.next();
        what = what(name);

        if (is_static_lookup && this.token === this.tok.T_OBJECT_OPERATOR) {
          this.error();
        }

        break;

      case this.tok.T_VARIABLE:
        what = this.node("variable");
        name = this.text().substring(1);
        this.next();
        what = what(name, false);
        break;

      case "$":
        what = this.node();
        this.next().expect(["$", "{", this.tok.T_VARIABLE]);

        if (this.token === "{") {
          // $obj->${$varname}
          name = this.next().read_expr();
          this.expect("}") && this.next();
          what = what("variable", name, true);
        } else {
          // $obj->$$varname
          name = this.read_expr();
          what = what("variable", name, false);
        }

        break;

      case "{":
        what = this.node("encapsedpart");
        name = this.next().read_expr();
        this.expect("}") && this.next();
        what = what(name, "complex", false);
        break;

      default:
        this.error([this.tok.T_STRING, this.tok.T_VARIABLE, "$", "{"]); // graceful mode : set what as error mode & continue

        what = this.node("identifier");
        name = this.text();
        this.next();
        what = what(name);
        break;
    }

    return what;
  },
  recursive_variable_chain_scan: function recursive_variable_chain_scan(result, read_only, encapsed) {
    var node, offset;

    recursive_scan_loop: while (this.token != this.EOF) {
      switch (this.token) {
        case "(":
          if (read_only) {
            // @fixme : add more informations & test
            return result;
          } else {
            result = this.node("call")(result, this.read_argument_list());
          }

          break;

        case "[":
        case "{":
          {
            var backet = this.token;
            var isSquareBracket = backet === "[";
            node = this.node("offsetlookup");
            this.next();
            offset = false;

            if (encapsed) {
              offset = this.read_encaps_var_offset();
              this.expect(isSquareBracket ? "]" : "}") && this.next();
            } else {
              var isCallableVariable = isSquareBracket ? this.token !== "]" : this.token !== "}"; // callable_variable : https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1122

              if (isCallableVariable) {
                offset = this.read_expr();
                this.expect(isSquareBracket ? "]" : "}") && this.next();
              } else {
                this.next();
              }
            }

            result = node(result, offset);
            break;
          }

        case this.tok.T_DOUBLE_COLON:
          // @see https://github.com/glayzzle/php-parser/issues/107#issuecomment-354104574
          if (result.kind === "staticlookup" && result.offset.kind === "identifier") {
            this.error();
          }

          node = this.node("staticlookup");
          result = node(result, this.read_what(true)); // fix 185
          // static lookup dereferencables are limited to staticlookup over functions

          /*if (dereferencable && this.token !== "(") {
            this.error("(");
          }*/

          break;

        case this.tok.T_OBJECT_OPERATOR:
          {
            node = this.node("propertylookup");
            result = node(result, this.read_what());
            break;
          }

        default:
          break recursive_scan_loop;
      }
    }

    return result;
  },

  /*
   * https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1231
   */
  read_encaps_var_offset: function read_encaps_var_offset() {
    var offset = this.node();

    if (this.token === this.tok.T_STRING) {
      var text = this.text();
      this.next();
      offset = offset("identifier", text);
    } else if (this.token === this.tok.T_NUM_STRING) {
      var num = this.text();
      this.next();
      offset = offset("number", num, null);
    } else if (this.token === "-") {
      this.next();

      var _num = -1 * this.text();

      this.expect(this.tok.T_NUM_STRING) && this.next();
      offset = offset("number", _num, null);
    } else if (this.token === this.tok.T_VARIABLE) {
      var name = this.text().substring(1);
      this.next();
      offset = offset("variable", name, false);
    } else {
      this.expect([this.tok.T_STRING, this.tok.T_NUM_STRING, "-", this.tok.T_VARIABLE]); // fallback : consider as identifier

      var _text = this.text();

      this.next();
      offset = offset("identifier", _text);
    }

    return offset;
  },

  /*
   * ```ebnf
   *  reference_variable ::=  simple_variable ('[' OFFSET ']')* | '{' EXPR '}'
   * ```
   * <code>
   *  $foo[123];      // foo is an array ==> gets its entry
   *  $foo{1};        // foo is a string ==> get the 2nd char offset
   *  ${'foo'}[123];  // get the dynamic var $foo
   *  $foo[123]{1};   // gets the 2nd char from the 123 array entry
   * </code>
   */
  read_reference_variable: function read_reference_variable(encapsed) {
    var result = this.read_simple_variable();
    var offset;

    while (this.token != this.EOF) {
      var node = this.node();

      if (this.token == "{" && !encapsed) {
        // @fixme check coverage, not sure thats working
        offset = this.next().read_expr();
        this.expect("}") && this.next();
        result = node("offsetlookup", result, offset);
      } else {
        node.destroy();
        break;
      }
    }

    return result;
  },

  /*
   * ```ebnf
   *  simple_variable ::= T_VARIABLE | '$' '{' expr '}' | '$' simple_variable
   * ```
   */
  read_simple_variable: function read_simple_variable() {
    var result = this.node("variable");
    var name;

    if (this.expect([this.tok.T_VARIABLE, "$"]) && this.token === this.tok.T_VARIABLE) {
      // plain variable name
      name = this.text().substring(1);
      this.next();
      result = result(name, false);
    } else {
      if (this.token === "$") this.next(); // dynamic variable name

      switch (this.token) {
        case "{":
          {
            var expr = this.next().read_expr();
            this.expect("}") && this.next();
            result = result(expr, true);
            break;
          }

        case "$":
          // $$$var
          result = result(this.read_simple_variable(), false);
          break;

        case this.tok.T_VARIABLE:
          {
            // $$var
            name = this.text().substring(1);
            var node = this.node("variable");
            this.next();
            result = result(node(name, false), false);
            break;
          }

        default:
          this.error(["{", "$", this.tok.T_VARIABLE]); // graceful mode

          name = this.text();
          this.next();
          result = result(name, false);
      }
    }

    return result;
  }
};

/***/ }),

/***/ 6455:
/***/ ((module) => {

/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * @memberOf module:php-parser
 * @readonly
 * @enum
 */

var TokenNames = {
  T_HALT_COMPILER: 101,
  T_USE: 102,
  T_ENCAPSED_AND_WHITESPACE: 103,
  T_OBJECT_OPERATOR: 104,
  T_STRING: 105,
  T_DOLLAR_OPEN_CURLY_BRACES: 106,
  T_STRING_VARNAME: 107,
  T_CURLY_OPEN: 108,
  T_NUM_STRING: 109,
  T_ISSET: 110,
  T_EMPTY: 111,
  T_INCLUDE: 112,
  T_INCLUDE_ONCE: 113,
  T_EVAL: 114,
  T_REQUIRE: 115,
  T_REQUIRE_ONCE: 116,
  T_NAMESPACE: 117,
  T_NS_SEPARATOR: 118,
  T_AS: 119,
  T_IF: 120,
  T_ENDIF: 121,
  T_WHILE: 122,
  T_DO: 123,
  T_FOR: 124,
  T_SWITCH: 125,
  T_BREAK: 126,
  T_CONTINUE: 127,
  T_RETURN: 128,
  T_GLOBAL: 129,
  T_STATIC: 130,
  T_ECHO: 131,
  T_INLINE_HTML: 132,
  T_UNSET: 133,
  T_FOREACH: 134,
  T_DECLARE: 135,
  T_TRY: 136,
  T_THROW: 137,
  T_GOTO: 138,
  T_FINALLY: 139,
  T_CATCH: 140,
  T_ENDDECLARE: 141,
  T_LIST: 142,
  T_CLONE: 143,
  T_PLUS_EQUAL: 144,
  T_MINUS_EQUAL: 145,
  T_MUL_EQUAL: 146,
  T_DIV_EQUAL: 147,
  T_CONCAT_EQUAL: 148,
  T_MOD_EQUAL: 149,
  T_AND_EQUAL: 150,
  T_OR_EQUAL: 151,
  T_XOR_EQUAL: 152,
  T_SL_EQUAL: 153,
  T_SR_EQUAL: 154,
  T_INC: 155,
  T_DEC: 156,
  T_BOOLEAN_OR: 157,
  T_BOOLEAN_AND: 158,
  T_LOGICAL_OR: 159,
  T_LOGICAL_AND: 160,
  T_LOGICAL_XOR: 161,
  T_SL: 162,
  T_SR: 163,
  T_IS_IDENTICAL: 164,
  T_IS_NOT_IDENTICAL: 165,
  T_IS_EQUAL: 166,
  T_IS_NOT_EQUAL: 167,
  T_IS_SMALLER_OR_EQUAL: 168,
  T_IS_GREATER_OR_EQUAL: 169,
  T_INSTANCEOF: 170,
  T_INT_CAST: 171,
  T_DOUBLE_CAST: 172,
  T_STRING_CAST: 173,
  T_ARRAY_CAST: 174,
  T_OBJECT_CAST: 175,
  T_BOOL_CAST: 176,
  T_UNSET_CAST: 177,
  T_EXIT: 178,
  T_PRINT: 179,
  T_YIELD: 180,
  T_YIELD_FROM: 181,
  T_FUNCTION: 182,
  T_DOUBLE_ARROW: 183,
  T_DOUBLE_COLON: 184,
  T_ARRAY: 185,
  T_CALLABLE: 186,
  T_CLASS: 187,
  T_ABSTRACT: 188,
  T_TRAIT: 189,
  T_FINAL: 190,
  T_EXTENDS: 191,
  T_INTERFACE: 192,
  T_IMPLEMENTS: 193,
  T_VAR: 194,
  T_PUBLIC: 195,
  T_PROTECTED: 196,
  T_PRIVATE: 197,
  T_CONST: 198,
  T_NEW: 199,
  T_INSTEADOF: 200,
  T_ELSEIF: 201,
  T_ELSE: 202,
  T_ENDSWITCH: 203,
  T_CASE: 204,
  T_DEFAULT: 205,
  T_ENDFOR: 206,
  T_ENDFOREACH: 207,
  T_ENDWHILE: 208,
  T_CONSTANT_ENCAPSED_STRING: 209,
  T_LNUMBER: 210,
  T_DNUMBER: 211,
  T_LINE: 212,
  T_FILE: 213,
  T_DIR: 214,
  T_TRAIT_C: 215,
  T_METHOD_C: 216,
  T_FUNC_C: 217,
  T_NS_C: 218,
  T_START_HEREDOC: 219,
  T_END_HEREDOC: 220,
  T_CLASS_C: 221,
  T_VARIABLE: 222,
  T_OPEN_TAG: 223,
  T_OPEN_TAG_WITH_ECHO: 224,
  T_CLOSE_TAG: 225,
  T_WHITESPACE: 226,
  T_COMMENT: 227,
  T_DOC_COMMENT: 228,
  T_ELLIPSIS: 229,
  T_COALESCE: 230,
  T_POW: 231,
  T_POW_EQUAL: 232,
  T_SPACESHIP: 233,
  T_COALESCE_EQUAL: 234,
  T_FN: 235
};
/**
 * PHP AST Tokens
 * @readonly
 * @memberOf module:php-parser
 *
 * @type {object}
 * @property {Object.<number, string>} values
 * @property {TokenNames} names
 */

var tokens = {
  values: {
    101: "T_HALT_COMPILER",
    102: "T_USE",
    103: "T_ENCAPSED_AND_WHITESPACE",
    104: "T_OBJECT_OPERATOR",
    105: "T_STRING",
    106: "T_DOLLAR_OPEN_CURLY_BRACES",
    107: "T_STRING_VARNAME",
    108: "T_CURLY_OPEN",
    109: "T_NUM_STRING",
    110: "T_ISSET",
    111: "T_EMPTY",
    112: "T_INCLUDE",
    113: "T_INCLUDE_ONCE",
    114: "T_EVAL",
    115: "T_REQUIRE",
    116: "T_REQUIRE_ONCE",
    117: "T_NAMESPACE",
    118: "T_NS_SEPARATOR",
    119: "T_AS",
    120: "T_IF",
    121: "T_ENDIF",
    122: "T_WHILE",
    123: "T_DO",
    124: "T_FOR",
    125: "T_SWITCH",
    126: "T_BREAK",
    127: "T_CONTINUE",
    128: "T_RETURN",
    129: "T_GLOBAL",
    130: "T_STATIC",
    131: "T_ECHO",
    132: "T_INLINE_HTML",
    133: "T_UNSET",
    134: "T_FOREACH",
    135: "T_DECLARE",
    136: "T_TRY",
    137: "T_THROW",
    138: "T_GOTO",
    139: "T_FINALLY",
    140: "T_CATCH",
    141: "T_ENDDECLARE",
    142: "T_LIST",
    143: "T_CLONE",
    144: "T_PLUS_EQUAL",
    145: "T_MINUS_EQUAL",
    146: "T_MUL_EQUAL",
    147: "T_DIV_EQUAL",
    148: "T_CONCAT_EQUAL",
    149: "T_MOD_EQUAL",
    150: "T_AND_EQUAL",
    151: "T_OR_EQUAL",
    152: "T_XOR_EQUAL",
    153: "T_SL_EQUAL",
    154: "T_SR_EQUAL",
    155: "T_INC",
    156: "T_DEC",
    157: "T_BOOLEAN_OR",
    158: "T_BOOLEAN_AND",
    159: "T_LOGICAL_OR",
    160: "T_LOGICAL_AND",
    161: "T_LOGICAL_XOR",
    162: "T_SL",
    163: "T_SR",
    164: "T_IS_IDENTICAL",
    165: "T_IS_NOT_IDENTICAL",
    166: "T_IS_EQUAL",
    167: "T_IS_NOT_EQUAL",
    168: "T_IS_SMALLER_OR_EQUAL",
    169: "T_IS_GREATER_OR_EQUAL",
    170: "T_INSTANCEOF",
    171: "T_INT_CAST",
    172: "T_DOUBLE_CAST",
    173: "T_STRING_CAST",
    174: "T_ARRAY_CAST",
    175: "T_OBJECT_CAST",
    176: "T_BOOL_CAST",
    177: "T_UNSET_CAST",
    178: "T_EXIT",
    179: "T_PRINT",
    180: "T_YIELD",
    181: "T_YIELD_FROM",
    182: "T_FUNCTION",
    183: "T_DOUBLE_ARROW",
    184: "T_DOUBLE_COLON",
    185: "T_ARRAY",
    186: "T_CALLABLE",
    187: "T_CLASS",
    188: "T_ABSTRACT",
    189: "T_TRAIT",
    190: "T_FINAL",
    191: "T_EXTENDS",
    192: "T_INTERFACE",
    193: "T_IMPLEMENTS",
    194: "T_VAR",
    195: "T_PUBLIC",
    196: "T_PROTECTED",
    197: "T_PRIVATE",
    198: "T_CONST",
    199: "T_NEW",
    200: "T_INSTEADOF",
    201: "T_ELSEIF",
    202: "T_ELSE",
    203: "T_ENDSWITCH",
    204: "T_CASE",
    205: "T_DEFAULT",
    206: "T_ENDFOR",
    207: "T_ENDFOREACH",
    208: "T_ENDWHILE",
    209: "T_CONSTANT_ENCAPSED_STRING",
    210: "T_LNUMBER",
    211: "T_DNUMBER",
    212: "T_LINE",
    213: "T_FILE",
    214: "T_DIR",
    215: "T_TRAIT_C",
    216: "T_METHOD_C",
    217: "T_FUNC_C",
    218: "T_NS_C",
    219: "T_START_HEREDOC",
    220: "T_END_HEREDOC",
    221: "T_CLASS_C",
    222: "T_VARIABLE",
    223: "T_OPEN_TAG",
    224: "T_OPEN_TAG_WITH_ECHO",
    225: "T_CLOSE_TAG",
    226: "T_WHITESPACE",
    227: "T_COMMENT",
    228: "T_DOC_COMMENT",
    229: "T_ELLIPSIS",
    230: "T_COALESCE",
    231: "T_POW",
    232: "T_POW_EQUAL",
    233: "T_SPACESHIP",
    234: "T_COALESCE_EQUAL",
    235: "T_FN"
  },
  names: TokenNames
};
module.exports = Object.freeze(tokens);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(1427);
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
