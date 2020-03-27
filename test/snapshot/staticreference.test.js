const parser = require("../main");

describe("staticreference", function () {
  it("variable", function () {
    expect(parser.parseEval("static::$var;")).toMatchSnapshot();
  });
  it("constant", function () {
    expect(parser.parseEval("static::CONSTANT;")).toMatchSnapshot();
  });
  it("call", function () {
    expect(parser.parseEval("static::call();")).toMatchSnapshot();
  });
  it("uppercase", function () {
    expect(parser.parseEval("STATIC::call();")).toMatchSnapshot();
  });
});
