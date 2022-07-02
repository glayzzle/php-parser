// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_reserved6_class_alias.phpt
  it("Scalar type names cannot be used as class, trait or interface names (6) - class_alias", function () {
    expect(parser.parseCode("<?php\nclass foobar {}\nclass_alias(\"foobar\", \"bool\");\n?>")).toMatchSnapshot();
  });
});
