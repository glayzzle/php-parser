const parser = require("../main");

describe("useitem", () => {
  it("simple", () => {
    expect(parser.parseEval("use My\\Full\\NSname;")).toMatchSnapshot();
  });
  it("simple 2", () => {
    expect(parser.parseEval("use ArrayObject;")).toMatchSnapshot();
  });
  it("with type", () => {
    expect(
      parser.parseEval("use My\\Full\\Classname as Another;")
    ).toMatchSnapshot();
  });
  it("importing a function", () => {
    expect(
      parser.parseEval("use function My\\Full\\functionName;")
    ).toMatchSnapshot();
  });
  it("importing a function with type", () => {
    expect(
      parser.parseEval("use function My\\Full\\functionName as func;")
    ).toMatchSnapshot();
  });
  it("importing a class", () => {
    expect(
      parser.parseEval("use some\\my_namespace\\ClassC;")
    ).toMatchSnapshot();
  });
  it("importing a class with type", () => {
    expect(
      parser.parseEval("use some\\my_namespace\\ClassC as C;")
    ).toMatchSnapshot();
  });
  it("importing a constant", () => {
    expect(parser.parseEval("use const My\\Full\\CONSTANT;")).toMatchSnapshot();
  });
  it("importing a constant with type", () => {
    expect(
      parser.parseEval("use const My\\Full\\CONSTANT as MY_CONST;")
    ).toMatchSnapshot();
  });
  it("import group", () => {
    expect(
      parser.parseEval(
        `use const namespace\\{
          FOO,
          BAR,
        };
        use some\\{
          foo,
        };`
      )
    ).toMatchSnapshot();
  });
  it("invalid use", () => {
    expect(
      parser.parseEval(
        `use function $foo;
        use const namespace\\{
          FOO,
          BAR,
        };
        use some\\{
          namespace\\foo,
          $error,
          function $bar,
        };`,
        {
          parser: { suppressErrors: true },
        }
      )
    ).toMatchSnapshot();
  });
});
