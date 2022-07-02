// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_pad_variation4.phpt
  it("Test array_pad() function : usage variations - binary safe checking", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing binary values to $pad_value argument and testing whether\n* array_pad() behaves in an expected way with the other arguments passed to the function.\n* The $input and $pad_size arguments passed are fixed values.\n*/\necho \"*** Testing array_pad() : Passing binary values to \\$pad_value argument ***\\n\";\n// initialize the $input and $pad_size argument\n$input = array(1, 2, 3);\n$pad_size = 6;\n// initialize $pad_value with reference variable\n$binary = b\"hello\";\nvar_dump( array_pad($input, $pad_size, $binary) );  // positive 'pad_size'\nvar_dump( array_pad($input, -$pad_size, $binary) );  // negative 'pad_size'\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
