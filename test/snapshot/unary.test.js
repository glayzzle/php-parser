const parser = require('../main');

describe("Test unary", function() {
  it("simple", function() {
    expect(parser.parseEval('!$var;')).toMatchSnapshot();
  });
  it("number", function() {
    expect(parser.parseEval('-100;')).toMatchSnapshot();
  });
  it("number (2)", function() {
    expect(parser.parseEval('+100;')).toMatchSnapshot();
  });
  it("number (3)", function() {
    expect(parser.parseEval('~100;')).toMatchSnapshot();
  });
  it("number (4)", function() {
    expect(parser.parseEval('!100;')).toMatchSnapshot();
  });
  it("string", function() {
    expect(parser.parseEval('+"string";')).toMatchSnapshot();
  });
  it("string (2)", function() {
    expect(parser.parseEval('-"string";')).toMatchSnapshot();
  });
  it("string (3)", function() {
    expect(parser.parseEval('~"string";')).toMatchSnapshot();
  });
  it("string (4)", function() {
    expect(parser.parseEval('!"string";')).toMatchSnapshot();
  });
  it("boolean", function() {
    expect(parser.parseEval('!true;')).toMatchSnapshot();
  });
  it("multiple", function() {
    expect(parser.parseEval('!!$var;')).toMatchSnapshot();
  });
  it("multiple", function() {
    expect(parser.parseEval('~~$var;')).toMatchSnapshot();
  });
  it("multiple (2)", function() {
    expect(parser.parseEval('--$var;')).toMatchSnapshot();
  });
  it("multiple (3)", function() {
    expect(parser.parseEval('+(+$var);')).toMatchSnapshot();
  });
  it("multiple (4)", function() {
    expect(parser.parseEval('-(-$var);')).toMatchSnapshot();
  });
  it("multiple (5)", function() {
    expect(parser.parseEval('!!!!!$var;')).toMatchSnapshot();
  });
  it("parens", function() {
    expect(parser.parseEval('(!$var);')).toMatchSnapshot();
  });
  it("parens (2)", function() {
    expect(parser.parseEval('!($var);')).toMatchSnapshot();
  });
  it("parens (3)", function() {
    expect(parser.parseEval('(-$var);')).toMatchSnapshot();
  });
  it("parens (4)", function() {
    expect(parser.parseEval('-($var);')).toMatchSnapshot();
  });
  it("parens (5)", function() {
    expect(parser.parseEval('(+$var);')).toMatchSnapshot();
  });
  it("parens (6)", function() {
    expect(parser.parseEval('+($var);')).toMatchSnapshot();
  });
  it("parens (7)", function() {
    expect(parser.parseEval('~($var);')).toMatchSnapshot();
  });
  it("parens (8)", function() {
    expect(parser.parseEval('(~$var);')).toMatchSnapshot();
  });
  it("parens (9)", function() {
    expect(parser.parseEval('(-100);')).toMatchSnapshot();
  });
  it("parens (10)", function() {
    expect(parser.parseEval('-(100);')).toMatchSnapshot();
  });
});
