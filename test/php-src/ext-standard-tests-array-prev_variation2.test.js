// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/prev_variation2.phpt
  it("Test prev() function : usage variation - Multi-dimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test prev() when passed:\n * 1. a two-dimensional array\n * 2. a sub-array\n * as $array_arg argument.\n */\necho \"*** Testing prev() : usage variations ***\\n\";\n$subarray = array(9,8,7);\nend($subarray);\n$array_arg = array ($subarray, 'a' => 'z');\nend($array_arg);\necho \"\\n-- Pass a two-dimensional array as \\$array_arg --\\n\";\nvar_dump(prev($array_arg));\nvar_dump(prev($array_arg));\necho \"\\n-- Pass a sub-array as \\$array_arg --\\n\";\nvar_dump(prev($array_arg[0]));\n?>")).toMatchSnapshot();
  });
});
