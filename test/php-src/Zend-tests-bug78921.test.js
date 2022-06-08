// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78921.phpt
  it("Bug #78921: When Reflection triggers class load, property visibility is incorrect", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($className) {\n    if ($className == 'PrivateStatic') {\n        class PrivateStatic\n        {\n            const SOME_CONST = 13;\n            private static $privateStaticVarArray = ['a', 'b', 'c'];\n            private static $otherStatic;\n            public static function init()\n            {\n                self::$otherStatic = self::$privateStaticVarArray;\n            }\n        }\n        PrivateStatic::init();\n    }\n});\nclass OtherClass\n{\n    const MY_CONST = PrivateStatic::SOME_CONST;\n    public static $prop = 'my property';\n}\n$reflectionClass = new ReflectionClass('OtherClass');\n$reflectionProperty = $reflectionClass->getProperty('prop');\n$value = $reflectionProperty->getValue();\necho \"Value is $value\\n\";\n?>")).toMatchSnapshot();
  });
});
