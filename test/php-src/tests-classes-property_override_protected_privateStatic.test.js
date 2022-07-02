// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/property_override_protected_privateStatic.phpt
  it("Redeclare inherited protected property as private static.", function () {
    expect(parser.parseCode("<?php\n  class A\n  {\n      protected $p = \"A::p\";\n      function showA()\n      {\n          echo $this->p . \"\\n\";\n      }\n  }\n  class B extends A\n  {\n      private static $p = \"B::p (static)\";\n      static function showB()\n      {\n          echo self::$p . \"\\n\";\n      }\n  }\n  $a = new A;\n  $a->showA();\n  $b = new B;\n  $b->showA();\n  B::showB();\n?>")).toMatchSnapshot();
  });
});
