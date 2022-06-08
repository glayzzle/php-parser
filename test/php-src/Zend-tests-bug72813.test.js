// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72813.phpt
  it("Bug #72813 (Segfault with __get returned by ref)", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    private $props = ['a' => 'text', 'b' => 1];\n    public function &__get($prop)\n    {\n        return $this->props[$prop];\n    }\n    public function __set($prop, $value)\n    {\n        if ($prop === 'b') $value = [$value];\n        $this->props[$prop] = $value;\n    }\n    public function getProperties()\n    {\n        return [$this->props];\n    }\n}\n$obj = new Test;\n$obj->b = $obj->b;\nprint_r($obj->getProperties());\n?>")).toMatchSnapshot();
  });
});
