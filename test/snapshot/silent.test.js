const parser = require("../main");

describe("silent", function () {
  it("simple", function () {
    expect(parser.parseEval("@call();")).toMatchSnapshot();
  });
});
