// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/static_001.phpt
  it("Traits with static methods.", function () {
    expect(parser.parseCode("<?php\n    trait TestTrait {\n        public static function test() {\n            return 'Test';\n        }\n    }\n    class A {\n        use TestTrait;\n    }\n    echo A::test();\n?>")).toMatchSnapshot();
  });
});
