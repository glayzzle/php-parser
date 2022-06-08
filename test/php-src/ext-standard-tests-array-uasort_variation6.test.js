// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/uasort_variation6.phpt
  it("Test uasort() function : usage variations - sort array having subarrays", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing uasort() with 'array_arg' having different subarrays as array elements\n*/\n// comparison function\nfunction cmp_function($value1, $value2)\n{\n  if($value1 == $value2) {\n    return 0;\n  }\n  else if($value1 > $value2) {\n    return 1;\n  }\n  else {\n    return -1;\n  }\n}\necho \"*** Testing uasort() : sorting array having different subarrays ***\\n\";\n$array_args = array(\n  0 => array(2, 10, -1),\n  1 => array(100),\n  2 => array(),\n  3 => array(0),\n  4 => array(-1),\n  5 => array(-9, 34, 54, 0, 20),\n  6 => array(''),\n  7 => array(\"apple\", \"Apple\", \"APPLE\", \"aPPle\", \"aPpLe\")\n);\n$temp_array = $array_args;\n// sorting array_arg as whole array\nvar_dump( uasort($temp_array, 'cmp_function') );  // expecting: bool(true)\nvar_dump($temp_array);\n?>")).toMatchSnapshot();
  });
});
