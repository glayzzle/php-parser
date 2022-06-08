// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/redundant_types/duplicate_type.phpt
  it("Using a type twice in a union", function () {
    expect(parser.parseCode("<?php\nfunction test(): int|INT {\n}\n?>")).toMatchSnapshot();
  });
});
