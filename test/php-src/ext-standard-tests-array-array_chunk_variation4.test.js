// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_chunk_variation4.phpt
  it("Test array_chunk() function : usage variations - array with diff. sub arrays", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing array_chunk() function - input array containing different sub arrays\n*/\necho \"*** Testing array_chunk() : usage variations ***\\n\";\n$size = 2;\n// input array\n$input_array = array (\n  \"array1\" => array(),\n  \"array2\" => array(1, 2, 3),\n  \"array3\" =>  array(1)\n);\necho \"\\n-- Testing array_chunk() by supplying an array containing different sub arrays & 'preserve_key' as default --\\n\";\nvar_dump( array_chunk($input_array, $size) );\necho \"\\n-- Testing array_chunk() by supplying an array containing different sub arrays & 'preserve_key' = true --\\n\";\nvar_dump( array_chunk($input_array, $size, true) );\necho \"\\n-- Testing array_chunk() by supplying an array containing different sub arrays & 'preserve_key' = false --\\n\";\nvar_dump( array_chunk($input_array, $size, false) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
