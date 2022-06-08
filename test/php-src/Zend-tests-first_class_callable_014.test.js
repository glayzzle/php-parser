// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_014.phpt
  it("First class callable with nullsafe method call (unrelated)", function () {
    expect(parser.parseCode("<?php\n$foo = null;\nvar_dump($foo?->foo($foo->bar(...)));\n?>")).toMatchSnapshot();
  });
});
