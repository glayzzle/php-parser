// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/static_002.phpt
  it("Traits with static methods referenced using variable.", function () {
    expect(parser.parseCode("<?php\n    trait TestTrait {\n        public static function test() {\n            return 'Test';\n        }\n    }\n    class A {\n        use TestTrait;\n    }\n    $class = \"A\";\n    echo $class::test();\n?>")).toMatchSnapshot();
  });
});
