// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_chunk_variation6.phpt
  it("Test array_chunk() function : usage variations - different arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_chunk() function with following conditions\n *   1. array without elements\n *   2. associative array with duplicate keys\n *   3. array with one element\n*/\necho \"*** Testing array_chunk() : usage variations ***\\n\";\n// input array\n$input_arrays = array (\n  // array without elements\n  \"array1\" => array(),\n  // array with one element\n  \"array2\" => array(1),\n  // associative array with duplicate keys\n  \"array3\" => array(\"a\" => 1, \"b\" => 2, \"c\" => 3, \"a\" => 4, \"d\" => 5)\n);\n$size = 2;\n$count = 1;\necho \"\\n-- Testing array_chunk() by supplying various arrays --\\n\";\n// loop through the array for 'array' argument\nforeach ($input_arrays as $input_array){\n  echo \"\\n-- Iteration $count --\\n\";\n  var_dump( array_chunk($input_array, $size) );\n  var_dump( array_chunk($input_array, $size, true) );\n  var_dump( array_chunk($input_array, $size, false) );\n  $count++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
