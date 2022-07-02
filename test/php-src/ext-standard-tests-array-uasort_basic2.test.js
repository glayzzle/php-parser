// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/uasort_basic2.phpt
  it("Test uasort() function : basic functionality - duplicate values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing uasort() : basic functionality with duplicate values ***\\n\";\n// comparison function\nfunction cmp($value1, $value2)\n{\n  if($value1 == $value2) {\n    return 0;\n  }\n  else if($value1 > $value2) {\n    return 1;\n  }\n  else\n    return -1;\n}\n// increasing values\n$int_values1 = array(1, 1, 2, 2, 3, 3);\necho \"-- Numeric array with increasing values --\\n\";\nvar_dump( uasort($int_values1, 'cmp') );\nvar_dump($int_values1);\n// decreasing values\n$int_values2 = array(3, 3, 2, 2, 1, 1);\necho \"-- Numeric array with decreasing values --\\n\";\nvar_dump( uasort($int_values2, 'cmp') );\nvar_dump($int_values2);\n// increasing and decreasing values\n$int_values3 = array(1, 2, 3, 3, 2, 1);\necho \"-- Numeric array with increasing and decreasing values --\\n\";\nvar_dump( uasort($int_values3, 'cmp') );\nvar_dump($int_values3);\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
