// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/array_access_006.phpt
  it("ZE2 ArrayAccess and ASSIGN_OP operators (+=)", function () {
    expect(parser.parseCode("<?php\nclass OverloadedArray implements ArrayAccess {\n    public $realArray;\n    function __construct() {\n        $this->realArray = array(1,2,3);\n    }\n    function offsetExists($index): bool {\n        return array_key_exists($this->realArray, $index);\n    }\n    function offsetGet($index): mixed {\n        return $this->realArray[$index];\n    }\n    function offsetSet($index, $value): void {\n        $this->realArray[$index] = $value;\n    }\n    function offsetUnset($index): void {\n        unset($this->realArray[$index]);\n    }\n}\n$a = new OverloadedArray;\n$a[1] += 10;\nvar_dump($a[1]);\necho \"---Done---\\n\";\n?>")).toMatchSnapshot();
  });
});
