const parser = require("../main");

describe("Test unary", function () {
  it.each([
    ["simple", "!$var;"],
    ["number", "-100;"],
    ["number (2)", "+100;"],
    ["number (3)", "~100;"],
    ["number (4)", "!100;"],
    ["string", '+"string";'],
    ["string (2)", '-"string";'],
    ["string (3)", '~"string";'],
    ["string (4)", '!"string";'],
    ["boolean", "!true;"],
    ["multiple", "!!$var;"],
    ["multiple", "~~$var;"],
    ["multiple (2)", "--$var;"],
    ["multiple (3)", "+(+$var);"],
    ["multiple (4)", "-(-$var);"],
    ["multiple (5)", "!!!!!$var;"],
    ["parens", "(!$var);"],
    ["parens (2)", "!($var);"],
    ["parens (3)", "(-$var);"],
    ["parens (4)", "-($var);"],
    ["parens (5)", "(+$var);"],
    ["parens (6)", "+($var);"],
    ["parens (7)", "~($var);"],
    ["parens (8)", "(~$var);"],
    ["parens (9)", "(-100);"],
    ["parens (10)", "-(100);"],
    ["precedence over mul", "-20 * 5;"],
    ["precedence over add", "-20 + 5;"],
    ["precedence over mul and add", "-20 * 5 + 10;"],
    ["precedence with plus", "+20 * 5;"],
    ["precedence with tilde", "~20 * 5;"],
  ])("%s", function (_, code) {
    expect(parser.parseEval(code)).toMatchSnapshot();
  });
});
