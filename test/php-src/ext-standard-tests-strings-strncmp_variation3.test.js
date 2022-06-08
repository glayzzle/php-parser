// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncmp_variation3.phpt
  it("Test strncmp() function: usage variations - different lengths", function () {
    expect(parser.parseCode("<?php\n/* Test strncmp() with various lengths */\necho \"*** Test strncmp() function: with different lengths ***\\n\";\n/* definitions of required variables */\n$str1 = \"Hello, World\\n\";\n$str2 = \"Hello, world\\n\";\n/* loop through to compare the strings, for various length values */\nfor($len = strlen($str1); $len >= 0; $len--) {\n  var_dump( strncmp($str1, $str2, $len) );\n}\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
