const parser = require("../main");

describe("static", function () {
  it("simple", function () {
    expect(parser.parseEval("static $foo;")).toMatchSnapshot();
  });
  it("assign", function () {
    expect(parser.parseEval("static $foo = 1;")).toMatchSnapshot();
  });
  it("multiple", function () {
    expect(
      parser.parseEval("static $foo = 1, $bar = 2, $baz = 3;")
    ).toMatchSnapshot();
  });
});
