// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug69840.phpt
  it("Bug #69840 (iconv_substr() doesn't work with UTF-16BE)", function () {
    expect(parser.parseCode("<?php\n$str = iconv_substr(\"a\\x00b\\x00\", 0, 1, 'UTF-16LE');\nvar_dump(strlen($str));\nvar_dump(ord($str[0]));\nvar_dump(ord($str[1]));\n$str = iconv_substr(\"\\x00a\\x00b\", 0, 1, 'UTF-16BE');\nvar_dump(strlen($str));\nvar_dump(ord($str[0]));\nvar_dump(ord($str[1]));\n?>")).toMatchSnapshot();
  });
});
