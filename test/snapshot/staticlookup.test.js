const parser = require("../main");

describe("staticlookup", function () {
  it("simple", function () {
    expect(parser.parseEval("Foo::$var;")).toMatchSnapshot();
  });
  it("simple (2)", function () {
    expect(parser.parseEval("$var::$var;")).toMatchSnapshot();
  });
  it("call", function () {
    expect(parser.parseEval("Foo::call();")).toMatchSnapshot();
  });
  it("call (2)", function () {
    expect(parser.parseEval("$var::call();")).toMatchSnapshot();
  });
  it("multiple", function () {
    expect(parser.parseEval("$var::$var_1::$var_2;")).toMatchSnapshot();
  });
  it("multiple (2)", function () {
    expect(parser.parseEval("Foo::$var_1::$var_2;")).toMatchSnapshot();
  });
});
