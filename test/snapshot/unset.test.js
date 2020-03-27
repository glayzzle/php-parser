const parser = require("../main");

describe("unset", function () {
  it("simple", function () {
    expect(parser.parseEval("unset($var);")).toMatchSnapshot();
  });
  it("multiple", function () {
    expect(parser.parseEval("unset($var, $var, $var);")).toMatchSnapshot();
  });
  it("trailing comma", function () {
    expect(parser.parseEval("unset($foo,);")).toMatchSnapshot();
  });
  it("trailing comma #2", function () {
    expect(parser.parseEval("unset($foo, $bar,);")).toMatchSnapshot();
  });
});
