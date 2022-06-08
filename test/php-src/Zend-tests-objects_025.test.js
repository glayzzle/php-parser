// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_025.phpt
  it("Testing invalid method names with __call and __callstatic", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function __call($a, $b) {\n        print \"non-static - ok\\n\";\n    }\n    public static function __callstatic($a, $b) {\n        print \"static - ok\\n\";\n    }\n}\n$a = new foo;\n$a->foooo();\n$a::foooo();\n$b = 'aaaaa1';\n$a->$b();\n$a::$b();\n$b = '  ';\n$a->$b();\n$a::$b();\n$b = str_repeat('a', 10000);\n$a->$b();\n$a::$b();\n$b = NULL;\n$a->$b();\n?>")).toMatchSnapshot();
  });
});
