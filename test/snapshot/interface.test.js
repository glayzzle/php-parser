const parser = require("../main");

describe("interface", function () {
  it("interface name as identifier", function () {
    expect(parser.parseEval("interface A {}")).toMatchSnapshot();
  });
  it("extends", function () {
    expect(parser.parseEval("interface A extends B {}")).toMatchSnapshot();
  });
  it("multiple extends", function () {
    expect(parser.parseEval("interface A extends B, C {}")).toMatchSnapshot();
  });
  it("invalid private flag", function () {
    expect(
      parser.parseEval("interface A { private const B = 1; }", {
        parser: { suppressErrors: true },
      })
    ).toMatchSnapshot();
  });
});
