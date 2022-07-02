// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ArrayAccess_indirect_append.phpt
  it("Using indirect append on ArrayAccess object", function () {
    expect(parser.parseCode("<?php\nclass AA implements ArrayAccess {\n    private $data = [];\n    public function &offsetGet($name): mixed {\n        if (null === $name) {\n            return $this->data[];\n        } else {\n            return $this->data[$name];\n        }\n    }\n    public function offsetSet($name, $value): void {\n        $this->data[$name] = $value;\n    }\n    public function offsetUnset($name): void {}\n    public function offsetExists($name): bool {}\n}\n$aa = new AA;\n$aa[3] = 1;\n$aa[][][0] = 2;\nvar_dump($aa);\n?>")).toMatchSnapshot();
  });
});
