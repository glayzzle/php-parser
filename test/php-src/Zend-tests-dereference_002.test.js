// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_002.phpt
  it("Testing array dereference on method calls", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass  foo {\n    public function bar() {\n        $x = array();\n        $x[] = 3;\n        $x[] = array(1, 5);\n        $x[] = new foo;\n        return $x;\n    }\n}\n$foo = new foo;\nvar_dump($x = $foo->bar()[1]);\nvar_dump($foo->bar()[1][1]);\nvar_dump($x[0]);\nvar_dump($x = $foo->bar()[2]);\nvar_dump($x->bar());\nvar_dump($x->bar()[0]);\n$x = array();\n$x[] = new foo;\nvar_dump($x[0]->bar()[2]);\nvar_dump($foo->bar()[2]->bar()[1]);\nvar_dump($foo->bar()[2]->bar()[2]->bar()[1][0]);\nvar_dump($foo->bar()[2]->bar()[2]->bar()[1][0][1]);\nvar_dump($foo->bar()[2]->bar()[2]->bar()[4]);\nvar_dump($foo->bar()[3]->bar());\n?>")).toMatchSnapshot();
  });
});
