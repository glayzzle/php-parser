// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation19.phpt
  it("Test array_map() function : usage variations - callback pass semantics", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() with a pass-by-value callback forced to behave as a pass-by-reference function.\n */\n$arr1 = array('original.0', 'original.1');\n$arr2 = array('original.0', 'original.1');\nfunction callback($a) {\n   $a = \"changed\";\n}\narray_map('callback', $arr1);\nvar_dump($arr1);\n$ref  =& $arr2[0];\narray_map(\"callback\", $arr2);\nvar_dump($arr2);\n?>")).toMatchSnapshot();
  });
});
