// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/throwable_002.phpt
  it("Test using an Exception as the previous Throwable for an Error", function () {
    expect(parser.parseCode("<?php\nthrow new Error('Error message', 0, new Exception('Exception message'));\n?>")).toMatchSnapshot();
  });
});
