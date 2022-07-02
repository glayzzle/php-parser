// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug42211.phpt
  it("Bug #42211 (property_exists() fails to find protected properties from a parent class)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function foo() {\n        var_dump(property_exists('B', 'publicBar'));\n        var_dump(property_exists('B', 'protectedBar'));\n        var_dump(property_exists('B', 'privateBar'));\n    }\n}\nclass B extends A {\n    static public $publicBar = \"ok\";\n    static protected $protectedBar = \"ok\";\n    static private $privateBar = \"fail\";\n}\n$a = new A();\n$a->foo();\n$b = new B();\n$b->foo();\n?>")).toMatchSnapshot();
  });
});
