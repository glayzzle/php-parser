const parser = require("../main");

describe("goto", function () {
  it("simple", function () {
    expect(parser.parseEval('goto a; echo "Foo";')).toMatchSnapshot();
    expect(parser.parseEval('goto longName; echo "Foo";')).toMatchSnapshot();
  });
});
