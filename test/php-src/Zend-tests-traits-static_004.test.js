// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/static_004.phpt
  it("Traits with __callStatic magic method.", function () {
    expect(parser.parseCode("<?php\n    trait TestTrait {\n        public static function __callStatic($name, $arguments) {\n            return $name;\n        }\n    }\n    class A {\n        use TestTrait;\n    }\n    echo A::Test();\n?>")).toMatchSnapshot();
  });
});
