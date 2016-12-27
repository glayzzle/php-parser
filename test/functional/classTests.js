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
    '  use A, B {',
    '    B::smallTalk insteadof A;',
    '    A::bigTalk insteadof B;',
    '    B::bigTalk as protected talk;',
    '  }',
    '  /**',
    '   * Some informations',
    '   */',
    '  abstract protected function &foo() : bar;',
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

  it('test trait usage', function() {
    var use = ast.children[1].body[0];
    /**
    '  use A, B {',
    '    B::smallTalk insteadof A;',
    '    A::bigTalk insteadof B;',
    '    B::bigTalk as protected talk;',
    '  }',
    */
    use.kind.should.be.exactly('traituse');
    // test traits names
    use.traits.length.should.be.exactly(2);
    use.traits[0].name.should.be.exactly('A');
    use.traits[1].name.should.be.exactly('B');
    // test adaptations
    use.adaptations.length.should.be.exactly(3);
    use.adaptations[0].kind.should.be.exactly('traitprecedence');
    use.adaptations[1].kind.should.be.exactly('traitprecedence');
    use.adaptations[2].kind.should.be.exactly('traitalias');

    // test adaptation contents
    use.adaptations[0].trait.name.should.be.exactly('B');
    use.adaptations[0].method.should.be.exactly('smallTalk');
    use.adaptations[0].instead.name.should.be.exactly('A');

    // test adaptation contents
    use.adaptations[1].trait.name.should.be.exactly('A');
    use.adaptations[1].method.should.be.exactly('bigTalk');
    use.adaptations[1].instead.name.should.be.exactly('B');

    // test adaptation contents
    use.adaptations[2].trait.name.should.be.exactly('B');
    use.adaptations[2].method.should.be.exactly('bigTalk');
    use.adaptations[2].visibility.should.be.exactly('protected');
    use.adaptations[2].as.should.be.exactly('talk');

  });

  it('test methods', function() {
    var method = ast.children[1].body[1];
    method.kind.should.be.exactly('method');
    method.isStatic.should.be.exactly(false);
    method.isFinal.should.be.exactly(false);
    method.isAbstract.should.be.exactly(true);
    method.visibility.should.be.exactly('protected');
    method.name.should.be.exactly('foo');
    method.byref.should.be.exactly(true);
    // no arguments
    method.arguments.length.should.be.exactly(0);
    // no body
    method.children.length.should.be.exactly(0);
    // check return type
    method.type.name.should.be.exactly('bar');
  });
});
