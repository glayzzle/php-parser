// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/026.phpt
  it("Return type of parent is not allowed in function", function () {
    expect(parser.parseCode("<?php\nfunction test(): parent {}\n?>")).toMatchSnapshot();
  });
});
