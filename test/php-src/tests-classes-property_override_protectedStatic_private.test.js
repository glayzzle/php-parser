// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/property_override_protectedStatic_private.phpt
  it("Redeclare inherited protected static property as private.", function () {
    expect(parser.parseCode("<?php\n  class A\n  {\n      protected static $p = \"A::p (static)\";\n      static function showA()\n      {\n          echo self::$p . \"\\n\";\n      }\n  }\n  class B extends A\n  {\n      private $p = \"B::p\";\n      function showB()\n      {\n          echo $this->p . \"\\n\";\n      }\n  }\n  A::showA();\n  $b = new B;\n  $b->showA();\n  $b->showB();\n?>")).toMatchSnapshot();
  });
});
