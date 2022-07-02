// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug65322.phpt
  it("Bug #65322: compile time errors won't trigger auto loading", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    var_dump($class);\n    class X {}\n});\nset_error_handler(function($_, $msg, $file) {\n    var_dump($msg, $file);\n    new X;\n});\n/* This is just a particular example of a non-fatal compile-time error\n * If this breaks in future, just find another example and use it instead */\neval('class A { private function __invoke() { } }');\n?>")).toMatchSnapshot();
  });
});
