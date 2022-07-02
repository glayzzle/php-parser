// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_022.phpt
  it("Testing throw exception doesn't crash with wrong params, variant 4", function () {
    expect(parser.parseCode("<?php\nthrow new Error(new stdClass);\n?>")).toMatchSnapshot();
  });
});
