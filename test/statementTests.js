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
      '} finally {',
      '  clean();',
      '}'
    ].join('\n'), {
      parser: { debug: false }
    });
    ast.children[0].kind.should.be.exactly('try');
    ast.children[0].body.kind.should.be.exactly('block');
    ast.children[0].body.children[0].kind.should.be.exactly('call');
    ast.children[0].body.children[0].what.name.should.be.exactly('foo');
    ast.children[0].catches[0].kind.should.be.exactly('catch');
    ast.children[0].catches[0].what.length.should.be.exactly(2);
    ast.children[0].catches[0].what[0].name.should.be.exactly('FooError');
    ast.children[0].catches[0].what[1].name.should.be.exactly('BarError');
    ast.children[0].catches[0].variable.kind.should.be.exactly('variable');
    ast.children[0].catches[0].variable.name.should.be.exactly('err');
    ast.children[0].always.kind.should.be.exactly('block');
  });
});
