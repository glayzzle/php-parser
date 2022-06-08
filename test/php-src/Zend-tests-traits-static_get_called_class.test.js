// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/static_get_called_class.phpt
  it("Traits and get_called_class().", function () {
    expect(parser.parseCode("<?php\n    trait TestTrait {\n        public static function test() {\n            return get_called_class();\n        }\n    }\n    class A {\n        use TestTrait;\n    }\n    class B extends A { }\n    echo B::test();\n?>")).toMatchSnapshot();
  });
});
