// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/redundant_types/nullable_null.phpt
  it("Combining nullability with null", function () {
    expect(parser.parseCode("<?php\nfunction test(): ?null {\n}\n?>")).toMatchSnapshot();
  });
});
