// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_012.phpt
  it("First class callable with nullsafe method call", function () {
    expect(parser.parseCode("<?php\n$foo?->bar(...);\n?>")).toMatchSnapshot();
  });
});
