// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/only_last_error.phpt
  it("Only the last argument can be variadic", function () {
    expect(parser.parseCode("<?php\nfunction test($foo, ...$bar, $baz) {}\n?>")).toMatchSnapshot();
  });
});
