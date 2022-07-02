// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/021_attribute_flags_type_is_validated.phpt
  it("Attribute flags type is validated.", function () {
    expect(parser.parseCode("<?php\n#[Attribute(\"foo\")]\nclass A1 { }\n?>")).toMatchSnapshot();
  });
});
