// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_called_scope.phpt
  it("SPL autoloader should not do anything magic with called scope", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static function register() {\n        spl_autoload_register([Test::class, 'autoload']);\n    }\n    public static function autoload($class) {\n        echo \"self=\" . self::class, \", static=\", static::class, \"\\n\";\n    }\n}\nclass Test2 extends Test {\n    public static function register() {\n        spl_autoload_register([Test2::class, 'autoload']);\n    }\n    public static function runTest() {\n        class_exists('FooBar');\n    }\n}\nTest::register();\nTest2::register();\nTest2::runTest();\n?>")).toMatchSnapshot();
  });
});
