// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/never_with_class.phpt
  it("Combining never with class type", function () {
    expect(parser.parseCode("<?php\nfunction test(): T|never {}\n?>")).toMatchSnapshot();
  });
});
