// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_006.phpt
  it("First Class Callable from Closure", function () {
    expect(parser.parseCode("<?php\n$foo = function(){};\n$bar = $foo(...);\nif ($foo === $bar) {\n    echo \"OK\";\n}\n?>")).toMatchSnapshot();
  });
});
