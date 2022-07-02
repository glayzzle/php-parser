// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/property_override_private_private.phpt
  it("Redeclare inherited private property as private.", function () {
    expect(parser.parseCode("<?php\n  class A\n  {\n      private $p = \"A::p\";\n      function showA()\n      {\n          echo $this->p . \"\\n\";\n      }\n  }\n  class B extends A\n  {\n      private $p = \"B::p\";\n      function showB()\n      {\n          echo $this->p . \"\\n\";\n      }\n  }\n  $a = new A;\n  $a->showA();\n  $b = new B;\n  $b->showA();\n  $b->showB();\n?>")).toMatchSnapshot();
  });
});
