const parser = require("../main");

describe("empty", function () {
  it("simple", function () {
    expect(parser.parseEval("empty($var);")).toMatchSnapshot();
  });
  it("assign", function () {
    expect(parser.parseEval("$var = empty($var);")).toMatchSnapshot();
  });
});
