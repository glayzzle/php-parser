// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/syntax/mixed_class_error.phpt
  it("Test that mixed is a reserved class name", function () {
    expect(parser.parseCode("<?php\nclass mixed\n{\n}\n?>")).toMatchSnapshot();
  });
});
