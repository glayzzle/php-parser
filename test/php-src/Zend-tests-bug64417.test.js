// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64417.phpt
  it("Bug #64417 (BC break: ArrayAccess::&offsetGet() in a trait causes fatal error)", function () {
    expect(parser.parseCode("<?php\ntrait aa {\n    private $container = array();\n    public function offsetSet($offset, $value): void {\n        if (is_null($offset)) {\n            $this->container[] = $value;\n        } else {\n            $this->container[$offset] = $value;\n        }\n    }\n    public function offsetExists($offset): bool {\n        return isset($this->container[$offset]);\n    }\n    public function offsetUnset($offset): void {\n        unset($this->container[$offset]);\n    }\n    public function &offsetGet($offset): mixed {\n    $result = null;\n        if (isset($this->container[$offset])) {\n            $result = &$this->container[$offset];\n        }\n        return $result;\n    }\n}\nclass obj implements ArrayAccess {\n    use aa;\n}\n$o = new obj;\n$o['x'] = 1;\n++$o['x'];\necho $o['x'], \"\\n\";\n?>")).toMatchSnapshot();
  });
});
