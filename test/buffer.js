var parser = require("./main");

describe("Test buffers", function() {
  it("handles buffers as input", function() {
    var buffer = new Buffer('echo "test"');
    var ast = parser.parseEval(buffer);
    ast.children[0].kind.should.be.exactly("echo");
  });
});
