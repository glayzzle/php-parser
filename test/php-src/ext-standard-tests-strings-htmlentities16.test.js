// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities16.phpt
  it("htmlentities() test 16 (mbstring / cp1251)", function () {
    expect(parser.parseCode("<?php\n$str = \"\\x88\\xa9\\xf0\\xee\\xf1\\xea\\xee\\xf8\\xed\\xfb\\xe9\";\nvar_dump(bin2hex($str), bin2hex(htmlentities($str, ENT_QUOTES, '')));\nvar_dump(htmlentities($str, ENT_QUOTES | ENT_HTML5, ''));\n?>")).toMatchSnapshot();
  });
});
