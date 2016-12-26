var should = require("should");
var parser = require('../../src/index');

describe('Test AST structure', function() {

  it('test program', function() {
    var ast = parser.parseEval('');
    ast.type.should.be.exactly('program');
    ast.children.length.should.be.exactly(0);
  });

  it('test arrays', function() {
    var ast = parser.parseEval('\n\narray(\n\t"item1",\n\t"item2",\n\t"item3");\n\n');
    ast.children[0].type.should.be.exactly('array');
    ast.children[0].items.length.should.be.exactly(3);
    ast.children[0].items[0].type.should.be.exactly('entry');
    var ast = parser.parseEval('\n\narray(\n\t"item1",\n\t"item2",\n\t"item3");\n\n');
  });

  it('test inline', function() {
    var ast = parser.parseCode('Hello <?php echo "World"; ?> !');
    ast.children[0].type.should.be.exactly('inline');
    ast.children[2].type.should.be.exactly('inline');
    ast.children[0].value.should.be.exactly('Hello ');
    ast.children[2].value.should.be.exactly(' !');
  });

  it('test magics', function() {
    var ast = parser.parseEval('echo __FILE__, __DIR__;');
    ast.children[0].arguments[0].type.should.be.exactly('magic');
    ast.children[0].arguments[1].type.should.be.exactly('magic');
    ast.children[0].arguments[0].value.should.be.exactly('__FILE__');
    ast.children[0].arguments[1].value.should.be.exactly('__DIR__');
  });
  it('test shell', function() {
    var ast = parser.parseEval('echo `ls -larth`;');
    ast.children[0].arguments[0].type.should.be.exactly('shell');
  });
  it('test clone', function() {
    var ast = parser.parseEval('$a = clone $var;');
    ast.children[0].right.type.should.be.exactly('clone');
    ast.children[0].right.what.type.should.be.exactly('variable');
  });
  it('test echo, isset, unset, empty', function() {
    var ast = parser.parseEval([
      'echo(true, $var)',
      'print "some text"',
      'isset($foo, $bar)',
      'unset($var)',
      'empty($var)',
      ''
    ].join(';\n'));
    ast.children[0].type.should.be.exactly('echo');
    ast.children[1].type.should.be.exactly('print');
    ast.children[2].type.should.be.exactly('isset');
    ast.children[3].type.should.be.exactly('unset');
    ast.children[4].type.should.be.exactly('empty');
  });
  it('should be variable', function() {
    // @todo
  });
  it('should be assign', function() {
    // @todo
  });
  it('test literals', function() {
    // @todo string / numbers / booleans
  });
  it('test eval', function() {
    var ast = parser.parseEval('eval("return true;");');
    ast.children[0].type.should.be.exactly('eval');
    ast.children[0].source.type.should.be.exactly('string');
    ast.children[0].source.value.should.be.exactly('return true;');
  });
  it('test die/exit', function() {
    var ast = parser.parseEval('die("bye");');
    ast.children[0].type.should.be.exactly('exit');
    ast.children[0].status.value.should.be.exactly('bye');
    ast = parser.parseEval('exit(-1);');
    ast.children[0].type.should.be.exactly('exit');
    ast.children[0].status.value.should.be.exactly('-1');
  });
  it('test coalesce', function() {
    var ast = parser.parseEval('$var = $a ?? true;');
    ast.children[0].right.type.should.be.exactly('coalesce');
    ast.children[0].right.test.type.should.be.exactly('variable');
    ast.children[0].right.ifnull.type.should.be.exactly('boolean');
  });
  it('test include / require', function() {
    var ast = parser.parseEval([
      'include "file.php"',
      'include_once (PATH . "/file.php")',
      'require "req.php"',
      'require_once "file.php"',
      ''
    ].join(';\n'));

    ast.children[0].type.should.be.exactly('include');
    ast.children[0].once.should.be.exactly(false);
    ast.children[0].require.should.be.exactly(false);

    ast.children[1].type.should.be.exactly('include');
    ast.children[1].once.should.be.exactly(true);
    ast.children[1].require.should.be.exactly(false);

    ast.children[2].type.should.be.exactly('include');
    ast.children[2].once.should.be.exactly(false);
    ast.children[2].require.should.be.exactly(true);

    ast.children[3].type.should.be.exactly('include');
    ast.children[3].once.should.be.exactly(true);
    ast.children[3].require.should.be.exactly(true);

  });
});
