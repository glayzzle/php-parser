// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/032_attribute_validation_scope.phpt
  it("Validation for \"Attribute\" does not use a scope when evaluating constant ASTs", function () {
    expect(parser.parseCode("<?php\n#[Attribute(parent::x)]\nclass x extends y {}\n?>")).toMatchSnapshot();
  });
});
