// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_float_with_integer_default_strict.phpt
  it("Float type should allow an integer as default even with strict types", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nfunction test(float $arg = 0)\n{\n    var_dump($arg);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
