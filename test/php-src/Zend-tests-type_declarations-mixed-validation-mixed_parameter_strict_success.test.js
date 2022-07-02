// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/validation/mixed_parameter_strict_success.phpt
  it("Test that the mixed parameter type accepts any kind of arguments in strict mode", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nfunction foo(mixed $a)\n{\n}\nfoo(null);\nfoo(false);\nfoo(1);\nfoo(3.14);\nfoo(\"\");\nfoo([]);\nfoo(new stdClass());\n?>")).toMatchSnapshot();
  });
});
