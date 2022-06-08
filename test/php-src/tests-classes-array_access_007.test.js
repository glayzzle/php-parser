// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/array_access_007.phpt
  it("ZE2 ArrayAccess and [] assignment", function () {
    expect(parser.parseCode("<?php\nclass OverloadedArray implements ArrayAccess {\n    public $realArray;\n    function __construct() {\n        $this->realArray = array();\n    }\n    function offsetExists($index): bool {\n        return array_key_exists($this->realArray, $index);\n    }\n    function offsetGet($index): mixed {\n        return $this->realArray[$index];\n    }\n    function offsetSet($index, $value): void {\n        if (is_null($index)) {\n            $this->realArray[] = $value;\n        } else {\n            $this->realArray[$index] = $value;\n        }\n    }\n    function offsetUnset($index): void {\n        unset($this->realArray[$index]);\n    }\n    function dump() {\n        var_dump($this->realArray);\n    }\n}\n$a = new OverloadedArray;\n$a[] = 1;\n$a[1] = 2;\n$a[2] = 3;\n$a[] = 4;\n$a->dump();\n?>")).toMatchSnapshot();
  });
});
