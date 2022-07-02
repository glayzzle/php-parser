// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/illegal_default_value_property.phpt
  it("Default value not legal for any type in the union", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int|float $prop = \"0\";\n}\n?>")).toMatchSnapshot();
  });
});
