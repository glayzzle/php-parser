var should = require("should");
var parser = require('../../src/index');

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
      ast.children[0].init[0].left.identifier.should.be.exactly('$i');
      ast.children[0].init[1].left.identifier.should.be.exactly('$b');
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
  });

});
