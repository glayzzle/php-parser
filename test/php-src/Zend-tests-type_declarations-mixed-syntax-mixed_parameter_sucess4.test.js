// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/syntax/mixed_parameter_sucess4.phpt
  it("Test that the mixed parameter type can have any default value", function () {
    expect(parser.parseCode("<?php\nfunction foo(mixed $a = null, mixed $b = false, mixed $c = 1, mixed $d = 3.13, mixed $e = \"\", mixed $f = [])\n{\n}\n?>")).toMatchSnapshot();
  });
});
