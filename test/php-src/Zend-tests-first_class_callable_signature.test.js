// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_signature.phpt
  it("First class callables should retain the signature for reflection", function () {
    expect(parser.parseCode("<?php\nfunction test(int $a, string &$b, Foo... $c) {}\necho new ReflectionFunction(test(...));\n?>")).toMatchSnapshot();
  });
});
