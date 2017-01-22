var should = require("should");
var parser = require('./main');

describe('Test AST structure', function() {

  it('test program', function() {
    var ast = parser.parseEval('');
    ast.kind.should.be.exactly('program');
    ast.children.length.should.be.exactly(0);
  });


  it('test syntax error', function() {
    var err = null;
    (function(){
      try {
        var ast = parser.parseCode([
          '<?php',
          ' $a = 1',
          ' $b = 2' // <-- unexpected $b expecting a ';'
        ].join('\n'), 'foo.php');
      } catch(e) {
        err = e;
        throw e;
      }
    }).should.throw(/line\s3/);
    err.name.should.be.exactly('SyntaxError');
    err.lineNumber.should.be.exactly(3);
    err.fileName.should.be.exactly('foo.php');
    err.columnNumber.should.be.exactly(1);
  });

  it('test inline', function() {
    var ast = parser.parseCode('Hello <?php echo "World"; ?> !');
    ast.children[0].kind.should.be.exactly('inline');
    ast.children[2].kind.should.be.exactly('inline');
    ast.children[0].value.should.be.exactly('Hello ');
    ast.children[2].value.should.be.exactly(' !');
  });

  it('test magics', function() {
    var ast = parser.parseEval('echo __FILE__, __DIR__;');
    ast.children[0].arguments[0].kind.should.be.exactly('magic');
    ast.children[0].arguments[1].kind.should.be.exactly('magic');
    ast.children[0].arguments[0].value.should.be.exactly('__FILE__');
    ast.children[0].arguments[1].value.should.be.exactly('__DIR__');
  });
  it('test shell', function() {
    var ast = parser.parseEval('echo `ls -larth`;');
    ast.children[0].arguments[0].kind.should.be.exactly('shell');
  });
  it('test clone', function() {
    var ast = parser.parseEval('$a = clone $var;');
    ast.children[0].right.kind.should.be.exactly('clone');
    ast.children[0].right.what.kind.should.be.exactly('variable');
  });
  it('test echo, isset, unset, empty', function() {
    var ast = parser.parseEval([
      'echo ($expr) ? "ok" : "ko";',
      'print "some text"',
      'isset($foo, $bar)',
      'unset($var)',
      'empty($var)',
      ''
    ].join(';\n'));
    ast.children[0].kind.should.be.exactly('echo');
    ast.children[1].kind.should.be.exactly('print');
    ast.children[2].kind.should.be.exactly('isset');
    ast.children[3].kind.should.be.exactly('unset');
    ast.children[4].kind.should.be.exactly('empty');
  });

  it('should be variable', function() {
    // @todo
  });
  it('test literals', function() {
    // @todo string / numbers / booleans
  });

  it('test constants', function() {
    var ast = parser.parseEval('const FOO = 3.14;');
    ast.children[0].kind.should.be.exactly('constant');
    ast.children[0].name.should.be.exactly('FOO');
    ast.children[0].value.kind.should.be.exactly('number');
    ast.children[0].value.value.should.be.exactly('3.14');
  });

  it('test eval', function() {
    var ast = parser.parseEval('eval("return true;");');
    ast.children[0].kind.should.be.exactly('eval');
    ast.children[0].source.kind.should.be.exactly('string');
    ast.children[0].source.value.should.be.exactly('return true;');
  });
  it('test die/exit', function() {
    var ast = parser.parseEval('die("bye");');
    ast.children[0].kind.should.be.exactly('exit');
    ast.children[0].status.value.should.be.exactly('bye');
    ast = parser.parseEval('exit(-1);');
    ast.children[0].kind.should.be.exactly('exit');
    ast.children[0].status.value.should.be.exactly('-1');
  });

  it('test coalesce operator', function() {
    var ast = parser.parseEval('$var = $a ?? true;');
    ast.children[0].right.kind.should.be.exactly('bin');
    ast.children[0].right.type.should.be.exactly('??');
    ast.children[0].right.left.kind.should.be.exactly('variable');
    ast.children[0].right.right.kind.should.be.exactly('boolean');
  });

  it('test include / require', function() {
    var ast = parser.parseEval([
      'include "file.php"',
      'include_once (PATH . "/file.php")',
      'require "req.php"',
      'require_once "file.php"',
      ''
    ].join(';\n'));

    ast.children[0].kind.should.be.exactly('include');
    ast.children[0].once.should.be.exactly(false);
    ast.children[0].require.should.be.exactly(false);

    ast.children[1].kind.should.be.exactly('include');
    ast.children[1].once.should.be.exactly(true);
    ast.children[1].require.should.be.exactly(false);

    ast.children[2].kind.should.be.exactly('include');
    ast.children[2].once.should.be.exactly(false);
    ast.children[2].require.should.be.exactly(true);

    ast.children[3].kind.should.be.exactly('include');
    ast.children[3].once.should.be.exactly(true);
    ast.children[3].require.should.be.exactly(true);

  });


});
