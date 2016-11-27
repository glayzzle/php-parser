var should = require("should");
var parser = require('../../main');

describe('Test offsets', function() {

  describe('to check offsets', function() {
    
    // init a new parser instance
    var text = [
      ' // a comment ',
      'echo "string";'
    ].join('\r\n');
    var ast = parser.parseEval(
      text, 
      {
        parser: {
          locations: true
        }
      }
    );
    /** @fixme should test & fix offsets **/
    // console.log(ast[1]);

  });

});