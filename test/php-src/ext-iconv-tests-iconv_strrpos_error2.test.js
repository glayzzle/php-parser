// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_strrpos_error2.phpt
  it("Test iconv_strrpos() function : error conditions - pass an unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass iconv_strrpos() an encoding that doesn't exist\n */\necho \"*** Testing iconv_strrpos() : error conditions ***\\n\";\n$haystack = 'This is an English string. 0123456789.';\n$needle = '123';\n$offset = 5;\n$encoding = 'unknown-encoding';\nvar_dump(iconv_strrpos($haystack, $needle , $encoding));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
