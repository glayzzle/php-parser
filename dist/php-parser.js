/*! php-parser - BSD3 License - 2018-04-14 */

require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],2:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],3:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://gla*yzzle.com
 */

var Location = require("./ast/location");
var Position = require("./ast/position");

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
 *   - [Comment](#comment)
 *     - [CommentLine](#commentline)
 *     - [CommentBlock](#commentblock)
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
 *       - [Pre](#pre)
 *       - [Post](#post)
 *       - [Bin](#bin)
 *       - [Parenthesis](#parenthesis)
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
var AST = function AST(withPositions, withSource) {
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
AST.prototype.position = function (parser) {
  return new Position(parser.lexer.yylloc.first_line, parser.lexer.yylloc.first_column, parser.lexer.yylloc.first_offset);
};

// operators in ascending order of precedence
AST.precedence = {};
[["or"], ["xor"], ["and"], ["="], ["?"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "!=", "===", "!==", /* '<>', */"<=>"], ["<", "<=", ">", ">="], ["<<", ">>"], ["+", "-", "."], ["*", "/", "%"], ["!"], ["instanceof"]
// TODO: typecasts
// TODO: [ (array)
// TODO: clone, new
].forEach(function (list, index) {
  list.forEach(function (operator) {
    AST.precedence[operator] = index + 1;
  });
});

/**
 * Check and fix precence, by default using right
 */
AST.prototype.resolvePrecedence = function (result) {
  var buffer = void 0,
      lLevel = void 0,
      rLevel = void 0;
  // handling precendence
  if (result.kind === "bin") {
    if (result.right) {
      if (result.right.kind === "bin") {
        lLevel = AST.precedence[result.type];
        rLevel = AST.precedence[result.right.type];
        if (lLevel && rLevel && rLevel <= lLevel) {
          // https://github.com/glayzzle/php-parser/issues/79
          // shift precedence
          buffer = result.right;
          result.right = result.right.left;
          buffer.left = this.resolvePrecedence(result);
          result = buffer;
        }
      } else if (result.right.kind === "retif") {
        lLevel = AST.precedence[result.type];
        rLevel = AST.precedence["?"];
        if (lLevel && rLevel && rLevel <= lLevel) {
          buffer = result.right;
          result.right = result.right.test;
          buffer.test = this.resolvePrecedence(result);
          result = buffer;
        }
      }
    }
  } else if (result.kind === "unary") {
    // https://github.com/glayzzle/php-parser/issues/75
    if (result.what) {
      // unary precedence is allways lower
      if (result.what.kind === "bin") {
        buffer = result.what;
        result.what = result.what.left;
        buffer.left = this.resolvePrecedence(result);
        result = buffer;
      } else if (result.what.kind === "retif") {
        buffer = result.what;
        result.what = result.what.test;
        buffer.test = this.resolvePrecedence(result);
        result = buffer;
      }
    }
  } else if (result.kind === "retif") {
    // https://github.com/glayzzle/php-parser/issues/77
    if (result.falseExpr && result.falseExpr.kind === "retif") {
      buffer = result.falseExpr;
      result.falseExpr = buffer.test;
      buffer.test = this.resolvePrecedence(result);
      result = buffer;
    }
  } else if (result.kind === "assign") {
    // https://github.com/glayzzle/php-parser/issues/81
    if (result.right && result.right.kind === "bin") {
      lLevel = AST.precedence["="];
      rLevel = AST.precedence[result.right.type];
      // only shifts with and, xor, or
      if (lLevel && rLevel && rLevel < lLevel) {
        buffer = result.right;
        result.right = result.right.left;
        buffer.left = result;
        result = buffer;
      }
    }
  }
  return result;
};

/**
 * Prepares an AST node
 * @param {String|null} kind - Defines the node type
 * (if null, the kind must be passed at the function call)
 * @param {Parser} parser - The parser instance (use for extracting locations)
 * @return {Function}
 */
AST.prototype.prepare = function (kind, docs, parser) {
  var start = null;
  if (this.withPositions || this.withSource) {
    start = this.position(parser);
  }
  var self = this;
  // returns the node
  return function () {
    var location = null;
    var args = Array.prototype.slice.call(arguments);
    args.push(docs);
    if (self.withPositions || self.withSource) {
      var src = null;
      if (self.withSource) {
        src = parser.lexer._input.substring(start.offset, parser.prev[2]);
      }
      if (self.withPositions) {
        location = new Location(src, start, new Position(parser.prev[0], parser.prev[1], parser.prev[2]));
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
    if (typeof node !== "function") {
      throw new Error('Undefined node "' + kind + '"');
    }
    var result = Object.create(node.prototype);
    node.apply(result, args);
    return self.resolvePrecedence(result);
  };
};

// Define all AST nodes
[require("./ast/array"), require("./ast/assign"), require("./ast/bin"), require("./ast/block"), require("./ast/boolean"), require("./ast/break"), require("./ast/call"), require("./ast/case"), require("./ast/cast"), require("./ast/catch"), require("./ast/class"), require("./ast/classconstant"), require("./ast/clone"), require("./ast/closure"), require("./ast/comment"), require("./ast/commentblock"), require("./ast/commentline"), require("./ast/constant"), require("./ast/constref"), require("./ast/continue"), require("./ast/declaration"), require("./ast/declare"), require("./ast/do"), require("./ast/echo"), require("./ast/empty"), require("./ast/encapsed"), require("./ast/entry"), require("./ast/error"), require("./ast/eval"), require("./ast/exit"), require("./ast/expression"), require("./ast/for"), require("./ast/foreach"), require("./ast/function"), require("./ast/global"), require("./ast/goto"), require("./ast/halt"), require("./ast/identifier"), require("./ast/if"), require("./ast/include"), require("./ast/inline"), require("./ast/interface"), require("./ast/isset"), require("./ast/label"), require("./ast/list"), require("./ast/literal"), require("./ast/lookup"), require("./ast/magic"), require("./ast/method"), require("./ast/namespace"), require("./ast/new"), require("./ast/node"), require("./ast/nowdoc"), require("./ast/number"), require("./ast/offsetlookup"), require("./ast/operation"), require("./ast/parameter"), require("./ast/parenthesis"), require("./ast/post"), require("./ast/pre"), require("./ast/print"), require("./ast/program"), require("./ast/property"), require("./ast/propertylookup"), require("./ast/retif"), require("./ast/return"), require("./ast/silent"), require("./ast/statement"), require("./ast/static"), require("./ast/staticlookup"), require("./ast/string"), require("./ast/switch"), require("./ast/sys"), require("./ast/throw"), require("./ast/trait"), require("./ast/traitalias"), require("./ast/traitprecedence"), require("./ast/traituse"), require("./ast/try"), require("./ast/unary"), require("./ast/unset"), require("./ast/usegroup"), require("./ast/useitem"), require("./ast/variable"), require("./ast/variadic"), require("./ast/while"), require("./ast/yield"), require("./ast/yieldfrom")].forEach(function (ctor) {
  var kind = ctor.prototype.constructor.name.toLowerCase();
  if (kind[0] === "_") kind = kind.substring(1);
  AST.prototype[kind] = ctor;
});

module.exports = AST;

},{"./ast/array":4,"./ast/assign":5,"./ast/bin":6,"./ast/block":7,"./ast/boolean":8,"./ast/break":9,"./ast/call":10,"./ast/case":11,"./ast/cast":12,"./ast/catch":13,"./ast/class":14,"./ast/classconstant":15,"./ast/clone":16,"./ast/closure":17,"./ast/comment":18,"./ast/commentblock":19,"./ast/commentline":20,"./ast/constant":21,"./ast/constref":22,"./ast/continue":23,"./ast/declaration":24,"./ast/declare":25,"./ast/do":26,"./ast/echo":27,"./ast/empty":28,"./ast/encapsed":29,"./ast/entry":30,"./ast/error":31,"./ast/eval":32,"./ast/exit":33,"./ast/expression":34,"./ast/for":35,"./ast/foreach":36,"./ast/function":37,"./ast/global":38,"./ast/goto":39,"./ast/halt":40,"./ast/identifier":41,"./ast/if":42,"./ast/include":43,"./ast/inline":44,"./ast/interface":45,"./ast/isset":46,"./ast/label":47,"./ast/list":48,"./ast/literal":49,"./ast/location":50,"./ast/lookup":51,"./ast/magic":52,"./ast/method":53,"./ast/namespace":54,"./ast/new":55,"./ast/node":56,"./ast/nowdoc":57,"./ast/number":58,"./ast/offsetlookup":59,"./ast/operation":60,"./ast/parameter":61,"./ast/parenthesis":62,"./ast/position":63,"./ast/post":64,"./ast/pre":65,"./ast/print":66,"./ast/program":67,"./ast/property":68,"./ast/propertylookup":69,"./ast/retif":70,"./ast/return":71,"./ast/silent":72,"./ast/statement":73,"./ast/static":74,"./ast/staticlookup":75,"./ast/string":76,"./ast/switch":77,"./ast/sys":78,"./ast/throw":79,"./ast/trait":80,"./ast/traitalias":81,"./ast/traitprecedence":82,"./ast/traituse":83,"./ast/try":84,"./ast/unary":85,"./ast/unset":86,"./ast/usegroup":87,"./ast/useitem":88,"./ast/variable":89,"./ast/variadic":90,"./ast/while":91,"./ast/yield":92,"./ast/yieldfrom":93}],4:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Expr = require("./expression");
var KIND = "array";

/**
 * Defines an array structure
 * @constructor Array
 * @example
 * // PHP code :
 * [1, 'foo' => 'bar', 3]
 *
 * // AST structure :
 * {
 *  "kind": "array",
 *  "shortForm": true
 *  "items": [{
 *    "kind": "entry",
 *    "key": null,
 *    "value": {"kind": "number", "value": "1"}
 *  }, {
 *    "kind": "entry",
 *    "key": {"kind": "string", "value": "foo", "isDoubleQuote": false},
 *    "value": {"kind": "string", "value": "bar", "isDoubleQuote": false}
 *  }, {
 *    "kind": "entry",
 *    "key": null,
 *    "value": {"kind": "number", "value": "3"}
 *  }]
 * }
 * @extends {Expression}
 * @property {Entry[]} items List of array items
 * @property {boolean} shortForm Indicate if the short array syntax is used, ex `[]` instead `array()`
 */
var Array = Expr.extends(function Array(shortForm, items, docs, location) {
  Expr.apply(this, [KIND, docs, location]);
  this.items = items;
  this.shortForm = shortForm;
});

module.exports = Array;

},{"./expression":34}],5:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require("./statement");
var KIND = "assign";

/**
 * Assigns a value to the specified target
 * @constructor Assign
 * @extends {Statement}
 * @property {Expression} left
 * @property {Expression} right
 * @property {String} operator
 */
var Assign = Statement.extends(function Assign(left, right, operator, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.operator = operator;
  this.left = left;
  this.right = right;
});

module.exports = Assign;

},{"./statement":73}],6:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Operation = require("./operation");
var KIND = "bin";
/**
 * Binary operations
 * @constructor Bin
 * @extends {Operation}
 * @property {String} type
 * @property {Expression} left
 * @property {Expression} right
 */
var Bin = Operation.extends(function Bin(type, left, right, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.left = left;
  this.right = right;
});

module.exports = Bin;

},{"./operation":60}],7:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require("./statement");
var KIND = "block";

/**
 * A block statement, i.e., a sequence of statements surrounded by braces.
 * @constructor Block
 * @extends {Statement}
 * @property {Node[]} children
 */
var Block = Statement.extends(function Block(kind, children, docs, location) {
  Statement.apply(this, [kind || KIND, docs, location]);
  this.children = children.filter(Boolean);
});

module.exports = Block;

},{"./statement":73}],8:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require("./literal");
var KIND = "boolean";

/**
 * Defines a boolean value (true/false)
 * @constructor Boolean
 * @extends {Literal}
 */
var Boolean = Literal.extends(function Boolean(value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
});

module.exports = Boolean;

},{"./literal":49}],9:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Node = require("./node");
var KIND = "break";

/**
 * A break statement
 * @constructor Break
 * @extends {Node}
 * @property {Number|Null} level
 */
var Break = Node.extends(function Break(level, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.level = level;
});

module.exports = Break;

},{"./node":56}],10:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "call";

/**
 * Executes a call statement
 * @constructor Call
 * @extends {Statement}
 * @property {Identifier|Variable|??} what
 * @property {Arguments[]} arguments
 */
var Call = Statement.extends(function Call(what, args, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.what = what;
  this.arguments = args;
});

module.exports = Call;

},{"./statement":73}],11:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Node = require("./node");
var KIND = "case";

/**
 * A switch case statement
 * @constructor Case
 * @extends {Node}
 * @property {Expression|null} test - if null, means that the default case
 * @property {Block|null} body
 */
var Case = Node.extends(function Case(test, body, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
});

module.exports = Case;

},{"./node":56}],12:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Operation = require("./operation");
var KIND = "cast";

/**
 * Binary operations
 * @constructor Cast
 * @extends {Operation}
 * @property {String} type
 * @property {Expression} what
 */
var Cast = Operation.extends(function Cast(type, what, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.what = what;
});

module.exports = Cast;

},{"./operation":60}],13:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "catch";

/**
 * Defines a catch statement
 * @constructor Catch
 * @extends {Statement}
 * @property {Identifier[]} what
 * @property {Variable} variable
 * @property {Statement} body
 * @see http://php.net/manual/en/language.exceptions.php
 */
var Catch = Statement.extends(function Catch(body, what, variable, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.body = body;
  this.what = what;
  this.variable = variable;
});

module.exports = Catch;

},{"./statement":73}],14:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require("./declaration");
var KIND = "class";

/**
 * A class definition
 * @constructor Class
 * @extends {Declaration}
 * @property {Identifier|null} extends
 * @property {Identifier[]} implements
 * @property {Declaration[]} body
 * @property {boolean} isAnonymous
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 */
var Class = Declaration.extends(function Class(name, ext, impl, body, flags, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.isAnonymous = name ? false : true;
  this.extends = ext;
  this.implements = impl;
  this.body = body;
  this.parseFlags(flags);
});

module.exports = Class;

},{"./declaration":24}],15:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Constant = require("./constant");
var KIND = "classconstant";

/**
 * Defines a class/interface/trait constant
 * @constructor ClassConstant
 * @extends {Constant}
 * @property {boolean} isStatic
 * @property {string} visibility
 */
var ClassConstant = Constant.extends(function ClassConstant(name, value, flags, docs, location) {
  Constant.apply(this, [name, value, docs, location]);
  this.kind = KIND;
  this.parseFlags(flags);
});

module.exports = ClassConstant;

},{"./constant":21}],16:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require("./statement");
var KIND = "clone";

/**
 * Defines a clone call
 * @constructor Clone
 * @extends {Statement}
 * @property {Expression} what
 */
var Clone = Statement.extends(function Clone(what, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.what = what;
});

module.exports = Clone;

},{"./statement":73}],17:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "closure";

/**
 * Defines a closure
 * @constructor Closure
 * @extends {Statement}
 * @property {Parameter[]} arguments
 * @property {Variable[]} uses
 * @property {Identifier} type
 * @property {boolean} byref
 * @property {boolean} nullable
 * @property {Block|null} body
 * @property {boolean} isStatic
 */
var Closure = Statement.extends(function Closure(args, byref, uses, type, nullable, isStatic, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.uses = uses;
  this.arguments = args;
  this.byref = byref;
  this.type = type;
  this.nullable = nullable;
  this.isStatic = isStatic || false;
  this.body = null;
});

module.exports = Closure;

},{"./statement":73}],18:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require("./node");

/**
 * Abstract documentation node (ComentLine or CommentBlock)
 * @constructor Comment
 * @extends {Node}
 * @property {String} value
 */
var Comment = Node.extends(function Comment(kind, value, docs, location) {
  Node.apply(this, [kind, docs, location]);
  this.value = value;
});

module.exports = Comment;

},{"./node":56}],19:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Comment = require("./comment");
var KIND = "commentblock";

/**
 * A comment block (multiline)
 * @constructor CommentBlock
 * @extends {Comment}
 */
var CommentBlock = Comment.extends(function CommentBlock(value, docs, location) {
  Comment.apply(this, [KIND, value, docs, location]);
});

module.exports = CommentBlock;

},{"./comment":18}],20:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Comment = require("./comment");
var KIND = "commentline";

/**
 * A single line comment
 * @constructor CommentLine
 * @extends {Comment}
 */
