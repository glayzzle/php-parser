// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_substr_error2.phpt
  it("Test iconv_substr() function : error conditions - Pass an unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an unknown encoding to iconv_substr() to test behaviour\n */\necho \"*** Testing iconv_substr() : error conditions ***\\n\";\n$str = 'Hello, world';\n$start = 1;\n$length = 5;\n$encoding = 'unknown-encoding';\nvar_dump( iconv_substr($str, $start, $length, $encoding));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
