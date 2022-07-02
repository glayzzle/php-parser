// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_032.phpt
  it("Covariant return-by-ref constraints", function () {
    expect(parser.parseCode("<?php\nclass A implements ArrayAccess {\n    public $foo = array();\n    public function &offsetGet($n): mixed {\n        return $this->foo[$n];\n    }\n    public function offsetSet($n, $v): void {\n    }\n    public function offsetUnset($n): void {\n    }\n    public function offsetExists($n): bool {\n    }\n}\n$a = new A;\n$a['foo']['bar'] = 2;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
