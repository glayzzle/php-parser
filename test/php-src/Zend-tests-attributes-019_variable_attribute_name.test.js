// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/019_variable_attribute_name.phpt
  it("Attribute name cannot be a variable", function () {
    expect(() => parser.parseCode("<?php\n#[$x]\nclass A {}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
