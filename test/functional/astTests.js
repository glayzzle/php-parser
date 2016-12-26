var should = require("should");
var parser = require('../../src/index');

describe('Test AST structure', function() {
  var ast = parser.parseEval('\n\narray(\n\t"item1",\n\t"item2",\n\t"item3");\n\n', {
    ast: {
      withPositions: true,
      withSource: true
    }
  });
  console.log(ast.children[0]) //.children);
});
