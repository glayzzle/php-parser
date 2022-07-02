// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/024_internal_target_validation.phpt
  it("Internal attribute targets are validated.", function () {
    expect(parser.parseCode("<?php\n#[Attribute]\nfunction a1() { }\n?>")).toMatchSnapshot();
  });
});
