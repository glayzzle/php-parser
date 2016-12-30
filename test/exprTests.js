var should = require("should");
var parser = require('../src/index');

describe('Test expressions', function() {
  it('test binary', function() {
    var ast = parser.parseEval([
      '1 | 3;',
      '1 & 3;',
      '1 ^ 3;',
      '"a" . "b";',
      '1 + 3;',
      '1 - 3;',
      '1 * 3;',
      '1 / 3;',
      '1 % 3;',
      '1 ** 3;',
      '1 << 3;',
      '1 >> 3;'
    ].join('\n'));

    ast.children[0].kind.should.be.exactly('bin');
    ast.children[0].type.should.be.exactly('|');
    ast.children[0].left.value.should.be.exactly('1');
    ast.children[0].right.value.should.be.exactly('3');

    ast.children[1].kind.should.be.exactly('bin');
    ast.children[1].type.should.be.exactly('&');
    ast.children[1].left.value.should.be.exactly('1');
    ast.children[1].right.value.should.be.exactly('3');

    ast.children[2].kind.should.be.exactly('bin');
    ast.children[2].type.should.be.exactly('^');
    ast.children[2].left.value.should.be.exactly('1');
    ast.children[2].right.value.should.be.exactly('3');
    // @todo
  });

  it('test boolean', function() {
    var ast = parser.parseEval([
      '$a && $b;',
      '$a AND $b;',
      '$a || $b;',
      '$a OR $b;',
      '$a XOR $b;',
      '$a === $b;',
      '$a !== $b;',
      '$a == $b;',
      '$a != $b;',
      '$a > $b;',
      '$a < $b;',
      '$a >= $b;',
      '$a <= $b;',
      '$a <=> $b;',
      '$a instanceof $b;'
    ].join('\n'));
    // @todo
  });

  it('test if based returns', function() {
    var ast = parser.parseEval([
      '$a ?? false;',
      '$a ? true : false;',
      '$a ?: false;'
    ].join('\n'));
    // @todo
  });

  it('test unary', function() {
    var ast = parser.parseEval([
      '+$var;',
      '~$var;',
      '!$var;',
      '-$var;'
    ].join('\n'));
    ast.children[0].kind.should.be.exactly('unary');
    ast.children[0].type.should.be.exactly('+');
    ast.children[0].what.kind.should.be.exactly('variable');
    ast.children[1].kind.should.be.exactly('unary');
    ast.children[1].type.should.be.exactly('~');
    ast.children[1].what.kind.should.be.exactly('variable');
    ast.children[2].kind.should.be.exactly('unary');
    ast.children[2].type.should.be.exactly('!');
    ast.children[2].what.kind.should.be.exactly('variable');
    ast.children[3].kind.should.be.exactly('unary');
    ast.children[3].type.should.be.exactly('-');
    ast.children[3].what.kind.should.be.exactly('variable');
  });

  it('test cast', function() {
    var ast = parser.parseEval([
      '(int)$var;',
      '(double)$var;',
      '(string)$var;',
      '(array)$var;',
      '(object)$var;',
      '(boolean)$var;',
      '(unset)$var;'
    ].join('\n'));
    ast.children[0].kind.should.be.exactly('cast');
    ast.children[0].type.should.be.exactly('int');
    ast.children[1].kind.should.be.exactly('cast');
    ast.children[1].type.should.be.exactly('double');
    ast.children[2].kind.should.be.exactly('cast');
    ast.children[2].type.should.be.exactly('string');
    ast.children[3].kind.should.be.exactly('cast');
    ast.children[3].type.should.be.exactly('array');
    ast.children[4].kind.should.be.exactly('cast');
    ast.children[4].type.should.be.exactly('object');
    ast.children[5].kind.should.be.exactly('cast');
    ast.children[5].type.should.be.exactly('boolean');
    ast.children[6].kind.should.be.exactly('unset');
  });

  it('test exit', function() {
    var ast = parser.parseEval([
      'exit(1);',
      'exit();',
      'exit;'
    ].join('\n'));
    ast.children[0].kind.should.be.exactly('exit');
    ast.children[1].kind.should.be.exactly('exit');
    ast.children[2].kind.should.be.exactly('exit');
  });

  it('test list statements', function() {
    var ast = parser.parseEval([
      'list($a => list($c,$d,,$e,), $b) = [1, 2];'
    ].join('\n'), {
      ast: {
        withPositions: true
      }
    });
    // @todo
  });

});
