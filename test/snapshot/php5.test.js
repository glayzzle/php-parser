const parser = require("../main");

describe("Test syntax parsing without PHP7 support", function () {
  it("special keywords should fail", function () {
    const ast = parser.parseEval("class foo { function list() { } }", {
      parser: {
        version: "5.6",
        suppressErrors: true,
      },
    });
    expect(ast).toMatchSnapshot();
  });
});
