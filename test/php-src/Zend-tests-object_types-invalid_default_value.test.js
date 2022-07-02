// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_types/invalid_default_value.phpt
  it("Object type can only default to null", function () {
    expect(parser.parseCode("<?php\nfunction test(object $obj = 42) { }\n?>")).toMatchSnapshot();
  });
});
