var should = require("should");
var parser = require('../../main');

describe('Test comments', function() {
  describe('single line comments', function () {
    var ast = parser.parseEval([
      '# some information',
      '// another line',
      '$foo = 123 // 123',
      '; // done'
    ].join('\n'), {
      parser: {
        extractDoc: true
      }
    });
    it('test cummulative array', function () {
      ast[1][0][0].should.be.exactly("comment");
      ast[1][0][1].length.should.be.exactly(2);
      ast[1][0][1][0].should.be.exactly('# some information\n');
      ast[1][0][1][1].should.be.exactly('// another line\n');
    });
    it('test statements', function () {
      ast[1][2][0].should.be.exactly("comment");
      ast[1][2][1].length.should.be.exactly(1);
      ast[1][2][1][0].should.be.exactly('// done');
    });
    it('ignore comments in expression', function () {
      ast[1][1][0].should.be.exactly("set");
      ast[1][1][1][0].should.be.exactly('var');
      ast[1][1][2][0].should.be.exactly('number');
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
      ast[1][0][0].should.be.exactly("doc");
      ast[1][0][1].should.be.exactly([
        '/**',
        ' * Description',
        ' */'
      ].join('\n'));

    });
    it('test function', function () {
      ast[1][1][0].should.be.exactly("function");
      ast[1][1][1].should.be.exactly("name");
      ast[1][1][2].length.should.be.exactly(1);
      var body = ast[1][1][6];
      body[0][0].should.be.exactly('comment');
      body[1][0].should.be.exactly('return');
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
      ast[1][0][0].should.be.exactly("doc");
      ast[1][1][0].should.be.exactly("class");
    });
    it('test class elements', function () {
      var body = ast[1][1][5];
      body.properties[0][0].should.be.exactly("comment");
      body.properties[0][1][0].should.be.exactly("// @var test\n");
      body.properties[0][2][0].should.be.exactly("$test");

      body.properties[1][0].should.be.exactly("comment");
      body.properties[1][2][0].should.be.exactly("$toto");

      body.properties[2][0].should.be.exactly("doc")
      body.properties[2][2][0].should.be.exactly("$foo");

      body.methods[0][0].should.be.exactly("doc");
      body.methods[0][1].should.be.exactly("/**\n    * @return void\n    */");
      body.methods[0][2][0].should.be.exactly("function");
    });
  });

});