var CommentLine = Comment.extends(function CommentLine(value, docs, location) {
  Comment.apply(this, [KIND, value, docs, location]);
});

module.exports = CommentLine;

},{"./comment":18}],21:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require("./declaration");
var KIND = "constant";

/**
 * Defines a namespace constant
 * @constructor Constant
 * @extends {Declaration}
 * @property {Node|null} value
 */
var Constant = Declaration.extends(function Constant(name, value, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.value = value;
});

module.exports = Constant;

},{"./declaration":24}],22:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Expr = require("./expression");
var KIND = "constref";

/**
 * A constant reference
 * @constructor ConstRef
 * @extends {Expression}
 * @property {String|Node} name
 */
var ConstRef = Expr.extends(function ConstRef(identifier, docs, location) {
  Expr.apply(this, [KIND, docs, location]);
  this.name = identifier;
});

module.exports = ConstRef;

},{"./expression":34}],23:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Node = require("./node");
var KIND = "continue";

/**
 * A continue statement
 * @constructor Continue
 * @extends {Node}
 * @property {Number|Null} level
 */
var Continue = Node.extends(function Continue(level, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.level = level;
});

module.exports = Continue;

},{"./node":56}],24:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require("./statement");
var KIND = "declaration";

var IS_UNDEFINED = "";
var IS_PUBLIC = "public";
var IS_PROTECTED = "protected";
var IS_PRIVATE = "private";

/**
 * A declaration statement (function, class, interface...)
 * @constructor Declaration
 * @extends {Statement}
 * @property {string} name
 */
var Declaration = Statement.extends(function Declaration(kind, name, docs, location) {
  Statement.apply(this, [kind || KIND, docs, location]);
  this.name = name;
});

/**
 * Generic flags parser
 * @param {Integer[]} flags
 * @return {void}
 */
Declaration.prototype.parseFlags = function (flags) {
  this.isAbstract = flags[2] === 1;
  this.isFinal = flags[2] === 2;
  if (this.kind !== "class") {
    if (flags[0] === -1) {
      this.visibility = IS_UNDEFINED;
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

},{"./statement":73}],25:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Block = require("./block");
var KIND = "declare";

/**
 * The declare construct is used to set execution directives for a block of code
 * @constructor Declare
 * @extends {Block}
 * @property {Expression[]} what
 * @property {String} mode
 * @see http://php.net/manual/en/control-structures.declare.php
 */
var Declare = Block.extends(function Declare(what, body, mode, docs, location) {
  Block.apply(this, [KIND, body, docs, location]);
  this.what = what;
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
 * @constant {String} MODE_SHORT
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
 * @constant {String} MODE_BLOCK
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
 * @constant {String} MODE_NONE
 */
Declare.MODE_NONE = "none";

module.exports = Declare;

},{"./block":7}],26:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "do";

/**
 * Defines a do/while statement
 * @constructor Do
 * @extends {Statement}
 * @property {Expression} test
 * @property {Statement} body
 */
var Do = Statement.extends(function Do(test, body, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
});

module.exports = Do;

},{"./statement":73}],27:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require("./sys");
var KIND = "echo";

/**
 * Defines system based call
 * @constructor Echo
 * @property {boolean} shortForm
 * @extends {Sys}
 */
var Echo = Sys.extends(function Echo(args, shortForm, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
  this.shortForm = shortForm;
});

module.exports = Echo;

},{"./sys":78}],28:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require("./sys");
var KIND = "empty";

/**
 * Defines an empty check call
 * @constructor Empty
 * @extends {Sys}
 */
var Empty = Sys.extends(function Empty(args, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
});

module.exports = Empty;

},{"./sys":78}],29:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require("./literal");
var KIND = "encapsed";

/**
 * Defines an encapsed string (contains expressions)
 * @constructor Encapsed
 * @extends {Literal}
 * @property {String} type - Defines the type of encapsed string (shell, heredoc, string)
 * @property {String|Null} label - The heredoc label, defined only when the type is heredoc
 */
var Encapsed = Literal.extends(function Encapsed(value, raw, type, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
  this.type = type;
});

/**
 * The node is a double quote string :
 * ```php
 * <?php
 * echo "hello $world";
 * ```
 * @constant {String} TYPE_STRING - `string`
 */
Encapsed.TYPE_STRING = "string";

/**
 * The node is a shell execute string :
 * ```php
 * <?php
 * echo `ls -larth $path`;
 * ```
 * @constant {String} TYPE_SHELL - `shell`
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
 * @constant {String} TYPE_HEREDOC - `heredoc`
 */
Encapsed.TYPE_HEREDOC = "heredoc";

/**
 * The node contains a list of constref / variables / expr :
 * ```php
 * <?php
 * echo $foo->bar_$baz;
 * ```
 * @constant {String} TYPE_OFFSET - `offset`
 */
Encapsed.TYPE_OFFSET = "offset";

module.exports = Encapsed;

},{"./literal":49}],30:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require("./node");
var KIND = "entry";

/**
 * An array entry - see [Array](#array)
 * @constructor Entry
 * @extends {Node}
 * @property {Node|null} key The entry key/offset
 * @property {Node} value The entry value
 */
var Entry = Node.extends(function Entry(key, value, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.key = key;
  this.value = value;
});

module.exports = Entry;

},{"./node":56}],31:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require("./node");
var KIND = "error";

/**
 * Defines an error node (used only on silentMode)
 * @constructor Error
 * @extends {Node}
 * @property {string} message
 * @property {number} line
 * @property {number|string} token
 * @property {string|array} expected
 */
var Error = Node.extends(function Error(message, token, line, expected, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.message = message;
  this.token = token;
  this.line = line;
  this.expected = expected;
});

module.exports = Error;

},{"./node":56}],32:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require("./statement");
var KIND = "eval";

/**
 * Defines an eval statement
 * @constructor Eval
 * @extends {Statement}
 * @property {Node} source
 */
var Eval = Statement.extends(function Eval(source, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.source = source;
});

module.exports = Eval;

},{"./statement":73}],33:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require("./statement");
var KIND = "exit";

/**
 * Defines an exit / die call
 * @constructor Exit
 * @extends {Statement}
 * @property {Node|null} status
 * @property {Boolean} useDie
 */
var Exit = Statement.extends(function Exit(status, useDie, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.status = status;
  this.useDie = useDie;
});

module.exports = Exit;

},{"./statement":73}],34:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require("./node");
var KIND = "expression";

/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 * @constructor Expression
 * @extends {Node}
 */
var Expression = Node.extends(function Expression(kind, docs, location) {
  Node.apply(this, [kind || KIND, docs, location]);
});

module.exports = Expression;

},{"./node":56}],35:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "for";

/**
 * Defines a for iterator
 * @constructor For
 * @extends {Statement}
 * @property {Expression[]} init
 * @property {Expression[]} test
 * @property {Expression[]} increment
 * @property {Statement} body
 * @property {boolean} shortForm
 * @see http://php.net/manual/en/control-structures.for.php
 */
var For = Statement.extends(function For(init, test, increment, body, shortForm, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.init = init;
  this.test = test;
  this.increment = increment;
  this.shortForm = shortForm;
  this.body = body;
});

module.exports = For;

},{"./statement":73}],36:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "foreach";

/**
 * Defines a foreach iterator
 * @constructor Foreach
 * @extends {Statement}
 * @property {Expression} source
 * @property {Expression|null} key
 * @property {Expression} value
 * @property {Statement} body
 * @property {boolean} shortForm
 * @see http://php.net/manual/en/control-structures.foreach.php
 */
var Foreach = Statement.extends(function Foreach(source, key, value, body, shortForm, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.source = source;
  this.key = key;
  this.value = value;
  this.shortForm = shortForm;
  this.body = body;
});

module.exports = Foreach;

},{"./statement":73}],37:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require("./declaration");
var KIND = "function";

/**
 * Defines a classic function
 * @constructor Function
 * @extends {Declaration}
 * @property {Parameter[]} arguments
 * @property {Identifier} type
 * @property {boolean} byref
 * @property {boolean} nullable
 * @property {Block|null} body
 */
var fn = Declaration.extends(function _Function(name, args, byref, type, nullable, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.arguments = args;
  this.byref = byref;
  this.type = type;
  this.nullable = nullable;
  this.body = null;
});
module.exports = fn;

},{"./declaration":24}],38:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "global";

/**
 * Imports a variable from the global scope
 * @constructor Global
 * @extends {Statement}
 * @property {Variable[]} items
 */
var Global = Statement.extends(function Global(items, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.items = items;
});

module.exports = Global;

},{"./statement":73}],39:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "goto";

/**
 * Defines goto statement
 * @constructor Goto
 * @extends {Statement}
 * @property {String} label
 * @see {Label}
 */
var Goto = Statement.extends(function Goto(label, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.label = label;
});

module.exports = Goto;

},{"./statement":73}],40:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "halt";

/**
 * Halts the compiler execution
 * @constructor Halt
 * @extends {Statement}
 * @property {String} after - String after the halt statement
 * @see http://php.net/manual/en/function.halt-compiler.php
 */
var Halt = Statement.extends(function Halt(after, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.after = after;
});

module.exports = Halt;

},{"./statement":73}],41:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require("./node");
var KIND = "identifier";

/**
 * Defines an identifier node
 * @constructor Identifier
 * @extends {Node}
 * @property {string} name
 * @property {string} resolution
 */
var Identifier = Node.extends(function Identifier(name, isRelative, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  if (isRelative) {
    this.resolution = Identifier.RELATIVE_NAME;
  } else if (name.length === 1) {
    this.resolution = Identifier.UNQUALIFIED_NAME;
  } else if (name[0] === "") {
    this.resolution = Identifier.FULL_QUALIFIED_NAME;
  } else {
    this.resolution = Identifier.QUALIFIED_NAME;
  }
  this.name = name.join("\\");
});

/**
 * This is an identifier without a namespace separator, such as Foo
 * @constant {String} UNQUALIFIED_NAME
 */
Identifier.UNQUALIFIED_NAME = "uqn";
/**
 * This is an identifier with a namespace separator, such as Foo\Bar
 * @constant {String} QUALIFIED_NAME
 */
Identifier.QUALIFIED_NAME = "qn";
/**
 * This is an identifier with a namespace separator that begins with
 * a namespace separator, such as \Foo\Bar. The namespace \Foo is also
 * a fully qualified name.
 * @constant {String} FULL_QUALIFIED_NAME
 */
Identifier.FULL_QUALIFIED_NAME = "fqn";
/**
 * This is an identifier starting with namespace, such as namespace\Foo\Bar.
 * @constant {String} RELATIVE_NAME
 */
Identifier.RELATIVE_NAME = "rn";

module.exports = Identifier;

},{"./node":56}],42:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "if";

/**
 * Defines a if statement
 * @constructor If
 * @extends {Statement}
 * @property {Expression} test
 * @property {Block} body
 * @property {Block|If|null} alternate
 * @property {boolean} shortForm
 */
var If = Statement.extends(function If(test, body, alternate, shortForm, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
  this.alternate = alternate;
  this.shortForm = shortForm;
});

module.exports = If;

},{"./statement":73}],43:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require("./statement");
var KIND = "include";

/**
 * Defines system include call
 * @constructor Include
 * @extends {Statement}
 * @property {Node} target
 * @property {boolean} once
 * @property {boolean} require
 */
var Include = Statement.extends(function Include(once, require, target, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.once = once;
  this.require = require;
  this.target = target;
});

module.exports = Include;

},{"./statement":73}],44:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require("./literal");
var KIND = "inline";

/**
 * Defines inline html output (treated as echo output)
 * @constructor Inline
 * @extends {Literal}
 */
var Inline = Literal.extends(function Inline(value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
});

module.exports = Inline;

},{"./literal":49}],45:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require("./declaration");
var KIND = "interface";

/**
 * An interface definition
 * @constructor Interface
 * @extends {Declaration}
 * @property {Identifier[]} extends
 * @property {Declaration[]} body
 */
var Interface = Declaration.extends(function Interface(name, ext, body, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.extends = ext;
  this.body = body;
});

module.exports = Interface;

},{"./declaration":24}],46:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require("./sys");
var KIND = "isset";

/**
 * Defines an isset call
 * @constructor Isset
 * @extends {Sys}
 */
var Isset = Sys.extends(function Isset(args, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
});

module.exports = Isset;

},{"./sys":78}],47:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Node = require("./node");
var KIND = "label";

/**
 * A label statement (referenced by goto)
 * @constructor Label
 * @extends {Node}
 * @property {String} name
 */
var Label = Node.extends(function Label(name, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.name = name;
});

module.exports = Label;

},{"./node":56}],48:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require("./sys");
var KIND = "list";

/**
 * Defines list assignment
 * @constructor List
 * @extends {Sys}
 */
var List = Sys.extends(function List(args, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
});

module.exports = List;

},{"./sys":78}],49:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Expr = require("./expression");
var KIND = "literal";

/**
 * Defines an array structure
 * @constructor Literal
 * @extends {Expression}
 * @property {string} raw
 * @property {Node|string|number|boolean|null} value
 */
var Literal = Expr.extends(function Literal(kind, value, raw, docs, location) {
  Expr.apply(this, [kind || KIND, docs, location]);
  this.value = value;
  if (raw) {
    this.raw = raw;
  }
});

module.exports = Literal;

},{"./expression":34}],50:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * Defines the location of the node (with it's source contents as string)
 * @constructor Location
 * @property {String|null} source
 * @property {Position} start
 * @property {Position} end
 */
var Location = function Location(source, start, end) {
  this.source = source;
  this.start = start;
  this.end = end;
};

module.exports = Location;

},{}],51:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Expr = require("./expression");
var KIND = "lookup";

/**
 * Lookup on an offset in the specified object
 * @constructor Lookup
 * @extends {Expression}
 * @property {Expression} what
 * @property {Expression} offset
 */
var Lookup = Expr.extends(function Lookup(kind, what, offset, docs, location) {
  Expr.apply(this, [kind || KIND, docs, location]);
  this.what = what;
  this.offset = offset;
});

module.exports = Lookup;

},{"./expression":34}],52:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require("./literal");
var KIND = "magic";

/**
 * Defines magic constant
 * @constructor Magic
 * @extends {Literal}
 */
var Magic = Literal.extends(function Magic(value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
});

module.exports = Magic;

},{"./literal":49}],53:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var fn = require("./function");
var KIND = "method";

/**
 * Defines a class/interface/trait method
 * @constructor Method
 * @extends {Function}
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 * @property {boolean} isStatic
 * @property {string} visibility
 */
var Method = fn.extends(function Method() {
  fn.apply(this, arguments);
  this.kind = KIND;
});

module.exports = Method;

},{"./function":37}],54:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Block = require("./block");
var KIND = "namespace";

/**
 * The main program node
 * @constructor Namespace
 * @extends {Block}
 * @property {String} name
 * @property {Boolean} withBrackets
 */
var Namespace = Block.extends(function Namespace(name, children, withBrackets, docs, location) {
  Block.apply(this, [KIND, children, docs, location]);
  this.name = name;
  this.withBrackets = withBrackets || false;
});

module.exports = Namespace;

},{"./block":7}],55:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "new";

/**
 * Creates a new instance of the specified class
 * @constructor New
 * @extends {Statement}
 * @property {Identifier|Variable|Class} what
 * @property {Arguments[]} arguments
 */
var New = Statement.extends(function New(what, args, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.what = what;
  this.arguments = args;
});

module.exports = New;

},{"./statement":73}],56:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * A generic AST node
 * @constructor Node
 * @property {Location|null} loc
 * @property {Comment[]} leadingComments
 * @property {Comment[]?} trailingComments
 * @property {String} kind
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
 * Helper for extending the Node class
 * @param {Function} constructor
 * @return {Function}
 */
Node.extends = function (constructor) {
  constructor.prototype = Object.create(this.prototype);
  constructor.extends = this.extends;
  constructor.prototype.constructor = constructor;
  return constructor;
};

module.exports = Node;

},{}],57:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require("./literal");
var KIND = "nowdoc";

/**
 * Defines a nowdoc string
 * @constructor String
 * @extends {Literal}
 * @property {String} label
 * @property {String} raw
 * @property {Boolean} quote
 */
var Nowdoc = Literal.extends(function Nowdoc(value, raw, label, quote, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
  this.label = label;
  this.quote = quote;
});

module.exports = Nowdoc;

},{"./literal":49}],58:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require("./literal");
var KIND = "number";

/**
 * Defines a numeric value
 * @constructor Number
 * @extends {Literal}
 */
var _Number = Literal.extends(function Number(value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
});

