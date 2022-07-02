// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_012.phpt
  it("Testing array dereferencing on return of a method with and without reference", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    static $x = array();\n    public function &a() {\n        self::$x = array(1, 2, 3);\n        return self::$x;\n    }\n    public function b() {\n        $x = array(1);\n        $x[] = 2;\n        return $x;\n    }\n}\n$foo = new foo;\n// Changing the static variable\n$foo->a()[0] = 2;\nvar_dump($foo::$x);\n$foo->b()[] = new stdClass;\n$h = $foo->b();\nvar_dump($h);\n$h[0] = 3;\nvar_dump($h);\n?>")).toMatchSnapshot();
  });
});
