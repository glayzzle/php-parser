/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/glayzzle-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var engine = {
  // parsing helper
  parse: function(buffer) {
    this.lexer.mode_eval = true;
    this.lexer.all_tokens = false;
    return this.parser.parse(buffer);
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
