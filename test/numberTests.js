var should = require("should");
var parser = require('./main');

describe('Test numbers', function() {

  describe('comon tests', function() {
    var ast = parser.parseEval([
      '$a = -1.5;',
      '$b = 1234;',
      '$c = 9223372036854775807;',
      '$c = 9223372036854775808;',
      '$d = 0x1A;',
      '$d = 0xFF;',
      '$e = 0b1011;',
      '$f = 0123;',
      '$g = 1.2e3;',
      '$h = 7E-10;'
    ].join('\n'));
    it('should be float', function() {
      ast.children[0].right.kind.should.be.exactly('number');
      ast.children[0].right.value.should.be.exactly('-1.5');
    });

  });
  // @fixme should test bad syntaxes
  // like 01239 (octal number with bad token)
  describe('edge tests', function() {
    var ast = parser.parseEval([
      '$a = 0xx;',
      '$b = 0b2;',
      '$c = 01239;',
      '$d = 7E-a;',
      '$e = 7EX;'
    ].join('\n'), {
      parser: {
        suppressErrors: true
      }
    });

  });
});
