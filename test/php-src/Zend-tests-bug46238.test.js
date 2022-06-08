// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46238.phpt
  it("Bug #46238 (Segmentation fault on static call with empty string method)", function () {
    expect(parser.parseCode("<?php\nclass a {\n        static function __callStatic($name, $arguments)\n        {\n                var_dump(array($name, $arguments));\n        }\n}\n$a = 'a';\n$b = '';\n$a::$b($a);\n$a::$b(array());\n$a::$b(NULL);\n$a::$b(1);\n$a::$b();\n$b = \"\\0\";\n$a::$b($a);\n$a::$b(array());\n$a::$b(NULL);\n$a::$b(1);\n$a::$b();\n?>")).toMatchSnapshot();
  });
});
