// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/018_fatal_error_in_argument.phpt
  it("Don't free uninitialized memory if a fatal error occurs in an attribute argument", function () {
    expect(parser.parseCode("<?php\n#[Attr(a->b::c)]\nfunction test() {}\n?>")).toMatchSnapshot();
  });
});
