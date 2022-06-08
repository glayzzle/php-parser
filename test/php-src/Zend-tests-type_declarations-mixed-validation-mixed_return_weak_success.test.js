// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/validation/mixed_return_weak_success.phpt
  it("Test that the mixed return type is compatible with any kind of return value in weak mode", function () {
    expect(parser.parseCode("<?php\nfunction foo($a): mixed\n{\n    return $a;\n}\nfoo(null);\nfoo(false);\nfoo(1);\nfoo(\"\");\nfoo([]);\nfoo(new stdClass());\n?>")).toMatchSnapshot();
  });
});
