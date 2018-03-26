var should = require("should");
var parser = require("../src/index");

describe("Test tokens statements", function() {
  it('hello world', function() {
    var ast = parser.parseCode(
      'Hello <?= $world; ?>', {
      parser: {
        debug: false,
        extractTokens: true
      }
    });
    ast.tokens.length.should.be.exactly(7);
    ast.tokens[0][1].should.be.exactly('Hello ');
  });
});
