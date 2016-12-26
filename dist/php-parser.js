/*! php-parser - BSD3 License - 2016-12-27 */

require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
 *       - [Class](#class)
 *       - [Namespace](#namespace)
 *     - [Sys](#sys)
 *       - [Echo](#echo)
 *       - [Print](#print)
 *       - [Isset](#isset)
 *       - [Unset](#unset)
 *       - [Empty](#empty)
 *     - [Declaration](#declaration)
 *       - [Constant](#constant)
 *         - [ClassConstant](#classconstant)
 *       - [Method](#method)
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
  require('./ast/include'),
  require('./ast/inline'),
  require('./ast/isset'),
  require('./ast/literal'),
  require('./ast/magic'),
  require('./ast/method'),
  require('./ast/namespace'),
  require('./ast/number'),
  require('./ast/print'),
  require('./ast/program'),
  require('./ast/shell'),
  require('./ast/string'),
  require('./ast/unset'),
  require('./ast/variable')
].forEach(function (ctor) {
  var kind = ctor.prototype.constructor.name.toLowerCase();
  AST.prototype[kind] = ctor;
});

module.exports = AST;

},{"./ast/array":3,"./ast/assign":4,"./ast/boolean":6,"./ast/class":7,"./ast/classconstant":8,"./ast/clone":9,"./ast/coalesce":10,"./ast/constant":11,"./ast/echo":13,"./ast/empty":14,"./ast/entry":15,"./ast/error":16,"./ast/eval":17,"./ast/exit":18,"./ast/include":21,"./ast/inline":22,"./ast/isset":23,"./ast/literal":24,"./ast/location":25,"./ast/magic":26,"./ast/method":27,"./ast/namespace":28,"./ast/number":30,"./ast/position":31,"./ast/print":32,"./ast/program":33,"./ast/shell":34,"./ast/string":36,"./ast/unset":38,"./ast/variable":39}],3:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Expr = require('./expression');
var KIND = 'array';

/**
 * Defines an array structure
 * @constructor Array
 * @extends {Expression}
 * @property {Entry[]} items
 * @property {boolean} shortForm
 */
var Array = Expr.extends(function Array(shortForm, items, location) {
  Expr.apply(this, [KIND, location]);
  this.items = items;
  this.shortForm = shortForm;
});

module.exports = Array;

},{"./expression":19}],4:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require('./statement');
var KIND = 'assign';

/**
 * Assigns a value to the specified target
 * @constructor Assign
 * @extends {Statement}
 * @property {Expression} left
 * @property {Expression} right
 * @property {String} operator
 */
var Assign = Statement.extends(function Assign(left, right, operator, location) {
  Statement.apply(this, [KIND, location]);
  this.operator = operator;
  this.left = left;
  this.right = right;
});

module.exports = Assign;

},{"./statement":35}],5:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require('./statement');
var KIND = 'block';

/**
 * A block statement, i.e., a sequence of statements surrounded by braces.
 * @constructor Block
 * @extends {Statement}
 * @property {Node[]} children
 */
var Block = Statement.extends(function Block(kind, children, location) {
  Statement.apply(this, [kind || KIND, location]);
  this.children = children;
});

module.exports = Block;

},{"./statement":35}],6:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require('./literal');
var KIND = 'boolean';

/**
 * Defines a boolean value (true/false)
 * @constructor Boolean
 * @extends {Literal}
 */
var Boolean = Literal.extends(function Boolean(value, location) {
  Literal.apply(this, [KIND, value, location]);
});

module.exports = Boolean;

},{"./literal":24}],7:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Block = require('./block');
var KIND = 'class';


/**
 * A class definition
 * @constructor Class
 * @extends {Block}
 * @property {Identifier|null} name
 * @property {Identifier|null} extends
 * @property {Identifier[]} implements
 * @property {boolean} isAnonymous
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 */
var Class = Block.extends(function Class(
  isFinal, isAbstract, name,
  ext, impl, children, location
) {
  Block.apply(this, [KIND, children, location]);
  this.isAnonymous = name ? false : true;
  this.isAbstract = isAbstract;
  this.isFinal = isFinal;
  this.name = name;
  this.extends = ext;
  this.implements = impl;
});

module.exports = Class;

},{"./block":5}],8:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Constant = require('./constant');
var KIND = 'classconstant';

/**
 * Defines a class/interface/trait constant
 * @constructor ClassConstant
 * @extends {Constant}
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 * @property {boolean} isStatic
 * @property {string} visibility
 */
var ClassConstant = Constant.extends(function ClassConstant(name, value, flags, location) {
  Constant.apply(this, [name, value, location]);
  this.type = KIND;
  this.parseFlags(flags);
});

module.exports = ClassConstant;

},{"./constant":11}],9:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require('./statement');
var KIND = 'clone';

/**
 * Defines a clone call
 * @constructor Clone
 * @extends {Statement}
 * @property {Expression} what
 */
var Clone = Statement.extends(function Clone(what, location) {
  Statement.apply(this, [KIND, location]);
  this.what = what;
});

module.exports = Clone;

},{"./statement":35}],10:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require('./statement');
var KIND = 'coalesce';

/**
 * Verify is the test property is defined and is not null, and returns
 * is, otherwise returns the ifnull expression.
 * @constructor Coalesce
 * @extends {Statement}
 * @property {Expression} test - The expression to be testes
 * @property {Expression} ifnull - The returned expression if test is null
 * @see https://wiki.php.net/rfc/isset_ternary
 */
var Coalesce = Statement.extends(function Coalesce(test, ifnull, location) {
  Statement.apply(this, [KIND, location]);
  this.test = test;
  this.ifnull = ifnull;
});

module.exports = Coalesce;

},{"./statement":35}],11:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require('./declaration');
var KIND = 'constant';

/**
 * Defines a namespace constant
 * @constructor Constant
 * @extends {Declaration}
 * @property {string} name
 * @property {Node} value
 */
var Constant = Declaration.extends(function Constant(name, value, location) {
  Declaration.apply(this, [KIND, location]);
  this.name = name;
  this.value = value;
});

module.exports = Constant;

},{"./declaration":12}],12:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require('./statement');
var KIND = 'declaration';

/**
 * A declaration statement (function, class, interface...)
 * @constructor Declaration
 * @extends {Statement}
 */
var Declaration = Statement.extends(function Declaration(kind, location) {
  Statement.apply(this, [kind || KIND, location]);
});

/**
 * Generic flags parser
 * @param {Integer[]} flags
 * @return {void}
 */
Declaration.prototype.parseFlags = function(flags) {
  // @todo
};

module.exports = Declaration;

},{"./statement":35}],13:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require('./sys');
var KIND = 'echo';

/**
 * Defines system based call
 * @constructor Echo
 * @extends {Sys}
 */
var Echo = Sys.extends(function Echo(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Echo;

},{"./sys":37}],14:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require('./sys');
var KIND = 'empty';

/**
 * Defines an empty check call
 * @constructor Empty
 * @extends {Sys}
 */
var Empty = Sys.extends(function Empty(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Empty;

},{"./sys":37}],15:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require('./node');
var KIND = 'entry';

/**
 * An array entry
 * @constructor Entry
 * @extends {Node}
 * @property {Node|null} key
 * @property {Node} value
 */
var Entry = Node.extends(function Entry(key, value, location) {
  Node.apply(this, [KIND, location]);
  this.key = key;
  this.value = value;
});

module.exports = Entry;

},{"./node":29}],16:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require('./node');
var KIND = 'error';


/**
 * Defines an error node (used only on silentMode)
 * @constructor Error
 * @extends {Node}
 * @property {string} message
 * @property {number} line
 * @property {number|string} token
 * @property {string|array} expected
 */
var Error = Node.extends(function Error(message, token, line, expected, location) {
  Node.apply(this, [KIND, location]);
  this.message = message;
  this.token = token;
  this.line = line;
  this.expected = expected;
});

module.exports = Error;

},{"./node":29}],17:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require('./statement');
var KIND = 'eval';

/**
 * Defines an eval statement
 * @constructor Eval
 * @extends {Statement}
 * @property {Node} source
 */
var Eval = Statement.extends(function Eval(source, location) {
  Statement.apply(this, [KIND, location]);
  this.source = source;
});

module.exports = Eval;

},{"./statement":35}],18:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require('./statement');
var KIND = 'exit';

/**
 * Defines an exit / die call
 * @constructor Exit
 * @extends {Statement}
 * @property {Node|null} status
 */
var Exit = Statement.extends(function Exit(status, location) {
  Statement.apply(this, [KIND, location]);
  this.status = status;
});

module.exports = Exit;

},{"./statement":35}],19:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require('./node');
var KIND = 'expression';

/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 * @constructor Expression
 * @extends {Node}
 */
var Expression = Node.extends(function Expression(kind, location) {
  Node.apply(this, [kind || KIND, location]);
});

module.exports = Expression;

},{"./node":29}],20:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require('./node');
var KIND = 'identifier';


/**
 * Defines an identifier node
 * @constructor Identifier
 * @extends {Node}
 * @property {string} name
 * @property {boolean} fqn
 */
var Identifier = Node.extends(function Identifier(name, fqn, location) {
  Node.apply(this, [KIND, location]);
  this.name = Array.isArray(name) ? name.join('\\') : name;
  if (typeof fqn !== 'boolean') {
    this.fqn = this.name[0] === '\\';
  } else {
    this.fqn = fqn;
  }
});

module.exports = Identifier;

},{"./node":29}],21:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require('./statement');
var KIND = 'include';

/**
 * Defines system include call
 * @constructor Include
 * @extends {Statement}
 * @property {Node} target
 * @property {boolean} once
 * @property {boolean} require
 */
var Include = Statement.extends(function Include(once, require, target, location) {
  Statement.apply(this, [KIND, location]);
  this.once = once;
  this.require = require;
  this.target = target;
});

module.exports = Include;

},{"./statement":35}],22:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require('./literal');
var KIND = 'inline';

/**
 * Defines inline html output (treated as echo output)
 * @constructor Inline
 * @extends {Literal}
 */
var Inline = Literal.extends(function Inline(value, location) {
  Literal.apply(this, [KIND, value, location]);
});

module.exports = Inline;

},{"./literal":24}],23:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require('./sys');
var KIND = 'isset';

/**
 * Defines an isset call
 * @constructor Isset
 * @extends {Sys}
 */
var Isset = Sys.extends(function Isset(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Isset;

},{"./sys":37}],24:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Expr = require('./expression');
var KIND = 'literal';

/**
 * Defines an array structure
 * @constructor ArrayExpression
 * @extends {Expression}
 * @property {Node|string|number|boolean|null} value
 */
var Literal = Expr.extends(function Literal(kind, value, location) {
  Expr.apply(this, [kind || KIND, location]);
  this.value = value;
});

module.exports = Literal;

},{"./expression":19}],25:[function(require,module,exports){
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
var Location = function(source, start, end) {
  this.source = source;
  this.start = start;
  this.end = end;
};

module.exports = Location;

},{}],26:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require('./literal');
var KIND = 'magic';

/**
 * Defines magic constant
 * @constructor Magic
 * @extends {Literal}
 */
var Magic = Literal.extends(function Magic(value, location) {
  Literal.apply(this, [KIND, value, location]);
});

module.exports = Magic;

},{"./literal":24}],27:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require('./declaration');
var KIND          = 'method';
var IS_PUBLIC     = 'public';
var IS_PROTECTED  = 'protected';
var IS_PRIVATE    = 'private';
/**
 * Defines a class/interface/trait method
 * @constructor Method
 * @extends {Declaration}
 * @property {string} name
 * @property {Argument[]} arguments
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 * @property {boolean} isStatic
 * @property {string} visibility
 * @property {Node[]} children
 */
var Method = Declaration.extends(function Method(name, args, children, flags, location) {
  Declaration.apply(this, [KIND, location]);
  this.name = name;
  this.arguments = args;
  this.children = children;
  this.parseFlags(flags);
});

module.exports = Method;

},{"./declaration":12}],28:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Block = require('./block');
var Identifier = require('./identifier');
var KIND = 'namespace';

/**
 * The main program node
 * @constructor Namespace
 * @extends {Block}
 * @property {Identifier} name
 * @property {Boolean} withBrackets
 */
var Namespace = Block.extends(function Namespace(name, children, withBrackets, location) {
  Block.apply(this, [KIND, children, location]);
  if (name instanceof Identifier) {
    this.name = name;
  } else {
    this.name = new Identifier(name);
  }
  this.withBrackets = withBrackets || false;
});

module.exports = Namespace;

},{"./block":5,"./identifier":20}],29:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * A generic AST node
 * @constructor Node
 * @property {Location|null} loc
 * @property {String} type
 */
var Node = function Node(type, location) {
  this.type = type;
  this.loc = location ? location : null;
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

},{}],30:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require('./literal');
var KIND = 'number';

/**
 * Defines a numeric value
 * @constructor Number
 * @extends {Literal}
 */
var _Number = Literal.extends(function Number(value, location) {
  Literal.apply(this, [KIND, value, location]);
});

module.exports = _Number;

},{"./literal":24}],31:[function(require,module,exports){
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
var Position = function(line, column, offset) {
  this.line = line;
  this.column = column;
  this.offset = offset;
};

module.exports = Position;

},{}],32:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require('./sys');
var KIND = 'print';

/**
 * Outputs
 * @constructor Print
 * @extends {Sys}
 */
var Print = Sys.extends(function Print(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Print;

},{"./sys":37}],33:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Block = require('./block');
var KIND = 'program';

/**
 * The main program node
 * @constructor Program
 * @extends {Block}
 * @property {Error[]} errors
 */
var Program = Block.extends(function Program(children, errors, location) {
  Block.apply(this, [KIND, children, location]);
  this.errors = errors;
});

module.exports = Program;

},{"./block":5}],34:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require('./literal');
var KIND = 'shell';

/**
 * Defines inline html output (treated as echo output)
 * @constructor Shell
 * @extends {Literal}
 * @see http://php.net/manual/fr/language.operators.execution.php
 */
var Shell = Literal.extends(function Shell(value, location) {
  Literal.apply(this, [KIND, value, location]);
});

module.exports = Shell;

},{"./literal":24}],35:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require('./node');
var KIND = 'statement';

/**
 * Any statement.
 * @constructor Statement
 * @extends {Node}
 */
var Statement = Node.extends(function Statement(kind, location) {
  Node.apply(this, [kind || KIND, location]);
});

module.exports = Statement;

},{"./node":29}],36:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require('./literal');
var KIND = 'string';

/**
 * Defines inline html output (treated as echo output)
 * @constructor String
 * @extends {Literal}
 * @property {boolean} isDoubleQuote

 */
var String = Literal.extends(function String(isDoubleQuote, value, location) {
  Literal.apply(this, [KIND, value, location]);
  this.isDoubleQuote = isDoubleQuote;
});

module.exports = String;

},{"./literal":24}],37:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require('./statement');
var KIND = 'sys';

/**
 * Defines system based call
 * @constructor Sys
 * @extends {Statement}
 * @property {Node[]} arguments
 */
var Sys = Statement.extends(function Sys(kind, args, location) {
  Statement.apply(this, [kind || KIND, location]);
  this.arguments = args;
});

module.exports = Sys;

},{"./statement":35}],38:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require('./sys');
var KIND = 'unset';

/**
 * Deletes references to a list of variables
 * @constructor Unset
 * @extends {Sys}
 */
var Unset = Sys.extends(function Unset(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Unset;

},{"./sys":37}],39:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Expr = require('./expression');
var KIND = 'variable';

/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 * @constructor Variable
 * @extends {Expression}
 * @property {String|Node} identifier
 * @property {boolean} byref
 */
var Variable = Expr.extends(function Variable(identifier, byref, location) {
  Expr.apply(this, [KIND, location]);
  this.identifier = identifier;
  this.byref = byref || false;
});

