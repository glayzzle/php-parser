var should = require("should");
var parser = require('../src/index');

describe('Test classes', function() {

  describe('Validate usual declarations', function() {
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
      '    A::bigTalk insteadof B, C;',
      '    B::bigTalk as public talk;',
      '    B::bigTalk as protected talk;',
      '    B::bigTalk as private talk;',
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
      '    A::bigTalk insteadof B, C;',
      '    B::bigTalk as protected talk;',
      '  }',
      */
      use.kind.should.be.exactly('traituse');
      // test traits names
      use.traits.length.should.be.exactly(2);
      use.traits[0].name.should.be.exactly('A');
      use.traits[1].name.should.be.exactly('B');
      // test adaptations
      use.adaptations.length.should.be.exactly(5);
      use.adaptations[0].kind.should.be.exactly('traitprecedence');
      use.adaptations[1].kind.should.be.exactly('traitprecedence');
      use.adaptations[2].kind.should.be.exactly('traitalias');

      // test adaptation contents
      use.adaptations[0].trait.name.should.be.exactly('B');
      use.adaptations[0].method.should.be.exactly('smallTalk');
      use.adaptations[0].instead[0].name.should.be.exactly('A');

      // test adaptation contents
      use.adaptations[1].trait.name.should.be.exactly('A');
      use.adaptations[1].method.should.be.exactly('bigTalk');
      use.adaptations[1].instead[0].name.should.be.exactly('B');
      use.adaptations[1].instead[1].name.should.be.exactly('C');

      // test adaptation contents
      use.adaptations[2].trait.name.should.be.exactly('B');
      use.adaptations[2].method.should.be.exactly('bigTalk');
      use.adaptations[2].as.should.be.exactly('talk');
      use.adaptations[2].visibility.should.be.exactly('public');
      use.adaptations[3].visibility.should.be.exactly('protected');
      use.adaptations[4].visibility.should.be.exactly('private');

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
      should.equal(method.body, null);
      // check return type
      method.type.name.should.be.exactly('bar');
    });
  });

  describe('Advanced tests', function() {
    var ast = parser.parseEval([
      'class foo implements boo {',
      '  use A;',
      '  use B { foo as bar; }',
      '  // comment',
      '  /* boo */',
      '  /** doc',
      '   * data',
      '     foo',
      '   */',
      '  var $var = true;',
      '  final function __construct() { }',
      '  private function boo() { }',
      '}',
      'interface boo extends something {',
      '  // some doc',
      '  const A = 1.5;',
      '  /** foo */',
      '  protected function foo();',
      '}',
      'trait line extends foo implements boo {',
      '  // some doc',
      '  const A = 1.5;',
      '  abstract protected function foo();',
      '}'
    ].join('\n'), {
      parser: { extractDoc: true }
    });

    it('check comments', function() {
      // @todo
    });

    it('check interface', function() {
      // @todo
    });

    it('check traits', function() {
      // @todo
    });

  });

  describe('Test of silent mode', function() {
    var ast = parser.parseEval([
      'class foo {',
      '  use A',
      '  use B { foo };',
      '}'
    ].join('\n'), {
      parser: { suppressErrors: true }
    });

    it('check use statement errors', function() {
      // @todo
    });
  });
});
