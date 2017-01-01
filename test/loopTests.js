var should = require("should");
var parser = require('../src/index');

describe('Test loops statements (for, while)', function() {

  describe('Test while', function() {
    var ast = parser.parseEval([
      'while(true) {',
      '  echo "go";',
      '}',
      'while(true):',
      '  echo "short";',
      'endwhile;'
    ].join('\n'), {
      parser: { debug: false }
    });
    it('test default form', function() {
      // enclosed form
      ast.children[0].kind.should.be.exactly('while');
      ast.children[0].shortForm.should.be.exactly(false);
      ast.children[0].test.kind.should.be.exactly('boolean');
      ast.children[0].body.kind.should.be.exactly('block');
      ast.children[0].body.children.length.should.be.exactly(1);
    });
    it('test short form', function() {
      // short form
      ast.children[1].kind.should.be.exactly('while');
      ast.children[1].shortForm.should.be.exactly(true);
      ast.children[1].test.kind.should.be.exactly('boolean');
      ast.children[1].body.kind.should.be.exactly('block');
      ast.children[1].body.children.length.should.be.exactly(1);
    });
  });

  describe('Test do', function() {
    var ast = parser.parseEval([
      'do {',
      '  echo "something";',
      '} while(true);'
    ].join('\n'), {
      parser: { debug: false }
    });
    it('test statement', function() {
      ast.children[0].kind.should.be.exactly('do');
      ast.children[0].test.kind.should.be.exactly('boolean');
      ast.children[0].body.kind.should.be.exactly('block');
      ast.children[0].body.children.length.should.be.exactly(1);
    });
  });

  describe('Test for', function() {
    var ast = parser.parseEval([
      'for($i = 0, $b = 0; $i < 10, $ok; $i++)',
      'echo $i;',
      'for(;;):',
      'echo $ok;',
      'continue;;',
      'endfor;'
    ].join('\n'), {
      parser: { debug: false }
    });
    it('test kind', function() {
      ast.children[0].kind.should.be.exactly('for');
      ast.children[0].shortForm.should.be.exactly(false);
      ast.children[1].kind.should.be.exactly('for');
      ast.children[1].shortForm.should.be.exactly(true);
    });
    it('test init args', function() {
      ast.children[0].init.length.should.be.exactly(2);
      ast.children[0].init[0].left.name.should.be.exactly('i');
      ast.children[0].init[1].left.name.should.be.exactly('b');
      ast.children[1].init.length.should.be.exactly(0);
    });
    it('check test args', function() {
      ast.children[0].test.length.should.be.exactly(2);
      ast.children[1].test.length.should.be.exactly(0);
      // @todo ast.children[0].test[0]
      ast.children[0].test[1].kind.should.be.exactly('variable');
    });
    it('test increment', function() {
      // @todo
    });
    it('test body', function() {
      // @todo
    });
  });

  describe('Test foreach', function() {
    var ast = parser.parseEval([
      'foreach(&$foo as $v)',
      'echo "$k -> $v\n";',
      'foreach([[1,2], [3,4]] as list($a, $b) => [$c, $d]):',
      'echo "$a -> $b\n";',
      'endforeach;'
    ].join('\n'), {
      parser: { debug: false }
    });
    it('test kind & form', function() {
      ast.children[0].kind.should.be.exactly('foreach');
      ast.children[0].shortForm.should.be.exactly(false);
      ast.children[1].kind.should.be.exactly('foreach');
      ast.children[1].shortForm.should.be.exactly(true);

    });
    it('test source', function() {
      ast.children[0].source.kind.should.be.exactly('variable');
      ast.children[0].source.byref.should.be.exactly(true);
      ast.children[0].source.name.should.be.exactly('foo');
      ast.children[1].source.kind.should.be.exactly('array');
      ast.children[1].source.items.length.should.be.exactly(2);
    });
    it('test key', function() {
      should.equal(ast.children[0].key, null);
      ast.children[1].key.kind.should.be.exactly('list');
      ast.children[1].key.arguments.length.should.be.exactly(2);
    });
    it('test value', function() {
      ast.children[0].value.kind.should.be.exactly('variable');
      ast.children[0].value.name.should.be.exactly('v');
      ast.children[1].value.kind.should.be.exactly('array');
      ast.children[1].value.shortForm.should.be.exactly(true);
    });
    it('test body', function() {
      ast.children[0].body.kind.should.be.exactly('echo');
      ast.children[1].body.kind.should.be.exactly('block');
      ast.children[1].body.children[0].kind.should.be.exactly('echo');
    });
  });

});
