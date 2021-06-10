const parser = require("../main");

describe("Parse Attributes", () => {
  it("can parse class attributes", () => {
    expect(
      parser.parseEval(`
    #[Deprecated]
    #[replace("use NewClass")]
    class DepClass {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse method attributes", () => {
    expect(
      parser.parseEval(`
    class Test {
      #[Pure]
      function m() {}
    }
    `)
    ).toMatchSnapshot();
  });
  it("can parse param attributes", () => {
    expect(
      parser.parseEval(`
    function f(
    #[Unsigned]
     int $n) {}
    `)
    ).toMatchSnapshot();
  });
});
