// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions_exceptions_001.phpt
  it("Constant Expressions with unsupported operands 001", function () {
    expect(parser.parseCode("<?php\nconst T = array(1,2) - array(0);\n?>")).toMatchSnapshot();
  });
});
