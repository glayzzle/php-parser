// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_chunk_basic2.phpt
  it("Test array_chunk() function : basic functionality - 'preserve_keys' as true/false", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_chunk() : basic functionality ***\\n\";\n$size = 2;\n$input_arrays = array(\n  // array with default keys - numeric values\n  array(1, 2, 3, 4, 5),\n  // array with default keys - string values\n  array('value1', \"value2\", \"value3\"),\n  // associative arrays - key as string\n  array('key1' => 1, \"key2\" => 2, \"key3\" => 3),\n  // associative arrays - key as numeric\n  array(1 => 'one', 2 => \"two\", 3 => \"three\"),\n  // array containing elements with/without keys\n  array(1 => 'one','two', 3 => 'three', 4, \"five\" => 5)\n);\n$count = 1;\n// loop through each element of the array for input\nforeach ($input_arrays as $input_array){\n  echo \"\\n-- Iteration $count --\\n\";\n  var_dump( array_chunk($input_array, $size, true) );\n  var_dump( array_chunk($input_array, $size, false) );\n  $count++;\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