module.exports = Variable;

},{"./expression":19}],40:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

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
var lexer = function(engine) {
  this.engine = engine;
  this.tok = this.engine.tokens.names;
  this.EOF = 1;
  this.all_tokens = true;
  this.comment_tokens = false;
  this.mode_eval = false;
  this.asp_tags = false;
  this.short_tags = true;
  this.yyprevcol = 0;
  this.keywords = {
    "__class__": this.tok.T_CLASS_C,
    "__trait__": this.tok.T_TRAIT_C,
    "__function__": this.tok.T_FUNC_C,
    "__method__": this.tok.T_METHOD_C,
    "__line__": this.tok.T_LINE,
    "__file__": this.tok.T_FILE,
    "__dir__": this.tok.T_DIR,
    "__namespace__": this.tok.T_NS_C,
    'exit': this.tok.T_EXIT,
    'die': this.tok.T_EXIT,
    'function': this.tok.T_FUNCTION,
    "const": this.tok.T_CONST,
    "return": this.tok.T_RETURN,
    "try": this.tok.T_TRY,
    "catch": this.tok.T_CATCH,
    "finally": this.tok.T_FINALLY,
    "throw": this.tok.T_THROW,
    "if": this.tok.T_IF,
    "elseif": this.tok.T_ELSEIF,
    "endif": this.tok.T_ENDIF,
    "else": this.tok.T_ELSE,
    "while": this.tok.T_WHILE,
    "endwhile": this.tok.T_ENDWHILE,
    "do": this.tok.T_DO,
    "for": this.tok.T_FOR,
    "endfor": this.tok.T_ENDFOR,
    "foreach": this.tok.T_FOREACH,
    "endforeach": this.tok.T_ENDFOREACH,
    "declare": this.tok.T_DECLARE,
    "enddeclare": this.tok.T_ENDDECLARE,
    "instanceof": this.tok.T_INSTANCEOF,
    "as": this.tok.T_AS,
    "switch": this.tok.T_SWITCH,
    "endswitch": this.tok.T_ENDSWITCH,
    "case": this.tok.T_CASE,
    "default": this.tok.T_DEFAULT,
    "break": this.tok.T_BREAK,
    "continue": this.tok.T_CONTINUE,
    "goto": this.tok.T_GOTO,
    "echo": this.tok.T_ECHO,
    "print": this.tok.T_PRINT,
    "class": this.tok.T_CLASS,
    "interface": this.tok.T_INTERFACE,
    "trait": this.tok.T_TRAIT,
    "extends": this.tok.T_EXTENDS,
    "implements": this.tok.T_IMPLEMENTS,
    "new": this.tok.T_NEW,
    "clone": this.tok.T_CLONE,
    "var": this.tok.T_VAR,
    "eval": this.tok.T_EVAL,
    "include": this.tok.T_INCLUDE,
    "include_once": this.tok.T_INCLUDE_ONCE,
    "require": this.tok.T_REQUIRE,
    "require_once": this.tok.T_REQUIRE_ONCE,
    "namespace": this.tok.T_NAMESPACE,
    "use": this.tok.T_USE,
    "insteadof": this.tok.T_INSTEADOF,
    "global": this.tok.T_GLOBAL,
    "isset": this.tok.T_ISSET,
    "empty": this.tok.T_EMPTY,
    "__halt_compiler": this.tok.T_HALT_COMPILER,
    "static": this.tok.T_STATIC,
    "abstract": this.tok.T_ABSTRACT,
    "final": this.tok.T_FINAL,
    "private": this.tok.T_PRIVATE,
    "protected": this.tok.T_PROTECTED,
    "public": this.tok.T_PUBLIC,
    "unset": this.tok.T_UNSET,
    "list": this.tok.T_LIST,
    "array": this.tok.T_ARRAY,
    "callable": this.tok.T_CALLABLE,
    "or": this.tok.T_LOGICAL_OR,
    "and": this.tok.T_LOGICAL_AND,
    "xor": this.tok.T_LOGICAL_XOR
  };
  this.castKeywords = {
    'int': this.tok.T_INT_CAST,
    'integer': this.tok.T_INT_CAST,
    "real": this.tok.T_DOUBLE_CAST,
    "double": this.tok.T_DOUBLE_CAST,
    "float": this.tok.T_DOUBLE_CAST,
    "string": this.tok.T_STRING_CAST,
    "binary": this.tok.T_STRING_CAST,
    "array": this.tok.T_ARRAY_CAST,
    "object": this.tok.T_OBJECT_CAST,
    "bool": this.tok.T_BOOL_CAST,
    "boolean": this.tok.T_BOOL_CAST,
    "unset": this.tok.T_UNSET_CAST
  };
};

/**
 * Initialize the lexer with the specified input
 */
lexer.prototype.setInput = function(input) {
  this._input = input;
  this.size = input.length;
  this.yylineno = 1;
  this.offset = 0;
  this.yyprevcol = 0;
  this.yytext = '';
  this.yylloc = {
    first_offset: 0,
    first_line: 1,
    first_column: 0,
    last_line: 1,
    last_column: 0
  };
  this.tokens = [];
  this.conditionStack = [];
  this.done = this.offset >= this.size;
  if (!this.all_tokens && this.mode_eval) {
    this.begin('ST_IN_SCRIPTING');
  } else {
    this.begin('INITIAL');
  }
  return this;
};


/**
 * consumes and returns one char from the input
 */
