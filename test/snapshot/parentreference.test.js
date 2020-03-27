const parser = require("../main");

describe("parentreference", function () {
  it("variable", function () {
    expect(parser.parseEval("parent::$var;")).toMatchSnapshot();
  });
  it("constant", function () {
    expect(parser.parseEval("parent::CONSTANT;")).toMatchSnapshot();
  });
  it("call", function () {
    expect(parser.parseEval("parent::call();")).toMatchSnapshot();
  });
  it("uppercase", function () {
    expect(parser.parseEval("PARENT::call();")).toMatchSnapshot();
  });
  it("argument", function () {
    expect(parser.parseEval("function foo(parent $arg) {}")).toMatchSnapshot();
  });
  it("argument (uppercase)", function () {
    expect(parser.parseEval("function foo(PARENT $arg) {}")).toMatchSnapshot();
  });
  it("return type declarations", function () {
    expect(parser.parseEval("function foo($arg): parent {}")).toMatchSnapshot();
  });
  it("return type declarations (uppercase)", function () {
    expect(parser.parseEval("function foo($arg): PARENT {}")).toMatchSnapshot();
  });
});
