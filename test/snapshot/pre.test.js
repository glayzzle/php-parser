const parser = require("../main");

describe("pre", function () {
  it("++", function () {
    expect(parser.parseEval("++$var;")).toMatchSnapshot();
  });
  it("--", function () {
    expect(parser.parseEval("--$var;")).toMatchSnapshot();
  });
  it("++ and parens", function () {
    expect(parser.parseEval("(++$var);")).toMatchSnapshot();
  });
  it("-- and parens", function () {
    expect(parser.parseEval("(--$var);")).toMatchSnapshot();
  });
  it("++ and + unary", function () {
    expect(parser.parseEval("+(++$var);")).toMatchSnapshot();
  });
  it("++ and - unary", function () {
    expect(parser.parseEval("-++$var;")).toMatchSnapshot();
  });
  it("++ and - unary (with parens)", function () {
    expect(parser.parseEval("-(++$var);")).toMatchSnapshot();
  });
  it("-- and + unary", function () {
    expect(parser.parseEval("+--$var;")).toMatchSnapshot();
  });
  it("-- and + unary (with parens)", function () {
    expect(parser.parseEval("+(--$var);")).toMatchSnapshot();
  });
  it("-- and unary -", function () {
    expect(parser.parseEval("-(--$var);")).toMatchSnapshot();
  });
});
