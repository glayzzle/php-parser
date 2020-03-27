const parser = require("../main");

describe("isset", function () {
  it("simple", function () {
    expect(parser.parseEval("isset($var);")).toMatchSnapshot();
  });
  it("multiple", function () {
    expect(parser.parseEval("isset($var, $var, $var);")).toMatchSnapshot();
  });
  it("assign", function () {
    expect(parser.parseEval("$var = isset($var);")).toMatchSnapshot();
  });
  it("trailing comma", function () {
    expect(parser.parseEval("isset($foo,);")).toMatchSnapshot();
  });
  it("trailing comma #2", function () {
    expect(parser.parseEval("isset($foo, $bar,);")).toMatchSnapshot();
  });
  it("test errors", function () {
    const errAst = parser.parseEval("$var = isset();", {
      parser: { suppressErrors: true },
    });
    expect(errAst).toMatchSnapshot();
    expect(errAst.errors.length).not.toBe(0);
  });
});
