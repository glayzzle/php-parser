/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var fs      = require('fs');
var util    = require('util');
var cmd     = require('./cmd');

module.exports = {
  handles: function(filename, ext) {
    return ext == '.php' || ext === '.phtml';
  }
  // runs the specified filename
  ,run: function(filename, engine) {
    var ast = false;
    try {
      ast = engine.parseCode(
        fs.readFileSync(filename).toString()
      );
    } catch(e) {
      var hasError = cmd.checkError(filename);
      var line = engine.lexer.yylloc.first_line;
      console.log(hasError, e);
      if (hasError === false) {
        throw e;
      } else if (hasError != line) {
        console.error('Found error at', line, 'but expected at', hasError);
        throw e;
      } else {
        if (engine.parser.debug) {
          console.log('! - Found error at', line, 'but it\'s ok');
        } else {
          console.log('v - Passed AST parsing (with error)');
        }
        return true;
      }
    }
    if (engine.parser.debug) {
      console.log(
        util.inspect(
          ast, { 
            showHidden: false, 
            depth: 10, 
            colors: true 
          }
        )
      );
    }
    if (ast[0] === 'program') {
      console.log('v - Passed AST parsing');
      return true;
    } else {
      console.error('x - Warning : the AST tree is empty');
      return false;
    }
  }
};