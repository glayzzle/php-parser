var should = require("should");
var parser = require('../../main');

describe('Test gracefull mode', function() {

  describe('to suppress errors', function() {
    
    // init a new parser instance
    var test = parser.create();
    test.parser.gracefull(true);

    // Get result from parser
    var ast = test.parseEval([
      '$var = ',                // 1.
        'function() {',         // 2.
          '$foo = ',            // 3. <-- missing expr
        '}',                    // 4.
      '}'                       // 5. <-- extra '}' token here
    ].join('\n'));

    it('should contain 2 errors', function () {
      ast[2].length.should.be.exactly(2);
    });

  });

});