// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/invalid_utf8_offset.phpt
  it("preg_replace() and invalid UTF8 offset", function () {
    expect(parser.parseCode("<?php\n$string = \"\\xc3\\xa9 uma string utf8 bem formada\";\nvar_dump(preg_match('~.*~u', $string, $m, 0, 1));\nvar_dump($m);\nvar_dump(preg_last_error() == PREG_BAD_UTF8_OFFSET_ERROR);\nvar_dump(preg_match('~.*~u', $string, $m, 0, 2));\nvar_dump($m);\nvar_dump(preg_last_error() == PREG_NO_ERROR);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
