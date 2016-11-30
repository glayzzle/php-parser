/*! php-parser - BSD3 License - 2016-11-30 */

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
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],3:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],4:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":3,"_process":1,"inherits":2}],5:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
 
/**
 * Expose the lexer constructor
 */
module.exports = function(engine) {

  var tokens = engine.tokens.names;
  
  var api = {
    EOF:1,
    // defines if all tokens must be retrieved (used by token_get_all only)
    all_tokens: true,
    // extracts comments tokens
    comment_tokens: false,
    // enables the evald mode (ignore opening tags)
    mode_eval: false,
    // disables by default asp tags mode
    asp_tags: false,
    // enables by default short tags mode
    short_tags: true,
    // las column
    yyprevcol: 0,
    // initialize the lexer with the specified input
    setInput: function(input) {
      this._input = input;
      this.size = input.length;
      this.yylineno = 1;
      this.offset = 0;
      this.yyprevcol = 0;
      this.yytext = '';
      this.yylloc = {
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
    },
    // consumes and returns one char from the input
    input: function(size) {
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
    },
    // revert eating specified size
    unput: function(size) {
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
    },
    // check if the text matches
    tryMatch: function(text) {
      return text === this.ahead(text.length);
    },
    // check if the text matches
    tryMatchCaseless: function(text) {
      return text === this.ahead(text.length).toLowerCase();
    },
    // look ahead
    ahead: function(size) {
      var text = this._input.substring(this.offset, this.offset + size);
      if (text[text.length - 1] === '\r' && this._input[this.offset + size + 1] === '\n') {
        text += '\n';
      }
      return text;
    },
    // consume the specified size
    consume: function(size) {
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
    },
    /**
     * Gets the current state
     */
    getState: function() {
      return {
        yytext: this.yytext,
        offset: this.offset,
        yylineno: this.yylineno,
        yyprevcol: this.yyprevcol,
        yylloc: {
          first_line: this.yylloc.first_line,
          first_column: this.yylloc.first_column,
          last_line: this.yylloc.last_line,
          last_column: this.yylloc.last_column
        }
      };
    },
    /**
     * Sets the current lexer state
     */
    setState: function(state) {
      this.yytext = state.yytext;
      this.offset = state.offset;
      this.yylineno = state.yylineno;
      this.yyprevcol = state.yyprevcol;
      this.yylloc = state.yylloc;
      return this;
    },
    
    // prepend next token
    appendToken: function(value, ahead) {
      this.tokens.push([value, ahead]);
      return this;
    },
    // return next match that has a token
    lex: function() {
      var token = this.next() || this.lex();
      if (!this.all_tokens) {
        while(
          token === tokens.T_WHITESPACE      // ignore white space
          || (
            !this.comment_tokens && (
              token === tokens.T_COMMENT      // ignore single lines comments
              || token === tokens.T_DOC_COMMENT  // ignore doc comments
            )
          )
          || (
            !this.mode_eval // ignore open/close tags
            && token === tokens.T_OPEN_TAG
            //  || token === tokens.T_CLOSE_TAG
            //  )
          )
        ) {
          token = this.next() || this.lex();
        }
        if (!this.mode_eval && token == tokens.T_OPEN_TAG_WITH_ECHO) {
          // open tag with echo statement
          return tokens.T_ECHO; 
        }
      }
      return token;
    },
    // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
    begin: function(condition) {
      this.conditionStack.push(condition);
      this.curCondition = condition;
      this.stateCb = this['match' + condition];
      if (typeof this.stateCb !== 'function') {
        throw new Error('Undefined condition state "'+condition+'"');
      }
      return this;
    },
    // pop the previously active lexer condition state off the condition stack
    popState: function() {
      var n = this.conditionStack.length - 1;
      var condition = (n > 0) ? this.conditionStack.pop() : this.conditionStack[0];
      this.curCondition = this.conditionStack[this.conditionStack.length - 1];
      this.stateCb = this['match' + this.curCondition];
      if (typeof this.stateCb !== 'function') {
        throw new Error('Undefined condition state "'+this.curCondition+'"');
      }
      return condition;
    },
    // return next match in input
    next: function () {
      var token;
      if (!this._input) {
        this.done = true;
      }
      if (this.done) {
        return this.EOF;
      }
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
    },
  };
  
  // extends the lexer with states
  [
    require('./lexer/comments.js')(api, tokens),
    require('./lexer/initial.js')(api, tokens),
    require('./lexer/numbers.js')(api, tokens),
    require('./lexer/property.js')(api, tokens),
    require('./lexer/scripting.js')(api, tokens),
    require('./lexer/strings.js')(api, tokens),
    require('./lexer/tokens.js')(api, tokens),
    require('./lexer/utils.js')(api, tokens)
  ].forEach(function (ext) {
    for(var k in ext) {
      api[k] = ext[k];
    }
  });
  
  return api;
};

},{"./lexer/comments.js":6,"./lexer/initial.js":7,"./lexer/numbers.js":8,"./lexer/property.js":9,"./lexer/scripting.js":10,"./lexer/strings.js":11,"./lexer/tokens.js":12,"./lexer/utils.js":13}],6:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(lexer, tokens) {
  return {
    T_COMMENT: function() {
      while(this.offset < this.size) {
        var ch = this.input();
        if (ch === '\n' || ch === '\r') {
          return tokens.T_COMMENT;
        } else if (ch === '?' && !this.aspTagMode && this._input[this.offset] === '>') {
          this.unput(1);
          return tokens.T_COMMENT;
        } else if (ch === '%' && this.aspTagMode && this._input[this.offset] === '>') {
          this.unput(1);
          return tokens.T_COMMENT;
        }
      }
      return tokens.T_COMMENT;
    },
    /**
     * Behaviour : https://github.com/php/php-src/blob/master/Zend/zend_language_scanner.l#L1927
     */
    T_DOC_COMMENT: function() {
      var ch = this.input();
      var token = tokens.T_COMMENT; 
      if (ch === '*') { // started with '/*' , check is next is '*'
        ch = this.input();
        if (this.is_WHITESPACE()) { // check if next is WHITESPACE
          token = tokens.T_DOC_COMMENT;
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
};
},{}],7:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(lexer, tokens) {
  return {
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
              this.unput(1).appendToken(tokens.T_OPEN_TAG_WITH_ECHO, 3).nextINITIAL();
              break;
            } else if (this.tryMatchCaseless('?php')) {
              ch = this._input[this.offset + 4];
              if (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
                this.unput(1).appendToken(tokens.T_OPEN_TAG, 6).nextINITIAL();
                break;
              }
            }
            if (this.short_tags) {
              this.unput(1).appendToken(tokens.T_OPEN_TAG, 2).nextINITIAL();
              break;
            }
          } else if(this.asp_tags && ch == '%') {
            if (this.tryMatch('%=')) {
              this.aspTagMode = true;
              this.unput(1).appendToken(tokens.T_OPEN_TAG_WITH_ECHO, 3).nextINITIAL();
              break;
            } else {
              this.aspTagMode = true;
              this.unput(1).appendToken(tokens.T_OPEN_TAG, 2).nextINITIAL();
              break;
            }
          }
        }
      }
      if (this.yytext.length > 0) {
        return tokens.T_INLINE_HTML;
      } else {
        return false;
      }
    }
  };
};
},{}],8:[function(require,module,exports){
(function (process){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(lexer, tokens) {
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
  return {
    consume_NUM: function() {
      var ch = this.yytext[0];
      var hasPoint = this.yytext[0] === '.';
      if (ch === '0') {
        ch = this.input();
        // check if hexa
        if (ch === 'x') {
          this.input();
          if (this.is_HEX()) {
            return this.consume_HNUM();
          } else {
            this.unput(2);
          }
        } else if (ch === 'b') {
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
                return tokens.T_DNUMBER;
              } else {
                this.unput(3);
                break;
              }
            } else if (this.is_NUM()) {
              this.consume_LNUM();
              return tokens.T_DNUMBER;
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
        return tokens.T_DNUMBER;
      } else if (this.yytext.length < MAX_LENGTH_OF_LONG - 1) {
        return tokens.T_LNUMBER;
      } else {
        if (
          this.yytext.length == MAX_LENGTH_OF_LONG 
          && this.yytext < long_min_digits 
        ) {
          return tokens.T_LNUMBER;
        }
        return tokens.T_DNUMBER;
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
      return tokens.T_LNUMBER;
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
      return tokens.T_LNUMBER;
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
      return tokens.T_LNUMBER;
    }
  };
};
}).call(this,require('_process'))
},{"_process":1}],9:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(lexer, tokens) {
  return {
    matchST_LOOKING_FOR_PROPERTY: function() {
      var ch = this.input();
      if (ch === '-') {
        ch = this.input();
        if (ch === '>') {
          return tokens.T_OBJECT_OPERATOR;
        }
        this.unput(1);
      } else if (this.is_LABEL_START()) {
        this.consume_LABEL();
        return tokens.T_STRING;
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
          return tokens.T_STRING_VARNAME;
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
        return tokens.T_NUM_STRING;
      } else if (ch === ']') {
        this.popState();
        return ']';
      } else if (ch === '$') {
        this.input();
        if (this.is_LABEL_START()) {
          this.consume_LABEL();
          return tokens.T_VARIABLE;
        } else {
          throw new Error('Unexpected terminal');
        }
      } else if (this.is_LABEL_START()) {
        this.consume_LABEL();
        return tokens.T_STRING;
      } else if (this.is_WHITESPACE() || ch === '\\' || ch === '\'' || ch === '#') {
        return tokens.T_ENCAPSED_AND_WHITESPACE;
      } else if (ch === '[' || ch === '{' || ch === '}' || ch === '"' || ch === '`' || this.is_TOKEN()) {
        return ch;
      } else {
        throw new Error('Unexpected terminal');
      }
    }
  };
};
},{}],10:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(lexer, tokens) {
  return {
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
            return tokens.T_CLOSE_TAG;
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
            return tokens.T_CLOSE_TAG;
          }
          return this.consume_TOKEN();
        case '{':
          this.begin('ST_IN_SCRIPTING'); 
          return '{';
        case '}':
          if (this.conditionStack.length > 1) {
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
      return tokens.T_WHITESPACE;
    }
  };
};


},{}],11:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(lexer, tokens) {
  return {
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
      return tokens.T_CONSTANT_ENCAPSED_STRING;
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
              return tokens.T_START_HEREDOC;
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
        return tokens.T_CONSTANT_ENCAPSED_STRING;
      } else {
        if (this.yytext.length > 2) {
          this.appendToken(
            tokens.T_ENCAPSED_AND_WHITESPACE,
            this.yytext.length - 1
          );
        }
        this.unput(this.yytext.length - 1);
        this.begin("ST_DOUBLE_QUOTES");
        return '"';
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
        return tokens.T_END_HEREDOC;
      }
      /** SCANNING CONTENTS **/
      var ch = this._input[this.offset - 1];
      while(this.offset < this.size) {
        if (ch === '\n' || ch === '\r') {
          ch = this.input();
          if (this.isDOC_MATCH()) {
            this.unput(1).popState();
            this.appendToken(
              tokens.T_END_HEREDOC, this.heredoc_label.length
            );
            return tokens.T_ENCAPSED_AND_WHITESPACE;
          }
        }  else {
          ch = this.input();
        }
      }
      // too bad ! reached end of document (will get a parse error)
      return tokens.T_ENCAPSED_AND_WHITESPACE;
    },
    
    matchST_HEREDOC: function() {
      /** edge case : empty here doc **/
      var ch = this.input();
      if (this.isDOC_MATCH()) {
        this.consume(this.heredoc_label.length - 1);
        this.popState();
        return tokens.T_END_HEREDOC;
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
              tokens.T_END_HEREDOC, this.heredoc_label.length
            );
            return tokens.T_ENCAPSED_AND_WHITESPACE;
          }
        } else if (ch === '$') {
          ch = this.input();
          if (ch === '{') {
            // start of ${
            this.begin('ST_LOOKING_FOR_VARNAME');
            if (this.yytext.length > 2) {
              this.appendToken(tokens.T_DOLLAR_OPEN_CURLY_BRACES, 2);
              this.unput(2);
              return tokens.T_ENCAPSED_AND_WHITESPACE;
            }else {
              return tokens.T_DOLLAR_OPEN_CURLY_BRACES;
            }
          } else if (this.is_LABEL_START()) {
            // start of $var...
            var yyoffset = this.offset;
            var next = this.consume_VARIABLE();
            if (this.yytext.length > this.offset - yyoffset + 2) {
              this.appendToken(next, this.offset - yyoffset + 2);
              this.unput(this.offset - yyoffset + 2);
              return tokens.T_ENCAPSED_AND_WHITESPACE;
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
              this.appendToken(tokens.T_CURLY_OPEN, 1);
              this.unput(2);
              return tokens.T_ENCAPSED_AND_WHITESPACE;
            } else {
              this.unput(1);
              return tokens.T_CURLY_OPEN;
            }
          }
        } else {
          ch = this.input();
        }
      }

      // too bad ! reached end of document (will get a parse error)
      return tokens.T_ENCAPSED_AND_WHITESPACE;
    },

    consume_VARIABLE: function() {
      this.consume_LABEL();
      ch = this.input();
      if (ch == '[') {
        this.unput(1);
        this.begin('ST_VAR_OFFSET');
        return tokens.T_VARIABLE;
      } else if (ch === '-') {
        if (this.input() === '>') {
          this.input();
          if (this.is_LABEL_START()) {
            this.begin('ST_LOOKING_FOR_PROPERTY');
          }
          this.unput(3);
          return tokens.T_VARIABLE;
        } else {
          this.unput(2);
        }
       } else {
        this.unput(1);
       }
       return tokens.T_VARIABLE;
    },
    // HANDLES BACKQUOTES
    matchST_BACKQUOTE: function() {

      var ch = this.input();
      if (ch === '$') {
        ch = this.input();
        if (ch === '{') {
          this.begin('ST_LOOKING_FOR_VARNAME');
          return tokens.T_DOLLAR_OPEN_CURLY_BRACES;
        } else if (this.is_LABEL_START()) {
          var tok = this.consume_VARIABLE();
          return tok;
        }
      } else if (ch === '{') {
        if (this._input[this.offset] === '$') {
          this.begin('ST_IN_SCRIPTING');
          return tokens.T_CURLY_OPEN;
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
              this.appendToken(tokens.T_DOLLAR_OPEN_CURLY_BRACES, 2);
              this.unput(2);
              return tokens.T_ENCAPSED_AND_WHITESPACE;
            }else {
              return tokens.T_DOLLAR_OPEN_CURLY_BRACES;
            }
          } else if (this.is_LABEL_START()) {
            // start of $var...
            var yyoffset = this.offset;
            var next = this.consume_VARIABLE();
            if (this.yytext.length > this.offset - yyoffset + 2) {
              this.appendToken(next, this.offset - yyoffset + 2);
              this.unput(this.offset - yyoffset + 2);
              return tokens.T_ENCAPSED_AND_WHITESPACE;
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
              this.appendToken(tokens.T_CURLY_OPEN, 1);
              this.unput(2);
              return tokens.T_ENCAPSED_AND_WHITESPACE;
            } else {
              this.unput(1);
              return tokens.T_CURLY_OPEN;
            }
          }
          this.unput(1);
        }
        ch = this.input();
      }
      return tokens.T_ENCAPSED_AND_WHITESPACE;

    },
    
    matchST_DOUBLE_QUOTES: function() {

      var ch = this.input();
      if (ch === '$') {
        ch = this.input();
        if (ch === '{') {
          this.begin('ST_LOOKING_FOR_VARNAME');
          return tokens.T_DOLLAR_OPEN_CURLY_BRACES;
        } else if (this.is_LABEL_START()) {
          var tok = this.consume_VARIABLE();
          return tok;
        }
      } else if (ch === '{') {
        if (this._input[this.offset] === '$') {
          this.begin('ST_IN_SCRIPTING');
          return tokens.T_CURLY_OPEN;
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
              this.appendToken(tokens.T_DOLLAR_OPEN_CURLY_BRACES, 2);
              this.unput(2);
              return tokens.T_ENCAPSED_AND_WHITESPACE;
            }else {
              return tokens.T_DOLLAR_OPEN_CURLY_BRACES;
            }
          } else if (this.is_LABEL_START()) {
            // start of $var...
            var yyoffset = this.offset;
            var next = this.consume_VARIABLE();
            if (this.yytext.length > this.offset - yyoffset + 2) {
              this.appendToken(next, this.offset - yyoffset + 2);
              this.unput(this.offset - yyoffset + 2);
              return tokens.T_ENCAPSED_AND_WHITESPACE;
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
              this.appendToken(tokens.T_CURLY_OPEN, 1);
              this.unput(2);
              return tokens.T_ENCAPSED_AND_WHITESPACE;
            } else {
              this.unput(1);
              return tokens.T_CURLY_OPEN;
            }
          }
          this.unput(1);
        }
        ch = this.input();
      }
      return tokens.T_ENCAPSED_AND_WHITESPACE;
    }
  }
};
},{}],12:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(lexer, tokens) {
  var keywords = {
    "__class__": tokens.T_CLASS_C,
    "__trait__": tokens.T_TRAIT_C,
    "__function__": tokens.T_FUNC_C,
    "__method__": tokens.T_METHOD_C,
    "__line__": tokens.T_LINE,
    "__file__": tokens.T_FILE,
    "__dir__": tokens.T_DIR,
    "__namespace__": tokens.T_NS_C,
    'exit': tokens.T_EXIT,
    'die': tokens.T_EXIT,
    'function': tokens.T_FUNCTION,
    "const": tokens.T_CONST,
    "return": tokens.T_RETURN,
    "try": tokens.T_TRY,
    "catch": tokens.T_CATCH,
    "finally": tokens.T_FINALLY,
    "throw": tokens.T_THROW,
    "if": tokens.T_IF,
    "elseif": tokens.T_ELSEIF,
    "endif": tokens.T_ENDIF,
    "else": tokens.T_ELSE,
    "while": tokens.T_WHILE,
    "endwhile": tokens.T_ENDWHILE,
    "do": tokens.T_DO,
    "for": tokens.T_FOR,
    "endfor": tokens.T_ENDFOR,
    "foreach": tokens.T_FOREACH,
    "endforeach": tokens.T_ENDFOREACH,
    "declare": tokens.T_DECLARE,
    "enddeclare": tokens.T_ENDDECLARE,
    "instanceof": tokens.T_INSTANCEOF,
    "as": tokens.T_AS,
    "switch": tokens.T_SWITCH,
    "endswitch": tokens.T_ENDSWITCH,
    "case": tokens.T_CASE,
    "default": tokens.T_DEFAULT,
    "break": tokens.T_BREAK,
    "continue": tokens.T_CONTINUE,
    "goto": tokens.T_GOTO,
    "echo": tokens.T_ECHO,
    "print": tokens.T_PRINT,
    "class": tokens.T_CLASS,
    "interface": tokens.T_INTERFACE,
    "trait": tokens.T_TRAIT,
    "extends": tokens.T_EXTENDS,
    "implements": tokens.T_IMPLEMENTS,
    "new": tokens.T_NEW,
    "clone": tokens.T_CLONE,
    "var": tokens.T_VAR,
    "eval": tokens.T_EVAL,
    "include": tokens.T_INCLUDE,
    "include_once": tokens.T_INCLUDE_ONCE,
    "require": tokens.T_REQUIRE,
    "require_once": tokens.T_REQUIRE_ONCE,
    "namespace": tokens.T_NAMESPACE,
    "use": tokens.T_USE,
    "insteadof": tokens.T_INSTEADOF,
    "global": tokens.T_GLOBAL,
    "isset": tokens.T_ISSET,
    "empty": tokens.T_EMPTY,
    "__halt_compiler": tokens.T_HALT_COMPILER,
    "static": tokens.T_STATIC,
    "abstract": tokens.T_ABSTRACT,
    "final": tokens.T_FINAL,
    "private": tokens.T_PRIVATE,
    "protected": tokens.T_PROTECTED,
    "public": tokens.T_PUBLIC,
    "unset": tokens.T_UNSET,
    "list": tokens.T_LIST,
    "array": tokens.T_ARRAY,
    "callable": tokens.T_CALLABLE,
    "or": tokens.T_LOGICAL_OR,
    "and": tokens.T_LOGICAL_AND,
    "xor": tokens.T_LOGICAL_XOR
  };
  
  var castKeywords = {
    'int': tokens.T_INT_CAST,
    'integer': tokens.T_INT_CAST,
    "real": tokens.T_DOUBLE_CAST,
    "double": tokens.T_DOUBLE_CAST,
    "float": tokens.T_DOUBLE_CAST,
    "string": tokens.T_STRING_CAST,
    "binary": tokens.T_STRING_CAST,
    "array": tokens.T_ARRAY_CAST,
    "object": tokens.T_OBJECT_CAST,
    "bool": tokens.T_BOOL_CAST,
    "boolean": tokens.T_BOOL_CAST,
    "unset": tokens.T_UNSET_CAST
  };
  
  
  
  return {
    T_STRING: function() {
      var token = this.yytext.toLowerCase();
      var id = keywords[token];
      if (!id) {
        if (token === 'yield') {
          if (this.tryMatch(' from')) {
            this.consume(5);
            id = tokens.T_YIELD_FROM;
          } else {
            id = tokens.T_YIELD;
          }
        } else {
          id = tokens.T_STRING;
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
          return tokens.T_VARIABLE;
        } else {
          this.offset--;
          return '$';
        }
      },
      '-': function() {
        var nchar = this._input[this.offset];
        if (nchar === '>') {
          this.begin('ST_LOOKING_FOR_PROPERTY').input();
          return tokens.T_OBJECT_OPERATOR;
        } else if (nchar === '-') {
          this.input();
          return tokens.T_DEC;
        } else if (nchar === '=') {
          this.input();
          return tokens.T_MINUS_EQUAL;
        }
        return '-';
      },
      '\\': function() {
        return tokens.T_NS_SEPARATOR;
      },
      '/': function() {
        if (this._input[this.offset] === '=') {
          this.input();
          return tokens.T_DIV_EQUAL;
        }
        return '/';
      },
      ':': function() {
        if (this._input[this.offset] === ':') {
          this.input();
          return tokens.T_DOUBLE_COLON;
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
          var castId = castKeywords[castToken];
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
          return tokens.T_DOUBLE_ARROW;
        } else if (nchar === '=') {
          if (this._input[this.offset + 1] === '=') {
            this.consume(2);
            return tokens.T_IS_IDENTICAL;
          } else {
            this.input();
            return tokens.T_IS_EQUAL;
          }
        }
        return '=';
      },
      '+': function() {
        var nchar = this._input[this.offset];
        if (nchar === '+') {
          this.input();
          return tokens.T_INC;
        } else if (nchar === '=') {
          this.input();
          return tokens.T_PLUS_EQUAL;
        }
        return '+';
      },
      '!': function() {
        if (this._input[this.offset] === '=') {
          if (this._input[this.offset + 1] === '=') {
            this.consume(2);
            return tokens.T_IS_NOT_IDENTICAL;
          } else {
            this.input();
            return tokens.T_IS_NOT_EQUAL;
          }
        }
        return '!';
      },
      '?': function() {
        if (this._input[this.offset] === '?') {
          this.input();
          return tokens.T_COALESCE;
        }
        return '?';
      },
      '<': function() {
        var nchar = this._input[this.offset];
        if (nchar === '<') {
          nchar = this._input[this.offset + 1];
          if (nchar === '=') {
            this.consume(2);
            return tokens.T_SL_EQUAL;
          } else if (nchar === '<') {
            if (this.is_HEREDOC()) {
              return tokens.T_START_HEREDOC;
            }
          }
          this.input();
          return tokens.T_SL;
        } else if (nchar === '=') {
          this.input();
          if (this._input[this.offset] === '>') {
            this.input();
            return tokens.T_SPACESHIP;
          } else {
            return tokens.T_IS_SMALLER_OR_EQUAL;
          }
        } else if (nchar === '>') {
          this.input();
          return tokens.T_IS_NOT_EQUAL;
        }
        return '<';
      },
      '>': function() {
        var nchar = this._input[this.offset];
        if (nchar === '=') {
          this.input();
          return tokens.T_IS_GREATER_OR_EQUAL;
        } else if (nchar === '>') {
          nchar = this._input[this.offset + 1];
          if (nchar === '=') {
            this.consume(2);
            return tokens.T_SR_EQUAL;
          } else {
            this.input();
            return tokens.T_SR;
          }
        }
        return '>';
      },
      '*': function() {
        var nchar = this._input[this.offset];
        if (nchar === '=') {
          this.input();
          return tokens.T_MUL_EQUAL;
        } else if(nchar === '*') {
          this.input();
          if (this._input[this.offset] === '=') {
            this.input();
            return tokens.T_POW_EQUAL;
          } else {
            return tokens.T_POW;
          }
        }
        return '*';
      },
      '.': function() {
        var nchar = this._input[this.offset];
        if (nchar === '=') {
          this.input();
          return tokens.T_CONCAT_EQUAL;
        } else if (nchar === '.' && this._input[this.offset + 1] === '.') {
          this.consume(2);
          return tokens.T_ELLIPSIS;
        }
        return '.';
      },
      '%': function() {
        if (this._input[this.offset] === '=') {
          this.input();
          return tokens.T_MOD_EQUAL;
        }
        return '%';
      },
      '&': function() {
        var nchar = this._input[this.offset];
        if (nchar === '=') {
          this.input();
          return tokens.T_AND_EQUAL;
        } else if (nchar === '&') {
          this.input();
          return tokens.T_BOOLEAN_AND;
        }
        return '&';
      },
      '|': function() {
        var nchar = this._input[this.offset];
        if (nchar === '=') {
          this.input();
          return tokens.T_OR_EQUAL;
        } else if (nchar === '|') {
          this.input();
          return tokens.T_BOOLEAN_OR;
        }
        return '|';
      },
      '^': function() {
        if (this._input[this.offset] === '=') {
          this.input();
          return tokens.T_XOR_EQUAL;
        }
        return '^';
      }
    }
  };
};
},{}],13:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function() {
  var tokens = ';:,.\\[]()|^&+-/*=%!~$<>?@';
  return {
  
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
};
},{}],14:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * Expose the parser constructor
 */
