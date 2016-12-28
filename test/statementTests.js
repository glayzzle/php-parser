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
});
