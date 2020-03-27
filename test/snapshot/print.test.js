const parser = require("../main");

describe("print", function () {
  it("simple", function () {
    expect(parser.parseEval('print "string";')).toMatchSnapshot();
  });
});
