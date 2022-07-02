// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_assoc_variation9.phpt
  it("Test array_diff_assoc() function : usage variations - compare multidimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how array_diff_assoc behaves when comparing\n * multi-dimensional arrays\n */\necho \"*** Testing array_diff_assoc() : usage variations ***\\n\";\n$array1 = array('sub_array1' => array (1, 2, 3),\n                'sub_array2' => array ('a', 'b', 'c'));\n$array2 = array('sub_arraya' => array (1, 3, 5),\n                'sub_arrayb' => array ('a', 'z', 'y'));\necho \"-- Compare two 2-D arrays --\\n\";\nvar_dump(array_diff_assoc($array1, $array2));\nvar_dump(array_diff_assoc($array2, $array1));\necho \"\\n-- Compare subarrays from two 2-D arrays --\\n\";\nvar_dump(array_diff_assoc($array1['sub_array1'], $array2['sub_arraya']));\nvar_dump(array_diff_assoc($array2['sub_arraya'], $array1['sub_array1']));\nvar_dump(array_diff_assoc($array1['sub_array2'], $array2['sub_arrayb']));\nvar_dump(array_diff_assoc($array2['sub_arrayb'], $array1['sub_array1']));\necho \"\\n-- Compare a subarray from one 2-D array and one 2-D array --\\n\";\nvar_dump(array_diff_assoc($array1['sub_array1'], $array2));\nvar_dump(array_diff_assoc($array1, $array2['sub_arraya']));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
