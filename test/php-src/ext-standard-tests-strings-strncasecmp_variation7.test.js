// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncasecmp_variation7.phpt
  it("Test strncasecmp() function : usage variations - binary safe", function () {
    expect(parser.parseCode("<?php\n/* Test strncasecmp() function with null terminated strings and binary values passed to 'str1' & 'str2' */\necho \"*** Test strncasecmp() function: with null terminated strings and binary inputs ***\\n\";\n/* A binary function should not expect a null terminated string, and it should treat input as a raw stream of data */\n$str1 = \"Hello\\0world\";\n$str2 = \"Hello\\0\";\n$str3 = \"Hello,\".chr(0).\"world\";\nvar_dump( strncasecmp($str1, $str2, 12) );\nvar_dump( strncasecmp($str3, \"Hello,world\", 12) );\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
