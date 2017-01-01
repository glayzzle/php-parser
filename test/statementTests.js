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
});
