// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug55007.phpt
  it("Bug #55007 (compiler fail after previous fail)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($classname) {\n  if ('CompileErrorClass'==$classname) eval('class CompileErrorClass { function foo() { $a[]; } }');\n  if ('MyErrorHandler'==$classname) eval('class MyErrorHandler { function __construct() { print \"My error handler runs.\\n\"; } }');\n});\nfunction shutdown() {\n  new MyErrorHandler();\n}\nregister_shutdown_function('shutdown');\nnew CompileErrorClass();\n?>")).toMatchSnapshot();
  });
});
