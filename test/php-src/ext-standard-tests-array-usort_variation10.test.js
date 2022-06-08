// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/usort_variation10.phpt
  it("Test usort() function : usage variations - duplicate keys and values", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an array with duplicate keys and values to usort() to test behaviour\n */\necho \"*** Testing usort() : usage variation ***\\n\";\nfunction cmp($value1, $value2)\n{\n  if($value1 == $value2) {\n    return 0;\n  }\n  else if($value1 > $value2) {\n    return 1;\n  }\n  else\n    return -1;\n}\n// Array with duplicate string and integer keys and values\n$array_arg = array(0 => 2,     \"a\" => 8, \"d\" => 9,\n                   3 => 3,     5 => 2,   \"o\" => 6,\n                   \"z\" => -99, 0 => 1,   \"z\" => 3);\necho \"\\n-- Array with duplicate keys --\\n\";\nvar_dump( usort($array_arg, 'cmp') );\nvar_dump($array_arg);\n// Array with default and assigned keys\n$array_arg = array(0 => \"Banana\", 1 => \"Mango\", \"Orange\", 2 => \"Apple\", \"Pineapple\");\necho \"\\n-- Array with default/assigned keys --\\n\";\nvar_dump( usort($array_arg, 'cmp') );\nvar_dump($array_arg);\n?>")).toMatchSnapshot();
  });
});
