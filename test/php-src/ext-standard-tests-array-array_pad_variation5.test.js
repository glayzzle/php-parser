// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_pad_variation5.phpt
  it("Test array_pad() function : usage variations - two dimensional array for 'pad_value' argument", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing two dimensional array to $pad_value argument and testing whether\n* array_pad() behaves in an expected way with the other arguments passed to the function.\n* The $input and $pad_size arguments passed are fixed values.\n*/\necho \"*** Testing array_pad() : Passing 2-d array to \\$pad_value argument ***\\n\";\n// initialize the $input and $pad_size argument\n$input = array(1, 2, 3);\n$pad_size = 5;\n// initialize $pad_value\n$pad_value = array (\n  array(1),\n  array(\"hello\", 'world'),\n  array(\"one\" => 1, 'two' => 2)\n);\nvar_dump( array_pad($input, $pad_size, $pad_value) );  // positive 'pad_value'\nvar_dump( array_pad($input, -$pad_size, $pad_value) );  // negative 'pad_value'\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
