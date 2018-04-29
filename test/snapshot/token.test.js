const parser = require("../../src/index");

describe("Test tokens statements", function() {
  it("hello world", function() {
    const ast = parser.parseCode("Hello <?= $world; ?>", {
      parser: {
        debug: false,
        extractTokens: true
      }
    });
    expect(ast).toMatchSnapshot();
  });
});
