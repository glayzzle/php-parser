const parser = require("../main");

describe("label", function () {
  it("simple", function () {
    expect(parser.parseEval('a: echo "Foo";')).toMatchSnapshot();
    expect(parser.parseEval('longName: echo "Foo";')).toMatchSnapshot();
  });
});
