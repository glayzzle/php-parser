// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_013.phpt
  it("First class callable with nullsafe method call (nested)", function () {
    expect(parser.parseCode("<?php\n$foo?->foo->bar(...);\n?>")).toMatchSnapshot();
  });
});
