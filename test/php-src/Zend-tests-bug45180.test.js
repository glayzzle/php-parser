// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug45180.phpt
  it("Testing callback formats within class method", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function test() {\n        call_user_func(array('FOO', 'ABC'));\n        call_user_func(array($this, 'ABC'));\n        foo::XYZ();\n        self::WWW();\n        call_user_func('FOO::ABC');\n    }\n    function __call($a, $b) {\n        print \"__call:\\n\";\n        var_dump($a);\n    }\n    static public function __callStatic($a, $b) {\n        print \"__callstatic:\\n\";\n        var_dump($a);\n    }\n}\n$x = new foo;\n$x->test();\n$x::A();\nfoo::B();\n$f = 'FOO';\n$f::C();\n$f::$f();\nfoo::$f();\n?>")).toMatchSnapshot();
  });
});
