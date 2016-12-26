var should = require("should");
var parser = require('../../src/index');

describe('Test AST structure', function() {
  var ast = parser.parseEval('array("item1", "item2", "item3")', {
    ast: {
      withPositions: true,
      withSource: true
    }
  });
  console.log(ast);
});
