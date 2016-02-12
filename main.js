/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var extend = require('util')._extend;
var engine = {
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
  ,parser: null
  // lexer instance
  ,lexer: require('./src/lexer')
  // tokens dictionnary
  ,tokens: require('./src/tokens')
};
// parser instance
engine.parser = require('./src/parser')(engine);
module.exports = engine;
