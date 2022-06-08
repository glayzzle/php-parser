// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncmp_variation1.phpt
  it("Test strncmp() function: usage variations - case-sensitivity", function () {
    expect(parser.parseCode("<?php\n/* Test strncmp() function with upper-case and lower-case alphabets as inputs for 'str1' and 'str2' */\necho \"*** Test strncmp() function: with alphabets ***\\n\";\necho \"-- Passing upper-case letters for 'str1' --\\n\";\nfor($ASCII = 65; $ASCII <= 90; $ASCII++) {\n  var_dump( strncmp( chr($ASCII), chr($ASCII), 1 ) );  //comparing uppercase letters with uppercase letters; exp: int(0)\n  var_dump( strncmp( chr($ASCII), chr($ASCII + 32), 1 ) );  //comparing uppercase letters with lowercase letters; exp: value < 0\n}\necho \"\\n-- Passing lower-case letters for 'str1' --\\n\";\nfor($ASCII = 97; $ASCII <= 122; $ASCII++) {\n  var_dump( strncmp( chr($ASCII), chr($ASCII), 1 ) );  //comparing lowercase letters with lowercase letters; exp: int(0)\n  var_dump( strncmp( chr($ASCII), chr($ASCII - 32), 1 ) );  //comparing lowercase letters with uppercase letters; exp: value > 0\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
