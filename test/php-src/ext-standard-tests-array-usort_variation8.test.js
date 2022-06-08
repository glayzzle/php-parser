// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/usort_variation8.phpt
  it("Test usort() function : usage variations - use built in functions as $cmp_function arg", function () {
    expect(parser.parseCode("<?php\n/*\n * Test usort() when comparison function is:\n * 1. a built in comparison function\n * 2. a language construct\n */\necho \"*** Testing usort() : usage variation ***\\n\";\n// Initializing variables\n$array_arg = array(\"b\" => \"Banana\", \"m\" => \"Mango\", \"a\" => \"apple\",\n                   \"p\" => \"Pineapple\", \"o\" => \"orange\");\n// Testing library functions as comparison function\necho \"\\n-- Testing usort() with built-in 'cmp_function': strcasecmp() --\\n\";\n$temp_array1 = $array_arg;\nvar_dump( usort($temp_array1, 'strcasecmp') );\nvar_dump($temp_array1);\necho \"\\n-- Testing usort() with built-in 'cmp_function': strcmp() --\\n\";\n$temp_array2 = $array_arg;\nvar_dump( usort($temp_array2, 'strcmp') );\nvar_dump($temp_array2);\n?>")).toMatchSnapshot();
  });
});
