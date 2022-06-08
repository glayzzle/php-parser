// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_match_basic_edit.phpt
  it("Test preg_match() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$string = 'Hello, world. [*], this is \\ a string';\nvar_dump(preg_match('/^[hH]ello,\\s/', $string, $match1));\t\t\t\t\t\t\t//finds \"Hello, \"\nvar_dump($match1);\nvar_dump(preg_match('/l^o,\\s\\w{5}/', $string, $match2, PREG_OFFSET_CAPTURE));\t\t\t\t// tries to find \"lo, world\" at start of string\nvar_dump($match2);\nvar_dump(preg_match('/\\[\\*\\],\\s(.*)/', $string, $match3));\t\t\t\t\t\t\t//finds \"[*], this is \\ a string\";\nvar_dump($match3);\nvar_dump(preg_match('@\\w{4}\\s\\w{2}\\s\\\\\\(?:\\s.*)@', $string, $match4, PREG_OFFSET_CAPTURE, 14));\t//finds \"this is \\ a string\" (with non-capturing parentheses)\nvar_dump($match4);\nvar_dump(preg_match('/hello world/', $string, $match5));\t\t\t\t\t\t\t//tries to find \"hello world\" (should be Hello, world)\nvar_dump($match5);\n?>")).toMatchSnapshot();
  });
});
