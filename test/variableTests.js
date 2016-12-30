var should = require("should");
var parser = require('./main');

describe('Test variables', function() {
  describe('Default variables', function() {
    var ast = parser.parseEval([
      '$a = "foo";',
      '$b = &$c;'
    ].join('\n'));
    it('should be $a', function() {
      ast.children[0].left.kind.should.be.exactly('variable');
      ast.children[0].left.name.should.be.exactly('a');
    });
    it('should be $c byref', function() {
      ast.children[1].right.kind.should.be.exactly('variable');
      ast.children[1].right.name.should.be.exactly('c');
      ast.children[1].right.byref.should.be.exactly(true);
    });
  });

  describe('Dynamic variables', function() {
    var ast = parser.parseEval([
      '$$a = "bar";',
      '$$$a = "bar";',
      '${$a."bar"} = "bar";'
    ].join('\n'));
    it('should be $$a', function() {
      ast.children[0].left.kind.should.be.exactly('variable');
      ast.children[0].left.name.kind.should.be.exactly('variable');
      ast.children[0].left.name.name.should.be.exactly('a');
    });
    it('should be $$$a', function() {
      ast.children[1].left.kind.should.be.exactly('variable');
      ast.children[1].left.name.kind.should.be.exactly('variable');
      ast.children[1].left.name.name.kind.should.be.exactly('variable');
    });
    it('should be ${$a."bar"}', function() {
      ast.children[2].left.kind.should.be.exactly('variable');
      ast.children[2].left.name.kind.should.be.exactly('bin');
      ast.children[2].left.name.type.should.be.exactly('.');
      ast.children[2].left.name.left.kind.should.be.exactly('variable');
      ast.children[2].left.name.left.name.should.be.exactly('a');
      ast.children[2].left.name.right.kind.should.be.exactly('string');
      ast.children[2].left.name.right.value.should.be.exactly('bar');
    });
  });

  describe('Check errors', function() {
    var ast = parser.parseEval([
      '$? = true;'
    ].join('\n'), {
      parser: {
        suppressErrors: true
      }
    });
    it('should be ?', function() {
      ast.children[0].left.kind.should.be.exactly('variable');
      ast.children[0].left.name.should.be.exactly('?');
    });
  });
});
