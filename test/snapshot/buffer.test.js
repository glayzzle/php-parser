const parser = require("../../src/index");

describe("Test buffers", function() {
  it("handles buffers as input", function() {
    var buffer = new Buffer('echo "test"');
    expect(parser.parseEval(buffer)).toMatchSnapshot();
  });
});
