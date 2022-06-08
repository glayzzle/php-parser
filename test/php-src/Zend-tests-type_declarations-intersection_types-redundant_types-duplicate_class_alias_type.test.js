// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/redundant_types/duplicate_class_alias_type.phpt
  it("Duplicate class alias type", function () {
    expect(parser.parseCode("<?php\nuse A as B;\nfunction foo(): A&B {}\n?>")).toMatchSnapshot();
  });
});
