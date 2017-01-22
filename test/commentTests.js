var should = require("should");
var parser = require('../src/index');

describe('Test comments', function() {

  describe('issues', function () {
    it('fix #55', function () {
      var ast = parser.parseEval([
        'if (true):',
        '  if (true):',
        '  // inner statements',
        '  endif; // another comment',
        'endif; // 2nd comment'
      ].join('\n'), {
        parser: {
          extractDoc: true,
          // debug: true
        }
      });
      ast.children.length.should.be.exactly(2);
      ast.children[0].kind.should.be.exactly('if');
      ast.children[0].body.children.length.should.be.exactly(2);
      ast.children[0].body.children[0].kind.should.be.exactly('if');
      ast.children[0].body.children[1].kind.should.be.exactly('doc');
      ast.children[0].body.children[1].lines[0].should.be.exactly('another comment');
      ast.children[1].kind.should.be.exactly('doc');
      ast.children[1].lines[0].should.be.exactly('2nd comment');
    });
  });

  describe('single line comments', function () {
    var ast = parser.parseEval([
      '# some information',
      '// another line',
      '$foo = 123 // 123',
      '; /* done */'
    ].join('\n'), {
      parser: {
        extractDoc: true
      }
    });
    it('test cummulative array', function () {
      ast.children.length.should.be.exactly(3);
      ast.children[0].kind.should.be.exactly("doc");
      ast.children[0].isDoc.should.be.exactly(false);
      ast.children[0].lines.length.should.be.exactly(2);
      ast.children[0].lines[0].should.be.exactly('some information');
      ast.children[0].lines[1].should.be.exactly('another line');
    });
    it('test statements', function () {
      ast.children[2].kind.should.be.exactly("doc");
      ast.children[2].isDoc.should.be.exactly(false);
      ast.children[2].lines[0].should.be.exactly('done');
    });
    it('ignore comments in expression', function () {
      ast.children[1].kind.should.be.exactly("assign");
      ast.children[1].left.kind.should.be.exactly('variable');
      ast.children[1].right.kind.should.be.exactly('number');
    });
  });

  describe('multi line comments', function () {

    var ast = parser.parseEval([
      '/**',
      ' * Description',
      ' */',
      'function /* ignore */ name(/* */ $arg) {',
      '// inner',
      'return $arg /* ignore */;',
      '}'
    ].join('\n'), {
      parser: {
        extractDoc: true
      }
    });
    it('test statements', function () {
      ast.children[0].kind.should.be.exactly("doc");
      ast.children[0].lines.length.should.be.exactly(3);
      ast.children[0].lines[0].should.be.exactly('');
      ast.children[0].lines[1].should.be.exactly('Description');
      ast.children[0].lines[2].should.be.exactly('');
    });
    it('test function', function () {
      ast.children[1].kind.should.be.exactly("function");
      ast.children[1].name.should.be.exactly("name");
      ast.children[1].arguments.length.should.be.exactly(1);
      var body = ast.children[1].body.children;
      body[0].kind.should.be.exactly('doc');
      // @todo body[1].kind.should.be.exactly('return');
    });
    it('test if statements', function () {
      var ast = parser.parseEval([
        'if /* ignore */ (/* */ true) /* ignore */ {',
        '# inner statement',
        '} /* ignore */ else /* ignore */ ',
        // else with a inner if single statement :
        '  if (true /* ignore */) /* ignore */ {',
        '  } /* ignore */ elseif /* ignore */ (/* ignore */ false /* ignore */ /* ignore */) /* ignore */ /* ignore */ {',
        '  } /* ignore */ else /* ignore */ {',
        '  }',
        'if (false) /* ignore */ : /* ignore */',
        '/* ignore */ endif /* ignore */;/* ignore */'
      ].join('\n'), {
        lexer: {
          //debug: true
        },
        parser: {
          extractDoc: true,
          // debug: true
        }
      });
      ast.children.length.should.be.exactly(3);
      ast.children[0].kind.should.be.exactly('if');
      ast.children[1].kind.should.be.exactly('if');
      ast.children[2].kind.should.be.exactly('doc');
    });
    it('test try statements', function () {
      var ast = parser.parseEval([
        'try /* ignore */ {',
        '# inner statement',
        '} /* dd */ catch(/* zz */ \\Exception /* 1 */ | /* 2 */ \\Foo /* aa */ $e /* bb */) /* dd */ {',
        '/* ee */',
        '} /* zz */ finally /* yy */ {',
        '/* ignore */',
        '} // end'
      ].join('\n'), {
        lexer: {
          //debug: true
        },
        parser: {
          extractDoc: true,
          // debug: true
        }
      });
      ast.children.length.should.be.exactly(2);
      ast.children[0].kind.should.be.exactly('try');
      ast.children[0].body.kind.should.be.exactly('block');
      ast.children[0].catches[0].kind.should.be.exactly('catch');
      ast.children[0].catches[0].what[0].name.should.be.exactly('\\Exception');
      ast.children[0].catches[0].what[1].name.should.be.exactly('\\Foo');
      ast.children[0].catches[0].variable.name.should.be.exactly('e');
      ast.children[1].kind.should.be.exactly('doc');
    });
  });

  describe('test classes', function () {
    var ast = parser.parseEval([
      '/**',
      ' * Description',
      ' */',
      'class /* ignore */ name /* hehe */ {',
      '   // @var test',
      '   protected $test, $toto;',
      '   // ignored comment',
      '   /** @var Class */',
      '   static public $foo = 123;',
      '   /** ignored also **/',
      '   /**',
      '    * @return void',
      '    */',
      '   public function void() { }',
      '}'
    ].join('\n'), {
      parser: {
        extractDoc: true
      }
    });
    it('assume doc block before class', function () {
      ast.children[0].kind.should.be.exactly("doc");
      ast.children[1].kind.should.be.exactly("class");
    });
    it('test class elements', function () {
      var body = ast.children[1].body;

      body[0].kind.should.be.exactly("doc");
      body[0].lines[0].should.be.exactly("@var test");

      body[1].kind.should.be.exactly("property");
      body[1].name.should.be.exactly("$test");

      body[2].kind.should.be.exactly("property");
      body[2].name.should.be.exactly("$toto");

      body[3].kind.should.be.exactly("doc");
      body[3].lines[0].should.be.exactly("ignored comment");

      body[4].kind.should.be.exactly("doc");
      body[4].lines[0].should.be.exactly("@var Class");

      body[5].kind.should.be.exactly("property");
      body[5].name.should.be.exactly("$foo");

      body[8].kind.should.be.exactly("method");
      body[8].name.should.be.exactly("void");
    });
  });

});
