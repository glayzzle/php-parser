var should = require("should");
var parser = require('../../src/index');

describe('Test AST structure', function() {
  it('should be array', function() {
    var ast = parser.parseEval('\n\narray(\n\t"item1",\n\t"item2",\n\t"item3");\n\n', {
      ast: {
        withPositions: true,
        withSource: true
      }
    });
    ast.type.should.be.exactly('program');
    ast.children[0].type.should.be.exactly('array');
    ast.children[0].items.length.should.be.exactly(3);
    ast.children[0].items[0].type.should.be.exactly('entry');
  });
  it('should be inline', function() {
    var ast = parser.parseCode('Hello <?php echo "World"; ?> !');
    ast.children[0].type.should.be.exactly('inline');
    ast.children[2].type.should.be.exactly('inline');
    ast.children[0].value.should.be.exactly('Hello ');
    ast.children[2].value.should.be.exactly(' !');
  });
  it('should be magic', function() {
    var ast = parser.parseEval('echo __FILE__, __DIR__;', {
      ast: {
        withPositions: true,
        withSource: true
      }
    });
    ast.children[0].arguments[0].type.should.be.exactly('magic');
    ast.children[0].arguments[1].type.should.be.exactly('magic');
    ast.children[0].arguments[0].value.should.be.exactly('__FILE__');
    ast.children[0].arguments[1].value.should.be.exactly('__DIR__');
  });
  it('should be shell', function() {
    var ast = parser.parseEval('echo `ls -larth`;');
    ast.children[0].arguments[0].type.should.be.exactly('shell');
  });
  it('should be clone', function() {
    var ast = parser.parseEval('$a = clone $var;');
    ast.children[0].right.type.should.be.exactly('clone');
    ast.children[0].right.what.type.should.be.exactly('variable');
  });
  it('should be sys', function() {
    var ast = parser.parseEval([
      'echo(true)',
      'isset($var)',
      'unset($var)',
      ''
    ].join(';\n'));
    console.log(ast.children);
  });
  it('should be variable', function() {
  });
  it('should be assign', function() {
  });
});
