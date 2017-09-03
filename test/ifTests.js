var should = require("should");
var parser = require('../src/index');

describe('Test IF statements', function() {
  describe('Test common cases', function() {
    var ast = parser.parseEval([
      'if (true) {',
      '  echo "is true";',
      '} else if (false) {',
      '  echo "false";',
      '} elseif (false) {',
      '  echo "2nd";',
      '} else {',
      '  echo "else";',
      '}'
    ].join('\n'), {
      parser: { debug: false }
    });
    it('test if structure', function() {
      ast.children.length.should.be.exactly(1);
      ast.children[0].kind.should.be.exactly('if');
      ast.children[0].shortForm.should.be.exactly(false);
      ast.children[0].test.kind.should.be.exactly('boolean');
      ast.children[0].test.value.should.be.exactly(true);
      ast.children[0].body.children.length.should.be.exactly(1);
      ast.children[0].body.children[0].kind.should.be.exactly('echo');
    });
    it('test else branches', function() {
      var el1 = ast.children[0].alternate;
      el1.kind.should.be.exactly('if');
      el1.test.kind.should.be.exactly('boolean');
      el1.test.value.should.be.exactly(false);
      el1.body.children[0].kind.should.be.exactly('echo');
      el1.body.children[0].arguments[0].value.should.be.exactly('false');

      var el2 = el1.alternate;
      el2.kind.should.be.exactly('if');
      el2.body.children[0].kind.should.be.exactly('echo');
      el2.body.children[0].arguments[0].value.should.be.exactly('2nd');

      var el3 = el2.alternate;
      el3.kind.should.be.exactly('block');
      el3.children[0].kind.should.be.exactly('echo');
      el3.children[0].arguments[0].value.should.be.exactly('else');
    });
  });
  describe('Test short form', function() {
    var ast = parser.parseEval([
      'if (true):',
      '  echo "is true";',
      'elseif (false):',
      '  echo "false";',
      'else:',
      '  echo "else";',
      'endif;'
    ].join('\n'), {
      parser: { debug: false }
    });
    it('should be shortForm flagged', function() {
      ast.children.length.should.be.exactly(1);
      ast.children[0].kind.should.be.exactly('if');
      ast.children[0].shortForm.should.be.exactly(true);
    });
    it('test else branches', function() {
      var el1 = ast.children[0].alternate;
      el1.shortForm.should.be.exactly(true);
      var el2 = el1.alternate;
      el2.kind.should.be.exactly('block');
    });
  });
  describe('Improve coverage', function() {
    var ast = parser.parseEval([
      'if (true):',
      '  echo "is true";',
      'elseif (false):',
      '  echo "false";',
      'elseif (false):',
      '  echo "false";',
      'endif;',
      'if (true):',
      '  echo "is true";',
      'else:',
      '  echo "false";',
      'endif;'
    ].join('\n'), {
      parser: { debug: false }
    });
    it('should have 2 childs', function() {
      ast.children.length.should.be.exactly(2);
      ast.children[0].kind.should.be.exactly('if');
      ast.children[0].shortForm.should.be.exactly(true);
      ast.children[1].kind.should.be.exactly('if');
      ast.children[1].shortForm.should.be.exactly(true);
    });
    it('test else branches', function() {
      var el1 = ast.children[0].alternate;
      el1.kind.should.be.exactly('if');
      var el2 = el1.alternate;
      el2.kind.should.be.exactly('if');
      should.equal(el2.alternate, null); // no else
      // else block
      ast.children[1].alternate.kind.should.be.exactly('block');
    });
  });
  describe('Issue #84', function () {
    var ast = parser.parseCode([
      '<?php if (true): ?>',
      '<?php else: ?>',
      '<?php endif; ?>'
    ].join('\n'), {
      parser: { debug: false }
    });
    it('if block should have zero children', function() {
      ast.children[0].body.children.length.should.be.exactly(0);
    });
    it('else block should have zero children', function() {
      ast.children[0].alternate.children.length.should.be.exactly(0);
    });
  });
});
