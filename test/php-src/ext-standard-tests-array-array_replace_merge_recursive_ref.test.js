// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_replace_merge_recursive_ref.phpt
  it("Test array_(replace|merge)_recursive with references", function () {
    expect(parser.parseCode("<?php\n$one = [1];\n$two = [42];\n$arr1 = ['k' => &$one];\n$arr2 = ['k' => &$two];\nvar_dump(current($one), current($two));\narray_replace_recursive($arr1, $arr2);\nvar_dump(current($one), current($two));\n$one = [1];\n$two = [42];\n$arr1 = ['k' => &$one];\n$arr2 = ['k' => &$two];\nvar_dump(current($one), current($two));\narray_merge_recursive($arr1, $arr2);\nvar_dump(current($one), current($two));\n?>")).toMatchSnapshot();
  });
});
