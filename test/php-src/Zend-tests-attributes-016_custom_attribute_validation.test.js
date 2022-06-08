// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/016_custom_attribute_validation.phpt
  it("Attribute validation callback of internal attributes.", function () {
    expect(parser.parseCode("<?php\n#[ZendTestAttribute]\nfunction foo() {\n}\n?>")).toMatchSnapshot();
  });
});