module.exports = _Number;

},{"./literal":49}],59:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Lookup = require("./lookup");
var KIND = "offsetlookup";

/**
 * Lookup on an offset in an array
 * @constructor OffsetLookup
 * @extends {Lookup}
 */
var OffsetLookup = Lookup.extends(function OffsetLookup(what, offset, docs, location) {
  Lookup.apply(this, [KIND, what, offset, docs, location]);
});

module.exports = OffsetLookup;

},{"./lookup":51}],60:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Expr = require("./expression");
var KIND = "operation";

/**
 * Defines binary operations
 * @constructor Operation
 * @extends {Expression}
 */
var Operation = Expr.extends(function Operation(kind, docs, location) {
  Expr.apply(this, [kind || KIND, docs, location]);
});

module.exports = Operation;

},{"./expression":34}],61:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require("./declaration");
var KIND = "parameter";

/**
 * Defines a function parameter
 * @constructor Parameter
 * @extends {Declaration}
 * @property {Identifier|null} type
 * @property {Node|null} value
 * @property {boolean} byref
 * @property {boolean} variadic
 * @property {boolean} nullable
 */
var Parameter = Declaration.extends(function Parameter(name, type, value, isRef, isVariadic, nullable, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.value = value;
  this.type = type;
  this.byref = isRef;
  this.variadic = isVariadic;
  this.nullable = nullable;
});

module.exports = Parameter;

},{"./declaration":24}],62:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Operation = require("./operation");
var KIND = "parenthesis";

/**
 * Parenthesis encapsulation `(... expr ...)`
 * @constructor Parenthesis
 * @extends {Operation}
 * @property {Expression} inner
 */
var Parenthesis = Operation.extends(function Parenthesis(inner, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.inner = inner;
});

module.exports = Parenthesis;

},{"./operation":60}],63:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * Each Position object consists of a line number (1-indexed) and a column number (0-indexed):
 * @constructor Position
 * @property {Number} line
 * @property {Number} column
 * @property {Number} offset
 */
var Position = function Position(line, column, offset) {
  this.line = line;
  this.column = column;
  this.offset = offset;
};

module.exports = Position;

},{}],64:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Operation = require("./operation");
var KIND = "post";

/**
 * Defines a post operation `$i++` or `$i--`
 * @constructor Post
 * @extends {Operation}
 * @property {String} type
 * @property {Variable} what
 */
var Post = Operation.extends(function Post(type, what, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.what = what;
});

module.exports = Post;

},{"./operation":60}],65:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Operation = require("./operation");
var KIND = "pre";

/**
 * Defines a pre operation `++$i` or `--$i`
 * @constructor Pre
 * @extends {Operation}
 * @property {String} type
 * @property {Variable} what
 */
var Pre = Operation.extends(function Pre(type, what, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.what = what;
});

module.exports = Pre;

},{"./operation":60}],66:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require("./sys");
var KIND = "print";

/**
 * Outputs
 * @constructor Print
 * @extends {Sys}
 */
var Print = Sys.extends(function Print(args, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
});

module.exports = Print;

},{"./sys":78}],67:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Block = require("./block");
var KIND = "program";

/**
 * The main program node
 * @constructor Program
 * @extends {Block}
 * @property {Error[]} errors
 * @property {Doc[]?} comments
 * @property {String[]?} tokens
 */
var Program = Block.extends(function Program(children, errors, comments, tokens, docs, location) {
  Block.apply(this, [KIND, children, docs, location]);
  this.errors = errors;
  if (comments) {
    this.comments = comments;
  }
  if (tokens) {
    this.tokens = tokens;
  }
});

module.exports = Program;

},{"./block":7}],68:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require("./declaration");
var KIND = "property";

/**
 * Defines a class property
 * @constructor Property
 * @extends {Declaration}
 * @property {boolean} isFinal
 * @property {boolean} isStatic
 * @property {string} visibility
 * @property {Node|null} value
 */
var Property = Declaration.extends(function Property(name, value, flags, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.value = value;
  this.parseFlags(flags);
});

module.exports = Property;

},{"./declaration":24}],69:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Lookup = require("./lookup");
var KIND = "propertylookup";

/**
 * Lookup to an object property
 * @constructor PropertyLookup
 * @extends {Lookup}
 */
var PropertyLookup = Lookup.extends(function PropertyLookup(what, offset, docs, location) {
  Lookup.apply(this, [KIND, what, offset, docs, location]);
});

module.exports = PropertyLookup;

},{"./lookup":51}],70:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "retif";

/**
 * Defines a short if statement that returns a value
 * @constructor RetIf
 * @extends {Statement}
 * @property {Expression} test
 * @property {Expression} trueExpr
 * @property {Expression} falseExpr
 */
var RetIf = Statement.extends(function RetIf(test, trueExpr, falseExpr, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.trueExpr = trueExpr;
  this.falseExpr = falseExpr;
});

module.exports = RetIf;

},{"./statement":73}],71:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Node = require("./node");
var KIND = "return";

/**
 * A continue statement
 * @constructor Return
 * @extends {Node}
 * @property {Expression|null} expr
 */
var Return = Node.extends(function Return(expr, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.expr = expr;
});

module.exports = Return;

},{"./node":56}],72:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "silent";

/**
 * Avoids to show/log warnings & notices from the inner expression
 * @constructor Silent
 * @extends {Statement}
 * @property {Expression} expr
 */
var Silent = Statement.extends(function Silent(expr, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.expr = expr;
});

module.exports = Silent;

},{"./statement":73}],73:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require("./node");
var KIND = "statement";

/**
 * Any statement.
 * @constructor Statement
 * @extends {Node}
 */
var Statement = Node.extends(function Statement(kind, docs, location) {
  Node.apply(this, [kind || KIND, docs, location]);
});

module.exports = Statement;

},{"./node":56}],74:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "static";

/**
 * Declares a static variable into the current scope
 * @constructor Static
 * @extends {Statement}
 * @property {Variable[]|Assign[]} items
 */
var Static = Statement.extends(function Static(items, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.items = items;
});

module.exports = Static;

},{"./statement":73}],75:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Lookup = require("./lookup");
var KIND = "staticlookup";

/**
 * Lookup to a static property
 * @constructor StaticLookup
 * @extends {Lookup}
 */
var StaticLookup = Lookup.extends(function StaticLookup(what, offset, docs, location) {
  Lookup.apply(this, [KIND, what, offset, docs, location]);
});

module.exports = StaticLookup;

},{"./lookup":51}],76:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require("./literal");
var KIND = "string";

/**
 * Defines a string (simple ou double quoted) - chars are already escaped
 * @constructor String
 * @extends {Literal}
 * @property {boolean} isDoubleQuote
 * @see {Encapsed}
 */
var String = Literal.extends(function String(isDoubleQuote, value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
  this.isDoubleQuote = isDoubleQuote;
});

module.exports = String;

},{"./literal":49}],77:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "switch";

/**
 * Defines a switch statement
 * @constructor Switch
 * @extends {Statement}
 * @property {Expression} test
 * @property {Block} body
 * @property {boolean} shortForm
 */
var Switch = Statement.extends(function Switch(test, body, shortForm, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
  this.shortForm = shortForm;
});

module.exports = Switch;

},{"./statement":73}],78:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require("./statement");
var KIND = "sys";

/**
 * Defines system based call
 * @constructor Sys
 * @extends {Statement}
 * @property {Node[]} arguments
 */
var Sys = Statement.extends(function Sys(kind, args, docs, location) {
  Statement.apply(this, [kind || KIND, docs, location]);
  this.arguments = args;
});

module.exports = Sys;

},{"./statement":73}],79:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "throw";

/**
 * Defines a throw statement
 * @constructor Throw
 * @extends {Statement}
 * @property {Expression} what
 */
var Throw = Statement.extends(function Throw(what, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.what = what;
});

module.exports = Throw;

},{"./statement":73}],80:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require("./declaration");
var KIND = "trait";

/**
 * A trait definition
 * @constructor Trait
 * @extends {Declaration}
 * @property {Identifier|null} extends
 * @property {Identifier[]} implements
 * @property {Declaration[]} body
 */
var Trait = Declaration.extends(function Trait(name, ext, impl, body, docs, location) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.extends = ext;
  this.implements = impl;
  this.body = body;
});

module.exports = Trait;

},{"./declaration":24}],81:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require("./node");
var KIND = "traitalias";

var IS_UNDEFINED = "";
var IS_PUBLIC = "public";
var IS_PROTECTED = "protected";
var IS_PRIVATE = "private";

/**
 * Defines a trait alias
 * @constructor TraitAlias
 * @extends {Node}
 * @property {Identifier|null} trait
 * @property {string} method
 * @property {string|null} as
 * @property {string|null} visibility
 */
var TraitAlias = Node.extends(function TraitAlias(trait, method, as, flags, docs, location) {
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

module.exports = TraitAlias;

},{"./node":56}],82:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require("./node");
var KIND = "traitprecedence";

/**
 * Defines a trait alias
 * @constructor TraitPrecedence
 * @extends {Node}
 * @property {Identifier|null} trait
 * @property {string} method
 * @property {Identifier[]} instead
 */
var TraitPrecedence = Node.extends(function TraitPrecedence(trait, method, instead, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.trait = trait;
  this.method = method;
  this.instead = instead;
});

module.exports = TraitPrecedence;

},{"./node":56}],83:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require("./node");
var KIND = "traituse";

/**
 * Defines a trait usage
 * @constructor TraitUse
 * @extends {Node}
 * @property {Identifier[]} traits
 * @property {Node[]|null} adaptations
 */
var TraitUse = Node.extends(function TraitUse(traits, adaptations, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.traits = traits;
  this.adaptations = adaptations;
});

module.exports = TraitUse;

},{"./node":56}],84:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "try";

/**
 * Defines a try statement
 * @constructor Try
 * @extends {Statement}
 * @property {Block} body
 * @property {Catch[]} catches
 * @property {Block} allways
 */
var Try = Statement.extends(function Try(body, catches, always, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.body = body;
  this.catches = catches;
  this.always = always;
});

module.exports = Try;

},{"./statement":73}],85:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Operation = require("./operation");
var KIND = "unary";

/**
 * Unary operations
 * @constructor Unary
 * @extends {Operation}
 * @property {String} type
 * @property {Expression} what
 */
var Unary = Operation.extends(function Unary(type, what, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.what = what;
});

module.exports = Unary;

},{"./operation":60}],86:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require("./sys");
var KIND = "unset";

/**
 * Deletes references to a list of variables
 * @constructor Unset
 * @extends {Sys}
 */
var Unset = Sys.extends(function Unset(args, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
});

module.exports = Unset;

},{"./sys":78}],87:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "usegroup";

/**
 * Defines a use statement (with a list of use items)
 * @constructor UseGroup
 * @extends {Statement}
 * @property {String|null} name
 * @property {String|null} type - Possible value : function, const
 * @property {UseItem[]} item
 * @see {Namespace}
 * @see http://php.net/manual/en/language.namespaces.importing.php
 */
var UseGroup = Statement.extends(function UseGroup(name, type, items, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.name = name;
  this.type = type;
  this.items = items;
});

module.exports = UseGroup;

},{"./statement":73}],88:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "useitem";

/**
 * Defines a use statement (from namespace)
 * @constructor UseItem
 * @extends {Statement}
 * @property {String} name
 * @property {String|null} type - Possible value : function, const
 * @property {String|null} alias
 * @see {Namespace}
 * @see http://php.net/manual/en/language.namespaces.importing.php
 */
var UseItem = Statement.extends(function UseItem(name, alias, type, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.name = name;
  this.alias = alias;
  this.type = type;
});

/**
 * Importing a constant
 * @constant {String} TYPE_CONST
 */
UseItem.TYPE_CONST = "const";
/**
 * Importing a function
 * @constant {String} TYPE_FUNC
 */
UseItem.TYPE_FUNCTION = "function";

module.exports = UseItem;

},{"./statement":73}],89:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Expr = require("./expression");
var KIND = "variable";

/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 * @constructor Variable
 * @extends {Expression}
 * @example
 * // PHP code :
 * &$foo
 * // AST output
 * {
 *  "kind": "variable",
 *  "name": "foo",
 *  "byref": true,
 *  "curly": false
 * }
 * @property {String|Node} name The variable name (can be a complex expression when the name is resolved dynamically)
 * @property {boolean} byref Indicate if the variable reference is used, ex `&$foo`
 * @property {boolean} curly Indicate if the name is defined between curlies, ex `${foo}`
 */
var Variable = Expr.extends(function Variable(name, byref, curly, docs, location) {
  Expr.apply(this, [KIND, docs, location]);
  this.name = name;
  this.byref = byref || false;
  this.curly = curly || false;
});

module.exports = Variable;

},{"./expression":34}],90:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Expr = require("./expression");
var KIND = "variadic";

/**
 * Introduce a list of items into the arguments of the call
 * @constructor variadic
 * @extends {Expression}
 * @property {Array|Expression} what
 * @see https://wiki.php.net/rfc/argument_unpacking
 */
var variadic = Expr.extends(function variadic(what, docs, location) {
  Expr.apply(this, [KIND, docs, location]);
  this.what = what;
});

module.exports = variadic;

},{"./expression":34}],91:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require("./statement");
var KIND = "while";

/**
 * Defines a while statement
 * @constructor While
 * @extends {Statement}
 * @property {Expression} test
 * @property {Statement} body
 * @property {boolean} shortForm
 */
var While = Statement.extends(function While(test, body, shortForm, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
  this.shortForm = shortForm;
});

module.exports = While;

},{"./statement":73}],92:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Expression = require("./expression");
var KIND = "yield";

/**
 * Defines a yield generator statement
 * @constructor Yield
 * @extends {Expression}
 * @property {Expression|Null} value
 * @property {Expression|Null} key
 * @see http://php.net/manual/en/language.generators.syntax.php
 */
var Yield = Expression.extends(function Yield(value, key, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.value = value;
  this.key = key;
});

module.exports = Yield;

},{"./expression":34}],93:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Expression = require("./expression");
var KIND = "yieldfrom";

/**
 * Defines a yield from generator statement
 * @constructor YieldFrom
 * @extends {Expression}
 * @property {Expression} value
 * @see http://php.net/manual/en/language.generators.syntax.php
 */
var YieldFrom = Expression.extends(function YieldFrom(value, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.value = value;
});

module.exports = YieldFrom;

},{"./expression":34}],94:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
/**
 * This is the php lexer. It will tokenize the string for helping the
 * parser to build the AST from its grammar.
 *
 * @public @constructor {Lexer}
 * @property {Integer} EOF
 * @property {Boolean} all_tokens defines if all tokens must be retrieved (used by token_get_all only)
 * @property {Boolean} comment_tokens extracts comments tokens
 * @property {Boolean} mode_eval enables the evald mode (ignore opening tags)
 * @property {Boolean} asp_tags disables by default asp tags mode
 * @property {Boolean} short_tags enables by default short tags mode
 * @property {Object} keywords List of php keyword
 * @property {Object} castKeywords List of php keywords for type casting
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var lexer = function lexer(engine) {
  this.engine = engine;
  this.tok = this.engine.tokens.names;
  this.EOF = 1;
  this.debug = false;
  this.all_tokens = true;
  this.comment_tokens = false;
  this.mode_eval = false;
  this.asp_tags = false;
  this.short_tags = true;
  this.php7 = true;
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
    function: this.tok.T_FUNCTION,
    const: this.tok.T_CONST,
    return: this.tok.T_RETURN,
    try: this.tok.T_TRY,
    catch: this.tok.T_CATCH,
    finally: this.tok.T_FINALLY,
    throw: this.tok.T_THROW,
    if: this.tok.T_IF,
    elseif: this.tok.T_ELSEIF,
    endif: this.tok.T_ENDIF,
    else: this.tok.T_ELSE,
    while: this.tok.T_WHILE,
    endwhile: this.tok.T_ENDWHILE,
    do: this.tok.T_DO,
    for: this.tok.T_FOR,
    endfor: this.tok.T_ENDFOR,
    foreach: this.tok.T_FOREACH,
    endforeach: this.tok.T_ENDFOREACH,
    declare: this.tok.T_DECLARE,
    enddeclare: this.tok.T_ENDDECLARE,
    instanceof: this.tok.T_INSTANCEOF,
    as: this.tok.T_AS,
    switch: this.tok.T_SWITCH,
    endswitch: this.tok.T_ENDSWITCH,
    case: this.tok.T_CASE,
    default: this.tok.T_DEFAULT,
    break: this.tok.T_BREAK,
    continue: this.tok.T_CONTINUE,
    goto: this.tok.T_GOTO,
    echo: this.tok.T_ECHO,
    print: this.tok.T_PRINT,
    class: this.tok.T_CLASS,
    interface: this.tok.T_INTERFACE,
    trait: this.tok.T_TRAIT,
    extends: this.tok.T_EXTENDS,
    implements: this.tok.T_IMPLEMENTS,
    new: this.tok.T_NEW,
    clone: this.tok.T_CLONE,
    var: this.tok.T_VAR,
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
    static: this.tok.T_STATIC,
    abstract: this.tok.T_ABSTRACT,
    final: this.tok.T_FINAL,
    private: this.tok.T_PRIVATE,
    protected: this.tok.T_PROTECTED,
    public: this.tok.T_PUBLIC,
    unset: this.tok.T_UNSET,
    list: this.tok.T_LIST,
    array: this.tok.T_ARRAY,
    callable: this.tok.T_CALLABLE,
    or: this.tok.T_LOGICAL_OR,
    and: this.tok.T_LOGICAL_AND,
    xor: this.tok.T_LOGICAL_XOR
  };
  this.castKeywords = {
    int: this.tok.T_INT_CAST,
    integer: this.tok.T_INT_CAST,
    real: this.tok.T_DOUBLE_CAST,
    double: this.tok.T_DOUBLE_CAST,
    float: this.tok.T_DOUBLE_CAST,
    string: this.tok.T_STRING_CAST,
    binary: this.tok.T_STRING_CAST,
    array: this.tok.T_ARRAY_CAST,
    object: this.tok.T_OBJECT_CAST,
    bool: this.tok.T_BOOL_CAST,
    boolean: this.tok.T_BOOL_CAST,
    unset: this.tok.T_UNSET_CAST
  };
};

/**
 * Initialize the lexer with the specified input
 */
