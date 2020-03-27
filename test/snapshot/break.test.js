const parser = require("../main");

describe("break", () => {
  it("simple", () => {
    expect(parser.parseEval("break;")).toMatchSnapshot();
  });
  it("argument 0", () => {
    expect(parser.parseEval("break 0;")).toMatchSnapshot();
  });
  it("argument 1", () => {
    expect(parser.parseEval("break 1;")).toMatchSnapshot();
  });
  it("argument 2", () => {
    expect(parser.parseEval("break 2;")).toMatchSnapshot();
  });
  it("with parens", () => {
    expect(parser.parseEval("break (1);")).toMatchSnapshot();
  });
  // Deprecated since 5.4.0
  it("with expression", () => {
    expect(parser.parseEval("break $var;")).toMatchSnapshot();
  });
  it("should fail when no ';' at end", function () {
    expect(
      parser.parseEval("break", {
        parser: { suppressErrors: true },
      })
    ).toMatchSnapshot();
  });
});
