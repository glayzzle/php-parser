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


  it('test assignements', function() {
    var ast = parser.parseEval([
      '$a = $b;',
      '$a .= $b;',
      '$a += $b;',
      '$a -= $b;',
      '$a *= $b;',
      '$a **= $b;',
      '$a /= $b;',
      '$a &= $b;',
      '$a |= $b;',
      '$a %= $b;',
      '$a ^= $b;',
      '$a <<= $b;',
      '$a >>= $b;'
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

  it('test silent', function() {
    var ast = parser.parseEval([
      '@trigger_error();'
    ].join('\n'));
    ast.children[0].kind.should.be.exactly('silent');
    ast.children[0].expr.kind.should.be.exactly('call');
  });

  it('test generators', function() {
    var ast = parser.parseEval([
      'function gen() {',
      '  yield 0; // key 0',
      '  yield from foo(); // keys 0-2',
      '  yield 1 => $a; // key 1',
      '}'
    ].join('\n'));
    var expr = ast.children[0].body.children;
    expr[0].kind.should.be.exactly('yield');
    expr[0].value.kind.should.be.exactly('number');

    expr[1].kind.should.be.exactly('yieldfrom');
    expr[1].value.kind.should.be.exactly('call');

    expr[2].kind.should.be.exactly('yield');
    expr[2].key.kind.should.be.exactly('number');
    expr[2].value.kind.should.be.exactly('variable');
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
      'die();',
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

  it('test incr/decr', function() {
    var ast = parser.parseEval([
      '$i++;',
      '$i--;',
      '++$i;',
      '--$i;'
    ].join('\n'), {
      ast: {
        withPositions: true
      }
    });
    ast.children[0].kind.should.be.exactly('post');
    ast.children[1].kind.should.be.exactly('post');
    ast.children[2].kind.should.be.exactly('pre');
    ast.children[3].kind.should.be.exactly('pre');
    ast.children[0].type.should.be.exactly('+');
    ast.children[1].type.should.be.exactly('-');
    ast.children[2].type.should.be.exactly('+');
    ast.children[3].type.should.be.exactly('-');
  });

  it('test new', function() {
    var ast = parser.parseEval([
      '$a = new \\foo();',
      '$a = new namespace\\foo::class();',
      '$a = new $foo();',
      '$a = new class extends foo implements bar { };',
    ].join('\n'), {
      parser: { debug: false }
    });
    ast.children[0].right.kind.should.be.exactly('new');
    ast.children[0].right.what.kind.should.be.exactly('identifier');

    ast.children[2].right.kind.should.be.exactly('new');
    ast.children[2].right.what.kind.should.be.exactly('variable');

    ast.children[3].right.kind.should.be.exactly('new');
    ast.children[3].right.what.kind.should.be.exactly('class');
  });

  it('test nested expressions precedence', function() {
    var ast = parser.parseEval([
      '$a = 5 * 2 + 1;', // same as (1 + (5 * 2))
      '$b = 5 * (2 + 1);',
      '$c = 1 + 2 / 3 + 4;', // same as (1 + (4 + (2 / 3)))
    ].join('\n'), {
      parser: { debug: false }
    });
    var aExpr = ast.children[0].right;
    aExpr.kind.should.be.exactly('bin');
    aExpr.left.value.should.be.exactly('1');
    aExpr.type.should.be.exactly('+');

    aExpr.right.left.value.should.be.exactly('5');
    aExpr.right.type.should.be.exactly('*');
    aExpr.right.right.value.should.be.exactly('2');

    var bExpr = ast.children[1].right;
    bExpr.kind.should.be.exactly('bin');
    bExpr.left.value.should.be.exactly('5');
    bExpr.type.should.be.exactly('*');

    bExpr.right.kind.should.be.exactly('parenthesis');
    bExpr.right.inner.left.value.should.be.exactly('2');
    bExpr.right.inner.type.should.be.exactly('+');
    bExpr.right.inner.right.value.should.be.exactly('1');

    var cExpr = ast.children[2].right;
    cExpr.kind.should.be.exactly('bin');
    cExpr.left.value.should.be.exactly('1');
    cExpr.type.should.be.exactly('+');

    cExpr.right.kind.should.be.exactly('bin');
    cExpr.right.left.value.should.be.exactly('4');
    cExpr.right.type.should.be.exactly('+');

    cExpr.right.right.kind.should.be.exactly('bin');
    cExpr.right.right.left.value.should.be.exactly('2');
    cExpr.right.right.type.should.be.exactly('/');
    cExpr.right.right.right.value.should.be.exactly('3');

  });

});
