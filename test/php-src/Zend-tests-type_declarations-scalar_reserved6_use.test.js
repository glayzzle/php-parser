// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_reserved6_use.phpt
  it("Scalar type names cannot be used as class, trait or interface names (6) - use", function () {
    expect(parser.parseCode("<?php\nuse foobar as bool;\n?>")).toMatchSnapshot();
  });
});
