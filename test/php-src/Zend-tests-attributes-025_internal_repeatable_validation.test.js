// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/025_internal_repeatable_validation.phpt
  it("Internal attribute targets are validated.", function () {
    expect(parser.parseCode("<?php\n#[Attribute]\n#[Attribute]\nclass A1 { }\n?>")).toMatchSnapshot();
  });
});
