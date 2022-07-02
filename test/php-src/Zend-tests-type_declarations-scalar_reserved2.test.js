// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_reserved2.phpt
  it("Scalar type names cannot be used as class, trait or interface names (2)", function () {
    expect(parser.parseCode("<?php\nclass int {}\n?>")).toMatchSnapshot();
  });
});
