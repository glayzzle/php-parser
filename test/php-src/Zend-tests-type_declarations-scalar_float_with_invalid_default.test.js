// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_float_with_invalid_default.phpt
  it("Float type should not allow invalid types as default", function () {
    expect(parser.parseCode("<?php\nfunction test(float $arg = true)\n{\n    var_dump($arg);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
