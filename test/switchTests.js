var should = require("should");
var parser = require('../src/index');

describe('Test SWITCH statements', function() {
  var ast = parser.parseEval([
    'switch(true) {',
    '  case 1:',
    '  case $var:',
    '    $foo = false;',
    '    break;',
    '  case FOO:',
    '    $foo = true;',
    '    break;',
    '  default:',
    '    $bar = false;',
    '}',
    'switch(true):; ?><?php',
    '  case A: ?><?php return true;',
    '  case B: ?><?php return false;',
    'endswitch;'
  ].join('\n'), {
    parser: { debug: false }
  });

  var errAst = parser.parseEval([
    'switch(true);',
    'switch(true):; ?> bug <?php',
    '  case A: return ?><?php true;',
    '  case B: return false  ?><?php ;',
    'endswitch;'
  ].join('\n'), {
    parser: { suppressErrors: true }
  });

  it('test kind', function() {
    ast.children[0].kind.should.be.exactly('switch');
    ast.children[1].kind.should.be.exactly('switch');
    ast.children[0].shortForm.should.be.exactly(false);
    ast.children[1].shortForm.should.be.exactly(true);
  });

  it('check test property', function() {
    ast.children[0].test.kind.should.be.exactly('boolean');
    ast.children[1].test.kind.should.be.exactly('boolean');
  });

  it('test case nodes', function() {
    ast.children[0].body.kind.should.be.exactly('block');
    // 1st switch
    var sw1 = ast.children[0].body.children;
    sw1.length.should.be.exactly(4);
    sw1[0].kind.should.be.exactly('case');
    sw1[0].test.kind.should.be.exactly('number');
    sw1[1].kind.should.be.exactly('case');
    sw1[1].test.kind.should.be.exactly('variable');
    sw1[2].kind.should.be.exactly('case');
    sw1[2].test.kind.should.be.exactly('constref');
    // default node
    sw1[3].kind.should.be.exactly('case');
    should.equal(sw1[3].test, null);
    // 2nd switch
    var sw2 = ast.children[1].body.children;
    sw2[0].kind.should.be.exactly('case');
    sw2[0].test.kind.should.be.exactly('constref');
    sw2[1].kind.should.be.exactly('case');
    sw2[1].test.kind.should.be.exactly('constref');
  });
  it('test case bodies', function() {
    // @todo
  });

  it('test error cases', function() {
    // @todo
  });
});
