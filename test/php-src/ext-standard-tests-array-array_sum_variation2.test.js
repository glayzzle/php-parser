// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_sum_variation2.phpt
  it("Test array_sum() function : usage variations - array with different integer value", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing array_sum() with different types of integer arrays containing data of following type:\n*  integer, octal, hexadecimal, maximum and minimum integer values & mixed of all integers\n*/\necho \"*** Testing array_sum() : different integer array ***\\n\";\n// Int array\n$int_values = array(3, 2, 100, 150, 25, 350, 0, -3, -1200);\necho \"-- Sum of Integer array --\\n\";\nvar_dump( array_sum($int_values) );\n// Octal array\n$octal_values = array(056, 023, 00, 015, -045, 01, -07);\necho \"-- Sum of Octal array --\\n\";\nvar_dump( array_sum($octal_values) );\n// Hexadecimal array\n$hex_values = array(0xAE, 0x2B, 0X10, -0xCF, 0X12, -0XF2);\necho \"-- Sum of Hex array --\\n\";\nvar_dump( array_sum($hex_values) );\n// Mixed values int, octal & hex\n$mixed_int_value = array(2, 5, -1, 054, 0X3E, 0, -014, -0x2A);\necho \"-- Sum of mixed integer values --\\n\";\nvar_dump( array_sum($mixed_int_value) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
