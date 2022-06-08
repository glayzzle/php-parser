// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/null_to_non_nullable_special_func.phpt
  it("Test null arg behavior for special functions", function () {
    expect(parser.parseCode("<?php\n$null = null;\nvar_dump(strlen($null));\n?>")).toMatchSnapshot();
  });
});
