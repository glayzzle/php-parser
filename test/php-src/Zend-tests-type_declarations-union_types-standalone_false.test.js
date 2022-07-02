// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/standalone_false.phpt
  it("False cannot be used as a standalone type", function () {
    expect(parser.parseCode("<?php\nfunction test(): false {}\n?>")).toMatchSnapshot();
  });
});
