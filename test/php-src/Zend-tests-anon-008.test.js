// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/008.phpt
  it("testing static access for methods and properties in anon classes", function () {
    expect(parser.parseCode("<?php\n$anonClass = new class(\"cats\", \"dogs\") {\n    public static $foo;\n    private static $bar;\n    public function __construct($foo, $bar) {\n        static::$foo = $foo;\n        static::$bar = $bar;\n    }\n    public static function getBar() {\n        return static::$bar;\n    }\n};\nvar_dump($anonClass::$foo);\nvar_dump($anonClass::getBar());\n?>")).toMatchSnapshot();
  });
});
