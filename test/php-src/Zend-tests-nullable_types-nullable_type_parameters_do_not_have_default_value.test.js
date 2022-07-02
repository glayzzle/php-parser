// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullable_types/nullable_type_parameters_do_not_have_default_value.phpt
  it("Explicit nullable types do not imply a default value", function () {
    expect(parser.parseCode("<?php\nfunction f(?callable $p) {}\nf();\n?>")).toMatchSnapshot();
  });
});
