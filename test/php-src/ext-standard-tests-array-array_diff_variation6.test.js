// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_variation6.phpt
  it("Test array_diff() function : usage variations - array containing duplicate keys and values", function () {
    expect(parser.parseCode("<?php\n/*\n * Test that array_diff behaves as expected for comparing:\n * 1. the order of the array\n * 2. duplicate values\n * 3. duplicate key names\n */\necho \"*** Testing array_diff() : usage variations ***\\n\";\n$array_index = array('a', 'b', 'c', 0 => 'd', 'b');   //duplicate key (0), duplicate value (b)\n$array_assoc = array ('2' => 'c',   //same key=>value pair, different order\n                      '1' => 'b',\n                      '0' => 'a',\n                      'b' => '3',   //key and value from array_index swapped\n                      'c' => 2);    //same as above, using integer\nvar_dump(array_diff($array_index, $array_assoc));\nvar_dump(array_diff($array_assoc, $array_index));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
