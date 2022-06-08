// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/022_attribute_flags_value_is_validated.phpt
  it("Attribute flags value is validated.", function () {
    expect(parser.parseCode("<?php\n#[Attribute(-1)]\nclass A1 { }\n?>")).toMatchSnapshot();
  });
});
