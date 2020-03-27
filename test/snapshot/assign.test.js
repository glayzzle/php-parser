const parser = require("../main");

describe("assign", () => {
  it("simple", () => {
    expect(parser.parseEval("$var = 1;")).toMatchSnapshot();
  });
  it("variable", () => {
    expect(parser.parseEval("$var = $var;")).toMatchSnapshot();
  });
  it("multiple", () => {
    expect(parser.parseEval("$var = $var = $var;")).toMatchSnapshot();
  });
  it("+=", () => {
    expect(parser.parseEval("$var += $var;")).toMatchSnapshot();
  });
  it("-=", () => {
    expect(parser.parseEval("$var -= $var;")).toMatchSnapshot();
  });
  it("*=", () => {
    expect(parser.parseEval("$var *= $var;")).toMatchSnapshot();
  });
  it("**=", () => {
    expect(parser.parseEval("$var **= $var;")).toMatchSnapshot();
  });
  it("/=", () => {
    expect(parser.parseEval("$var /= $var;")).toMatchSnapshot();
  });
  it(".=", () => {
    expect(parser.parseEval("$var .= $var;")).toMatchSnapshot();
  });
  it("%=", () => {
    expect(parser.parseEval("$var %= $var;")).toMatchSnapshot();
  });
  it("&=", () => {
    expect(parser.parseEval("$var &= $var;")).toMatchSnapshot();
  });
  it("|=", () => {
    expect(parser.parseEval("$var |= $var;")).toMatchSnapshot();
  });
  it("^=", () => {
    expect(parser.parseEval("$var ^= $var;")).toMatchSnapshot();
  });
  it("<<=", () => {
    expect(parser.parseEval("$var <<= $var;")).toMatchSnapshot();
  });
  it(">>=", () => {
    expect(parser.parseEval("$var >>= $var;")).toMatchSnapshot();
  });
  it("??=", () => {
    expect(parser.parseEval("$var ??= $var;")).toMatchSnapshot();
  });
  it("??= with bin", () => {
    expect(parser.parseEval("$var ??= $var + 10;")).toMatchSnapshot();
  });
  it("??= (php < 7)", function () {
    const astErr = parser.parseEval(`$var ??= $var;`, {
      parser: {
        version: "5.6",
        suppressErrors: true,
      },
    });
    expect(astErr).toMatchSnapshot();
  });
  it("with ref", () => {
    expect(parser.parseEval("$bar = &$foo;")).toMatchSnapshot();
  });
});
