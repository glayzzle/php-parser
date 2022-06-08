// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_merge_replace_recursive_refs.phpt
  it("array_merge/replace_recursive() should unwrap references with rc=1", function () {
    expect(parser.parseCode("<?php\n$x = 24;\n$arr1 = [[42]];\n$arr2 = [[&$x]];\nunset($x);\n$arr3 = array_replace_recursive($arr1, $arr2);\n$arr2[0][0] = 12;\nvar_dump($arr3);\nunset($arr1, $arr2, $arr3);\n$x = 24;\n$arr1 = [42];\n$arr2 = [&$x];\nunset($x);\n$arr3 = array_merge_recursive($arr1, $arr2);\n$arr2[0] = 12;\nvar_dump($arr3);\n?>")).toMatchSnapshot();
  });
});
