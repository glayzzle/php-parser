// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/standalone_null.phpt
  it("Null cannot be used as a standalone type", function () {
    expect(parser.parseCode("<?php\nfunction test(): null {}\n?>")).toMatchSnapshot();
  });
});
