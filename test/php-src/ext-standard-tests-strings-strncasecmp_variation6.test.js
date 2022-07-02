// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncasecmp_variation6.phpt
  it("Test strncasecmp() function : usage variations - binary safe - all ASCII chars", function () {
    expect(parser.parseCode("<?php\n/* Test strncasecmp() function with binary values passed to 'str1' & 'str2' */\necho \"*** Test strncasecmp() function: with binary inputs ***\\n\";\n/* A binary function should work with all 256 characters that a character(8-bit) can take */\necho \"\\n-- Checking with all 256 characters given, in binary format --\\n\";\n/* loop through to get all 256 character's equivalent binary value, and check working of strncasecmp() */\n$count = 1;\nfor($ASCII = 0; $ASCII <= 255; $ASCII++) {\n  $str1 = decbin($ASCII);  //ASCII value in binary form\n  $str2 = decbin( ord( chr($ASCII) ) );  //Getting equivalent ASCII value for the character in binary form\n  echo \"-- Iteration $count --\\n\";\n  var_dump( strncasecmp($str1, $str2, 8) );  //comparing all the 8-bits; expected: int(0)\n  var_dump( strncasecmp($str1, $str2, 4) );  //comparing only 4-bits; expected: int(0)\n  $count++;\n}\necho \"\\n-- Checking with out of character's range, given in binary format --\\n\";\n$str1 = decbin(256);\n$str2 = decbin( ord( chr(256) ));\nvar_dump( strncasecmp($str1, $str2, 8) );  //comparing all the 8-bits; expected: int(1)\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
