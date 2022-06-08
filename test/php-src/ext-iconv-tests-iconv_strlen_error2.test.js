// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_strlen_error2.phpt
  it("Test iconv_strlen() function : error conditions - pass an unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Test iconv_strlen when passed an unknown encoding\n */\necho \"*** Testing iconv_strlen() : error ***\\n\";\n$string = 'abcdef';\n$encoding = 'unknown-encoding';\nvar_dump(iconv_strlen($string, $encoding));\n?>")).toMatchSnapshot();
  });
});
