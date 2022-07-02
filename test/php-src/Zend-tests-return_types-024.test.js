// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/024.phpt
  it("Return type of self is not allowed in function", function () {
    expect(parser.parseCode("<?php\nfunction test(): self {}\n?>")).toMatchSnapshot();
  });
});
