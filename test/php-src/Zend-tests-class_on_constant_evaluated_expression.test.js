// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_on_constant_evaluated_expression.phpt
  it("An error should be generated when using ::class on a constant evaluated expression", function () {
    expect(parser.parseCode("<?php\n(1+1)::class;\n?>")).toMatchSnapshot();
  });
});
