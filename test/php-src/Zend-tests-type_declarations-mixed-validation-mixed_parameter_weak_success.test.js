// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/validation/mixed_parameter_weak_success.phpt
  it("Test that the mixed parameter type accepts any kind of arguments in weak mode", function () {
    expect(parser.parseCode("<?php\nfunction foo(mixed $a)\n{\n}\nfoo(null);\nfoo(false);\nfoo(1);\nfoo(3.14);\nfoo(\"\");\nfoo([]);\nfoo(new stdClass());\n?>")).toMatchSnapshot();
  });
});
