// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/strlen.phpt
  it("Fixed execute_data corruption with __toString()", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n  public $something = 'hello';\n  public function __toString()\n  {\n    return $this->something;\n  }\n}\n$t = new Test;\nvar_dump(strlen($t));\nvar_dump($t->something);\nclass Test2\n{\n  public $something;\n  public function __construct(&$a)\n  {\n    $this->something = &$a;\n  }\n  public function __toString()\n  {\n    return $this->something;\n  }\n}\n$a = 'world';\n$t2 = new Test2($a);\nvar_dump(strlen($t2));\nvar_dump($t2->something);\nvar_dump($a);\n$a = 'foobar';\nvar_dump(strlen($t2));\nvar_dump($t2->something);\n?>")).toMatchSnapshot();
  });
});
