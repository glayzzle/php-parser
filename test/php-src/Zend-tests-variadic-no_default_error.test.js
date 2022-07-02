// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/no_default_error.phpt
  it("Variadic argument cannot have a default value", function () {
    expect(parser.parseCode("<?php\nfunction test(...$args = 123) {}\n?>")).toMatchSnapshot();
  });
});
