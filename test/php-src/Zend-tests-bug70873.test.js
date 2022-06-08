// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70873.phpt
  it("Bug #70873 (Regression on private static properties access)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private static $x = 1;\n}\nclass B extends A {\n    function bar() {\n        var_dump(self::$x);\n    }\n};\nclass C extends A {\n    function bar() {\n        var_dump(A::$x);\n    }\n};\n$a = new B;\n$a->bar();\n$b = new C;\n$b->bar();\n?>")).toMatchSnapshot();
  });
});
