/**
 * Copyright (C) 2020 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const lexer = require("./lexer");
const parser = require("./parser");
const tokens = require("./tokens");
const AST = require("./ast");

const DEFAULT_PHP_VERSION = "8.4";

/**
 * @private
 */
function combine(src, to) {
  const keys = Object.keys(src);
  let i = keys.length;
  while (i--) {
    const k = keys[i];
    const val = src[k];
    if (val === null) {
      delete to[k];
    } else if (typeof val === "function") {
      to[k] = val.bind(to);
    } else if (Array.isArray(val)) {
      to[k] = Array.isArray(to[k]) ? to[k].concat(val) : val;
    } else if (typeof val === "object") {
      to[k] = typeof to[k] === "object" ? combine(val, to[k]) : val;
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
 *   version: 704 // or '7.4'
 *   parser: {
 *     extractDoc: true,
 *     suppressErrors: true,
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
const Engine = function (options) {
  if (typeof this === "function") {
    return new this(options);
  }
  this.tokens = tokens;
  this.lexer = new lexer(this);
  this.ast = new AST();
  this.parser = new parser(this.lexer, this.ast);
  if (options && typeof options === "object") {
    // disable php7 from lexer if already disabled from parser
    if (options.parser) {
      if (!options.lexer) {
        options.lexer = {};
      }
    }
    combine(options, this);
  }

  // options.parser.version is deprecated, use options.version instead
  const versionString = options?.version ?? options?.parser?.version;
  this.version = normalizeVersion(versionString ?? DEFAULT_PHP_VERSION);
};

/**
 * Validate and normalize a version (string or number) to a version number
 * @private
 * @param {String|Number} versionString - The version string or number to
 * validate and normalize, e.g., "7.4", or 704
 * @return {Number} - The normalized version number, e.g. 704
 * @throws {Error} - If the version is not a valid number or out of range
 */
function normalizeVersion(versionString) {
  let version = versionString;
  if (typeof version === "string") {
    const versionParts = version.split(".");
    version = parseInt(versionParts[0]) * 100 + parseInt(versionParts[1]);
    if (isNaN(version)) {
      throw new Error("Bad version number : " + versionString);
    }
  } else if (typeof version !== "number") {
    throw new Error("Expecting a string or number for version");
  }
  if (version < 500 || version > 900) {
    throw new Error("Can only handle versions between 5.x to 8.x");
  }
  return version;
}

/**
 * Check if the inpyt is a buffer or a string
 * @private
 * @param  {Buffer|String} buffer Input value that can be either a buffer or a string
 * @return {String}   Returns the string from input
 */
const getStringBuffer = function (buffer) {
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
  const self = new Engine(options);
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
  if (typeof filename === "object" && !options) {
    // retro-compatibility
    options = filename;
    filename = "unknown";
  }
  const self = new Engine(options);
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
  const self = new Engine(options);
  return self.tokenGetAll(buffer);
};

/**
 * Extract tokens from the specified buffer.
 * > Note that the output tokens are *STRICLY* similar to PHP function `token_get_all`
 * @param {string} buffer
 * @return {Array<string|string[]>} - Each item can be a string or an array with following informations [token_name, text, line_number]
 */
Engine.prototype.tokenGetAll = function (buffer) {
  this.lexer.mode_eval = false;
  this.lexer.all_tokens = true;
  buffer = getStringBuffer(buffer);
  const EOF = this.lexer.EOF;
  const names = this.tokens.values;
  this.lexer.setInput(buffer);
  let token = this.lexer.lex() || EOF;
  const result = [];
  while (token != EOF) {
    let entry = this.lexer.yytext;
    if (Object.prototype.hasOwnProperty.call(names, token)) {
      entry = [names[token], entry, this.lexer.yylloc.first_line];
    }
    result.push(entry);
    token = this.lexer.lex() || EOF;
  }
  return result;
};

/** @module php-parser */

// exports the function
module.exports = Engine;

// makes libraries public
module.exports.tokens = tokens;
module.exports.lexer = lexer;
module.exports.AST = AST;
module.exports.parser = parser;
module.exports.combine = combine;
module.exports.Engine = Engine;

// allow the default export in index.d.ts
module.exports.default = Engine;
