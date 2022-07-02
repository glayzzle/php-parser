// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug27669.phpt
  it("Bug #27669 (PHP 5 didn't support all possibilities for calling static methods dynamically)", function () {
    expect(parser.parseCode("<?php\n    class A {\n        static function hello() {\n            echo \"Hello World\\n\";\n        }\n    }\n    $y[0] = 'hello';\n    A::{$y[0]}();\n?>")).toMatchSnapshot();
  });
});