lexer.prototype.setInput = function (input) {
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
  this.done = this.offset >= this.size;
  if (!this.all_tokens && this.mode_eval) {
    this.conditionStack = ["INITIAL"];
    this.begin("ST_IN_SCRIPTING");
  } else {
    this.conditionStack = [];
    this.begin("INITIAL");
  }
  return this;
};

/**
 * consumes and returns one char from the input
 */
lexer.prototype.input = function () {
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
 */
lexer.prototype.unput = function (size) {
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
      this.yytext = this.yytext.substring(0, this.yytext.length - size);
      // re-calculate position
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

// check if the text matches
lexer.prototype.tryMatch = function (text) {
  return text === this.ahead(text.length);
};

// check if the text matches
lexer.prototype.tryMatchCaseless = function (text) {
  return text === this.ahead(text.length).toLowerCase();
};

// look ahead
lexer.prototype.ahead = function (size) {
  var text = this._input.substring(this.offset, this.offset + size);
  if (text[text.length - 1] === "\r" && this._input[this.offset + size + 1] === "\n") {
    text += "\n";
  }
  return text;
};

// consume the specified size
lexer.prototype.consume = function (size) {
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
 */
lexer.prototype.getState = function () {
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
    }
  };
};

/**
 * Sets the current lexer state
 */
lexer.prototype.setState = function (state) {
  this.yytext = state.yytext;
  this.offset = state.offset;
  this.yylineno = state.yylineno;
  this.yyprevcol = state.yyprevcol;
  this.yylloc = state.yylloc;
  return this;
};

// prepend next token
lexer.prototype.appendToken = function (value, ahead) {
  this.tokens.push([value, ahead]);
  return this;
};

// return next match that has a token
lexer.prototype.lex = function () {
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
      return ";"; /* implicit ; */
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

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
lexer.prototype.begin = function (condition) {
  this.conditionStack.push(condition);
  this.curCondition = condition;
  this.stateCb = this["match" + condition];
  if (typeof this.stateCb !== "function") {
    throw new Error('Undefined condition state "' + condition + '"');
  }
  return this;
};

// pop the previously active lexer condition state off the condition stack
lexer.prototype.popState = function () {
  var n = this.conditionStack.length - 1;
  var condition = n > 0 ? this.conditionStack.pop() : this.conditionStack[0];
  this.curCondition = this.conditionStack[this.conditionStack.length - 1];
  this.stateCb = this["match" + this.curCondition];
  if (typeof this.stateCb !== "function") {
    throw new Error('Undefined condition state "' + this.curCondition + '"');
  }
  return condition;
};

// return next match in input
lexer.prototype.next = function () {
  var token = void 0;
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
    var e = new Error(tName + "\tfrom " + this.yylloc.first_line + "," + this.yylloc.first_column + "\t - to " + this.yylloc.last_line + "," + this.yylloc.last_column + '\t"' + this.yytext + '"');
    // eslint-disable-next-line no-console
    console.error(e.stack);
  }
  return token;
};

// extends the lexer with states
[require("./lexer/comments.js"), require("./lexer/initial.js"), require("./lexer/numbers.js"), require("./lexer/property.js"), require("./lexer/scripting.js"), require("./lexer/strings.js"), require("./lexer/tokens.js"), require("./lexer/utils.js")].forEach(function (ext) {
  for (var k in ext) {
    lexer.prototype[k] = ext[k];
  }
});

module.exports = lexer;

},{"./lexer/comments.js":95,"./lexer/initial.js":96,"./lexer/numbers.js":97,"./lexer/property.js":98,"./lexer/scripting.js":99,"./lexer/strings.js":100,"./lexer/tokens.js":101,"./lexer/utils.js":102}],95:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

"use strict";

