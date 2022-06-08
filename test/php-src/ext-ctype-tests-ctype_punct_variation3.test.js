// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_punct_variation3.phpt
  it("Test ctype_punct() function : usage variations - different punctuation", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass strings containing different character types to ctype_punct() to test\n * which are considered valid punctuation character only strings\n */\necho \"*** Testing ctype_punct() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$values = array(\n/*1*/  \"This string contains just letters and spaces\", // Simple string\n       \"but this one contains some numbers too 123+456 = 678\", // Mixed string\n       \"\",\n       \" \",\n/*5*/  \"a\",\n       \"ABCXYZ\",\n       \"abcxyz\",\n       \"ABCXYZ123DEF456\",\n       \"abczyz123DEF456\",\n/*10*/ \"\\r\\n\",\n       \"123\",\n       \"03F\", // hexadecimal 'digits'\n       \")speci@! ch@r$(\",\n       '@!$*',\n/*15*/ 'ABC',\n       'abc',\n       'ABC123',\n       'abc123',\n       \"abc123\\n\",\n/*20*/ 'abc 123',\n       '',\n       ' ',\n       base64_decode(\"w4DDoMOHw6fDiMOo\"), // non-ascii characters\n       \"!$%@\\n\",\n/*25*/ \"\\\"?!\\\"\",\n/*26*/ \"|\\ @~\",\n);\n$iterator = 1;\nforeach($values as $value) {\n      echo \"\\n-- Iteration $iterator --\\n\";\n      var_dump( ctype_punct($value) );\n      $iterator++;\n};\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
