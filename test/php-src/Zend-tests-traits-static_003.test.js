// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/static_003.phpt
  it("Traits with late static bindings.", function () {
    expect(parser.parseCode("<?php\n    trait TestTrait {\n        public static function test() {\n            return static::$test;\n        }\n    }\n    class A {\n        use TestTrait;\n        protected static $test = \"Test A\";\n    }\n    class B extends A {\n        protected static $test = \"Test B\";\n    }\n    echo B::test();\n?>")).toMatchSnapshot();
  });
});
