// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_method_call_003.phpt
  it("Testing indirect method call", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public $x = 1;\n    public function getX() {\n        return $this->x;\n    }\n    public function setX($val) {\n        $this->x = $val;\n        return $this;\n    }\n}\n$X = (new foo)->setX(10)->getX();\nvar_dump($X); // int(10)\n?>")).toMatchSnapshot();
  });
});
