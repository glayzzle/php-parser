// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/attributes_positional_after_named.phpt
  it("Named params in attributes: Positional after named error", function () {
    expect(parser.parseCode("<?php\n#[Attribute]\nclass MyAttribute { }\n#[MyAttribute(a: 'A', 'B')]\nclass Test {}\n?>")).toMatchSnapshot();
  });
});
