// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67436/bug67436_nohandler.phpt
  it("bug67436: E_WARNING instead of custom error handler", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($classname) {\n    if (in_array($classname, array('a','b','c'))) {\n        require_once __DIR__ . \"/{$classname}.inc\";\n    }\n});\na::staticTest();\n$b = new b();\n$b->test();\n?>")).toMatchSnapshot();
  });
});
