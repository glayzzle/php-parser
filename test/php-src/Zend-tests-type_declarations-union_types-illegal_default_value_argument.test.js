// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/illegal_default_value_argument.phpt
  it("Argument default value not legal for any type in the union", function () {
    expect(parser.parseCode("<?php\nfunction test(int|float $arg = \"0\") {\n}\n?>")).toMatchSnapshot();
  });
});
