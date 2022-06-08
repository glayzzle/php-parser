// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_011.phpt
  it("Testing array dereference with chaining", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass foo {\n    public $arr;\n    public function &a() {\n        return $this->arr;\n    }\n}\n$foo = new foo;\n$h = &$foo->a();\n$h[] = 1;\n$h[] = $foo;\nvar_dump($foo->a()[1]->arr[1]->a()[1]->arr[1]->arr[0]);\nvar_dump($foo->a()[1]);\nvar_dump($foo->a()[1]->arr[1]);\n?>")).toMatchSnapshot();
  });
});
