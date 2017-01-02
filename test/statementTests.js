var should = require("should");
var parser = require('../src/index');

describe('Test statements', function() {
  it('test goto label', function() {
    var ast = parser.parseEval([
      'start:',
      '  $i++;',
      'goto start;'
    ].join('\n'), {
      parser: { debug: false }
    });
    ast.children[0].kind.should.be.exactly('label');
    ast.children[0].name.should.be.exactly('start');
    ast.children[1].kind.should.be.exactly('post');
    ast.children[2].kind.should.be.exactly('goto');
    ast.children[2].label.should.be.exactly('start');
  });

  it('test global', function() {
    var ast = parser.parseEval([
      'function foo() {',
      '  global $a, $b;',
      '}'
    ].join('\n'), {
      parser: { debug: false }
    });
    var expr = ast.children[0].body.children[0];
    expr.kind.should.be.exactly('global');
    expr.items[0].kind.should.be.exactly('variable');
    expr.items[0].name.should.be.exactly('a');
    expr.items[1].kind.should.be.exactly('variable');
    expr.items[1].name.should.be.exactly('b');
  });

  it('test halt statement', function() {
    var ast = parser.parseEval([
      '$a = 1;',
      '__halt_compiler();',
      '$b = 1;'
    ].join('\n'), {
      parser: { debug: false }
    });
    ast.children.length.should.be.exactly(2);
    ast.children[0].kind.should.be.exactly('assign');
    ast.children[1].kind.should.be.exactly('halt');
    ast.children[1].after.should.be.exactly('\n$b = 1;');

    // test the inner error
    (function() {
      var ast = parser.parseEval([
        'if (true) {',
        '  __halt_compiler();',
        '}'
      ].join('\n'));
    }).should.throw(/line\s2/);

    // test the fallback
    ast = parser.parseEval([
      'if (true) {',
      '  __halt_compiler();',
      '}',
      '$b = 1;'
    ].join('\n'), {
      parser: { suppressErrors: true }
    });

    ast.children.length.should.be.exactly(2);
    ast.errors.length.should.be.exactly(1);
    ast.children[0].kind.should.be.exactly('if');
    ast.children[0].body.children[0].kind.should.be.exactly('halt');
    ast.children[0].body.children[0].after.should.be.exactly('\n}\n$b = 1;');
    ast.children[1].kind.should.be.exactly('assign');

  });

  it('test static', function() {
    var ast = parser.parseEval([
      'function foo() {',
      '  static $a, $b = 5;',
      '}',
      'static $sVar1 = 11;'
    ].join('\n'), {
      parser: { debug: false }
    });

    // test function multi statements
    var expr = ast.children[0].body.children[0];
    expr.kind.should.be.exactly('static');
    expr.items.length.should.be.exactly(2);
    expr.items[0].kind.should.be.exactly('variable');
    expr.items[1].kind.should.be.exactly('assign');

    // test single statement
    ast.children[1].kind.should.be.exactly('static');
    ast.children[1].items.length.should.be.exactly(1);
    ast.children[1].items[0].kind.should.be.exactly('assign');
    ast.children[1].items[0].left.kind.should.be.exactly('variable');
    ast.children[1].items[0].left.name.should.be.exactly('sVar1');
    ast.children[1].items[0].right.kind.should.be.exactly('number');
    ast.children[1].items[0].right.value.should.be.exactly('11');

  });

  it('test declare', function() {
    var ast = parser.parseEval([
      'declare(ticks=1);',
      '$a = 1;',
      'declare(ticks=2,encoding="ISO-8859-1");',
      '$b = 1;',
      'declare(ticks=1) {',
      '  $c = 2;',
      '}',
      'declare(encoding="UTF-8"):',
      '  $d = 3;',
      'enddeclare;',
      '$e = 4;' // <- single statement
    ].join('\n'), {
      parser: { debug: false }
    });
    ast.children.length.should.be.exactly(5);

    ast.children[0].kind.should.be.exactly('declare');
    ast.children[0].mode.should.be.exactly('none');
    ast.children[0].children.length.should.be.exactly(1);
    ast.children[0].children[0].left.name.should.be.exactly('a');
    ast.children[0].what.ticks.kind.should.be.exactly('number');
    ast.children[0].what.ticks.value.should.be.exactly('1');

    ast.children[1].kind.should.be.exactly('declare');
    ast.children[1].mode.should.be.exactly('none');
    ast.children[1].children.length.should.be.exactly(1);
    ast.children[1].children[0].left.name.should.be.exactly('b');
    ast.children[1].what.ticks.kind.should.be.exactly('number');
    ast.children[1].what.ticks.value.should.be.exactly('2');
    ast.children[1].what.encoding.kind.should.be.exactly('string');
    ast.children[1].what.encoding.value.should.be.exactly('ISO-8859-1');

    ast.children[2].kind.should.be.exactly('declare');
    ast.children[2].mode.should.be.exactly('block');
    ast.children[2].children.length.should.be.exactly(1);
    ast.children[2].children[0].left.name.should.be.exactly('c');
    ast.children[2].what.ticks.kind.should.be.exactly('number');
    ast.children[2].what.ticks.value.should.be.exactly('1');

    ast.children[3].kind.should.be.exactly('declare');
    ast.children[3].mode.should.be.exactly('short');
    ast.children[3].children.length.should.be.exactly(1);
    ast.children[3].children[0].left.name.should.be.exactly('d');
    ast.children[3].what.encoding.kind.should.be.exactly('string');
    ast.children[3].what.encoding.value.should.be.exactly('UTF-8');

    ast.children[4].kind.should.be.exactly('assign');
  });

  it('test try', function() {
    var ast = parser.parseEval([
      'try {',
      '  foo();',
      '} catch(FooError|BarError $err) {',
      '  var_dump($err);',
      '  throw $err;',
      '} finally {',
      '  clean();',
      '}'
    ].join('\n'), {
      parser: { debug: false }
    });

    var expr = ast.children[0];
    expr.kind.should.be.exactly('try');
    expr.body.kind.should.be.exactly('block');
    expr.body.children[0].kind.should.be.exactly('call');
    expr.body.children[0].what.name.should.be.exactly('foo');
    expr.catches.length.should.be.exactly(1);

    // test catch
    var catchExpr = expr.catches[0];
    catchExpr.kind.should.be.exactly('catch');
    catchExpr.what.length.should.be.exactly(2);
    catchExpr.what[0].name.should.be.exactly('FooError');
    catchExpr.what[1].name.should.be.exactly('BarError');
    catchExpr.variable.kind.should.be.exactly('variable');
    catchExpr.variable.name.should.be.exactly('err');

    // test the throw statement
    catchExpr.body.kind.should.be.exactly('block');
    catchExpr.body.children.length.should.be.exactly(2);
    catchExpr.body.children[1].kind.should.be.exactly('throw');
    catchExpr.body.children[1].what.kind.should.be.exactly('variable');
    catchExpr.body.children[1].what.name.should.be.exactly('err');

    // always block
    expr.always.kind.should.be.exactly('block');
  });

  it('test inner statements', function() {
    var ast = parser.parseEval([
      'if (true) {',
      '  function foo() {}',
      '  abstract class foo {}',
      '  trait foo {}',
      '  final class foo {}',
      '  interface foo {}',
      '}'
    ].join('\n'), {
      parser: { debug: false }
    });
    // @todo : do assert
  });
});
