// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_008.phpt
  it("Testing array dereference with dynamic method name and references", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass foo {\n    public $x = array(1);\n    public function &b() {\n        return $this->x;\n    }\n}\n$foo = new foo;\n$a = 'b';\nvar_dump($foo->$a()[0]);\n$h = &$foo->$a();\n$h[] = 2;\nvar_dump($foo->$a());\n?>")).toMatchSnapshot();
  });
});
