// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug70668.phpt
  it("Bug #70668 (array_keys() doesn't respect references when $strict is true)", function () {
    expect(parser.parseCode("<?php\n$arr = array(1, \"1\", \"\", NULL, 0, false, true, array());\n$s = &$arr[0];\nvar_dump(array_keys($arr, $s, true));\n$s = &$arr[1];\nvar_dump(array_keys($arr, $s, true));\n$s = &$arr[2];\nvar_dump(array_keys($arr, $s, true));\n$s = &$arr[3];\nvar_dump(array_keys($arr, $s, true));\n$s = &$arr[4];\nvar_dump(array_keys($arr, $s, true));\n$s = &$arr[5];\nvar_dump(array_keys($arr, $s, true));\n$s = &$arr[6];\nvar_dump(array_keys($arr, $s, true));\n$s = &$arr[7];\nvar_dump(array_keys($arr, $s, true));\n?>")).toMatchSnapshot();
  });
});
