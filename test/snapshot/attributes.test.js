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
  it("can parse params with comments", () => {
    expect(
      parser.parseEval(
        `// Line 1
    #[ Pure ( )/* Pure */ ]
    // Line 3
    function a(#[ Unsigned ] $a) {}
    `,
        {
          parser: {
            extractDoc: true,
          },
        }
      )
    ).toMatchSnapshot();
  });
  it("can parse parms with array values", () => {
    expect(
      parser.parseEval(`
    #[List(["a"=>1, 'b' => Test::class])]
    function a() {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse params with end characters", () => {
    expect(
      parser.parseEval(`
    #[End(["])}>"])]
    class End {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse multi-line attributes", () => {
    expect(
      parser.parseEval(`
    #[
      One(),
      Two(),
      Three()
    ]
    #[Four]
    class Multi {}
    `)
    ).toMatchSnapshot();
  });
});
