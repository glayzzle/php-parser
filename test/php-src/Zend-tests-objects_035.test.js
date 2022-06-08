// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_035.phpt
  it("Array object clobbering by user error handler", function () {
    expect(parser.parseCode("<?php\nclass A implements ArrayAccess {\n    public function &offsetGet($n): mixed {\n    \treturn null;\n    }\n    public function offsetSet($n, $v): void {\n    }\n    public function offsetUnset($n): void {\n    }\n    public function offsetExists($n): bool {\n    \treturn false;\n    }\n}\nset_error_handler(function () {\n    $GLOBALS['a'] = null;\n});\n$a = new A;\n$a[$c];\n?>\nDONE")).toMatchSnapshot();
  });
});
