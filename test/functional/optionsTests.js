var should = require("should");
var parser = require('../../main');

describe('Test options', function() {

  describe('to suppress errors', function() {
    
    // init a new parser instance
    var test = parser.create({
      parser: {
        suppressErrors: true
      }
    });
    
    // Get result from parser
    var ast = test.parseEval([
      '$var = ',                // 1.
        'function() {',         // 2.
          '$foo = "bar"',       // 3.
        '}',                    // 4.
      '}'                       // 5. <-- extra '}' token here
    ].join('\n'));

    it('should be of type object', function () {
      (typeof test.parser.lastError).should.be.exactly("object");
    });

    it('should be at line 5', function () {
      test.parser.lastError.line.should.be.exactly(5);
    });
  
    it('should be have the $var', function () {
      ast[1][0][1][1].should.be.exactly('$var');
    });
  
    it('should be have the function', function () {
      ast[1][0][2][0].should.be.exactly('function');
    });

  });

  describe('to throw errors (defaut behaviour)', function() {

    // init a new parser instance
    var test = parser.create();

    it('should not suppressErrors', function () {
      test.parser.suppressErrors.should.be.exactly(false);
    });

    // Get result from parser
    var error = false;
    try {
      var ast = test.parseEval([
        '$var = ',                // 1.
          'function() {',         // 2.
            '$foo = "bar"',       // 3.
          '! }',                  // 4. <-- parse error here
        '}'                       // 5.
        ].join('\n')
      );
    } catch(e) {
      error = e;
    }

    it('should be of type object', function () {
      (typeof error).should.be.exactly("object");
    });

    it('should have the same message as last error', function () {
      error.message.should.be.exactly(test.parser.lastError.message);
    });

    it('should be at line 4', function () {
      test.parser.lastError.line.should.be.exactly(4);
    });

  });
  
  describe('test errors cleanup', function() {

    // init a new parser instance
    var test = parser.create({
      parser: {
        suppressErrors: true
      }
    });

    it('should be an error', function () {
      test.parseEval('if ($var = )');
      (typeof test.parser.lastError).should.be.exactly("object");
    });

    it('should be without error', function () {
      test.parseEval('$var = true;');
      test.parser.lastError.should.be.exactly(false);
    });

  })
  

});