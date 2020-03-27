const parser = require("../main");

describe("classreference", function () {
  it("variable", function () {
    expect(parser.parseEval("Foo::$var;")).toMatchSnapshot();
  });
  it("constant", function () {
    expect(parser.parseEval("Foo::CONSTANT;")).toMatchSnapshot();
  });
  it("call", function () {
    expect(parser.parseEval("Foo::call();")).toMatchSnapshot();
  });
  it("argument type", function () {
    expect(parser.parseEval("function foo(Foo $arg) {}")).toMatchSnapshot();
  });
  it("argument type (2)", function () {
    expect(
      parser.parseEval("function foo(Foo\\Foo $arg) {}")
    ).toMatchSnapshot();
  });
});
