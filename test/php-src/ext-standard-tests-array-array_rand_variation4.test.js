// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_rand_variation4.phpt
  it("Test array_rand() function : usage variation - with associative arrays for 'input' parameter", function () {
    expect(parser.parseCode("<?php\n/*\n* Test behaviour of array_rand() function when associative array is passed to\n* the 'input' parameter in the function call\n*/\necho \"*** Testing array_rand() : with associative arrays ***\\n\";\n// initialise associative arrays\n$asso_arrays = array(\n       // array with numeric keys\n/*1*/  array(1 => 'one', 2 => 2, 1234567890 => 'big', -1 => 'negative key',\n             0 => \"zero key\"),\n       // array with string keys\n       array('one' => 1, \"two\" => 2.0, \"three\" => 'three',\n             '12twelve' => 12.00, \"\" => 'empty string', \" \" => \"space key\"),\n       // array with hexa values as keys\n/*3*/  array(0xabc => 2748, 0x12f => '303', 0xff => \"255\", -0xff => \"-255\"),\n       // array with octal values as keys\n       array(0123 => 83, 012 => 10, 010 => \"8\", -034 => \"-28\", 0012 => '10'),\n       // array with bool values as keys\n       array(TRUE => '1', true => true, TrUe => \"TRUE\",\n             FALSE => '0', false => false, FaLsE => \"FALSE\"),\n       // array with special chars as keys\n/*6*/  array('##' => \"key1\", '&$r' => 'key2', '!' => \"key3\", '<>' =>'key4',\n             \"NULL\" => 'key5', \"\\n\" => 'newline as key',\n             \"\\t\" => \"tab as key\", \"'\" => 'single quote as key',\n             '\"' => 'double quote as key', \"\\0\" => \"null char as key\")\n);\n/* looping to test array_rand() function with different arrays having\n * different types of keys\n*/\n$counter = 1;\nforeach($asso_arrays as $input) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  // with default argument\n  echo\"\\nWith default argument\\n\";\n  var_dump( array_rand($input) );\n  // with default and optional arguments\n  echo\"\\nWith num_req = 1\\n\";\n  var_dump( array_rand($input, 1) );  // with $num_req=1\n  echo\"\\nWith num_req = 2\\n\";\n  var_dump( array_rand($input, 2) );  // with $num_req=2\n  $counter++;\n}  // end of for loop\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
