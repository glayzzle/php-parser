// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71731.phpt
  it("Bug #71731: Null coalescing operator and ArrayAccess", function () {
    expect(parser.parseCode("<?php\nclass AA implements ArrayAccess {\n    private $data = [];\n    public function offsetExists($name): bool {\n        echo \"offsetExists($name)\\n\";\n        return array_key_exists($name, $this->data);\n    }\n    public function &offsetGet($name): mixed {\n        echo \"offsetGet($name)\\n\";\n        if (!array_key_exists($name, $this->data)) {\n            throw new Exception('Unknown offset');\n        }\n        return $this->data[$name];\n    }\n    public function offsetSet($name, $value): void {\n        echo \"offsetSet($name)\\n\";\n        $this->data[$name] = $value;\n    }\n    public function offsetUnset($name): void {\n        echo \"offsetUnset($name)\\n\";\n        unset($this->data[$name]);\n    }\n}\n$aa = new AA;\nvar_dump(isset($aa[0][1][2]));\nvar_dump(isset($aa[0]->foo));\nvar_dump($aa[0] ?? 42);\nvar_dump($aa[0][1][2] ?? 42);\n$aa[0] = new AA;\n$aa[0][1] = new AA;\nvar_dump(isset($aa[0][1][2]));\nvar_dump($aa[0][1][2] ?? 42);\n?>")).toMatchSnapshot();
  });
});
