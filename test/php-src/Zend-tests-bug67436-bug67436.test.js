// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67436/bug67436.phpt
  it("bug67436: Autoloader isn't called if user defined error handler is present", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($classname) {\n    if (in_array($classname, array('a','b','c'))) {\n        require_once __DIR__ . \"/{$classname}.inc\";\n    }\n});\nset_error_handler(function ($errno, $errstr, $errfile, $errline) {\n    var_dump($errstr);\n}, error_reporting());\na::staticTest();\n$b = new b();\n$b->test();\n?>")).toMatchSnapshot();
  });
});