lexer.prototype.input = function(size) {
  var ch = this._input[this.offset];
  if (!ch) return '';
  this.yytext += ch;
  this.offset ++;
  if ( ch === '\r' && this._input[this.offset] === '\n' ) {
    this.yytext += '\n';
    this.offset++;
  }
  if (ch === '\n' || ch === '\r') {
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
lexer.prototype.unput = function(size) {
  if (size === 1) {
    // 1 char unput (most cases)
    this.offset --;
    if (this._input[this.offset] === '\n' && this._input[this.offset - 1] === '\r') {
      this.offset --;
      size ++;
    }
    if (this._input[this.offset] === '\r' || this._input[this.offset] === '\n') {
      this.yylloc.last_line --;
      this.yylineno --;
      this.yylloc.last_column = this.yyprevcol;
    }
    this.yytext = this.yytext.substring(0, this.yytext.length - size);
  } else if (size > 0) {
    this.offset -= size;
    if (size < this.yytext.length) {
      this.yytext = this.yytext.substring(0, this.yytext.length - size);
      // re-calculate position
      this.yylloc.last_line = this.yylloc.first_line;
      this.yylloc.last_col = this.yyprevcol = this.yylloc.first_col;
      for(var i = 0; i < this.yytext.length; i++) {
        var c = this.yytext[i];
        if (c === '\r') {
          c = this.yytext[++i];
          this.yyprevcol = this.yylloc.last_col;
          this.yylloc.last_line ++;
          this.yylloc.last_col = 0;
          if (c !== '\n') {
            if (c === '\r') {
              this.yylloc.last_line ++;
            } else {
              this.yylloc.last_col ++;
            }
          }
        } else if (c === '\n') {
          this.yyprevcol = this.yylloc.last_col;
          this.yylloc.last_line ++;
          this.yylloc.last_col = 0;
        } else {
          this.yylloc.last_col ++;
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
lexer.prototype.tryMatch = function(text) {
  return text === this.ahead(text.length);
};

// check if the text matches
lexer.prototype.tryMatchCaseless = function(text) {
  return text === this.ahead(text.length).toLowerCase();
};

// look ahead
lexer.prototype.ahead = function(size) {
  var text = this._input.substring(this.offset, this.offset + size);
  if (text[text.length - 1] === '\r' && this._input[this.offset + size + 1] === '\n') {
    text += '\n';
  }
  return text;
};

// consume the specified size
lexer.prototype.consume = function(size) {
  for(var i = 0; i < size; i++) {
    var ch = this._input[this.offset];
    if (!ch) break;
    this.yytext += ch;
    this.offset ++;
    if ( ch === '\r' && this._input[this.offset] === '\n' ) {
      this.yytext += '\n';
      this.offset++;
      i++;
    }
    if (ch === '\n' || ch === '\r') {
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
lexer.prototype.getState = function() {
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
lexer.prototype.setState = function(state) {
  this.yytext = state.yytext;
  this.offset = state.offset;
  this.yylineno = state.yylineno;
  this.yyprevcol = state.yyprevcol;
  this.yylloc = state.yylloc;
  return this;
};

// prepend next token
lexer.prototype.appendToken = function(value, ahead) {
  this.tokens.push([value, ahead]);
  return this;
};

// return next match that has a token
lexer.prototype.lex = function() {
  var token = this.next() || this.lex();
  if (!this.all_tokens) {
    while(
      token === this.tok.T_WHITESPACE      // ignore white space
      || (
        !this.comment_tokens && (
          token === this.tok.T_COMMENT      // ignore single lines comments
          || token === this.tok.T_DOC_COMMENT  // ignore doc comments
        )
      )
      || (
        !this.mode_eval // ignore open/close tags
        && token === this.tok.T_OPEN_TAG
        //  || token === this.tok.T_CLOSE_TAG
        //  )
      )
    ) {
      token = this.next() || this.lex();
    }
    if (!this.mode_eval && token == this.tok.T_OPEN_TAG_WITH_ECHO) {
      // open tag with echo statement
      return this.tok.T_ECHO;
    }
  }
  return token;
};

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
lexer.prototype.begin = function(condition) {
  this.conditionStack.push(condition);
  this.curCondition = condition;
  this.stateCb = this['match' + condition];
  if (typeof this.stateCb !== 'function') {
    throw new Error('Undefined condition state "'+condition+'"');
  }
  return this;
};

// pop the previously active lexer condition state off the condition stack
lexer.prototype.popState = function() {
  var n = this.conditionStack.length - 1;
  var condition = (n > 0) ? this.conditionStack.pop() : this.conditionStack[0];
  this.curCondition = this.conditionStack[this.conditionStack.length - 1];
  this.stateCb = this['match' + this.curCondition];
  if (typeof this.stateCb !== 'function') {
    throw new Error('Undefined condition state "'+this.curCondition+'"');
  }
  return condition;
};

// return next match in input
lexer.prototype.next = function () {
  var token;
  if (!this._input) {
    this.done = true;
  }
  if (this.done) {
    return this.EOF;
  }
  this.yylloc.first_offset = this.offset;
  this.yylloc.first_line = this.yylloc.last_line;
  this.yylloc.first_column = this.yylloc.last_column;
  this.yytext = '';
  if (this.tokens.length > 0) {
    token = this.tokens.shift();
    if (typeof token[1] === 'object') {
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
  return token;
};


// extends the lexer with states
[
  require('./lexer/comments.js'),
  require('./lexer/initial.js'),
  require('./lexer/numbers.js'),
  require('./lexer/property.js'),
  require('./lexer/scripting.js'),
  require('./lexer/strings.js'),
  require('./lexer/tokens.js'),
  require('./lexer/utils.js')
].forEach(function (ext) {
  for(var k in ext) {
    lexer.prototype[k] = ext[k];
  }
});

module.exports = lexer;

},{"./lexer/comments.js":41,"./lexer/initial.js":42,"./lexer/numbers.js":43,"./lexer/property.js":44,"./lexer/scripting.js":45,"./lexer/strings.js":46,"./lexer/tokens.js":47,"./lexer/utils.js":48}],41:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  T_COMMENT: function() {
    while(this.offset < this.size) {
      var ch = this.input();
      if (ch === '\n' || ch === '\r') {
        return this.tok.T_COMMENT;
      } else if (ch === '?' && !this.aspTagMode && this._input[this.offset] === '>') {
        this.unput(1);
        return this.tok.T_COMMENT;
      } else if (ch === '%' && this.aspTagMode && this._input[this.offset] === '>') {
        this.unput(1);
        return tthis.tok.T_COMMENT;
      }
    }
    return this.tok.T_COMMENT;
  },
  /**
   * Behaviour : https://github.com/php/php-src/blob/master/Zend/zend_language_scanner.l#L1927
   */
  T_DOC_COMMENT: function() {
    var ch = this.input();
    var token = this.tok.T_COMMENT;
    if (ch === '*') { // started with '/*' , check is next is '*'
      ch = this.input();
      if (this.is_WHITESPACE()) { // check if next is WHITESPACE
        token = this.tok.T_DOC_COMMENT;
      }
      if (ch === '/') {
        return token;
      } else {
        this.unput(1); // reset
      }
    }
    while(this.offset < this.size) {
      ch = this.input();
      if (ch === '*' && this._input[this.offset] === '/') {
        this.input();
        break;
      }
    }
    return token;
  }
};

},{}],42:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  nextINITIAL: function() {
    if (
      this.conditionStack.length > 1
      && this.conditionStack[this.conditionStack.length - 1]  === 'INITIAL'
    ) {
      // Return to HEREDOC/ST_DOUBLE_QUOTES mode
      this.popState();
    } else {
      this.begin("ST_IN_SCRIPTING");
    }
    return this;
  },
  matchINITIAL: function() {
    while(this.offset < this.size) {
      var ch = this.input();
      if (ch == '<') {
        ch = this.ahead(1);
        if (ch == '?') {
          if (this.tryMatch('?=')) {
            this.unput(1).appendToken(this.tok.T_OPEN_TAG_WITH_ECHO, 3).nextINITIAL();
            break;
          } else if (this.tryMatchCaseless('?php')) {
            ch = this._input[this.offset + 4];
            if (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
              this.unput(1).appendToken(this.tok.T_OPEN_TAG, 6).nextINITIAL();
              break;
            }
          }
          if (this.short_tags) {
            this.unput(1).appendToken(this.tok.T_OPEN_TAG, 2).nextINITIAL();
            break;
          }
        } else if(this.asp_tags && ch == '%') {
          if (this.tryMatch('%=')) {
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

},{}],43:[function(require,module,exports){
(function (process){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

// DEFINE LONG SIZE
if (process.arch == 'x64') {
  var SIZEOF_LONG = 8;
  var MAX_LENGTH_OF_LONG = 20;
  var long_min_digits = "9223372036854775808";
} else {
  var SIZEOF_LONG = 4;
  var MAX_LENGTH_OF_LONG = 11;
  var long_min_digits = "2147483648";
}

module.exports = {
  consume_NUM: function() {
    var ch = this.yytext[0];
    var hasPoint = this.yytext[0] === '.';
    if (ch === '0') {
      ch = this.input();
      // check if hexa
      if (ch === 'x' || ch === 'X') {
        this.input();
        if (this.is_HEX()) {
          return this.consume_HNUM();
        } else {
          this.unput(2);
        }
      } else if (ch === 'b' || ch === 'B') {
        ch = this.input();
        if (ch === '0' || ch === '1') {
          return this.consume_BNUM();
        } else {
          this.unput(2);
        }
      } else if (!this.is_NUM()) {
        this.unput(1);
      }
    }

    while(this.offset < this.size) {
      ch = this.input();
      if (!this.is_NUM()) {
        if (ch === '.' && !hasPoint) {
          hasPoint = true;
        } else if (ch === 'e' || ch === 'E') {
          ch = this.input();
          if (ch === '+' || ch === '-') {
            ch = this.input();
            if (this.is_NUM()) {
              this.consume_LNUM();
              return this.tok.T_DNUMBER;
            } else {
              this.unput(3);
              break;
            }
          } else if (this.is_NUM()) {
            this.consume_LNUM();
            return this.tok.T_DNUMBER;
          } else {
            this.unput(2);
            break;
          }
        } else {
          this.unput(1);
          break;
        }
      }
    }
    if (hasPoint) {
      return this.tok.T_DNUMBER;
    } else if (this.yytext.length < MAX_LENGTH_OF_LONG - 1) {
      return this.tok.T_LNUMBER;
    } else {
      if (
        this.yytext.length == MAX_LENGTH_OF_LONG
        && this.yytext < long_min_digits
      ) {
        return this.tok.T_LNUMBER;
      }
      return this.tok.T_DNUMBER;
    }
  },
  // read hexa
  consume_HNUM: function() {
    while(this.offset < this.size) {
      this.input();
      if (!this.is_HEX()) {
        this.unput(1);
        break;
      }
    }
    return this.tok.T_LNUMBER;
  },
  // read a generic number
  consume_LNUM: function() {
    while(this.offset < this.size) {
      this.input();
      if (!this.is_NUM()) {
        this.unput(1);
        break;
      }
    }
    return this.tok.T_LNUMBER;
  },
  // read binary
  consume_BNUM: function() {
    var ch;
    while(this.offset < this.size) {
      ch = this.input();
      if (ch !== '0' && ch !== '1') {
        this.unput(1);
        break;
      }
    }
    return this.tok.T_LNUMBER;
  }
};

}).call(this,require('_process'))
},{"_process":1}],44:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  matchST_LOOKING_FOR_PROPERTY: function() {
    var ch = this.input();
    if (ch === '-') {
      ch = this.input();
      if (ch === '>') {
        return this.tok.T_OBJECT_OPERATOR;
      }
      this.unput(1);
    } else if (this.is_LABEL_START()) {
      this.consume_LABEL();
      return this.tok.T_STRING;
    }
    this.popState();
    this.unput(1);
    return false;
  },
  matchST_LOOKING_FOR_VARNAME: function() {
    var ch = this.input();
    if (this.is_LABEL_START()) {
      this.consume_LABEL();
      ch = this.input();
      this.popState();
      if (ch === '[' || ch === '}') {
        this.begin('ST_IN_SCRIPTING');
        this.unput(1);
        return this.tok.T_STRING_VARNAME;
      } else {
        this.unput(this.yytext.length);
        return false;
      }
    } else {
      this.unput(1);
      this.popState();
      this.begin('ST_IN_SCRIPTING');
      // console.log(this.yylineno, 'ST_LOOKING_FOR_VARNAME', this._input[this.offset - 1], this.conditionStack);
      return false;
    }
  },
  matchST_VAR_OFFSET: function() {
    var ch = this.input();
    if (this.is_NUM()) {
      this.consume_NUM();
      return this.tok.T_NUM_STRING;
    } else if (ch === ']') {
      this.popState();
      return ']';
    } else if (ch === '$') {
      this.input();
      if (this.is_LABEL_START()) {
        this.consume_LABEL();
        return this.tok.T_VARIABLE;
      } else {
        throw new Error('Unexpected terminal');
      }
    } else if (this.is_LABEL_START()) {
      this.consume_LABEL();
      return this.tok.T_STRING;
    } else if (this.is_WHITESPACE() || ch === '\\' || ch === '\'' || ch === '#') {
      return this.tok.T_ENCAPSED_AND_WHITESPACE;
    } else if (ch === '[' || ch === '{' || ch === '}' || ch === '"' || ch === '`' || this.is_TOKEN()) {
      return ch;
    } else {
      throw new Error('Unexpected terminal');
    }
  }
};

},{}],45:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  matchST_IN_SCRIPTING: function() {
    var ch = this.input();
    switch(ch) {
      case ' ':
      case '\t':
      case '\n':
      case '\r':
      case '\r\n':
        return this.T_WHITESPACE();
      case '#':
        return this.T_COMMENT();
      case '/':
        if (this._input[this.offset] === '/') {
          return this.T_COMMENT();
        } else if (this._input[this.offset] === '*') {
          this.input();
          return this.T_DOC_COMMENT();
        }
        return this.consume_TOKEN();
      case '\'':
        return this.T_CONSTANT_ENCAPSED_STRING();
      case '"':
        return this.ST_DOUBLE_QUOTES();
      case '`':
        this.begin('ST_BACKQUOTE');
        return '`';
      case '?':
        if (!this.aspTagMode && this.tryMatch('>')) {
          this.input();
          var nextCH = this._input[this.offset];
          if (nextCH === '\n' || nextCH === '\r') this.input();
          if (this.conditionStack.length > 1) {
            this.begin('INITIAL');
          }
          return this.tok.T_CLOSE_TAG;
        }
        return this.consume_TOKEN();
      case '%':
        if (this.aspTagMode && this._input[this.offset] === '>') {
          this.input(); // consume the '>'
          ch = this._input[this.offset]; // read next
          if (ch === '\n' || ch === '\r') {
            this.input(); // consume the newline
          }
          this.aspTagMode = false;
          if (this.conditionStack.length > 1) {
            this.begin('INITIAL');
          }
          return this.tok.T_CLOSE_TAG;
        }
        return this.consume_TOKEN();
      case '{':
        this.begin('ST_IN_SCRIPTING');
        return '{';
      case '}':
        if (this.conditionStack.length > 2) {
          // Return to HEREDOC/ST_DOUBLE_QUOTES mode
          this.popState();
        }
        return '}';
      default:
        if (ch === '.') {
          this.input();
          if (this.is_NUM()) {
            return this.consume_NUM();
          } else {
            this.unput(1);
          }
        }
        if (this.is_NUM()) {
          return this.consume_NUM();
        } else if (this.is_LABEL_START()) {
          return this.consume_LABEL().T_STRING();
        } else if(this.is_TOKEN()) {
          return this.consume_TOKEN();
        }
    }
    throw new Error(
      'Bad terminal sequence "' + ch + '" at line ' + this.yylineno + ' (offset ' + this.offset + ')'
    );
  },

  T_WHITESPACE: function() {
    while(this.offset < this.size) {
      var ch = this.input();
      if (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
        continue;
      }
      this.unput(1);
      break;
    }
    return this.tok.T_WHITESPACE;
  }
};

},{}],46:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  T_CONSTANT_ENCAPSED_STRING: function() {
    var ch;
    while(this.offset < this.size) {
      ch = this.input();
      if (ch == '\\') {
        this.input();
      } else if (ch == '\'') {
        break;
      }
    }
    return this.tok.T_CONSTANT_ENCAPSED_STRING;
  },
  // check if matching a HEREDOC state
  is_HEREDOC: function() {
    var revert = this.offset;
    if (
      this._input[this.offset - 1] === '<'
      && this._input[this.offset] === '<'
      && this._input[this.offset + 1] === '<'
    ) {
      this.offset += 3;

      // optional tabs / spaces
      if (this.is_TABSPACE()) {
        while(this.offset < this.size) {
          this.offset ++;
          if (!this.is_TABSPACE()) {
            break;
          }
        }
      }

      // optional quotes
      var tChar = this._input[this.offset - 1];
      if (tChar === '\'' || tChar === '"') {
        this.offset ++;
      } else {
        tChar = null;
      }

      // required label
      if (this.is_LABEL_START()) {
        var yyoffset = this.offset - 1;
        while(this.offset < this.size) {
          this.offset++;
          if (!this.is_LABEL()) {
            break;
          }
        }
        var yylabel = this._input.substring(yyoffset, this.offset - 1);
        if (!tChar || tChar === this._input[this.offset - 1]) { // required ending quote
          if (tChar) this.offset ++;
          // require newline
          if (this._input[this.offset - 1] === '\r' || this._input[this.offset - 1] === '\n') {
            // go go go
            this.heredoc_label = yylabel;
            yyoffset = this.offset - revert;
            this.offset = revert;
            this.consume(yyoffset);
            if (tChar === '\'') {
              this.begin('ST_NOWDOC');
            } else {
              this.begin('ST_HEREDOC');
            }
            return this.tok.T_START_HEREDOC;
          }
        }
      }
    }
    this.offset = revert;
    return false;
  },
  ST_DOUBLE_QUOTES: function() {
    var ch;
    while(this.offset < this.size) {
      ch = this.input();
      if (ch == '\\') {
        this.input();
      } else if (ch == '"') {
        break;
      } else if (ch == '$') {
        ch = this.input();
        if ( ch == '{' || this.is_LABEL_START()) {
          this.unput(2);
          break;
        }
        this.unput(1);
      } else if (ch == '{') {
        ch = this.input();
        if (ch == '$') {
          this.unput(2);
          break;
        }
        this.unput(1);
      }
    }
    if (ch == '"') {
      return this.tok.T_CONSTANT_ENCAPSED_STRING;
    } else {
      var prefix = 1;
      if (this.yytext[0] === 'b' || this.yytext[0] === 'B') {
        prefix = 2;
      }
      if (this.yytext.length > 2) {
        this.appendToken(
          this.tok.T_ENCAPSED_AND_WHITESPACE,
          this.yytext.length - prefix
        );
      }
      this.unput(this.yytext.length - prefix);
      this.begin("ST_DOUBLE_QUOTES");
      return this.yytext;
    }
  },

  // check if its a DOC end sequence
  isDOC_MATCH: function() {
    // @fixme : check if out of text limits
    if (this._input.substring(this.offset - 1, this.offset - 1 + this.heredoc_label.length) === this.heredoc_label) {
      var ch = this._input[this.offset - 1 + this.heredoc_label.length];
      if (ch === '\n' || ch === '\r' || ch === ';') {
        return true;
      }
    }
    return false;
  },

  matchST_NOWDOC: function() {
    /** edge case : empty now doc **/
    if (this.isDOC_MATCH()) {
      this.consume(this.heredoc_label.length);
      this.popState();
      return this.tok.T_END_HEREDOC;
    }
    /** SCANNING CONTENTS **/
    var ch = this._input[this.offset - 1];
    while(this.offset < this.size) {
      if (ch === '\n' || ch === '\r') {
        ch = this.input();
        if (this.isDOC_MATCH()) {
          this.unput(1).popState();
          this.appendToken(
            this.tok.T_END_HEREDOC, this.heredoc_label.length
          );
          return this.tok.T_ENCAPSED_AND_WHITESPACE;
        }
      }  else {
        ch = this.input();
      }
    }
    // too bad ! reached end of document (will get a parse error)
    return this.tok.T_ENCAPSED_AND_WHITESPACE;
  },

  matchST_HEREDOC: function() {
    /** edge case : empty here doc **/
    var ch = this.input();
    if (this.isDOC_MATCH()) {
      this.consume(this.heredoc_label.length - 1);
      this.popState();
      return this.tok.T_END_HEREDOC;
    }
    /** SCANNING CONTENTS **/
    while(this.offset < this.size) {

      if (ch === '\\') {
        ch = this.input(); // ignore next
        if (ch !== '\n' && ch !== '\r') {
          ch = this.input();
        }
      }

      if (ch === '\n' || ch === '\r') {
        ch = this.input();
        if (this.isDOC_MATCH()) {
          this.unput(1).popState();
          this.appendToken(
            this.tok.T_END_HEREDOC, this.heredoc_label.length
          );
          return this.tok.T_ENCAPSED_AND_WHITESPACE;
        }
      } else if (ch === '$') {
        ch = this.input();
        if (ch === '{') {
          // start of ${
          this.begin('ST_LOOKING_FOR_VARNAME');
          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          }else {
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
      } else if (ch === '{') {
        ch = this.input();
        if (ch === '$') {
          // start of {$...
          this.begin('ST_IN_SCRIPTING');
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

  consume_VARIABLE: function() {
    this.consume_LABEL();
    ch = this.input();
    if (ch == '[') {
      this.unput(1);
      this.begin('ST_VAR_OFFSET');
      return this.tok.T_VARIABLE;
    } else if (ch === '-') {
      if (this.input() === '>') {
        this.input();
        if (this.is_LABEL_START()) {
          this.begin('ST_LOOKING_FOR_PROPERTY');
        }
        this.unput(3);
        return this.tok.T_VARIABLE;
      } else {
        this.unput(2);
      }
     } else {
      this.unput(1);
     }
     return this.tok.T_VARIABLE;
  },
  // HANDLES BACKQUOTES
  matchST_BACKQUOTE: function() {

    var ch = this.input();
    if (ch === '$') {
      ch = this.input();
      if (ch === '{') {
        this.begin('ST_LOOKING_FOR_VARNAME');
        return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
      } else if (this.is_LABEL_START()) {
        var tok = this.consume_VARIABLE();
        return tok;
      }
    } else if (ch === '{') {
      if (this._input[this.offset] === '$') {
        this.begin('ST_IN_SCRIPTING');
        return this.tok.T_CURLY_OPEN;
      }
    } else if (ch === '"') {
      this.popState();
      return '"';
    }

    // any char
    while(this.offset < this.size) {
      if (ch === '\\') {
        this.input();
      } else if (ch === '`') {
        this.unput(1);
        this.popState();
        this.appendToken('`', 1);
        break;
      } else if (ch === '$') {
        ch = this.input();
        if (ch === '{') {
          this.begin('ST_LOOKING_FOR_VARNAME');
          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          }else {
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
        this.unput(1);
      } else if (ch === '{') {
        ch = this.input();
        if (ch === '$') {
          // start of {$...
          this.begin('ST_IN_SCRIPTING');
          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_CURLY_OPEN, 1);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            this.unput(1);
            return this.tok.T_CURLY_OPEN;
          }
        }
        this.unput(1);
      }
      ch = this.input();
    }
    return this.tok.T_ENCAPSED_AND_WHITESPACE;

  },

  matchST_DOUBLE_QUOTES: function() {

    var ch = this.input();
    if (ch === '$') {
      ch = this.input();
      if (ch === '{') {
        this.begin('ST_LOOKING_FOR_VARNAME');
        return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
      } else if (this.is_LABEL_START()) {
        var tok = this.consume_VARIABLE();
        return tok;
      }
    } else if (ch === '{') {
      if (this._input[this.offset] === '$') {
        this.begin('ST_IN_SCRIPTING');
        return this.tok.T_CURLY_OPEN;
      }
    } else if (ch === '"') {
      this.popState();
      return '"';
    }

    // any char
    while(this.offset < this.size) {
      if (ch === '\\') {
        this.input();
      } else if (ch === '"') {
        this.unput(1);
        this.popState();
        this.appendToken('"', 1);
        break;
      } else if (ch === '$') {
        ch = this.input();
        if (ch === '{') {
          this.begin('ST_LOOKING_FOR_VARNAME');
          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          }else {
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
        this.unput(1);
      } else if (ch === '{') {
        ch = this.input();
        if (ch === '$') {
          // start of {$...
          this.begin('ST_IN_SCRIPTING');
          if (this.yytext.length > 2) {
            this.appendToken(this.tok.T_CURLY_OPEN, 1);
            this.unput(2);
            return this.tok.T_ENCAPSED_AND_WHITESPACE;
          } else {
            this.unput(1);
            return this.tok.T_CURLY_OPEN;
          }
        }
        this.unput(1);
      }
      ch = this.input();
    }
    return this.tok.T_ENCAPSED_AND_WHITESPACE;
  }
};

},{}],47:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  T_STRING: function() {
    var token = this.yytext.toLowerCase();
    var id = this.keywords[token];
    if (!id) {
      if (token === 'yield') {
        if (this.tryMatch(' from')) {
          this.consume(5);
          id = this.tok.T_YIELD_FROM;
        } else {
          id = this.tok.T_YIELD;
        }
      } else {
        id = this.tok.T_STRING;
        if (token === 'b' || token === 'B') {
          var ch = this.input(1);
          if (ch === '"') {
            return this.ST_DOUBLE_QUOTES();
          } else if (ch === '\'') {
            return this.T_CONSTANT_ENCAPSED_STRING();
          } else {
            this.unput(1);
          }
        }
      }
    }
    return id;
  },
  // reads a custom token
  consume_TOKEN: function() {
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
    '$': function() {
      this.offset++;
      if (this.is_LABEL_START()) {
        this.offset--;
        this.consume_LABEL();
        return this.tok.T_VARIABLE;
      } else {
        this.offset--;
        return '$';
      }
    },
    '-': function() {
      var nchar = this._input[this.offset];
      if (nchar === '>') {
        this.begin('ST_LOOKING_FOR_PROPERTY').input();
        return this.tok.T_OBJECT_OPERATOR;
      } else if (nchar === '-') {
        this.input();
        return this.tok.T_DEC;
      } else if (nchar === '=') {
        this.input();
        return this.tok.T_MINUS_EQUAL;
      }
      return '-';
    },
    '\\': function() {
      return this.tok.T_NS_SEPARATOR;
    },
    '/': function() {
      if (this._input[this.offset] === '=') {
        this.input();
        return this.tok.T_DIV_EQUAL;
      }
      return '/';
    },
    ':': function() {
      if (this._input[this.offset] === ':') {
        this.input();
        return this.tok.T_DOUBLE_COLON;
      } else {
        return ':';
      }
    },
    '(': function() {
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
        if (castId) {
          this.input();
          if (this.is_TABSPACE()) {
            this.consume_TABSPACE().input();
          }
          if (this._input[this.offset - 1] === ')') {
            return castId;
          }
        }
      }
      // revert the check
      this.unput(this.offset - initial);
      return '(';
    },
    '=': function() {
      var nchar = this._input[this.offset];
      if (nchar === '>') {
        this.input();
        return this.tok.T_DOUBLE_ARROW;
      } else if (nchar === '=') {
        if (this._input[this.offset + 1] === '=') {
          this.consume(2);
          return this.tok.T_IS_IDENTICAL;
        } else {
          this.input();
          return this.tok.T_IS_EQUAL;
        }
      }
      return '=';
    },
    '+': function() {
      var nchar = this._input[this.offset];
      if (nchar === '+') {
        this.input();
        return this.tok.T_INC;
      } else if (nchar === '=') {
        this.input();
        return this.tok.T_PLUS_EQUAL;
      }
      return '+';
    },
    '!': function() {
      if (this._input[this.offset] === '=') {
        if (this._input[this.offset + 1] === '=') {
          this.consume(2);
          return this.tok.T_IS_NOT_IDENTICAL;
        } else {
          this.input();
          return this.tok.T_IS_NOT_EQUAL;
        }
      }
      return '!';
    },
    '?': function() {
      if (this._input[this.offset] === '?') {
        this.input();
        return this.tok.T_COALESCE;
      }
      return '?';
    },
    '<': function() {
      var nchar = this._input[this.offset];
      if (nchar === '<') {
        nchar = this._input[this.offset + 1];
        if (nchar === '=') {
          this.consume(2);
          return this.tok.T_SL_EQUAL;
        } else if (nchar === '<') {
          if (this.is_HEREDOC()) {
            return this.tok.T_START_HEREDOC;
          }
        }
        this.input();
        return this.tok.T_SL;
      } else if (nchar === '=') {
        this.input();
        if (this._input[this.offset] === '>') {
          this.input();
          return this.tok.T_SPACESHIP;
        } else {
          return this.tok.T_IS_SMALLER_OR_EQUAL;
        }
      } else if (nchar === '>') {
        this.input();
        return this.tok.T_IS_NOT_EQUAL;
      }
      return '<';
    },
    '>': function() {
      var nchar = this._input[this.offset];
      if (nchar === '=') {
        this.input();
        return this.tok.T_IS_GREATER_OR_EQUAL;
      } else if (nchar === '>') {
        nchar = this._input[this.offset + 1];
        if (nchar === '=') {
          this.consume(2);
          return this.tok.T_SR_EQUAL;
        } else {
          this.input();
          return this.tok.T_SR;
        }
      }
      return '>';
    },
    '*': function() {
      var nchar = this._input[this.offset];
      if (nchar === '=') {
        this.input();
        return this.tok.T_MUL_EQUAL;
      } else if(nchar === '*') {
        this.input();
        if (this._input[this.offset] === '=') {
          this.input();
          return this.tok.T_POW_EQUAL;
        } else {
          return this.tok.T_POW;
        }
      }
      return '*';
    },
    '.': function() {
      var nchar = this._input[this.offset];
      if (nchar === '=') {
        this.input();
        return this.tok.T_CONCAT_EQUAL;
      } else if (nchar === '.' && this._input[this.offset + 1] === '.') {
        this.consume(2);
        return this.tok.T_ELLIPSIS;
      }
      return '.';
    },
    '%': function() {
      if (this._input[this.offset] === '=') {
        this.input();
        return this.tok.T_MOD_EQUAL;
      }
      return '%';
    },
    '&': function() {
      var nchar = this._input[this.offset];
      if (nchar === '=') {
        this.input();
        return this.tok.T_AND_EQUAL;
      } else if (nchar === '&') {
        this.input();
        return this.tok.T_BOOLEAN_AND;
      }
      return '&';
    },
    '|': function() {
      var nchar = this._input[this.offset];
      if (nchar === '=') {
        this.input();
        return this.tok.T_OR_EQUAL;
      } else if (nchar === '|') {
        this.input();
        return this.tok.T_BOOLEAN_OR;
      }
      return '|';
    },
    '^': function() {
      if (this._input[this.offset] === '=') {
        this.input();
        return this.tok.T_XOR_EQUAL;
      }
      return '^';
    }
  }
};

},{}],48:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
 var tokens = ';:,.\\[]()|^&+-/*=%!~$<>?@';

module.exports = {

  // check if the char can be a numeric
  is_NUM: function() {
    var ch = this._input.charCodeAt(this.offset - 1);
    return ch > 47 && ch < 58;
  },

  // check if current char can be a label
  is_LABEL: function() {
    var ch = this._input.charCodeAt(this.offset - 1);
    return (ch > 96 && ch < 123)
      || (ch > 64 && ch < 91)
      || ch === 95
      || (ch > 47 && ch < 58)
      || ch > 126
    ;
  },

  // check if current char can be a label
  is_LABEL_START: function() {
    var ch = this._input.charCodeAt(this.offset - 1);
    return (ch > 96 && ch < 123)
      || (ch > 64 && ch < 91)
      || ch === 95
      || (ch > 126)
    ;
  },


  // reads each char of the label
  consume_LABEL: function() {
    while(this.offset < this.size) {
      this.input();
      if (!this.is_LABEL()) {
        this.unput(1);
        break;
      }
    }
    return this;
  },

  // check if current char is a token char
  is_TOKEN: function() {
    var ch = this._input[this.offset - 1];
    return tokens.indexOf(ch) !== -1;
  },
  // check if current char is a newline
  is_NEWLINE: function() {
    var ch = this._input[this.offset - 1];
    return ch === '\n' || ch === '\r';
  },
  // check if current char is a whitespace
  is_WHITESPACE: function() {
    var ch = this._input[this.offset - 1];
    return ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r';
  },
  // check if current char is a whitespace (without newlines)
  is_TABSPACE: function() {
    var ch = this._input[this.offset - 1];
    return ch === ' ' || ch === '\t';
  },
  // consume all whitespaces (excluding newlines)
  consume_TABSPACE: function() {
    while(this.offset < this.size) {
      this.input();
      if (!this.is_TABSPACE()) {
        this.unput(1);
        break;
      }
    }
    return this;
  },
  // check if current char can be a hexadecimal number
  is_HEX: function() {
    var ch = this._input.charCodeAt(this.offset - 1);
    return (ch > 47 && ch < 58) || (ch > 64 && ch < 71) || (ch > 96 && ch < 103);
  }
};

},{}],49:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * @private check if argument is a number
 */
function isNumber(n) {
  return n != '.' && n != ',' && !isNaN(parseFloat(n)) && isFinite(n);
}


/**
 * The PHP Parser class
 *
 * @public @constructor {Parser}
 * @property {Integer} EOF
 * @property {Lexer} lexer
 * @property {Integer|String} token
 * @property {Boolean} extractDoc
 * @property {Boolean} debug
 */
var parser = function(lexer, ast) {
  this.lexer = lexer;
  this.ast = ast;
  this.tok = lexer.tok;
  this.EOF = lexer.EOF;
  // Private vars, do not use directly
  this._gracefulProxy = {};
  this._graceful = false;
  this.token = null;
  this.prev = null;
  this.debug = false;
  this.extractDoc = false;
  this.suppressErrors = false;
  this.lastError = false;
  this.startAt = [];
  this.entries = {
    'SCALAR': [
      this.tok.T_CONSTANT_ENCAPSED_STRING,
      this.tok.T_START_HEREDOC,
      this.tok.T_LNUMBER,
      this.tok.T_DNUMBER,
      this.tok.T_STRING,
      this.tok.T_ARRAY,'[',
      this.tok.T_CLASS_C,
      this.tok.T_TRAIT_C,
      this.tok.T_FUNC_C,
      this.tok.T_METHOD_C,
      this.tok.T_LINE,
      this.tok.T_FILE,
      this.tok.T_DIR,
      this.tok.T_NS_C,
      '"',
      'b"',
      'B"',
      '-',
      this.tok.T_NS_SEPARATOR
    ],
    'T_MAGIC_CONST': [
        this.tok.T_CLASS_C,
        this.tok.T_TRAIT_C,
        this.tok.T_FUNC_C,
        this.tok.T_METHOD_C,
        this.tok.T_LINE,
        this.tok.T_FILE,
        this.tok.T_DIR,
        this.tok.T_NS_C
    ],
    'T_MEMBER_FLAGS': [
      this.tok.T_PUBLIC,
      this.tok.T_PRIVATE,
      this.tok.T_PROTECTED,
      this.tok.T_STATIC,
      this.tok.T_ABSTRACT,
      this.tok.T_FINAL
    ],
    'VARIABLE': [
      this.tok.T_VARIABLE,
      '$',
      this.tok.T_NS_SEPARATOR,
      this.tok.T_STRING,
      this.tok.T_STATIC
    ],
    'EOS': [
      ';',
      this.tok.T_CLOSE_TAG,
      this.EOF,
      this.tok.T_INLINE_HTML
    ],
    'EXPR': [
      '@','-','+','!','~','(','`',
      this.tok.T_LIST,
      this.tok.T_CLONE,
      this.tok.T_INC,
      this.tok.T_DEC,
      this.tok.T_NEW,
      this.tok.T_ISSET,
      this.tok.T_EMPTY,
      this.tok.T_INCLUDE,
      this.tok.T_INCLUDE_ONCE,
      this.tok.T_REQUIRE,
      this.tok.T_REQUIRE_ONCE,
      this.tok.T_EVAL,
      this.tok.T_INT_CAST,
      this.tok.T_DOUBLE_CAST,
      this.tok.T_STRING_CAST,
      this.tok.T_ARRAY_CAST,
      this.tok.T_OBJECT_CAST,
      this.tok.T_BOOL_CAST,
      this.tok.T_UNSET_CAST,
      this.tok.T_EXIT,
      this.tok.T_PRINT,
      this.tok.T_YIELD,
      this.tok.T_STATIC,
      this.tok.T_FUNCTION,
      // using VARIABLES :
      this.tok.T_VARIABLE,
      '$',
      this.tok.T_NS_SEPARATOR,
      this.tok.T_STRING,
      // using SCALAR :
      this.tok.T_STRING, // @see variable.js line 45 > conflict with variable = shift/reduce :)
      this.tok.T_CONSTANT_ENCAPSED_STRING,
      this.tok.T_START_HEREDOC,
      this.tok.T_LNUMBER,
      this.tok.T_DNUMBER,
      this.tok.T_ARRAY,'[',
      this.tok.T_CLASS_C,
      this.tok.T_TRAIT_C,
      this.tok.T_FUNC_C,
      this.tok.T_METHOD_C,
      this.tok.T_LINE,
      this.tok.T_FILE,
      this.tok.T_DIR,
      this.tok.T_NS_C
    ]
  };
};

/**
 * helper : gets a token name
 */
parser.prototype.getTokenName = function(token) {
  if (!isNumber(token)) {
    return "'" + token + "'";
  } else {
    if (token == this.EOF) return 'the end of file (EOF)';
    return this.lexer.engine.tokens.values[token];
  }
};

/**
 * main entry point : converts a source code to AST
 */
parser.prototype.parse = function(code) {
  this._errors = [];
  this.currentNamespace = [''];
  this.lexer.setInput(code);
  this.lexer.comment_tokens = this.extractDoc;
  this.length = this.lexer._input.length;
  this.innerList = false;
  var program = this.ast.prepare('program', this);
  var childs = [];
  this.nextWithComments();
  while(this.token != this.EOF) {
    var node = this.read_start();
    if (node !== null && node !== undefined) {
      if (Array.isArray(node)) {
        childs = childs.concat(node);
      } else {
        childs.push(node);
      }
    }
  }
  return program(childs, this._errors);
};

/**
 * Raise an error
 */
parser.prototype.raiseError = function(message, msgExpect, expect, token) {
  if (!this.suppressErrors) {
    throw new Error(message);
  }
  // Error node :
  var node = this.ast.prepare('error', this)(
    message, token, this.lexer.yylloc.first_line, expect
  );
  this._errors.push(node);
  return node;
};

/**
 * handling errors
 */
parser.prototype.error = function(expect) {
  var msg = 'Parse Error : syntax error';
  token = this.getTokenName(this.token);
  if (this.token !== this.EOF) {
    if (isNumber(this.token)) {
      var symbol = this.text();
      if (symbol.length > 10) {
        symbol = symbol.substring(0, 7) + '...';
      }
      token = '\''+symbol+'\' ('+token+')';
    }
    msg += ', unexpected ' + token;
  }
  var msgExpect = '';
  if (expect && !Array.isArray(expect)) {
    if (isNumber(expect) || expect.length === 1) {
      msgExpect = ', expecting ' + this.getTokenName(expect);
    }
    msg += msgExpect;
  }
  this.token !== this.EOF
  return this.raiseError(
    msg + ' on line ' + this.lexer.yylloc.first_line,
    msgExpect,
    expect,
    token
  );
};

/**
 * Creates a new AST node
 */
parser.prototype.node = function(name) {
  return this.ast.prepare(name, this);
};

/**
 * expects an end of statement or end of file
 */
parser.prototype.expectEndOfStatement = function() {
  if (this.token === ';') {
    this.nextWithComments();
    if (this.token === this.tok.T_CLOSE_TAG) {
      // strip close tag (statement already closed with ';')
      this.nextWithComments();
    }
  } else if (this.token === this.tok.T_CLOSE_TAG) {
    this.nextWithComments();
  } else if (this.token !== this.tok.T_INLINE_HTML && this.token !== this.EOF) {
    this.error(';');
  }
  return this;
};

/** outputs some debug information on current token **/
var ignoreStack = ['parser.next', 'parser.nextWithComments'];
parser.prototype.showlog = function() {
  var stack = (new Error()).stack.split('\n');
  var line;
  for (var offset = 2; offset < stack.length; offset ++) {
    line = stack[offset].trim();
    var found = false;
    for(var i = 0; i < ignoreStack.length; i++) {
      if (line.substring(3, 3 + ignoreStack[i].length) === ignoreStack[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      break;
    }
  }

  console.log(
    'Line '
    + this.lexer.yylloc.first_line
    + ' : '
    + this.getTokenName(this.token)
    + ">" + this.lexer.yytext + "<"
    + ' @-->' + line
  );
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
 * @return {Parser|False}
 * @throws Error
 */
parser.prototype.expect = function(token) {
  if (Array.isArray(token)) {
    if (token.indexOf(this.token) === -1) {
      this.error(token);
      return false;
    }
  } else if (this.token != token) {
    this.error(token);
    return false;
  }
  return this;
};

/**
 * Returns the current token contents
 * @return {String}
 */
parser.prototype.text = function() {
  return this.lexer.yytext;
};

/** consume the next token **/
parser.prototype.next = function() {
  if (this.debug) {
    this.showlog();
    this.debug = false;
    this.nextWithComments().ignoreComments();
    this.debug = true;
  } else {
    this.nextWithComments().ignoreComments();
  }
  return this;
};

/** consume comments (if found) **/
parser.prototype.ignoreComments = function() {
  if (this.debug) this.showlog();
  while(this.token === this.tok.T_COMMENT || this.token === this.tok.T_DOC_COMMENT) {
    // IGNORE COMMENTS
    this.nextWithComments();
  }
  return this;
};

/** consume the next token (including doc) **/
parser.prototype.nextWithComments = function() {
  this.prev = [
    this.lexer.yylloc.first_line,
    this.lexer.yylloc.first_column,
    this.lexer.offset
  ];
  this.token = this.lexer.lex() || this.EOF;
  if (this.debug) this.showlog();
  return this;
};

/**
 * Check if token is of specified type
 */
parser.prototype.is = function(type) {
  if (Array.isArray(type)) {
    return type.indexOf(this.token) !== -1;
  } else {
    return this.entries[type].indexOf(this.token) != -1;
  }
};

/** convert an token to ast **/
parser.prototype.read_token = function() {
  var result = this.token;
  if (isNumber(result)) {
    result = [result, this.text(), this.lexer.yylloc.first_line];
  }
  this.next();
  return result;
};

/**
 * Helper : reads a list of tokens / sample : T_STRING ',' T_STRING ...
 * ```ebnf
 * list ::= separator? ( item separator )* item
 * ```
 */
parser.prototype.read_list = function(item, separator, preserveFirstSeparator) {
  var result = [];

  if (this.token == separator) {
    if (preserveFirstSeparator) result.push('');
    this.next();
  }

  if (typeof (item) === "function") {
    do {
      result.push(item.apply(this, []));
      if (this.token != separator) {
        break;
      }
    } while(this.next().token != this.EOF);
  } else {
    result.push(this.expect(item).text());
    while (this.next().token != this.EOF) {
      if (this.token != separator) break;
      // trim current separator & check item
      if (this.next().token != item) break;
      result.push(this.text());
    }
  }
  return result;
};


// extends the parser with syntax files
[
  require('./parser/array.js'),
  require('./parser/class.js'),
  require('./parser/expr.js'),
  require('./parser/function.js'),
  require('./parser/if.js'),
  require('./parser/loops.js'),
  require('./parser/main.js'),
  require('./parser/namespace.js'),
  require('./parser/scalar.js'),
  require('./parser/statement.js'),
  require('./parser/switch.js'),
  require('./parser/try.js'),
  require('./parser/comment.js'),
  require('./parser/variable.js')
].forEach(function (ext) {
  for(var k in ext) {
    parser.prototype[k] = ext[k];
  }
});

module.exports = parser;

},{"./parser/array.js":50,"./parser/class.js":51,"./parser/comment.js":52,"./parser/expr.js":53,"./parser/function.js":54,"./parser/if.js":55,"./parser/loops.js":56,"./parser/main.js":57,"./parser/namespace.js":58,"./parser/scalar.js":59,"./parser/statement.js":60,"./parser/switch.js":61,"./parser/try.js":62,"./parser/variable.js":63}],50:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var ArrayExpr = 'array';
var ArrayEntry = 'entry';

module.exports = {
  /**
   * Parse an array
   * ```ebnf
   * array ::= T_ARRAY '(' array_pair_list ')' |
   *   '[' array_pair_list ']'
   * ```
   */
  read_array: function() {
    var expect = null;
    var shortForm = false;
    var items = [];
    var result = this.node(ArrayExpr);

    if (this.expect([this.tok.T_ARRAY, '[']).token == this.tok.T_ARRAY) {
      this.next().expect('(');
    } else {
      shortForm = true;
    }
    if (this.next().token != expect) {
      while(this.token != this.EOF) {
        items.push(this.read_array_pair_list());
        if (this.token == ',') {
          this.next();
          if (this.token === expect) {
            break;
          }
        } else break;
      }
    }
    this.expect(shortForm ? ']' : ')').next();
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
  read_array_pair_list: function() {
    var result = this.node(ArrayEntry);
    var key = null;
    var value = null;
    if (this.token === '&') {
      value = this.next().read_variable(true, false, true);
    } else {
      var expr = this.read_expr();
      if (this.token === this.tok.T_DOUBLE_ARROW) {
        key = expr;
        if (this.next().token === '&') {
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
  read_dim_offset: function() {
    if (this.token == ']') return false;
    return this.read_expr();
  }
};

},{}],51:[function(require,module,exports){
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
  read_class: function(flag) {
    var result = this.node('class');
    this.expect(this.tok.T_CLASS)
      .next()
      .expect(this.tok.T_STRING)
    ;
    var propName = this.text()
      , propExtends = false
      , propImplements = false
    ;
    if (this.next().token == this.tok.T_EXTENDS) {
      propExtends = this.next().read_namespace_name();
    }
    if (this.token == this.tok.T_IMPLEMENTS) {
      propImplements = this.next().read_list(
        this.read_namespace_name,
        ','
      );
    }
    return result(
      propName
      ,flag
      ,propExtends
      ,propImplements
      ,this.expect('{').nextWithComments().read_class_body()
    );
  }
  /**
   * Read the class visibility
   * ```ebnf
   *   class_scope ::= (T_FINAL | T_ABSTRACT)?
   * ```
   */
  ,read_class_scope: function() {
    var result = this.token;
    if (result == this.tok.T_FINAL) {
      this.next();
      return -1;
    } else if (result == this.tok.T_ABSTRACT) {
      this.next();
      return 1;
    }
    return 0;
  }
  /**
   * Reads a class body
   * ```ebnf
   *   class_body ::= (member_flags? (T_VAR | T_STRING | T_FUNCTION))*
   * ```
   */
  ,read_class_body: function() {
    var result = [];

    while(this.token !== this.EOF && this.token !== '}') {

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
        result = result.concat(
          this.next().read_trait_use_statement()
        );
        continue;
      }

      // read member flags
      var flags = this.read_member_flags(false);

      // check constant
      if (this.token === this.tok.T_CONST) {
        var constants = this.read_constant_list(flags);
        this.expect(';').nextWithComments();
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
        this.expect(';').nextWithComments();

        for(var i = 0; i < variables.length; i++) {
          var variable = variables[i];
          (this.locations ? variable[3] : variable).push(flags);
          result.push(variable);
        }

      } else if (this.token === this.tok.T_FUNCTION) {

        // reads a function
        result.push(this.read_function(false, flags));

      } else {

        // raise an error
        result.push(
          this.error([
            this.tok.T_CONST,
            this.tok.T_VARIABLE,
            this.tok.T_FUNCTION
          ])
        );
        this.next(); // ignore token

      }
    }
    this.expect('}').nextWithComments();
    return result;
  }
  /**
   * Reads variable list
   * ```ebnf
   *  variable_list ::= (variable_declaration ',')* variable_declaration
   * ```
   */
  ,read_variable_list: function() {
    return this.read_list(
      this.read_variable_declaration,
      ','
    );
  }
  /**
   * Reads a variable declaration
   * ```ebnf
   *  variable_declaration ::= T_VARIABLE '=' scalar
   * ```
   */
  ,read_variable_declaration: function() {
    var result = this.node('var');
    var name = this.expect(this.tok.T_VARIABLE).text();
    this.next();
    if (this.token === ';' || this.token === ',') {
      return result(name, null);
    } else if(this.token === '=') {
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L815
      return result(name, this.next().read_expr());
    } else {
      this.expect([',', ';', '=']);
      return result(name, null);
    }
  }
  /**
   * Reads constant list
   * ```ebnf
   *  constant_list ::= T_CONST (constant_declaration ',')* constant_declaration
   * ```
   */
  ,read_constant_list: function(flags) {
    return this.expect(this.tok.T_CONST)
      .next()
      .read_list(
        /**
         * Reads a constant declaration
         *
         * ```ebnf
         *  constant_declaration ::= T_STRING '=' expr
         * ```
         * @return {Constant} [:link:](AST.md#constant)
         */
        function read_constant_declaration() {
          var result = this.node('classconstant');
          var name = this.expect(this.tok.T_STRING).text();
          var value =  this.next().expect('=').next().read_expr();
          return result(name, value, flags);
        }, ','
      )
    ;
  }
  /**
   * Read member flags
   * @return array
   *  1st index : 0 => public, 1 => protected, 2 => private
   *  2nd index : 0 => instance member, 1 => static member
   *  3rd index : 0 => normal, 1 => abstract member, 2 => final member
   */
  ,read_member_flags: function(asInterface) {
    var result = [-1, -1, -1];
    if (this.is('T_MEMBER_FLAGS')) {
      var idx = 0, val = 0;
      do {
        switch(this.token) {
          case this.tok.T_PUBLIC:     idx = 0; val = 0; break;
          case this.tok.T_PROTECTED:  idx = 0; val = 1; break;
          case this.tok.T_PRIVATE:    idx = 0; val = 2; break;
          case this.tok.T_STATIC:     idx = 1; val = 1; break;
          case this.tok.T_ABSTRACT:   idx = 2; val = 1; break;
          case this.tok.T_FINAL:      idx = 2; val = 2; break;
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
      } while(this.next().is('T_MEMBER_FLAGS'));
    }

    if (result[0] == -1) result[0] = 0;
    if (result[1] == -1) result[1] = 0;
    if (result[2] == -1) result[2] = 0;
    return result;
  }
  /**
   * reading an interface
   * ```ebnf
   * interface ::= class_scope? T_INTERFACE T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' INTERFACE_BODY '}'
   * ```
   */
  ,read_interface: function(flag) {
    var result = this.node('interface');
    var name = this.expect(this.tok.T_INTERFACE)
      .next()
      .expect(this.tok.T_STRING)
      .text()
    ;
    var propExtends = false;
    if (this.next().token == this.tok.T_EXTENDS) {
      propExtends =  this.next().read_list(
        this.read_namespace_name,
        ','
      );
    }
    return result(
      name
      , flag
      , propExtends
      , this.expect('{').next().read_interface_body()
    );
  }
  /**
   * Reads an interface body
   * ```ebnf
   *   interface_body ::= (member_flags? (T_CONST | T_FUNCTION))*
   * ```
   */
  ,read_interface_body: function() {
    var result = [];

    while(this.token !== this.EOF && this.token !== '}') {

      if (this.token === this.tok.T_COMMENT) {
        comment = this.read_comment();
        continue;
      }

      if (this.token === this.tok.T_DOC_COMMENT) {
        comment = this.read_doc_comment();
        continue;
      }

      // read member flags
      var flags = this.read_member_flags(true);

      // check constant
      if (this.token == this.tok.T_CONST) {
        var constants = this.read_constant_list(flags);
        this.expect(';').nextWithComments();
        result = result.concat(constants);
      }

      // reads a function
      else if (this.token === this.tok.T_FUNCTION) {
        var method = this.read_function_declaration(2);
        (this.locations ? method[3] : method).push(flags);
        result.push(method);
        this.expect(';').nextWithComments();
      } else {
        // raise an error
        result.push(
          this.error([
            this.tok.T_CONST,
            this.tok.T_FUNCTION
          ])
        );
        this.next();
      }
    }
    this.expect('}').next();
    return result;
  }
  /**
   * reading a trait
   * ```ebnf
   * trait ::= T_TRAIT T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' FUNCTION* '}'
   * ```
   */
  ,read_trait: function(flag) {
    var result = this.node('trait');
    this.expect(this.tok.T_TRAIT)
      .next()
      .expect(this.tok.T_STRING)
    ;
    var propName = this.text(),
      propExtends = false,
      propImplements = false;
    if (this.next().token == this.tok.T_EXTENDS) {
      propExtends = this.next().read_namespace_name();
    }
    if (this.token == this.tok.T_IMPLEMENTS) {
      propImplements = this.next().read_list(
        this.read_namespace_name,
        ','
      );
    }
    return result(
      propName,
      propExtends,
      propImplements,
      this.expect('{').next().read_class_body()
    );
  }
  /**
   * reading a use statement
   * ```ebnf
   * trait_use_statement ::= namespace_name (',' namespace_name)* ('{' trait_use_alias '}')?
   * ```
   */
  ,read_trait_use_statement: function() {
    // defines use statements
    var node = this.node('use');
    var name = this.read_namespace_name();
    var result = [node(name)];
    while(this.token === ',') {
      node = this.node('use');
      name = this.next().read_namespace_name();
      result.push(node(name));
    }
    if (this.token === '{') {
      // defines alias statements
      while(this.next()) {
        if (this.token === '}') break;
        result.push(this.read_trait_use_alias());
        this.expect(';');
      }
      this.expect('}').nextWithComments();
    } else {
      this.expect(';').nextWithComments();
    }
    return result;
  }
  /**
   * Reading trait alias
   * ```ebnf
   * trait_use_alias ::= namespace_name ( T_DOUBLE_COLON T_STRING )? (T_INSTEADOF namespace_name) | (T_AS member_flags? T_STRING)
   * ```
   */
  ,read_trait_use_alias: function() {
    var node = this.node('alias');
    var origin = this.read_namespace_name();
    var act = false;
    var target = false;
    var flags = false;

    if (this.token === this.tok.T_DOUBLE_COLON) {
      origin = [
        'static',
        'get',
        origin,
        this.next().expect(this.tok.T_STRING).text()
      ];
      this.next();
    }

    if (this.token === this.tok.T_INSTEADOF) {
      act = 'insteadof';
      target = this.next().read_namespace_name();
    } else if (this.token === this.tok.T_AS) {
      act = 'as';
      if (this.next().is('T_MEMBER_FLAGS')) {
        flags = this.read_member_flags();
      }
      if (this.token === this.tok.T_STRING) {
        target = this.text();
        this.next();
      } else if (flags === false) {
        // no visibility flags and no name => too bad
        this.expect(this.tok.T_STRING);
      }
    } else {
      this.expect([
        this.tok.T_AS,
        this.tok.T_INSTEADOF
      ]);
    }
    return node(origin, act, target, flags);
  }
};

},{}],52:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  /**
   *  Comments with // or #
   */
  read_comment: function() {
    var result = this.node('comment');
    var input = [this.text()];
    while(this.nextWithComments().token === this.tok.T_COMMENT) {
      input.push(this.text());
    }
    return result(input);
  },
  /**
   * Comments with / ** ** /
   */
  read_doc_comment: function() {
    var result = this.node('doc')(this.text());
    this.nextWithComments();
    return result;
  }
};

},{}],53:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {

  read_expr: function() {
    var expr = this.read_expr_item();
    switch(this.token) {
      // binary operations
      case '|': return this.node('bin')('|', expr, this.next().read_expr());
      case '&': return this.node('bin')('&', expr, this.next().read_expr());
      case '^': return ['bin', '^', expr, this.next().read_expr()];
      case '.': return ['bin', '.', expr, this.next().read_expr()];
      case '+': return ['bin', '+', expr, this.next().read_expr()];
      case '-': return ['bin', '-', expr, this.next().read_expr()];
      case '*': return ['bin', '*', expr, this.next().read_expr()];
      case '/': return ['bin', '/', expr, this.next().read_expr()];
      case '%': return ['bin', '%', expr, this.next().read_expr()];
      case this.tok.T_POW:  return ['bin', '**', expr, this.next().read_expr()];
      case this.tok.T_SL:   return ['bin', '<<', expr, this.next().read_expr()];
      case this.tok.T_SR:   return ['bin', '>>', expr, this.next().read_expr()];

      // boolean operations
      case this.tok.T_BOOLEAN_OR:
      case this.tok.T_LOGICAL_OR:   return ['bool', '|', expr, this.next().read_expr()];

      case this.tok.T_BOOLEAN_AND:
      case this.tok.T_LOGICAL_AND:  return ['bool', '&', expr, this.next().read_expr()];

      case this.tok.T_LOGICAL_XOR:      return ['bool', '^', expr, this.next().read_expr()];
      case this.tok.T_IS_IDENTICAL:     return ['bool', '=', expr, this.next().read_expr()];
      case this.tok.T_IS_NOT_IDENTICAL: return ['bool', '!=', expr, this.next().read_expr()];
      case this.tok.T_IS_EQUAL:         return ['bool', '~', expr, this.next().read_expr()];
      case this.tok.T_IS_NOT_EQUAL:     return ['bool', '!~', expr, this.next().read_expr()];
      case '<':                       return ['bool', '<', expr, this.next().read_expr()];
      case '>':                       return ['bool', '>', expr, this.next().read_expr()];

      case this.tok.T_IS_SMALLER_OR_EQUAL:  return ['bool', '<=', expr, this.next().read_expr()];
      case this.tok.T_IS_GREATER_OR_EQUAL:  return ['bool', '>=', expr, this.next().read_expr()];
      case this.tok.T_SPACESHIP:            return ['bool', '<=>', expr, this.next().read_expr()];
      case this.tok.T_INSTANCEOF:           return ['bool', '?', expr, this.next().read_expr()];

      // extra operations :
      case this.tok.T_COALESCE:
        // $username = $_GET['user'] ?? 'nobody';
        return this.node('coalesce')(
          expr, this.next().read_expr()
        );

      case '?':
        var trueArg = null;
        if (this.next().token !== ':') {
          trueArg = this.read_expr();
        }
        this.expect(':').next();
        return ['retif', expr, trueArg, this.read_expr()];
    }
    return expr;
  }

  /**
   * ```ebnf
   * Reads an expression
   *  expr ::= @todo
   * ```
   */
  ,read_expr_item: function() {

    switch(this.token) {

      case '@':
        return ['silent', this.next().read_expr()];

      case '-':
        var result = this.node();
        this.next();
        if (
          this.token === this.tok.T_LNUMBER ||
          this.token === this.tok.T_DNUMBER
        ) {
          // negative number
          result = result('number', '-' + this.text());
          this.next();
          return result;
        } else {
          return result('unary', '-', this.read_expr());
        }

      case '+':
      case '!':
      case '~':
        return this.node('unary')(this.token, this.read_expr());

      case '(':
        var expr = this.next().read_expr();
        this.expect(')').next();

        // handle dereferencable
        if (this.token === this.tok.T_OBJECT_OPERATOR) {
          return this.recursive_variable_chain_scan(expr, false);
        } else if (this.token === this.tok.T_CURLY_OPEN || this.token === '[') {
          return this.read_dereferencable(expr);
        } else if (this.token === '(') {
          // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1118
          return this.node('call')(
            expr, this.read_function_argument_list()
          );
        } else {
          return expr;
        }

      case '`':
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1048
        var result = this.node('shell');
        var expr = this.next().read_encapsed_string('`');
        return result(expr);

      case this.tok.T_LIST:
        var result = this.node('list');
        this.next().expect('(').next();
        var isInner = this.innerList;

        if (!this.innerList) this.innerList = true;
        var assignList = this.read_assignment_list();

        // check if contains at least one assignment statement
        var hasItem = false;
        for(var i = 0; i < assignList.length; i++) {
          if (assignList[i] !== null) {
            hasItem = true;
            break;
          }
        }
        if (!hasItem) {
          this.raiseError(
            'Fatal Error :  Cannot use empty list on line ' + this.lexer.yylloc.first_line
          );
        }
        this.expect(')').next();

        if (!isInner) {
          this.innerList = false;
          this.expect('=').next();
          return result(assignList, this.read_expr());
        } else {
          return result(assignList, null);
        }

      case this.tok.T_CLONE:
        return this.node('clone')(
          this.next().read_expr()
        );

      case this.tok.T_INC:
        var name = this.next().read_variable(false, false, false);
        return ['set', name, ['bin', '+', name, ['number', 1]]];

      case this.tok.T_DEC:
        var name = this.next().read_variable(false, false, false);
        return ['set', name, ['bin', '-', name, ['number', 1]]];

      case this.tok.T_NEW:
        return this.next().read_new_expr();

      case this.tok.T_ISSET:
        var result = this.node('isset');
        this.next().expect('(').next();
        var args = this.read_list(this.read_expr, ',');
        this.expect(')').next();
        return result(args);

      case this.tok.T_EMPTY:
        var result = this.node('empty');
        this.next().expect('(').next();
        var arg = this.read_expr();
        this.expect(')').next();
        return result([arg]);

      case this.tok.T_INCLUDE:
        return this.node('include')(
          false, false,
          this.next().read_expr()
        );

      case this.tok.T_INCLUDE_ONCE:
        return this.node('include')(
          true, false,
          this.next().read_expr()
        );

      case this.tok.T_REQUIRE:
        return this.node('include')(
          false, true,
          this.next().read_expr()
        );

      case this.tok.T_REQUIRE_ONCE:
        return this.node('include')(
          true, true,
          this.next().read_expr()
        );

      case this.tok.T_EVAL:
        var result = this.node('eval');
        this.next().expect('(').next();
        var expr = this.read_expr();
        this.expect(')').next();
        return result(expr);

      case this.tok.T_INT_CAST:
        return ['cast', 'int', this.next().read_expr()];

      case this.tok.T_DOUBLE_CAST:
        return ['cast', 'double', this.next().read_expr()];

      case this.tok.T_STRING_CAST:
        return ['cast', 'string', this.next().read_expr()];

      case this.tok.T_ARRAY_CAST:
        return ['cast', 'array', this.next().read_expr()];

      case this.tok.T_OBJECT_CAST:
        return ['cast', 'object', this.next().read_expr()];

      case this.tok.T_BOOL_CAST:
        return ['cast', 'boolean', this.next().read_expr()];

      case this.tok.T_UNSET_CAST:
        return this.node('unset')(
          this.next().read_expr()
        );

      case this.tok.T_EXIT:
        var result = this.node('exit');
        var status = null;
        if ( this.next().token === '(' ) {
          if (this.next().token !== ')') {
            status = this.read_expr();
            this.expect(')').next();
          } else {
            this.next();
          }
        }
        return result(status);

      case this.tok.T_PRINT:
        return this.node('print')(
          this.next().read_expr()
        );

      // T_YIELD (expr (T_DOUBLE_ARROW expr)?)?
      case this.tok.T_YIELD:
        var result = ['yield', null, null];
        if (this.next().is('EXPR')) {
          // reads the yield return value
          result[1] = this.read_expr();
          if (this.token === this.tok.T_DOUBLE_ARROW) {
            // reads the yield returned key
            result[2] = this.next().read_expr();
          }
        }
        return result;

      // T_YIELD_FROM expr
      case this.tok.T_YIELD_FROM:
        return ['yieldfrom', this.next().read_expr()];

      case this.tok.T_FUNCTION:
        // @fixme later - removed static lambda function declarations (colides with static keyword usage)
        return this.read_function(true);

    }

    // SCALAR | VARIABLE
    var expr;
    if (this.is('VARIABLE')) {
      expr = this.read_variable(false, false, false);
      // VARIABLES SPECIFIC OPERATIONS
      switch(this.token) {
        case '=':
          var result = this.node('assign');
          var right;
          if (this.next().token == '&') {
            if (this.next().token === this.tok.T_NEW) {
              right = this.next().read_new_expr();
            } else {
              right = this.read_variable(false, false, true);
            }
          } else {
            right = this.read_expr();
          }
          return result(expr, right, '=');

        // operations :
        case this.tok.T_PLUS_EQUAL:
          return ['set', expr, ['bin', '+', expr, this.next().read_expr()]];
        case this.tok.T_MINUS_EQUAL:
          return ['set', expr, ['bin', '-', expr, this.next().read_expr()]];
        case this.tok.T_MUL_EQUAL:
          return ['set', expr, ['bin', '*', expr, this.next().read_expr()]];
        case this.tok.T_POW_EQUAL:
          return ['set', expr, ['bin', '**', expr, this.next().read_expr()]];
        case this.tok.T_DIV_EQUAL:
          return ['set', expr, ['bin', '/', expr, this.next().read_expr()]];
        case this.tok.T_CONCAT_EQUAL:
          // NB : convert as string and add
          return ['set', expr, ['bin', '.', expr, this.next().read_expr()]];
        case this.tok.T_MOD_EQUAL:
          return ['set', expr, ['bin', '%', expr, this.next().read_expr()]];
        case this.tok.T_AND_EQUAL:
          return ['set', expr, ['bin', '&', expr, this.next().read_expr()]];
        case this.tok.T_OR_EQUAL:
          return ['set', expr, ['bin', '|', expr, this.next().read_expr()]];
        case this.tok.T_XOR_EQUAL:
          return ['set', expr, ['bin', '^', expr, this.next().read_expr()]];
        case this.tok.T_SL_EQUAL:
          return ['set', expr, ['bin', '<<', expr, this.next().read_expr()]];
        case this.tok.T_SR_EQUAL:
          return ['set', expr, ['bin', '>>', expr, this.next().read_expr()]];
        case this.tok.T_INC:
          this.next();
          return ['post', '+', expr];
        case this.tok.T_DEC:
          this.next();
          return ['post', '-', expr];
      }
    } else if (this.is('SCALAR')) {
      expr = this.read_scalar();
      // handle dereferencable
      while(this.token !== this.EOF) {
        if (this.token === this.tok.T_OBJECT_OPERATOR) {
          expr = this.recursive_variable_chain_scan(expr, false);
        } else if (this.token === this.tok.T_CURLY_OPEN || this.token === '[') {
          expr = this.read_dereferencable(expr);
        } else if (this.token === '(') {
          // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1118
          expr = this.node('call')(expr, this.read_function_argument_list());
        } else {
          return expr;
        }
      }
    } else {
      expr = this.error('EXPR');
      this.next();
    }

    // returns variable | scalar
    return expr;

  }
  /**
   * ```ebnf
   *    new_expr ::= T_NEW (namespace_name function_argument_list) | (T_CLASS ... class declaration)
   * ```
   * https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L850
   */
  ,read_new_expr: function() {
    var result = this.node('new');
    if (this.token === this.tok.T_CLASS) {
      // Annonymous class declaration
      var propExtends = false, propImplements = false;
      if (this.next().token == this.tok.T_EXTENDS) {
        propExtends = this.next().read_namespace_name();
      }
      if (this.token == this.tok.T_IMPLEMENTS) {
        propImplements = this.next().read_list(
          this.read_namespace_name,
          ','
        );
      }
      return result(
        false           // class name => false : means it's an annonymous class
        ,propExtends
        ,propImplements
        ,this.expect('{').next().read_class_body()
      );
    } else {
      // Already existing class
      var name = this.read_class_name_reference();
      var args = [];
      if (this.token === '(') {
        args = this.read_function_argument_list();
      }
      return result(name, args);
    }
  }
  /**
   * Reads a class name
   * ```ebnf
   * class_name_reference ::= namespace_name | variable
   * ```
   */
  ,read_class_name_reference: function() {
    if (this.token === '\\' || this.token === this.tok.T_STRING) {
      var result = this.read_namespace_name();
      if (this.token === this.tok.T_DOUBLE_COLON) {
        result = this.read_static_getter(result);
      } else {
        result = ['ns', result];
      }
      return result;
    } else if (this.is('VARIABLE')) {
      return this.read_variable(true, false, false);
    } else {
      this.expect([this.tok.T_STRING, 'VARIABLE']);
    }
  }
  /**
   * ```ebnf
   *   assignment_list ::= assignment_list_element (',' assignment_list_element?)*
   * ```
   */
  ,read_assignment_list: function() {
    return this.read_list(
      this.read_assignment_list_element, ','
    );
  }

  /**
   * ```ebnf
   *  assignment_list_element ::= expr | expr T_DOUBLE_ARROW expr
   * ```
   */
  ,read_assignment_list_element: function() {
    if (this.token === ',' || this.token === ')') return null;
    var result = this.read_expr_item();
    if (this.token === this.tok.T_DOUBLE_ARROW) {
      result = [
        'key',
        result,
        this.next().read_expr_item()
      ];
    }
    return result;
  }
};

},{}],54:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * checks if current token is a reference keyword
   */
  is_reference: function() {
    if (this.token == '&') {
      this.next();
      return true;
    }
    return false;
  }
  /**
   * checks if current token is a variadic keyword
   */
  ,is_variadic: function() {
    if (this.token === this.tok.T_ELLIPSIS) {
      this.next();
      return true;
    }
    return false;
  }
  /**
   * reading a function
   * ```ebnf
   * function ::= function_declaration code_block
   * ```
   */
  ,read_function: function(closure, flag) {
    var result = this.node(
      this.read_function_declaration(closure ? 1 : flag ? 2 : 0)
    );
    if (flag && flag[2] == 1) {
      result = result(flag);
      this.expect(';').nextWithComments();
    } else {
      var body = this.expect('{').read_code_block(false);
      if (flag) {
        result = result(body, flag);
      } else {
        result = result(body);
      }
    }
    return result;
  }
  /**
   * reads a function declaration (without his body)
   * ```ebnf
   * function_declaration ::= T_FUNCTION '&'?  T_STRING '(' parameter_list ')'
   * ```
   */
  ,read_function_declaration: function(type) {
    var nodeName = 'function';
    if (type === 1) {
      nodeName = 'closure';
    } else if (type === 2) {
      nodeName = 'method';
    }
    var result = this.node(nodeName);
    this.expect(this.tok.T_FUNCTION);
    var isRef = this.next().is_reference();
    var name = false, use = [], returnType = false;
    if (type !== 1) {
      name = this.expect(this.tok.T_STRING).text();
      this.next();
    }
    this.expect('(').next();
    var params = this.read_parameter_list();
    this.expect(')').next();
    if (type === 1 && this.token === this.tok.T_USE) {
      use = this.next().expect('(').next().read_list(this.read_lexical_var, ',');
      this.expect(')').next();
    }
    if (this.token === ':') {
      returnType = this.next().read_type();
    }
    if (type === 1) {
      return result(params, isRef, use, returnType);
    }
    return result(name, params, isRef, returnType);
  }
  /**
   * ```ebnf
   * lexical_var ::= '&'? T_VARIABLE
   * ```
   */
  ,read_lexical_var: function() {
    var result = [false, null];
    if (this.token === '&') {
      result[0] = true;
      this.next();
    }
    if (this.token === this.tok.T_VARIABLE) {
      result[1] = this.text();
      this.next();
    } else {
      this.expect(['&', this.tok.T_VARIABLE]);
    }
    return result;
  }
  /**
   * reads a list of parameters
   * ```ebnf
   *  parameter_list ::= (parameter ',')* parameter?
   * ```
   */
  ,read_parameter_list: function() {
    var result = [];
    if (this.token != ')') {
      while(this.token != this.EOF) {
        result.push(this.read_parameter());
        if (this.token == ',') {
          this.next();
        } else if (this.token == ')') {
          break;
        } else {
          this.error([',', ')']);
          break;
        }
      }
    }
    return result;
  }
  /**
   * ```ebnf
   *  parameter ::= type? '&'? T_ELLIPSIS? T_VARIABLE ('=' expr)?
   * ```
   * @see https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L640
   */
  ,read_parameter: function() {
    var node = this.node('param');
    var type = this.read_type();
    var isRef = this.is_reference();
    var isVariadic = this.is_variadic();
    var name = this.expect(this.tok.T_VARIABLE).text();
    var value = null;
    if (this.next().token == '=') {
      value = this.next().read_expr();
    }
    return node(name, type, value, isRef, isVariadic);
  }
  /**
   * ```ebnf
   *  function_argument_list ::= '(' (argument_list (',' argument_list)*)? ')'
   * ```
   */
  ,read_function_argument_list: function() {
    var result = [];
    this.expect('(').next();
    if (this.token !== ')') {
      while(this.token != this.EOF) {
        result.push(this.read_argument_list());
        if (this.token === ',') {
          this.next();
        } else break;
      }
    }
    this.expect(')').next();
    return result;
  }
  /**
   * ```ebnf
   *    argument_list ::= T_ELLIPSIS? expr
   * ```
   */
  ,read_argument_list: function() {
    if (this.token === this.tok.T_ELLIPSIS ) {
      return this.node('variadic')(this.next().read_expr());
    }
    return this.read_expr();
  }
  /**
   * read type hinting
   * ```ebnf
   *  type ::= T_ARRAY | T_CALLABLE | namespace_name
   * ```
   */
  ,read_type: function() {
    switch(this.token) {
      case this.tok.T_ARRAY:
        this.next();
        return ['array'];
      case this.tok.T_NS_SEPARATOR:
      case this.tok.T_STRING:
        return this.read_namespace_name();
      case this.tok.T_CALLABLE:
        this.next();
        return ['callable'];
      default:
        return null;
    }
  }
};

},{}],55:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * ```ebnf
   *  if ::= '(' expr ')' ':' ...
   * ```
   */
  read_if: function() {
    var result = this.node('if');
    var cond = this.read_if_expr();
    var body = null;
    var elseCond = false;

    if (this.token === ':') {
      this.next();
      body = [];
      while(this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
        this.ignoreComments();
        if (this.token === this.tok.T_ELSEIF) {
          elseCond = this.next().read_elseif_short();
          break;
        } else if (this.token === this.tok.T_ELSE) {
          elseCond = this.next().read_else_short();
          break;
        }
        body.push(this.read_inner_statement());
      }
      this.ignoreComments().expect(this.tok.T_ENDIF).next().expectEndOfStatement();
    } else {
      body = this.read_statement();
      this.ignoreComments();
      if (this.token === this.tok.T_ELSEIF) {
        elseCond = this.next().read_if();
      } else if (this.token === this.tok.T_ELSE) {
        elseCond = this.next().read_statement();
      }
    }
    return result(cond, body, elseCond);
  },
  /**
   * reads an if expression : '(' expr ')'
   */
  read_if_expr: function() {
    this.expect('(').next();
    var result = this.read_expr();
    this.expect(')').next();
    return result;
  },
  /**
   * reads an elseif (expr): statements
   */
  read_elseif_short: function() {
    var result = this.node('if');
    var cond = this.read_if_expr();
    this.expect(':').next();
    var body = [];
    var elseCond = false;

    while(this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
      if (this.token === this.tok.T_ELSEIF) {
        elseCond = this.next().read_elseif_short();
        break;
      } else if (this.token === this.tok.T_ELSE) {
        elseCond = this.next().read_else_short();
        break;
      }
      body.push(this.read_inner_statement());
    }

    return result(cond, body, elseCond);
  },
  /**
   *
   */
  read_else_short: function() {
    this.expect(':').next();
    var body = [];
    while(this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
      body.push(this.read_inner_statement());
    }
    return body;
  }
};

},{}],56:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * Reads a short form of tokens
   */
  read_short_form: function(token) {
    var body = [];
    this.expect(':').next();
    while(this.token != this.EOF && this.token !== token) {
      body.push(this.read_inner_statement());
    }
    this.expect(token).next().expectEndOfStatement();
    return body;
  }
  /**
   * Reads a while statement
   */
  ,read_while: function() {
    var result = this.node('while');
    this.expect('(').next();
    var cond = this.read_expr();
    this.expect(')').next();
    var body = [];
    if (this.token === ':') {
      body = this.read_short_form(this.tok.T_ENDWHILE);
    } else {
      body = this.read_statement();
    }
    return result(cond, body);
  }
  ,read_do: function() {
    var result = this.node('do');
    var body = this.read_statement();
    this.expect(this.tok.T_WHILE).next().expect('(').next();
    var cond = this.read_expr();
    this.expect(')').next().expect(';').next();
    return result(cond, body);
  }
  ,read_for: function() {
    var result = this.node('for');
    this.expect('(').next();
    var expr1 = null, expr2 = null, expr3 = null;
    if (this.token !== ';') {
      expr1 = this.read_list(this.read_expr, ',');
      this.expect(';').next();
    } else {
      this.next();
    }
    if (this.token !== ';') {
      expr2 = this.read_list(this.read_expr, ',');
      this.expect(';').next();
    } else {
      this.next();
    }
    if (this.token !== ')') {
      expr3 = this.read_list(this.read_expr, ',');
      this.expect(')').next();
    } else {
      this.next();
    }
    var body = null;
    if (this.token === ':') {
      body = this.read_short_form(this.tok.T_ENDFOR);
    } else  {
      body = this.read_statement();
    }
    return result(expr1, expr2, expr3, body);
  }
  /**
   * ```ebnf
   * foreach ::= '(' expr T_AS foreach_variable (T_DOUBLE_ARROW foreach_variable)? ')' statement
   * ```
   */
  ,read_foreach: function() {
    var result = this.node('foreach');
    this.expect('(').next();
    var expr = this.read_expr();
    this.expect(this.tok.T_AS).next();
    var item = this.read_foreach_variable(),
      key = false;
    if (this.token === this.tok.T_DOUBLE_ARROW) {
      key = item;
      item = this.next().read_foreach_variable();
    }
    this.expect(')').next();
    var body = [];
    if (this.token === ':') {
      body = this.read_short_form(this.tok.T_ENDFOREACH);
    } else {
      body = this.read_statement();
    }
    return result(expr, key, item, body);
  }
  /**
   * ```ebnf
   * foreach_variable = ('&'? variable) | (T_LIST '(' assignment_list ')')
   * ```
   */
  ,read_foreach_variable: function() {
      if (this.token === '&') {
        return this.next().read_variable(false, false, true);
      } else if (this.token === this.tok.T_LIST) {
        var result = this.node('list');
        this.next().expect('(').next();
        var assignList = this.read_assignment_list();
        this.expect(')').next();
        return result(assignList, false);
      } else {
        return this.read_variable(false, false, false);
      }
  }
};

},{}],57:[function(require,module,exports){
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
  read_start: function() {
    if (this.token == this.tok.T_NAMESPACE) {
      return this.read_namespace();
    } else {
      return this.read_top_statement();
    }
  }
};

},{}],58:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * ```ebnf
   * namespace ::= T_NAMESPACE namespace_name? '{'
   *    top_statements
   * '}'
   * | T_NAMESPACE namespace_name ';' top_statements
   * ```
   */
  read_namespace: function() {
    this.expect(this.tok.T_NAMESPACE).next();
    var result = this.node('namespace');
    if (this.token == '{') {
      this.currentNamespace = [''];
      return result([''], this.read_code_block(true));
    } else {
      if(this.token === this.tok.T_NAMESPACE) {
        this.error(['{', this.tok.T_STRING]);
        this.next(); // ignore namespace token
      }
      var name = this.read_namespace_name();
      if (this.token == ';') {
        this.currentNamespace = name;
        var body = this.nextWithComments().read_top_statements();
        this.expect(this.EOF);
        return result(name, body);
      } else if (this.token == '{') {
        this.currentNamespace = name;
        return result(name, this.read_code_block(true));
      } else if (this.token === '(') {
        // resolve ambuiguity between namespace & function call
        return this.node('call')(
          ['ns', name.slice(1)]
          , this.read_function_argument_list()
        );
      } else {
        this.error(['{', ';']);
        // graceful mode :
        this.currentNamespace = name;
        var body = this.read_top_statements();
        this.expect(this.EOF);
        return result(name, body);
      }
    }
  }
  /**
   * reading a namespace name
   * ```ebnf
   *  namespace_name ::= T_NS_SEPARATOR? (T_STRING T_NS_SEPARATOR)* T_STRING
   * ```
   */
  ,read_namespace_name: function() {
    if (this.token === this.tok.T_NAMESPACE) {
      this.next().expect(this.tok.T_NS_SEPARATOR).next();
    }
    return this.read_list(this.tok.T_STRING, this.tok.T_NS_SEPARATOR, true);
  }
  /**
   * ```ebnf
   * use_statements ::=
   *      use_statements ',' use_statement
   *      | use_statement
   * ```
   */
  ,read_use_statements: function() {
      var result = [];
      while(this.token !== this.EOF) {
          this.expect(this.tok.T_USE).next();
          this.read_list(this.read_use_statement_mixed, ',').forEach(function(item) {
            if (Array.isArray(item)) {
              result = result.concat(item);
            } else {
              result.push(item);
            }
          });
          if(this.token !== this.tok.T_USE) break;
      }
      return result;
  }
  /**
   * ```ebnf
   *  inline_use_declaration ::= ...
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L375
   */
  ,read_inline_use_declaration: function(prefix) {
    var result = [];
    while(this.token !== this.EOF) {
      var node = this.node('use');
      var ns = this.read_use_statement(prefix[3] !== false);
      if(this.token === this.tok.T_AS) {
        this.next().expect(this.tok.T_STRING);
        ns[1] = this.text();
        this.next();
      }
      ns[0] = prefix[0].concat(ns[0]);
      if (prefix[2] !== false) {
        ns[2] = prefix[2];
      }
      result.push(node.apply(this, ns));
      if(this.token !== ',') {
        break;
      } else {
        this.next();
      }
    }
    return result;
  }
  /**
   * ```ebnf
   *   use_statement_mixed ::=
   *       use_statement  (T_AS T_STRING | '{' read_inline_use_declaration '}' )
   *       (',' read_use_statement)*
   * ```
   */
  ,read_use_statement_mixed: function() {
    var result = this.node('use');
    var use = this.read_use_statement();
    if(this.token === this.tok.T_AS) {
      this.next().expect(this.tok.T_STRING);
      use[1] = this.text();
      this.next();
    } else if (this.token === '{') {
      use = this.next().read_inline_use_declaration(use);
      this.expect('}').next();
      return use;
    }
    return result.apply(this, use);
  }
  /**
   * ```ebnf
   * use_statement ::= (
   *  (T_FUNCTION | T_CONST)? namespace_name
   *  )
   * ```
   */
  ,read_use_statement: function(ignoreType) {
      var type = false;
      if(
        !ignoreType && (this.token === this.tok.T_FUNCTION || this.token === this.tok.T_CONST)
      ) {
        type = this.token === this.tok.T_FUNCTION ? 'function' : 'constant';
        this.next();
      }
      var name = this.read_namespace_name();
      return [name, name[name.length - 1], type];
  }
};

},{}],59:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var specialChar = {
  '\\r': "\r",
  '\\n': "\n",
  '\\t': "\t",
  '\\v': String.fromCharCode(11),
  '\\e': String.fromCharCode(27),
  '\\f': String.fromCharCode(12),
  "\\\\": "\\",
  '\\$': "$",
  '\\"': '"',
  '\\\'': "'"
};

