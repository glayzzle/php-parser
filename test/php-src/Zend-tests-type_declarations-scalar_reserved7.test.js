// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_reserved7.phpt
  it("Scalar type names cannot be used as class, trait or interface names (7)", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass int {}\n?>")).toMatchSnapshot();
  });
});
