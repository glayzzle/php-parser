// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_reserved4.phpt
  it("Scalar type names cannot be used as class, trait or interface names (4)", function () {
    expect(parser.parseCode("<?php\nclass string {}\n?>")).toMatchSnapshot();
  });
});
