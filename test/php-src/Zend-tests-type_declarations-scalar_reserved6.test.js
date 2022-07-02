// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_reserved6.phpt
  it("Scalar type names cannot be used as class, trait or interface names (6)", function () {
    expect(parser.parseCode("<?php\nclass bool {}\n?>")).toMatchSnapshot();
  });
});
