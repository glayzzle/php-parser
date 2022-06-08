// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncasecmp_variation3.phpt
  it("Test strncasecmp() function: usage variations - various lengths", function () {
    expect(parser.parseCode("<?php\n/* Test strncasecmp() with various lengths */\necho \"*** Test strncasecmp() function: with different lengths ***\\n\";\n/* definitions of required variables */\n$str1 = \"Hello, World\\n\";\n$str2 = \"Hello, world\\n\";\n/* loop through to compare the strings, for various length values */\nfor($len = strlen($str1); $len >= 0; $len--) {\n  var_dump( strncasecmp($str1, $str2, $len) );\n}\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