module.exports = {
  /**
   * Reads a single line comment
   * @see
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
  /**
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

},{}],96:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
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

},{}],97:[function(require,module,exports){
(function (process){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

"use strict";

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
    var hasPoint = this.yytext[0] === ".";
    if (ch === "0") {
      ch = this.input();
      // check if hexa
      if (ch === "x" || ch === "X") {
        ch = this.input();
        if (this.is_HEX()) {
          return this.consume_HNUM();
        } else {
          this.unput(ch ? 2 : 1);
        }
      } else if (ch === "b" || ch === "B") {
        ch = this.input();
        if (ch === "0" || ch === "1") {
          return this.consume_BNUM();
        } else {
          this.unput(ch ? 2 : 1);
        }
      } else if (!this.is_NUM()) {
        if (ch) this.unput(1);
      }
    }

    while (this.offset < this.size) {
      ch = this.input();
      if (!this.is_NUM()) {
        if (ch === "." && !hasPoint) {
          hasPoint = true;
        } else if (ch === "e" || ch === "E") {
          ch = this.input();
          if (ch === "+" || ch === "-") {
            ch = this.input();
            if (this.is_NUM()) {
              this.consume_LNUM();
              return this.tok.T_DNUMBER;
            } else {
              this.unput(ch ? 3 : 2);
              break;
            }
          } else if (this.is_NUM()) {
            this.consume_LNUM();
            return this.tok.T_DNUMBER;
          } else {
            this.unput(ch ? 2 : 1);
            break;
          }
        } else {
          if (ch) this.unput(1);
          break;
        }
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
    var ch = void 0;
    while (this.offset < this.size) {
      ch = this.input();
      if (ch !== "0" && ch !== "1") {
        if (ch) this.unput(1);
        break;
      }
    }
    return this.tok.T_LNUMBER;
  }
};

}).call(this,require('_process'))
},{"_process":2}],98:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
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
    }
    // https://github.com/php/php-src/blob/master/Zend/zend_language_scanner.l#L1306
    this.popState();
    if (ch) this.unput(1);
    return false;
  },
  matchST_LOOKING_FOR_VARNAME: function matchST_LOOKING_FOR_VARNAME() {
    var ch = this.input();

    // SHIFT STATE
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
    }
    // stops looking for a varname and starts the scripting mode
    return false;
  },
  matchST_VAR_OFFSET: function matchST_VAR_OFFSET() {
    var ch = this.input();
    if (this.is_NUM()) {
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

},{}],99:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
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
          if (this.is_NUM()) {
            return this.consume_NUM();
          } else {
            if (ch) this.unput(1);
          }
        }
        if (this.is_NUM()) {
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

},{}],100:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  T_CONSTANT_ENCAPSED_STRING: function T_CONSTANT_ENCAPSED_STRING() {
    var ch = void 0;
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
      this.offset += 3;

      // optional tabs / spaces
      if (this.is_TABSPACE()) {
        while (this.offset < this.size) {
          this.offset++;
          if (!this.is_TABSPACE()) {
            break;
          }
        }
      }

      // optional quotes
      var tChar = this._input[this.offset - 1];
      if (tChar === "'" || tChar === '"') {
        this.offset++;
      } else {
        tChar = null;
      }

      // required label
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
          if (tChar) this.offset++;
          // require newline
          if (this._input[this.offset - 1] === "\r" || this._input[this.offset - 1] === "\n") {
            // go go go
            this.heredoc_label = yylabel;
            yyoffset = this.offset - revert;
            this.offset = revert;
            this.consume(yyoffset);
            if (tChar === "'") {
              this.begin("ST_NOWDOC");
            } else {
              this.begin("ST_HEREDOC");
            }
            return this.tok.T_START_HEREDOC;
          }
        }
      }
    }
    this.offset = revert;
    return false;
  },
  ST_DOUBLE_QUOTES: function ST_DOUBLE_QUOTES() {
    var ch = void 0;
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
  isDOC_MATCH: function isDOC_MATCH() {
    // @fixme : check if out of text limits
    if (this._input.substring(this.offset - 1, this.offset - 1 + this.heredoc_label.length) === this.heredoc_label) {
      var ch = this._input[this.offset - 1 + this.heredoc_label.length];
      if (ch === "\n" || ch === "\r" || ch === ";") {
        return true;
      }
    }
    return false;
  },

  matchST_NOWDOC: function matchST_NOWDOC() {
    /** edge case : empty now doc **/
    if (this.isDOC_MATCH()) {
      // @fixme : never reached (may be caused by quotes)
      this.consume(this.heredoc_label.length);
      this.popState();
      return this.tok.T_END_HEREDOC;
    }
    /** SCANNING CONTENTS **/
    var ch = this._input[this.offset - 1];
    while (this.offset < this.size) {
      if (ch === "\n" || ch === "\r") {
        ch = this.input();
        if (this.isDOC_MATCH()) {
          this.unput(1).popState();
          this.appendToken(this.tok.T_END_HEREDOC, this.heredoc_label.length);
          return this.tok.T_ENCAPSED_AND_WHITESPACE;
        }
      } else {
        ch = this.input();
      }
    }
    // too bad ! reached end of document (will get a parse error)
    return this.tok.T_ENCAPSED_AND_WHITESPACE;
  },

  matchST_HEREDOC: function matchST_HEREDOC() {
    /** edge case : empty here doc **/
    var ch = this.input();
    if (this.isDOC_MATCH()) {
      this.consume(this.heredoc_label.length - 1);
      this.popState();
      return this.tok.T_END_HEREDOC;
    }
    /** SCANNING CONTENTS **/
    while (this.offset < this.size) {
      if (ch === "\\") {
        ch = this.input(); // ignore next
        if (ch !== "\n" && ch !== "\r") {
          ch = this.input();
        }
      }

      if (ch === "\n" || ch === "\r") {
        ch = this.input();
        if (this.isDOC_MATCH()) {
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
          }
          //console.log(this.yytext);
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
    }

    // too bad ! reached end of document (will get a parse error)
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
    }

    // any char
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
    }

    // any char
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

},{}],101:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  T_STRING: function T_STRING() {
    var token = this.yytext.toLowerCase();
    var id = this.keywords[token];
    if (typeof id !== "number") {
      if (token === "yield") {
        if (this.php7 && this.tryMatch(" from")) {
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
      }
      // revert the check
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
      if (this.php7 && this._input[this.offset] === "?") {
        this.input();
        return this.tok.T_COALESCE;
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
        if (this.php7 && this._input[this.offset] === ">") {
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

},{}],102:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var tokens = ";:,.\\[]()|^&+-/*=%!~$<>?@";

module.exports = {
  // check if the char can be a numeric
  is_NUM: function is_NUM() {
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
    var ch = this._input.charCodeAt(this.offset - 1);
    return ch > 96 && ch < 123 || ch > 64 && ch < 91 || ch === 95 || ch > 126;
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
    var ch = this._input.charCodeAt(this.offset - 1);
    return ch > 47 && ch < 58 || ch > 64 && ch < 71 || ch > 96 && ch < 103;
  }
};

},{}],103:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * @private check if argument is a number
 */
function isNumber(n) {
  return n != "." && n != "," && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * The PHP Parser class that build the AST tree from the lexer
 * @constructor {Parser}
 * @property {Lexer} lexer - current lexer instance
 * @property {AST} ast - the AST factory instance
 * @property {Integer|String} token - current token
 * @property {Boolean} extractDoc - should extract documentation as AST node
 * @property {Boolean} extractTokens - should extract each token
 * @property {Boolean} suppressErrors - should ignore parsing errors and continue
 * @property {Boolean} debug - should output debug informations
 */
var parser = function parser(lexer, ast) {
  this.lexer = lexer;
  this.ast = ast;
  this.tok = lexer.tok;
  this.EOF = lexer.EOF;
  this.token = null;
  this.prev = null;
  this.debug = false;
  this.php7 = true;
  this.extractDoc = false;
  this.extractTokens = false;
  this.suppressErrors = false;
  var mapIt = function mapIt(item) {
    return [item, null];
  };
  this.entries = {
    IDENTIFIER: new Map([this.tok.T_ABSTRACT, this.tok.T_ARRAY, this.tok.T_AS, this.tok.T_BREAK, this.tok.T_CALLABLE, this.tok.T_CASE, this.tok.T_CATCH, this.tok.T_CLASS, this.tok.T_CLASS_C, this.tok.T_CLONE, this.tok.T_CONST, this.tok.T_CONTINUE, this.tok.T_DECLARE, this.tok.T_DEFAULT, this.tok.T_DIR, this.tok.T_DO, this.tok.T_ECHO, this.tok.T_ELSE, this.tok.T_ELSEIF, this.tok.T_EMPTY, this.tok.T_ENDDECLARE, this.tok.T_ENDFOR, this.tok.T_ENDFOREACH, this.tok.T_ENDIF, this.tok.T_ENDSWITCH, this.tok.T_ENDWHILE, this.tok.T_EVAL, this.tok.T_EXIT, this.tok.T_EXTENDS, this.tok.T_FILE, this.tok.T_FINAL, this.tok.T_FINALLY, this.tok.T_FUNC_C, this.tok.T_FOR, this.tok.T_FOREACH, this.tok.T_FUNCTION, this.tok.T_GLOBAL, this.tok.T_GOTO, this.tok.T_IF, this.tok.T_IMPLEMENTS, this.tok.T_INCLUDE, this.tok.T_INCLUDE_ONCE, this.tok.T_INSTANCEOF, this.tok.T_INSTEADOF, this.tok.T_INTERFACE, this.tok.T_ISSET, this.tok.T_LINE, this.tok.T_LIST, this.tok.T_LOGICAL_AND, this.tok.T_LOGICAL_OR, this.tok.T_LOGICAL_XOR, this.tok.T_METHOD_C, this.tok.T_NAMESPACE, this.tok.T_NEW, this.tok.T_NS_C, this.tok.T_PRINT, this.tok.T_PRIVATE, this.tok.T_PROTECTED, this.tok.T_PUBLIC, this.tok.T_REQUIRE, this.tok.T_REQUIRE_ONCE, this.tok.T_RETURN, this.tok.T_STATIC, this.tok.T_SWITCH, this.tok.T_THROW, this.tok.T_TRAIT, this.tok.T_TRY, this.tok.T_UNSET, this.tok.T_USE, this.tok.T_VAR, this.tok.T_WHILE, this.tok.T_YIELD].map(mapIt)),
    VARIABLE: new Map([this.tok.T_VARIABLE, "$", "&", this.tok.T_NS_SEPARATOR, this.tok.T_STRING, this.tok.T_NAMESPACE, this.tok.T_STATIC].map(mapIt)),
    SCALAR: new Map([this.tok.T_CONSTANT_ENCAPSED_STRING, this.tok.T_START_HEREDOC, this.tok.T_LNUMBER, this.tok.T_DNUMBER, this.tok.T_ARRAY, "[", this.tok.T_CLASS_C, this.tok.T_TRAIT_C, this.tok.T_FUNC_C, this.tok.T_METHOD_C, this.tok.T_LINE, this.tok.T_FILE, this.tok.T_DIR, this.tok.T_NS_C, '"', 'b"', 'B"', "-", this.tok.T_NS_SEPARATOR].map(mapIt)),
    T_MAGIC_CONST: new Map([this.tok.T_CLASS_C, this.tok.T_TRAIT_C, this.tok.T_FUNC_C, this.tok.T_METHOD_C, this.tok.T_LINE, this.tok.T_FILE, this.tok.T_DIR, this.tok.T_NS_C].map(mapIt)),
    T_MEMBER_FLAGS: new Map([this.tok.T_PUBLIC, this.tok.T_PRIVATE, this.tok.T_PROTECTED, this.tok.T_STATIC, this.tok.T_ABSTRACT, this.tok.T_FINAL].map(mapIt)),
    EOS: new Map([";", this.EOF, this.tok.T_INLINE_HTML].map(mapIt)),
    EXPR: new Map(["@", "-", "+", "!", "~", "(", "`", this.tok.T_LIST, this.tok.T_CLONE, this.tok.T_INC, this.tok.T_DEC, this.tok.T_NEW, this.tok.T_ISSET, this.tok.T_EMPTY, this.tok.T_INCLUDE, this.tok.T_INCLUDE_ONCE, this.tok.T_REQUIRE, this.tok.T_REQUIRE_ONCE, this.tok.T_EVAL, this.tok.T_INT_CAST, this.tok.T_DOUBLE_CAST, this.tok.T_STRING_CAST, this.tok.T_ARRAY_CAST, this.tok.T_OBJECT_CAST, this.tok.T_BOOL_CAST, this.tok.T_UNSET_CAST, this.tok.T_EXIT, this.tok.T_PRINT, this.tok.T_YIELD, this.tok.T_STATIC, this.tok.T_FUNCTION,
    // using VARIABLES :
    this.tok.T_VARIABLE, "$", this.tok.T_NS_SEPARATOR, this.tok.T_STRING,
    // using SCALAR :
    this.tok.T_STRING, // @see variable.js line 45 > conflict with variable = shift/reduce :)
    this.tok.T_CONSTANT_ENCAPSED_STRING, this.tok.T_START_HEREDOC, this.tok.T_LNUMBER, this.tok.T_DNUMBER, this.tok.T_ARRAY, "[", this.tok.T_CLASS_C, this.tok.T_TRAIT_C, this.tok.T_FUNC_C, this.tok.T_METHOD_C, this.tok.T_LINE, this.tok.T_FILE, this.tok.T_DIR, this.tok.T_NS_C].map(mapIt))
  };
};

/**
 * helper : gets a token name
 */
parser.prototype.getTokenName = function (token) {
  if (!isNumber(token)) {
    return "'" + token + "'";
  } else {
    if (token == this.EOF) return "the end of file (EOF)";
    return this.lexer.engine.tokens.values[token];
  }
};

/**
 * main entry point : converts a source code to AST
 */
parser.prototype.parse = function (code, filename) {
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
  this.lexer.setInput(code);
  this.lexer.all_tokens = this.extractTokens;
  this.lexer.comment_tokens = this.extractDoc;
  this.length = this.lexer._input.length;
  this.innerList = false;
  var program = this.ast.prepare("program", null, this);
  var childs = [];
  this.next();
  while (this.token != this.EOF) {
    var node = this.read_start();
    if (node !== null && node !== undefined) {
      if (Array.isArray(node)) {
        childs = childs.concat(node);
      } else {
        childs.push(node);
      }
    }
  }
  return program(childs, this._errors, this._docs, this._tokens);
};

/**
 * Raise an error
 */
parser.prototype.raiseError = function (message, msgExpect, expect, token) {
  message += " on line " + this.lexer.yylloc.first_line;
  if (!this.suppressErrors) {
    var err = new SyntaxError(message, this.filename, this.lexer.yylloc.first_line);
    err.lineNumber = this.lexer.yylloc.first_line;
    err.fileName = this.filename;
    err.columnNumber = this.lexer.yylloc.first_column;
    throw err;
  }
  // Error node :
  var node = this.ast.prepare("error", null, this)(message, token, this.lexer.yylloc.first_line, expect);
  this._errors.push(node);
  return node;
};

/**
 * handling errors
 */
parser.prototype.error = function (expect) {
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
 */
parser.prototype.node = function (name) {
  if (this.extractDoc) {
    if (this._docIndex < this._docs.length) {
      var docs = this._docs.slice(this._docIndex);
      this._docIndex = this._docs.length;
      return this.ast.prepare(name, docs, this);
    }
  }
  return this.ast.prepare(name, null, this);
};

/**
 * expects an end of statement or end of file
 * @return {boolean}
 */
parser.prototype.expectEndOfStatement = function () {
  if (this.token === ";") {
    this.next();
  } else if (this.token !== this.tok.T_INLINE_HTML && this.token !== this.EOF) {
    this.error(";");
    return false;
  }
  return true;
};

/** outputs some debug information on current token **/
var ignoreStack = ["parser.next"];
parser.prototype.showlog = function () {
  var stack = new Error().stack.split("\n");
  var line = void 0;
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
  }
  // eslint-disable-next-line no-console
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
 * @param {String|Number} token
 * @return {boolean}
 * @throws Error
 */
parser.prototype.expect = function (token) {
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
 * @return {String}
 */
parser.prototype.text = function () {
  return this.lexer.yytext;
};

/** consume the next token **/
parser.prototype.next = function () {
  // prepare the back command
  this.prev = [this.lexer.yylloc.last_line, this.lexer.yylloc.last_column, this.lexer.offset];

  // eating the token
  this.lex();

  // showing the debug
  if (this.debug) {
    this.showlog();
  }

  // handling comments
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
 */
parser.prototype.lex = function () {
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
 */
parser.prototype.is = function (type) {
  if (Array.isArray(type)) {
    return type.indexOf(this.token) !== -1;
  }
  return this.entries[type].has(this.token);
};

// extends the parser with syntax files
[require("./parser/array.js"), require("./parser/class.js"), require("./parser/comment.js"), require("./parser/expr.js"), require("./parser/function.js"), require("./parser/if.js"), require("./parser/loops.js"), require("./parser/main.js"), require("./parser/namespace.js"), require("./parser/scalar.js"), require("./parser/statement.js"), require("./parser/switch.js"), require("./parser/try.js"), require("./parser/utils.js"), require("./parser/variable.js")].forEach(function (ext) {
  for (var k in ext) {
    parser.prototype[k] = ext[k];
  }
});

module.exports = parser;

},{"./parser/array.js":104,"./parser/class.js":105,"./parser/comment.js":106,"./parser/expr.js":107,"./parser/function.js":108,"./parser/if.js":109,"./parser/loops.js":110,"./parser/main.js":111,"./parser/namespace.js":112,"./parser/scalar.js":113,"./parser/statement.js":114,"./parser/switch.js":115,"./parser/try.js":116,"./parser/utils.js":117,"./parser/variable.js":118}],104:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var ArrayExpr = "array";
var ArrayEntry = "entry";

module.exports = {
  /**
   * Parse an array
   * ```ebnf
   * array ::= T_ARRAY '(' array_pair_list ')' |
   *   '[' array_pair_list ']'
   * ```
   */
  read_array: function read_array() {
    var expect = null;
    var shortForm = false;
    var items = [];
    var result = this.node(ArrayExpr);

    if (this.token === this.tok.T_ARRAY) {
      this.next().expect("(");
      expect = ")";
    } else {
      shortForm = true;
      expect = "]";
    }

    if (this.next().token != expect) {
      while (this.token != this.EOF) {
        items.push(this.read_array_pair_list());
        if (this.token == ",") {
          this.next();
          if (this.token === expect) {
            break;
          }
        } else break;
      }
    }
    this.expect(expect);
    this.next();
    return result(shortForm, items);
  },
  /**
   * Reads an array entry item
   * ```ebnf
   * array_pair_list ::= '&' w_variable |
   *  (
   *    expr (
   *      T_DOUBLE_ARROW (
   *        expr | '&' w_variable
   *      )
   *    )?
   *  )
   * ```
   */
  read_array_pair_list: function read_array_pair_list() {
    var result = this.node(ArrayEntry);
    var key = null;
    var value = null;
    if (this.token === "&") {
      value = this.next().read_variable(true, false, true);
    } else {
      var expr = this.read_expr();
      if (this.token === this.tok.T_DOUBLE_ARROW) {
        key = expr;
        if (this.next().token === "&") {
          value = this.next().read_variable(true, false, true);
        } else {
          value = this.read_expr();
        }
      } else {
        value = expr;
      }
    }
    return result(key, value);
  },
  /**
   * ```ebnf
   *  dim_offset ::= expr?
   * ```
   */
  read_dim_offset: function read_dim_offset() {
    if (this.token == "]") return false;
    return this.read_expr();
  }
};

},{}],105:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * reading a class
   * ```ebnf
   * class ::= class_scope? T_CLASS T_STRING (T_EXTENDS NAMESPACE_NAME)? (T_IMPLEMENTS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' CLASS_BODY '}'
   * ```
   */
  read_class: function read_class(flag) {
    var result = this.node("class");
    this.expect(this.tok.T_CLASS);
    this.next().expect(this.tok.T_STRING);
    var propName = this.text();
    var propExtends = null;
    var propImplements = null;
    if (this.next().token == this.tok.T_EXTENDS) {
      propExtends = this.next().read_namespace_name();
    }
    if (this.token == this.tok.T_IMPLEMENTS) {
      propImplements = this.next().read_name_list();
    }
    this.expect("{");
    var body = this.next().read_class_body();
    return result(propName, propExtends, propImplements, body, flag);
  },
  /**
   * Read the class visibility
   * ```ebnf
   *   class_scope ::= (T_FINAL | T_ABSTRACT)?
   * ```
   */
  read_class_scope: function read_class_scope() {
    var result = this.token;
    if (result == this.tok.T_FINAL) {
      this.next();
      return [0, 0, 2];
    } else if (result == this.tok.T_ABSTRACT) {
      this.next();
      return [0, 0, 1];
    }
    return [0, 0, 0];
  },
  /**
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
      }

      // check T_USE trait
      if (this.token === this.tok.T_USE) {
        result = result.concat(this.next().read_trait_use_statement());
        continue;
      }

      // read member flags
      var flags = this.read_member_flags(false);

      // check constant
      if (this.token === this.tok.T_CONST) {
        var constants = this.read_constant_list(flags);
        if (this.expect(";")) {
          this.next();
        }
        result = result.concat(constants);
        continue;
      }

      // jump over T_VAR then land on T_VARIABLE
      if (this.token === this.tok.T_VAR) {
        this.next().expect(this.tok.T_VARIABLE);
        flags[0] = flags[1] = 0; // public & non static var
      }

      if (this.token === this.tok.T_VARIABLE) {
        // reads a variable
        var variables = this.read_variable_list(flags);
        this.expect(";");
        this.next();
        result = result.concat(variables);
      } else if (this.token === this.tok.T_FUNCTION) {
        // reads a function
        result.push(this.read_function(false, flags));
      } else {
        // raise an error
        this.error([this.tok.T_CONST, this.tok.T_VARIABLE, this.tok.T_FUNCTION]);
        // ignore token
        this.next();
      }
    }
    this.expect("}");
    this.next();
    return result;
  },
  /**
   * Reads variable list
   * ```ebnf
   *  variable_list ::= (variable_declaration ',')* variable_declaration
   * ```
   */
  read_variable_list: function read_variable_list(flags) {
    return this.read_list(
    /**
     * Reads a variable declaration
     *
     * ```ebnf
     *  variable_declaration ::= T_VARIABLE '=' scalar
     * ```
     */
    function read_variable_declaration() {
      var result = this.node("property");
      this.expect(this.tok.T_VARIABLE);
      var name = this.text().substring(1); // ignore $
      this.next();
      if (this.token === ";" || this.token === ",") {
        return result(name, null, flags);
      } else if (this.token === "=") {
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L815
        return result(name, this.next().read_expr(), flags);
      } else {
        this.expect([",", ";", "="]);
        return result(name, null, flags);
      }
    }, ",");
  },
  /**
   * Reads constant list
   * ```ebnf
   *  constant_list ::= T_CONST (constant_declaration ',')* constant_declaration
   * ```
   */
  read_constant_list: function read_constant_list(flags) {
    if (this.expect(this.tok.T_CONST)) {
      this.next();
    }
    return this.read_list(
    /**
     * Reads a constant declaration
     *
     * ```ebnf
     *  constant_declaration ::= (T_STRING | IDENTIFIER) '=' expr
     * ```
     * @return {Constant} [:link:](AST.md#constant)
     */
    function read_constant_declaration() {
      var result = this.node("classconstant");
      var name = null;
      var value = null;
      if (this.token === this.tok.T_STRING || this.php7 && this.is("IDENTIFIER")) {
        name = this.text();
        this.next();
      } else {
        this.expect("IDENTIFIER");
      }
      if (this.expect("=")) {
        value = this.next().read_expr();
      }
      return result(name, value, flags);
    }, ",");
  },
  /**
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
  /**
   * reading an interface
   * ```ebnf
   * interface ::= T_INTERFACE T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' INTERFACE_BODY '}'
   * ```
   */
  read_interface: function read_interface() {
    var result = this.node("interface");
    var name = null;
    var body = null;
    var propExtends = null;
    if (this.expect(this.tok.T_INTERFACE)) {
      this.next();
    }
    if (this.expect(this.tok.T_STRING)) {
      name = this.text();
      this.next();
    }
    if (this.token === this.tok.T_EXTENDS) {
      propExtends = this.next().read_name_list();
    }
    if (this.expect("{")) {
      body = this.next().read_interface_body();
    }
    return result(name, propExtends, body);
  },
  /**
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
      }

      // read member flags
      var flags = this.read_member_flags(true);

      // check constant
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
  /**
   * reading a trait
   * ```ebnf
   * trait ::= T_TRAIT T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' FUNCTION* '}'
   * ```
   */
  read_trait: function read_trait() {
    var result = this.node("trait");
    var propName = null;
    var propExtends = null;
    var propImplements = null;
    var body = null;
    if (this.expect(this.tok.T_TRAIT)) {
      this.next();
    }
    if (this.expect(this.tok.T_STRING)) {
      propName = this.text();
    }
    if (this.next().token == this.tok.T_EXTENDS) {
      propExtends = this.next().read_namespace_name();
    }
    if (this.token == this.tok.T_IMPLEMENTS) {
      propImplements = this.next().read_name_list();
    }
    if (this.expect("{")) {
      body = this.next().read_class_body();
    }
    return result(propName, propExtends, propImplements, body);
  },
  /**
   * reading a use statement
   * ```ebnf
   * trait_use_statement ::= namespace_name (',' namespace_name)* ('{' trait_use_alias '}')?
   * ```
   */
  read_trait_use_statement: function read_trait_use_statement() {
    // defines use statements
    var node = this.node("traituse");
    var traits = [this.read_namespace_name()];
    var adaptations = null;
    while (this.token === ",") {
      traits.push(this.next().read_namespace_name());
    }
    if (this.token === "{") {
      adaptations = [];
      // defines alias statements
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
  /**
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
    var method = void 0;

    if (this.is("IDENTIFIER")) {
      method = this.text();
      this.next();
    } else {
      method = this.read_namespace_name();

      if (this.token === this.tok.T_DOUBLE_COLON) {
        this.next();
        if (this.token === this.tok.T_STRING || this.php7 && this.is("IDENTIFIER")) {
          trait = method;
          method = this.text();
          this.next();
        } else {
          this.expect(this.tok.T_STRING);
        }
      } else {
        // convert identifier as string
        method = method.name;
      }
    }

    // handle trait precedence
    if (this.token === this.tok.T_INSTEADOF) {
      return node("traitprecedence", trait, method, this.next().read_name_list());
    } else if (this.token === this.tok.T_AS) {
      // handle trait alias
      var flags = null;
      var alias = null;
      if (this.next().is("T_MEMBER_FLAGS")) {
        flags = this.read_member_flags();
      }

      if (this.token === this.tok.T_STRING || this.php7 && this.is("IDENTIFIER")) {
        alias = this.text();
        this.next();
      } else if (flags === false) {
        // no visibility flags and no name => too bad
        this.expect(this.tok.T_STRING);
      }

      return node("traitalias", trait, method, alias, flags);
    }

    // handle errors
    this.expect([this.tok.T_AS, this.tok.T_INSTEADOF]);
    return node("traitalias", trait, method, null, null);
  }
};

},{}],106:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   *  Comments with // or # or / * ... * /
   */
  read_comment: function read_comment() {
    var text = this.text();
    var result = this.ast.prepare(text.substring(0, 2) === "/*" ? "commentblock" : "commentline", null, this);
    // handle location on comment
    var prev = this.prev;
    this.prev = [this.lexer.yylloc.last_line, this.lexer.yylloc.last_column, this.lexer.offset];
    this.lex();
    result = result(text);
    this.prev = prev;
    return result;
  },
  /**
   * Comments with / ** ... * /
   */
  read_doc_comment: function read_doc_comment() {
    var result = this.ast.prepare("commentblock", null, this);
    var text = this.text();
    var prev = this.prev;
    this.prev = [this.lexer.yylloc.last_line, this.lexer.yylloc.last_column, this.lexer.offset];
    this.lex();
    result = result(text);
    this.prev = prev;
    return result;
  }
};

},{}],107:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  read_expr: function read_expr() {
    var result = this.node();
    var expr = this.read_expr_item();
    // binary operations
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
    if (this.token === this.tok.T_SR) return result("bin", ">>", expr, this.next().read_expr());
    // more binary operations (formerly bool)
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
    if (this.token === this.tok.T_INSTANCEOF) return result("bin", "instanceof", expr, this.next().read_expr());

    // extra operations :
    // $username = $_GET['user'] ?? 'nobody';
    if (this.token === this.tok.T_COALESCE) return result("bin", "??", expr, this.next().read_expr());

    // extra operations :
    // $username = $_GET['user'] ? true : false;
    if (this.token === "?") {
      var trueArg = null;
      if (this.next().token !== ":") {
        trueArg = this.read_expr();
      }
      this.expect(":") && this.next();
      return result("retif", expr, trueArg, this.read_expr());
    }

    return expr;
  },

  /**
   * ```ebnf
   * Reads an expression
   *  expr ::= @todo
   * ```
   */
  read_expr_item: function read_expr_item() {
    var result = void 0,
        expr = void 0;
    if (this.token === "@") return this.node("silent")(this.next().read_expr());
    if (this.token === "+") return this.node("unary")("+", this.next().read_expr());
    if (this.token === "!") return this.node("unary")("!", this.next().read_expr());
    if (this.token === "~") return this.node("unary")("~", this.next().read_expr());

    if (this.token === "-") {
      result = this.node();
      this.next();
      if (this.token === this.tok.T_LNUMBER || this.token === this.tok.T_DNUMBER) {
        // negative number
        result = result("number", "-" + this.text(), null);
        this.next();
        return result;
      } else {
        return result("unary", "-", this.read_expr());
      }
    }

    if (this.token === "(") {
      var node = this.node("parenthesis");
      expr = this.next().read_expr();
      this.expect(")") && this.next();
      return this.handleDereferencable(node(expr));
    }

    if (this.token === "`") {
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1048
      return this.next().read_encapsed_string("`");
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

      if (!this.innerList) this.innerList = true;
      var assignList = this.read_assignment_list();

      // check if contains at least one assignment statement
      var hasItem = false;
      for (var i = 0; i < assignList.length; i++) {
        if (assignList[i] !== null) {
          hasItem = true;
          break;
        }
      }
      if (!hasItem) {
        this.raiseError("Fatal Error :  Cannot use empty list on line " + this.lexer.yylloc.first_line);
      }
      if (this.expect(")")) {
        this.next();
      }

      if (!isInner) {
        this.innerList = false;
        if (this.expect("=")) {
          return assign(result(assignList), this.next().read_expr(), "=");
        } else {
          // fallback : list($a, $b);
          return result(assignList);
        }
      } else {
        return result(assignList);
      }
    }

    if (this.token === "[") {
      expr = this.read_array();
      if (this.token === "=") {
        return this.node("assign")(expr, this.next().read_expr(), "=");
      } else {
        return this.handleDereferencable(expr);
      }
    }

    if (this.token === this.tok.T_CLONE) return this.node("clone")(this.next().read_expr());

    switch (this.token) {
      case this.tok.T_INC:
        return this.node("pre")("+", this.next().read_variable(false, false, false));

      case this.tok.T_DEC:
        return this.node("pre")("-", this.next().read_variable(false, false, false));

      case this.tok.T_NEW:
        return this.next().read_new_expr();

      case this.tok.T_ISSET:
        {
          result = this.node("isset");
          if (this.next().expect("(")) {
            this.next();
          }
          var args = this.read_list(this.read_expr, ",");
          if (this.expect(")")) {
            this.next();
          }
          return result(args);
        }
      case this.tok.T_EMPTY:
        {
          result = this.node("empty");
          if (this.next().expect("(")) {
            this.next();
          }
          var arg = this.read_expr();
          if (this.expect(")")) {
            this.next();
          }
          return result([arg]);
        }
      case this.tok.T_INCLUDE:
        return this.node("include")(false, false, this.next().read_expr());

      case this.tok.T_INCLUDE_ONCE:
        return this.node("include")(true, false, this.next().read_expr());

      case this.tok.T_REQUIRE:
        return this.node("include")(false, true, this.next().read_expr());

      case this.tok.T_REQUIRE_ONCE:
        return this.node("include")(true, true, this.next().read_expr());

      case this.tok.T_EVAL:
        result = this.node("eval");
        if (this.next().expect("(")) {
          this.next();
        }
        expr = this.read_expr();
        if (this.expect(")")) {
          this.next();
        }
        return result(expr);

      case this.tok.T_INT_CAST:
        return this.node("cast")("int", this.next().read_expr());

      case this.tok.T_DOUBLE_CAST:
        return this.node("cast")("float", this.next().read_expr());

      case this.tok.T_STRING_CAST:
        return this.node("cast")("string", this.next().read_expr());

      case this.tok.T_ARRAY_CAST:
        return this.node("cast")("array", this.next().read_expr());

      case this.tok.T_OBJECT_CAST:
        return this.node("cast")("object", this.next().read_expr());

      case this.tok.T_BOOL_CAST:
        return this.node("cast")("bool", this.next().read_expr());

      case this.tok.T_UNSET_CAST:
        return this.node("cast")("unset", this.next().read_expr());

      case this.tok.T_EXIT:
        {
          var useDie = this.lexer.yytext.toLowerCase() === "die";
          result = this.node("exit");
          var status = null;
          if (this.next().token === "(") {
            if (this.next().token !== ")") {
              status = this.read_expr();
              if (this.expect(")")) {
                this.next();
              }
            } else {
              this.next();
            }
          }
          return result(status, useDie);
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

      case this.tok.T_FUNCTION:
        return this.read_function(true);

      case this.tok.T_STATIC:
        {
          var backup = [this.token, this.lexer.getState()];
          if (this.next().token === this.tok.T_FUNCTION) {
            // handles static function
            return this.read_function(true, [0, 1, 0]);
          } else {
            // rollback
            this.lexer.tokens.push(backup);
            this.next();
          }
        }
    }

    // SCALAR | VARIABLE
    if (this.is("VARIABLE")) {
      result = this.node();
      expr = this.read_variable(false, false, false);

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L877
      // should accept only a variable
      var isConst = expr.kind === "constref" || expr.kind === "staticlookup" && expr.offset.kind === "constref";

      // VARIABLES SPECIFIC OPERATIONS
      switch (this.token) {
        case "=":
          {
            if (isConst) this.error("VARIABLE");
            var right = void 0;
            if (this.next().token == "&") {
              if (this.next().token === this.tok.T_NEW) {
                right = this.next().read_new_expr();
              } else {
                right = this.read_variable(false, false, true);
              }
            } else {
              right = this.read_expr();
            }
            return result("assign", expr, right, "=");
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

        case this.tok.T_INC:
          if (isConst) this.error("VARIABLE");
          this.next();
          return result("post", "+", expr);
        case this.tok.T_DEC:
          if (isConst) this.error("VARIABLE");
          this.next();
          return result("post", "-", expr);
      }
    } else if (this.is("SCALAR")) {
      expr = this.read_scalar();
      return this.handleDereferencable(expr);
    } else {
      this.error("EXPR");
      this.next();
    }

    // returns variable | scalar
    return expr;
  },
  /**
   * ```ebnf
   *    new_expr ::= T_NEW (namespace_name function_argument_list) | (T_CLASS ... class declaration)
   * ```
   * https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L850
   */
  read_new_expr: function read_new_expr() {
    var result = this.node("new");
    var args = [];
    if (this.token === this.tok.T_CLASS) {
      var what = this.node("class");
      // Annonymous class declaration
      var propExtends = null,
          propImplements = null,
          body = null;
      if (this.next().token === "(") {
        args = this.read_function_argument_list();
      }
      if (this.token == this.tok.T_EXTENDS) {
        propExtends = this.next().read_namespace_name();
      }
      if (this.token == this.tok.T_IMPLEMENTS) {
        propImplements = this.next().read_name_list();
      }
      if (this.expect("{")) {
        body = this.next().read_class_body();
      }
      return result(what(null, propExtends, propImplements, body, [0, 0, 0]), args);
    }
    // Already existing class
    var name = this.read_class_name_reference();
    if (this.token === "(") {
      args = this.read_function_argument_list();
    }
    return result(name, args);
  },
  /**
   * Reads a class name
   * ```ebnf
   * class_name_reference ::= namespace_name | variable
   * ```
   */
  read_class_name_reference: function read_class_name_reference() {
    if (this.token === this.tok.T_NS_SEPARATOR || this.token === this.tok.T_STRING || this.token === this.tok.T_NAMESPACE) {
      var result = this.read_namespace_name();
      if (this.token === this.tok.T_DOUBLE_COLON) {
        result = this.read_static_getter(result);
      }
      return result;
    } else if (this.is("VARIABLE")) {
      return this.read_variable(true, false, false);
    } else {
      this.expect([this.tok.T_STRING, "VARIABLE"]);
    }
  },
  /**
   * ```ebnf
   *   assignment_list ::= assignment_list_element (',' assignment_list_element?)*
   * ```
   */
  read_assignment_list: function read_assignment_list() {
    return this.read_list(this.read_assignment_list_element, ",", true);
  },

  /**
   * ```ebnf
   *  assignment_list_element ::= expr | expr T_DOUBLE_ARROW expr
   * ```
   */
  read_assignment_list_element: function read_assignment_list_element() {
    if (this.token === "," || this.token === ")") return null;
    var entry = this.node("entry");
    var result = this.read_expr_item();
    if (this.token === this.tok.T_DOUBLE_ARROW) {
      return entry(result, this.next().read_expr_item());
    }
    return result;
  },

  handleDereferencable: function handleDereferencable(expr) {
    while (this.token !== this.EOF) {
      if (this.token === this.tok.T_OBJECT_OPERATOR) {
        expr = this.recursive_variable_chain_scan(expr, false);
      } else if (this.token === this.tok.T_CURLY_OPEN || this.token === "[") {
        expr = this.read_dereferencable(expr);
      } else if (this.token === "(") {
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1118
        expr = this.node("call")(expr, this.read_function_argument_list());
      } else {
        return expr;
      }
    }
    return expr;
  }
};

},{}],108:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * checks if current token is a reference keyword
   */
  is_reference: function is_reference() {
    if (this.token == "&") {
      this.next();
      return true;
    }
    return false;
  },
  /**
   * checks if current token is a variadic keyword
   */
  is_variadic: function is_variadic() {
    if (this.token === this.tok.T_ELLIPSIS) {
      this.next();
      return true;
    }
    return false;
  },
  /**
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
  /**
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
      if (type === 2) {
        if (this.token === this.tok.T_STRING || this.php7 && this.is("IDENTIFIER")) {
          name = this.text();
          this.next();
        } else {
          this.error("IDENTIFIER");
        }
      } else {
        if (this.expect(this.tok.T_STRING)) {
          name = this.text();
        }
        this.next();
      }
    }
    if (this.expect("(")) this.next();
    var params = this.read_parameter_list();
    if (this.expect(")")) this.next();
    if (type === 1 && this.token === this.tok.T_USE) {
      if (this.next().expect("(")) this.next();
      use = this.read_list(this.read_lexical_var, ",");
      if (this.expect(")")) this.next();
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
  /**
   * ```ebnf
   * lexical_var ::= '&'? T_VARIABLE
   * ```
   */
  read_lexical_var: function read_lexical_var() {
    var result = this.node("variable");
    var isRef = false;
    if (this.token === "&") {
      isRef = true;
      this.next();
    }
    this.expect(this.tok.T_VARIABLE);
    var name = this.text().substring(1);
    this.next();
    return result(name, isRef, false);
  },
  /**
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
  /**
   * ```ebnf
   *  parameter ::= type? '&'? T_ELLIPSIS? T_VARIABLE ('=' expr)?
   * ```
   * @see https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L640
   */
  read_parameter: function read_parameter() {
    var node = this.node("parameter");
    var name = null;
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
      name = this.text().substring(1);
      this.next();
    }
    if (this.token == "=") {
      value = this.next().read_expr();
    }
    return node(name, type, value, isRef, isVariadic, nullable);
  },
  /**
   * Reads a list of arguments
   * ```ebnf
   *  function_argument_list ::= '(' (argument_list (',' argument_list)*)? ')'
   * ```
   */
  read_function_argument_list: function read_function_argument_list() {
    var result = [];
    var wasVariadic = false;
    this.expect("(") && this.next();
    if (this.token !== ")") {
      while (this.token != this.EOF) {
        var argument = this.read_argument_list();
        if (argument) {
          result.push(argument);
          if (argument.kind === "variadic") {
            wasVariadic = true;
          } else if (wasVariadic) {
            this.raiseError("Unexpected argument after a variadic argument");
          }
        }
        if (this.token === ",") {
          this.next();
        } else break;
      }
    }
    this.expect(")") && this.next();
    return result;
  },
  /**
   * ```ebnf
   *    argument_list ::= T_ELLIPSIS? expr
   * ```
   */
  read_argument_list: function read_argument_list() {
    if (this.token === this.tok.T_ELLIPSIS) {
      return this.node("variadic")(this.next().read_expr());
    }
    return this.read_expr();
  },
  /**
   * read type hinting
   * ```ebnf
   *  type ::= T_ARRAY | T_CALLABLE | namespace_name
   * ```
   */
  read_type: function read_type() {
    var result = this.node("identifier");
    switch (this.token) {
      case this.tok.T_ARRAY:
        this.next();
        return result(["", "array"], false);
      case this.tok.T_NAMESPACE:
      case this.tok.T_NS_SEPARATOR:
      case this.tok.T_STRING:
        return this.read_namespace_name();
      case this.tok.T_CALLABLE:
        this.next();
        return result(["", "callable"], false);
      default:
        return null;
    }
  }
};

},{}],109:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * Reads an IF statement
   *
   * ```ebnf
   *  if ::= T_IF '(' expr ')' ':' ...
   * ```
   */
  read_if: function read_if() {
    var result = this.node("if");
    var body = null;
    var alternate = null;
    var shortForm = false;
    var test = null;
    test = this.next().read_if_expr();

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
  /**
   * reads an if expression : '(' expr ')'
   */
  read_if_expr: function read_if_expr() {
    this.expect("(") && this.next();
    var result = this.read_expr();
    this.expect(")") && this.next();
    return result;
  },
  /**
   * reads an elseif (expr): statements
   */
  read_elseif_short: function read_elseif_short() {
    var result = this.node("if");
    var alternate = null;
    var test = null;
    var body = null;
    var items = [];
    test = this.next().read_if_expr();
    if (this.expect(":")) this.next();
    body = this.node("block");
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
    body = body(null, items);
    return result(test, body, alternate, true);
  },
  /**
   *
   */
  read_else_short: function read_else_short() {
    var body = this.node("block");
    if (this.next().expect(":")) this.next();
    var items = [];
    while (this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
      items.push(this.read_inner_statement());
    }
    return body(null, items);
  }
};

},{}],110:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /**
   * Reads a while statement
   * ```ebnf
   * while ::= T_WHILE (statement | ':' inner_statement_list T_ENDWHILE ';')
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L587
   * @return {While}
   */
  read_while: function read_while() {
    var result = this.node("while");
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
  /**
   * Reads a do / while loop
   * ```ebnf
   * do ::= T_DO statement T_WHILE '(' expr ')' ';'
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L423
   * @return {Do}
   */
  read_do: function read_do() {
    var result = this.node("do");
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
  /**
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
  /**
   * Reads a foreach loop
   * ```ebnf
   * foreach ::= '(' expr T_AS foreach_variable (T_DOUBLE_ARROW foreach_variable)? ')' statement
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L438
   * @return {Foreach}
   */
  read_foreach: function read_foreach() {
    var result = this.node("foreach");
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
  /**
   * Reads a foreach variable statement
   * ```ebnf
   * foreach_variable = variable |
   *  T_LIST '(' assignment_list ')' |
   *  '[' array_pair_list ']'
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L544
   * @return {Expression}
   */
  read_foreach_variable: function read_foreach_variable() {
    if (this.token === this.tok.T_LIST) {
      var result = this.node("list");
      if (this.next().expect("(")) this.next();
      var assignList = this.read_assignment_list();
      if (this.expect(")")) this.next();
      return result(assignList);
    } else if (this.token === "[" || this.token === this.tok.T_ARRAY) {
      return this.read_array();
    } else {
      return this.read_variable(false, false, false);
    }
  }
};

},{}],111:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
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

},{}],112:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /**
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
    var body = void 0;
    this.expect(this.tok.T_NAMESPACE) && this.next();
    if (this.token == "{") {
      this.currentNamespace = [""];
      body = this.next().read_top_statements();
      this.expect("}") && this.next();
      return result([""], body, true);
    } else {
      var name = this.read_namespace_name();
      if (this.token == ";") {
        this.currentNamespace = name;
        body = this.next().read_top_statements();
        this.expect(this.EOF);
        return result(name.name, body, false);
      } else if (this.token == "{") {
        this.currentNamespace = name;
        body = this.next().read_top_statements();
        this.expect("}") && this.next();
        return result(name.name, body, true);
      } else if (this.token === "(") {
        // resolve ambuiguity between namespace & function call
        name.resolution = this.ast.identifier.RELATIVE_NAME;
        name.name = name.name.substring(1);
        return this.node("call")(name, this.read_function_argument_list());
      } else {
        this.error(["{", ";"]);
        // graceful mode :
        this.currentNamespace = name;
        body = this.read_top_statements();
        this.expect(this.EOF);
        return result(name, body, false);
      }
    }
  },
  /**
   * Reads a namespace name
   * ```ebnf
   *  namespace_name ::= T_NS_SEPARATOR? (T_STRING T_NS_SEPARATOR)* T_STRING
   * ```
   * @see http://php.net/manual/en/language.namespaces.rules.php
   * @return {Identifier}
   */
  read_namespace_name: function read_namespace_name() {
    var result = this.node("identifier");
    var relative = false;
    if (this.token === this.tok.T_NAMESPACE) {
      this.next().expect(this.tok.T_NS_SEPARATOR) && this.next();
      relative = true;
    }
    return result(this.read_list(this.tok.T_STRING, this.tok.T_NS_SEPARATOR, true), relative);
  },
  /**
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
  /**
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
  /**
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
      result.push(this.next().read_use_declaration(typed));
    }
    return result;
  },
  /**
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
        result = this.text();
        this.next();
      }
    }
    return result;
  },
  /**
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

},{}],113:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var specialChar = {
  "\\r": "\r",
  "\\n": "\n",
  "\\t": "\t",
  "\\v": String.fromCharCode(11),
  "\\e": String.fromCharCode(27),
  "\\f": String.fromCharCode(12),
  "\\\\": "\\",
  "\\$": "$",
  '\\"': '"',
  "\\'": "'"
};

module.exports = {
  /**
   * Unescape special chars
   */
  resolve_special_chars: function resolve_special_chars(text, doubleQuote) {
    if (!doubleQuote) {
      // single quote fix
      return text.replace(/\\['\\]/g, function (seq) {
        return specialChar[seq];
      });
    }
    return text.replace(/\\[rntvef"'\\$]/g, function (seq) {
      return specialChar[seq];
    });
  },
  /**
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
      var value = void 0,
          node = void 0;
      switch (this.token) {
        // TEXTS
        case this.tok.T_CONSTANT_ENCAPSED_STRING:
          {
            value = this.node("string");
            var text = this.text();
            var offset = 0;
            if (text[0] === "b" || text[0] === "B") {
              offset = 1;
            }
            var isDoubleQuote = text[offset] === '"';
            this.next();
            value = value(isDoubleQuote, this.resolve_special_chars(text.substring(offset + 1, text.length - 1), isDoubleQuote), text);
            if (this.token === this.tok.T_DOUBLE_COLON) {
              // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1151
              return this.read_static_getter(value);
            } else {
              // dirrect string
              return value;
            }
          }
        case this.tok.T_START_HEREDOC:
          if (this.lexer.curCondition === "ST_NOWDOC") {
            var start = this.lexer.yylloc.first_offset;
            node = this.node("nowdoc");
            value = this.next().text();
            // strip the last line return char
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
            var raw = this.lexer._input.substring(start, this.lexer.yylloc.last_offset);
            node = node(value, raw, this.lexer.heredoc_label, raw[3] === '"' || raw[3] === "'");
            this.expect(this.tok.T_END_HEREDOC) && this.next();
            return node;
          } else {
            return this.next().read_encapsed_string(this.tok.T_END_HEREDOC);
          }

        case '"':
          return this.next().read_encapsed_string('"');

        case 'b"':
        case 'B"':
          {
            this.next();
            this.lexer.yylloc.prev_offset -= 1;
            return this.read_encapsed_string('"');
          }

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

        // ARRAYS
        case this.tok.T_ARRAY: // array parser
        case "[":
          // short array format
          return this.read_array();
        default:
          {
            var err = this.error("SCALAR");
            // graceful mode : ignore token & return error node
            this.next();
            return err;
          }
      }
    }
  },
  /**
   * Handles the dereferencing
   */
  read_dereferencable: function read_dereferencable(expr) {
    var result = void 0,
        offset = void 0;
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
  /**
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
    var result = this.node(),
        offset = void 0,
        node = void 0,
        name = void 0;

    // plain text
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1222
    if (this.token === this.tok.T_ENCAPSED_AND_WHITESPACE) {
      var text = this.text();
      this.next();
      result = result("string", false, this.resolve_special_chars(text, isDoubleQuote), text);
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      // dynamic variable name
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1239
      name = null;
      if (this.next().token === this.tok.T_STRING_VARNAME) {
        var varName = this.text();
        name = this.node("variable");
        this.next();
        // check if lookup an offset
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1243
        if (this.token === "[") {
          name = name(varName, false);
          node = this.node("offsetlookup");
          offset = this.next().read_expr();
          this.expect("]") && this.next();
          name = node(name, offset);
        } else {
          name = this.node("constref")(varName);
        }
      } else {
        name = this.read_expr();
      }
      this.expect("}") && this.next();
      result = result("variable", name, false, true);
    } else if (this.token === this.tok.T_CURLY_OPEN) {
      // expression
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1246
      result = this.next().read_variable(false, false, false);
      if (result.kind === "variable") {
        result.curly = true;
      }
      this.expect("}") && this.next();
    } else if (this.token === this.tok.T_VARIABLE) {
      // plain variable
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1231
      result = this.read_simple_variable(false);

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1233
      if (this.token === "[") {
        node = this.node("offsetlookup");
        offset = this.next().read_encaps_var_offset();
        this.expect("]") && this.next();
        result = node(result, offset);
      }

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1236
      if (this.token === this.tok.T_OBJECT_OPERATOR) {
        node = this.node("propertylookup");
        var what = this.node("constref");
        this.next().expect(this.tok.T_STRING);
        name = this.text();
        this.next();
        result = node(result, what(name));
      }

      // error / fallback
    } else {
      this.expect(this.tok.T_ENCAPSED_AND_WHITESPACE);
      var value = this.text();
      this.next();
      // consider it as string
      result = result("string", false, value, value);
    }

    return result;
  },
  /**
   * Reads an encapsed string
   */
  read_encapsed_string: function read_encapsed_string(expect) {
    var start = this.lexer.yylloc.prev_offset;
    var node = this.node("encapsed");
    var value = [];
    var type = null;

    if (expect === "`") {
      type = this.ast.encapsed.TYPE_SHELL;
    } else if (expect === '"') {
      type = this.ast.encapsed.TYPE_STRING;
    } else {
      type = this.ast.encapsed.TYPE_HEREDOC;
    }

    // reading encapsed parts
    while (this.token !== expect && this.token !== this.EOF) {
      value.push(this.read_encapsed_string_item(true));
    }

    this.expect(expect) && this.next();
    node = node(value, this.lexer._input.substring(start - 1, this.lexer.yylloc.first_offset), type);

    if (expect === this.tok.T_END_HEREDOC) {
      node.label = this.lexer.heredoc_label;
    }
    return node;
  },
  /**
   * Constant token
   */
  get_magic_constant: function get_magic_constant() {
    var result = this.node("magic");
    var name = this.text();
    this.next();
    return result(name.toUpperCase(), name);
  }
};

},{}],114:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  /**
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
  /**
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
        {
          var flag = this.read_class_scope();
          if (this.token === this.tok.T_CLASS) {
            return this.read_class(flag);
          } else {
            this.error(this.tok.T_CLASS);
            this.next();
            return null;
          }
        }
      case this.tok.T_CLASS:
        return this.read_class([0, 0, 0]);
      case this.tok.T_INTERFACE:
        return this.read_interface();
      case this.tok.T_TRAIT:
        return this.read_trait();
      case this.tok.T_USE:
        return this.read_use_statement();
      case this.tok.T_CONST:
        return this.next().read_const_list();
      case this.tok.T_NAMESPACE:
        return this.read_namespace();
      case this.tok.T_HALT_COMPILER:
        {
          var result = this.node("halt");
          if (this.next().expect("(")) this.next();
          if (this.expect(")")) this.next();
          this.expect(";");
          this.lexer.done = true;
          return result(this.lexer._input.substring(this.lexer.offset));
        }
      default:
        return this.read_statement();
    }
  },
  /**
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
  /**
   * Reads a list of constants declaration
   * ```ebnf
   *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)* ';'
   * ```
   */
  read_const_list: function read_const_list() {
    var result = this.read_list(function () {
      this.expect(this.tok.T_STRING);
      var result = this.node("constant");
      var name = this.text();
      if (this.next().expect("=")) {
        return result(name, this.next().read_expr());
      } else {
        // fallback
        return result(name, null);
      }
    }, ",", false);
    this.expectEndOfStatement();
    return result;
  },
  /**
   * Reads a list of constants declaration
   * ```ebnf
   *   declare_list ::= T_STRING '=' expr (',' T_STRING '=' expr)*
   * ```
   * @retrurn {Object}
   */
  read_declare_list: function read_declare_list() {
    var result = {};
    while (this.token != this.EOF && this.token !== ")") {
      this.expect(this.tok.T_STRING);
      var name = this.text().toLowerCase();
      if (this.next().expect("=")) {
        result[name] = this.next().read_expr();
      } else {
        result[name] = null;
      }
      if (this.token !== ",") break;
      this.next();
    }
    return result;
  },
  /**
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
        {
          var flag = this.read_class_scope();
          if (this.token === this.tok.T_CLASS) {
            return this.read_class(flag);
          } else {
            this.error(this.tok.T_CLASS);
            // graceful mode : ignore token & go next
            this.next();
            return null;
          }
        }
      case this.tok.T_CLASS:
        return this.read_class([0, 0, 0]);
      case this.tok.T_INTERFACE:
        return this.read_interface();
      case this.tok.T_TRAIT:
        return this.read_trait();
      case this.tok.T_HALT_COMPILER:
        {
          this.raiseError("__HALT_COMPILER() can only be used from the outermost scope");
          // fallback : returns a node but does not stop the parsing
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
  /**
   * Reads statements
   */
  read_statement: function read_statement() {
    var result = void 0,
        expr = void 0,
        items = void 0,
        current = void 0,
        label = void 0;
    switch (this.token) {
      case "{":
        return this.read_code_block(false);

      case this.tok.T_IF:
        return this.read_if();

      case this.tok.T_SWITCH:
        return this.read_switch();

      case this.tok.T_FOR:
        return this.next().read_for();

      case this.tok.T_FOREACH:
        return this.next().read_foreach();

      case this.tok.T_WHILE:
        return this.next().read_while();

      case this.tok.T_DO:
        return this.next().read_do();

      case this.tok.T_COMMENT:
        return this.read_comment();

      case this.tok.T_DOC_COMMENT:
        return this.read_doc_comment();

      case this.tok.T_RETURN:
        result = this.node("return");
        expr = null;
        if (!this.next().is("EOS")) {
          expr = this.read_expr();
        }
        this.expectEndOfStatement();
        return result(expr);

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L429
      case this.tok.T_BREAK:
      case this.tok.T_CONTINUE:
        {
          result = this.node(this.token === this.tok.T_CONTINUE ? "continue" : "break");
          var level = null;
          this.next(); // look ahead
          if (this.token !== ";") {
            level = this.read_expr();
          }
          this.expectEndOfStatement();
          return result(level);
        }

      case this.tok.T_GLOBAL:
        result = this.node("global");
        items = this.next().read_list(this.read_simple_variable, ",");
        this.expectEndOfStatement();
        return result(items);

      case this.tok.T_STATIC:
        current = [this.token, this.lexer.getState()];
        result = this.node("static");
        if (this.next().token === this.tok.T_DOUBLE_COLON) {
          // static keyword for a class
          this.lexer.tokens.push(current);
          expr = this.next().read_expr();
          this.expect(";") && this.next();
          return expr;
        }
        if (this.token === this.tok.T_FUNCTION) {
          return this.read_function(true, [0, 1, 0]);
        }
        items = this.read_variable_declarations();
        this.expectEndOfStatement();
        return result(items);

      case this.tok.T_ECHO:
        {
          result = this.node("echo");
          var text = this.text();
          var shortForm = text === "<?=" || text === "<%=";
          var args = this.next().read_list(this.read_expr, ",");
          this.expectEndOfStatement();
          return result(args, shortForm);
        }

      case this.tok.T_INLINE_HTML:
        {
          var value = this.text();
          var prevChar = this.lexer.yylloc.first_offset > 0 ? this.lexer._input[this.lexer.yylloc.first_offset - 1] : null;
          var fixFirstLine = prevChar === "\r" || prevChar === "\n";
          // revert back the first stripped line
          if (fixFirstLine) {
            if (prevChar === "\n" && this.lexer.yylloc.first_offset > 1 && this.lexer._input[this.lexer.yylloc.first_offset - 2] === "\r") {
              prevChar = "\r\n";
            }
          }
          result = this.node("inline");
          this.next();
          return result(value, fixFirstLine ? prevChar + value : value);
        }

      case this.tok.T_UNSET:
        result = this.node("unset");
        this.next().expect("(") && this.next();
        items = this.read_list(this.read_variable, ",");
        this.expect(")") && this.next();
        this.expect(";") && this.next();
        return result(items);

      case this.tok.T_DECLARE:
        {
          result = this.node("declare");
          var body = [];
          var mode = void 0;
          this.next().expect("(") && this.next();
          var what = this.read_declare_list();
          this.expect(")") && this.next();
          if (this.token === ":") {
            this.next();
            while (this.token != this.EOF && this.token !== this.tok.T_ENDDECLARE) {
              // @todo : check declare_statement from php / not valid
              body.push(this.read_top_statement());
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
            this.expect("}") && this.next();
            mode = this.ast.declare.MODE_BLOCK;
          } else {
            this.expect(";") && this.next();
            mode = this.ast.declare.MODE_NONE;
          }
          return result(what, body, mode);
        }

      case this.tok.T_TRY:
        return this.read_try();

      case this.tok.T_THROW:
        result = this.node("throw");
        expr = this.next().read_expr();
        this.expectEndOfStatement();
        return result(expr);

      case ";":
        // ignore this (extra ponctuation)
        this.next();
        return null;

      case this.tok.T_STRING:
        current = [this.token, this.lexer.getState()];
        label = this.text();
        // AST : https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L457
        if (this.next().token === ":") {
          result = this.node("label");
          this.next();
          return result(label);
        }

        // default fallback expr / T_STRING '::' (etc...)
        this.lexer.tokens.push(current);
        expr = this.next().read_expr();
        this.expectEndOfStatement();
        return expr;

      case this.tok.T_GOTO:
        result = this.node("goto");
        label = null;
        if (this.next().expect(this.tok.T_STRING)) {
          label = this.text();
          this.next().expectEndOfStatement();
        }
        return result(label);

      default:
        // default fallback expr
        expr = this.read_expr();
        this.expectEndOfStatement();
        return expr;
    }
  },
  /**
   * ```ebnf
   *  code_block ::= '{' (inner_statements | top_statements) '}'
   * ```
   */
  read_code_block: function read_code_block(top) {
    var result = this.node("block");
    this.expect("{") && this.next();
    var body = top ? this.read_top_statements() : this.read_inner_statements();
    this.expect("}") && this.next();
    return result(null, body);
  }
};

},{}],115:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /**
   * Reads a switch statement
   * ```ebnf
   *  switch ::= T_SWITCH '(' expr ')' switch_case_list
   * ```
   * @return {Switch}
   * @see http://php.net/manual/en/control-structures.switch.php
   */
  read_switch: function read_switch() {
    this.expect(this.tok.T_SWITCH) && this.next();
    var result = this.node("switch");
    this.expect("(") && this.next();
    var test = this.read_expr();
    this.expect(")") && this.next();
    var shortForm = this.token === ":";
    var body = this.read_switch_case_list();
    return result(test, body, shortForm);
  },
  /**
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
    // OPTIONNAL ';'
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L570
    if (this.next().token === ";") {
      this.next();
    }
    // EXTRACTING CASES
    while (this.token !== this.EOF && this.token !== expect) {
      items.push(this.read_case_list(expect));
    }
    // CHECK END TOKEN
    this.expect(expect) && this.next();
    if (expect === this.tok.T_ENDSWITCH) {
      this.expectEndOfStatement();
    }
    return result(null, items);
  },
  /**
   * ```ebnf
   *   case_list ::= ((T_CASE expr) | T_DEFAULT) (':' | ';') inner_statement*
   * ```
   */
  read_case_list: function read_case_list(stopToken) {
    var result = this.node("case");
    var test = null;
    var body = null;
    var items = [];
    if (this.token === this.tok.T_CASE) {
      test = this.next().read_expr();
    } else if (this.token === this.tok.T_DEFAULT) {
      // the defaut entry - no condition
      this.next();
    } else {
      this.expect([this.tok.T_CASE, this.tok.T_DEFAULT]);
    }
    this.expect([":", ";"]) && this.next();
    body = this.node("block");
    while (this.token != this.EOF && this.token !== stopToken && this.token !== this.tok.T_CASE && this.token !== this.tok.T_DEFAULT) {
      items.push(this.read_inner_statement());
    }
    return result(test, items.length > 0 ? body(null, items) : null);
  }
};

},{}],116:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  /**
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
    var body = this.next().read_statement();
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L455
    while (this.token === this.tok.T_CATCH) {
      var item = this.node("catch");
      this.next().expect("(") && this.next();
      var what = this.read_list(this.read_namespace_name, "|", false);
      var variable = this.read_variable(true, false, false);
      this.expect(")");
      catches.push(item(this.next().read_statement(), what, variable));
    }
    if (this.token === this.tok.T_FINALLY) {
      always = this.next().read_statement();
    }
    return result(body, catches, always);
  }
};

},{}],117:[function(require,module,exports){
/*!
 * Defines a list of helper functions for parsing
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /**
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
    if (this.expect(token)) this.next();
    this.expectEndOfStatement();
    return body(null, items);
  },

  /**
   * Helper : reads a list of tokens / sample : T_STRING ',' T_STRING ...
   * ```ebnf
   * list ::= separator? ( item separator )* item
   * ```
   */
  read_list: function read_list(item, separator, preserveFirstSeparator) {
    var result = [];

    if (this.token == separator) {
      if (preserveFirstSeparator) result.push(null);
      this.next();
    }

    if (typeof item === "function") {
      do {
        result.push(item.apply(this, []));
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
        if (this.token != separator) break;
        // trim current separator & check item
        if (this.next().token != item) break;
        result.push(this.text());
      }
    }
    return result;
  },

  /**
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
   * @return {Identifier[]}
   */
  read_name_list: function read_name_list() {
    return this.read_list(this.read_namespace_name, ",", false);
  },

  /**
   * Reads a list of variables declarations
   *
   * ```ebnf
   * variable_declaration ::= T_VARIABLE ('=' expr)?*
   * variable_declarations ::= variable_declaration (',' variable_declaration)*
   * ```
   *
   * Sample code :
   * ```php
   * <?php class foo extends bar, baz { }
   * ```
   * @return {Variable[]|Assign[]} Returns an array composed by a list of variables, or
   * assign values
   */
  read_variable_declarations: function read_variable_declarations() {
    return this.read_list(function () {
      var node = this.node("assign");
      var variable = this.node("variable");
      // plain variable name
      if (this.expect(this.tok.T_VARIABLE)) {
        var name = this.text().substring(1);
        this.next();
        variable = variable(name, false, false);
      } else {
        variable = variable("#ERR", false, false);
      }
      if (this.token === "=") {
        return node(variable, this.next().read_expr());
      } else {
        return variable;
      }
    }, ",");
  }
};

},{}],118:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /**
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
  read_variable: function read_variable(read_only, encapsed, byref) {
    var result = void 0;

    // check the byref flag
    if (!byref && this.token === "&") {
      byref = true;
      this.next();
    }

    // reads the entry point
    if (this.is([this.tok.T_VARIABLE, "$"])) {
      result = this.read_reference_variable(encapsed, byref);
    } else if (this.is([this.tok.T_NS_SEPARATOR, this.tok.T_STRING, this.tok.T_NAMESPACE])) {
      result = this.node();
      var name = this.read_namespace_name();
      if (this.token != this.tok.T_DOUBLE_COLON && this.token != "(") {
        // @see parser.js line 130 : resolves a conflict with scalar
        var literal = name.name.toLowerCase();
        if (literal === "true") {
          result = result("boolean", true, name.name);
        } else if (literal === "false") {
          result = result("boolean", false, name.name);
        } else {
          // @todo null keyword ?
          result = result("constref", name);
        }
      } else {
        result = name;
      }
    } else if (this.token === this.tok.T_STATIC) {
      result = this.node("constref");
      this.next();
      result = result("static");
    } else {
      this.expect("VARIABLE");
    }

    // static mode
    if (this.token === this.tok.T_DOUBLE_COLON) {
      result = this.read_static_getter(result, encapsed);
    }

    return this.recursive_variable_chain_scan(result, read_only, encapsed);
  },

  // resolves a static call
  read_static_getter: function read_static_getter(what, encapsed) {
    var result = this.node("staticlookup");
    var offset = void 0,
        name = void 0;
    if (this.next().is([this.tok.T_VARIABLE, "$"])) {
      offset = this.read_reference_variable(encapsed, false);
    } else if (this.token === this.tok.T_STRING || this.token === this.tok.T_CLASS || this.php7 && this.is("IDENTIFIER")) {
      offset = this.node("constref");
      name = this.text();
      this.next();
      offset = offset(name);
    } else {
      this.error([this.tok.T_VARIABLE, this.tok.T_STRING]);
      // graceful mode : set getter as error node and continue
      offset = this.node("constref");
      name = this.text();
      this.next();
      offset = offset(name);
    }
    return result(what, offset);
  },

  recursive_variable_chain_scan: function recursive_variable_chain_scan(result, read_only, encapsed) {
    var name = void 0,
        node = void 0,
        offset = void 0;
    recursive_scan_loop: while (this.token != this.EOF) {
      switch (this.token) {
        case "(":
          if (read_only) {
            // @fixme : add more informations & test
            return result;
          } else {
            result = this.node("call")(result, this.read_function_argument_list());
          }
          break;
        case "[":
          node = this.node("offsetlookup");
          this.next();
          offset = false;
          if (encapsed) {
            offset = this.read_encaps_var_offset();
            this.expect("]") && this.next();
          } else {
            // callable_variable : https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1122
            if (this.token !== "]") {
              offset = this.read_expr();
              this.expect("]") && this.next();
            } else {
              this.next();
            }
          }
          result = node(result, offset);
          break;
        case this.tok.T_DOUBLE_COLON:
          // @see https://github.com/glayzzle/php-parser/issues/107#issuecomment-354104574
          if (result.kind === "staticlookup") {
            this.error();
          }

          node = this.node("staticlookup");
          if (this.next().token === this.tok.T_STRING || this.php7 && this.is("IDENTIFIER")) {
            offset = this.node("constref");
            name = this.text();
            this.next();
            offset = offset(name);

            if (this.token === this.tok.T_OBJECT_OPERATOR) {
              this.error();
            }
          } else {
            this.error(this.tok.T_STRING);
            // fallback on a constref node
            offset = this.node("constref")(this.text());
            this.next();
          }
          result = node(result, offset);
          break;
        case this.tok.T_OBJECT_OPERATOR:
          {
            node = this.node("propertylookup");
            var what = null;
            switch (this.next().token) {
              case this.tok.T_STRING:
                what = this.node("constref");
                name = this.text();
                this.next();
                what = what(name);
                if (this.token === this.tok.T_VARIABLE) {
                  var inner = this.node("variable");
                  name = this.text().substring(1);
                  this.next();
                  what = this.node("encapsed")([what, inner(name, false, false)], null, "offset");
                  if (what.loc && what.value[0].loc) {
                    what.loc.start = what.value[0].loc.start;
                  }
                } else if (this.token === "{") {
                  var expr = this.next().read_expr();
                  this.expect("}") && this.next();
                  what = this.node("encapsed")([what, expr], null, "offset");
                  if (what.loc && what.value[0].loc) {
                    what.loc.start = what.value[0].loc.start;
                  }
                }
                break;
              case this.tok.T_VARIABLE:
                what = this.node("variable");
                name = this.text().substring(1);
                this.next();
                what = what(name, false, false);
                break;
              case "$":
                this.next().expect(["{", this.tok.T_VARIABLE]);
                if (this.token === "{") {
                  // $obj->${$varname}
                  what = this.next().read_expr();
                  this.expect("}") && this.next();
                } else {
                  // $obj->$$varname
                  what = this.read_expr();
                }
                break;
              case "{":
                what = this.next().read_expr();
                this.expect("}") && this.next();
                break;
              default:
                this.error([this.tok.T_STRING, this.tok.T_VARIABLE]);
                // graceful mode : set what as error mode & continue
                what = this.node("constref");
                name = this.text();
                this.next();
                what = what(name);
                break;
            }
            result = node(result, what);
            break;
          }
        default:
          break recursive_scan_loop;
      }
    }
    return result;
  },
  /**
   * https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1231
   */
  read_encaps_var_offset: function read_encaps_var_offset() {
    var offset = this.node();
    if (this.token === this.tok.T_STRING) {
      var text = this.text();
      this.next();
      offset = offset("constref", text);
    } else if (this.token === this.tok.T_NUM_STRING) {
      var num = this.text();
      this.next();
      offset = offset("number", num, null);
    } else if (this.token === this.tok.T_VARIABLE) {
      var name = this.text().substring(1);
      this.next();
      offset = offset("variable", name, false, false);
    } else {
      this.expect([this.tok.T_STRING, this.tok.T_NUM_STRING, this.tok.T_VARIABLE]);
      // fallback : consider as constref
      var _text = this.text();
      this.next();
      offset = offset("constref", _text);
    }
    return offset;
  },
  /**
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
  read_reference_variable: function read_reference_variable(encapsed, byref) {
    var result = this.read_simple_variable(byref);
    var offset = void 0;
    while (this.token != this.EOF) {
      var node = this.node();
      if (this.token == "[") {
        offset = null;
        if (encapsed) {
          offset = this.next().read_encaps_var_offset();
        } else {
          offset = this.next().token === "]" ? null : this.read_dim_offset();
        }
        this.expect("]") && this.next();
        result = node("offsetlookup", result, offset);
      } else if (this.token == "{" && !encapsed) {
        offset = this.next().read_expr();
        this.expect("}") && this.next();
        result = node("offsetlookup", result, offset);
      } else break;
    }
    return result;
  },
  /**
   * ```ebnf
   *  simple_variable ::= T_VARIABLE | '$' '{' expr '}' | '$' simple_variable
   * ```
   */
  read_simple_variable: function read_simple_variable(byref) {
    var result = this.node("variable");
    var name = void 0;
    if (this.expect([this.tok.T_VARIABLE, "$"]) && this.token === this.tok.T_VARIABLE) {
      // plain variable name
      name = this.text().substring(1);
      this.next();
      result = result(name, byref, false);
    } else {
      if (this.token === "$") this.next();
      // dynamic variable name
      switch (this.token) {
        case "{":
          {
            var expr = this.next().read_expr();
            this.expect("}") && this.next();
            result = result(expr, byref, true);
            break;
          }
        case "$":
          // $$$var
          result = result(this.read_simple_variable(false), byref);
          break;
        case this.tok.T_VARIABLE:
          {
            // $$var
            name = this.text().substring(1);
            var node = this.node("variable");
            this.next();
            result = result(node(name, false, false), byref, false);
            break;
          }
        default:
          this.error(["{", "$", this.tok.T_VARIABLE]);
          // graceful mode
          name = this.text();
          this.next();
          result = result(name, byref, false);
      }
    }
    return result;
  }
};

},{}],119:[function(require,module,exports){
"use strict";

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

// exports token index
module.exports = {
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
    233: "T_SPACESHIP"
  },
  names: {
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
    T_SPACESHIP: 233
  }
};

},{}],"php-parser":[function(require,module,exports){
(function (Buffer){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var lexer = require("./lexer");
var parser = require("./parser");
var tokens = require("./tokens");
var AST = require("./ast");

/**
 * @private combine structures
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
    } else if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object") {
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
 * Usage :
 * ```js
 * var parser = require('php-parser');
 * var instance = new parser({
 *   parser: {
 *     extractDoc: true,
 *     suppressErrors: true,
 *     php7: true
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
 * ```
 *
 * @constructor {Engine}
 * @param {Object} options - List of options
 *
 * @property {Lexer} lexer
 * @property {Parser} parser
 * @property {AST} ast
 * @property {Object} tokens
 */
var engine = function engine(options) {
  if (typeof this === "function") {
    return new this(options);
  }
  this.tokens = tokens;
  this.lexer = new lexer(this);
  this.ast = new AST();
  this.parser = new parser(this.lexer, this.ast);
  if (options && (typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
    // disable php7 from lexer if already disabled from parser
    if (options.parser && options.parser.php7 === false) {
      if (!options.lexer) {
        options.lexer = {};
      }
      options.lexer.php7 = false;
    }
    combine(options, this);
  }
};

/**
 * Check if the inpyt is a buffer or a string
 * @param  {Buffer|String} buffer Input value that can be either a buffer or a string
 * @return {String}   Returns the string from input
 */
var getStringBuffer = function getStringBuffer(buffer) {
  return Buffer.isBuffer(buffer) ? buffer.toString() : buffer;
};

/**
 * Creates a new instance (Helper)
 * @param {Object} options
 * @return {Engine}
 * @private
 */
engine.create = function (options) {
  return new engine(options);
};

/**
 * Evaluate the buffer
 * @private
 */
engine.parseEval = function (buffer, options) {
  var self = new engine(options);
  return self.parseEval(buffer);
};

/**
 * Parse an evaluating mode string (no need to open php tags)
 * @param {String} buffer
 * @return {Program}
 */
engine.prototype.parseEval = function (buffer) {
  this.lexer.mode_eval = true;
  this.lexer.all_tokens = false;
  buffer = getStringBuffer(buffer);
  return this.parser.parse(buffer, "eval");
};

/**
 * Static function that parse a php code with open/close tags
 * @private
 */
engine.parseCode = function (buffer, filename, options) {
  if ((typeof filename === "undefined" ? "undefined" : _typeof(filename)) === "object") {
    // retro-compatibility
    options = filename;
    filename = "unknown";
  }
  var self = new engine(options);
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
engine.prototype.parseCode = function (buffer, filename) {
  this.lexer.mode_eval = false;
  this.lexer.all_tokens = false;
  buffer = getStringBuffer(buffer);
  return this.parser.parse(buffer, filename);
};

/**
 * Split the buffer into tokens
 * @private
 */
engine.tokenGetAll = function (buffer, options) {
  var self = new engine(options);
  return self.tokenGetAll(buffer);
};

/**
 * Extract tokens from the specified buffer.
 * > Note that the output tokens are *STRICLY* similar to PHP function `token_get_all`
 * @param {String} buffer
 * @return {String[]} - Each item can be a string or an array with following informations [token_name, text, line_number]
 */
engine.prototype.tokenGetAll = function (buffer) {
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

// exports the function
module.exports = engine;
// allow the default export in index.d.ts
module.exports.default = engine;

}).call(this,{"isBuffer":require("../node_modules/is-buffer/index.js")})
},{"../node_modules/is-buffer/index.js":1,"./ast":3,"./lexer":94,"./parser":103,"./tokens":119}]},{},[]);
