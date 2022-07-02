// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/uasort_variation7.phpt
  it("Test uasort() function : usage variations - anonymous function as 'cmp_function'", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing different anonymous functions as 'cmp_function'\n*   arguments passed by value\n*   arguments passed by reference\n*/\necho \"*** Testing uasort() : anonymous function as 'cmp_function' ***\\n\";\n$cmp_function = function($value1, $value2) {\n    if ($value1 == $value2) { return 0; }\n    else if ($value1 > $value2) { return 1; }\n    else { return -1; }\n};\n$array_arg = array(0 => 100, 1 => 3, 2 => -70, 3 => 24, 4 => 90);\necho \"-- Anonymous 'cmp_function' with parameters passed by value --\\n\";\nvar_dump( uasort($array_arg, $cmp_function) );\nvar_dump($array_arg);\n$cmp_function = function(&$value1, &$value2) {\n    if ($value1 == $value2) { return 0; }\n    else if ($value1 > $value2) { return 1; }\n    else { return -1; }\n};\n$array_arg = array(\"b\" => \"Banana\", \"m\" => \"Mango\", \"a\" => \"Apple\", \"p\" => \"Pineapple\");\necho \"-- Anonymous 'cmp_function' with parameters passed by reference --\\n\";\nvar_dump( uasort($array_arg, $cmp_function ) );\nvar_dump($array_arg);\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
