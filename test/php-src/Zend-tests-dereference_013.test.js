// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_013.phpt
  it("Testing array dereferencing on array returned from __call method", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass foo {\n    public $x = array(2);\n    public function __call($x, $y) {\n        if (count($this->x) == 1) {\n            $this->x[] = $y[0];\n        }\n        return $this->x;\n    }\n}\n$foo = new foo;\n$x = array(1);\n$foo->b($x)[1] = 3;\nvar_dump($foo->b()[0]);\nvar_dump($foo->b()[1]);\nvar_dump($foo->b()[2]);\n?>")).toMatchSnapshot();
  });
});
