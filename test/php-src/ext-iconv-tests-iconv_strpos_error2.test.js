// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_strpos_error2.phpt
  it("Test iconv_strpos() function : error conditions - Pass unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an unknown encoding to iconv_strpos() to test behaviour\n */\necho \"*** Testing iconv_strpos() : error conditions ***\\n\";\n$haystack = 'Hello, world';\n$needle = 'world';\n$offset = 2;\n$encoding = 'unknown-encoding';\nvar_dump( iconv_strpos($haystack, $needle, $offset, $encoding) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
