// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_021.phpt
  it("ZE2 Late Static Binding parent::/self:: forwarding while classname doesn't", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function test() {\n        echo get_called_class().\"\\n\";\n    }\n}\nclass B extends A {\n    public static function testForward() {\n        parent::test();\n        call_user_func(\"parent::test\");\n        call_user_func(array(\"parent\", \"test\"));\n        self::test();\n        call_user_func(\"self::test\");\n        call_user_func(array(\"self\", \"test\"));\n    }\n    public static function testNoForward() {\n        A::test();\n        call_user_func(\"A::test\");\n        call_user_func(array(\"A\", \"test\"));\n        B::test();\n        call_user_func(\"B::test\");\n        call_user_func(array(\"B\", \"test\"));\n        (self::class)::test();\n        call_user_func(self::class . \"::test\");\n        call_user_func(array(self::class, \"test\"));\n    }\n}\nclass C extends B {\n}\nC::testForward();\nC::testNoForward();\n?>")).toMatchSnapshot();
  });
});
