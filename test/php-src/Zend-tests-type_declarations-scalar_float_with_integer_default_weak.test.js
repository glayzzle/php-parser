// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_float_with_integer_default_weak.phpt
  it("Float type should allow an integer as default", function () {
    expect(parser.parseCode("<?php\nfunction test(float $arg = 0)\n{\n    var_dump($arg);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
