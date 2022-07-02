// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/attributes_duplicate_named_param.phpt
  it("Named params in attributes: Duplicate named parameter error", function () {
    expect(parser.parseCode("<?php\n#[MyAttribute(a: 'A', a: 'A')]\nclass Test {}\n?>")).toMatchSnapshot();
  });
});
