// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/uasort_variation11.phpt
  it("Test uasort() function : usage variations - different associative arrays", function () {
    expect(parser.parseCode("<?php\n/* Testing uasort() with different associative arrays having keys as\n *   string, integer, default & duplicate keys\n */\necho \"*** Testing uasort() : sorting different associative arrays ***\\n\";\n// comparison function\nfunction cmp($value1, $value2)\n{\n  if($value1 == $value2) {\n    return 0;\n  }\n  else if($value1 > $value2) {\n    return 1;\n  }\n  else\n    return -1;\n}\n// Array with duplicate string and integer keys\n$array_arg = array(0 => 2, \"a\" => 8, \"d\" => 9, 3 => 3, 5 => 2, \"o\" => 6, \"z\" => -99, 0 => 1, \"z\" => 3);\necho \"-- Array with duplicate keys --\\n\";\nvar_dump( uasort($array_arg, 'cmp') );\nvar_dump($array_arg);\n// Array with default and assigned keys\n$array_arg = array(0 => \"Banana\", 1 => \"Mango\", \"Orange\", 2 => \"Apple\", \"Pineapple\");\necho \"-- Array with default/assigned keys --\\n\";\nvar_dump( uasort($array_arg, 'cmp') );\nvar_dump($array_arg);\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
