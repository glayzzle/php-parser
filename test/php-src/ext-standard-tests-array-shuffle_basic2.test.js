// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/shuffle_basic2.phpt
  it("Test shuffle() function : basic functionality -  with associative array", function () {
    expect(parser.parseCode("<?php\n/*\n* Test behaviour of shuffle when an associative array is\n* passed to the 'array_arg' argument and check for the\n* changes in the input array by printing the input array\n* before and after shuffle() function is applied on it\n*/\necho \"*** Testing shuffle() : with associative array ***\\n\";\n// Initialise the associative array\n$array_arg = array(\n  'one' => 1, 2 => 02, 'three' => 3,\n   4 => 4, '#5' => 5, 'SIX' => 6,\n  \"seven\" => 0x7, \"#8\" => 012, \"nine\" => 9\n);\n// printing the input array before the shuffle operation\necho \"\\n-- input array before shuffle() function is applied --\\n\";\nvar_dump( $array_arg );\n// applying shuffle() function on the input array\necho \"\\n-- return value from shuffle() function --\\n\";\nvar_dump( shuffle($array_arg) );  // prints the return value from shuffle() function\necho \"\\n-- resultant array after shuffle() function is applied --\\n\";\nvar_dump( $array_arg );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
