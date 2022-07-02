// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/010_unsupported_const_expression.phpt
  it("Attribute arguments support only const expressions.", function () {
    expect(parser.parseCode("<?php\n#[A1(foo())]\nclass C1 { }\n?>")).toMatchSnapshot();
  });
});
