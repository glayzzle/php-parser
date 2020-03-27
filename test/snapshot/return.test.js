const parser = require("../main");

describe("return", function () {
  it("simple", function () {
    expect(parser.parseEval('return "string";')).toMatchSnapshot();
  });
  it("no expression", function () {
    expect(parser.parseEval("return;")).toMatchSnapshot();
  });
  it("should fail when no ';' at end", function () {
    expect(
      parser.parseEval("return", {
        parser: { suppressErrors: true },
      })
    ).toMatchSnapshot();
  });
});
