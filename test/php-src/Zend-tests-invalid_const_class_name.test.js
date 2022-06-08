// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/invalid_const_class_name.phpt
  it("Invalid constant class name in nested class constant access", function () {
    expect(parser.parseCode("<?php\n[]::X::X;\n?>")).toMatchSnapshot();
  });
});
