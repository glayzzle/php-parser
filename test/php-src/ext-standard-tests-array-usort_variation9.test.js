// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/usort_variation9.phpt
  it("Test usort() function : usage variations - referenced variables", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an array of referenced variables as $array_arg to test behaviour\n */\necho \"*** Testing usort() : usage variation ***\\n\";\nfunction cmp_function($value1, $value2)\n{\n  if($value1 == $value2) {\n    return 0;\n  }\n  else if($value1 > $value2) {\n    return 1;\n  }\n  else {\n    return -1;\n  }\n}\n// different variables which are used as elements of $array_arg\n$value1 = -5;\n$value2 = 100;\n$value3 = 0;\n$value4 = &$value1;\n// array_args an array containing elements with reference variables\n$array_arg = array(\n  0 => 10,\n  1 => &$value4,\n  2 => &$value2,\n  3 => 200,\n  4 => &$value3,\n);\necho \"\\n-- Sorting \\$array_arg containing different references --\\n\";\nvar_dump( usort($array_arg, 'cmp_function') );\nvar_dump($array_arg);\n?>")).toMatchSnapshot();
  });
});
