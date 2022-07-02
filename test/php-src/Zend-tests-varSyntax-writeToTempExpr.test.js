// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/writeToTempExpr.phpt
  it("Writing to a temporary expression is not allowed", function () {
    expect(parser.parseCode("<?php\n[0, 1][0] = 1;\n?>")).toMatchSnapshot();
  });
});
