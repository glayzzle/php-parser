// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39297.phpt
  it("Bug #39297 (Memory corryption because of indirect modification of overloaded array)", function () {
    expect(parser.parseCode("<?php\nfunction compareByRef(&$first, &$second) {\n    return $first === $second;\n}\nclass MyTree implements ArrayAccess {\n    public $parent;\n    public $children = array();\n    public function offsetExists($offset): bool {\n    }\n    public function offsetUnset($offset): void {\n    }\n    public function offsetSet($offset, $value): void {\n        echo \"offsetSet()\\n\";\n        $cannonicalName = strtolower($offset);\n        $this->children[$cannonicalName] = $value;\n        $value->parent = $this;\n    }\n    public function offsetGet($offset): mixed {\n        echo \"offsetGet()\\n\";\n        $cannonicalName = strtolower($offset);\n        return $this->children[$cannonicalName];\n    }\n}\n$id = 'Test';\n$root = new MyTree();\n$child = new MyTree();\n$root[$id] = $child;\nvar_dump(compareByRef($root[$id], $child));\n?>")).toMatchSnapshot();
  });
});
