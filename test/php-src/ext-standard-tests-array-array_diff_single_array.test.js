// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_single_array.phpt
  it("array_diff() with single array argument", function () {
    expect(parser.parseCode("<?php\n$array = [\"a\" => 42];\n$cmp = function($a, $b) { return $a <=> $b; };\nvar_dump(array_diff($array));\nvar_dump(array_diff_key($array));\nvar_dump(array_diff_ukey($array, $cmp));\nvar_dump(array_diff_assoc($array));\nvar_dump(array_diff_uassoc($array, $cmp));\nvar_dump(array_udiff($array, $cmp));\nvar_dump(array_udiff_assoc($array, $cmp));\nvar_dump(array_udiff_uassoc($array, $cmp, $cmp));\n?>")).toMatchSnapshot();
  });
});
