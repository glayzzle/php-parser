// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/redundant_types/duplicate_class_type.phpt
  it("Duplicate class type", function () {
    expect(parser.parseCode("<?php\nfunction test(): Foo|int|FOO {\n}\n?>")).toMatchSnapshot();
  });
});
