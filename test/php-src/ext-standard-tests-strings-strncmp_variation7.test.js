// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncmp_variation7.phpt
  it("Test strncmp() function : usage variations - binary safe(null terminated strings)", function () {
    expect(parser.parseCode("<?php\n/* Test strncmp() function with binary values passed to 'str1' & 'str2' and with the null terminated strings */\necho \"*** Test strncmp() function: Checking with the null terminated strings ***\\n\";\n/* A binary function should not expect a null terminated string, and it should treat input as a raw stream of data */\n$str1 = \"Hello\\0world\";\n$str2 = \"Hello\\0\";\nvar_dump( strncmp($str1, $str2, 12) );  //expected: int(5);\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
