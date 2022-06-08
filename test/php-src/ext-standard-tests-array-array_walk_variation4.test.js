// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_variation4.phpt
  it("Test array_walk() function : usage variations - 'input' array with subarray", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_walk() with an array having subarrays as elements\n*/\necho \"*** Testing array_walk() : array with subarray ***\\n\";\nfunction callback($value, $key)\n{\n   // dump the arguments to check that they are passed\n   // with proper type\n   var_dump($key);  // key\n   var_dump($value); // value\n   echo \"\\n\"; // new line to separate the output between each element\n}\n$input = array(\n  array(),\n  array(1),\n  array(1,2,3),\n  array(\"Mango\", \"Orange\"),\n  array(array(1, 2, 3))\n);\nvar_dump( array_walk( $input, \"callback\"));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
