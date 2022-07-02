// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/isset_expr_error.phpt
  it("Error message for isset(func())", function () {
    expect(parser.parseCode("<?php\nisset(1 + 1);\n?>")).toMatchSnapshot();
  });
});
