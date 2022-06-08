// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_digit_variation3.phpt
  it("Test ctype_digit() function : usage variations - different strings", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass strings containing different character types to ctype_digit() to test\n * which are considered valid decimal digit only strings\n */\necho \"*** Testing ctype_digit() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$values = array(\n/*1*/  \"This string contains just letters and spaces\", // Simple string\n       \"but this one contains some numbers too 123+456 = 678\", // Mixed string\n       \"\",\n       \" \",\n/*5*/  \"a\",\n       \"ABCXYZ\",\n       \"abcxyz\",\n       \"ABCXYZ123DEF456\",\n       \"abczyz123DEF456\",\n/*10*/ \"\\r\\n\",\n       \"123\",\n       \")speci@! ch@r$(\",\n       '@!$*',\n       \"0\",\n/*15*/ \"3\",\n       \"9\",\n       \"1234\",\n       \"7890\",\n       \"0677\",\n/*20*/ '0',\n       '3',\n       '9',\n       '1234',\n       '7890',\n/*25*/ \"123abc\",\n       \"abc123\",\n       \"123\\r\\t\",\n       \"123 \",\n       \"  123\",\n/*30*/ \"123E4\",\n/*31*/ \"0x3F\",\n);\n$iterator = 1;\nforeach($values as $value) {\n      echo \"\\n-- Iteration $iterator --\\n\";\n      var_dump( ctype_digit($value) );\n      $iterator++;\n};\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
