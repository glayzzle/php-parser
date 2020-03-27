const parser = require("./main");

describe("Test AST class (edge cases)", function () {
  it("test source without location", function () {
    const test = parser.create({
      ast: {
        withPositions: false,
        withSource: true,
      },
    });
    const ast = test.parseEval("echo $foo;");
    const echo = ast.children[0];
    expect(echo.loc.source).toBe("echo $foo;");
    expect(echo.loc.start).not.toBeNull();
    expect(echo.loc.end).not.toBeNull();

    const variable = echo.expressions[0];
    expect(variable.loc.source).toBe("$foo");
  });
  it("test undefined node", function () {
    const test = parser.create();
    expect(() => {
      const node = test.parser.node("foo");
      node();
    }).toThrow(/foo/);
  });
  it("test debug mode", function () {
    const test = parser.create({
      parser: {
        debug: true,
      },
    });
    test.parseEval("1 + 1;");
  });
  it("test debug mode / errors", function () {
    const test = parser.create({
      parser: {
        debug: true,
      },
    });
    expect(() => {
      test.parseEval("1 + ;");
    }).toThrow();
  });
});
