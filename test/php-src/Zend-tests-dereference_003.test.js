// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_003.phpt
  it("Testing array dereference on method calls", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass  foo {\n    public $x = 2;\n    public function a() {\n        $x = array();\n        $x[] = new foo;\n        return $x;\n    }\n    public function b() {\n        return array(1.2, array(new self));\n    }\n    public function c() {\n        $a = array();\n        $b = &$a;\n        $b[] = true;\n        return $a;\n    }\n    public function d() {\n        return $this->b();\n    }\n}\n$foo = new foo;\nvar_dump($foo->a()[0]->x);\nvar_dump($foo->a()[0]);\nvar_dump($foo->b()[1][0]->a()[0]->x);\nvar_dump($foo->c()[0]);\nvar_dump($foo->d()[0]);\n?>")).toMatchSnapshot();
  });
});
