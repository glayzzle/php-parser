// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_021.phpt
  it("Testing throw exception doesn't crash with wrong params, variant 3", function () {
    expect(parser.parseCode("<?php\nclass Hello extends Error {}\nthrow new Hello(new stdClass);\n?>")).toMatchSnapshot();
  });
});
