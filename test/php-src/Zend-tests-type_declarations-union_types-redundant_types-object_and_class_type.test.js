// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/redundant_types/object_and_class_type.phpt
  it("Using both object and a class type", function () {
    expect(parser.parseCode("<?php\nfunction test(): object|Test {\n}\n?>")).toMatchSnapshot();
  });
});
