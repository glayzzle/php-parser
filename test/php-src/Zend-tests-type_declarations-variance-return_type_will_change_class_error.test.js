// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/return_type_will_change_class_error.phpt
  it("Test that the ReturnTypeWillChange attribute cannot target classes", function () {
    expect(parser.parseCode("<?php\n#[ReturnTypeWillChange]\nclass Foo\n{\n}\n?>")).toMatchSnapshot();
  });
});
