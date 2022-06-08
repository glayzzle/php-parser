// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_upper_variation3.phpt
  it("Test ctype_upper() function : usage variations - different strings", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass strings containing different character types to ctype_upper() to test\n * which are considered valid uppercase character only strings\n */\necho \"*** Testing ctype_upper() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$values = array(\n/*1*/  \"This string contains just letters and spaces\", // Simple string\n       \"but this one contains some numbers too 123+456 = 678\", // Mixed string\n       \"\",\n       \" \",\n/*5*/  \"a\",\n       \"ABCXYZ\",\n       \"abcxyz\",\n       \"ABCXYZ123DEF456\",\n       \"abczyz123DEF456\",\n/*10*/ \"\\r\\n\",\n       \"123\",\n       \"03F\", // hexadecimal 'digits'\n       \")speci@! ch@r$(\",\n       '@!$*',\n/*15*/ 'ABC',\n       'abc',\n       'ABC123',\n       'abc123',\n       'abc123\\n',\n/*20*/ 'abc 123',\n       '',\n       ' ',\n       base64_decode(\"w4DDoMOHw6fDiMOo\"), // non-ascii characters\n       \"abcXYZ\",\n/*25*/ \"ABC XYZ\",\n/*26*/ \"ABC+EFG*XYZ\",\n);\n$iterator = 1;\nforeach($values as $value) {\n      echo \"\\n-- Iteration $iterator --\\n\";\n      var_dump( ctype_upper($value) );\n      $iterator++;\n};\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
