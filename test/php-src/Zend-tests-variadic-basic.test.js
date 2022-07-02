// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/basic.phpt
  it("Basic variadic function", function () {
    expect(parser.parseCode("<?php\nfunction test1(... $args) {\n    var_dump($args);\n}\ntest1();\ntest1(1);\ntest1(1, 2, 3);\nfunction test2($arg1, $arg2, ...$args) {\n    var_dump($arg1, $arg2, $args);\n}\ntest2(1, 2);\ntest2(1, 2, 3);\ntest2(1, 2, 3, 4, 5);\n?>")).toMatchSnapshot();
  });
});