module.exports = {
  /**
   * Unescape special chars
   */
  resolve_special_chars: function(text) {
    return text.replace(
      /\\[rntvef"'\\\$]/g,
      function(seq) {
        return specialChar[seq];
      }
    );
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
  read_scalar: function() {
    if (this.is('T_MAGIC_CONST')) {
      return this.get_magic_constant();
    } else {
      switch(this.token) {

        // TEXTS
        case this.tok.T_CONSTANT_ENCAPSED_STRING:
          var value = this.node('string');
          var text = this.text();
          var isDoubleQuote = false;
          var isBinCast = value[0] === 'b' || value[0] === 'B';
          if (isBinCast) {
            isDoubleQuote = text[1] === '"';
            text = text.substring(2, text.length - 1);
          } else {
            isDoubleQuote = text[0] === '"';
            text = text.substring(1, text.length - 1);
          }
          value = value(isDoubleQuote, this.resolve_special_chars(text));
          if (isBinCast) {
            value = ['cast', 'binary', value];
          }
          this.next();
          if (this.token === this.tok.T_DOUBLE_COLON) {
            // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1151
            return this.read_static_getter(value);
          } else {
            // dirrect string
            return value;
          }
        case this.tok.T_START_HEREDOC:
          return this.next().read_encapsed_string(
            this.tok.T_END_HEREDOC
          );
        case '"':
          return this.next().read_encapsed_string('"');
        case 'b"':
        case 'B"':
          return ['cast', 'binary', this.next().read_encapsed_string('"')];

        // NUMERIC
        case '-':  // long
        case this.tok.T_LNUMBER:  // long
        case this.tok.T_DNUMBER:  // double
          var result = this.node('number');
          var value = this.text();
          if (this.token === '-') {
            this.next().expect([
              this.tok.T_LNUMBER, this.tok.T_DNUMBER
            ]);
            value += this.text();
          }
          result = result(value);
          this.next();
          return result;

        // CONSTANTS
        case this.tok.T_NAMESPACE:
        case this.tok.T_NS_SEPARATOR:
        case this.tok.T_STRING:
          var value = this.read_namespace_name();
          var result = ['constant', value];
          if ( this.token == this.tok.T_DOUBLE_COLON) {
            // class constant  MyClass::CONSTANT
            this.next().expect([this.tok.T_STRING, this.tok.T_CLASS]);
            result[1] = [value, this.text()];
            this.next();
          }
          // CONSTANT ARRAYS OFFSET : MYCONST[1][0]...
          while(this.token === '[') {
            result = ['offset', result, this.next().read_expr()];
            this.expect(']').next();
          }
          return result;

        // ARRAYS
        case this.tok.T_ARRAY:  // array parser
        case '[':             // short array format
          return this.read_array();
        default:
          var err = this.error('SCALAR');
          // graceful mode : ignore token & return error node
          this.next();
          return err;
      }
    }
  }
  /**
   * Handles the dereferencing
   */
  ,read_dereferencable: function(expr) {
    var result;
    if (this.token === '[') {
      result = ['offset', expr, this.next().read_expr()];
      this.expect(']').next();
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      result = ['offset', expr, this.read_encapsed_string_item()];
    }
    return result;
  }
  /**
   * ```ebnf
   * encapsed_string_item ::= T_ENCAPSED_AND_WHITESPACE
   *  | T_DOLLAR_OPEN_CURLY_BRACES expr '}'
   *  | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '}'
   *  | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '[' expr ']' '}'
   *  | variable
   *  | T_CURLY_OPEN variable '}'
   * ```
   */
  ,read_encapsed_string_item: function() {
    var result = null;
    if (this.token === this.tok.T_ENCAPSED_AND_WHITESPACE) {
      result = this.node('string')(false, this.text());
      this.next();
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      if (this.next().token === this.tok.T_STRING_VARNAME) {
        result = ['var', this.text()];
        if (this.next().token === '[') {
          result = ['offset', result, this.next().read_expr()];
          this.expect(']').next();
        }
      } else {
        result = this.read_expr();
      }
      this.expect('}').next();
    } else if (this.token === this.tok.T_CURLY_OPEN) {
      result = this.next().read_variable(false, false, false);
      this.expect('}').next();
    } else if (this.token === '[') {
      result = ['offset', result, this.next().read_expr()];
      this.expect(']').next();
    } else if (this.token === this.tok.T_VARIABLE) {
      result = this.read_variable(false, true, false);
    } else {
      this.expect([
        this.tok.T_VARIABLE,
        this.tok.T_CURLY_OPEN,
        this.tok.T_DOLLAR_OPEN_CURLY_BRACES,
        this.tok.T_ENCAPSED_AND_WHITESPACE
      ])
    }
    return result;
  }
  /**
   * Reads an encapsed string
   */
  ,read_encapsed_string: function(expect) {
    if (this.token === expect) {
      this.next();
      return null; // empty
    }
    var first = this.read_encapsed_string_item();
    if (this.token === expect) {
      this.next();
      return first;
    }
    var result = [
      'bin', '.'
      , first
      , this.read_encapsed_string_item()
    ];
    while(this.token !== expect) {
      result[3] = [
        'bin', '.', result[3], this.read_encapsed_string_item()
      ];
    }
    this.expect(expect).next();
    return result;
  }
  /**
   * Constant token
   */
  ,get_magic_constant: function() {
    var result = this.node('magic');
    var name = this.text();
    this.next();
    return result(name);
  }
};

},{}],60:[function(require,module,exports){
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
  read_top_statements: function() {
    var result = [];
    while(this.token !== this.EOF && this.token !== '}') {
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
  }
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
  ,read_top_statement: function() {
    switch(this.token) {
      case this.tok.T_FUNCTION:
        return this.read_function();
      // optional flags
      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL:
        var flag = this.read_class_scope();
        switch(this.token) {
          case this.tok.T_CLASS:
            return this.read_class(flag);
          case this.tok.T_INTERFACE:
            return this.read_interface(flag);
          default:
            var err = this.error([this.tok.T_CLASS, this.tok.T_INTERFACE]);
            this.next();
            return err;
        }
      case this.tok.T_CLASS:
        return this.read_class(0);
      case this.tok.T_INTERFACE:
        return this.read_interface(0);
      case this.tok.T_TRAIT:
        return this.read_trait();
      case this.tok.T_USE:
        var expr = this.read_use_statements();
        this.expect(';').nextWithComments();
        return expr;
      case this.tok.T_CONST:
        return this.next().read_const_list();
      case this.tok.T_NAMESPACE:
        return this.read_namespace();
      case this.tok.T_HALT_COMPILER:
        var result = this.node('halt');
        this.next().expect('(').next().expect(')').next().expect(';');
        this.lexer.done = true;
        return result(this.lexer._input.substring(
          this.lexer.offset
        ));
      default:
        return this.read_statement();
    }
  }
  /**
   * reads a list of simple inner statements (helper for inner_statement*)
   * ```ebnf
   *  inner_statements ::= inner_statement*
   * ```
   */
  ,read_inner_statements: function() {
    var result = [];
    while(this.token != this.EOF && this.token !== '}') {
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
  }
  /**
   * Reads a list of constants declaration
   * ```ebnf
   *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)* ';'
   * ```
   */
  ,read_const_list: function() {
    var result = this.read_list(function() {
      this.expect(this.tok.T_STRING);
      var result = this.node('constant');
      var name = this.text();
      this.next().expect('=').next();
      return result(name, this.read_expr());
    }, ',', false);
    this.expectEndOfStatement();
    return result;
  }
  /**
   * Reads a list of constants declaration
   * ```ebnf
   *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)*
   * ```
   */
  ,read_declare_list: function() {
    return this.read_list(function() {
      this.expect(this.tok.T_STRING);
      var name = this.text();
      this.next().expect('=').next();
      return [name, this.read_expr()];
    }, ',');
  }
  /**
   * reads a simple inner statement
   * ```ebnf
   *  inner_statement ::= '{' inner_statements '}' | token
   * ```
   */
  ,read_inner_statement: function() {
    switch(this.token) {
      case this.tok.T_FUNCTION:
        return this.read_function();
      // optional flags
      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL:
        var flag = this.read_class_scope();
        switch(this.token) {
          case this.tok.T_CLASS:
            return this.read_class(flag);
          case this.tok.T_INTERFACE:
            return this.read_interface(flag);
          default:
            var err = this.error([this.tok.T_CLASS, this.tok.T_INTERFACE]);
            // graceful mode : ignore token & go next
            this.next();
            return err;
        }
      case this.tok.T_CLASS:
        return this.read_class(0);
      case this.tok.T_INTERFACE:
        return this.read_interface(0);
      case this.tok.T_TRAIT:
        return this.read_trait();
      case this.tok.T_HALT_COMPILER:
        this.next().expect('(').next().expect(')').next().expect(';').next();
        this.raiseError('__HALT_COMPILER() can only be used from the outermost scope');
      default:
        return this.read_statement();
    }
  }
  /**
   * Reads statements
   */
  ,read_statement: function() {

    switch(this.token) {

      case '{': return this.read_code_block(false);

      case this.tok.T_IF: return this.next().read_if();

      case this.tok.T_SWITCH: return this.read_switch();

      case this.tok.T_FOR: return this.next().read_for();

      case this.tok.T_FOREACH: return this.next().read_foreach();

      case this.tok.T_WHILE: return this.next().read_while();

      case this.tok.T_DO: return this.next().read_do();

      case this.tok.T_COMMENT: return this.read_comment();

      case this.tok.T_DOC_COMMENT: return this.read_doc_comment();

      case this.tok.T_RETURN:
      case this.tok.T_BREAK:
      case this.tok.T_CONTINUE:
        var mode;
        switch(this.token) {
          case this.tok.T_RETURN:     mode = 'return';    break;
          case this.tok.T_BREAK:      mode = 'break';     break;
          case this.tok.T_CONTINUE:   mode = 'continue';  break;
        }
        var expr = null;
        if (!this.next().is('EOS')) {
          expr = this.read_expr();
        }
        this.expectEndOfStatement();
        return [mode, expr];

      case this.tok.T_GLOBAL:
        var items = this.next().read_list(this.read_simple_variable, ',');
        this.expectEndOfStatement();
        return ['global', items];

      case this.tok.T_STATIC:
        var current = [this.token, this.lexer.getState()];
        var result = this.node('static');
        if (this.next().token === this.tok.T_DOUBLE_COLON) {
          // static keyword for a class
          this.lexer.tokens.push(current);
          var expr = this.next().read_expr();
          this.expect(';').nextWithComments();
          return expr;
        }
        var items = this.read_list(function() {
          var name = this.expect(this.tok.T_VARIABLE).text();
          var value = null;
          if (this.next().token === '=') {
            value = this.next().read_expr();
          }
          return [name, value];
        }, ',');
        this.expectEndOfStatement();
        return result('declare', items);

      case this.tok.T_ECHO:
        var result = this.node('echo');
        var withParanthesis = (this.next().token === '(');
        withParanthesis && this.next();
        var args = this.read_list(this.read_expr, ',');
        if (withParanthesis) {
          this.expect(')').next();
        }
        this.expectEndOfStatement();
        return result(args);

      case this.tok.T_INLINE_HTML:
        var result = this.node('inline')(this.text());
        this.next();
        return result;

      case this.tok.T_UNSET:
        var result = this.node('unset');
        this.next().expect('(').next();
        var items = this.read_list(this.read_variable, ',');
        if (this.expect(')').next().expect(';')) {
          result = result(items);
          this.nextWithComments();
        } else {
          result = result(items);
        }
        return  result;

      case this.tok.T_DECLARE:
        var result = this.node('declare'), options, body;
        this.next().expect('(').next();
        options = this.read_declare_list();
        this.expect(')').nextWithComments();
        if (this.token === ':') {
          body = [];
          this.next();
          while(this.token != this.EOF && this.token !== this.tok.T_ENDDECLARE) {
            body.push(this.read_statement());
          }
          this.ignoreComments().expect(this.tok.T_ENDDECLARE).next().expectEndOfStatement();
        } else {
          body = this.read_statement();
        }
        return result(options, body);
        break;

      case this.tok.T_TRY:
        return this.read_try();

      case this.tok.T_THROW:
        var result = this.node('throw');
        var expr = this.next().read_expr();
        this.expectEndOfStatement();
        return result(expr);

      case ';': // ignore this (extra ponctuation)
      case this.tok.T_CLOSE_TAG: // empty tag
        this.next();
        return null;

      case this.tok.T_STRING:
        var current = [this.token, this.lexer.getState()];
        var label = this.text();
        if (this.next().token === ':') {
          var result = this.node('label');
          this.next();
          return result(label);
        } else {
          // default fallback expr
          this.lexer.tokens.push(current);
          var expr = this.next().read_expr();
          this.expect([';', this.tok.T_CLOSE_TAG]).nextWithComments();
          return expr;
        }

      case this.tok.T_GOTO:
        var result = this.node('goto');
        var label = this.next().expect(this.tok.T_STRING).text();
        this.next().expectEndOfStatement();
        return result(label);

      default: // default fallback expr
        var expr = this.read_expr();
        this.expectEndOfStatement();
        return expr;
    }
  }
  /**
   * ```ebnf
   *  code_block ::= '{' (inner_statements | top_statements) '}'
   * ```
   */
  ,read_code_block: function(top) {
    this.expect('{').nextWithComments();
    var body = top ?
      this.read_top_statements()
      : this.read_inner_statements()
    ;
    this.expect('}').nextWithComments();
    return body;
  }
};

},{}],61:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  /**
   * Reads a switch statement
   * ```ebnf
   *  switch ::= T_SWITCH '(' expr ')' switch_case_list
   * ```
   */
  read_switch: function() {
    this.expect(this.tok.T_SWITCH).next();
    var result = this.node('switch');
    this.expect('(').next();
    var expr = this.read_expr();
    this.expect(')').next();
    var cases = this.read_switch_case_list();
    return result(expr, cases);
  }
  /**
   * ```ebnf
   *  switch_case_list ::= '{' ';'? case_list* '}' | ':' ';'? case_list* T_ENDSWITCH ';'
   * ```
   */
  ,read_switch_case_list: function() {
    // DETECT SWITCH MODE
    var expect = null, result = [];
    if (this.token === '{') {
      expect = '}';
    } else if (this.token === ':') {
      expect = this.tok.T_ENDSWITCH;
    } else {
      this.expect(['{', ':']);
    }
    // OPTIONNAL ';'
    this.next();
    if (this.token === ';') {
      // why ? it's compliant with spec but why ... wtf ?
      this.next();
    }
    // IGNORE THE CLOSE TAG TOKEN WITH SHORT MODE
    if (this.token === this.tok.T_CLOSE_TAG) {
      this.next();
    }
    // EXTRACTING CASES
    while(this.token !== this.EOF && this.token !== expect) {
      result.push( this.read_case_list(expect) );
    }
    // CHECK END TOKEN
    this.expect(expect).next();
    if (expect === this.tok.T_ENDSWITCH) {
      this.expectEndOfStatement();
    }
    return result;
  }
  /**
   * ```ebnf
   *   case_list ::= ((T_CASE expr) | T_DEFAULT) (':' | ';') inner_statement*
   * ```
   */
  ,read_case_list: function(stopToken) {
    var result = {
      condition: false,
      body: []
    };
    if (this.token === this.tok.T_CASE) {
      result.condition = this.next().read_expr();
    } else if (this.token === this.tok.T_DEFAULT) {
      // the defaut entry - no condition
      this.next();
    } else {
      this.expect([this.tok.T_CASE, this.tok.T_DEFAULT]);
    }
    this.expect([':', ';']).next();
    while(
      this.token != this.EOF
      && this.token !== stopToken
      && this.token !== this.tok.T_CASE
      && this.token !== this.tok.T_DEFAULT
    ) {
      result.body.push(this.read_inner_statement());
    }
    return result;
  }
};

},{}],62:[function(require,module,exports){
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
   */
  read_try: function() {

    // @todo implement the short form of declarations
    this.expect(this.tok.T_TRY);
    var result = this.node('try');
    var code = this.nextWithComments().read_statement();
    var allways = false;
    var catches = [];

    this.ignoreComments();
    while(this.token === this.tok.T_CATCH) {
      this.next().expect('(').next();
      var exName = this.read_namespace_name();
      var varName = this.read_variable(true, false, false);
      this.expect(')').nextWithComments();
      catches.push({
        exception: exName,
        as: varName,
        body: this.read_statement()
      });
      this.ignoreComments();
    }
    if (this.token === this.tok.T_FINALLY) {
      allways = this.nextWithComments().read_statement();
    }
    return result(code, catches, allways);
  }
};

},{}],63:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  /**
   * Reads a variable
   *
   * ```ebnf
   *   variable ::= ...complex @todo
   * ```
   *
   * Some samples of parsed code :
   * ```php
   *  $var                      // simple var
   *  classname::CONST_NAME     // dynamic class name with const retrieval
   *  foo()                     // function call
   *  $var->func()->property    // chained calls
   * ```
   */
  read_variable: function(read_only, encapsed, byref) {
    var result;

    // reads the entry point
    if (this.is([this.tok.T_VARIABLE, '$'])) {
      result = this.read_reference_variable(encapsed, byref);
    } else if (this.is([this.tok.T_NS_SEPARATOR, this.tok.T_STRING])) {
      result = this.node();
      var name = this.read_namespace_name();
      if (
        this.token != this.tok.T_DOUBLE_COLON
        && this.token != '('
      ) {
        // @see parser.js line 130 : resolves a conflict with scalar
        if (name.length == 1) {
          var literal = name[0].toLowerCase();
          if (literal === 'true') {
            result = result('boolean', true);
          } else if (literal === 'false') {
            result = result('boolean', false);
          } else {
            // @todo
            result = ['constant', name[0]];
          }
        } else {
          // @todo
          result = ['constant', name];
        }
      } else {
        result = ['ns', result];
      }
    } else if (this.token === this.tok.T_STATIC) {
      this.next();
      result = ['ns', ['static']];
    } else {
      this.expect('VARIABLE');
    }

    // static mode
    if (this.token === this.tok.T_DOUBLE_COLON) {
      result = this.read_static_getter(result, encapsed);
    }

    return this.recursive_variable_chain_scan(result, read_only, encapsed);
  }

  // resolves a static call
  ,read_static_getter: function(from, encapsed) {
    var getter = null;
    if (this.next().is([this.tok.T_VARIABLE, '$'])) {
      getter = this.read_reference_variable(encapsed, false);
    } else if (
      this.token === this.tok.T_STRING
      || this.token === this.tok.T_CLASS
    ) {
      getter = this.text();
      this.next();
    } else {
      getter = this.error([this.tok.T_VARIABLE, this.tok.T_STRING]);
      // graceful mode : set getter as error node and continue
      this.next();
    }
    if (from[0] != 'ns') {
      from = ['lookup', 'class', from];
    }
    return ['static', 'get', from, getter];
  }

  ,recursive_variable_chain_scan: function(result, read_only, encapsed) {
    recursive_scan_loop:
    while(this.token != this.EOF) {
      switch(this.token) {
        case '(':
          if (read_only) {
            return result;
          } else {
            result = ['call', result,  this.read_function_argument_list()];
          }
          break;
        case '[':
          this.next();
          var offset = false;
          if (encapsed) {
            offset = this.read_encaps_var_offset();
            this.expect(']').next();
          } else {
            // callable_variable : https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1122
            if (this.token !== ']') {
              offset = this.read_expr();
              this.expect(']').next();
            } else {
              this.next();
            }
          }
          result = ['offset', result, offset];
          break;
        case this.tok.T_OBJECT_OPERATOR:
          var what;
          switch(this.next().token) {
            case this.tok.T_STRING:
              what = ['string', this.text()];
              var tok = this.next().token;
              if (tok === this.tok.T_VARIABLE) {
                // fix $obj->var_$prop
                what = ['bin', '.', what, ['var', this.text()]];
              } else if (tok === '{') {
                // fix $obj->var_{$prop}
                what = ['bin', '.', what, this.next().read_expr()];
                this.expect('}').next();
              }
              break;
            case this.tok.T_VARIABLE:
              what = ['var', this.text()];
              this.next();
              break;
            case '$':

              this.next().expect(['{', this.tok.T_VARIABLE]);
              if (this.token === '{') {
                // $obj->${$varname}
                what = this.next().read_expr();
                this.expect('}').next();
              } else {
                // $obj->$$varname
                what = this.read_expr();
              }
              break;
            case '{':
              what = this.next().read_expr();
              this.expect('}').next();
              break;
            default:
              what = this.error([this.tok.T_STRING, this.tok.T_VARIABLE]);
              // graceful mode : set what as error mode & continue
              this.next();
              break;
          }
          result = ['prop', result, what];
          break;
        default:
          break recursive_scan_loop;
      }
    }
    return result;
  }
  /**
   * https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1231
   */
  ,read_encaps_var_offset: function() {
    var offset = this.node();
    if (this.token === this.tok.T_STRING) {
      var text = this.text();
      var isDblQuote = text[0] === '"';
      text = text.substring(1, text.length - 1);
      offset = offset(
        'string', isDblQuote, this.resolve_special_chars(text)
      );
    } else if (this.token === this.tok.T_NUM_STRING) {
      offset = offset('number', this.text());
    } else if (this.token === this.tok.T_VARIABLE) {
      offset = offset('variable', this.text());
    } else {
      this.expect([
        this.tok.T_STRING,
        this.tok.T_NUM_STRING,
        this.tok.T_VARIABLE
      ]);
    }
    this.next();
    return offset;
  }
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
  ,read_reference_variable: function(encapsed, byref) {
    var result = this.read_simple_variable(byref);
    while(this.token != this.EOF) {
      if (this.token == '[') {
        if (encapsed) {
          result = this.next().read_encaps_var_offset();
        } else {
          var offset = this.next().token === ']' ? null : this.read_dim_offset();
          result = ['offset', result, offset];
        }
        this.expect(']').next();
      } else if (this.token == '{' && !encapsed) {
        result = ['offset', result, this.next().read_expr()];
        this.expect('}').next();
      } else break;
    }
    return result;
  }
  /**
   * ```ebnf
   *  simple_variable ::= T_VARIABLE | '$' '{' expr '}' | '$' simple_variable
   * ```
   */
  ,read_simple_variable: function(byref) {
    var result = this.node('variable');
    if (this.expect([this.tok.T_VARIABLE, '$']).token === this.tok.T_VARIABLE) {
      // plain variable name
      result = result(this.text(), byref);
      this.next();
    } else {
      // dynamic variable name
      switch(this.next().token) {
        case '{':
          result = this.next().read_expr();
          this.expect('}').next();
          break;
        case '$': // $$$var
          result = ['lookup', 'var', this.read_simple_variable(false)];
          break;
        case this.tok.T_VARIABLE: // $$var
          result = ['var', this.text()];
          this.next();
          break;
        default:
          result = this.error(['{', '$', this.tok.T_VARIABLE]);
          // graceful mode
          this.next();
      }
      result = ['lookup', 'var', result];
    }
    return result;
  }
};

},{}],64:[function(require,module,exports){
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

// exports token index
module.exports = {
  values: {
    101: 'T_HALT_COMPILER',
    102: 'T_USE',
    103: 'T_ENCAPSED_AND_WHITESPACE',
    104: 'T_OBJECT_OPERATOR',
    105: 'T_STRING',
    106: 'T_DOLLAR_OPEN_CURLY_BRACES',
    107: 'T_STRING_VARNAME',
    108: 'T_CURLY_OPEN',
    109: 'T_NUM_STRING',
    110: 'T_ISSET',
    111: 'T_EMPTY',
    112: 'T_INCLUDE',
    113: 'T_INCLUDE_ONCE',
    114: 'T_EVAL',
    115: 'T_REQUIRE',
    116: 'T_REQUIRE_ONCE',
    117: 'T_NAMESPACE',
    118: 'T_NS_SEPARATOR',
    119: 'T_AS',
    120: 'T_IF',
    121: 'T_ENDIF',
    122: 'T_WHILE',
    123: 'T_DO',
    124: 'T_FOR',
    125: 'T_SWITCH',
    126: 'T_BREAK',
    127: 'T_CONTINUE',
    128: 'T_RETURN',
    129: 'T_GLOBAL',
    130: 'T_STATIC',
    131: 'T_ECHO',
    132: 'T_INLINE_HTML',
    133: 'T_UNSET',
    134: 'T_FOREACH',
    135: 'T_DECLARE',
    136: 'T_TRY',
    137: 'T_THROW',
    138: 'T_GOTO',
    139: 'T_FINALLY',
    140: 'T_CATCH',
    141: 'T_ENDDECLARE',
    142: 'T_LIST',
    143: 'T_CLONE',
    144: 'T_PLUS_EQUAL',
    145: 'T_MINUS_EQUAL',
    146: 'T_MUL_EQUAL',
    147: 'T_DIV_EQUAL',
    148: 'T_CONCAT_EQUAL',
    149: 'T_MOD_EQUAL',
    150: 'T_AND_EQUAL',
    151: 'T_OR_EQUAL',
    152: 'T_XOR_EQUAL',
    153: 'T_SL_EQUAL',
    154: 'T_SR_EQUAL',
    155: 'T_INC',
    156: 'T_DEC',
    157: 'T_BOOLEAN_OR',
    158: 'T_BOOLEAN_AND',
    159: 'T_LOGICAL_OR',
    160: 'T_LOGICAL_AND',
    161: 'T_LOGICAL_XOR',
    162: 'T_SL',
    163: 'T_SR',
    164: 'T_IS_IDENTICAL',
    165: 'T_IS_NOT_IDENTICAL',
    166: 'T_IS_EQUAL',
    167: 'T_IS_NOT_EQUAL',
    168: 'T_IS_SMALLER_OR_EQUAL',
    169: 'T_IS_GREATER_OR_EQUAL',
    170: 'T_INSTANCEOF',
    171: 'T_INT_CAST',
    172: 'T_DOUBLE_CAST',
    173: 'T_STRING_CAST',
    174: 'T_ARRAY_CAST',
    175: 'T_OBJECT_CAST',
    176: 'T_BOOL_CAST',
    177: 'T_UNSET_CAST',
    178: 'T_EXIT',
    179: 'T_PRINT',
    180: 'T_YIELD',
    181: 'T_YIELD_FROM',
    182: 'T_FUNCTION',
    183: 'T_DOUBLE_ARROW',
    184: 'T_DOUBLE_COLON',
    185: 'T_ARRAY',
    186: 'T_CALLABLE',
    187: 'T_CLASS',
    188: 'T_ABSTRACT',
    189: 'T_TRAIT',
    190: 'T_FINAL',
    191: 'T_EXTENDS',
    192: 'T_INTERFACE',
    193: 'T_IMPLEMENTS',
    194: 'T_VAR',
    195: 'T_PUBLIC',
    196: 'T_PROTECTED',
    197: 'T_PRIVATE',
    198: 'T_CONST',
    199: 'T_NEW',
    200: 'T_INSTEADOF',
    201: 'T_ELSEIF',
    202: 'T_ELSE',
    203: 'T_ENDSWITCH',
    204: 'T_CASE',
    205: 'T_DEFAULT',
    206: 'T_ENDFOR',
    207: 'T_ENDFOREACH',
    208: 'T_ENDWHILE',
    209: 'T_CONSTANT_ENCAPSED_STRING',
    210: 'T_LNUMBER',
    211: 'T_DNUMBER',
    212: 'T_LINE',
    213: 'T_FILE',
    214: 'T_DIR',
    215: 'T_TRAIT_C',
    216: 'T_METHOD_C',
    217: 'T_FUNC_C',
    218: 'T_NS_C',
    219: 'T_START_HEREDOC',
    220: 'T_END_HEREDOC',
    221: 'T_CLASS_C',
    222: 'T_VARIABLE',
    223: 'T_OPEN_TAG',
    224: 'T_OPEN_TAG_WITH_ECHO',
    225: 'T_CLOSE_TAG',
    226: 'T_WHITESPACE',
    227: 'T_COMMENT',
    228: 'T_DOC_COMMENT',
    229: 'T_ELLIPSIS',
    230: 'T_COALESCE',
    231: 'T_POW',
    232: 'T_POW_EQUAL',
    233: 'T_SPACESHIP'
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
/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var lexer = require('./lexer');
var parser = require('./parser');
var tokens = require('./tokens');
var AST = require('./ast');

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
    } else if (typeof val === 'function') {
      to[k] = val.bind(to);
    } else if (Array.isArray(val)) {
      to[k] = Array.isArray(to[k]) ? to[k].concat(val) : val;
    } else if (typeof val === 'object') {
      to[k] = typeof to[k] === 'object' ? combine(val, to[k]) : val;
    } else {
      to[k] = val;
    }
  }
  return to;
}

/**
 * @constructor {Engine}
 * @param {Object} options
 * @property {Lexer} lexer
 * @property {Parser} parser
 * @property {AST} ast
 * @property {Object} tokens
 */
var engine = function(options) {
  if (typeof this === 'function') {
    return new this(options);
  }
  this.tokens = tokens;
  this.lexer = new lexer(this);
  this.ast = new AST();
  this.parser = new parser(this.lexer, this.ast);
  if (options && typeof options === 'object') {
    combine(options, this);
  }
};

/**
 * Creates a new instance
 * @param {Object} options
 * @return {Engine}
 */
engine.create = function(options) {
  return new engine(options);
};

/**
 * Evaluate the buffer
 */
engine.parseEval = function(buffer, options) {
  var self = new engine(options);
  return self.parseEval(buffer);
};

/**
 * parsing eval string as '$x = 1;'
 * @return {Array}
 */
engine.prototype.parseEval = function(buffer) {
  this.lexer.mode_eval = true;
  this.lexer.all_tokens = false;
  return this.parser.parse(buffer);
};

/**
 * parse php code with '<?php $x = 1;'
 */
engine.parseCode = function(buffer, options) {
  var self = new engine(options);
  return self.parseCode(buffer);
};

/**
 * parse php code with '<?php $x = 1;'
 */
engine.prototype.parseCode = function(buffer) {
  this.lexer.mode_eval = false;
  this.lexer.all_tokens = false;
  return this.parser.parse(buffer);
};

/**
 * split the buffer into tokens
 */
engine.tokenGetAll = function(buffer, options) {
  var self = new engine(options);
  return self.tokenGetAll(buffer);
};

/**
 * split the buffer into tokens
 */
engine.prototype.tokenGetAll = function(buffer) {
  this.lexer.mode_eval = false;
  this.lexer.all_tokens = true;
  var EOF = this.lexer.EOF;
  var names = this.tokens.values;
  this.lexer.setInput(buffer);
  var token = this.lexer.lex() || EOF;
  var result = [];
  while(token != EOF) {
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

},{"./ast":2,"./lexer":40,"./parser":49,"./tokens":64}]},{},[]);
