var should = require("should");
var assert = should;
var parser = require('../../main');

describe('Suppress errors option', function() {

  describe('when enabled', function () {
    it('should not throw exception', function () {
      parser.parser.suppressErrors = true;
      var ast = parser.parseEval('$test = ""; $va =');
      ast[1].length.should.be.exactly(2);
    });

    it('should not parse file past the error point', function () {
      parser.parser.suppressErrors = true;
      var ast = parser.parseEval('$test = ""; $va =; $myVar = "";');
      console.log(ast);
      ast[1].length.should.be.exactly(2);
    });
  });

    // TODO -- Figure out how to assert exceptions in should.js/mocha
//   describe('when disabled', function () {
//     it('should throw exception', function () {
//       parser.parser.suppressErrors = false;
//       parser.parseEval('$va =; $test = "";').should.throw();
//     });
//   });

});