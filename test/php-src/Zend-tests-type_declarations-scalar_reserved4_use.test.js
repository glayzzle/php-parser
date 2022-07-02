// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_reserved4_use.phpt
  it("Scalar type names cannot be used as class, trait or interface names (4) - use", function () {
    expect(parser.parseCode("<?php\nuse foobar as string;\n?>")).toMatchSnapshot();
  });
});
