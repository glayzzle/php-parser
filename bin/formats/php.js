/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var fs      = require('fs');
var util 	= require('util');

module.exports = {
  handles: function(filename, ext) {
    return ext == '.php' || ext === '.phtml';
  }
  // runs the specified filename
  ,run: function(filename, engine) {
  	var ast = engine.parseCode(
  		fs.readFileSync(filename).toString()
  	);
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