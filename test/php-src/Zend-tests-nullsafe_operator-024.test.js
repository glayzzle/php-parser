// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/024.phpt
  it("Test nullsafe as foreach target", function () {
    expect(parser.parseCode("<?php\n$foo = null;\nforeach ([1, 2, 3] as $foo?->bar) {}\n?>")).toMatchSnapshot();
  });
});
