// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_static_007.phpt
  it("Testing __call and __callstatic", function () {
    expect(parser.parseCode("<?php\nclass a {\n    public function __call($a, $b) {\n        print \"__call: \". $a .\"\\n\";\n    }\n    static public function __callStatic($a, $b) {\n        print \"__callstatic: \". $a .\"\\n\";\n    }\n    public function baz() {\n        self::Bar();\n    }\n}\n$a = new a;\n$b = 'Test';\n$a::$b();\n$a->$b();\n$a->baz();\na::Foo();\n?>")).toMatchSnapshot();
  });
});
