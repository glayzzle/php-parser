// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/usort_variation7.phpt
  it("Test usort() function : usage variations - Anonymous comparison function", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an anonymous comparison function as $cmp_function argument to test behaviour()\n */\necho \"*** Testing usort() : usage variation ***\\n\";\n$cmp_function = function($value1, $value2) {\n    if ($value1 == $value2) { return 0; }\n    else if ($value1 > $value2) { return 1; }\n    else { return -1; }\n};\n$array_arg = array(0 => 100, 1 => 3, 2 => -70, 3 => 24, 4 => 90);\necho \"\\n-- Anonymous 'cmp_function' with parameters passed by value --\\n\";\nvar_dump( usort($array_arg, $cmp_function) );\nvar_dump($array_arg);\n$array_arg = array(\"b\" => \"Banana\", \"m\" => \"Mango\", \"a\" => \"Apple\", \"p\" => \"Pineapple\");\n$cmp_function = function(&$value1, &$value2) {\n    if ($value1 == $value2) { return 0; }\n    else if ($value1 > $value2) { return 1; }\n    else { return -1; }\n};\necho \"\\n-- Anonymous 'cmp_function' with parameters passed by reference --\\n\";\nvar_dump( usort($array_arg, $cmp_function) );\nvar_dump($array_arg);\n?>")).toMatchSnapshot();
  });
});
