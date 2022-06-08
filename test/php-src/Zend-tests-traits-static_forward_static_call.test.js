// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/static_forward_static_call.phpt
  it("Traits and forward_static_call().", function () {
    expect(parser.parseCode("<?php\n    trait TestTrait {\n        public static function test() {\n            return 'Forwarded '.forward_static_call(array('A', 'test'));\n        }\n    }\n    class A {\n        public static function test() {\n            return \"Test A\";\n        }\n    }\n    class B extends A {\n        use TestTrait;\n    }\n    echo B::test();\n?>")).toMatchSnapshot();
  });
});
