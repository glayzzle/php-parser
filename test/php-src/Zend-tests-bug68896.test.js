// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68896.phpt
  it("Bug #68896 (Changing ArrayObject value cause Segment Fault)", function () {
    expect(parser.parseCode("<?php\nclass A implements ArrayAccess {\n    private $a = [];\n    function offsetGet($offset): mixed {\n        return $this->a[$offset];\n    }\n        function offsetSet($offset, $value): void {\n                $this->a[$offset] = $value;\n        }\n        function offsetExists($offset): bool {\n                isset($this->a[$offset]);\n        }\n        function offsetUnset($offset): void {\n                unset($this->a[$offset]);\n        }\n}\n$obj = new ArrayObject([\"a\" => 1]);\n$obj[\"a\"] .= \"test\";\nvar_dump($obj[\"a\"]);\n$obj = new A;\n$obj[\"a\"] = 1;\n$obj[\"a\"] .= \"test\";\nvar_dump($obj[\"a\"]);\n?>")).toMatchSnapshot();
  });
});
