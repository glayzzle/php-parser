// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69767.phpt
  it("Bug #69767 (Default parameter value with wrong type segfaults)", function () {
    expect(parser.parseCode("<?php\nfunction foo(String $bar = 0) {}\n?>")).toMatchSnapshot();
  });
});
