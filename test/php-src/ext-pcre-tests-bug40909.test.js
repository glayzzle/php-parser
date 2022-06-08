// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug40909.phpt
  it("Bug #40909 (pcre 7.0 regression)", function () {
    expect(parser.parseCode("<?php\n$pattern =\n\"/\\s([\\w_\\.\\/]+)(?:=([\\'\\\"]?(?:[\\w\\d\\s\\?=\\(\\)\\.,'_#\\/\\\\:;&-]|(?:\\\\\\\\\\\"|\\\\\\')?)+[\\'\\\"]?))?/\";\n$context = \"<simpletag an_attribute=\\\"simpleValueInside\\\">\";\n$match = array();\nif ($result =preg_match_all($pattern, $context, $match))\n{\nvar_dump($result);\nvar_dump($match);\n}\n?>")).toMatchSnapshot();
  });
});
