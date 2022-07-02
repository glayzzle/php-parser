// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/008_wrong_attribution.phpt
  it("Attributes: Prevent Attribute on non classes", function () {
    expect(parser.parseCode("<?php\n#[Attribute]\nfunction foo() {}\n?>")).toMatchSnapshot();
  });
});
