// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81626.phpt
  it("Bug #81626: Error on use static:: in __сallStatic() wrapped to Closure::fromCallable()", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public static bool $wasCalled = false;\n    public static function __callStatic(string $name, array $args): string\n    {\n        static::$wasCalled = true;\n        return 'ok';\n    }\n}\n$closure = Closure::fromCallable([TestClass::class, 'foo']);\nvar_dump($closure());\n?>")).toMatchSnapshot();
  });
});
