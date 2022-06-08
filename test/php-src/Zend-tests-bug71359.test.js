// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71359.phpt
  it("Bug #71359: Null coalescing operator and magic", function () {
    expect(parser.parseCode("<?php\nclass AA {\n    private $data = [];\n    public function __isset($name) {\n        echo \"__isset($name)\\n\";\n        return array_key_exists($name, $this->data);\n    }\n    public function &__get($name) {\n        echo \"__get($name)\\n\";\n        if (!array_key_exists($name, $this->data)) {\n            throw new Exception('Unknown offset');\n        }\n        return $this->data[$name];\n    }\n    public function __set($name, $value) {\n        echo \"__set($name)\\n\";\n        $this->data[$name] = $value;\n    }\n    public function __unset($name) {\n        echo \"__unset($name)\\n\";\n        unset($this->data[$name]);\n    }\n}\n$aa = new AA;\nvar_dump(isset($aa->zero->one->two));\nvar_dump(isset($aa->zero->foo));\nvar_dump($aa->zero ?? 42);\nvar_dump($aa->zero->one->two ?? 42);\n$aa->zero = new AA;\n$aa->zero->one = new AA;\nvar_dump(isset($aa->zero->one->two));\nvar_dump($aa->zero->one->two ?? 42);\n?>")).toMatchSnapshot();
  });
});
