/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var fs      = require('fs');
var util 	= require('util');

module.exports = {
  handles: function(filename, ext) {
    return ext == '.php';
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
    return ast[0] === 'program' && ast[1].length > 0;
  }
};