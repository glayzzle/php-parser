const parser = require("../main");

describe("trait", function () {
  it("trait name as identifier", function () {
    expect(parser.parseEval("trait A {}")).toMatchSnapshot();
  });

  it("trait alias with no visibility and no alias raises an error", function () {
    const test = parser.create({ parser: { suppressErrors: true } });
    expect(test.parseEval("class A { use Foo { foo as; } }")).toMatchSnapshot();
  });
});
