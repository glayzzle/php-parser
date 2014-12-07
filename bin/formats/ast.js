/**
 * Glayzzle : PHP on NodeJS
 * @url http://glayzzle.com
 * @author Ioan CHIRIAC
 * @license BSD-3-Clause
 */
var fs = require('fs');
var util = require('util');

module.exports = {
  handles: function(filename, ext) {
    return false;
  }
  ,run: function(filename, php) {
    var parser = php.parser();
    parser.lexer.all_tokens = false;
    parser.lexer.mode_eval = false;
    try {
      var AST = parser.parse( fs.readFileSync(filename).toString() );
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