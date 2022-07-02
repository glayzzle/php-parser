// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_reserved3.phpt
  it("Scalar type names cannot be used as class, trait or interface names (3)", function () {
    expect(parser.parseCode("<?php\nclass float {}\n?>")).toMatchSnapshot();
  });
});
