// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug22231.phpt
  it("Bug #22231 (segfault when returning a global variable by reference)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public $fubar = 'fubar';\n}\nfunction &foo(){\n    $obj = new foo();\n    $GLOBALS['foo'] = &$obj;\n    return $GLOBALS['foo'];\n}\n$bar = &foo();\nvar_dump($bar);\nvar_dump($bar->fubar);\nunset($bar);\n$bar = &foo();\nvar_dump($bar->fubar);\n$foo = &foo();\nvar_dump($foo);\nvar_dump($foo->fubar);\nunset($foo);\n$foo = &foo();\nvar_dump($foo->fubar);\n?>")).toMatchSnapshot();
  });
});