module.exports = function(engine) {

  var tokens = engine.tokens.names;
  var names = engine.tokens.values;
  var EOF = engine.lexer.EOF;

  // check if argument is a number
  function isNumber(n) {
    return n != '.' && n != ',' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  // private helper : gets a token name
  function getTokenName(token) {
    if (!isNumber(token)) {
      return "'" + token + "'";
    } else {
      if (token == 1) return 'the end of file (EOF)';
      return names[token];
    }
  }

  /**
   * Graceful decorator
   */
  var _gracefulDecorator = function(fn) {
    try {
      this._currentNode = this._gracefulProxy[fn].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
      return this._currentNode;
    } catch(e) {
      if (this.lastError) {
        this.next(); // ignore token & go next
        var errorNode = [
          'error',
          this.lastError.tokenName,
          this.lastError.expected,
          this.lastError.line
        ];
        // force to append the error node
        if (this.ast.length < 3) {
          this.ast.push([]);
        }
        this.ast[2].push(errorNode);
        // return the node
        return errorNode;
      } else {
        throw e;  // not a parsing error
      }
    }
  };

  /**
   * The basic parser api
   */
  var api = {
    // Private vars, do not use directly
    _gracefulProxy: {},
    _graceful: false,
    // the lexer
    lexer: engine.lexer,
    token: null,
    prev: null,
    debug: false,
    locations: false,
    extractDoc: false,
    suppressErrors: false,
    lastError: false,
    startAt: [],
    entries: {
      'SCALAR': [
        tokens.T_CONSTANT_ENCAPSED_STRING,
        tokens.T_START_HEREDOC,
        tokens.T_LNUMBER,
        tokens.T_DNUMBER,
        tokens.T_STRING,
        tokens.T_ARRAY,'[',
        tokens.T_CLASS_C,
        tokens.T_TRAIT_C,
        tokens.T_FUNC_C,
        tokens.T_METHOD_C,
        tokens.T_LINE,
        tokens.T_FILE,
        tokens.T_DIR,
        tokens.T_NS_C,
        '"',
        '-',
        tokens.T_NS_SEPARATOR
      ],
      'T_MAGIC_CONST': [
          tokens.T_CLASS_C,
          tokens.T_TRAIT_C,
          tokens.T_FUNC_C,
          tokens.T_METHOD_C,
          tokens.T_LINE,
          tokens.T_FILE,
          tokens.T_DIR,
          tokens.T_NS_C
      ],
      'T_MEMBER_FLAGS': [
        tokens.T_PUBLIC,
        tokens.T_PRIVATE,
        tokens.T_PROTECTED,
        tokens.T_STATIC,
        tokens.T_ABSTRACT,
        tokens.T_FINAL
      ],
      'VARIABLE': [
        tokens.T_VARIABLE, 
        '$',
        tokens.T_NS_SEPARATOR, 
        tokens.T_STRING,
        tokens.T_STATIC
      ],
      'EOS': [
        ';', 
        tokens.T_CLOSE_TAG, 
        EOF, 
        tokens.T_INLINE_HTML
      ],
      'EXPR': [
        '@','-','+','!','~','(','`',
        tokens.T_LIST,
        tokens.T_CLONE,
        tokens.T_INC,
        tokens.T_DEC,
        tokens.T_NEW,
        tokens.T_ISSET,
        tokens.T_EMPTY,
        tokens.T_INCLUDE,
        tokens.T_INCLUDE_ONCE,
        tokens.T_REQUIRE,
        tokens.T_REQUIRE_ONCE,
        tokens.T_EVAL,
        tokens.T_INT_CAST,
        tokens.T_DOUBLE_CAST,
        tokens.T_STRING_CAST,
        tokens.T_ARRAY_CAST,
        tokens.T_OBJECT_CAST,
        tokens.T_BOOL_CAST,
        tokens.T_UNSET_CAST,
        tokens.T_EXIT,
        tokens.T_PRINT,
        tokens.T_YIELD,
        tokens.T_STATIC,
        tokens.T_FUNCTION,
        // using VARIABLES :
        tokens.T_VARIABLE, 
        '$',
        tokens.T_NS_SEPARATOR, 
        tokens.T_STRING,
        // using SCALAR :
        tokens.T_STRING, // @see variable.js line 45 > conflict with variable = shift/reduce :)
        tokens.T_CONSTANT_ENCAPSED_STRING,
        tokens.T_START_HEREDOC,
        tokens.T_LNUMBER,
        tokens.T_DNUMBER,
        tokens.T_ARRAY,'[',
        tokens.T_CLASS_C,
        tokens.T_TRAIT_C,
        tokens.T_FUNC_C,
        tokens.T_METHOD_C,
        tokens.T_LINE,
        tokens.T_FILE,
        tokens.T_DIR,
        tokens.T_NS_C
      ]
    }
    /** main entry point : converts a source code to AST **/
    ,parse: function(code) {
      this.lastError = false;
      this.lexer.setInput(code);
      this.lexer.comment_tokens = this.extractDoc;
      this.length = this.lexer._input.length;
      this.nextWithComments();
      this.ast = ['program', []];
      while(this.token != EOF) {
        var node = this.read_start();
        if (node !== null) {
          if (typeof node[0] !== 'string') {
            node.forEach(function(item) {
              this.ast[1].push(item);
            }.bind(this));
          } else {
            this.ast[1].push(node);
          }
        }
      }
      return this.ast;
    }
    /** handling errors **/
    ,error: function(expect) {
      token = getTokenName(this.token);
      if (isNumber(this.token)) {
        var symbol = this.text();
        if (symbol.length > 10) {
          symbol = symbol.substring(0, 7) + '...';
        } 
        token = '\''+symbol+'\' ('+token+')';
      }
      var msgExpect = '';
      if (expect) {
        msgExpect = ', expecting ';
        if (Array.isArray(expect)) {
          for(var i = 0; i < expect.length; i++) {
            expect[i] = getTokenName(expect[i]);
          }
          msgExpect += expect.join(', ');
        } else {
          msgExpect += getTokenName(expect);
        }
      }
      this.lastError = {
        token: this.token,
        tokenName: token,
        expected: expect,
        messageExpected: msgExpect,
        message: 'Parse Error : syntax error, unexpected ' + token + msgExpect + ' on line ' + this.lexer.yylloc.first_line,
        line: this.lexer.yylloc.first_line
      };
      if (this.suppressErrors && !this._gracefull) {
        this.token = EOF;
      } else {
        throw new Error(this.lastError.message);
      }
    }
    /**
     * enable / disable the graceful mode
     */
    ,graceful: function(mode) {
      if (this._graceful !== mode) {
        if (mode) {
          // enable the graceful mode
          this._gracefulProxy = {};
          for(var i in this) {
            var cb = this[i];
            if (typeof cb === 'function') {
              this._gracefulProxy[i] = cb;
              this[i] = _gracefulDecorator.bind(this, i);
            }
          }
        } else {
          // disable the graceful mode
          for(var i in this._gracefulProxy) {
            this[i] = this._gracefulProxy[i];
          }
        }
        this._graceful = mode;
      }
      return this;
    
    }
    /**
     * Creates a new AST node
     */
    ,node: function(name) {
      var startAt = null;
      if (this.locations === true) { 
        startAt = [
          this.lexer.yylloc.first_line, 
          this.lexer.yylloc.first_column,
          this.length - this.lexer._input.length - this.lexer.yytext.length
        ];
      }
      return function() {
        var result =  Array.prototype.slice.call(arguments);
        if (name && name.constructor === Array) {
          if (this.locations === true) {
            name[2] = [
              this.prev[0], 
              this.prev[1],
              this.prev[2]
            ];
            Array.prototype.push.apply(name[3], result);
          } else {
            Array.prototype.push.apply(name, result);
          }
          result = name;
        } else {
          if (name) {
            result.unshift(name);
          }
          if (this.locations === true) {
            result = [
              'position', 
              startAt,
              [
                this.prev[0], 
                this.prev[1],
                this.prev[2]
              ],
              result
            ];
          }
        }
        return result;
      }.bind(this);
    }
    /** expects an end of statement or end of file **/
    ,expectEndOfStatement: function() {
      if (this.token === ';') {
        this.nextWithComments();
        if (this.token === tokens.T_CLOSE_TAG) {
          // strip close tag (statement already closed with ';')
          this.nextWithComments();
        }
      } else if (this.token === tokens.T_CLOSE_TAG) {
        this.nextWithComments();
      } else if (this.token !== tokens.T_INLINE_HTML && this.token !== EOF) {
        this.error(';');
      }
      return this;
    }
    /** outputs some debug information on current token **/
    ,showlog: function() {
      var stack = (new Error()).stack.split('\n');
      console.log(
        'Line ' 
        + this.lexer.yylloc.first_line
        + ' : '
        + getTokenName(this.token)
        + ">" + this.lexer.yytext + "<"
        + ' @' + stack[3].trim()
      );
      return this;
    }
    /** force to expect specified token **/
    ,expect: function(token) {
      if (!this.lastError) {
        if (Array.isArray(token)) {
          if (token.indexOf(this.token) === -1) {
            this.error(token);
          }
        } else if (this.token != token) {
          this.error(token);
        }
      }
      return this;
    }
    /**returns the current token contents **/
    ,text: function() {
      return this.lexer.yytext;
    }
    /** consume the next token **/
    ,next: function() {
      this.nextWithComments();
      if (this.debug) this.showlog();
      while(this.token === tokens.T_COMMENT || this.token === tokens.T_DOC_COMMENT) {
        // IGNORE COMMENTS
        this.nextWithComments();
      }
      return this;
    }
    /** consume comments (if found) **/
    ,ignoreComments: function() {
      if (this.debug) this.showlog();
      while(this.token === tokens.T_COMMENT || this.token === tokens.T_DOC_COMMENT) {
        // IGNORE COMMENTS
        this.nextWithComments();
      }
      return this;
    }    
    /** consume the next token (including doc) **/
    ,nextWithComments: function() {
      this.prev = [
        this.lexer.yylloc.first_line, 
        this.lexer.yylloc.first_column, 
        this.lexer.offset
      ];
      this.token = this.lexer.lex() || EOF;
      if (this.debug) this.showlog();
      return this;
    }
    /**
     * Check if token is of specified type
     */
    ,is: function(type) {
      if (Array.isArray(type)) {
        return type.indexOf(this.token) !== -1;
      } else {
        return this.entries[type].indexOf(this.token) != -1;
      }
    }
    /** convert an token to ast **/
    ,read_token: function() {
      var result = this.token;
      if (isNumber(result)) {
        result = [result, this.text(), this.lexer.yylloc.first_line];
      }
      this.next();
      return result;
    }
    /**
     * Helper : reads a list of tokens / sample : T_STRING ',' T_STRING ...
     * <ebnf>
     * list ::= separator? ( item separator )* item
     * </ebnf>
     */
    ,read_list: function(item, separator, preserveFirstSeparator) {
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
        } while(this.next().token != EOF);
      } else {
        result.push(this.expect(item).text());
        while (this.next().token != EOF) {
          if (this.token != separator) break;
          // trim current separator & check item
          if (this.next().token != item) break;
          result.push(this.text());
        }
      }
      return result;
    }
  };
  
  // extends the parser with syntax files
  [
    require('./parser/array.js')(api, tokens, EOF),
    require('./parser/class.js')(api, tokens, EOF),
    require('./parser/expr.js')(api, tokens, EOF),
    require('./parser/function.js')(api, tokens, EOF),
    require('./parser/if.js')(api, tokens, EOF),
    require('./parser/loops.js')(api, tokens, EOF),
    require('./parser/main.js')(api, tokens, EOF),
    require('./parser/namespace.js')(api, tokens, EOF),
    require('./parser/scalar.js')(api, tokens, EOF),
    require('./parser/statement.js')(api, tokens, EOF),
    require('./parser/switch.js')(api, tokens, EOF),
    require('./parser/try.js')(api, tokens, EOF),
    require('./parser/comment.js')(api, tokens, EOF),
    require('./parser/variable.js')(api, tokens, EOF)
  ].forEach(function (ext) {
    for(var k in ext) {
      api[k] = ext[k];
    }
  });
  
  return api;
};

},{"./parser/array.js":15,"./parser/class.js":16,"./parser/comment.js":17,"./parser/expr.js":18,"./parser/function.js":19,"./parser/if.js":20,"./parser/loops.js":21,"./parser/main.js":22,"./parser/namespace.js":23,"./parser/scalar.js":24,"./parser/statement.js":25,"./parser/switch.js":26,"./parser/try.js":27,"./parser/variable.js":28}],15:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
    /**
     * Parse an array
     * <ebnf>
     * array ::= T_ARRAY '(' array_pair_list ')' | '[' array_pair_list ']'
     * </ebnf>
     */
    read_array: function() {
      var expect = null;
      var items = [];
      var result = this.node('array');
      
      if (this.expect([tokens.T_ARRAY, '[']).token == tokens.T_ARRAY) {
        this.next().expect('(');
        expect = ')';
      } else {
        expect = ']';
      }
      if (this.next().token != expect) {
        while(this.token != EOF) {
          items.push(this.read_array_pair_list());
          if (this.token == ',') {
            this.next();
            if (this.token === expect) {
              break;
            }
          } else break;
        }
      }
      this.expect(expect).next();
      return result(items);
    },
    /**
     * Reads an array entry item
     * <ebnf>
     * array_pair_list ::= '&' w_variable | (expr (T_DOUBLE_ARROW (expr | '&' w_variable) )?)
     * </ebnf>
     */
    read_array_pair_list: function() {
      if (this.token === '&') {
        return { key: false, value: ['ref', this.next().read_variable(true)] };
      } else {
        var expr = this.read_expr();
        if (this.token === tokens.T_DOUBLE_ARROW) {
          if (this.next().token === '&') {
            return { key: expr, value: ['ref', this.next().read_variable(true)] };
          } else {
            return { key: expr, value: this.read_expr() };
          }
        } else {
          return { key: false, value: expr };
        }
      }
    },
    /**
     * <ebnf>
     *  dim_offset ::= expr?
     * </ebnf>
     */
    read_dim_offset: function() {
      if (this.token == ']') return false;
      return this.read_expr();
    }
  };
};
},{}],16:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
    /**
     * reading a class
     * <ebnf>
     * class ::= class_scope? T_CLASS T_STRING (T_EXTENDS NAMESPACE_NAME)? (T_IMPLEMENTS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' CLASS_BODY '}'
     * </ebnf>
     */
    read_class: function(flag) {
      var result = this.node('class');
      this.expect(tokens.T_CLASS)
        .next()
        .expect(tokens.T_STRING)
      ;
      var propName = this.text()
        , propExtends = false
        , propImplements = false
      ;
      if (this.next().token == tokens.T_EXTENDS) {
        propExtends = this.next().read_namespace_name();
      }
      if (this.token == tokens.T_IMPLEMENTS) {
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
     * <ebnf>
     *   class_scope ::= (T_FINAL | T_ABSTRACT)?
     * </ebnf>
     */
    ,read_class_scope: function() {
      var result = this.token;
      if (result == tokens.T_FINAL || result == tokens.T_ABSTRACT) {
        this.next();
        return result;
      }
      return 0;
    }
    /**
     * Reads a class body
     * <ebnf>
     *   class_body ::= (member_flags? (T_VAR | T_STRING | T_FUNCTION))*
     * </ebnf>
     */
    ,read_class_body: function() {
      var result = {
        'constants': []
        ,'properties': []
        ,'methods': []
        ,'use': {
          // list of traits
          traits: [],
          // list of alias
          adaptations: []
        }
      }, startAt = null, node = null, comment = false;



      while(this.token !== EOF && this.token !== '}') {

        if (this.token === tokens.T_COMMENT) {
          comment = this.read_comment();
          continue;
        }

        if (this.token === tokens.T_DOC_COMMENT) {
          comment = this.read_doc_comment();
          continue;
        }

        // check T_USE trait
        if (this.token === tokens.T_USE) {
          comment = false; // flush comments
          this.next().read_trait_use_statement(result['use']);
          continue;
        }

        // check constant
        if (this.token === tokens.T_CONST) {
          node = this.node();
          var constants = this.read_constant_list();
          this.expect(';').nextWithComments();
          if (comment) {
            (this.locations ? comment[3] : comment).push(constants);
            constants = comment;
            comment = false;
          }
          constants = node.apply(this, constants);
          result.constants.push(constants);
          continue;
        }

        // prepare here position (to avoid bad position on locations) 
        if (this.locations) {
          startAt = [
            this.lexer.yylloc.first_line, 
            this.lexer.yylloc.first_column,
            this.length - this.lexer._input.length - this.lexer.yytext.length
          ];
        }
        // read member flags
        var flags = this.read_member_flags(false);

        // jump over T_VAR then land on T_VARIABLE
        if (this.token === tokens.T_VAR) {
          this.next().expect(tokens.T_VARIABLE);
        }

        // reads a variable
        if (this.token === tokens.T_VARIABLE) {
          node = this.node();
          var variables = this.read_variable_list();
          this.expect(';').nextWithComments();
          variables = node.apply(this, variables).concat([flags]);
          if (this.locations) {
            variables[1] = startAt;
          }
          if (comment) {
            (this.locations ? comment[3] : comment).push(variables);
            variables = comment;
            comment = false;
          }
          result.properties.push(variables);
        } else if (this.token === tokens.T_FUNCTION) {
          // reads a function
          var method = this.read_function(false, flags[2] === 1).concat(
            [flags]
          );
          if (this.locations) {
            method[1] = startAt;
          }
          if (comment) {
            (this.locations ? comment[3] : comment).push(method);
            method = comment;
            comment = false;
          }
          result.methods.push(method);
        } else {
          // raise an error
          this.error([
            tokens.T_CONST, 
            tokens.T_VARIABLE, 
            tokens.T_FUNCTION
          ]);
        }
      }
      this.expect('}').nextWithComments();
      return result;
    }
    /**
     * Reads variable list
     * <ebnf>
     *  variable_list ::= (variable_declaration ',')* variable_declaration
     * </ebnf>
     */
    ,read_variable_list: function() {
      return this.read_list(
        this.read_variable_declaration,
        ','
      );
    }
    /**
     * Reads a variable declaration
     * <ebnf>
     *  variable_declaration ::= T_VARIABLE '=' scalar
     * </ebnf>
     */
    ,read_variable_declaration: function() {
      var varName = this.node(this.text());
      this.expect(tokens.T_VARIABLE).next();
      if (this.token === ';' || this.token === ',') {
        return varName(null);
      } else if(this.token === '=') {
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L815
        return varName(this.next().read_expr());
      } else {
        this.expect([',', ';', '=']);
      }
    }
    /**
     * Reads constant list
     * <ebnf>
     *  constant_list ::= T_CONST (constant_declaration ',')* constant_declaration
     * </ebnf>
     */
    ,read_constant_list: function() {
      return this.expect(tokens.T_CONST)
        .next()
        .read_list(
          this.read_constant_declaration, ','
        )
      ;
    }
    /**
     * Reads a constant declaration
     * <ebnf>
     *  constant_declaration ::= T_STRING '=' expr
     * </ebnf>
     */
    ,read_constant_declaration: function() {
      var name = this.node(this.text());
      var value = this.expect(tokens.T_STRING)
        .next()
        .expect('=')
        .next()
        .read_expr()
      ;
      return name(value);
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
            case tokens.T_PUBLIC:     idx = 0; val = 0; break;
            case tokens.T_PROTECTED:  idx = 0; val = 1; break;
            case tokens.T_PRIVATE:    idx = 0; val = 2; break;
            case tokens.T_STATIC:     idx = 1; val = 1; break;
            case tokens.T_ABSTRACT:   idx = 2; val = 1; break;
            case tokens.T_FINAL:      idx = 2; val = 2; break;
          }
          if (asInterface) {
            if (idx == 0 && val == 2) {
              this.expect([tokens.T_PUBLIC, tokens.T_PROTECTED]);
            } else if (idx == 2 && val == 1) {
              this.error();
            }
          }
          if (result[idx] != -1) this.error();
          result[idx] = val;
        } while(this.next().is('T_MEMBER_FLAGS'));
      }

      if (result[0] == -1) result[0] = 0;
      if (result[1] == -1) result[1] = 0;
      if (result[2] == -1) result[2] = 0;
      return result;
    }
    /**
     * reading an interface
     * <ebnf>
     * interface ::= class_scope? T_INTERFACE T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' INTERFACE_BODY '}'
     * </ebnf>
     */
    ,read_interface: function(flag) {
      var result = this.node('interface');
      var name = this.expect(tokens.T_INTERFACE)
        .next()
        .expect(tokens.T_STRING)
        .text()
      ;
      var propExtends = false;
      if (this.next().token == tokens.T_EXTENDS) {
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
     * <ebnf>
     *   interface_body ::= (member_flags? (T_CONST | T_FUNCTION))*
     * </ebnf>
     */
    ,read_interface_body: function() {
      var result = {
        'constants': []
        ,'methods': []
      }, startAt = null;
      while(this.token !== EOF && this.token !== '}') {
        // check constant
        if (this.token == tokens.T_CONST) {
          var node = this.node();
          var constants = this.read_constant_list();
          this.expect(';').next();
          constants = node.apply(this, constants);
          result.constants.push(constants);
          continue;
        }

        // prepare here position (to avoid bad position on locations) 
        if (this.locations) {
          startAt = [
            this.lexer.yylloc.first_line, 
            this.lexer.yylloc.first_column,
            this.length - this.lexer._input.length - this.lexer.yytext.length
          ];
        }

        // read member flags
        var flags = this.read_member_flags(true);

        // reads a function
        if (this.token === tokens.T_FUNCTION) {
          // reads a function
          var method = this.read_function_declaration().concat(
            [flags]
          );
          if (this.locations) {
            method[1] = startAt;
          }
          result.methods.push(method);
          this.expect(';').next();
        } else {
          // raise an error
          this.error([
            tokens.T_CONST,
            tokens.T_FUNCTION
          ]);
        }
      }
      this.expect('}').next();
      return result;
    }
    /**
     * reading a trait
     * <ebnf>
     * trait ::= T_TRAIT T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' FUNCTION* '}'
     * </ebnf>
     */
    ,read_trait: function(flag) {
      var result = this.node('trait');
      this.expect(tokens.T_TRAIT)
        .next()
        .expect(tokens.T_STRING)
      ;
      var propName = this.text(), 
        propExtends = false, 
        propImplements = false;
      if (this.next().token == tokens.T_EXTENDS) {
        propExtends = this.next().read_namespace_name();
      }
      if (this.token == tokens.T_IMPLEMENTS) {
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
     * <ebnf>
     * trait_use_statement ::= namespace_name (',' namespace_name)* ('{' trait_use_alias '}')?
     * </ebnf>
     */
    ,read_trait_use_statement: function(result) {
      result.traits.push(this.read_namespace_name());
      while(this.token === ',') {
        result.traits.push(
          this.next().read_namespace_name()
        );
      }
      if (this.token === '{') {
        while(this.next()) {
          if (this.token === '}') break;
          result.adaptations.push(this.read_trait_use_alias());
          this.expect(';');
        }
        this.expect('}').next();
      } else {
        this.expect(';').next();
      }
    }
    /**
     * Reading trait alias
     * <ebnf>
     * trait_use_alias ::= namespace_name ( T_DOUBLE_COLON T_STRING )? (T_INSTEADOF namespace_name) | (T_AS member_flags? T_STRING)
     * </ebnf>
     */
    ,read_trait_use_alias: function() {
      var result = {
        origin: this.read_namespace_name(),
        act: false,
        target: false
      };
      if (this.token === tokens.T_DOUBLE_COLON) {
        result.origin = [
          result.origin,
          this.next().expect(tokens.T_STRING).text()
        ];
        this.next();
      }

      if (this.token === tokens.T_INSTEADOF) {
        result.act = 'instead';
        result.target = this.next().read_namespace_name();    
      } else if (this.token === tokens.T_AS) {
        result.act = 'as';
        result.flags = this.next().read_member_flags();
        result.target = this.expect(tokens.T_STRING).text();
        this.next();
      } else {
        this.expect([
          tokens.T_AS,
          tokens.T_INSTEADOF
        ]);
      }
      return result;
    }
  };
};
},{}],17:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  /**
   *  WORK IN PROGRESS
   *  @see https://github.com/glayzzle/php-parser/wiki/Annotations
   */
  return {
    /**
     *  Comments with // or #
     */
    read_comment: function() {
      var result = this.node('comment');
      var input = [this.text()];
      while(this.nextWithComments().token === tokens.T_COMMENT) {
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
  }
};
},{}],18:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {

  return {

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
        case tokens.T_POW:  return ['bin', '**', expr, this.next().read_expr()];
        case tokens.T_SL:   return ['bin', '<<', expr, this.next().read_expr()];
        case tokens.T_SR:   return ['bin', '>>', expr, this.next().read_expr()];

        // boolean operations
        case tokens.T_BOOLEAN_OR:
        case tokens.T_LOGICAL_OR:   return ['bool', '|', expr, this.next().read_expr()];

        case tokens.T_BOOLEAN_AND:
        case tokens.T_LOGICAL_AND:  return ['bool', '&', expr, this.next().read_expr()];

        case tokens.T_LOGICAL_XOR:      return ['bool', '^', expr, this.next().read_expr()];
        case tokens.T_IS_IDENTICAL:     return ['bool', '=', expr, this.next().read_expr()];
        case tokens.T_IS_NOT_IDENTICAL: return ['bool', '!=', expr, this.next().read_expr()];
        case tokens.T_IS_EQUAL:         return ['bool', '~', expr, this.next().read_expr()];
        case tokens.T_IS_NOT_EQUAL:     return ['bool', '!~', expr, this.next().read_expr()];
        case '<':                       return ['bool', '<', expr, this.next().read_expr()];
        case '>':                       return ['bool', '>', expr, this.next().read_expr()];

        case tokens.T_IS_SMALLER_OR_EQUAL:  return ['bool', '<=', expr, this.next().read_expr()];
        case tokens.T_IS_GREATER_OR_EQUAL:  return ['bool', '>=', expr, this.next().read_expr()];
        case tokens.T_SPACESHIP:            return ['bool', '<=>', expr, this.next().read_expr()];
        case tokens.T_INSTANCEOF:           return ['bool', '?', expr, this.next().read_expr()];
        
        // extra operations : 
        case tokens.T_COALESCE: // php7 : $username = $_GET['user'] ?? 'nobody';
          return ['retif', ['sys', 'isset', expr], expr, this.next().read_expr()];
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
     * <ebnf>
     * Reads an expression
     *  expr ::= @todo
     * </ebnf>
     */
    ,read_expr_item: function() {

      switch(this.token) {

        case '@':
          return ['silent', this.next().read_expr()];

        case '-':
        case '+':
        case '!':
        case '~':
          return this.node('unary')(this.token, this.next().read_expr());

        case '(':
          var expr = this.next().read_expr();
          this.expect(')').next();

          // handle dereferencable
          if (this.token === tokens.T_OBJECT_OPERATOR) {
            return this.recursive_variable_chain_scan(expr, false);
          } else if (this.token === tokens.T_CURLY_OPEN || this.token === '[') {
            // @fixme - should avoid a new token (could be resolved)
            return this.node('deference')(
              expr, this.read_encapsed_string_item()
            );
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
          var result = this.node('sys');
          var expr = this.next().read_encapsed_string('`');
          return result('shell', expr);

        case tokens.T_LIST:
          var result = this.node('list');
          this.next().expect('(').next();
          var assignList = this.read_assignment_list();
          this.expect(')').next().expect('=').next();
          return result(assignList, this.read_expr());

        case tokens.T_CLONE:
          return this.node('sys')(
            'clone', this.next().read_expr()
          );

        case tokens.T_INC:
          var name = this.next().read_variable();
          return ['set', name, ['bin', '+', name, ['number', 1]]];

        case tokens.T_DEC:
          var name = this.next().read_variable();
          return ['set', name, ['bin', '-', name, ['number', 1]]];

        case tokens.T_NEW:
          return this.next().read_new_expr();

        case tokens.T_ISSET:
          this.next().expect('(').next();
          var expr = this.read_list(this.read_expr, ',');
          this.expect(')').next();
          return ['sys', 'isset', expr];

        case tokens.T_EMPTY:
          this.next().expect('(').next();
          var expr = this.read_expr();
          this.expect(')').next();
          return ['sys', 'empty', expr];

        case tokens.T_INCLUDE:
          return (this.node('sys'))(
            'include',
            this.next().read_expr()
          );

        case tokens.T_INCLUDE_ONCE:
          return (this.node('sys'))(
            'include_once', 
            this.next().read_expr()
          );

        case tokens.T_REQUIRE:
          return (this.node('sys'))(
            'require', 
            this.next().read_expr()
          );

        case tokens.T_REQUIRE_ONCE:
          return (this.node('sys'))(
            'require_once', 
            this.next().read_expr()
          );

        case tokens.T_EVAL:
          var result = this.node('sys');
          this.next().expect('(').next();
          var expr = this.read_expr();
          this.expect(')').next();
          return result('eval', expr);

        case tokens.T_INT_CAST:
          return ['cast', 'int', this.next().read_expr()];

        case tokens.T_DOUBLE_CAST:
          return ['cast', 'double', this.next().read_expr()];

        case tokens.T_STRING_CAST:
          return ['cast', 'string', this.next().read_expr()];

        case tokens.T_ARRAY_CAST:
          return ['cast', 'array', this.next().read_expr()];

        case tokens.T_OBJECT_CAST:
          return ['cast', 'object', this.next().read_expr()];

        case tokens.T_BOOL_CAST:
          return ['cast', 'boolean', this.next().read_expr()];

        case tokens.T_UNSET_CAST:
          return ['sys', 'unset', this.next().read_expr()];

        case tokens.T_EXIT:
          var result = this.node('sys');
          var expr = null;
          if ( this.next().token === '(' ) {
            if (this.next().token !== ')') {
              expr = this.read_expr();
              this.expect(')').next();
            } else {
              this.next();
            }
          }
          return result('exit', expr);

        case tokens.T_PRINT:
          return (this.node('sys'))(
            'print', 
            this.next().read_expr()
          );

        // T_YIELD (expr (T_DOUBLE_ARROW expr)?)?
        case tokens.T_YIELD:
          var result = ['yield', null, null];
          if (this.next().is('EXPR')) {
            // reads the yield return value
            result[1] = this.read_expr();
            if (this.token === tokens.T_DOUBLE_ARROW) {
              // reads the yield returned key
              result[2] = this.next().read_expr();
            }
          }
          return result;

        // T_YIELD_FROM expr
        case tokens.T_YIELD_FROM:
          return ['yield-from', this.next().read_expr()];

        case tokens.T_FUNCTION:
          // @fixme later - removed static lambda function declarations (colides with static keyword usage)
          return this.read_function(true);

      }

      // SCALAR | VARIABLE
      var expr;
      if (this.is('VARIABLE')) {
        expr = this.read_variable();
        // VARIABLES SPECIFIC OPERATIONS
        switch(this.token) {
          case '=':
            if (this.next().token == '&') {
              if (this.next().token === tokens.T_NEW) {
                return ['link', expr, this.next().read_new_expr()];
              } else {
                return ['link', expr, this.read_variable()];
              }
            } else {
              return [
                'set', 
                expr, 
                this.token === tokens.T_NEW ? 
                  this.next().read_new_expr() : this.read_expr()
              ];
            }
          // operations :
          case tokens.T_PLUS_EQUAL:
            return ['set', expr, ['bin', '+', expr, this.next().read_expr()]];
          case tokens.T_MINUS_EQUAL:
            return ['set', expr, ['bin', '-', expr, this.next().read_expr()]];
          case tokens.T_MUL_EQUAL:
            return ['set', expr, ['bin', '*', expr, this.next().read_expr()]];
          case tokens.T_POW_EQUAL:
            return ['set', expr, ['bin', '**', expr, this.next().read_expr()]];
          case tokens.T_DIV_EQUAL:
            return ['set', expr, ['bin', '/', expr, this.next().read_expr()]];
          case tokens.T_CONCAT_EQUAL: 
            // NB : convert as string and add
            return ['set', expr, ['bin', '.', expr, this.next().read_expr()]];
          case tokens.T_MOD_EQUAL:
            return ['set', expr, ['bin', '%', expr, this.next().read_expr()]];
          case tokens.T_AND_EQUAL:
            return ['set', expr, ['bin', '&', expr, this.next().read_expr()]];
          case tokens.T_OR_EQUAL:
            return ['set', expr, ['bin', '|', expr, this.next().read_expr()]];
          case tokens.T_XOR_EQUAL:
            return ['set', expr, ['bin', '^', expr, this.next().read_expr()]];
          case tokens.T_SL_EQUAL:
            return ['set', expr, ['bin', '<<', expr, this.next().read_expr()]];
          case tokens.T_SR_EQUAL:
            return ['set', expr, ['bin', '>>', expr, this.next().read_expr()]];
          case tokens.T_INC:
            this.next();
            return ['post', '+', expr];
          case tokens.T_DEC:
            this.next();
            return ['post', '-', expr];
        } 
      } else if (this.is('SCALAR')) {
        expr = this.read_scalar();
        // handle dereferencable
        while(this.token !== EOF) {
          if (this.token === tokens.T_OBJECT_OPERATOR) {
            expr = this.recursive_variable_chain_scan(expr, false);
          } else if (this.token === tokens.T_CURLY_OPEN || this.token === '[') {
            // @fixme - should avoid a new token (could be resolved)
            expr = this.node('deference')(expr, this.read_encapsed_string_item());
          } else if (this.token === '(') {
            // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1118
            expr = this.node('call')(expr, this.read_function_argument_list());
          } else {
            return expr;
          }
        }
      } else {
        this.error('EXPR');
      }

      // returns variable | scalar
      return expr;

    }
    /**
     * <ebnf>
     *    new_expr ::= T_NEW (namespace_name function_argument_list) | (T_CLASS ... class declaration)
     * </ebnf>
     * https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L850
     */
    ,read_new_expr: function() {
      var result = this.node('new');
      if (this.token === tokens.T_CLASS) {
        // Annonymous class declaration
        var propExtends = false, propImplements = false;
        if (this.next().token == tokens.T_EXTENDS) {
          propExtends = this.next().read_namespace_name();
        }
        if (this.token == tokens.T_IMPLEMENTS) {
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
     * <ebnf>
     * class_name_reference ::= namespace_name | variable
     * </ebnf>
     */
    ,read_class_name_reference: function() {
      if (this.token === '\\' || this.token === tokens.T_STRING) {
        var result = this.read_namespace_name();
        if (this.token === tokens.T_DOUBLE_COLON) {
          result = this.read_static_getter(result);
        }
        return result;
      } else if (this.is('VARIABLE')) {
        return this.read_variable(true);
      } else {
        this.expect([tokens.T_STRING, 'VARIABLE']);
      }
    }
    /**
     * <ebnf>
     *   assignment_list ::= assignment_list_element (',' assignment_list_element?)*
     * </ebnf>
     */
    ,read_assignment_list: function(innerList) {
      return this.read_list(
        this.read_assignment_list_element, ','
      );
    }
    /**
     * <ebnf>
     *  assignment_list_element ::= (variable | (T_LIST '(' assignment_list ')'))?
     * </ebnf>
     */
    ,read_assignment_list_element: function() {
      var result = null;
      if (this.token === tokens.T_LIST) {
        result = this.node('list');
        result = result(
          this.next().expect('(').next().read_assignment_list(),
          false
        );
        this.expect(')').next();
      } else if (this.token !== ',' && this.token !== ')') {
        result = this.read_variable(); 
      }
      return result;
    }
  };
};
},{}],19:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
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
      if (this.token === tokens.T_ELLIPSIS) {
        this.next();
        return true;
      }
      return false;
    }    
    /**
     * reading a function
     * <ebnf>
     * function ::= function_declaration code_block
     * </ebnf>
     */
    ,read_function: function(annonymous, isAbstract) {
      var result = this.node(
        this.read_function_declaration(annonymous)
      );
      if (isAbstract) {
        result = result();
        this.expect(';').next();
      } else {
        result = result(
          this.expect('{').read_code_block(false)
        );
      }
      return result;
    }
    /**
     * reads a function declaration (without his body)
     * <ebnf>
     * function_declaration ::= T_FUNCTION '&'?  T_STRING '(' parameter_list ')'
     * </ebnf>
     */
    ,read_function_declaration: function(annonymous) {
      var result = this.node('function');
      this.expect(tokens.T_FUNCTION);
      var isRef = this.next().is_reference();
      var name = false, use = [], returnType = false;
      if (!annonymous) {
        name = this.expect(tokens.T_STRING).text();
        this.next();
      }
      this.expect('(').next();
      var params = this.read_parameter_list();
      this.expect(')').next();
      if (this.token === tokens.T_USE) {
        use = this.next().expect('(').next().read_list(this.read_lexical_var, ',');
        this.expect(')').next();
      }
      if (this.token === ':') {
        returnType = this.next().read_type();
      }
      return result(name, params, isRef, use, returnType);
    }
    /**
     * <ebnf>
     * lexical_var ::= '&'? T_VARIABLE
     * </ebnf>
     */
    ,read_lexical_var: function() {
      var result = [false, null];
      if (this.token === '&') {
        result[0] = true;
        this.next();
      }
      if (this.token === tokens.T_VARIABLE) {
        result[1] = this.text();
        this.next();
      } else {
        this.expect(['&', tokens.T_VARIABLE]);
      }
      return result;
    }
    /**
     * reads a list of parameters
     * <ebnf>
     *  parameter_list ::= (parameter ',')* parameter?
     * </ebnf>
     */
    ,read_parameter_list: function() {
      var result = [];
      if (this.token != ')') {
        while(this.token != EOF) {
          result.push(this.read_parameter());
          if (this.token == ',') {
            this.next();
          } else if (this.token == ')') {
            break;
          } else {
            this.error([',', ')']);
          }
        }
      }
      return result;
    }
    /**
     * <ebnf>
     *  parameter ::= type? '&'? T_ELLIPSIS? T_VARIABLE ('=' expr)?
     * </ebnf>
     * @see https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L640
     */
    ,read_parameter: function() {
      var type = this.read_type();
      var isRef = this.is_reference();
      var isVariadic = this.is_variadic();
      var name = this.expect(tokens.T_VARIABLE).text();
      var value = [];
      if (this.next().token == '=') {
        value = this.next().read_expr();
      }
      return [name, type, value, isRef, isVariadic];
    }
    /**
     * <ebnf>
     *  function_argument_list ::= '(' (argument_list (',' argument_list)*)? ')'
     * </ebnf>
     */
    ,read_function_argument_list: function() {
      var result = [];
      this.expect('(').next();
      if (this.token !== ')') {
        while(this.token != EOF) {
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
     * <ebnf>
     *    argument_list ::= T_ELLIPSIS? expr
     * </ebnf>
     */
    ,read_argument_list: function() {
      if (this.token === tokens.T_ELLIPSIS ) {
        return this.node('...')(this.next().read_expr());
      }
      return this.read_expr();
    }
    /**
     * read type hinting
     * <ebnf>
     *  type ::= T_ARRAY | T_CALLABLE | namespace_name
     * </ebnf>
     */
    ,read_type: function() {
      switch(this.token) {
        case tokens.T_ARRAY:
          this.next();
          return 'array';
        case tokens.T_NS_SEPARATOR:
        case tokens.T_STRING:
          return this.read_namespace_name();
        case tokens.T_CALLABLE:
          this.next();
          return 'callable';
        default:
          return 'mixed';
      }
    }
  };
};
},{}],20:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *  if ::= '(' expr ')' ':' ...
     * </ebnf>
     */
    read_if: function() {
      var result = this.node('if');
      var cond = this.read_if_expr();
      var body = null;
      var elseCond = false;
      
      if (this.token === ':') {
        this.next();
        body = [];
        while(this.token != EOF && this.token !== tokens.T_ENDIF) {
          this.ignoreComments();
          if (this.token === tokens.T_ELSEIF) {
            elseCond = this.next().read_elseif_short();
            break;
          } else if (this.token === tokens.T_ELSE) {
            elseCond = this.next().read_else_short();
            break;
          }
          body.push(this.read_inner_statement());
        }
        this.ignoreComments().expect(tokens.T_ENDIF).next().expectEndOfStatement();
      } else {
        body = this.read_statement();
        this.ignoreComments();
        if (this.token === tokens.T_ELSEIF) {
          elseCond = this.next().read_if();
        } else if (this.token === tokens.T_ELSE) {
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

      while(this.token != EOF && this.token !== tokens.T_ENDIF) {
        if (this.token === tokens.T_ELSEIF) {
          elseCond = this.next().read_elseif_short();
          break;
        } else if (this.token === tokens.T_ELSE) {
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
      while(this.token != EOF && this.token !== tokens.T_ENDIF) {
        body.push(this.read_inner_statement());
      }
      return body;
    }
  };
};
},{}],21:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
    /**
     * Reads a short form of tokens
     */
    read_short_form: function(token) {
      var body = [];
      this.expect(':').next();
      while(this.token != EOF && this.token !== token) {
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
        body = this.read_short_form(tokens.T_ENDWHILE);
      } else {
        body = this.read_statement();
      }
      return result(cond, body);
    }
    ,read_do: function() {
      var result = this.node('do');
      var body = this.read_statement();
      this.expect(tokens.T_WHILE).next().expect('(').next();
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
        body = this.read_short_form(tokens.T_ENDFOR);
      } else  {
        body = this.read_statement();
      }
      return result(expr1, expr2, expr3, body);
    }
    /**
     * <ebnf>
     * foreach ::= '(' expr T_AS foreach_variable (T_DOUBLE_ARROW foreach_variable)? ')' statement
     * </ebnf>
     */
    ,read_foreach: function() {
      var result = this.node('foreach');
      this.expect('(').next();
      var expr = this.read_expr();
      this.expect(tokens.T_AS).next();
      var item = this.read_foreach_variable(), 
        key = false;
      if (this.token === tokens.T_DOUBLE_ARROW) {
        key = item;
        item = this.next().read_foreach_variable();
      }
      this.expect(')').next();
      var body = [];
      if (this.token === ':') {
        body = this.read_short_form(tokens.T_ENDFOREACH);
      } else {
        body = this.read_statement();
      }
      return result(expr, key, item, body);
    }
    /**
     * <ebnf>
     * foreach_variable = ('&'? variable) | (T_LIST '(' assignment_list ')')
     * </ebnf>
     */
    ,read_foreach_variable: function() {
        if (this.token === '&') {
          return ['byref', this.next().read_variable()];
        } else if (this.token === tokens.T_LIST) {
          var result = this.node('list');
          this.next().expect('(').next();
          var assignList = this.read_assignment_list();
          this.expect(')').next();
          return result(assignList, false);
        } else {
          return this.read_variable();
        }
    }
  };
};
},{}],22:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     * start ::= (namespace | top_statement)*
     * </ebnf>
     */
    read_start: function() {
      if (this.token == tokens.T_NAMESPACE) {
        return this.read_namespace();
      } else {
        return this.read_top_statement();
      }
    }
  };
};
},{}],23:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     * namespace ::= T_NAMESPACE namespace_name? '{' 
     *    top_statements 
     * '}' 
     * | T_NAMESPACE namespace_name ';' top_statements
     * </ebnf>
     */
    read_namespace: function() {
      this.expect(tokens.T_NAMESPACE).next();
      var result = this.node('namespace');
      if (this.token == '{') {
        return result([''], this.read_code_block(true));
      } else {
        // @fixme should expect {, T_STRING even if not NS_SEP
        if(this.token === tokens.T_NS_SEPARATOR)
            this.error(['{', tokens.T_STRING]);
        var name = this.read_namespace_name();
        if (this.token == ';') {
          var body = this.nextWithComments().read_top_statements();
          this.expect(EOF);
          return result(name, body);
        } else if (this.token == '{') {
          return result(name, this.read_code_block(true));
        } else {
          this.error(['{', ';']);
        }
      }
    }
    /**
     * reading a namespace name
     * <ebnf>
     *  namespace_name ::= T_NS_SEPARATOR? (T_STRING T_NS_SEPARATOR)* T_STRING
     * </ebnf>
     */
    ,read_namespace_name: function() {
      return this.read_list(tokens.T_STRING, tokens.T_NS_SEPARATOR, true);
    }
    /**
     * <ebnf>
     * use_statements ::=
     *      use_statements ',' use_statement
     *      | use_statement
     * </ebnf>
     */
    ,read_use_statements: function() {
        var result = [];
        while(this.token !== EOF) {
            this.expect(tokens.T_USE).next();
            this.read_list(this.read_use_statement_mixed, ',').forEach(function(item) {
              if (typeof item[0] === 'string') {
                result.push(item);
              } else {
                item.forEach(function(child) {
                  result.push(child);
                });
              }
            });
            if(this.token !== tokens.T_USE) break;
        }
        return result;
    }
    /**
     * <ebnf>
     *  inline_use_declaration ::= ...
     * </ebnf>
     * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L375
     */
    ,read_inline_use_declaration: function(prefix) {
      var result = [];
      while(this.token !== EOF) {
        var node = this.node('use');
        var ns = this.read_use_statement(prefix[3] !== false);
        if(this.token === tokens.T_AS) {
          this.next().expect(tokens.T_STRING);
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
     * <ebnf>
     *   use_statement_mixed ::= 
     *       use_statement  (T_AS T_STRING | '{' read_inline_use_declaration '}' ) 
     *       (',' read_use_statement)*
     * </ebnf>
     */
    ,read_use_statement_mixed: function() {
      var result = this.node('use');
      var use = this.read_use_statement();
      if(this.token === tokens.T_AS) {
        this.next().expect(tokens.T_STRING);
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
     * <ebnf>
     * use_statement ::= (
     *  (T_FUNCTION | T_CONST)? namespace_name
     *  )
     * </ebnf>
     */
    ,read_use_statement: function(ignoreType) {
        var type = false;
        if(
          !ignoreType && (this.token === tokens.T_FUNCTION || this.token === tokens.T_CONST)
        ) {
          type = this.token === tokens.T_FUNCTION ? 'function' : 'const';
          this.next();
        }
        var name = this.read_namespace_name();
        return [name, name[name.length - 1], type];
    }
  };
};
},{}],24:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
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
  return {
    /**
     * <ebnf>
     *  scalar ::= T_MAGIC_CONST 
     *       | T_LNUMBER | T_DNUMBER 
     *       | T_START_HEREDOC T_ENCAPSED_AND_WHITESPACE? T_END_HEREDOC 
     *       | '"' encaps_list '"'
     *       | T_START_HEREDOC encaps_list T_END_HEREDOC
     *       | namespace_name (T_DOUBLE_COLON T_STRING)?
     * </ebnf>
     */
    read_scalar: function() {
      if (this.is('T_MAGIC_CONST')) {
        return this.get_magic_constant();
      } else {
        switch(this.token) {
          
          // TEXTS
          case tokens.T_CONSTANT_ENCAPSED_STRING:
            var value = this.text();
            value = value.substring(1, value.length - 1).replace(
              /\\[rntvef"'\\\$]/g,
              function(seq) {
                return specialChar[seq];
              }
            );
            this.next();
            if (this.token === tokens.T_DOUBLE_COLON) {
              // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1151
              return this.read_static_getter(
                ['string', value]
              );
            } else {
              // dirrect string
              return ['string', value];
            }
          case tokens.T_START_HEREDOC:
            return this.next().read_encapsed_string(
              tokens.T_END_HEREDOC
            );
          case '"':
            return this.next().read_encapsed_string('"');

          // NUMERIC
          case '-':  // long
          case tokens.T_LNUMBER:  // long
          case tokens.T_DNUMBER:  // double
            var result = this.node('number');
            var value = this.text();
            if (this.token === '-') {
              this.next().expect([
                tokens.T_LNUMBER, tokens.T_DNUMBER
              ]);
              value += this.text();
            }
            this.next();
            return result(value);
          
          // CONSTANTS
          case tokens.T_NS_SEPARATOR:
          case tokens.T_STRING:
            var value = this.read_namespace_name();
            var result = ['const', value];
            if ( this.token == tokens.T_DOUBLE_COLON) {
              // class constant  MyClass::CONSTANT
              this.next().expect([tokens.T_STRING, tokens.T_CLASS]);
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
          case tokens.T_ARRAY:  // array parser
          case '[':             // short array format
            return this.read_array();
          default:
            this.error('SCALAR');
        }
      }
    }
    /**
     * <ebnf>
     * encapsed_string_item ::= T_ENCAPSED_AND_WHITESPACE | T_DOLLAR_OPEN_CURLY_BRACES ... | variable  | T_CURLY_OPEN variable '}'
     * </ebnf>
     */
    ,read_encapsed_string_item: function() {
      var result = null;
      if (this.token === tokens.T_ENCAPSED_AND_WHITESPACE) {
        result = ['string', this.text()];
        this.next();
      } else if (this.token === tokens.T_DOLLAR_OPEN_CURLY_BRACES) {
        // ebnf :
        // T_DOLLAR_OPEN_CURLY_BRACES expr '}'
        // | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '}'
        // | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '[' expr ']' '}'
        if (this.next().token === tokens.T_STRING_VARNAME) {
          result = ['var', this.text()];
          if (this.next().token === '[') {
            result = ['offset', result, this.next().read_expr()];
            this.expect(']').next();
          }
        } else {
          result = this.read_expr();
        }
        this.expect('}').next();
      } else if (this.token === tokens.T_CURLY_OPEN) {
        result = this.next().read_variable(false, false);
        this.expect('}').next();
      } else if (this.token === '[') {
        result = ['offset', result, this.next().read_expr()];
        this.expect(']').next();
      } else if (this.token === tokens.T_VARIABLE) {
        result = this.read_variable(false, true);
      } else {
        this.expect([
          tokens.T_VARIABLE,
          tokens.T_CURLY_OPEN,
          tokens.T_DOLLAR_OPEN_CURLY_BRACES,
          tokens.T_ENCAPSED_AND_WHITESPACE
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
};
},{}],25:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  return {
    /**
     * reading a list of top statements (helper for top_statement*)
     * <ebnf>
     *  top_statements ::= top_statement*
     * </ebnf>
     */
    read_top_statements: function() {
      var result = [];
      while(this.token !== EOF && this.token !== '}') {
        var statement = this.read_top_statement();
        if (statement) {
          if (typeof statement[0] === 'string') {
            result.push(statement);
          } else {
            result = result.concat(statement);
          }
        }
      }
      return result;
    }
    /**
     * reading a top statement
     * <ebnf>
     *  top_statement ::= 
     *       namespace | function | class 
     *       | interface | trait 
     *       | use_statements | const_list 
     *       | statement
     * </ebnf>
     */
    ,read_top_statement: function() {
      switch(this.token) {
        case tokens.T_FUNCTION:
          return this.read_function();
        // optional flags
        case tokens.T_ABSTRACT:
        case tokens.T_FINAL:
          var flag = this.read_class_scope();
          switch(this.token) {
            case tokens.T_CLASS:
              return this.read_class(flag);
            case tokens.T_INTERFACE:
              return this.read_interface(flag);
            default:
              this.error([tokens.T_CLASS, tokens.T_INTERFACE]);
          }
        case tokens.T_CLASS:
          return this.read_class(0);
        case tokens.T_INTERFACE:
          return this.read_interface(0);
        case tokens.T_TRAIT:
          return this.read_trait();
        case tokens.T_USE:
          var expr = this.read_use_statements();
          this.expect(';').next();
          return expr;
        case tokens.T_CONST:
          return this.next().read_const_list();
        case tokens.T_NAMESPACE:
          return this.read_namespace();
        default:
          return this.read_statement();
      }
    }
    /**
     * reads a list of simple inner statements (helper for inner_statement*)
     * <ebnf>
     *  inner_statements ::= inner_statement*
     * </ebnf>
     */
    ,read_inner_statements: function() {
      var result = [];
      while(this.token != EOF && this.token !== '}') {
        var statement = this.read_inner_statement();
        if (statement) {
          if (typeof statement[0] === 'string') {
            result.push(statement);
          } else {
            result = result.concat(statement);
          }
        }
      }
      return result;
    }
    /**
     * Reads a list of constants declaration
     * <ebnf>
     *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)* ';'
     * </ebnf>
     */
    ,read_const_list: function() {
      var result = this.read_list(function() {
        this.expect(tokens.T_STRING);
        var name = this.text();
        this.next().expect('=').next();
        return [name, this.read_expr()];
      }, ',');
      this.expectEndOfStatement();
      return ['const', result];
    }
    /**
     * Reads a list of constants declaration
     * <ebnf>
     *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)*
     * </ebnf>
     */
    ,read_declare_list: function() {
      return this.read_list(function() {
        this.expect(tokens.T_STRING);
        var name = this.text();
        this.next().expect('=').next();
        return [name, this.read_expr()];
      }, ',');
    }
    /**
     * reads a simple inner statement
     * <ebnf>
     *  inner_statement ::= '{' inner_statements '}' | token
     * </ebnf>
     */
    ,read_inner_statement: function() {
      switch(this.token) {
        case tokens.T_FUNCTION:
          return this.read_function();
        // optional flags
        case tokens.T_ABSTRACT:
        case tokens.T_FINAL:
          var flag = this.read_class_scope();
          switch(this.token) {
            case tokens.T_CLASS:
              return this.read_class(flag);
            case tokens.T_INTERFACE:
              return this.read_interface(flag);
            default:
              this.error([tokens.T_CLASS, tokens.T_INTERFACE]);
          }
        case tokens.T_CLASS:
          return this.read_class(0);
        case tokens.T_INTERFACE:
          return this.read_interface(0);
        case tokens.T_TRAIT:
          return this.read_trait();
        // @todo T_HALT_COMPILER '(' ')' ';'
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

        case tokens.T_IF: return this.next().read_if();

        case tokens.T_SWITCH: return this.read_switch();

        case tokens.T_FOR: return this.next().read_for();

        case tokens.T_FOREACH: return this.next().read_foreach();

        case tokens.T_WHILE: return this.next().read_while();

        case tokens.T_DO: return this.next().read_do();

        case tokens.T_COMMENT: return this.read_comment();

        case tokens.T_DOC_COMMENT: return this.read_doc_comment();

        case tokens.T_RETURN:
        case tokens.T_BREAK:
        case tokens.T_CONTINUE:
          var mode;
          switch(this.token) {
            case tokens.T_RETURN:     mode = 'return';    break;
            case tokens.T_BREAK:      mode = 'break';     break;
            case tokens.T_CONTINUE:   mode = 'continue';  break;
          }
          var expr = null;  
          if (!this.next().is('EOS')) {
            expr = this.read_expr();
          }
          this.expectEndOfStatement();
          return [mode, expr];

        case tokens.T_GLOBAL:
          var items = this.next().read_list(this.read_simple_variable, ',');
          this.expectEndOfStatement();
          return ['global', items];

        case tokens.T_STATIC:
          var current = [this.token, this.lexer.getState()];
          var result = this.node('global');
          if (this.next().token === tokens.T_DOUBLE_COLON) {
            // static keyword for a class 
            this.lexer.tokens.push(current);
            var expr = this.next().read_expr();
            this.expect(';').nextWithComments();
            return expr;
          }
          var items = this.read_list(function() {
            var name = this.expect(tokens.T_VARIABLE).text();
            var value = null;
            if (this.next().token === '=') {
              value = this.next().read_expr();
            }
            return [name, value];
          }, ',');
          this.expectEndOfStatement();
          return result(items);

        case tokens.T_ECHO:
          var items = this.next().read_list(this.read_expr, ',');
          this.expectEndOfStatement();
          return ['sys', 'echo', items];

        case tokens.T_INLINE_HTML:
          var text = ['string', this.text()];
          this.next();
          return ['sys', 'echo', text];

        case tokens.T_UNSET:
          this.next().expect('(').next();
          var items = this.read_list(this.read_variable, ',');
          this.expect(')').next().expect(';').next();
          return ['sys', 'unset', items];

        case tokens.T_DECLARE:
          var result = this.node('declare');
          this.next().expect('(').next();
          var options = this.read_declare_list();
          this.expect(')').nextWithComments();
          var body = this.read_statement();
          return result(options, body);
          break;

        case tokens.T_TRY:
          return this.read_try();

        case tokens.T_THROW:
          var result = this.node('throw');
          var expr = this.next().read_expr();
          this.expectEndOfStatement();
          return result(expr);

        case ';': // ignore this (extra ponctuation)
        case tokens.T_CLOSE_TAG: // empty tag
          this.next();
          return null;

        case tokens.T_STRING:
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
            this.expect([';', tokens.T_CLOSE_TAG]).next();
            return expr;
          }

        case tokens.T_GOTO:
          var result = this.node('goto');
          var label = this.next().expect(tokens.T_STRING).text();
          this.next().expectEndOfStatement();
          return result(label);

        default: // default fallback expr
          var expr = this.read_expr();
          this.expectEndOfStatement();
          return expr;
      }
    }
    /**
     * <ebnf>
     *  code_block ::= '{' (inner_statements | top_statements) '}'
     * </ebnf>
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
};
},{}],26:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  return {
    /**
     * Reads a switch statement
     * <ebnf>
     *  switch ::= T_SWITCH '(' expr ')' switch_case_list
     * </ebnf>
     */
    read_switch: function() {
      this.expect(tokens.T_SWITCH).next();
      var result = this.node('switch');
      this.expect('(').next();
      var expr = this.read_expr();
      this.expect(')').next();
      var cases = this.read_switch_case_list();
      return result(expr, cases);
    }
    /**
     * <ebnf>
     *  switch_case_list ::= '{' ';'? case_list* '}' | ':' ';'? case_list* T_ENDSWITCH ';'  
     * </ebnf>
     */
    ,read_switch_case_list: function() {
      // DETECT SWITCH MODE
      var expect = null, result = [];
      if (this.token === '{') {
        expect = '}';
      } else if (this.token === ':') {
        expect = tokens.T_ENDSWITCH;
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
      if (this.token === tokens.T_CLOSE_TAG) {
        this.next();
      }
      // EXTRACTING CASES
      while(this.token !== EOF && this.token !== expect) {
        result.push( this.read_case_list(expect) );
      }
      // CHECK END TOKEN
      this.expect(expect).next();
      if (expect === tokens.T_ENDSWITCH) {
        this.expectEndOfStatement();
      }
      return result;
    }
    /**
     * <ebnf>
     *   case_list ::= ((T_CASE expr) | T_DEFAULT) (':' | ';') inner_statement*
     * </ebnf>
     */
    ,read_case_list: function(stopToken) {
      var result = {
        condition: false,
        body: []
      };
      if (this.token === tokens.T_CASE) {
        result.condition = this.next().read_expr();
      } else if (this.token === tokens.T_DEFAULT) {
        // the defaut entry - no condition
        this.next();
      } else {
        this.expect([tokens.T_CASE, tokens.T_DEFAULT]);
      }
      this.expect([':', ';']).next();
      while(
        this.token != EOF 
        && this.token !== stopToken
        && this.token !== tokens.T_CASE
        && this.token !== tokens.T_DEFAULT
      ) {
        result.body.push(this.read_inner_statement());
      }
      return result;
    }
  };
};
},{}],27:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *  try ::= T_TRY '{' inner_statement* '}' 
     *          (
     *              T_CATCH '(' namespace_name variable ')' '{'  inner_statement* '}' 
     *          )* 
     *          (T_FINALLY '{' inner_statement* '}')?
     * </ebnf>
     */
    read_try: function() {

      // @todo implement the short form of declarations
      this.expect(tokens.T_TRY);
      var result = this.node('try');
      var code = this.nextWithComments().read_statement();
      var allways = false;
      var catches = [];
      
      this.ignoreComments();
      while(this.token === tokens.T_CATCH) {
        this.next().expect('(').next();
        var exName = this.read_namespace_name();
        var varName = this.read_variable(true);
        this.expect(')').nextWithComments();
        catches.push({
          exception: exName,
          as: varName,
          body: this.read_statement()
        });
        this.ignoreComments();
      }
      if (this.token === tokens.T_FINALLY) {
        allways = this.nextWithComments().read_statement();
      }
      return result(code, catches, allways);
    }
  };
};
},{}],28:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *   variable ::= ...complex @todo
     * </ebnf>
     * <code>
     *  $var                      // simple var
     *  classname::CONST_NAME     // dynamic class name with const retrieval
     *  foo()                     // function call
     *  $var->func()->property    // chained calls
     * </code>
     */
    read_variable: function(read_only, encapsed) {
      var result;

      // reads the entry point
      if (this.is([tokens.T_VARIABLE, '$'])) {
        result = this.read_reference_variable(encapsed);
      } else if (this.is([tokens.T_NS_SEPARATOR, tokens.T_STRING])) {
        result = this.read_namespace_name();
        if (
          this.token != tokens.T_DOUBLE_COLON
          && this.token != '('
        ) {
          // @see parser.js line 130 : resolves a conflict with scalar
          result = ['const', result.length == 1 ? result[0] : result];
        } else {
          result = ['ns', result];
        }
      } else if (this.token === tokens.T_STATIC) {
        this.next();
        result = ['ns', ['static']];
      } else {
        this.expect('VARIABLE');
      }

      // static mode
      if (this.token === tokens.T_DOUBLE_COLON) {
        result = this.read_static_getter(result, encapsed);
      }

      return this.recursive_variable_chain_scan(result, read_only, encapsed);
    }

    // resolves a static call
    ,read_static_getter: function(from, encapsed) {
      var getter = null;
      if (this.next().is([tokens.T_VARIABLE, '$'])) {   
        getter = this.read_reference_variable(encapsed);
      } else if (
        this.token === tokens.T_STRING
        || this.token === tokens.T_CLASS
      ) {
        getter = this.text();
        this.next();
      } else {
        this.error([tokens.T_VARIABLE, tokens.T_STRING]);
      }
      if (from[0] != 'ns') {
        from = ['lookup', 'class', from];
      }
      return ['static', 'get', from, getter];
    }

    ,recursive_variable_chain_scan: function(result, read_only, encapsed) {
      recursive_scan_loop:
      while(this.token != EOF) {
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
          case tokens.T_OBJECT_OPERATOR:
            var what;
            switch(this.next().token) {
              case tokens.T_STRING:
                what = ['string', this.text()];
                var tok = this.next().token;
                if (tok === tokens.T_VARIABLE) {
                  // fix $obj->var_$prop
                  what = ['bin', '.', what, ['var', this.text()]];
                } else if (tok === '{') {
                  // fix $obj->var_{$prop}
                  what = ['bin', '.', what, this.next().read_expr()];
                  this.expect('}').next();
                }
                break;
              case tokens.T_VARIABLE:
                what = ['var', this.text()];
                this.next();
                break;
              case '$':
                
                this.next().expect(['{', tokens.T_VARIABLE]);
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
                this.error([tokens.T_STRING, tokens.T_VARIABLE]);
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
      var offset = false;
      if (this.token === tokens.T_STRING) {
        offset = ['string', this.text()];
      } else if (this.token === tokens.T_NUM_STRING) {
        offset = ['number', this.text()];
      } else if (this.token === tokens.T_VARIABLE) {
        offset = ['var', this.text()];
      } else {
        this.expect([
          tokens.T_STRING,
          tokens.T_NUM_STRING,
          tokens.T_VARIABLE
        ]);
      }
      this.next();
      return offset;
    }
    /**
     * <ebnf>
     *  reference_variable ::=  simple_variable ('[' OFFSET ']')* | '{' EXPR '}'
     * </ebnf>
     * <code>
     *  $foo[123];      // foo is an array ==> gets its entry
     *  $foo{1};        // foo is a string ==> get the 2nd char offset
     *  ${'foo'}[123];  // get the dynamic var $foo
     *  $foo[123]{1};   // gets the 2nd char from the 123 array entry
     * </code>
     */
    ,read_reference_variable: function(encapsed) {
      var result = this.read_simple_variable();
      while(this.token != EOF) {
        if (this.token == '[') {
          if (encapsed) {
            result = this.next().read_encaps_var_offset();
          } else {
            result = ['offset', result, this.next().read_dim_offset()];
          }
          this.expect(']').next();
        } else if (this.token == '{' && !encapsed) {
          result = ['offset', result, this.next().read_expr()];
          this.expect('}').next();
          break;
        } else break;
      }
      return result;
    }
    /**
     * <ebnf>
     *  simple_variable ::= T_VARIABLE | '$' '{' expr '}' | '$' simple_variable
     * </ebnf>
     */
    ,read_simple_variable: function() {
      var result;
      if (this.expect([tokens.T_VARIABLE, '$']).token === tokens.T_VARIABLE) {
        // plain variable name
        result = ['var', this.text()];
        this.next();
      } else {
        // dynamic variable name
        switch(this.next().token) {
          case '{':
            result = this.next().read_expr();
            this.expect('}').next();
            break;
          case '$': // $$$var 
            result = ['lookup', 'var', this.read_simple_variable()];
            break;
          case tokens.T_VARIABLE: // $$var
            result = ['var', this.text()];
            this.next();
            break;
          default:
            this.error(['{', '$', tokens.T_VARIABLE]);
        }
        result = ['lookup', 'var', result]; 
      }
      return result; 
    }
  };
};
},{}],29:[function(require,module,exports){
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
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
/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var extend = require('util')._extend;

// helper to clone an object
var deepCopy = function(origin, add) {
  if (!add || typeof add !== 'object') return origin;
  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    var assign = add[keys[i]];
    if (typeof assign === 'object' && !Array.isArray(assign)) {
      if (!origin.hasOwnProperty(keys[i])) {
        origin[keys[i]] = {};
      }
      origin[keys[i]] = deepCopy(origin[keys[i]], assign);
    } else {
      origin[keys[i]] = assign;
    }
  }
  return origin;
};


var engine = {

  // creates a new instance (for multiple parsing cases)
  create: function(options) {
    var result = deepCopy({}, this);
    if (options) {
      if (options.hasOwnProperty('lexer')) {
        result.lexer = deepCopy(result.lexer, options.lexer);
      }
      if (options.hasOwnProperty('parser')) {
        result.parser = deepCopy(result.parser, options.parser);
      }
      result.parser.lexer = result.lexer;
    }
    return result;
  },

  // parsing eval string as '$x = 1;'
  parseEval: function(buffer, options) {
    var lexer = this.lexer;
    var parser = this.parser;
    if (options) {
      if (options.hasOwnProperty('lexer')) {
        lexer = extend(lexer, options.lexer);
      }
      if (options.hasOwnProperty('parser')) {
        parser = extend(parser, options.parser);
      }
      parser.lexer = lexer;
    }
    lexer.mode_eval = true;
    lexer.all_tokens = false;
    return parser.parse(buffer);
  }

  // parse php code with '<?php $x = 1;'
  ,parseCode: function(buffer, options) {
    var lexer = this.lexer;
    var parser = this.parser;
    if (options) {
      if (options.hasOwnProperty('lexer')) {
        lexer = extend(lexer, options.lexer);
      }
      if (options.hasOwnProperty('parser')) {
        parser = extend(parser, options.parser);
      }
      parser.lexer = lexer;
    }
    lexer.mode_eval = false;
    lexer.all_tokens = false;
    return parser.parse(buffer);
  }
  
  // split the buffer into tokens
  ,tokenGetAll: function(buffer, options) {
    var lexer = this.lexer;
    lexer.mode_eval = false;
    lexer.all_tokens = true;
    if (options) {
      lexer = extend(lexer, options);
    }
    var EOF = lexer.EOF;
    var names = this.tokens.values;
    lexer.setInput(buffer);
    var token = lexer.lex() || EOF;
    var result = [];
    while(token != EOF) {
      var entry = lexer.yytext;
      if (names.hasOwnProperty(token)) {
        entry = [names[token], entry, lexer.yylloc.first_line];
      }
      result.push(entry);
      token = lexer.lex() || EOF;
    }
    return result;
  }
  ,parser: null
  ,lexer: null
  // tokens dictionnary
  ,tokens: require('./src/tokens')
};

// lexer instance
engine.lexer = require('./src/lexer')(engine);

// parser instance
engine.parser = require('./src/parser')(engine);

module.exports = engine;

},{"./src/lexer":5,"./src/parser":14,"./src/tokens":29,"util":4}]},{},["php-parser"]);
