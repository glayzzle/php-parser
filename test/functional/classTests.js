var should = require("should");
var parser = require('../../src/index');

describe('Test classes', function() {
  var ast = parser.parseEval([
    'final class foo extends bar implements',
    '  bim, bam, boum {',
    '  const FOO = "azerty";',
    '  public static $var;',
    '  public function __construct(array $data = null) {',
    '    $this->data = $data;',
    '  }',
    '}',
    'abstract class bar {',
/*    '  use A, B {',
    '    B::smallTalk insteadof A;',
    '    A::bigTalk insteadof B;',
    '    B::bigTalk as talk;',
    '  }',*/
    '  /**',
    '   * Some informations',
    '   */',
    '  abstract protected function foo();',
    '}'
  ].join('\n'), {
    parser: { debug: false }
  });

  it('test program size', function() {
    ast.children.length.should.be.exactly(2);
  });

  it('test kind', function() {
    ast.children[0].kind.should.be.exactly('class');
    ast.children[1].kind.should.be.exactly('class');
  });

  it('test names', function() {
    ast.children[0].name.should.be.exactly('foo');
    ast.children[1].name.should.be.exactly('bar');
  });

  it('test flags', function() {
    ast.children[0].isFinal.should.be.exactly(true);
    ast.children[0].isAbstract.should.be.exactly(false);
    ast.children[0].isAnonymous.should.be.exactly(false);
    ast.children[1].isFinal.should.be.exactly(false);
    ast.children[1].isAbstract.should.be.exactly(true);
    ast.children[1].isAnonymous.should.be.exactly(false);
  });

  it('test extends', function() {
    ast.children[0].extends.name.should.be.exactly('bar');
    should.equal(ast.children[1].extends, null);
  });

  it('test implements', function() {
    ast.children[0].implements.length.should.be.exactly(3);
    ast.children[0].implements[0].name.should.be.exactly('bim');
    ast.children[0].implements[1].name.should.be.exactly('bam');
    ast.children[0].implements[2].name.should.be.exactly('boum');
    should.equal(ast.children[1].implements, null);
  });

  it('test body', function() {
    console.log(ast.children[1].body);
  });
});
