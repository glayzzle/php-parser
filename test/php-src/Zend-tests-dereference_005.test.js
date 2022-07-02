// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_005.phpt
  it("Testing array dereference on object that implements ArrayAccess", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass obj implements arrayaccess {\n    private $container = array();\n    public function __construct() {\n        $this->container = array(\n            \"one\"   => 1,\n            \"two\"   => 2,\n            \"three\" => 3,\n        );\n    }\n    public function offsetSet($offset, $value): void {\n        $this->container[$offset] = $value;\n    }\n    public function offsetExists($offset): bool {\n        return isset($this->container[$offset]);\n    }\n    public function offsetUnset($offset): void {\n        unset($this->container[$offset]);\n    }\n    public function offsetGet($offset): mixed {\n        return isset($this->container[$offset]) ? $this->container[$offset] : null;\n    }\n}\nfunction x() {\n    return new obj;\n}\nvar_dump(x()['two']);\n?>")).toMatchSnapshot();
  });
});
