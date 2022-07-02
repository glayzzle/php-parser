// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/usort_variation6.phpt
  it("Test usort() function : usage variations - multi-dimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass a multi-dimensional array as $array_arg argument to usort()\n * to test how array is re-ordered\n */\necho \"*** Testing usort() : usage variation ***\\n\";\nfunction cmp_function($value1, $value2)\n{\n  if($value1 == $value2) {\n    return 0;\n  }\n  else if($value1 > $value2) {\n    return 1;\n  }\n  else {\n    return -1;\n  }\n}\n$array_args = array(\n  0 => array(2, 10, -1),\n  1 => array(100),\n  2 => array(),\n  3 => array(0),\n  4 => array(-1),\n  5 => array(-9, 34, 54, 0, 20),\n  6 => array(''),\n  7 => array(\"apple\", \"Apple\", \"APPLE\", \"aPPle\", \"aPpLe\")\n);\n$temp_array = $array_args;\necho \"\\n-- Pass usort() a two-dimensional array --\\n\";\n// sorting array_arg as whole array\nvar_dump( usort($temp_array, 'cmp_function') );\necho \"-- Array after call to usort() --\\n\";\nvar_dump($temp_array);\necho \"\\n-- Pass usort() a sub-array --\\n\";\nvar_dump( usort($array_args[5], 'cmp_function') );\necho \"-- Array after call to usort() --\\n\";\nvar_dump($array_args[5]);\n?>")).toMatchSnapshot();
  });
});
