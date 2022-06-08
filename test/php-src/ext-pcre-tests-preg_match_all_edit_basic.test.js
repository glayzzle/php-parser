// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_match_all_edit_basic.phpt
  it("Test preg_match_all() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$string = 'Hello, world! This is a test. This is another test. \\[4]. 34534 string.';\nvar_dump(preg_match_all('/[0-35-9]/', $string, $match1, PREG_OFFSET_CAPTURE|PREG_PATTERN_ORDER, -10));               \t//finds any digit that's not 4 10 digits from the end(1 match)\nvar_dump($match1);\nvar_dump(preg_match_all('/[tT]his is a(.*?)\\./', $string, $match2, PREG_SET_ORDER));    \t\t\t\t\t\t//finds \"This is a test.\" and \"This is another test.\" (non-greedy) (2 matches)\nvar_dump($match2);\nvar_dump(preg_match_all('@\\. \\\\\\(.*).@', $string, $match3, PREG_PATTERN_ORDER));            \t\t\t\t//finds \".\\ [...]\" and everything else to the end of the string. (greedy) (1 match)\nvar_dump($match3);\nvar_dump(preg_match_all('/\\d{2}$/', $string, $match4));\t\t\t\t\t\t\t\t\t\t//tries to find 2 digits at the end of a string (0 matches)\nvar_dump($match4);\nvar_dump(preg_match_all('/(This is a ){2}(.*)\\stest/', $string, $match5));\t\t\t\t\t\t\t//tries to find \"This is aThis is a [...] test\" (0 matches)\nvar_dump($match5);\n?>")).toMatchSnapshot();
  });
});
