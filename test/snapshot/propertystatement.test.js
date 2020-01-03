const parser = require("../main");

describe("propertystatement", () => {
  it("simple", () => {
    expect(parser.parseEval("class Foo { public $dsn; }")).toMatchSnapshot();
  });
  it("simple (var)", () => {
    expect(parser.parseEval("class Foo { var $dsn; }")).toMatchSnapshot();
  });
  it("multiple", () => {
    expect(
      parser.parseEval("class Foo { public $dsn, $username, $password; }")
    ).toMatchSnapshot();
  });
  it("multiple (var)", () => {
    expect(
      parser.parseEval("class Foo { var $dsn, $username, $password; }")
    ).toMatchSnapshot();
  });
});
