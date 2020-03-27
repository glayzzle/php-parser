const parser = require("../main");

describe("trait", function () {
  it("trait name as identifier", function () {
    expect(parser.parseEval("trait A {}")).toMatchSnapshot();
  });
});
