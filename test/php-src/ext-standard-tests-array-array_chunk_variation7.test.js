// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_chunk_variation7.phpt
  it("Test array_chunk() function : usage variations - references", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_chunk() function with following conditions\n *   1. input array containing references\n*/\necho \"*** Testing array_chunk() : usage variations ***\\n\";\n$size = 2;\necho \"\\n-- Testing array_chunk(), input array containing references \\n\";\n$numbers=array(1, 2, 3, 4);\n// reference array\n$input_array = array (\n  \"one\" => &$numbers[0],\n  \"two\" => &$numbers[1],\n  \"three\" => &$numbers[2],\n  \"four\" => &$numbers[3]\n);\nvar_dump( array_chunk($input_array, $size) );\nvar_dump( array_chunk($input_array, $size, true) );\nvar_dump( array_chunk($input_array, $size, false) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
