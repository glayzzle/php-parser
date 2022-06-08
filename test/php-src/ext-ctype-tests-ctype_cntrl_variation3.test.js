// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_cntrl_variation3.phpt
  it("Test ctype_cntrl() function : usage variations - Different strings", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass strings containing different character types to ctype_cntrl() to test\n * which are considered valid control character only strings\n */\necho \"*** Testing ctype_cntrl() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$values = array(\n/*1*/  \"This string contains just letters and spaces\", // Simple string\n       \"but this one contains some numbers too 123+456 = 678\", // Mixed string\n       \"\",\n       \" \",\n/*5*/  \"a\",\n       \"ABCXYZ\",\n       \"abcxyz\",\n       \"ABCXYZ123DEF456\",\n       \"abczyz123DEF456\",\n/*10*/ \"\\r\\n\",\n       \"123\",\n       \"03F\", // hexadecimal 'digits'\n       \")speci@! ch@r$(\",\n       '@!$*',\n/*15*/ 'ABC',\n       'abc',\n       'ABC123',\n       'abc123',\n       'abc123\\n',\n/*20*/ 'abc 123',\n       '',\n       ' ',\n       base64_decode(\"w4DDoMOHw6fDiMOo\"), // non-ascii characters\n       \"\\n\",\n/*25*/ \"\\r\",\n       \"\\t\",\n       \"0xD\",\n       \"0xA\",\n       \"0xE\",\n/*30*/ \"\\t\\r\\n\",\n);\n// loop through each element of $values to test behaviour of ctype_cntrl()\n$iterator = 1;\nforeach($values as $value) {\n      echo \"\\n-- Iteration $iterator --\\n\";\n      var_dump( ctype_cntrl($value) );\n      $iterator++;\n};\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
