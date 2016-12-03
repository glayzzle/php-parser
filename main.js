/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var lexer = require('./src/lexer');
var parser = require('./src/parser');
var tokens = require('./src/tokens');

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
 * @property {Lexer} lexer
 * @property {Parser} parser
 * @property {Object} tokens
 */
var engine = function(options) {
  if (typeof this === 'function') {
    return new this(options);
  }
  this.tokens = tokens;
  this.lexer = new lexer(this);
  this.parser = new parser(this.lexer);
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
