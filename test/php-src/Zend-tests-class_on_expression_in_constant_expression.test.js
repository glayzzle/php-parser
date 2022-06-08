// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_on_expression_in_constant_expression.phpt
  it("::class on an expression cannot be used inside constant expressions", function () {
    expect(parser.parseCode("<?php\nconst A = [0]::class;\n?>")).toMatchSnapshot();
  });
});
