// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/property_override_protectedStatic_protectedStatic.phpt
  it("Redeclare inherited protected static property as protected static.", function () {
    expect(parser.parseCode("<?php\n  class A\n  {\n      protected static $p = \"A::p (static)\";\n      static function showA()\n      {\n          echo self::$p . \"\\n\";\n      }\n  }\n  class B extends A\n  {\n      protected static $p = \"B::p (static)\";\n      static function showB()\n      {\n          echo self::$p . \"\\n\";\n      }\n  }\n  A::showA();\n  B::showA();\n  B::showB();\n?>")).toMatchSnapshot();
  });
});
