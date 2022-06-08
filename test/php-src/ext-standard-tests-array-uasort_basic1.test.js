// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/uasort_basic1.phpt
  it("Test uasort() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing uasort() : basic functionality ***\\n\";\n// comparison function\nfunction cmp($value1, $value2)\n{\n  if($value1 == $value2) {\n    return 0;\n  }\n  else if($value1 > $value2) {\n    return 1;\n  }\n  else\n    return -1;\n}\n// Int array with default keys\n$int_values = array(1, 8, 9, 3, 2, 6, 7);\necho \"-- Numeric array with default keys --\\n\";\nvar_dump( uasort($int_values, 'cmp') );\nvar_dump($int_values);\n// String array with default keys\n$string_values = array(\"This\", \"is\", 'a', \"test\");\necho \"-- String array with default keys --\\n\";\nvar_dump( uasort($string_values, 'cmp') );\nvar_dump($string_values);\n// Associative array with numeric keys\n$numeric_key_arg = array(1=> 1, 2 => 2, 3 => 7, 5 => 4, 4 => 9);\necho \"-- Associative array with numeric keys --\\n\";\nvar_dump( uasort($numeric_key_arg, 'cmp') );\nvar_dump($numeric_key_arg);\n// Associative array with string keys\n$string_key_arg = array('one' => 4, 'two' => 2, 'three' => 1, 'four' => 10);\necho \"-- Associative array with string keys --\\n\";\nvar_dump( uasort($string_key_arg, 'cmp') );\nvar_dump($string_key_arg);\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
