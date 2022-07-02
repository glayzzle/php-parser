// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/shuffle_variation2.phpt
  it("Test shuffle() function : usage variation - with MultiDimensional array", function () {
    expect(parser.parseCode("<?php\n/*\n* Test behaviour of shuffle() function when multi-dimensional array is\n* passed to 'array_arg' argument\n*/\necho \"*** Testing shuffle() : with multi-dimensional array ***\\n\";\n// initialise the multi-dimensional array\n$array_arg = array(\n  array(1, 2, 3),\n  array(4, 5, 6),\n  array(7, 8, 9),\n  array(10000, 20000000, 30000000),\n  array(0, 0, 0),\n  array(012, 023, 034),\n  array(0x1, 0x0, 0xa)\n);\n// calling shuffle() function with multi-dimensional array\nvar_dump( shuffle($array_arg) );\necho \"\\nThe output array is:\\n\";\nvar_dump( $array_arg );\n// looping to test shuffle() with each sub-array in the multi-dimensional array\necho \"\\n*** Testing shuffle() with arrays having different types of values ***\\n\";\n$counter = 1;\nfor($i=0; $i<=6; $i++) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  var_dump( shuffle($array_arg[$i]) );\n  echo \"\\nThe output array is:\\n\";\n  var_dump( $array_arg[$i] );\n  $counter++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
