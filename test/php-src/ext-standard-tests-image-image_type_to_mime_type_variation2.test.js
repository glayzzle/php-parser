// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/image_type_to_mime_type_variation2.phpt
  it("Test image_type_to_mime_type() function : usage variations  - Pass decimal, octal, and hexadecimal values as imagetype", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing image_type_to_mime_type() : usage variations ***\\n\";\nerror_reporting(E_ALL ^ E_NOTICE);\n$values =  array (\n  //Decimal values\n  0,\n  1,\n  12345,\n  -12345,\n  //Octal values\n  02,\n  010,\n  030071,\n  -030071,\n  //Hexadecimal values\n  0x0,\n  0x1,\n  0xABCD,\n  -0xABCD\n);\n// loop through each element of the array for imagetype\n$iterator = 1;\nforeach($values as $value) {\n      echo \"\\n-- Iteration $iterator --\\n\";\n      var_dump( image_type_to_mime_type($value) );\n      $iterator++;\n};\n?>")).toMatchSnapshot();
  });
});
