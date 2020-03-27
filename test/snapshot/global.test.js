const parser = require("../main");

describe("global", function () {
  it("simple", function () {
    expect(parser.parseEval("global $var;")).toMatchSnapshot();
  });
  it("mutliple", function () {
    expect(parser.parseEval("global $var, $foo;")).toMatchSnapshot();
  });
});
