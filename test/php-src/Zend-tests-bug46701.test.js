// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46701.phpt
  it("Bug #46701 (Creating associative array with long values in the key fails on 32bit linux)", function () {
    expect(parser.parseCode("<?php\n$test_array = array(\n    0xcc5c4600 => 1,\n    0xce331a00 => 2\n);\n$test_array[0xce359000] = 3;\nvar_dump($test_array);\nvar_dump($test_array[0xce331a00]);\nclass foo {\n    public $x;\n    public function __construct() {\n        $this->x[0xce359000] = 3;\n        var_dump($this->x);\n    }\n}\nnew foo;\n?>")).toMatchSnapshot();
  });
});
