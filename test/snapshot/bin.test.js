const parser = require("../main");

describe("bin", () => {
  it("|", () => {
    expect(parser.parseEval("$foo | $bar;")).toMatchSnapshot();
  });
  it("&", () => {
    expect(parser.parseEval("$foo & $bar;")).toMatchSnapshot();
  });
  it("^", () => {
    expect(parser.parseEval("$foo ^ $bar;")).toMatchSnapshot();
  });
  it(".", () => {
    expect(parser.parseEval("$foo . $bar;")).toMatchSnapshot();
  });
  it("+", () => {
    expect(parser.parseEval("$foo + $bar;")).toMatchSnapshot();
  });
  it("-", () => {
    expect(parser.parseEval("$foo - $bar;")).toMatchSnapshot();
  });
  it("*", () => {
    expect(parser.parseEval("$foo * $bar;")).toMatchSnapshot();
  });
  it("/", () => {
    expect(parser.parseEval("$foo / $bar;")).toMatchSnapshot();
  });
  it("%", () => {
    expect(parser.parseEval("$foo % $bar;")).toMatchSnapshot();
  });
  it("**", () => {
    expect(parser.parseEval("$foo ** $bar;")).toMatchSnapshot();
  });
  it("<<", () => {
    expect(parser.parseEval("$foo << $bar;")).toMatchSnapshot();
  });
  it(">>", () => {
    expect(parser.parseEval("$foo >> $bar;")).toMatchSnapshot();
  });
  it("||", () => {
    expect(parser.parseEval("$foo || $bar;")).toMatchSnapshot();
  });
  it("or", () => {
    expect(parser.parseEval("$foo or $bar;")).toMatchSnapshot();
  });
  it("&&", () => {
    expect(parser.parseEval("$foo && $bar;")).toMatchSnapshot();
  });
  it("and", () => {
    expect(parser.parseEval("$foo and $bar;")).toMatchSnapshot();
  });
  it("xor", () => {
    expect(parser.parseEval("$foo xor $bar;")).toMatchSnapshot();
  });
  it("===", () => {
    expect(parser.parseEval("$foo === $bar;")).toMatchSnapshot();
  });
  it("!==", () => {
    expect(parser.parseEval("$foo !== $bar;")).toMatchSnapshot();
  });
  it("==", () => {
    expect(parser.parseEval("$foo == $bar;")).toMatchSnapshot();
  });
  it("!=", () => {
    expect(parser.parseEval("$foo != $bar;")).toMatchSnapshot();
  });
  it("<", () => {
    expect(parser.parseEval("$foo < $bar;")).toMatchSnapshot();
  });
  it(">", () => {
    expect(parser.parseEval("$foo > $bar;")).toMatchSnapshot();
  });
  it("<=", () => {
    expect(parser.parseEval("$foo <= $bar;")).toMatchSnapshot();
  });
  it(">=", () => {
    expect(parser.parseEval("$foo >= $bar;")).toMatchSnapshot();
  });
  it("<=>", () => {
    expect(parser.parseEval("$foo <=> $bar;")).toMatchSnapshot();
  });
  it("instanceof", () => {
    expect(parser.parseEval("$foo instanceof MyClass;")).toMatchSnapshot();
  });
  it("instanceof variable", () => {
    expect(parser.parseEval("$foo instanceof $var;")).toMatchSnapshot();
  });
  it("instanceof parent", () => {
    expect(parser.parseEval("$foo instanceof parent;")).toMatchSnapshot();
  });
  it("instanceof self", () => {
    expect(parser.parseEval("$foo instanceof self;")).toMatchSnapshot();
  });
  it("instanceof static", () => {
    expect(parser.parseEval("$foo instanceof static;")).toMatchSnapshot();
  });
  it("multiple instanceof static", () => {
    expect(
      parser.parseEval("$foo instanceof static && $bar instanceof self;")
    ).toMatchSnapshot();
  });

  it("??", () => {
    expect(parser.parseEval("$foo ?? $bar;")).toMatchSnapshot();
  });
  it("** right-associative", () => {
    expect(parser.parseEval("$a ** $b ** $c;")).toMatchSnapshot();
  });
  it("?? right-associative", () => {
    expect(parser.parseEval("$a ?? $b ?? $c;")).toMatchSnapshot();
  });
  it("?? (php < 7)", function () {
    const astErr = parser.parseEval(`$var ?? $var;`, {
      parser: {
        version: "5.6",
        suppressErrors: true,
      },
    });
    expect(astErr).toMatchSnapshot();
  });
  it("assign", () => {
    expect(parser.parseEval("$var = $var + $var;")).toMatchSnapshot();
  });
  it("multiple", () => {
    expect(parser.parseEval("$var = $var + $var + $var;")).toMatchSnapshot();
  });
  it("parens", () => {
    expect(parser.parseEval("($var + $var);")).toMatchSnapshot();
  });
  it("parens around `and`", () => {
    expect(parser.parseEval("$var = ($var and $var);")).toMatchSnapshot();
  });
  it("parens around `xor`", () => {
    expect(parser.parseEval("$var = ($var xor $var);")).toMatchSnapshot();
  });
  it("parens around `or`", () => {
    expect(parser.parseEval("$var = ($var or $var);")).toMatchSnapshot();
  });
});
