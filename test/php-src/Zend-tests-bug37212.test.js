// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug37212.phpt
  it("Bug #37212 (Access to protected property of common base class)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    protected $value;\n    public function __construct($val)\n    {\n        $this->value = $val;\n    }\n    protected function getValue()\n    {\n        return $this->value;\n    }\n}\nclass B extends A\n{\n    public function copyValue($obj)\n    {\n        $this->value = $obj->getValue();\n        $this->value = $obj->value; // value defined in common base class\n    }\n}\nclass C extends A {}\n$B = new B(\"B\");\nvar_dump($B);\n$C = new C(\"C\");\nvar_dump($C);\n$B->copyValue($C);\nvar_dump($B);\n?>")).toMatchSnapshot();
  });
});
