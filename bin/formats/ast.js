/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var fs = require('fs');
var util = require('util');

module.exports = {
  handles: function(filename, ext) {
    return filename.indexOf("/ast/") > -1 && (
      ext == '.php'
      || ext == '.phtml'
      || ext == '.html'
    );
  }
  ,run: function(filename, php) {
    var parser = php.parser();
    parser.lexer.all_tokens = false;
    parser.lexer.mode_eval = false;
    try {
      var AST = parser.parseCode( 
        fs.readFileSync(filename).toString() 
      );
      console.log(
        util.inspect(
          AST, { 
            showHidden: false, 
            depth: 10, 
            colors: true 
          }
        )
      );
      return true;
    } catch(e) {
      console.error(e);
      return false;
    }
  }
};