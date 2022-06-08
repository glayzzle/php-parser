// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_pad_variation7.phpt
  it("Test array_pad() function : usage variations - two dimensional array for 'input' argument", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing two dimensional array to $input argument and testing whether\n* array_pad() behaves in an expected way with the other arguments passed to the function.\n* The $pad_size and $pad_value arguments passed are fixed values.\n*/\necho \"*** Testing array_pad() : Passing 2-D array to \\$input argument ***\\n\";\n// initialize the 2-d array\n$input = array (\n  array(1, 2, 3),\n  array(\"hello\", 'world'),\n  array(\"one\" => 1, \"two\" => 2)\n);\n// initialize the $pad_size and $pad_value arguments\n$pad_size = 5;\n$pad_value = \"HELLO\";\n// entire 2-d array\necho \"-- Entire 2-d array for \\$input argument --\\n\";\nvar_dump( array_pad($input, $pad_size, $pad_value) );  // positive 'pad_size'\nvar_dump( array_pad($input, -$pad_size, $pad_value) );  // negative 'pad_size'\n// sub array\necho \"-- Sub array for \\$input argument --\\n\";\nvar_dump( array_pad($input[1], $pad_size, $pad_value) );  // positive 'pad_size'\nvar_dump( array_pad($input[1], -$pad_size, $pad_value) );  // negative 'pad_size'\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
